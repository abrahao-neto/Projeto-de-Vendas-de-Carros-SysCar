import { Component, OnInit } from '@angular/core';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { TiposCarroService } from './tipos-carro.service';

@Component({
  selector: 'app-tipos-carro-read',
  templateUrl: './tipos-carro-read.component.html',
  styleUrls: ['./tipos-carro-read.component.css']
})
export class TiposCarroReadComponent implements OnInit {

  tiposCarros: TiposCarroModel[]
  displayedColumns = ['Descricao', 'action']

  constructor(private tiposCarroService: TiposCarroService) { }

  ngOnInit(): void {
    this.tiposCarroService.read().subscribe(tiposCarros => {
      this.tiposCarros = tiposCarros
    })
  }

}
