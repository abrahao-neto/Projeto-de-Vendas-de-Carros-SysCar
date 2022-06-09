import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';

@Component({
  selector: 'app-tiposcarro-dialog-delete',
  templateUrl: './tiposcarro-dialog-delete.component.html',
  styleUrls: ['./tiposcarro-dialog-delete.component.css']
})
export class TiposcarroDialogDeleteComponent {

  TiposCarro: TiposCarroModel[];

  constructor(public dialogRef: MatDialogRef<TiposcarroDialogDeleteComponent>) { }

}
