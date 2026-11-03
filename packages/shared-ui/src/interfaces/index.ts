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