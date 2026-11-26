import css from './ToastNotification.module.css';
import { IconLock, IconX } from '@tabler/icons-react';
export default function ToastNotification() {
  return (
    <div className={css.toastNotification}>
      <div className={css.iconBgr}>
        <IconLock stroke={2} width={18} height={21} />
      </div>
      <div className={css.toastNotificationContent}>
        <h1 className={css.toastNotificationTitle}>Sign in required</h1>
        <p className={css.toastNotificationText}>
          Please log in or create an account to save specialists to your
          favorites.
        </p>
        <button type="button" className={css.loginBtn}>
          Log In
        </button>
      </div>
      <button
        type="button"
        className={css.closeBtn}
        aria-label="Close notification"
      >
        <IconX
          stroke={2}
          width={18}
          height={18}
          color="#404943"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
