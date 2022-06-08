import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { VendasCarroModel } from "src/app/models/vendas-carro/vendas-carro.model";
import { IVendasCarroService } from "src/app/interfaces/vendas-carro/vendas-carro.iservice";

@Injectable()
export class VendasCarroService extends BaseService<VendasCarroModel> implements IVendasCarroService {

}
