import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MossaServiceBase } from "./base/mossa.service.base";

@Injectable()
export class MossaService extends MossaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
