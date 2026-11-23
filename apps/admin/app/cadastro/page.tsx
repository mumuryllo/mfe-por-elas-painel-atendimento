'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, TextField, Typography, Paper, Alert, MenuItem, Select, InputLabel, FormControl, FormHelperText, OutlinedInput, Chip } from '@mui/material';
import styled from 'styled-components';
import { THEME_COLORS, THEME_SIZES } from 'shared-ui';
import { cadastroSchema, CadastroForm } from '../../schemas/cadastroSchema';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledPaper = styled(Paper)`
  padding: 40px 32px;
  border-top: ${THEME_SIZES.cardBorderWidth} solid ${THEME_COLORS.primary};
  border-radius: ${THEME_SIZES.borderRadius}px;
`;

const MOCK_EVENTOS = [{ id: 'evt-1', nome: 'Ação Social Centro' }, { id: 'evt-2', nome: 'Por Elas - Bairro Sul' }];
const SERVICOS = ['Manicure e Pedicure', 'Corte e Escova', 'Coloração e Hidratação', 'Limpeza de Pele', 'Design de Sobrancelhas'];

export default function CadastroPage() {
  const router = useRouter();
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: { eventoId: '', servicos: [] }
  });

  const onSubmit = (data: CadastroForm) => {
    console.log('Mulher enviada para a fila:', data);
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
            Cadastrar Mulher na Fila
          </Typography>

          {sucesso && <Alert severity="success" sx={{ mb: 3 }}>Cadastro realizado com sucesso!</Alert>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField select {...register('eventoId')} label="Evento" fullWidth margin="normal" error={!!errors.eventoId} helperText={errors.eventoId?.message} defaultValue="">
              {MOCK_EVENTOS.map((evt) => (
                <MenuItem key={evt.id} value={evt.id}>{evt.nome}</MenuItem>
              ))}
            </TextField>

            <TextField {...register('nomeMulher')} label="Nome da Mulher" fullWidth margin="normal" error={!!errors.nomeMulher} helperText={errors.nomeMulher?.message} />
            
            <FormControl fullWidth margin="normal" error={!!errors.servicos}>
              <InputLabel>Serviços</InputLabel>
              <Controller
                name="servicos"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    multiple
                    input={<OutlinedInput label="Serviços" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    {SERVICOS.map((servico) => (
                      <MenuItem key={servico} value={servico}>{servico}</MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.servicos?.message}</FormHelperText>
            </FormControl>
            
            <Button type="submit" variant="contained" color="success" fullWidth size="large" sx={{ mt: 4, py: 1.5, borderRadius: 2 }}>
              Adicionar à Fila
            </Button>
          </form>
        </StyledPaper>
      </Container>
    </Box>
  );
}