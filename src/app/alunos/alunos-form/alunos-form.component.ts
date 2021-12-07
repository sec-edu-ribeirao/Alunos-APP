import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Aluno } from '../aluno';
import { AlunosService } from 'src/app/alunos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css'],
})
export class alunosFormComponent implements OnInit {
  aluno: Aluno;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: AlunosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.aluno = service.getAluno();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getAlunoById(this.id).subscribe(
          (response) => (this.aluno = response),
          (errorResponse) => (this.aluno = new Aluno())
        );
      }
    });
  }

  voltarParaListagem() {
    this.router.navigate(['/alunos/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.aluno).subscribe(
        (response) => {
          this.success = true;
          this.errors = [];
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o aluno.'];
        }
      );
    } else {
      this.service.salvar(this.aluno).subscribe(
        (response) => {
          this.success = true;
          this.errors = [];
          this.aluno = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }
}
