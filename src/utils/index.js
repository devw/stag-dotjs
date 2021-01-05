const { updatePages, updateCss } = require("./load-pages");
const { toggleModules } = require("./toggle-module");
const { serialize, isFormFilled } = require("./serialize");
const { isValidPsw, isValidEmail, showError } = require("./input-checker");
const { $q, $qq } = require("./q-selector");

exports.updatePages = updatePages;
exports.updateCss = updateCss;
exports.toggleModules = toggleModules;
exports.serialize = serialize;
exports.isFormFilled = isFormFilled;
exports.showError = showError;
exports.isValidPsw = isValidPsw;
exports.isValidEmail = isValidEmail;
exports.$q = $q;
exports.$qq = $qq;
