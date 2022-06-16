import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { CoresService } from '../cores-read/cores.service';


@Component({
  selector: 'app-cores-dialog-create',
  templateUrl: './cores-dialog-create.component.html',
  styleUrls: ['./cores-dialog-create.component.css']
})
export class CoresDialogCreateComponent {


  @Input() model;

  constructor(public dialogRef: MatDialogRef<CoresDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CoresModel,
    public coresServices: CoresService,
    public router: Router) { }

  createCarro(): void {
    this.coresServices.create(this.data).subscribe(() => {
      this.coresServices.showMessage('Produto criado!')
      this.router.navigate(['/cores'])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
