import { z } from 'zod';

export const eventoSchema = z.object({
  nome: z.string().min(3, 'O nome do evento é obrigatório'),
  data: z.string().min(1, 'A data é obrigatória'),
  horaInicio: z.string().min(1, 'Hora de início obrigatória'),
  horaFim: z.string().min(1, 'Hora final obrigatória'),
});

export type EventoForm = z.infer<typeof eventoSchema>;