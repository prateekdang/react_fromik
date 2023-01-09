import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("Formik Values=>", values)
}
const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format").required("Required!"),
    channel: Yup.string().required("Required!")
})

function YoutubeForm() {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form >
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name'></Field>
                    <ErrorMessage name="name" />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' ></Field>
                    <ErrorMessage name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel'></Field>
                    <ErrorMessage name="channel" />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;