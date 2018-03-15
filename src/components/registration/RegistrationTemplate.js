import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
// import {Link, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {renderField} from '../../constants/create-tags';
import validate from '../../constants/register-validation';

class RegisterTemplate extends Component {
    render() {
        const {handleSubmit} = this.props;
        // const {handleSubmit, regStatus,redirectToReferrer, from} = this.props;
        // console.log(redirectToReferrer);


        return (
            <div className="container">
                <div className="custom-row">
                    <span className='heading-text display-4  text-xs-center p-b-1 m-b-1'>
                        <h5>Регистрация</h5>
                    </span>
                    <form onSubmit={handleSubmit} autoComplete='on'>
                        <p className='validation-error'>
                            {/*{regStatus}*/}
                        </p>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="username_reg"
                                id='username_reg'
                                className='form-control'
                                type="text"
                                htmlFor='username_reg'
                                placeholder="Имя"
                                label='Имя:'
                                component={renderField}
                            />
                        </div>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="email_reg"
                                id='email_reg'
                                className='form-control'
                                type="text"
                                htmlFor='email_reg'
                                placeholder="email@domain.com"
                                label='Э-почта:'
                                component={renderField}
                            />
                        </div>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="password_reg"
                                id='password_reg'
                                className='form-control'
                                type="password"
                                htmlFor='password_reg'
                                placeholder="●●●●●●●●"
                                label='Пароль:'
                                component={renderField}
                            />
                        </div>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="password_reg_confirm"
                                id='password_reg_confirm'
                                className='form-control'
                                type="password"
                                htmlFor='password_reg_confirm'
                                placeholder="●●●●●●●●"
                                label='Повторно введите пароль:'
                                component={renderField}
                            />
                        </div>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="captcha"
                                id='captcha'
                                className='form-control'
                                type="text"
                                htmlFor='captcha'
                                placeholder=""
                                label=''
                                component={renderField}
                            />
                        </div>
                        <div className="form-buttons">
                             <span>
                                <Link className='btn btn-danger btn-size' to='/login'>
                                    НАЗАД
                                </Link>
                            </span>
                            <span className="">
                                <input
                                    className="btn btn-primary btn-size"
                                    type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ"/>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    validate,
})(RegisterTemplate)
