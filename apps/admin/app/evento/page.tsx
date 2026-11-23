'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, TextField, Typography, Paper, Alert, Stack } from '@mui/material';
import styled from 'styled-components';
import { THEME_COLORS, THEME_SIZES } from 'shared-ui';
import { eventoSchema, EventoForm } from '../../schemas/eventoSchema';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledPaper = styled(Paper)`
  padding: 40px 32px;
  border-top: ${THEME_SIZES.cardBorderWidth} solid ${THEME_COLORS.primary};
  border-radius: ${THEME_SIZES.borderRadius}px;
`;

export default function EventoPage() {
  const router = useRouter();
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<EventoForm>({
    resolver: zodResolver(eventoSchema),
  });

  const onSubmit = (data: EventoForm) => {
    console.log('Evento Criado:', data);
    setSucesso(true);
    reset();
    setTimeout(() => setSucesso(false), 3000);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="sm">
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/dashboard')} sx={{ mb: 2 }}>
          Voltar
        </Button>
        <StyledPaper elevation={2}>
          <Typography variant="h5" color="primary.main" sx={{ mb: 3, textAlign: 'center' }}>
            Cadastrar Evento
          </Typography>

          {sucesso && <Alert severity="success" sx={{ mb: 3 }}>Evento cadastrado com sucesso!</Alert>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('nome')} label="Nome do Evento" fullWidth margin="normal" error={!!errors.nome} helperText={errors.nome?.message} />
            <TextField {...register('data')} label="Data" type="date" fullWidth margin="normal" slotProps={{ inputLabel: { shrink: true } }} error={!!errors.data} helperText={errors.data?.message} />
            
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <TextField {...register('horaInicio')} label="Hora de Início" type="time" fullWidth slotProps={{ inputLabel: { shrink: true } }} error={!!errors.horaInicio} helperText={errors.horaInicio?.message} />
              <TextField {...register('horaFim')} label="Hora Final" type="time" fullWidth slotProps={{ inputLabel: { shrink: true } }} error={!!errors.horaFim} helperText={errors.horaFim?.message} />
            </Stack>
            
            <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ mt: 4, py: 1.5, borderRadius: 2 }}>
              Salvar Evento
            </Button>
          </form>
        </StyledPaper>
      </Container>
    </Box>
  );
}