import { dictionary } from 'src/app/models/dictionary';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Answer, Question } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DialogService } from 'src/app/services/dialog.service';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { DialogUpdateOptionService } from 'src/app/services/dialog-update-option.service';

@Component({
  selector: 'app-update-answers',
  templateUrl: './update-answers.component.html',
  styleUrls: ['./update-answers.component.css']
})
export class UpdateAnswersComponent {

  questionData: Question = new Question();
  answerData: Answer = new Answer();

  constructor(public dictionaryService: DictionaryService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router,
    private modal: DialogUpdateOptionService,
    private dialog: DialogService,
  ) { }

  ngOnInit(): void {
    this.getQuestionList();
  }

  editOption(id: number, index: number) {
    this.cuestionarioService.getDataAnswers(this.dictionaryService.dictionary).subscribe({
      next: (data) => {
        this.answerData.answers = JSON.parse(data.jsonResponseObject).ANSWER[index];
        console.log(this.answerData.answers.text);

        this.modal.updateOptions({
          modalId: id,
          title: 'Editar opción',
          text: this.answerData.answers.text,
          isCorrect: this.answerData.answers.is_correct,
          confirmCaption: 'Confirmar',
          cancelCaption: 'Cancelar',

        }).subscribe((confirmed) => {
          if (confirmed) {
            next: {
              this.getQuestionList()
            }
          }
        })
      }, error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      }
    })
  }

  getQuestionList(): void {
    this.cuestionarioService.getAnswersByQuestion(this.dictionaryService.dictionary).subscribe({
      next: (data) => {
        this.questionData = JSON.parse(data.jsonResponseObject).QUESTION[0];
        console.log(this.questionData);
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  saveAnswer(): void {
    let answer: Answer = new Answer();
    answer.text = this.answerData.text;
    answer.is_correct = this.answerData.is_correct;

    if (answer.text === "") {
      this.toastr.error('Agregue una respuesta')
    }
    else if (answer.text === undefined) {
      this.toastr.error('Agregue una respuesta')
    }
    else {
      this.questionData.answers.push(answer);
      let dict = this.dictionaryService.dictionary;
      dict.sif.jsonResponseObject = JSON.stringify(this.questionData);
      dict.invoices.invoicesBillNumberField = answer.text;
      dict.invoices.totalDataRecords = +answer.is_correct;
      this.cuestionarioService.addAnswer(dict).subscribe(data => {
        this.toastr.success('Respuesta agregada a la lista', 'Opción registrada');
        this.getQuestionList();
      }, error => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      })
      this.answerData.text = '';
      this.answerData.is_correct = 0;
    }
  }

  removeAnswer(answerId: number): void {
    this.dialog
      .confirmDialog({
        title: 'Eliminar respuesta?',
        message: '¿Está seguro que quiere eliminar la respuesta?',
        confirmCaption: 'Confirmar',
        cancelCaption: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          let dictTemp: dictionary = new dictionary();
          dictTemp = this.dictionaryService.dictionary;
          dictTemp.invoices.invoiceId = answerId;
          this.dictionaryService.dictionary = dictTemp;
          this.cuestionarioService.deleteAnswer(this.dictionaryService.dictionary).subscribe({
            next: (data) => {
              console.log(data);
              if (data.state == 0) {//Aceptado
                this.toastr.success('La respuesta ha sido eliminada con éxito', 'Respuesta eliminada');
                this.getQuestionList();
              }
            }, error: (error) => {
              console.log(error);
              this.toastr.error(error.error.message, 'Error');
            }
          });
        }
      });
  }
}