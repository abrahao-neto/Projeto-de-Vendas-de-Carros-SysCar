import { Injectable } from "@angular/core";
import { CoresModel } from "src/app/models/cores/cores.model";
import { BaseService } from "../base.service";
import { ICoresService } from "src/app/interfaces/cores/cores.iservice";

@Injectable()
export class CoresService extends BaseService<CoresModel> implements ICoresService {

}
