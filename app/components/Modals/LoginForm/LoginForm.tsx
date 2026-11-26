import css from './LoginForm.module.css';
import { IconMail, IconLock, IconEye } from '@tabler/icons-react';
export default function LoginForm() {
  return (
    <div className={css.loginFormContent}>
      <h1 className={css.loginFormTitle}>Welcome Back</h1>
      <p className={css.loginFormText}>
        Log in to access your favorites and bookings.
      </p>
      <form className={css.loginForm}>
        <label htmlFor="email" className={css.inputLabel}>
          Email
        </label>
        <div className={css.inputWrapper}>
          <IconMail
            stroke={2}
            size={22}
            color="#707973"
            aria-hidden="true"
            className={css.inputIconComp}
          />
          <input
            className={css.inputField}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <label htmlFor="password" className={css.inputLabel}>
          Create a password
        </label>
        <div className={css.inputWrapper}>
          <IconLock
            stroke={2}
            size={20}
            color="#707973"
            aria-hidden="true"
            className={css.inputIconComp}
          />
          <input
            className={css.inputField}
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
          <IconEye
            stroke={2}
            size={20}
            color="#707973"
            className={css.inputIconEye}
          />
        </div>
        <button type="submit" className={css.submitBtn}>
          Log In
        </button>
      </form>
      <p className={css.authSwitchText}>
        Don&#39;t have an account?
        <button className={css.authSwitchBtn} type="button">
          Sign Up
        </button>
      </p>
    </div>
  );
}
