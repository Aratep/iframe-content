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
            <div className="center">
                <div className="">
                    <div className="">
                        <span className="heading-text">Регистрация</span>
                    </div>
                    <div className="card-body">
                        <form className="form" onSubmit={handleSubmit} autoComplete="on">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">Имя:</label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="username_reg"
                                        id='username_reg'
                                        className='form-control'
                                        type="text"
                                        htmlFor='username_reg'
                                        placeholder="Имя"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">Э-почта:</label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="email_reg"
                                        id='email_reg'
                                        className='form-control'
                                        type="text"
                                        htmlFor='email_reg'
                                        placeholder="email@domain.com"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">Пароль:</label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="password_reg"
                                        id='password_reg'
                                        className='form-control'
                                        type="password"
                                        htmlFor='password_reg'
                                        placeholder="*******"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">Повторно пароль:</label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="password_reg_confirm"
                                        id='password_reg_confirm'
                                        className='form-control'
                                        type="password"
                                        htmlFor='password_reg_confirm'
                                        placeholder="*******"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">
                                    <img src='https://thefallenbrain.files.wordpress.com/2016/05/input-black.gif?w=816' className='img-style' alt='captcha'/>
                                </label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="captcha"
                                        id='captcha'
                                        className='form-control'
                                        type="text"
                                        htmlFor='captcha'
                                        placeholder="Введите цифры"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-label"></label>
                                <div className="col-sm-10">
                                    <Link className='cust-btn btn btn-danger' to='/login'>
                                        НАЗАД
                                    </Link>
                                    <input type="submit" className="right cust-btn btn btn-primary" value="ЗАРЕГИСТРИРОВАТЬСЯ"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    validate,
})(RegisterTemplate)
