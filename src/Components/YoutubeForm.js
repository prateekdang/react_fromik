import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: ""
}
const onSubmit = values => {
    console.log("Formik Values=>", values)
}
const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format").required("Required!"),
    channel: Yup.string().required("Required!"),
    comments: Yup.string().required("Required!"),
    address: Yup.string().required("Required!")
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
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name="name" />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name="channel" />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                    <ErrorMessage name="comments" />
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {
                            (props) => {
                                const { field, meta } = props
                                return (
                                    <div>
                                        <input type="text" id='address'{...field} />
                                        {meta.touch && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <ErrorMessage name="address" />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;