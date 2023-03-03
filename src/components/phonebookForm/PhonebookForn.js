import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  ErrorMessage,
  FormLabel,
  LabelName,
  FormBtn,
  Field,
} from './PhonebookFrom.styled';
import PropTypes from 'prop-types';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Format tel: xxx-xx-xx')
    .max(9, 'Format tel: xxx-xx-xx')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <LabelName>Name</LabelName>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel htmlFor="number">
          <LabelName>Number</LabelName>
          <Field name="number" placeholder="xxx-xx-xx" />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
