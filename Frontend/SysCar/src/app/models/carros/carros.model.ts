import { BaseModel } from "../base.model";

export class CarrosModel extends BaseModel {

    NomeCarro: string
    CoresCarroId: string
    TiposCarroId: string

    constructor(
        NomeCarro: string,
        CoresCarroId: string,
        TiposCarroId: string,

    ) { super(); }

    // tslint:disable-next-line: member-ordering
    public static fromJson(jsonData: any): CarrosModel {
        return Object.assign(c => new CarrosModel(c.NomeCarro, c.CoresCarroId, c.TiposCarroId), jsonData);
    }
}
