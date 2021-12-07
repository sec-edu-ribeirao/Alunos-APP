import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { alunosRoutingModule } from './alunos-routing.module';
import { alunosFormComponent } from './alunos-form/alunos-form.component';
import { alunosListaComponent } from './alunos-lista/alunos-lista.component';

@NgModule({
  declarations: [alunosFormComponent, alunosListaComponent],
  imports: [CommonModule, alunosRoutingModule, FormsModule],
  exports: [alunosFormComponent, alunosListaComponent],
})
export class AlunosModule {}
