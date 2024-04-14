 import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: Date.now(),
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