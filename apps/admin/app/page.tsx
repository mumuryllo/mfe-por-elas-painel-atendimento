'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Box, Button, Container, TextField, Typography, Paper, Stack } from '@mui/material';
import styled from 'styled-components';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

const StyledPaper = styled(Paper)`
  padding: 40px 32px;
  border-top: 8px solid #8C5A40;
  border-radius: 16px;
`;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    router.push('/cadastro');
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" minHeight="100vh" bgcolor="background.default">
        <StyledPaper elevation={2}>
          <Stack direction="column" alignItems="center" mb={1}>
            <AdminPanelSettingsIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h4" color="primary.main" textAlign="center">
              Projeto Por Elas
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
            Acesso Restrito - Recepção
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('email')}
              label="E-mail"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('password')}
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 4, py: 1.5, borderRadius: 2 }}
            >
              ENTRAR
            </Button>
          </form>
        </StyledPaper>
      </Box>
    </Container>
  );
}