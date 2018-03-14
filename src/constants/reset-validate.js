const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Обязательное поле!'
    }

    if (values.email && !values.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        errors.email = 'Недействительная Э-почта!'
    }
    return errors
}

export default validate