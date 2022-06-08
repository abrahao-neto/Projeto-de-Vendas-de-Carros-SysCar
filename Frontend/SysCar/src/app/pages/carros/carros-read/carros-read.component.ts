import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { CarrosDialogDeleteComponent } from '../carros-dialog-delete/carros-dialog-delete.component';
import { CarrosDialogUpdateComponent } from '../carros-dialog-update/carros-dialog-update.component';
import { CarrosService } from './carros.service';

@Component({
  selector: 'app-carros-read',
  templateUrl: './carros-read.component.html',
  styleUrls: ['./carros-read.component.css']
})
export class CarrosReadComponent implements OnInit {

  carros: CarrosModel[]
  displayedColumns = ['NomeCarro', 'CoresCarroId', 'TiposCarroId', 'action']

  constructor(private carrosService: CarrosService, public dialog: MatDialog) { }

  Id: number
  NomeCarro: string
  CoresCarroId: string
  TiposCarroId: string

  ngOnInit(): void {
    this.carrosService.read().subscribe(carros => {
      this.carros = carros
    })
  }

  openDialogDelete(): void {
    this.dialog.open(CarrosDialogDeleteComponent, {
      width: '500px',
    });
  }

  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(CarrosDialogUpdateComponent, {
      width: '500px',
      data: { Nome: this.NomeCarro, Cores: this.CoresCarroId, Categoria: this.TiposCarroId },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.NomeCarro = result;
    });
  }
}
