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
                     <span className='heading-text'>
                       Регистрация
                    </span>
                    <form onSubmit={handleSubmit} autoComplete='on'>
                        <p className='validation-error'>
                            {/*{regStatus}*/}
                        </p>
                        <div>
                            <Field
                                tagName='input'
                                name="username_reg"
                                id='username_reg'
                                className=''
                                type="text"
                                htmlFor='username_reg'
                                placeholder="Имя"
                                label='Имя:'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Field
                                tagName='input'
                                name="email_reg"
                                id='email_reg'
                                className='input w3-input w3-border'
                                type="text"
                                htmlFor='email_reg'
                                placeholder="email@domain.com"
                                label='Э-почта:'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Field
                                tagName='input'
                                name="password_reg"
                                id='password_reg'
                                className='input w3-input w3-border'
                                type="password"
                                htmlFor='password_reg'
                                placeholder="●●●●●●●●"
                                label='Пароль:'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Field
                                tagName='input'
                                name="password_reg_confirm"
                                id='password_reg_confirm'
                                className='input w3-input w3-border'
                                type="password"
                                htmlFor='password_reg_confirm'
                                placeholder="●●●●●●●●"
                                label='Повторно введите пароль:'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Field
                                tagName='input'
                                name="captcha"
                                id='captcha'
                                className=''
                                type="text"
                                htmlFor='captcha'
                                placeholder=""
                                label=''
                                component={renderField}
                            />
                        </div>
                        <div className="wrapper">
                             <span>
                                <Link to='/login'>НАЗАД</Link>
                            </span>
                            <span className="group-btn">
                                <input
                                    className="w3-button w3-red w3-margin-bottom button"
                                    type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ"/>
                            </span>
                        </div>
                    </form>
                    {/*<p className="change_link">*/}
                        {/*Already a member ?*/}
                        {/*<Link to='/login' className="to_register"> Go and log in </Link>*/}
                    {/*</p>*/}
                </div>
                {/*{*/}
                    {/*redirectToReferrer === true && <Redirect to={from}/>*/}
                {/*}*/}
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    validate,
})(RegisterTemplate)
