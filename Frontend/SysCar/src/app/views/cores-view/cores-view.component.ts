import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { CoresDialogCreateComponent } from 'src/app/pages/cores/cores-dialog-create/cores-dialog-create.component';

@Component({
  selector: 'app-cores-view',
  templateUrl: './cores-view.component.html',
  styleUrls: ['./cores-view.component.css']
})
export class CoresViewComponent implements OnInit {

  Descricao: string;

  constructor(private router: Router, private headerService: HeaderService, public dialog: MatDialog) {
    headerService.headerData = {
      title: 'Cores',
      icon: ' format_color_fill',
      routeUrl: '/cores'
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CoresDialogCreateComponent, {
      width: '500px', //425px
      data: { Categoria: this.Descricao },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.Descricao = result;
    });
  }
}
