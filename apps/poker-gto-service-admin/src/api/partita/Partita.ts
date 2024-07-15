export type Partita = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  data: Date | null;
  giocatori: string | null;
  vincitore: string | null;
};
