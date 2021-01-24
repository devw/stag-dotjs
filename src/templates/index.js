const containerTmpl = require("./container.html");
const landingTmpl = require("./landing.html");
const registerTmpl = require("./register.html");
const signInTmpl = require("./sign-in.html");
const activateTmpl = require("./activate.html");
const registerInputsTmpl = require("./register-inputs.html");
const { IDs } = require("../config");
const Mustache = require("mustache");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const getPartialTemplate = ({ id, html }) => {
    html = `<div class="${id}" style="display: none">${html}</div>`;
    return `<script id="${id}" type="text/x-dot-template">${html}</script>`;
};
const templates = [];

templates.push(getTemplate({ id: IDs.CONTAINER_ID, html: containerTmpl }));
// templates.push(getPartialTemplate({ id: IDs.LANDING_ID, html: landingTmpl }));
// templates.push(getPartialTemplate({ id: IDs.REGISTER_ID, html: registerTmpl }));
// templates.push(getPartialTemplate({ id: IDs.ACTIVATE_ID, html: activateTmpl }));
// templates.push(getTemplate({ id: "registerInputs", html: registerInputsTmpl }));

// templates.push(getPartialTemplate({ id: IDs.SIGNIN_ID, html: signInTmpl }));

const rendereTemplate = (node, { text }) => {
    node.innerHTML = Mustache.render(containerTmpl, text, {
        landing: landingTmpl,
        register: registerTmpl,
        activate: activateTmpl,
        signin: signInTmpl,
    });
};

module.exports = {
    templates,
    rendereTemplate,
};
