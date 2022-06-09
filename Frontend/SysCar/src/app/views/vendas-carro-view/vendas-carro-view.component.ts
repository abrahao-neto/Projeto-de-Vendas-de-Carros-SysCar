import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { VendascarroDialogCreateComponent } from 'src/app/pages/vendascarro/vendascarro-dialog-create/vendascarro-dialog-create.component';

@Component({
  selector: 'app-vendas-carro-view',
  templateUrl: './vendas-carro-view.component.html',
  styleUrls: ['./vendas-carro-view.component.css']
})
export class VendasCarroViewComponent implements OnInit {

  DataVendaCarro: Date
  ValorVendaCarro: number
  AtivoVendaCarro: boolean
  CarrosId: string

  constructor(private router: Router, private headerService: HeaderService, public dialog: MatDialog) {
    headerService.headerData = {
      title: 'Vendas',
      icon: 'shopping_cart',
      routeUrl: '/vendas-carro'
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VendascarroDialogCreateComponent, {
      width: '500px', //425px
      data: {
        Data: this.DataVendaCarro, Valor: this.ValorVendaCarro, Ativo: this.AtivoVendaCarro,
        Carro: this.CarrosId
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado.');
      this.CarrosId = result;
    });
  }

}
