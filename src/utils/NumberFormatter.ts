export class NumberFormatter {
  static getReadableDate(num: string) {
    const date = new Date(num);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  static getReadableNum(num: number ) {
    return new Intl.NumberFormat('en').format(+num);
  }

  static getReadablePrice(num: number = 0) {
    return `${CurrencySign.DOLLAR}${this.getReadableNum(num)}`;
  }

  static getCompactedNum(
    value: number,
    fractionDigits = 1
  ): string | number {
    if(value < 1e3) return this.getReadableNum(value);

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

  static getReadableCompactedPrice(num: number = 0) {
    return `${CurrencySign.DOLLAR}${this.getCompactedNum(num)}`;
  }
}

export enum CurrencySign {
  DOLLAR = '$',
}