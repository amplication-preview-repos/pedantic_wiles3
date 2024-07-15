import { Mano } from "../mano/Mano";
import { Giocatore } from "../giocatore/Giocatore";

export type Mossa = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  azione: string | null;
  mano?: Mano | null;
  giocatore?: Giocatore | null;
};
