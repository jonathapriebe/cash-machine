import { Utils } from '@src/helpers/utils';

export interface DrawCashResponse {
  success: boolean;
  message: string;
}

export default class Draw {
  public async drawCash(value: number): Promise<DrawCashResponse> {
    const validate = Utils.validateValue(value);
    if (validate.length > 0)
      return { success: false, message: validate };
    const message = `Valor do saque: R$ ${value}`;
    const notes = Utils.calculateNotes(value);

    return {
      success: true,
      message: `${message}. ${notes}`
    };
  }
}