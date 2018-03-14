const validate = values => {
    const errors = {}
    if (!values.username_reg) {
        errors.username_reg = 'Обязательное поле!'
    }
    if (!values.email_reg) {
        errors.email_reg = 'Обязательное поле!'
    }
    if (!values.password_reg) {
        errors.password_reg = 'Обязательное поле!'
    }
    if (!values.password_reg_confirm) {
        errors.password_reg_confirm = 'Обязательное поле!'
    }

    // if (values.username_reg && values.username_reg.length < 6) {
    //     errors.username_reg = 'Username is too short'
    // }
    if (values.email_reg && !values.email_reg.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        errors.email_reg = 'Недействительная Э-почта!'
    }

//     if (values.password_reg && !values.password_reg.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
//         errors.password_reg = 'Please much the requested format'
//     }
    if(values.password_reg_confirm  && values.password_reg !== values.password_reg_confirm) {
        errors.password_reg_confirm = 'Пароли не савпали!'
    }
    return errors
}

export default validate