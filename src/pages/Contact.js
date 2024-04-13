import React from 'react';
import { Formik, Form } from 'formik';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (values) => {
        emailjs
            .send('service_r6mwpg6', 'contact_form', values, {
                publicKey: 'kvl3V6RfqVnng_yUY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Please leave your details here and we will be in touch</h3>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}
                    onSubmit={(values, { setSubmitting, resetForm, }) => {
                        sendEmail(values);
                        alert(
                            "Thank you for the submission. We will be in contact with you shortly"
                        );
                        setSubmitting(false);
                        resetForm();
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form id="contactForm" name="sentMessage">
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-group mb-md-0">
                                            <input
                                                className="form-control"
                                                id="name"
                                                type='text'
                                                placeholder="Your name"
                                                required="required"
                                                data-validation-required-message="Please enter your name."
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group mb-md-0">
                                            <input
                                                className="form-control"
                                                id="email"
                                                type='email'
                                                placeholder="Your email"
                                                required="required"
                                                data-validation-required-message="Please enter your email."
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Please add a message"
                                            required="required"
                                            data-validation-required-message="Please enter a message."
                                            name="message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase"
                                    id="sendMessageButton"
                                    type="submit"
                                    disabled={isSubmitting}
                                >Send Message</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact;