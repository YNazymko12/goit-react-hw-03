import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { username: '', phone: '' };

const ContactForm = ({ onAdd }) => {
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

  const handleSubmit = (values, action) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phone,
    };
    onAdd(newContact);
    action.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage name="phone" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
