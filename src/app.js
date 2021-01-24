require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");

const { IDs } = require("./config");
const { rendereTemplate } = require("./templates");
const { getConfiguration } = require("./services");

const node = document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
document.body.append(node);
// const { rendereTemplate } = require("./templates");
// getConfiguration().then((config) => {
//     window._config = config;
//     rendereTemplate(node, config);
// });

const { loadTheme, showTheme } = require("./actions");
loadTheme(node).then(() => showTheme());
