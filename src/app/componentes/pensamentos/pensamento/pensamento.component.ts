import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'I Love Angular',
    autoria: 'Cleiton',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor( private service: PensamentoService) { }

  ngOnInit() {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    if (this.pensamento.favorito) {
      return 'ativo'
    }

    return 'inativo'
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento)
      .subscribe(() => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
        //splice removo uma posição do array passo a posição do index e quantos vou retirar
      });
  }
}
