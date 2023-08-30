import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Answer, Question } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent {
  questionData: Question = new Question();
  answerData: Answer = new Answer();
  question_id: number;

  constructor(public dictionaryService: DictionaryService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router,) {
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.cuestionarioService.getDataQuestion(this.dictionaryService.dictionary).subscribe({
      next: (data) => {
        this.question_id = this.dictionaryService.dictionary.invoices.invoiceReferenceId;
        this.questionData = JSON.parse(data.jsonResponseObject).EXAM[0];
        console.log(data.jsonResponseObject);
        console.log(this.questionData);
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  updateQuestion(): void {
    let dict = this.dictionaryService.dictionary;
    dict.agreements.agreementNotes = this.questionData.text;
    dict.agreements.agreementPaymentTypeId = this.questionData.type_id;
    dict.agreements.agreementId = this.question_id;
    this.cuestionarioService.updateQuestion(dict).subscribe(data => {
      this.toastr.success('Los cambios se registraron con éxito', 'Cambios registrados');
    }, error => {
      console.log(error);

      this.toastr.error(error.error.message, 'Error');
    })
    this.getQuestions();
    this.router.navigate(['/dashboard/view-questions'])
  }
}