import { BaseModel } from "../base.model";

export class TiposCarroModel extends BaseModel {
    constructor(
        Descricao: string
    ) { super(); }

    // tslint:disable-next-line: member-ordering
    public static fromJson(jsonData: any): TiposCarroModel {
        return Object.assign(t => new TiposCarroModel(t.Descricao), jsonData);
    }
}
