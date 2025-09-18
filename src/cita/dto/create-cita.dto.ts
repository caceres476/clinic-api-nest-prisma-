export class CreateCitaDto {
	fechaHora: Date;
	motivo: string;
	estado?: string; // pendiente, confirmada, cancelada, completada
	pacienteId: number;
	medicoId: number;
}
