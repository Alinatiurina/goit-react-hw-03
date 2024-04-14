import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, 'Must be 50 characters or less')
    .required("Required!"),
 number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, 'Must be 50 characters or less')
    .required("Required!!!")
});


export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{
              name: "",
              number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label>Name:</label>
                    <Field  name="name" />
                    <ErrorMessage  name="name" component="span" />
                </div>
                <div>
                    <label>Number:</label>
                    <Field name="number" />
                    <ErrorMessage  name="number" component="span" />
                </div>
                 <button type="submit">Add contact</button>
            </Form>               
        </Formik>
    )
}