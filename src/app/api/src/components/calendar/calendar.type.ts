export type CalendMese = CalendSettimana[];
export type CalendSettimana = CalendGiorno[];

export type CalendGiorno = {
  giorno: number;
  giornoDataNum: number;
  giornoDataDate: Date | null;
  evento: number;
};
export type giorno = {
  nome: string;
  numero: number;
};

export type settimana = giorno[];
