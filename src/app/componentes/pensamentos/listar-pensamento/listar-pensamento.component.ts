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
  filtro: String = '';

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
    this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamento) => {
      this.listaPensamento = listaPensamento
    })
  }

  carregarMaisPensamento() {
    this.pensamentoService.listar(++this.paginaAtual)
      .subscribe(listaPensamento => {
        this.listaPensamento.push(...listaPensamento); // operator indico que quero os itens que estão na lista mais os que vão vir
        if (!listaPensamento.length) {
          this.haMaisPensamentos = false;
        }
      })
  }
}
