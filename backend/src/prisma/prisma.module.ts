import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/*
 * Limitações do Prisma
 *
 * Prisma ORM não suporta queries mais complexas que incluem JOINs.
 * Essa limitação pode impactar no desempenho de consulta no banco de dados pois atualmente o Prisma ORM
 * trabalha realizando várias consultas nas tabelas relacionadas quando solicitada ao montar a resposta
 * de uma solicitação, mas que poderia ser resolvido com uma única query utilizando os JOINs.
 *
 * Pode ser que no futuro seja prudente substituir o Prisma pelo TypeORM
 */

@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
