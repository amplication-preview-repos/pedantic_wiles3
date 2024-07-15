import { Giocatore } from "../giocatore/Giocatore";
import { Mossa } from "../mossa/Mossa";

export type Mano = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carte: string | null;
  puntata: number | null;
  giocatore?: Giocatore | null;
  mossas?: Array<Mossa>;
};
