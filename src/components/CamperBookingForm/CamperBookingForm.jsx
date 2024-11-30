import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './CamperBookingForm.module.css';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const CamperBookingForm = () => {
  const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const initState = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    setModalData(values);
    resetForm();
    setIsOpen(true);
  };

  const handleYesClick = () => {
    setIsOpen(false);
    toast.success(`Booking was successful`, {
      duration: 4000,
      position: 'top-center',
      style: {
        background: 'orange',
        color: 'black',
      },
    });
  };

  const handleCancelClick = () => {
    setIsOpen(false);

    toast.error(`Cancellation`, {
      duration: 4000,
      position: 'bottom-center',
      style: {
        background: 'orange',
        color: 'black',
      },
    });
  };

  const camperSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
    comment: Yup.string().trim().max(200, 'Comment is too long (max 200 characters)'),
    bookingDate: Yup.string().required('Required'),
  });

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initState} onSubmit={handleSubmit} validationSchema={camperSchema}>
        <Form className={css.form} autoComplete="off">
          <div className={css.contInput}>
            <Field className={css.field} type="text" name="name" placeholder="Name*" required />
            <ErrorMessage className={css.errorText} name="name" component="span" />
          </div>

          <div className={css.contInput}>
            <Field className={css.field} type="email" name="email" placeholder="Email*" required />
            <ErrorMessage className={css.errorText} name="email" component="span" />
          </div>

          <div className={css.contInput}>
            <Field
              className={css.field}
              type="date"
              name="bookingDate"
              // placeholder="Booking Date*"
              required
              min={new Date().toISOString().split('T')[0]} //Set the minimum date as today
            />
            <ErrorMessage className={css.errorText} name="bookingDate" component="span" />
          </div>

          <div className={css.contInputTextarea}>
            <Field
              className={css.fieldTextarea}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage className={css.errorText} name="comment" component="span" />
          </div>

          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>

      {isOpen && (
        <div className={css.modalOverlay}>
          <div className={css.modal}>
            <h3 className={css.modalTitle}>Booking Details</h3>
            <p>Name: {modalData.name}</p>
            <p>Email: {modalData.email}</p>
            <p>Booking Date: {modalData.bookingDate}</p>
            <p>Comment: {modalData.comment || 'No comment provided'}</p>
            <br />
            <p className={css.checkReservation}>
              Check your reservation, are you sure you want to make a reservation?
            </p>
            <div className={css.contModalBtn}>
              <button className={css.btnYes} onClick={handleYesClick}>
                Yes
              </button>
              <button className={css.btnCancel} onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};
