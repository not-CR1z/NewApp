import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answer, Question } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  questionData: Question = new Question();
  answerData: Answer = new Answer();
  option_correct: boolean;

  constructor(public dictionaryService: DictionaryService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.questionData.answers = [];
  }

  saveQuestion(): void {
    let dict = this.dictionaryService.dictionary;
    dict.sif.jsonResponseObject = JSON.stringify(this.questionData);
    this.cuestionarioService.saveQuestion(dict).subscribe(data => {

      this.toastr.success('La pregunta fue registrada con éxito', 'Pregunta registrada');
      //Limpiar todo o volver a la página anterior?
      //this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error);

      this.toastr.error(error.error.message, 'Error');
      //this.login.reset();
    })
    this.router.navigate(['/dashboard/view-questions'])
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
      this.answerData.text = '';
      this.answerData.is_correct = 0;
    }
  }

  removeAnswer(index: number): void {
    this.questionData.answers.splice(index, 1);
  }
}