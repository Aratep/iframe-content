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
                <div className="custom-row">
                    <span className='heading-text'>
                        Регистрация
                    </span>
                    <form onSubmit={handleSubmit} autoComplete='on'>
                        <p className='validation-error'>
                            {/*{regStatus}*/}
                        </p>
                        <div className='block-div '>
                            <Field
                                tagName='input'
                                name="username_reg"
                                id='username_reg'
                                className='input-size'
                                labelClass='label-style'
                                type="text"
                                htmlFor='username_reg'
                                placeholder="Имя"
                                label='Имя:'
                                component={renderField}
                            />
                        </div>
                        <div className='block-div '>
                            <Field
                                tagName='input'
                                name="email_reg"
                                id='email_reg'
                                className='input-size'
                                labelClass='label-style'
                                type="text"
                                htmlFor='email_reg'
                                placeholder="email@domain.com"
                                label='Э-почта:'
                                component={renderField}
                            />
                        </div>
                        <div className='block-div '>
                            <Field
                                tagName='input'
                                name="password_reg"
                                id='password_reg'
                                className='input-size'
                                labelClass='label-style'
                                type="password"
                                htmlFor='password_reg'
                                placeholder="●●●●●●●●"
                                label='Пароль:'
                                component={renderField}
                            />
                        </div>
                        <div className='block-div '>
                            <Field
                                tagName='input'
                                name="password_reg_confirm"
                                id='password_reg_confirm'
                                className='input-size'
                                labelClass='label-style'
                                type="password"
                                htmlFor='password_reg_confirm'
                                placeholder="●●●●●●●●"
                                label='Повторно пароль:'
                                component={renderField}
                            />
                        </div>
                        <div className='block-div '>
                            {/*<label>*/}
                                {/*<img className='img-style label-style' src='https://bespecular-blog.s3.amazonaws.com/blog74054e389122fd355363104c1990700d__t_e048fd7a0f1e.png'/>*/}
                            {/*</label>*/}
                            <Field
                                tagName='input'
                                name="captcha"
                                id='captcha'
                                className='input-size'
                                labelClass='label-style'
                                type="text"
                                htmlFor='captcha'
                                placeholder="Введите цифры"
                                data-icon='https://bespecular-blog.s3.amazonaws.com/blog74054e389122fd355363104c1990700d__t_e048fd7a0f1e.png'
                                label=''
                                component={renderField}
                            />
                        </div>
                        <div className="form-buttons">
                             <span>
                                <Link className='cust-btn-danger btn-size' to='/login'>
                                    НАЗАД
                                </Link>
                            </span>
                            <span className="">
                                <input
                                    className="cust-btn-primary btn-size"
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
