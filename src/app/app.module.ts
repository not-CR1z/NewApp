import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

// Interceptors
import { AddTokenInterceptor } from './helpers/add-token.interceptor';


//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { BienvenidaComponent } from './component/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './component/inicio/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { CuestionariosComponent } from './component/dashboard/cuestionarios/cuestionarios.component';
import { AngularMaterialModule } from './angular-material.module';
import { StarRatingModule } from 'angular-star-rating';
import { AddExamComponent } from './component/dashboard/cuestionarios/add-exam/add-exam.component';
import { CookieService } from 'ngx-cookie-service';
import { DictionaryService } from './services/dictionary.service';
import { AddQuestionsComponent } from './component/dashboard/cuestionarios/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './component/dashboard/cuestionarios/view-questions/view-questions.component';
import { LoadQuestionsComponent } from './component/dashboard/cuestionarios/load-questions/load-questions.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { UpdateExamComponent } from './component/dashboard/cuestionarios/update-exam/update-exam.component';
import { UpdateQuestionsComponent } from './component/dashboard/cuestionarios/update-questions/update-questions.component';
import { UpdateAnswersComponent } from './component/dashboard/cuestionarios/update-answers/update-answers.component';
import { DialogLoadAnswerComponent } from './shared/dialog-load-answer/dialog-load-answer.component';
import { AbcPipe } from './pipes/abc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    CuestionariosComponent,
    AddExamComponent,
    AddQuestionsComponent,
    ViewQuestionsComponent,
    LoadQuestionsComponent,
    ConfirmDialogComponent,
    UpdateExamComponent,
    UpdateQuestionsComponent,
    UpdateAnswersComponent,
    DialogLoadAnswerComponent,
    AbcPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularMaterialModule,
    StarRatingModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    CookieService,
    DictionaryService,
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
