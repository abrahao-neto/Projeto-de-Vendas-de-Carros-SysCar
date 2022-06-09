import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CarrosModel } from 'src/app/models/carros/carros.model';

@Component({
  selector: 'app-cores-dialog-delete',
  templateUrl: './cores-dialog-delete.component.html',
  styleUrls: ['./cores-dialog-delete.component.css']
})
export class CoresDialogDeleteComponent {

  carros: CarrosModel[];

  constructor(public dialogRef: MatDialogRef<CoresDialogDeleteComponent>) { }

}
