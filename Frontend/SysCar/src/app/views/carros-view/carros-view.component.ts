import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { CarrosDialogCreateComponent } from 'src/app/pages/carros/carros-dialog-create/carros-dialog-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carros-view',
  templateUrl: './carros-view.component.html',
  styleUrls: ['./carros-view.component.css']
})
export class CarrosViewComponent implements OnInit {

  NomeCarro: number
  CoresCarroId: string
  TiposCarroId: string


  constructor(private router: Router, private headerService: HeaderService, public dialog: MatDialog) {
    headerService.headerData = {
      title: 'Carros',
      icon: 'directions_car',
      routeUrl: '/carros'
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CarrosDialogCreateComponent, {
      width: '500px', //425px
      data: { Nome: this.NomeCarro, Cores: this.CoresCarroId, Categoria: this.TiposCarroId },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.NomeCarro = result;
    });
  }

}


