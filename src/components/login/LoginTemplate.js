import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {renderField} from '../../constants/create-tags';
import validate from '../../constants/login-validate';

class LoginTemplate extends Component {
    render() {
        // const {handleSubmit, loginStatus, redirectToReferrer, loading} = this.props;
        const {handleSubmit} = this.props;

        return (
            <div className="">
                <div className="">
                    <span className='heading-text'>
                        Вход в систему
                    </span>
                    <form onSubmit={handleSubmit}>
                        <p className='validation-error'>
                            {/*{loginStatus}*/}
                        </p>
                        <ul>
                            <div>
                                <Field
                                    tagName='input'
                                    name="email"
                                    id='email'
                                    className=''
                                    type="text"
                                    htmlFor='email'
                                    placeholder="email@domain.com"
                                    label='Э-почта:'
                                    component={renderField}
                                />
                            </div>
                            <div>
                                <Field
                                    tagName='input'
                                    name="password"
                                    id='password'
                                    className=''
                                    type="password"
                                    htmlFor='password'
                                    placeholder="●●●●●●●●"
                                    label='Пароль:'
                                    component={renderField}
                                />
                            </div>
                            <span>
                                <Link to='/reset' className="">Восстановить</Link>
                            </span>
                            <div className="">
                                <span className="">
                                    <Link to='/registration' className="">РЕГИСТРАЦИЯ</Link>
                                </span>
                                    <span className="">
                                    <input
                                        className=""
                                        type="submit" value="ВОЙТИ"/>
                                </span>
                            </div>
                        </ul>

                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    validate,
})(LoginTemplate)

// <ul>
// <li>
// <input type="text" name="login" id="login" value="" class="pull-right" placeholder="email@domain.com" required="required">
//     <label for="login">Э-почта:</label>
//
// <div class="clearfix"></div>
// </li>
// <li>
//     <input type="password" name="password" id="password" value="" placeholder="●●●●●●●●" class="pull-right" required="required">
//         <label for="password">Пароль:</label>
//
//         <div class="clearfix"></div>
// </li>
// <li class="login-error" style="display: none">
//     <span class="label error">Неправильная э-почта или пароль!</span>
//     </li>
//     <li class="restore-button">
//         <a href="/ru/login/reset/" class="pull-right login-action" data-action="reset">Восстановить</a>
//
//         <div class="clearfix"></div>
//     </li>
//     </ul>
