import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { TiposCarroService } from '../tipos-carro-read/tipos-carro.service';

@Component({
  selector: 'app-tiposcarro-dialog-create',
  templateUrl: './tiposcarro-dialog-create.component.html',
  styleUrls: ['./tiposcarro-dialog-create.component.css']
})
export class TiposcarroDialogCreateComponent {

  @Input() model;

  constructor(public dialogRef: MatDialogRef<TiposcarroDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TiposCarroModel,
    public tiposCarroServices: TiposCarroService,
    public router: Router) { }

  createCarro(): void {
    this.tiposCarroServices.create(this.data).subscribe(() => {
      this.tiposCarroServices.showMessage('Produto criado!')
      this.router.navigate(['/tiposCarro'])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
