import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }


  listaPensamentos = [
    {
      conteudo: 'I think angular nice',
      autoria: 'Patrick',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I hate angular',
      autoria: 'Thay',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Its sound bad',
      autoria: 'DEluyx',
      modelo: 'modelo1'
    },
  ];

  ngOnInit(): void {
  }

}
