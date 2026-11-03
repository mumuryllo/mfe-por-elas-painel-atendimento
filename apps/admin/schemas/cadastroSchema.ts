import { z } from 'zod';

export const cadastroSchema = z.object({
  clientName: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  serviceName: z.string().min(1, 'Selecione pelo menos um serviço'),
});

export type CadastroForm = z.infer<typeof cadastroSchema>;