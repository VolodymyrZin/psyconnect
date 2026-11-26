import css from './RegistrationForm.module.css';
import { IconMail, IconLock, IconEye } from '@tabler/icons-react';
export default function RegistrationForm() {
  return (
    <div className={css.registrationFormContent}>
      <h1 className={css.registrationFormTitle}>Create an Account</h1>
      <p className={css.registrationFormText}>
        Join PsyConnect to save your favorite specialists and book sessions.
      </p>
      <form className={css.registrationForm}>
        <label htmlFor="name" className={css.inputLabel}>
          Name
        </label>
        <div className={css.inputWrapper}>
          <svg className={css.inputIconMan} width={16} height={16}>
            <use href="/sprite.svg#icon-man" aria-hidden="true" />
          </svg>
          <input
            className={css.inputField}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>
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
          Sign Up
        </button>
      </form>
      <p className={css.authSwitchText}>
        Already have an account?
        <button className={css.authSwitchBtn} type="button">
          Log In
        </button>
      </p>
    </div>
  );
}
