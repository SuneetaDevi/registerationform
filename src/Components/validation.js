
const validation = (values) => {
    let errors = {};

    if(!values.fullname) {
        errors.fullname = "Name is Required."
    }
    if(!values.email) {
        errors.email = "Name is Required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }
    if(!values.password) {
        errors.password = "Password is Required."
    } else if(values.password.length < 5) {
        errors.password = "Password must be more than 5 characters";
    }
    return errors;
}

export default validation;