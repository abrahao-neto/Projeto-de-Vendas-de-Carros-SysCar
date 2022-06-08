import { Component, OnInit } from '@angular/core';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { VendasCarroModel } from 'src/app/models/vendas-carro/vendas-carro.model';
import { VendasCarroService } from './vendas-carro.service';

@Component({
  selector: 'app-vendas-carro-read',
  templateUrl: './vendas-carro-read.component.html',
  styleUrls: ['./vendas-carro-read.component.css']
})
export class VendasCarroReadComponent implements OnInit {

  vendasCarro: VendasCarroModel[]
  displayedColumns = ['DataVendaCarro', 'ValorVendaCarro', 'AtivoVendaCarro', 'CarrosId', 'action']

  constructor(private vendasCarroService: VendasCarroService) { }

  ngOnInit(): void {
    this.vendasCarroService.read().subscribe(vendasCarro => {
      this.vendasCarro = vendasCarro
    })
  }

}
