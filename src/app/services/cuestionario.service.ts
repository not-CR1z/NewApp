import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Observable } from 'rxjs';
import { dictionary } from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/exams'
   }

   guardarCuestionario(cuestionario: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/examAdd", cuestionario);
   }
   
   getExams(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/examsListByUser", dictionary);
   }
   
   getQuestions(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/questionsListByExam", dictionary);
   }

   saveQuestion(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/questionAdd", dictionary);
   }

   deleteQuestion(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/questionDelete", dictionary);
   }

   uploadExamFile(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/uploadExamFile", dictionary);
   }

   deleteExam(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/examDelete", dictionary);
   }

   updateExam(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/examUpdate", dictionary);
   }

   getDataExam(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/examGetData", dictionary);
   }

   getDataQuestion(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/questionGetData", dictionary);
   }

   updateQuestion(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/questionUpdateData", dictionary);
   }

   getDataAnswers(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/answersGetData", dictionary);
   }

   updateAnswerOption(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/answerUpdateData", dictionary);
   }

   getAnswersByQuestion(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/getAnswersListByQuestionId", dictionary);
   }

   updateAnswersList(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/updateAnswerListData", dictionary);
   }
   addAnswer(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/addDataAnswer", dictionary);
   }
   deleteAnswer(dictionary: dictionary): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "/answerDelete", dictionary);
   }
   
}