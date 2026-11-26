import BookingForm from './BookingForm/BookingForm';
import css from './BookingModal.module.css';
import Image from 'next/image';
export interface BookingModalProps {
  id: string;
  name: string;
  avatar_url: string;
}
export default function BookingModal({
  id,
  name,
  avatar_url,
}: BookingModalProps) {
  return (
    <div className={css.bookSessionContent}>
      <h1 className={css.bookSessionTitle}>Book a Session</h1>
      <div className={css.bookSessionInfo}>
        <div className={css.wrapperImg}>
          <Image
            src={avatar_url}
            width={80}
            height={80}
            alt={name}
            className={css.psyImg}
          />
        </div>
        <p className={css.psyName}>{name}</p>
      </div>
      <BookingForm psychologistId={id} name={name} />
    </div>
  );
}
