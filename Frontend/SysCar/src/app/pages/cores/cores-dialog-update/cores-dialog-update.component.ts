import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { CoresService } from '../cores-read/cores.service';

@Component({
  selector: 'app-cores-dialog-update',
  templateUrl: './cores-dialog-update.component.html',
  styleUrls: ['./cores-dialog-update.component.css']
})
export class CoresDialogUpdateComponent implements OnInit {

  @Input() model;
  coresService: CoresService;


  constructor(
    @Optional() public dialogRef: MatDialogRef<CoresDialogUpdateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CoresModel,
    coresService: CoresService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.coresService.readById(id).subscribe((data) => {
      this.data = data;
    });
  }

  updateCores(): void {
    this.coresService.update(this.data).subscribe(() => {
      this.coresService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cores"]);
  }
}
