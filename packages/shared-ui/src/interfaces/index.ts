export type StatusAtendimento = 'Aguardando atendimento' | 'Atendida' | 'Finalizado';

export interface HighlightCardProps {
  clientName: string;
  serviceName: string;
  isActive?: boolean;
}

export interface ClientData {
  id: string;
  clientName: string;
  serviceName: string;
}

export interface WaitingListState {
  activeClient: ClientData | null;
  waitingList: ClientData[];
}

export interface Evento {
  id: string;
  nome: string;
  data: string;
  horaInicio: string;
  horaFim: string;
}

export interface MulherAtendimento {
  id: string;
  eventoId: string;
  nome: string;
  servicos: string[];
  status: StatusAtendimento;
}