import { Component, OnInit } from '@angular/core';
import { CoresModel } from 'src/app/models/cores/cores.model';
import { CoresService } from './cores.service';
//import { CarrosService } from 'src/app/services/carros/carros.service';

@Component({
  selector: 'app-cores-read',
  templateUrl: './cores-read.component.html',
  styleUrls: ['./cores-read.component.css']
})
export class CoresReadComponent implements OnInit {

  cores: CoresModel[]
  displayedColumns = ['Descricao', 'action']

  constructor(private coresService: CoresService) { }

  ngOnInit(): void {
    this.coresService.read().subscribe(cores => {
      this.cores = cores
    })
  }

}
