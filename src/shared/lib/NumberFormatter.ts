export class NumberFormatter {
  static getReadableDate(num: string | null | undefined, error: string): string {
    if (typeof num !== 'string') return error;
    const date = new Date(num);
    if (isNaN(date.getTime())) return error;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  static getReadableNum(num: number | null | undefined, error: string): string {
    if (typeof num !== 'number') return error;
    return new Intl.NumberFormat('en').format(num);
  }

  static getReadablePrice(num: number | null | undefined, error: string): string {
    if (typeof num !== 'number') return error;
    return `${CurrencySign.DOLLAR}${this.getReadableNum(num, error)}`;
  }

  static getCompactedNum(value: number | null | undefined, error: string, fractionDigits = 1): string | number {
    if (typeof value !== 'number') return error;
    if (value < 1e3) return this.getReadableNum(value, error);

    const UNITS = [
      { treshold: 1e12, label: 'Trillion' },
      { treshold: 1e9,  label: 'B' },        // Billion
      { treshold: 1e6,  label: 'M' },        // Million
      { treshold: 1e3,  label: 'K' },        // Thousand
    ];

    for (const { treshold, label } of UNITS) {
      if (value >= treshold) {
        const num = (value / treshold).toFixed(fractionDigits);
        const trimmed = num.replace(/\.0+$/, '');
        return `${trimmed} ${label}`;
      }
    }

    return value;
  }

  static getCompactedPrice(num: number | null | undefined, error: string): string {
    if (typeof num !== 'number') return error;
    return `${CurrencySign.DOLLAR}${this.getCompactedNum(num, error)}`;
  }
}

export enum CurrencySign {
  DOLLAR = '$',
}
