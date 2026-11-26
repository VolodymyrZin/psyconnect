import css from './ModalOverlay.module.css';
import { IconX } from '@tabler/icons-react';
import type { ReactNode } from 'react';

export interface ModalOverlayProps {
  children: ReactNode;
}

export default function ModalOverlay({ children }: ModalOverlayProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.modalBox}>
        <button type="button" className={css.closeBtn} aria-label="Close modal">
          <IconX stroke={2} color="#404943" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}
