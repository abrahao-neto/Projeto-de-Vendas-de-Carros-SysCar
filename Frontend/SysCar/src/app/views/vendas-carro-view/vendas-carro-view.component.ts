import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-vendas-carro-view',
  templateUrl: './vendas-carro-view.component.html',
  styleUrls: ['./vendas-carro-view.component.css']
})
export class VendasCarroViewComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Vendas',
      icon: 'shopping_cart',
      routeUrl: '/vendas-carro'
    }
  }

  ngOnInit(): void {
  }

  navigateToVendasCarroCreate(): void {
    this.router.navigate(['/vendas-carro/create'])
  }

}
