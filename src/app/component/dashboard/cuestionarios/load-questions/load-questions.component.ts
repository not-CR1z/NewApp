import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-load-questions',
  templateUrl: './load-questions.component.html',
  styleUrls: ['./load-questions.component.css']
})
export class LoadQuestionsComponent {
  currentFile?: File;
  progress = 0;
  message = '';
  loaded: boolean = false;

  fileName = 'Seleccione un archivo';
  fileInfos?: Observable<any>;
  dict = this.dictionaryService.dictionary;

  constructor(private cuestionarioService: CuestionarioService,
    public dictionaryService:DictionaryService,
    private toastr: ToastrService,
    private router: Router,) {

  }

  selectFile(event: any): void {
    /*if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }*/
    console.log("input change")
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    this.currentFile = file;
    if(this.currentFile){
      this.fileName = this.currentFile.name;
    }
    
    //var pattern = /image-*/;
    var reader = new FileReader();

    /*if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }*/

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  

  _handleReaderLoaded(e:any) {
    console.log("_handleReaderLoaded")
    var reader = e.target;
    this.dict.invoices.invoiceFile = reader.result;
    this.dict.imEx.sourceFileName = this.fileName;
    this.loaded = true;
  }

  upload(): void {
    this.progress = 0;
    this.message = "";

    if (this.currentFile) {
      this.cuestionarioService.uploadExamFile(this.dict).subscribe(
        (event: any) => {
          
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;
          this.router.navigate(['/dashboard/view-questions']);
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }
  }
}
