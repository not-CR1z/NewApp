import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './component/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './component/inicio/login/login.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CuestionariosComponent } from './component/dashboard/cuestionarios/cuestionarios.component';
import { NuevoCuestionarioComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { AddExamComponent } from './component/dashboard/cuestionarios/add-exam/add-exam.component';
import { AddQuestionsComponent } from './component/dashboard/cuestionarios/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './component/dashboard/cuestionarios/view-questions/view-questions.component';
import { LoadQuestionsComponent } from './component/dashboard/cuestionarios/load-questions/load-questions.component';
import { UpdateExamComponent } from './component/dashboard/cuestionarios/update-exam/update-exam.component';
import { UpdateQuestionsComponent } from './component/dashboard/cuestionarios/update-questions/update-questions.component';
import { UpdateAnswersComponent } from './component/dashboard/cuestionarios/update-answers/update-answers.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: CuestionariosComponent },
      { path: 'add-exam', component: AddExamComponent },
      { path: 'view-questions', component: ViewQuestionsComponent },
      { path: 'add-questions', component: AddQuestionsComponent },
      { path: 'load-questions', component: LoadQuestionsComponent },
      { path: 'update-exam', component: UpdateExamComponent },
      { path: 'update-questions', component: UpdateQuestionsComponent },
      { path: 'update-answers', component: UpdateAnswersComponent },
      /*{ path: 'cambiarPassword', component: CambiarPaswordComponent },
      { path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children: [
          { path: 'pasoUno', component: PasoUnoComponent },
          { path: 'pasoDos', component: PasoDosComponent }
        ]}*/
    ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }