import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CarrosModel } from 'src/app/models/carros/carros.model';



@Component({
  selector: 'app-carros-dialog-delete',
  templateUrl: './carros-dialog-delete.component.html',
  styleUrls: ['./carros-dialog-delete.component.css']
})
export class CarrosDialogDeleteComponent {

  carros: CarrosModel[];
  NomeCarro: string;

  constructor(public dialogRef: MatDialogRef<CarrosDialogDeleteComponent>) { }

  Carro() {
    this.NomeCarro;
  }

}
