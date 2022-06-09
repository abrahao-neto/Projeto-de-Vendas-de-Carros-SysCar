import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { TiposcarroDialogDeleteComponent } from '../tiposcarro-dialog-delete/tiposcarro-dialog-delete.component';
import { TiposcarroDialogUpdateComponent } from '../tiposcarro-dialog-update/tiposcarro-dialog-update.component';
import { TiposCarroService } from './tipos-carro.service';

@Component({
  selector: 'app-tipos-carro-read',
  templateUrl: './tipos-carro-read.component.html',
  styleUrls: ['./tipos-carro-read.component.css']
})
export class TiposCarroReadComponent implements OnInit {

  tiposCarros: TiposCarroModel[]
  Descricao: string;
  displayedColumns = ['Descricao', 'action']

  constructor(private tiposCarroService: TiposCarroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tiposCarroService.read().subscribe(tiposCarros => {
      this.tiposCarros = tiposCarros
    })
  }

  openDialogDelete(): void {
    this.dialog.open(TiposcarroDialogDeleteComponent, {
      width: '500px',
    });
  }

  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(TiposcarroDialogUpdateComponent, {
      width: '500px',
      data: { Categoria: this.Descricao },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.Descricao = result;
    });
  }

}

