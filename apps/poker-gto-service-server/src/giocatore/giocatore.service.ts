import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GiocatoreServiceBase } from "./base/giocatore.service.base";

@Injectable()
export class GiocatoreService extends GiocatoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
