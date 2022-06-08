import { Injectable, Injector } from "@angular/core";
import { CarrosModel } from "src/app/models/carros/carros.model";
import { BaseService } from "../base.service";
import { ICarrosService } from "src/app/interfaces/carros/carros.iservice";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CarrosService extends BaseService<CarrosModel> implements ICarrosService {
    // constructor(protected injector: Injector) {
    //     super('Carros', injector, CarrosModel.fromJson);
    // }
}
