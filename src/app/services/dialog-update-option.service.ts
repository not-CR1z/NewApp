import { Injectable } from '@angular/core';
import { DialogLoadAnswer, DialogLoadAnswerComponent } from '../shared/dialog-load-answer/dialog-load-answer.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogUpdateOptionService {

  constructor(private modal: MatDialog) { }

  updateOptions(data: DialogLoadAnswer): Observable<any>{
    return this.modal
      .open(DialogLoadAnswerComponent,{
        width: '500px',
        data,
      })
      .afterClosed();
  
  }
}
