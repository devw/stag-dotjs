const doT = require("../doT");
const { templates } = require("../templates/");
const { IDs } = require("../config");
const $ = document.querySelector.bind(document);
const { CONTAINER_ID, LANDING_ID, REGISTER_ID } = IDs;
const { ACTIVATE_ID, SIGNIN_ID, APP_ID } = IDs;
let TEXT = {};

const getDef = () => ({
    [LANDING_ID]: document.getElementById(LANDING_ID).text,
    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,
    [ACTIVATE_ID]: document.getElementById(ACTIVATE_ID).text,
    [SIGNIN_ID]: document.getElementById(SIGNIN_ID).text,
    registerInputs: document.getElementById("registerInputs").text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

const getTemplate = (data) => {
    data?.orderedBlock?.forEach((e) => (data[e] = true));
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(CONTAINER_ID).text,
        def: getDef(),
    })(data);
};

const updateText = (text) => {
    const hasManyKeys = Reflect.ownKeys(text).length > 1;
    const firstKey = Reflect.ownKeys(text)[0];
    if (hasManyKeys) TEXT = text;
    else TEXT[firstKey] = text[firstKey];
    return TEXT;
};

const getBlocksAttr = () => {
    const blocks = $(`.${REGISTER_ID} form`).getAttribute("data-blocks");
    return blocks.length > 0 ? blocks.split(",") : [];
};

const filterCss = (data) => {
    // TODO refactoring
    let imgUrl;
    imgUrl = data["--container-bg-image"];
    if (imgUrl) data["--container-bg-image"] = `url(${imgUrl})`;
    imgUrl = data["--form-header-image"];
    if (imgUrl) data["--form-header-image"] = `url(${imgUrl})`;
    return data;
};

exports.getBlocksAttr = getBlocksAttr;

exports.sortBlocks = () => {
    const blocks = getBlocksAttr();
    blocks.forEach((e, i) => $(`.${e}`)?.style?.setProperty("order", i));
};

exports.updatePages = (text) => {
    text = updateText(text);
    // $(`#${APP_ID}`).innerHTML = getTemplate(text);
};

exports.updateCss = (cssVars) => {
    cssVars = filterCss(cssVars);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else $(`#${APP_ID}`).style.setProperty(key, obj);
    })(cssVars);
};
