import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { VendasCarroModel } from 'src/app/models/vendas-carro/vendas-carro.model';
import { VendascarroDialogDeleteComponent } from '../vendascarro-dialog-delete/vendascarro-dialog-delete.component';
import { VendascarroDialogUpdateComponent } from '../vendascarro-dialog-update/vendascarro-dialog-update.component';
import { VendasCarroService } from './vendas-carro.service';

@Component({
  selector: 'app-vendas-carro-read',
  templateUrl: './vendas-carro-read.component.html',
  styleUrls: ['./vendas-carro-read.component.css']
})
export class VendasCarroReadComponent implements OnInit {

  DataVendaCarro: Date
  ValorVendaCarro: number
  AtivoVendaCarro: boolean
  CarrosId: string

  vendasCarro: VendasCarroModel[]
  displayedColumns = ['DataVendaCarro', 'ValorVendaCarro', 'AtivoVendaCarro', 'CarrosId', 'action']

  constructor(private vendasCarroService: VendasCarroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vendasCarroService.read().subscribe(vendasCarro => {
      this.vendasCarro = vendasCarro
    })
  }

  openDialogDelete(): void {
    this.dialog.open(VendascarroDialogDeleteComponent, {
      width: '500px',
    });
  }

  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(VendascarroDialogUpdateComponent, {
      width: '500px',
      data: {
        Data: this.DataVendaCarro, Valor: this.ValorVendaCarro, Ativo: this.AtivoVendaCarro,
        Carro: this.CarrosId
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.CarrosId = result;
    });
  }

}
