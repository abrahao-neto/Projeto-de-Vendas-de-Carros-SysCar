import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-tipos-carro-view',
  templateUrl: './tipos-carro-view.component.html',
  styleUrls: ['./tipos-carro-view.component.css']
})
export class TiposCarroViewComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Categorias',
      icon: ' category',
      routeUrl: '/tipos-carro'
    }
  }

  ngOnInit(): void {
  }

  navigateToTiposCarroCreate(): void {
    this.router.navigate(['/tipos-carro/create'])
  }

}
