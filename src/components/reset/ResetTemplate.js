import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {renderField} from '../../constants/create-tags';
import validate from '../../constants/reset-validate';

class ResetTemplate extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="center">
                <div className="">
                    <div className="">
                        <span className="heading-text">Восстановление</span>
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
                                <label className="col-sm-2 col-form-label form-control-label"></label>
                                <div className="col-sm-10">
                                    <Link className='cust-btn btn btn-danger' to='/login'>
                                        НАЗАД
                                    </Link>
                                    <input type="submit" className="right cust-btn btn btn-primary" value="ВОССТАНОВИТЬ"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*<div className="">*/}
                    {/*<span className='heading-text '>*/}
                       {/*Восстановление*/}
                    {/*</span>*/}
                    {/*<form onSubmit={handleSubmit}>*/}
                        {/*<p className='validation-error'>*/}
                            {/*/!*{loginStatus}*!/*/}
                        {/*</p>*/}
                        {/*<div className=' '>*/}
                            {/*<Field*/}
                                {/*tagName='input'*/}
                                {/*name="email"*/}
                                {/*id='email'*/}
                                {/*className='input-size'*/}
                                {/*labelClass='label-style'*/}
                                {/*type="text"*/}
                                {/*htmlFor='email'*/}
                                {/*placeholder="email@domain.com"*/}
                                {/*label='Э-почта:'*/}
                                {/*component={renderField}*/}
                            {/*/>*/}
                        {/*</div>*/}
                        {/*<div className="form-buttons">*/}
                            {/*<span className="">*/}
                                {/*<Link to='/login' className="cust-btn-danger btn-size">*/}
                                    {/*НАЗАД*/}
                                {/*</Link>*/}
                            {/*</span>*/}
                            {/*<span className="">*/}
                                {/*<input*/}
                                    {/*className="cust-btn-primary btn-size"*/}
                                    {/*type="submit"*/}
                                    {/*value="ВОССТАНОВИТЬ"/>*/}
                            {/*</span>*/}
                        {/*</div>*/}
                    {/*</form>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default reduxForm({
    form: 'reset',
    validate,
})(ResetTemplate)
