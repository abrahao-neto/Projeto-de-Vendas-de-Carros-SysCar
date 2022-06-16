import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { VendasCarroModel } from 'src/app/models/vendas-carro/vendas-carro.model';
import { CarrosService } from '../../carros/carros-read/carros.service';
import { VendasCarroService } from '../vendas-carro-read/vendas-carro.service';


@Component({
  selector: 'app-vendascarro-dialog-create',
  templateUrl: './vendascarro-dialog-create.component.html',
  styleUrls: ['./vendascarro-dialog-create.component.css']
})
export class VendascarroDialogCreateComponent {

  isChecked = true;

  hide = true;
  @Input() model;
  carros: CarrosModel[] = [];
  vendasCarro: VendasCarroModel[] = [];
  selectedValue: string;


  constructor(
    public dialogRef: MatDialogRef<VendascarroDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VendasCarroModel,
    @Inject(MAT_DIALOG_DATA) public carro: CarrosModel,
    public carrosServices: CarrosService, public vendasCarroService: VendasCarroService,
    public router: Router) {

    carrosServices.read()
      .subscribe(carros => {
        this.carros = carros;
      }, error => console.log(error));

  }


  createVendasCarro(): void {
    this.vendasCarroService.create(this.data).subscribe(() => {
      this.vendasCarroService.showMessage('Produto criado!')
      this.router.navigate(['/carros'])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
