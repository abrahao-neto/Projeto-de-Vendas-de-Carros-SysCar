import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VendasCarroModel } from 'src/app/models/vendas-carro/vendas-carro.model';

@Component({
  selector: 'app-vendascarro-dialog-delete',
  templateUrl: './vendascarro-dialog-delete.component.html',
  styleUrls: ['./vendascarro-dialog-delete.component.css']
})
export class VendascarroDialogDeleteComponent {

  vendasCarro: VendasCarroModel[];


  constructor(public dialogRef: MatDialogRef<VendascarroDialogDeleteComponent>) { }


}
