import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

export const CustomDatePicker = ({ field, form, ...props }) => {
  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null} // Sets the value of the calendar
        onChange={date => form.setFieldValue(field.name, date)} // Updates Formik's field value
        placeholderText={props.placeholder || 'Booking date*'} // Placeholder text
        // Custom CSS class for styling
        minDate={new Date()} // Set the minimum date to today's date
        popperPlacement="top-end"
        popperClassName="customPopper"
      />
    </div>
  );
};
