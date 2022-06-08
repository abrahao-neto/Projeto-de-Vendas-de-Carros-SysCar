import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { TiposCarroModel } from "src/app/models/tipos-carro/tipos-carro.model";
import { ITiposCarroService } from "src/app/interfaces/tipos-carros/tipos-carro.iservice";

@Injectable()
export class TiposCarroService extends BaseService<TiposCarroModel> implements ITiposCarroService {

}
