import { BaseModel } from "../base.model";

export class CoresModel extends BaseModel {

    Descricao: string

    constructor(
        Descricao: string
    ) { super(); }

    // tslint:disable-next-line: member-ordering
    public static fromJson(jsonData: any): CoresModel {
        return Object.assign(c => new CoresModel(c.Descricao), jsonData);
    }
}
