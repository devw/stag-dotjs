const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, debounce, toggleLoading } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
let form, promise;
const emailMap = new Map();

const setEmail = async (email) => {
    const emails = Array.from(emailMap.keys());
    await promise;
    if (!emails.length) {
        form.removeEventListener("input", toggleButton, true);
        form.addEventListener("input", debounce(toggleButton, 500), true);
    }
    if (emails.every((e) => !RegExp(`^${e}`, "i").test(email))) {
        promise = getCustomerStatus(email);
        emailMap.set(email, promise);
    }
};

const getEmail = () => {
    const emails = Array.from(emailMap.keys());
    const lastEmail = $q(`.${LANDING_ID} [type='email']`).value;
    const email = emails.find((e) => RegExp(`^${e}`, "i").test(lastEmail));
    return emailMap.get(email);
};

const activeBtn = async (btn, email) => {
    btn.removeAttribute("disabled");
    setEmail(email);
};

const onSubmit = async () => {
    toggleLoading();
    const result = await getEmail();
    toggleLoading();
    if (!result?.state) togglePage(REGISTER_ID);
    else if (result.state === "enabled") togglePage(SIGNIN_ID);
    else if (result.state === "disabled") togglePage(ACTIVATE_ID);
};

const emailAutofill = () => {
    const emailSelector = "[type='email']";
    const email = form.querySelector(emailSelector).value;
    const fields = document.querySelectorAll(`#${IDs.APP_ID} ${emailSelector}`);
    fields.forEach((e) => (e.value = email));
};

const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn(btn, email) : disableBtn(btn);
};

exports.init = () => {
    form = $q(`.${LANDING_ID} form`);
    form.addEventListener("input", toggleButton, true);
    form.addEventListener("submit", onSubmit);
    form.addEventListener("submit", emailAutofill);
};
