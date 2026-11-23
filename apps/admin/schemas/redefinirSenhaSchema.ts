import { z } from 'zod';

export const solicitarCodigoSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

export const confirmarRedefinicaoSchema = z.object({
  email: z.string().email('E-mail inválido'),
  senhaTemporaria: z.string().min(4, 'Informe a senha temporária enviada no e-mail'),
  novaSenha: z.string().min(6, 'A nova senha deve ter no mínimo 6 caracteres'),
});

export type SolicitarCodigoForm = z.infer<typeof solicitarCodigoSchema>;
export type ConfirmarRedefinicaoForm = z.infer<typeof confirmarRedefinicaoSchema>;