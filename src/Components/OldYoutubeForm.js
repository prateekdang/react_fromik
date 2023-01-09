import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("Formik Values=>", values)
}
// const validate = values => {
//     let errors = {}
//     if (!values.name) {
//         errors.name = "Required"
//     }
//     if (!values.email) {
//         errors.email = "Required"
//     }
//     if (!values.channel) {
//         errors.channel = "Required"
//     }
//     return errors;
// }
const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format").required("Required!"),
    channel: Yup.string().required("Required!")
})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate
    })
    // console.log("FORMIC VALUES", formik.values)     // its show the update values which you written in inut field <=
    // console.log("FORMIC ERRORS", formik.errors)     // its show the errors returns error
    // console.log("FORMIC TOUCHED", formik.touched)   //its show visited fields how many times you touched the input fiels returns true
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' name='channel' value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm;