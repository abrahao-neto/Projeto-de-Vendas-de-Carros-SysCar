import { Component, Inject, Input, Optional, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrosModel } from 'src/app/models/carros/carros.model';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { CoresService } from '../../cores/cores-read/cores.service';
import { TiposCarroService } from '../../tiposcarro/tipos-carro-read/tipos-carro.service';
import { CarrosService } from '../carros-read/carros.service';

@Component({
  selector: 'app-carros-dialog-update',
  templateUrl: './carros-dialog-update.component.html',
  styleUrls: ['./carros-dialog-update.component.css']
})
export class CarrosDialogUpdateComponent {

  @Input() model;
  carros: CarrosModel[] = [];
  cores: CoresModel[] = [];
  TiposCarro: TiposCarroModel[] = [];
  coresService: CoresService;
  tiposCarroService: TiposCarroService;

  constructor(
    @Optional() public dialogRef: MatDialogRef<CarrosDialogUpdateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CarrosModel,
    coresService: CoresService,
    tiposCarroService: TiposCarroService,
    private router: Router,
    private route: ActivatedRoute,
    public carrosServices: CarrosService,
  ) {

    coresService.read()
      .subscribe(cores => {
        this.cores = cores;
      }, error => console.log(error));

    tiposCarroService.read()
      .subscribe(TiposCarro => {
        this.TiposCarro = TiposCarro;
      }, error => console.log(error));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.carrosServices.readById(id).subscribe((data) => {
      this.data = data;
    });
  }

  updateCarros(): void {
    this.carrosServices.update(this.data).subscribe(() => {
      this.carrosServices.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }


}
