import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import css from './CamperBookingForm.module.css';
import { useState } from 'react';
// import { useId } from 'react';

export const CamperBookingForm = () => {
  const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSubmit = (values, { resetForm }) => {
    setModalData(values);
    resetForm();
    setIsOpen(true);
  };

  const handleYesClick = () => {
    toast.success('Booking was successful', {
      position: toast.POSITION.TOP_CENTER, // Позиция сверху
      autoClose: 4000, // Время отображения тоста
    });
    setIsOpen(false);
  };

  const handleCancelClick = () => {
    toast.error('Cancellation', {
      position: toast.POSITION.TOP_CENTER, // Позиция сверху
      autoClose: 4000, // Время отображения тоста
    });
    setIsOpen(false);
  };

  const camperSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
    comment: Yup.string().trim().max(200, 'Comment is too long (max 200 characters)'),
    bookingDate: Yup.string().required('Required'),
    // .test('is-future-date', 'Date cannot be in the past', value => {
    //   if (!value) return false;
    //   const selectedDate = new Date(value);
    //   const today = new Date();
    //   today.setHours(0, 0, 0, 0);
    //   return selectedDate >= today;
    // }),
  });

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
            <ErrorMessage className={css.errorText} name="name" component="span" />
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
            <ErrorMessage className={css.errorText} name="email" component="span" />
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
            <ErrorMessage className={css.errorText} name="bookingDate" component="span" />
          </div>

          <div className={css.contInputTextarea}>
            <Field
              className={css.fieldTextarea}
              as="textarea"
              // id={commentId}
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
            <p className={css.checkReservation}>Check your reservation</p> {/* Добавлена строка */}
            <button onClick={handleCancelClick}>Cancel</button>
            <button onClick={handleYesClick}>Yes</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
