import { ToastrService } from 'ngx-toastr';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { dictionary } from 'src/app/models/dictionary';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { UpdateAnswersComponent } from 'src/app/component/dashboard/cuestionarios/update-answers/update-answers.component';

@Component({
  selector: 'app-dialog-load-answer',
  templateUrl: './dialog-load-answer.component.html',
  styleUrls: ['./dialog-load-answer.component.css']
})
export class DialogLoadAnswerComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogLoadAnswerComponent>, 
    public dictionaryService: DictionaryService, 
    public cuestionarioService: CuestionarioService,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: DialogLoadAnswer ) {
  }

  updateOption(id: number, text: string, isCorrect:number){
    let dict = this.dictionaryService.dictionary;
    dict.invoices.invoiceId = id;
    dict.invoices.invoicesBillNumberField = text;
    dict.invoices.totalDataRecords = +isCorrect;
    this.cuestionarioService.updateAnswerOption(dict).subscribe(data => {
      this.toastr.success('El cambio se registró con éxito', 'Cambio registrado');
    }, error => {
      console.log(error);
      this.toastr.error(error.error.message, 'Error');
    })
    .unsubscribe;
  }
}

export interface DialogLoadAnswer {
  modalId: number;
  title: string;
  text: string;
  isCorrect: number;
  confirmCaption: string;
  cancelCaption: string 
}