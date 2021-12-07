import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/alunos.service';
import { Aluno } from '../aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css'],
})
export class alunosListaComponent implements OnInit {
  alunos!: Aluno[];
  alunoSelecionado!: Aluno;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(private service: AlunosService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((response) => (this.alunos = response));
  }

  novoCadastro() {
    this.router.navigate(['/alunos/form']);
  }

  preparaDelete(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  deletaraluno() {
    this.service.deletar(this.alunoSelecionado).subscribe(
      (response) => {
        (this.mensagemSucesso = 'Aluno deletado com sucesso!'), this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao deletar o aluno!')
    );
  }
}
