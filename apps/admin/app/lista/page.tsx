'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Stack, Chip, Dialog, DialogContent, Zoom } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { MulherAtendimento, StatusAtendimento, THEME_COLORS } from 'shared-ui';

const MOCK_EVENTOS = [{ id: 'evt-1', nome: 'Ação Social Centro - 12/11/2026' }];
const MOCK_MULHERES: MulherAtendimento[] = [
  { id: '1', eventoId: 'evt-1', nome: 'Ana Clara Souza', servicos: ['Corte', 'Coloração'], status: 'Aguardando atendimento' },
  { id: '2', eventoId: 'evt-1', nome: 'Mariana Fernandes', servicos: ['Manicure'], status: 'Atendida' },
];

const getStatusColor = (status: StatusAtendimento) => {
  if (status === 'Aguardando atendimento') return 'warning';
  if (status === 'Atendida') return 'info';
  return 'success';
};

export default function ListaAtendimentosPage() {
  const router = useRouter();
  const [mulheres, setMulheres] = useState<MulherAtendimento[]>(MOCK_MULHERES);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleStatusChange = (id: string, novoStatus: StatusAtendimento, nomeMulher: string) => {
    setMulheres(prev => prev.map(m => m.id === id ? { ...m, status: novoStatus } : m));
    
    setModalMessage(`${nomeMulher} agora está: ${novoStatus}`);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 2000);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="md">
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/dashboard')} sx={{ mb: 2 }}>
          Voltar
        </Button>
        <Typography variant="h4" color="primary.main" sx={{ mb: 4, textAlign: 'center' }}>
          Gestão de Fila por Evento
        </Typography>

        {MOCK_EVENTOS.map(evento => (
          <Accordion key={evento.id} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' }, boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: THEME_COLORS.paper }}>
              <Typography variant="h6" color="primary.main">{evento.nome}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: THEME_COLORS.background }}>
              
              {mulheres.filter(m => m.eventoId === evento.id).map(mulher => (
                <Box key={mulher.id} sx={{ p: 2, mb: 2, bgcolor: THEME_COLORS.paper, borderRadius: 2, borderLeft: `6px solid ${THEME_COLORS.secondary}` }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
                    <Box>
                      <Typography variant="h6">{mulher.nome}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Serviços: {mulher.servicos.join(', ')}
                      </Typography>
                      <Chip label={mulher.status} color={getStatusColor(mulher.status)} size="small" />
                    </Box>

                    <Stack direction="row" spacing={1}>
                      <Button size="small" variant="outlined" color="warning" onClick={() => handleStatusChange(mulher.id, 'Aguardando atendimento', mulher.nome)}>
                        Aguardar
                      </Button>
                      <Button size="small" variant="outlined" color="info" onClick={() => handleStatusChange(mulher.id, 'Atendida', mulher.nome)}>
                        Atender
                      </Button>
                      <Button size="small" variant="contained" color="success" onClick={() => handleStatusChange(mulher.id, 'Finalizado', mulher.nome)}>
                        Finalizar
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              ))}

            </AccordionDetails>
          </Accordion>
        ))}

        <Dialog open={modalOpen} slots={{ transition: Zoom }} slotProps={{ paper: { sx: { borderRadius: 4, p: 2, textAlign: 'center' } } }}>
          <DialogContent>
            <SvgIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }}>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.1 14.2-4-4 1.4-1.4 2.6 2.6 5.9-5.9 1.4 1.4-7.3 7.3z" />
            </SvgIcon>
            <Typography variant="h5" color="text.primary" sx={{ mb: 1 }}>Status Atualizado!</Typography>
            <Typography variant="body1" color="text.secondary">{modalMessage}</Typography>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}