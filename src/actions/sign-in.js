const { SIGNIN_ID, REGISTER_ID } = require("../templates/");
const { $q, isValidEmail, isValidPsw } = require("../utils/");
const { sendHttpRequest } = require("../services");
const { serialize, toggleModules } = require("../utils");

const tgt = {
    form: `.${SIGNIN_ID} form`,
    pswFormatError: `.${SIGNIN_ID} .js-error .js-psw-valid`,
    register: `.js-create-account`,
};

// TODO refactor this part
const areInputsValid = (inputs) => {
    if (!isValidPsw(inputs["customer[password]"])) {
        $q(tgt.pswFormatError).style.setProperty("display", "block");
        return false;
    } else {
        $q(tgt.pswFormatError).style.setProperty("display", "none");
    }
    return true;
};

const onSubmit = async (e) => {
    e.preventDefault();
    const inputs = serialize($q(tgt.form));
    if (!areInputsValid(inputs)) return null;
    $q(tgt.form).action = "/account/login";
    const resp = await sendHttpRequest("POST", e);
    console.log("shopify response.....", resp);
    globalThis.__form = $q(tgt.form);
};

const toggleButton = (e) => {
    const form = $q(tgt.form);
    const email = form.querySelector('[name="customer[email]"]').value;
    isValidEmail(email)
        ? form.querySelector("[type='submit']").removeAttribute("disabled")
        : form.querySelector("[type='submit']").setAttribute("disabled", "");
};

const register = () => toggleModules([REGISTER_ID, SIGNIN_ID]);

exports.init = () => {
    const form = $q(tgt.form);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    $q(tgt.register)?.addEventListener("click", register);
};
