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
  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit() {
    this.pensamentoService.listar().subscribe((listaPensamento) => {
      this.listaPensamento = listaPensamento
    })
  }
}
