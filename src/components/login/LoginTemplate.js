import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {renderField} from '../../constants/create-tags';
import validate from '../../constants/login-validate';

const linkStyle = {
    color: '#535c69',
    fontSize: 14 + 'px',
    float: 'right'
};

const margin = {
    marginTop: 5 + 'px',
}

class LoginTemplate extends Component {
    render() {
        // const {handleSubmit, loginStatus, redirectToReferrer, loading} = this.props;
        const {handleSubmit} = this.props;

        return (
            <div className="center">
                <div className="">
                    <span className='heading-text'>
                        Вход в систему
                    </span>
                    <form onSubmit={handleSubmit}>
                        <p className='validation-error'>
                            {/*{loginStatus}*/}
                        </p>
                        <div className='block-div '>
                            <Field
                                tagName='input'
                                name="email"
                                id='email'
                                className='input-size'
                                labelClass='label-style'
                                type="text"
                                htmlFor='email'
                                placeholder="email@domain.com"
                                label='Э-почта:'
                                component={renderField}
                            />
                        </div>
                        <div className='block-div'>
                            <Field
                                tagName='input'
                                name="password"
                                id='password'
                                className='input-size'
                                labelClass='label-style'
                                type="password"
                                htmlFor='password'
                                placeholder="●●●●●●●●"
                                label='Пароль:'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Link to='/reset' className='link'>
                                <span style={linkStyle} className='link'>Восстановить</span>
                            </Link>
                        </div>
                        <div className="form-buttons">
                             <span>
                                <Link className='cust-btn-danger btn-size' to='/registration'>
                                    РЕГИСТРАЦИЯ
                                </Link>
                            </span>
                            <span className="">
                                <input
                                    className="cust-btn-primary btn-size"
                                    type="submit" value="ВОЙТИ"/>
                            </span>
                        </div>
                        {/*<ul className='form-buttons'>*/}
                            {/*<li style={margin}>*/}
                                {/*<span className="">*/}
                                {/*<Link to='/registration' className="btn-size cust-btn-danger ">*/}
                                    {/*РЕГИСТРАЦИЯ*/}
                                {/*</Link>*/}
                            {/*</span>*/}
                            {/*</li>*/}
                            {/*<li className=''>*/}
                                {/*<span className="">*/}
                                {/*<input*/}
                                    {/*className="btn-size cust-btn-primary  "*/}
                                    {/*type="submit" value="ВОЙТИ"/>*/}
                            {/*</span>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
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

