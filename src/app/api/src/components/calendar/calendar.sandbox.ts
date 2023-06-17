import { Injectable } from '@angular/core';
import * as CalendarType from './calendar.type';

@Injectable()
export class KgCalendarSandbox {
  data: Date = new Date();
  calendMese: CalendarType.CalendMese = [];

  constructor() {
    this.calendMese = this.calendarioMeseShow();
  }

  fineMese(mese: number): number {
    let fineMese: number = 31;
    if (mese === 4 || mese === 6 || mese === 9 || mese === 11) {
      fineMese = 30;
    }
    if (mese === 2) {
      fineMese = 28;
    }

    return fineMese;
  }

  meseNum(data: Date): number {
    return data.getMonth() + 1;
  }

  get settimana(): CalendarType.settimana {
    return [
      { nome: 'lu', numero: 1 },
      { nome: 'ma', numero: 2 },
      { nome: 'me', numero: 3 },
      { nome: 'gi', numero: 4 },
      { nome: 've', numero: 5 },
      { nome: 'sa', numero: 6 },
      { nome: 'do', numero: 7 },
    ];
  }

  get meseCorrenteNome(): string {
    const mesiAnno: string[] = [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ];
    return mesiAnno[this.meseNum(this.data) - 1];
  }

  get annoCorrente(): number {
    return this.data.getFullYear();
  }

  giornoMeseNum(giorno: Date): number {
    return giorno.getDate();
  }

  giornoSettNum(giorno: Date): number {
    return giorno.getDay();
  }

  primoGiornoMese(data: Date): number {
    const giornoSett: number = new Date(
      data.getFullYear().toString() +
        '-' +
        this.meseNum(data).toString().padStart(2, '0') +
        '-' +
        '01' +
        'T01:01:00.000Z'
    ).getDay();
    return giornoSett;
  }

  addMese(num: number) {
    let anno = this.data.getFullYear();
    let mese = this.meseNum(this.data) + num;
    switch (this.meseNum(this.data) + num) {
      case 13:
        mese = 1;
        anno = anno + 1;
        break;
      case 0:
        mese = 12;
        anno = anno - 1;
        break;
      default:
        break;
    }
    this.data = new Date(
      anno.toString() +
        '-' +
        mese.toString().padStart(2, '0') +
        '-' +
        '01' +
        'T01:01:00.000Z'
    );
  }

  calendarioMeseShow(): CalendarType.CalendMese {
    let calendSettimana: CalendarType.CalendSettimana = [];
    let calendGiorno: CalendarType.CalendGiorno;
    let calendMese: CalendarType.CalendMese = [];
    let ggSett: number = 0;
    for (let i = 1; i <= this.fineMese(this.meseNum(this.data)); i++) {
      if (i === 1) {
        calendSettimana = [];
        if (this.primoGiornoMese(this.data) !== 1) {
          for (let u = 1; u < this.primoGiornoMese(this.data); u++) {
            calendGiorno = { giorno: 0, evento: 0 };
            calendSettimana.push(calendGiorno);
          }
        }
      }
      calendGiorno = { giorno: i, evento: 0 };
      calendSettimana.push(calendGiorno);

      if (calendSettimana.length === 7) {
        calendMese.push(calendSettimana);
        calendSettimana = [];
      }
      if (
        i === this.fineMese(this.meseNum(this.data)) &&
        calendSettimana.length !== 7
      ) {
        for (let u = calendSettimana.length; u < 7; u++) {
          calendGiorno = { giorno: 0, evento: 0 };
          calendSettimana.push(calendGiorno);
        }
        calendMese.push(calendSettimana);
      }
    }
    return calendMese;
  }
}
