'use client';

import { useModalStore } from '@/app/store/modalStore';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import BookingModal from '../BookingModal/BookingModal';
import type { ReactNode } from 'react';
export default function ModalManager() {
  const modalType = useModalStore(state => state.modalType);
  const modalData = useModalStore(state => state.modalData);
  const closeModal = useModalStore(state => state.closeModal);
  let modalContent: ReactNode = null;
  switch (modalType) {
    case 'login':
      modalContent = <LoginForm />;
      break;
    case 'registration':
      modalContent = <RegistrationForm />;
      break;
    case 'booking':
      if (modalData) {
        modalContent = (
          <BookingModal
            id={modalData.id}
            name={modalData.name}
            avatar_url={modalData.avatar_url}
          />
        );
      }
      break;
  }
  if (!modalContent) return null;
  return <ModalOverlay onClose={closeModal}>{modalContent}</ModalOverlay>;
}
