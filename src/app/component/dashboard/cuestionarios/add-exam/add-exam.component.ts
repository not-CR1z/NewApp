import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent {

  examData = {
    name: '',
    description: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    difficultyId: 0,
    totalQuestions: 0,
    totalPoints: 0,
  }

  constructor(public dictionaryService: DictionaryService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router) {
  }

  loading = false;
  saveExam(): void {
    this.loading = true;
    let dict = this.dictionaryService.dictionary;
    dict.agreements.agreementName = this.examData.name;
    dict.agreements.agreementDescription = this.examData.description;
    dict.agreements.agreementCategoryId = this.examData.hours;
    dict.agreements.agreementFieldId = this.examData.minutes;
    dict.agreements.agreementPaymentTypeId = this.examData.seconds;
    dict.agreements.receiverId = this.examData.difficultyId;
    dict.agreements.totalCutoffPeriodId = this.examData.totalQuestions;
    dict.agreements.partialCutoffUnits = this.examData.totalPoints;
    this.cuestionarioService.guardarCuestionario(dict).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/dashboard'])
      this.toastr.success('El examen fue registrado con éxito', 'Examen registrado');
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      //this.login.reset();
    })
  }
}