'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Box, Button, Container, TextField, Typography, Paper, Stack, Link as MuiLink } from '@mui/material';
import styled from 'styled-components';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { THEME_COLORS, THEME_SIZES } from 'shared-ui';

import { loginSchema, LoginForm } from '../schemas/loginSchema';

const StyledPaper = styled(Paper)`
  padding: 40px 32px;
  border-top: ${THEME_SIZES.cardBorderWidth} solid ${THEME_COLORS.primary};
  border-radius: ${THEME_SIZES.borderRadius}px;
`;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    router.push('/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <StyledPaper elevation={2}>
          <Stack direction="column" sx={{ alignItems: 'center', mb: 1 }}>
            <AdminPanelSettingsIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h4" color="primary.main" sx={{ textAlign: 'center' }}>
              Projeto Por Elas
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
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

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
              <MuiLink
                component={Link}
                href="/redefinir-senha"
                underline="hover"
                sx={{ color: 'primary.main', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Esqueci minha senha
              </MuiLink>
            </Box>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
            >
              ENTRAR
            </Button>
          </form>
        </StyledPaper>
      </Box>
    </Container>
  );
}