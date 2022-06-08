import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { CoresService } from '../../cores/cores-read/cores.service';
import { TiposCarroService } from '../../tiposcarro/tipos-carro-read/tipos-carro.service';
import { CarrosService } from '../carros-read/carros.service';

@Component({
  selector: 'app-carros-dialog-create',
  templateUrl: './carros-dialog-create.component.html',
  styleUrls: ['./carros-dialog-create.component.css']
})
export class CarrosDialogCreateComponent {


  @Input() model;
  cores: CoresModel[] = [];
  TiposCarro: TiposCarroModel[] = [];
  coresService: CoresService;
  tiposCarroService: TiposCarroService;

  constructor(
    public dialogRef: MatDialogRef<CarrosDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarrosModel,
    coresService: CoresService, tiposCarroService: TiposCarroService,
    public carrosServices: CarrosService,
    public router: Router) {

    coresService.read()
      .subscribe(cores => {
        this.cores = cores;
      }, error => console.log(error));

    tiposCarroService.read()
      .subscribe(TiposCarro => {
        this.TiposCarro = TiposCarro;
      }, error => console.log(error));
  }


  createCarro(): void {
    this.carrosServices.create(this.data).subscribe(() => {
      this.carrosServices.showMessage('Produto criado!')
      this.router.navigate(['/carros'])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
