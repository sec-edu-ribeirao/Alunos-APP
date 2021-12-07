import { Injectable } from '@angular/core';
import { Aluno } from './alunos/aluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  apiURL: string = environment.apiURLBase + '/api/alunos';

  constructor(private http: HttpClient) {}

  salvar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.apiURL}`, aluno);
  }

  getAluno(): Aluno {
    let aluno: Aluno = new Aluno();
    return aluno;
  }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiURL);
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  atualizar(aluno: Aluno): Observable<any> {
    return this.http.put<Aluno>(`${this.apiURL}/${aluno.id}`, aluno);
  }

  deletar(aluno: Aluno): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${aluno.id}`);
  }
}
