import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.rounter.navigate(["/listarPensamento"])
    })
  }

  cancelarPensamento() {
    this.rounter.navigate(["/listarPensamento"])
  }

  constructor(
    private service: PensamentoService,
    private rounter: Router
  ) {

  }

  ngOnInit(): void {

  }



}
