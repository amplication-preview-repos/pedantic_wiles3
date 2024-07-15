import { Mano } from "../mano/Mano";
import { Mossa } from "../mossa/Mossa";

export type Giocatore = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nome: string | null;
  saldo: number | null;
  manos?: Array<Mano>;
  mossas?: Array<Mossa>;
};
