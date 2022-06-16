import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { TiposcarroDialogCreateComponent } from 'src/app/pages/tiposcarro/tiposcarro-dialog-create/tiposcarro-dialog-create.component';

@Component({
  selector: 'app-tipos-carro-view',
  templateUrl: './tipos-carro-view.component.html',
  styleUrls: ['./tipos-carro-view.component.css']
})
export class TiposCarroViewComponent implements OnInit {

  Descricao: string;

  constructor(private router: Router, private headerService: HeaderService, public dialog: MatDialog) {
    headerService.headerData = {
      title: 'Categorias',
      icon: ' category',
      routeUrl: '/tipos-carro'
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TiposcarroDialogCreateComponent, {
      width: '500px', //425px
      data: { Nome: this.Descricao },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.Descricao = result;
    });
  }

}


