import { BaseModel } from "../base.model";

export class VendasCarroModel extends BaseModel {
    constructor(
        DataVendaCarro: Date,
        ValorVendaCarro: number,
        AtivoVendaCarro: boolean,
        CarrosId: string
    ) { super(); }

    // tslint:disable-next-line: member-ordering
    public static fromJson(jsonData: any): VendasCarroModel {
        return Object.assign(v => new VendasCarroModel(v.DataVendaCarro, v.ValorVendaCarro,
            v.AtivoVendaCarro, v.CarrosId), jsonData);
    }
}
