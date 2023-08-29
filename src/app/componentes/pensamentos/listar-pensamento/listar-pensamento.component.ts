import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamento) => {
      this.listaPensamento = listaPensamento
    })
  }

  carregarMaisPensamento() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamento => {
        this.listaPensamento.push(...listaPensamento); // operator indico que quero os itens que estão na lista mais os que vão vir
        if (!listaPensamento.length) {
          this.haMaisPensamentos = false;
        }
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1

    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamento => {
        this.listaPensamento = listaPensamento;
      })
  }

  listarFavoritos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.favoritos = true

    this.pensamentoService.listar(this.paginaAtual, this.filtro , this.favoritos)
      .subscribe(listarPensamentosFavoritos => {
        this.listaPensamento = listarPensamentosFavoritos;
    })
  }
}
