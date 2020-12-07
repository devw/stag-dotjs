const { updateCss } = require("../utils");

const sectionSettings = (body) => {
    console.log(body);
};

const generalSettings = ({ setting_id, value }) => {
    if (/font-size|text-size|border-radius/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}em` });
    }
    if (/text-color/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}` });
    }
};

const kastorHandler = (event) => {
    const body = event.data.data;
    const { hasSection } = body;

    hasSection ? sectionSettings(body) : generalSettings(body);
};

exports.kastor = () => {
    console.log("loading kastor handler");

    globalThis.addEventListener("message", kastorHandler);
};
