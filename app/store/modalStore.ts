import { create } from 'zustand';
import { PsychologistModalData } from '../types/psychologist';
type ModalType = 'login' | 'registration' | 'booking' | null;

interface ModalState {
  modalType: ModalType;
  modalData: PsychologistModalData | null;
  openLogin: () => void;
  openRegistration: () => void;
  openBooking: (data: PsychologistModalData) => void;
  closeModal: () => void;
}
export const useModalStore = create<ModalState>()(set => ({
  modalType: null,
  modalData: null,

  openLogin: () =>
    set({
      modalType: 'login',
      modalData: null,
    }),
  openRegistration: () =>
    set({
      modalType: 'registration',
      modalData: null,
    }),
  openBooking: data =>
    set({
      modalType: 'booking',
      modalData: data,
    }),
  closeModal: () =>
    set({
      modalType: null,
      modalData: null,
    }),
}));
