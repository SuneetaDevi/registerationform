import React, { useState } from "react";
import SignUpform from "./SignUpform";
import Signupformsucess from "./SIgnupformsucess";
const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (        <div>
            { !formIsSubmitted ? <SignUpform submitForm = {submitForm}/> : <Signupformsucess/>}
        </div>
    )
}
export default Form;