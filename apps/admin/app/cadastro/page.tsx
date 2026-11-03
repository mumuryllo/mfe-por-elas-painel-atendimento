'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Button, Container, TextField, Typography, Paper, Alert, MenuItem } from '@mui/material';
import styled from 'styled-components';

// Schema de validação do cadastro
const cadastroSchema = z.object({
  clientName: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  serviceName: z.string().min(1, 'Selecione um serviço'),
});

type CadastroForm = z.infer<typeof cadastroSchema>;

const StyledPaper = styled(Paper)`
  padding: 32px;
  border-top: 6px solid #5D4037; /* Destaque Marrom */
  margin-top: 48px;
`;

const SERVICOS = [
  'Manicure e Pedicure',
  'Corte e Escova',
  'Coloração e Hidratação',
  'Limpeza de Pele',
  'Design de Sobrancelhas',
];

export default function CadastroPage() {
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: { serviceName: '' }
  });

  const onSubmit = (data: CadastroForm) => {
    console.log('Cliente enviada para a fila:', data);
    // Aqui no futuro entrará o Axios/React Query enviando pro backend ou módulo federado
    setSucesso(true);
    reset();
    setTimeout(() => setSucesso(false), 3000);
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold', mb: 3 }}>
          Cadastrar Novo Atendimento
        </Typography>

        {sucesso && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Cliente adicionada à fila com sucesso!
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('clientName')}
            label="Nome da Cliente"
            fullWidth
            margin="normal"
            error={!!errors.clientName}
            helperText={errors.clientName?.message}
          />
          
          <TextField
            select
            {...register('serviceName')}
            label="Serviço"
            fullWidth
            margin="normal"
            error={!!errors.serviceName}
            helperText={errors.serviceName?.message}
            defaultValue=""
          >
            {SERVICOS.map((servico) => (
              <MenuItem key={servico} value={servico}>
                {servico}
              </MenuItem>
            ))}
          </TextField>
          
          <Button
            type="submit"
            variant="contained"
            color="success" // Verde da paleta
            fullWidth
            size="large"
            sx={{ mt: 4, fontWeight: 'bold' }}
          >
            Adicionar à Fila
          </Button>
        </form>
      </StyledPaper>
    </Container>
  );
}