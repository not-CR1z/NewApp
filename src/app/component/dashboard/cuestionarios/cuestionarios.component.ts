import { CuestionarioService } from './../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/models/global';
import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';
import { DictionaryService } from './../../../services/dictionary.service';
import { Router } from '@angular/router';
import { dictionary } from 'src/app/models/dictionary';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent {
  quizzes: any = [];
  nombreUsuario: string;
  result: string = '';
  loading = true;

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

  constructor(
    private cuestionarioService: CuestionarioService,
    private dictionaryService: DictionaryService,
    private router: Router,
    private dialog: DialogService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getExams();
  }

  getNombreUsuario(): void {
    //this.nombreUsuario = this.loginService.getTokenDecoded();
    this.nombreUsuario = this.dictionaryService.dictionary.ldap.givenName;
  }

  getExams(): void {
    this.cuestionarioService.getExams(this.dictionaryService.dictionary).subscribe({
      next: (data) => {

        this.quizzes = JSON.parse(data.jsonResponseObject).EXAM;
        this.loading = false;
        
        //this.toastr.success('El cuestionario fue registrado con éxito', 'Cuestionario registrado');
        //this.router.navigate(['/dashboard'])
      }, error: (error) => {
        console.log(error);

        //this.toastr.error(error.error.message, 'Error');
        //this.login.reset();
      }
    });
  }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }

  openUpdate(exam_id: number): void{
    let dictTemp: dictionary = new dictionary();
    dictTemp = this.dictionaryService.dictionary;
    dictTemp.agreements.agreementId = exam_id;
    this.dictionaryService.dictionary = dictTemp;
    this.router.navigateByUrl("/dashboard/update-exam");
  }

  questions(exam_id: any, quiz_name:string): void {
    let dictTemp: dictionary = new dictionary();
    dictTemp = this.dictionaryService.dictionary;
    dictTemp.agreements.agreementId = exam_id;
    dictTemp.agreements.agreementName = quiz_name;    
    this.dictionaryService.dictionary = dictTemp;
    this.router.navigateByUrl("/dashboard/view-questions");
  }

  deleteExam(examId: number): void {
    this.dialog
      .confirmDialog({
        title: 'Confirmar Acción',
        message: '¿Está seguro que quiere eliminar el examen?',
        confirmCaption: 'Confirmar',
        cancelCaption: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          let dictTemp: dictionary = new dictionary();
          dictTemp = this.dictionaryService.dictionary;
          dictTemp.agreements.agreementId = examId;
          this.dictionaryService.dictionary = dictTemp;
          this.cuestionarioService.deleteExam(this.dictionaryService.dictionary).subscribe({
            next: (data) => {
              console.log(data);
              if (data.state == 0) {//Aceptado
                this.toastr.success('El exámen ha sido eliminado con éxito');
                this.getExams();
              }
              else {
                this.toastr.success(data.message?.text, 'Eliminación Exámen');
              }

              this.router.navigate(['/dashboard'])

            }, error: (error) => {
              console.log(error);
              this.toastr.error(error.error.message, 'Error');
            }
          });
        }
      });
  };
}