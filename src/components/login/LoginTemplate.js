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
                    <div className="">
                        <span className="heading-text">Вход в систему</span>
                    </div>
                    <div className="card-body">
                        <form className="form" onSubmit={handleSubmit} autoComplete="on">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label form-control-label">Э-почта:</label>
                                <div className='col-sm-8'>
                                    <Field
                                        tagName='input'
                                        name="email"
                                        id='email'
                                        className='form-control'
                                        type="text"
                                        htmlFor='email'
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
                                        name="password"
                                        id='password'
                                        className='form-control'
                                        type="password"
                                        htmlFor='password'
                                        placeholder="*******"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className='link-div'>
                                <Link to='/reset' className='no-decor'>
                                    <span  className='link'>Восстановить</span>
                                </Link>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-label"></label>
                                <div className="col-sm-10">
                                    <Link className='cust-btn btn btn-danger' to='/registration'>
                                        РЕГИСТРАЦИЯ
                                    </Link>
                                    <input type="submit" className="right cust-btn btn btn-primary" value="ВОЙТИ"/>
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
    form: 'login',
    validate,
})(LoginTemplate)

