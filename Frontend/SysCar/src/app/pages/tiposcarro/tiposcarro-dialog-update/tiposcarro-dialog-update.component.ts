import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TiposCarroModel } from 'src/app/models/tipos-carro/tipos-carro.model';
import { TiposCarroService } from '../tipos-carro-read/tipos-carro.service';

@Component({
  selector: 'app-tiposcarro-dialog-update',
  templateUrl: './tiposcarro-dialog-update.component.html',
  styleUrls: ['./tiposcarro-dialog-update.component.css']
})
export class TiposcarroDialogUpdateComponent implements OnInit {

  @Input() model;
  tiposCarroService: TiposCarroService;


  constructor(
    @Optional() public dialogRef: MatDialogRef<TiposcarroDialogUpdateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TiposCarroModel,
    tiposCarroService: TiposCarroService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.tiposCarroService.readById(id).subscribe((data) => {
      this.data = data;
    });
  }

  updateTiposCarro(): void {
    this.tiposCarroService.update(this.data).subscribe(() => {
      this.tiposCarroService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/tipos-carro"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/tipos-carro"]);
  }

}
