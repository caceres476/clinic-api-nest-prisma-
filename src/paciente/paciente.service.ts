import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  create(createPacienteDto: CreatePacienteDto) {
    return this.prisma.paciente.create({
      data: createPacienteDto,
    });
  }

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: { id },
      data: updatePacienteDto,
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}