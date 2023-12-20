function validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.email === "") {
        errors.email = "Email tidak boleh kosong";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Format email tidak valid";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password tidak boleh kosong";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Format pasword tidak valid";
    } else {
        errors.password = "";
    }

    return errors;
}


export default validation;