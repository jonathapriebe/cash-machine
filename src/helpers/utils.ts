export class Utils {
  public static validateValue(value: number): string {
    let error = '';

    if (value % 10 != 0)
      error = 'Informe um valor válido para o saque';
    if (value < 0)
      error = 'Informe um valor positivo';

    return error;
  }

  public static calculateNotes(value: number): string {
    const availableNotes = [100, 50, 20, 10];
    const returnedNotes = [];
    for (const [index, note] of availableNotes.entries()) {
      while (value != 0 && value >= availableNotes[index]) {
        returnedNotes.push(availableNotes[index]);
        value -= note;
      }
    }

    return this.normalizeNotesResponse(returnedNotes);
  }

  private static normalizeNotesResponse(calculatedNotes: Array<number>): string {
    var counts: any = {};
    let finalMessage = 'Entregar ';
    let key: string = '';
    let value: any;
    const message = (qtd: number, value: string, plural: string) => { return `${qtd} nota${plural} de R$ ${value} `; };

    calculatedNotes.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    //const last = Object.keys(counts)[Object.keys(counts).length - 1];

    for ([key, value] of Object.entries(counts)) {
      const plural = value > 1 ? 's' : '';
      finalMessage += message(value, key, plural);
    }

    return finalMessage;
  }
}