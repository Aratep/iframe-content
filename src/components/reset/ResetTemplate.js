import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {renderField} from '../../constants/create-tags';
import validate from '../../constants/reset-validate';

class ResetTemplate extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="">
                <div className="">
                    <span className='heading-text'>
                       Восстановление
                    </span>
                    <form onSubmit={handleSubmit}>
                        <p className='validation-error'>
                            {/*{loginStatus}*/}
                        </p>
                        <div className='col-sm-6 '>
                            <Field
                                tagName='input'
                                name="email"
                                id='email'
                                className='form-control'
                                type="text"
                                htmlFor='email'
                                placeholder="email@domain.com"
                                label='Э-почта:'
                                component={renderField}
                            />
                        </div>
                        <div className="form-buttons">
                            <span className="">
                                <Link to='/login' className="btn btn-primary ">
                                    НАЗАД
                                </Link>
                            </span>
                            <span className="">
                                <input
                                    className="btn btn-danger "
                                    type="submit"
                                    value="ВОССТАНОВИТЬ"/>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'reset',
    validate,
})(ResetTemplate)
