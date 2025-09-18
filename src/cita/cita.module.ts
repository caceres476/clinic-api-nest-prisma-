import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { PrismaModule } from 'src/prisma/prisma.module';  

@Module({
  imports: [PrismaModule],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
