import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManoServiceBase } from "./base/mano.service.base";

@Injectable()
export class ManoService extends ManoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
