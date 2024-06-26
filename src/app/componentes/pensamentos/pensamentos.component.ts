import { Component, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  pensamento : Pensamento = {
    id: 1,
    conteudo: 'I Love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
