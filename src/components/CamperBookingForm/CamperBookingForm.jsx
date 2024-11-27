import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import css from './CamperBookingForm.module.css';
// import { useId } from 'react';

export const CamperBookingForm = () => {
  //   const nameId = useId();
  //   const emailId = useId();
  //   const bookingDateId = useId();
  //   const commentId = useId();

  const initState = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };
  const handleSubmit = () => {};
  const camperSchema = Yup.object().shape();

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initState} onSubmit={handleSubmit} validationSchema={camperSchema}>
        <Form className={css.form} autoComplete="off">
          <div className={css.contInput}>
            <Field
              className={css.field}
              type="text"
              // id={nameId}
              name="name"
              placeholder="Name*"
              required
            />
            {/* <ErrorMessage className={css.errorText} name="name" component="span" /> */}
          </div>

          <div className={css.contInput}>
            <Field
              className={css.field}
              type="email"
              // id={emailId}
              name="email"
              placeholder="Email*"
              required
            />
            {/* <ErrorMessage className={css.errorText} name="email" component="span" /> */}
          </div>

          <div className={css.contInput}>
            <Field
              className={css.field}
              type="date"
              // id={bookingDateId}
              name="bookingDate"
              placeholder="Booking Date*"
              required
            />
            {/* <ErrorMessage className={css.errorText} name="bookingDate" component="span" /> */}
          </div>

          <div className={css.contInputTextarea}>
            <Field
              className={css.fieldTextarea}
              as="textarea"
              // id={commentId}
              name="comment"
              placeholder="Comment"
            />
            {/* <ErrorMessage className={css.errorText} name="comment" component="span" /> */}
          </div>

          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
