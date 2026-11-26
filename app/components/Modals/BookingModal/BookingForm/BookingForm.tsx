import css from './BookingForm.module.css';

import { IconChevronDown, IconCircleCheckFilled } from '@tabler/icons-react';
export interface BookingFormProps {
  psychologistId: string;
  name: string;
}

export default function BookingForm({
  psychologistId,
  name,
}: BookingFormProps) {
  return (
    <>
      <form className={css.bookingForm}>
        <div className={css.bookingFormFields}>
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
            <svg className={css.inputIconMan} width={16} height={16}>
              <use href="/sprite.svg#icon-man" aria-hidden="true" />
            </svg>
            <input
              className={css.inputField}
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <label htmlFor="phone" className={css.inputLabel}>
            Phone Number
          </label>
          <div className={css.inputWrapper}>
            <svg className={css.inputIconMan} width={16} height={16}>
              <use href="/sprite.svg#icon-man" aria-hidden="true" />
            </svg>
            <input
              className={css.inputField}
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className={css.dateTimeFieldsWrapper}>
            <div className={css.selectWrapper}>
              <label htmlFor="date" className={css.inputLabel}>
                Date
              </label>
              <input
                className={css.dateField}
                type="date"
                id="date"
                name="date"
                required
                placeholder="Select date"
              />
            </div>
            <div className={css.selectWrapper}>
              <label htmlFor="time" className={css.inputLabel}>
                Time
              </label>
              <IconChevronDown
                stroke={2}
                size={24}
                className={css.arrowIcon}
                aria-hidden="true"
              />
              <select
                id="time"
                name="time"
                required
                className={css.selectField}
                defaultValue=""
              >
                <option value="" className={css.timeField} disabled>
                  Select time
                </option>
                <option value="09am" className={css.timeField}>
                  09:00 AM
                </option>
                <option value="10am" className={css.timeField}>
                  10:00 AM
                </option>
                <option value="11am" className={css.timeField}>
                  11:00 AM
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={css.wrapperBtn}>
          <button type="button" className={css.cancelBtn}>
            Cancel
            <IconChevronDown stroke={2} size={12} aria-hidden="true" />
          </button>
          <button type="submit" className={css.submitBtn}>
            Confirm Booking
          </button>
        </div>
      </form>
      {/* <div className={css.successState}>
        <div className={css.successIconWrapperOuter}>
          <IconCircleCheckFilled color="#19724f" size={50} />
        </div>
        <h2 className={css.successTitle}>Your session has been booked!</h2>
        <div className={css.successText}>
          We&#39;ll send a confirmation to your email. {name} will contact you
          shortly.
        </div>
        <button type="button" className={css.closeBtn}>
          Close
        </button>
      </div> */}
    </>
  );
}
