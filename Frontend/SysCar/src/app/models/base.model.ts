import { MessageEnum } from '../enums/message.enum';

export abstract class BaseModel {
    id?: number;
    isActive?: boolean;
    active?: string;
    totalRecords?: number;
    dtRegister?: Date;
    isFilter?: boolean;
    isRemove?: boolean;
    codeError?: number;
    messageError?: string;

    // convert paid for string in about rule.
    // ----------------------------------------------------------------------
    get status(): string {
        return this.isActive ? MessageEnum.Options.Active : MessageEnum.Options.Inactive;
    }

}



