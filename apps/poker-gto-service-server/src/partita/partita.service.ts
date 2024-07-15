import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PartitaServiceBase } from "./base/partita.service.base";

@Injectable()
export class PartitaService extends PartitaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
