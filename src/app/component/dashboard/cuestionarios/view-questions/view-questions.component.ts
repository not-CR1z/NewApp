import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { dictionary } from 'src/app/models/dictionary';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DialogService } from 'src/app/services/dialog.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {
  questions: any = [];
  quizz_title: string;

  constructor(private cuestionarioService: CuestionarioService,
    private dictionaryService: DictionaryService,
    private dialog: DialogService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.cuestionarioService.getQuestions(this.dictionaryService.dictionary).subscribe({
      next: (data) => {
        this.quizz_title = this.dictionaryService.dictionary.agreements.agreementName;
        this.questions = JSON.parse(data.jsonResponseObject).QUESTION;
        console.log(data.jsonResponseObject);

        //this.toastr.success('El cuestionario fue registrado con éxito', 'Cuestionario registrado');
        //this.router.navigate(['/dashboard'])  
      }, error: (error) => {
        console.log(error);

        //this.toastr.error(error.error.message, 'Error');
        //this.login.reset();
      }
    });
  }

  deleteQuestion(questionId: number): void {
    this.dialog
      .confirmDialog({
        title: 'Confirmar Acción',
        message: '¿Está seguro que quiere eliminar la pregunta y todas sus respuestas?',
        confirmCaption: 'Confirmar',
        cancelCaption: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          let dictTemp: dictionary = new dictionary();
          dictTemp = this.dictionaryService.dictionary;
          dictTemp.invoices.fileId = questionId;
          this.dictionaryService.dictionary = dictTemp;
          this.cuestionarioService.deleteQuestion(this.dictionaryService.dictionary).subscribe({
            next: (data) => {
              console.log(data);
              if (data.state == 0) {//Aceptado
                this.toastr.success('La pregunta ha sido eliminada con éxito', 'Eliminación pregunta');
                this.getQuestions();
              }
              else {
                this.toastr.success(data.message?.text, 'Eliminación pregunta');
              }

              //this.router.navigate(['/dashboard'])
            }, error: (error) => {
              console.log(error);
              this.toastr.error(error.error.message, 'Error');
            }
          });
        }
      });
  }

  toUpdateQuestion(questionId: number) {
    let dictTemp: dictionary = new dictionary();
    dictTemp = this.dictionaryService.dictionary;
    dictTemp.invoices.invoiceReferenceId = questionId;
    this.dictionaryService.dictionary = dictTemp;
    this.router.navigate(['/dashboard/update-questions'])
  }

  toUpdateAnswer(questionId: number) {
    let dictTemp: dictionary = new dictionary();
    dictTemp = this.dictionaryService.dictionary;
    dictTemp.invoices.fileId = questionId;
    this.dictionaryService.dictionary = dictTemp;
    this.router.navigateByUrl('/dashboard/update-answers')
  }
}