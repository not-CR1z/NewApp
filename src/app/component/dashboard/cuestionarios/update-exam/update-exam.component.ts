import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  examData = {
    name: '',
    description: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    difficulty_id: '',
    total_questions: 0,
    total_points: 0,
  }
  constructor(public dictionaryService: DictionaryService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.getExams();
  }

  getExams(): void {
    this.cuestionarioService.getDataExam(this.dictionaryService.dictionary).subscribe({
      next: (data) => {
        this.examData = JSON.parse(data.jsonResponseObject).EXAM[0];
        //String(this.examData.difficulty_id);
        console.log(this.examData);
      }, error: (error) => {
        console.log(error);
      }
    });
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
    dict.agreements.receiverId = parseInt(this.examData.difficulty_id);
    dict.agreements.totalCutoffPeriodId = this.examData.total_questions;
    dict.agreements.partialCutoffUnits = this.examData.total_points;
    this.dictionaryService.dictionary = dict;
    this.cuestionarioService.updateExam(dict).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/dashboard'])
      this.toastr.success('Cambios registrados con éxito', 'Examen registrado');
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      //this.login.reset();
    })
  }
}