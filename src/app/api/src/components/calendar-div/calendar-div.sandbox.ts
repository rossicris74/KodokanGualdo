import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventiGareService } from '../../lib/event-gare/eventi-gare.service';
import { EventiGare } from '../../lib/event-gare/eventi-gare.type';
import * as CalendarType from '../calendar/calendar.type';

@Injectable({
  providedIn: 'root',
})
export class KgCalendarDivSandbox {
  data: Date = new Date();
  dataCorrente: Date = new Date();
  dataCorrenteNum: number = this.getGiornoDataNum(this.dataCorrente);
  eventiGare: EventiGare = [];
  calendMese$ = new BehaviorSubject<CalendarType.CalendMese>([]);

  constructor(private readonly eventiGareService: EventiGareService) {
    this.eventiGareService.getEventiGareLocal().subscribe((eventiGare) => {
      this.eventiGare = eventiGare;
      this.calendMese$.next(this.calendarioMeseShow());
    });
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
    this.calendMese$.next(this.calendarioMeseShow());
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
            calendGiorno = {
              giorno: 0,
              giornoDataDate: null,
              giornoDataNum: 0,
              evento: 0,
            };
            calendSettimana.push(calendGiorno);
          }
        }
      }
      calendGiorno = {
        giorno: i,
        giornoDataDate: this.getDateFromParam(
          this.data.getFullYear(),
          this.meseNum(this.data),
          i
        ),
        giornoDataNum: this.getGiornoDataNum(
          this.getDateFromParam(
            this.data.getFullYear(),
            this.meseNum(this.data),
            i
          )
        ),
        evento: this.getEventoGara(
          this.getGiornoDataNum(
            this.getDateFromParam(
              this.data.getFullYear(),
              this.meseNum(this.data),
              i
            )
          )
        ),
      };
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
          calendGiorno = {
            giorno: 0,
            giornoDataDate: null,
            giornoDataNum: 0,
            evento: 0,
          };
          calendSettimana.push(calendGiorno);
        }
        calendMese.push(calendSettimana);
      }
    }
    return calendMese;
  }

  getGiornoDataNum(data: Date): number {
    return parseInt(
      data.getFullYear().toString() +
        this.meseNum(this.data).toString().padStart(2, '0') +
        data.getDate().toString().padStart(2, '0')
    );
  }

  getDateFromParam(anno: number, mese: number, giorno: number) {
    const data: Date = new Date(
      anno.toString() +
        '-' +
        mese.toString().padStart(2, '0') +
        '-' +
        giorno.toString().padStart(2, '0') +
        'T01:01:00.000Z'
    );
    return data;
  }

  getEventoGara(giornoDataNum: number): number {
    const idx = this.eventiGare.findIndex(
      (ele) => ele.eventiGareDataNum === giornoDataNum
    );
    return idx === -1
      ? 0
      : this.eventiGare[idx].eventiGareDataNum < this.dataCorrenteNum
      ? 1
      : 2;
  }
}
