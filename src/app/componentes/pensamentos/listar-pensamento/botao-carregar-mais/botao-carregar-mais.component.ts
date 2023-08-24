import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {

  //decoro essa propriedade com @input para que essa propriedade consiga receber itens do componente pai
  @Input() haMaisPensamentos: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
