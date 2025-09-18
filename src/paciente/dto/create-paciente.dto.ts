export class CreatePacienteDto {
	nombre: string;
	apellido: string;
	dpi: string;
	telefono?: string;
	direccion?: string;
	fechaNac: Date;
}
