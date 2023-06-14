import { Component } from '@angular/core';

@Component({
  selector: 'eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css'],
})
export class EventiComponent {
  data: Date = new Date();
  calendMese: CalendMese = [];

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

  get settimana(): settimana {
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
    this.data = new Date(
      this.data.getFullYear().toString() +
        '-' +
        (this.meseNum(this.data) + num).toString().padStart(2, '0') +
        '-' +
        '01' +
        'T01:01:00.000Z'
    );
  }

  calendarioMeseShow(): CalendMese {
    let calendSettimana: CalendSettimana = [];
    let calendGiorno: CalendGiorno;
    let calendMese: CalendMese = [];
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

  doPrec() {
    this.addMese(-1);
    this.calendMese = this.calendarioMeseShow();
  }
  doSucc() {
    this.addMese(+1);
    this.calendMese = this.calendarioMeseShow();
  }
}

type CalendMese = CalendSettimana[];

type CalendSettimana = CalendGiorno[];

type CalendGiorno = {
  giorno: number;
  evento: number;
};

type giorno = {
  nome: string;
  numero: number;
};

type settimana = giorno[];
