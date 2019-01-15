import React from 'react';
import './Login.css';
import { 
    Field, 
    reduxForm, 
    SubmissionError 
} from 'redux-form';
import { 
    Form, 
    FormGroup, 
    Col,
    Button
} from 'reactstrap';

import { toastr } from 'react-redux-toastr';
import { classNames } from 'classnames';
class Login extends React.Component {
    componentDidMount(){
        console.log("this.props--------------------------------------", this.props)
    }
    renderField = (field) => {
        return (
            <Col lg={12}>
                <input 
                    {...field.input} 
                    className={field.className} 
                    type={field.type} 
                    placeholder={field.placeholder} 
                />
                {
                    field.meta.touched ? <span className="error text-danger">{field.meta.error}</span> : null
                }
                   
            </Col>
        );
    }

    renderFieldCheckBox = (field) => {
        return (
            
                <input
                    {...field.input}
                    className={field.className}
                    type={field.type}
                    placeholder={field.placeholder}
                />
        );
    }

    onSubmit = (values) => {

        let requestObj = {
            email: values.email,
            password: values.password,
        }
        let rememberObj = {
            remember: values.remember
        }
        this.props.doLogin(requestObj);
        if (rememberObj.remember) {
            window.localStorage.setItem('remember', rememberObj.remember);
        }
        toastr.success('The title', 'The message');
    }

    render() {
        const { handleSubmit } = this.props;
        console.log("handleSubmit", this.props);
        return (
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-8">
                                <div className="card shadow-lg mt-5">
                                    <div className="card-body px-5 text-center my-5 py-5">
                                        <h3 className="fromTitle col-lg-12 text-info mb-5">React Fiber Framework</h3>
                                        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="text-left">
                                            <FormGroup row>
                                                <Field className="form-control" name="email" component={this.renderField} type="text" placeholder="email" />
                                            </FormGroup>

                                            <FormGroup row>
                                                <Field className="form-control" name="password" component={this.renderField} type="password" placeholder="password" />
                                            </FormGroup>

                                            <FormGroup >
                                                <div className="forgotPass">
                                                    <a href="#">Forgot?</a>
                                                </div>
                                            </FormGroup>
                                            
                                            <FormGroup row>
                                                <Col lg={12}>
                                                    <div className="checkbox pull-left form-check-inline">
                                                        <label className="form-check-label">
                                                            <Field className="remember form-check-input" name="remember" component={this.renderFieldCheckBox} type="checkbox" />
                                                            <span className="text-info">{ ' ' }Remember me</span>
                                                        </label>
                                                    </div>
                                                    <div className="text-right">
                                                        {/* <input className="btn btn-primary confirmBtn border-0" type="submit" value="CONFIRM" /> */}
                                                        <Button type="submit" className="btn bg-info border-0">Sign In</Button>
                                                    </div>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                );
            }

    componentDidUpdate(prevProps, prevState) {
        console.log("this.props.auth", this.props.auth);
        if (this.props.auth.hasOwnProperty("data")) {
            if (this.props.auth.data.hasOwnProperty("token")) {
                //sessionStorage.setItem("lastname", "Smith");
                sessionStorage.setItem("token",this.props.auth.data.token )
                this.props.history.push('/dashboard/users');
            }
        }
    }
}


var validate = (values) => {
    console.log("validate(values):", values);
    const errors = {}

    if (!values.email) {
        errors.email = '* Email is Required';
    }
    if (!values.password) {
        errors.password = '* Password Required';
    }

    return errors;
}

export default reduxForm({
    form: 'SignInForm',
    validate: validate
})(Login);








