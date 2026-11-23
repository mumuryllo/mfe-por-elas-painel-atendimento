'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Box, Button, Container, TextField, Typography, Paper, Stack, Alert, Collapse } from '@mui/material';
import styled from 'styled-components';
import LockResetIcon from '@mui/icons-material/LockReset';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { THEME_COLORS, THEME_SIZES } from 'shared-ui';

import {
  solicitarCodigoSchema,
  confirmarRedefinicaoSchema,
  ConfirmarRedefinicaoForm,
} from '../../schemas/redefinirSenhaSchema';

const StyledPaper = styled(Paper)`
  padding: 40px 32px;
  border-top: ${THEME_SIZES.cardBorderWidth} solid ${THEME_COLORS.primary};
  border-radius: ${THEME_SIZES.borderRadius}px;
`;

export default function RedefinirSenhaPage() {
  const router = useRouter();
  const [etapaConfirmacao, setEtapaConfirmacao] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmarRedefinicaoForm>({
    resolver: zodResolver(etapaConfirmacao ? confirmarRedefinicaoSchema : solicitarCodigoSchema) as any,
    defaultValues: {
      email: '',
      senhaTemporaria: '',
      novaSenha: '',
    },
  });

  const onSubmit = (data: ConfirmarRedefinicaoForm) => {
    if (!etapaConfirmacao) {
      // Etapa 1: Simula a chamada do back-end que envia o e-mail com a senha temporária
      console.log('Solicitando senha temporária para:', data.email);
      setMensagemSucesso('Enviamos uma senha temporária para o seu e-mail!');
      setEtapaConfirmacao(true);
      return;
    }

    // Etapa 2: Simula a confirmação da senha temporária e gravação da nova senha
    console.log('Redefinindo senha:', data);
    setMensagemSucesso('Senha redefinida com sucesso! Redirecionando para o login...');
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <StyledPaper elevation={2}>
          <Stack direction="column" sx={{ alignItems: 'center', mb: 1 }}>
            <LockResetIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h4" color="primary.main" sx={{ textAlign: 'center' }}>
              Redefinir Senha
            </Typography>
          </Stack>
          
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
            {etapaConfirmacao
              ? 'Digite a senha temporária recebida e crie sua nova senha'
              : 'Informe seu e-mail para receber a senha temporária'}
          </Typography>

          {mensagemSucesso && (
            <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>
              {mensagemSucesso}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('email')}
              label="E-mail"
              fullWidth
              margin="normal"
              disabled={etapaConfirmacao}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <Collapse in={etapaConfirmacao} timeout={500}>
              <TextField
                {...register('senhaTemporaria')}
                label="Senha Temporária"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.senhaTemporaria}
                helperText={errors.senhaTemporaria?.message}
              />

              <TextField
                {...register('novaSenha')}
                label="Nova Senha"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.novaSenha}
                helperText={errors.novaSenha?.message}
              />
            </Collapse>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
            >
              {etapaConfirmacao ? 'SALVAR NOVA SENHA' : 'ENVIAR CÓDIGO'}
            </Button>

            <Button
              type="button"
              variant="text"
              color="secondary"
              fullWidth
              startIcon={<ArrowBackIcon />}
              onClick={() => router.push('/')}
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              Voltar para o Login
            </Button>
          </form>
        </StyledPaper>
      </Box>
    </Container>
  );
}