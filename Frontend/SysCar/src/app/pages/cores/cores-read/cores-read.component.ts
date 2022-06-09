import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { CoresDialogDeleteComponent } from '../cores-dialog-delete/cores-dialog-delete.component';
import { CoresDialogUpdateComponent } from '../cores-dialog-update/cores-dialog-update.component';
import { CoresService } from './cores.service';
//import { CarrosService } from 'src/app/services/carros/carros.service';

@Component({
  selector: 'app-cores-read',
  templateUrl: './cores-read.component.html',
  styleUrls: ['./cores-read.component.css']
})
export class CoresReadComponent {

  cores: CoresModel[];
  Descricao: string;
  displayedColumns = ['Descricao', 'action']

  constructor(private coresService: CoresService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.coresService.read().subscribe(cores => {
      this.cores = cores
    })
  }

  openDialogDelete(): void {
    this.dialog.open(CoresDialogDeleteComponent, {
      width: '500px',
    });
  }

  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(CoresDialogUpdateComponent, {
      width: '500px',
      data: { Categoria: this.Descricao },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.Descricao = result;
    });
  }

}
