import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { alunosFormComponent } from './alunos-form/alunos-form.component';
import { alunosListaComponent } from './alunos-lista/alunos-lista.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'form', component: alunosFormComponent },
      { path: 'form/:id', component: alunosFormComponent },
      { path: 'lista', component: alunosListaComponent },
      { path: '', redirectTo: '/alunos/lista', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class alunosRoutingModule {}
