/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/container.html":
/*!**************************************!*\
  !*** ./src/templates/container.html ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"container\\\">\\n    <div class=\\\"content\\\">\\n        <div class=\\\"loading\\\" style=\\\"display: none\\\">\\n            <div class=\\\"loading-icon\\\"></div>\\n        </div>\\n        <div class=\\\"btn-close js-close\\\">+</div>\\n        {{#def.landing }} {{#def.register }} {{#def.signin}}\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/container.html?");

/***/ }),

/***/ "./src/templates/dashboard.html":
/*!**************************************!*\
  !*** ./src/templates/dashboard.html ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"{{#def.container}}\\n<form action=\\\"\\\" style=\\\"width: 28%\\\">\\n    <input\\n        type=\\\"button\\\"\\n        class=\\\"btn btn-primary js-load-style\\\"\\n        value=\\\"load json from textarea\\\"\\n    />\\n    <textarea\\n        class=\\\"js-custom-style\\\"\\n        style=\\\"width: 100%; max-width: 100%; height: 60vh; margin: 1rem 0\\\"\\n    ></textarea>\\n    <div class=\\\"js-load-theme\\\">\\n        <input\\n            type=\\\"button\\\"\\n            class=\\\"btn btn-primary\\\"\\n            value=\\\"franklin\\\"\\n            style=\\\"margin: 10px 0\\\"\\n        />\\n        <input\\n            type=\\\"button\\\"\\n            class=\\\"btn btn-primary\\\"\\n            value=\\\"balzac\\\"\\n            style=\\\"margin: 10px 0\\\"\\n        />\\n        <input\\n            type=\\\"button\\\"\\n            class=\\\"btn btn-primary\\\"\\n            value=\\\"respire\\\"\\n            style=\\\"margin: 10px 0\\\"\\n        />\\n    </div>\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/dashboard.html?");

/***/ }),

/***/ "./src/templates/landing.html":
/*!************************************!*\
  !*** ./src/templates/landing.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image landing_image\\\" />\\n<div class=\\\"title\\\">{{=it.loginRegister}}</div>\\n<div class=\\\"sub-title\\\">\\n    <p>{{=it.enterYourEmailToContinue}}</p>\\n</div>\\n<div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"inputs-container\\\">\\n    <div class=\\\"inputs-container\\\">\\n        <input\\n            class=\\\"input-text {{? it.hasSocialLogin }} input-text-secondary {{?? true}}{{?}}\\\"\\n            name=\\\"email\\\"\\n            placeholder=\\\"{{=it.yourEmail}}\\\"\\n            type=\\\"email\\\"\\n        />\\n        {{? it.hasSocialLogin }}\\n        <input\\n            type=\\\"submit\\\"\\n            style=\\\"background: none; border: none; font-weight: 900\\\"\\n            name=\\\"validate\\\"\\n            disabled=\\\"\\\"\\n            value=\\\"OK\\\"\\n        />\\n        {{?? true }}{{?}}\\n    </div>\\n    {{? it.hasSocialLogin }}\\n    <div>\\n        <div class=\\\"or-social-login\\\">{{=it.or}}</div>\\n        <a href=\\\"#\\\" class=\\\"fb btn\\\">\\n            <i class=\\\"fa fa-facebook fa-fw\\\"></i> Login with Facebook\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"google btn\\\"\\n            ><i class=\\\"fa fa-google fa-fw\\\"></i> Login with Google+\\n        </a>\\n    </div>\\n    {{?? true }}\\n    <input\\n        type=\\\"submit\\\"\\n        class=\\\"btn btn-primary\\\"\\n        name=\\\"validate\\\"\\n        disabled=\\\"\\\"\\n        value=\\\"{{=it.validate}}\\\"\\n    />\\n    {{?}}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/landing.html?");

/***/ }),

/***/ "./src/templates/register-no-slides.html":
/*!***********************************************!*\
  !*** ./src/templates/register-no-slides.html ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"{{? it.hasGender }}\\n<div class=\\\"gender\\\">\\n    <input\\n        data-register-gender=\\\"\\\"\\n        type=\\\"radio\\\"\\n        name=\\\"gender\\\"\\n        id=\\\"male\\\"\\n        value=\\\"male\\\"\\n        checked=\\\"\\\"\\n        data-wg-notranslate=\\\"manual\\\"\\n    />\\n    <label class=\\\"input-radio__label\\\" for=\\\"male\\\">Monsieur</label>\\n    <input\\n        data-register-gender=\\\"\\\"\\n        type=\\\"radio\\\"\\n        name=\\\"gender\\\"\\n        id=\\\"female\\\"\\n        value=\\\"female\\\"\\n        data-wg-notranslate=\\\"manual\\\"\\n    />\\n    <label class=\\\"input-radio__label\\\" for=\\\"female\\\">Madame</label>\\n</div>\\n{{?? true }}{{?}}\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"email\\\"\\n    placeholder=\\\"{{=it.yourEmail}}\\\"\\n    type=\\\"email\\\"\\n/>\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"firstName\\\"\\n    placeholder=\\\"{{=it.yourFirstName}}\\\"\\n    type=\\\"text\\\"\\n/>\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"lastName\\\"\\n    placeholder=\\\"{{=it.yourLastName}}\\\"\\n    type=\\\"text\\\"\\n/>\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"password\\\"\\n    placeholder=\\\"{{=it.yourPassword}}\\\"\\n    type=\\\"password\\\"\\n/>\\n{{? it.hasPasswordVerification }}\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"confirmPassword\\\"\\n    placeholder=\\\"{{=it.confirmYourPassword}}\\\"\\n    type=\\\"password\\\"\\n/>\\n{{?? true }}{{?}} {{? it.hasBirthDate }}\\n<div class=\\\"birth-date\\\">\\n    <div class=\\\"birth-date-text\\\">Date de naissance</div>\\n    <input\\n        placeholder=\\\"jj\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-day=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"01\\\"\\n        max=\\\"31\\\"\\n    />\\n    <input\\n        placeholder=\\\"mm\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-month=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"01\\\"\\n        max=\\\"12\\\"\\n    />\\n    <input\\n        placeholder=\\\"aaaa\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-year=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"1900\\\"\\n        max=\\\"2020\\\"\\n    />\\n</div>\\n{{?? true }}{{?}}\\n<input\\n    type=\\\"submit\\\"\\n    class=\\\"btn btn-primary\\\"\\n    disabled=\\\"\\\"\\n    value=\\\"{{=it.createAccount}}\\\"\\n/>\\n<div class=\\\"checkbox-container\\\">\\n    <input\\n        class=\\\"checkbox\\\"\\n        data-register-newscheck=\\\"\\\"\\n        name=\\\"acceptsMarketing\\\"\\n        type=\\\"checkbox\\\"\\n    />\\n    <div class=\\\"text t-5 uppercase pointer\\\" data-register-newstext=\\\"\\\">\\n        {{=it.subscribeNewsletter}}\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-no-slides.html?");

/***/ }),

/***/ "./src/templates/register-with-slides.html":
/*!*************************************************!*\
  !*** ./src/templates/register-with-slides.html ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"carousel\\\" style=\\\"width: 100%\\\">\\n    <input style=\\\"display: none\\\" class=\\\"input-text\\\" name=\\\"email\\\" type=\\\"email\\\" />\\n    <div>\\n        <input\\n            name=\\\"last_name\\\"\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"Votre nom\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div class=\\\"cursor\\\">1/5</div>\\n    </div>\\n    <div style=\\\"left: 100%\\\">\\n        <input\\n            name=\\\"first_name\\\"\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"Votre Prenome\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div>\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div class=\\\"cursor\\\">2/5</div>\\n        </div>\\n    </div>\\n    <div style=\\\"left: 200%\\\">\\n        Date de naissance\\n        <input\\n            name=\\\"birthdate\\\"\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"dd/mm/yyyy\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div>\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div class=\\\"cursor\\\">3/5</div>\\n        </div>\\n    </div>\\n    <div style=\\\"left: 300%\\\">\\n        <input\\n            name=\\\"password\\\"\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"Votre mot de pass\\\"\\n        />\\n        <input\\n            type=\\\"submit\\\"\\n            class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\"\\n            disabled=\\\"\\\"\\n            value=\\\"Valider\\\"\\n        />\\n        <div>\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div class=\\\"cursor\\\">4/5</div>\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-with-slides.html?");

/***/ }),

/***/ "./src/templates/register.html":
/*!*************************************!*\
  !*** ./src/templates/register.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image\\\" />\\n<div class=\\\"title\\\">{{=it.createAccount}}</div>\\n<div class=\\\"subtitle text t-4\\\">\\n    <p>{{=it.fillInfoToCreateAccount}}</p>\\n</div>\\n<div class=\\\"error js-error\\\">{{=it.passwordsDoNotMatch}}</div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"inputs-container\\\" dataRegisterForm=\\\"\\\">\\n    {{? it.hasCarousel }} {{#def.registerWithSlides }} {{?? true }}\\n    {{#def.registerNoSlides }} {{?}}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register.html?");

/***/ }),

/***/ "./src/templates/sign-in.html":
/*!************************************!*\
  !*** ./src/templates/sign-in.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image\\\" />\\n<div class=\\\"title\\\">{{=it.login}}</div>\\n<div class=\\\"subtitle\\\">\\n    <p>{{=it.enterEmailPswToConnect}}</p>\\n</div>\\n<div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"inputs-container\\\">\\n    <input\\n        class=\\\"input-text\\\"\\n        data-type=\\\"email\\\"\\n        name=\\\"email\\\"\\n        placeholder=\\\"{{=it.yourEmail}}\\\"\\n        type=\\\"email\\\"\\n    />\\n    <input\\n        class=\\\"input-text\\\"\\n        data-signin-password=\\\"\\\"\\n        name=\\\"password\\\"\\n        placeholder=\\\"{{=it.yourPassword}}\\\"\\n        type=\\\"password\\\"\\n    />\\n    <div class=\\\"\\\">\\n        <input\\n            class=\\\"btn btn-primary\\\"\\n            disabled=\\\"\\\"\\n            type=\\\"submit\\\"\\n            value=\\\"{{=it.signIn}}\\\"\\n        />\\n    </div>\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/sign-in.html?");

/***/ }),

/***/ "./public/data/style.json":
/*!********************************!*\
  !*** ./public/data/style.json ***!
  \********************************/
/*! default exports */
/*! export page-landing [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export page-register [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export theme [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --btn-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --btn-disabled-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --btn-disabled-opacity [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --container-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --container-bg-image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --container-border-radius [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --content-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --content-padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --content-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --error-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --hint-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-url [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-font-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-font-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-font-weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-letter-spacing [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-line-height [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --medium-font-weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --medium-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --placeholder-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --placeholder-font-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --placeholder-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --primary-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --text-input-margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"theme\\\":{\\\"--container-border-radius\\\":\\\"0.2em\\\",\\\"--container-bg-color\\\":\\\"rgba(90, 91, 91, 0.4)\\\",\\\"--container-bg-image\\\":\\\"url(\\\\\\\"https://images-na.ssl-images-amazon.com/images/I/81Dpm0mr03L.jpg\\\\\\\")\\\",\\\"--content-width\\\":\\\"530px\\\",\\\"--content-padding\\\":\\\"1.5em\\\",\\\"--content-bg-color\\\":\\\"#fff\\\",\\\"--primary-text-color\\\":\\\"#0d3c32\\\",\\\"--error-text-color\\\":\\\"#f00\\\",\\\"--hint-text-color\\\":\\\"#333\\\",\\\"--btn-bg-color\\\":\\\"#007266\\\",\\\"--btn-disabled-bg-color\\\":\\\"#007266\\\",\\\"--btn-disabled-opacity\\\":0.5,\\\"--large-font-family\\\":\\\"Termina\\\",\\\"--large-font-size\\\":\\\"3.1em\\\",\\\"--large-font-weight\\\":300,\\\"--large-line-height\\\":\\\"1.1em\\\",\\\"--large-letter-spacing\\\":\\\"0.05em\\\",\\\"--large-text-transform\\\":\\\"none\\\",\\\"--medium-text-size\\\":\\\"0.98em\\\",\\\"--medium-font-weight\\\":300,\\\"--placeholder-text-transform\\\":\\\"uppercase\\\",\\\"--placeholder-font-size\\\":\\\"1.1em\\\",\\\"--placeholder-color\\\":\\\"inherit\\\",\\\"--text-input-margin\\\":\\\"0.9em\\\",\\\"--image-padding\\\":0,\\\"--image-size\\\":\\\"40%\\\",\\\"--image-url\\\":\\\"none\\\"},\\\"page-landing\\\":{\\\"--image\\\":\\\"none\\\",\\\"--image-width\\\":\\\"40%\\\"},\\\"page-register\\\":{\\\"--image\\\":\\\"none\\\",\\\"--image-width\\\":\\\"40%\\\"}}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/style.json?");

/***/ }),

/***/ "./public/data/text.json":
/*!*******************************!*\
  !*** ./public/data/text.json ***!
  \*******************************/
/*! default exports */
/*! export confirmYourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enterEmailPswToConnect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enterYourEmailToContinue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fillInfoToCreateAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasBirthDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasGender [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasPasswordVerification [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasSocialLogin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login-register [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginRegister [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signIn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signUp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subscribeNewsletter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourFirstName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourLastName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"hasGender\\\":true,\\\"hasSocialLogin\\\":false,\\\"hasBirthDate\\\":true,\\\"hasPasswordVerification\\\":false,\\\"createAccount\\\":\\\"Inscription\\\",\\\"loginRegister\\\":\\\"Connexion / Inscription\\\",\\\"enterYourEmailToContinue\\\":\\\"Renseignez votre adresse mail pour vous connecter ou vous inscrire.\\\",\\\"yourEmail\\\":\\\"Votre Courriel\\\",\\\"signIn\\\":\\\"Se Connecter\\\",\\\"signUp\\\":\\\"S'inscrire\\\",\\\"fillInfoToCreateAccount\\\":\\\"Renseignez vos informations pour créer votre compte Franklin.\\\",\\\"login\\\":\\\"Connexion\\\",\\\"enterEmailPswToConnect\\\":\\\"Renseignez votre adresse email et votre mot de passe pour vous connecter.\\\",\\\"validate\\\":\\\"Valider\\\",\\\"login-register\\\":\\\"Connexion / Inscription\\\",\\\"yourFirstName\\\":\\\"Prénom\\\",\\\"yourLastName\\\":\\\"Nom\\\",\\\"yourPassword\\\":\\\"Votre mot de passe\\\",\\\"confirmYourPassword\\\":\\\"Confirmez votre mot de passe\\\",\\\"subscribeNewsletter\\\":\\\"Je m'inscris à la newsletter\\\"}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/text.json?");

/***/ }),

/***/ "./src/actions/dashboard.js":
/*!**********************************!*\
  !*** ./src/actions/dashboard.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const $ = document.querySelector.bind(document);\nconst { APP_ID, LANDING_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst utils = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst load = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\n\nconst loadStyle = () => {\n    console.log(\"....loadStyle\");\n    const css = $(`#${APP_ID} .js-custom-style`).value;\n    utils.updateCss(JSON.parse(css));\n};\n\nconst loadTheme = async (e) => {\n    const theme = e.target.value;\n    const text = await fetch(`data/${theme}-text.json`);\n    const style = await fetch(`data/${theme}-style.json`);\n    const styleJson = await style.json();\n    utils.updatePages(await text.json());\n    utils.updateCss(styleJson);\n    load.loadActions();\n    $(`#${APP_ID} .${LANDING_ID}`).style.setProperty(\"display\", \"block\");\n};\n\nconst init = () => {\n    $(`#${APP_ID} .js-load-theme`).addEventListener(\"click\", loadTheme);\n    $(`#${APP_ID} .js-load-style`).addEventListener(\"click\", loadStyle);\n};\n\nmodule.exports = {\n    init: init,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/dashboard.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { updatePages } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { updateCss } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { loadActions } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\nconst css = __webpack_require__(/*! ../../public/data/style.json */ \"./public/data/style.json\");\nconst text = __webpack_require__(/*! ../../public/data/text.json */ \"./public/data/text.json\");\nconsole.log(\"asda\");\n\nsetTimeout(() => {\n    updatePages(text);\n    updateCss(css);\n    loadActions();\n}, 0); // TODO to fix\n\n// globalThis.addEventListener(\"load\", () => {\n//     updatePages(text);\n//     updateCss(css);\n//     loadActions();\n// });\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/index.js?");

/***/ }),

/***/ "./src/actions/landing.js":
/*!********************************!*\
  !*** ./src/actions/landing.js ***!
  \********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, LANDING_ID, REGISTER_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { isRegistered } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst $ = document.querySelector.bind(document);\nconst { toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst disableBtn = (btn) => btn.setAttribute(\"disabled\", \"true\");\nlet form;\n\nconst activeBtn = (btn, target) => {\n    btn.removeAttribute(\"disabled\");\n    sessionStorage.setItem(\"email\", target.value); //TODO fix it\n};\nconst toggleButton = ({ target }) => {\n    const btn = form.querySelector(\"input[type='submit']\");\n    const isEmail = /\\S+@\\S+\\.\\S+/.test(target.value);\n    isEmail ? activeBtn(btn, target) : disableBtn(btn);\n};\n\nconst onSubmit = async () => {\n    const email = $(`#${APP_ID} [type='email']`).value;\n    $(`#${APP_ID} .${REGISTER_ID} form [type='email']`).value = email;\n    $(`#${APP_ID} .${SIGNIN_ID} form [type='email']`).value = email;\n    (await isRegistered(email)) ? signIn() : register();\n};\n\nconst register = () => {\n    toggleModules([LANDING_ID, REGISTER_ID]);\n};\n\nconst signIn = () => {\n    toggleModules([LANDING_ID, SIGNIN_ID]);\n};\n\nexports.init = () => {\n    toggleModules([LANDING_ID]);\n    form = $(`#${APP_ID} .${LANDING_ID} form`);\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/landing.js?");

/***/ }),

/***/ "./src/actions/load.js":
/*!*****************************!*\
  !*** ./src/actions/load.js ***!
  \*****************************/
/*! default exports */
/*! export loadActions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { init: initDashboard } = __webpack_require__(/*! ./dashboard */ \"./src/actions/dashboard.js\");\nconst { init: initLanding } = __webpack_require__(/*! ./landing */ \"./src/actions/landing.js\");\nconst { init: initSignIn } = __webpack_require__(/*! ./sign-in */ \"./src/actions/sign-in.js\");\nconst { init: initRegistration } = __webpack_require__(/*! ./registration */ \"./src/actions/registration.js\");\nconst { APP_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nconst initContainer = () => {\n    const closeApp = () => ($(`#${APP_ID}`).innerHTML = \"\");\n    $(`#${APP_ID} .js-close`).addEventListener(\"click\", closeApp);\n};\n\nexports.loadActions = () => {\n    initDashboard();\n    initLanding();\n    initContainer();\n    initSignIn();\n    initRegistration();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/load.js?");

/***/ }),

/***/ "./src/actions/registration.js":
/*!*************************************!*\
  !*** ./src/actions/registration.js ***!
  \*************************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, REGISTER_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { register } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst $ = document.querySelector.bind(document);\nconst { toggleModules, serialize, isFormFilled } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nlet form, errorNode;\n\nconst toggleButton = ({ target }) => {\n    if (target.value.length > 2)\n        target.nextElementSibling.removeAttribute(\"disabled\");\n\n    const btn = form.querySelector(\"input[type='submit']\");\n    isFormFilled(form)\n        ? btn.removeAttribute(\"disabled\")\n        : btn.setAttribute(\"disabled\", \"true\");\n};\n\nconst arePasswordsDiff = ({ password, confirmPassword }) =>\n    confirmPassword && confirmPassword !== password;\n\nconst onSubmit = async () => {\n    const inputs = serialize(form);\n    if (arePasswordsDiff(inputs)) {\n        errorNode.style.setProperty(\"display\", \"block\");\n        return null;\n    }\n    register(inputs); // TODO to fix\n    toggleModules([REGISTER_ID, SIGNIN_ID]);\n};\n\nconst goNextSlide = () => {\n    const node = form.querySelector(\".carousel\");\n    const shift = getComputedStyle(node).getPropertyValue(\"width\");\n    node.scrollBy({\n        left: parseInt(shift, 10),\n        behavior: \"smooth\",\n    });\n};\n\nconst goPrevSlide = () => {\n    const node = form.querySelector(\".carousel\");\n    const shift = getComputedStyle(node).getPropertyValue(\"width\");\n    node.scrollBy({\n        left: -parseInt(shift, 10),\n        behavior: \"smooth\",\n    });\n};\n\nexports.init = () => {\n    errorNode = $(`#${APP_ID} .${REGISTER_ID} .js-error`);\n    form = $(`#${APP_ID} .${REGISTER_ID} form`);\n    form.addEventListener(\"input\", toggleButton);\n    form.querySelectorAll(\".js-next\").forEach((e) =>\n        e.addEventListener(\"click\", goNextSlide)\n    );\n    form.querySelectorAll(\".js-prev\").forEach((e) =>\n        e.addEventListener(\"click\", goPrevSlide)\n    );\n    form.addEventListener(\"submit\", onSubmit);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/registration.js?");

/***/ }),

/***/ "./src/actions/sign-in.js":
/*!********************************!*\
  !*** ./src/actions/sign-in.js ***!
  \********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { isLogged } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst $ = document.querySelector.bind(document);\nlet form;\n\nconst getEmail = () => form.querySelector(\"[name='email']\").value;\nconst getPsw = () => form.querySelector(\"[name='password']\").value;\n\nconst onSubmit = async (e) => {\n    const email = getEmail();\n    const psw = getPsw();\n    alert(await isLogged(email, psw));\n};\n\nconst toggleButton = (e) => {\n    const isEmail = /\\S+@\\S+\\.\\S+/.test(getEmail());\n    if (isEmail)\n        form.querySelector(\"input[type='submit']\").removeAttribute(\"disabled\");\n};\n\nexports.init = () => {\n    form = $(`#${APP_ID} .${SIGNIN_ID}`);\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/sign-in.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = {\n    STOREFRONT_TOKEN: \"fcff98a27bb929d313f8bf1e7c1e8594\",\n    AWS_ENDPOINT: \"https://f6deb1487aaf.ngrok.io\",\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/config.js?");

/***/ }),

/***/ "./src/doT.js":
/*!********************!*\
  !*** ./src/doT.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = {\n    template,\n    compile,\n    setDelimiters,\n};\n\nconst templateSettings = {\n    argName: \"it\",\n    encoders: {},\n    selfContained: false,\n    strip: true,\n    internalPrefix: \"_val\",\n    encodersPrefix: \"_enc\",\n    delimiters: {\n        start: \"{{\",\n        end: \"}}\",\n    },\n};\n\n// depends on selfContained mode\nconst encoderType = {\n    false: \"function\",\n    true: \"string\",\n};\n\nconst defaultSyntax = {\n    evaluate: /\\{\\{([\\s\\S]+?(\\}?)+)\\}\\}/g,\n    interpolate: /\\{\\{=([\\s\\S]+?)\\}\\}/g,\n    typeInterpolate: /\\{\\{%([nsb])=([\\s\\S]+?)\\}\\}/g,\n    encode: /\\{\\{([a-z_$]+[\\w$]*)?!([\\s\\S]+?)\\}\\}/g,\n    use: /\\{\\{#([\\s\\S]+?)\\}\\}/g,\n    useParams: /(^|[^\\w$])def(?:\\.|\\[[\\'\\\"])([\\w$\\.]+)(?:[\\'\\\"]\\])?\\s*\\:\\s*([\\w$]+(?:\\.[\\w$]+|\\[[^\\]]+\\])*|\\\"[^\\\"]+\\\"|\\'[^\\']+\\'|\\{[^\\}]+\\}|\\[[^\\]]*\\])/g,\n    define: /\\{\\{##\\s*([\\w\\.$]+)\\s*(\\:|=)([\\s\\S]+?)#\\}\\}/g,\n    defineParams: /^\\s*([\\w$]+):([\\s\\S]+)/,\n    conditional: /\\{\\{\\?(\\?)?\\s*([\\s\\S]*?)\\s*\\}\\}/g,\n    iterate: /\\{\\{~\\s*(?:\\}\\}|([\\s\\S]+?)\\s*\\:\\s*([\\w$]+)\\s*(?:\\:\\s*([\\w$]+))?\\s*\\}\\})/g,\n};\n\nlet currentSyntax = { ...defaultSyntax };\n\nconst TYPES = {\n    n: \"number\",\n    s: \"string\",\n    b: \"boolean\",\n};\n\nfunction resolveDefs(c, syn, block, def) {\n    return (typeof block === \"string\" ? block : block.toString())\n        .replace(syn.define, (_, code, assign, value) => {\n            if (code.indexOf(\"def.\") === 0) {\n                code = code.substring(4);\n            }\n            if (!(code in def)) {\n                if (assign === \":\") {\n                    value.replace(syn.defineParams, (_, param, v) => {\n                        def[code] = { arg: param, text: v };\n                    });\n                    if (!(code in def)) def[code] = value;\n                } else {\n                    new Function(\"def\", `def['${code}']=${value}`)(def);\n                }\n            }\n            return \"\";\n        })\n        .replace(syn.use, (_, code) => {\n            code = code.replace(syn.useParams, (_, s, d, param) => {\n                if (def[d] && def[d].arg && param) {\n                    const rw = unescape(\n                        (d + \":\" + param).replace(/'|\\\\/g, \"_\")\n                    );\n                    def.__exp = def.__exp || {};\n                    def.__exp[rw] = def[d].text.replace(\n                        new RegExp(`(^|[^\\\\w$])${def[d].arg}([^\\\\w$])`, \"g\"),\n                        `$1${param}$2`\n                    );\n                    return s + `def.__exp['${rw}']`;\n                }\n            });\n            const v = new Function(\"def\", \"return \" + code)(def);\n            return v ? resolveDefs(c, syn, v, def) : v;\n        });\n}\n\nfunction unescape(code) {\n    return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n}\n\nfunction template({ tmpl, c = undefined, def }) {\n    const ds = c && c.delimiters;\n    const syn = ds && !sameDelimiters(ds) ? getSyntax(ds) : currentSyntax;\n    c = c ? { ...templateSettings, ...c } : templateSettings;\n    let sid = 0;\n    let str = resolveDefs(c, syn, tmpl, def || {});\n    const needEncoders = {};\n\n    str = (\n        \"let out='\" +\n        (c.strip\n            ? str\n                  .trim()\n                  .replace(/[\\t ]+(\\r|\\n)/g, \"\\n\") // remove trailing spaces\n                  .replace(/(\\r|\\n)[\\t ]+/g, \" \") // leading spaces reduced to \" \"\n                  .replace(/\\r|\\n|\\t|\\/\\*[\\s\\S]*?\\*\\//g, \"\") // remove breaks, tabs and JS comments\n            : str\n        )\n            .replace(/'|\\\\/g, \"\\\\$&\")\n            .replace(syn.interpolate, (_, code) => `'+(${unescape(code)})+'`)\n            .replace(syn.typeInterpolate, (_, typ, code) => {\n                sid++;\n                const val = c.internalPrefix + sid;\n                const error = `throw new Error(\"expected ${TYPES[typ]}, got \"+ (typeof ${val}))`;\n                return `';const ${val}=(${unescape(\n                    code\n                )});if(typeof ${val}!==\"${TYPES[typ]}\") ${error};out+=${val}+'`;\n            })\n            .replace(syn.encode, (_, enc = \"\", code) => {\n                needEncoders[enc] = true;\n                code = unescape(code);\n                const e = c.selfContained ? enc : enc ? \".\" + enc : '[\"\"]';\n                return `'+${c.encodersPrefix}${e}(${code})+'`;\n            })\n            .replace(syn.conditional, (_, elseCase, code) => {\n                if (code) {\n                    code = unescape(code);\n                    return elseCase\n                        ? `';}else if(${code}){out+='`\n                        : `';if(${code}){out+='`;\n                }\n                return elseCase ? \"';}else{out+='\" : \"';}out+='\";\n            })\n            .replace(syn.iterate, (_, arr, vName, iName) => {\n                if (!arr) return \"';} } out+='\";\n                sid++;\n                const defI = iName ? `let ${iName}=-1;` : \"\";\n                const incI = iName ? `${iName}++;` : \"\";\n                const val = c.internalPrefix + sid;\n                return `';const ${val}=${unescape(\n                    arr\n                )};if(${val}){${defI}for (const ${vName} of ${val}){${incI}out+='`;\n            })\n            .replace(syn.evaluate, (_, code) => `';${unescape(code)}out+='`) +\n        \"';return out;\"\n    )\n        .replace(/\\n/g, \"\\\\n\")\n        .replace(/\\t/g, \"\\\\t\")\n        .replace(/\\r/g, \"\\\\r\")\n        .replace(/(\\s|;|\\}|^|\\{)out\\+='';/g, \"$1\")\n        .replace(/\\+''/g, \"\");\n\n    const args = Array.isArray(c.argName) ? properties(c.argName) : c.argName;\n\n    if (Object.keys(needEncoders).length === 0) {\n        return try_(() => new Function(args, str));\n    }\n    checkEncoders(c, needEncoders);\n    str = `return function(${args}){${str}};`;\n    return try_(() =>\n        c.selfContained\n            ? new Function((str = addEncoders(c, needEncoders) + str))()\n            : new Function(c.encodersPrefix, str)(c.encoders)\n    );\n\n    function try_(f) {\n        try {\n            return f();\n        } catch (e) {\n            console.log(\"Could not create a template function: \" + str);\n            throw e;\n        }\n    }\n}\n\nfunction compile(tmpl, def) {\n    return template(tmpl, null, def);\n}\n\nfunction sameDelimiters({ start, end }) {\n    const d = templateSettings.delimiters;\n    return d.start === start && d.end === end;\n}\n\nfunction setDelimiters(delimiters) {\n    if (sameDelimiters(delimiters)) {\n        console.log(\"delimiters did not change\");\n        return;\n    }\n    currentSyntax = getSyntax(delimiters);\n    templateSettings.delimiters = delimiters;\n}\n\nfunction getSyntax({ start, end }) {\n    start = escape(start);\n    end = escape(end);\n    const syntax = {};\n    for (const syn in defaultSyntax) {\n        const s = defaultSyntax[syn]\n            .toString()\n            .replace(/\\\\\\{\\\\\\{/g, start)\n            .replace(/\\\\\\}\\\\\\}/g, end);\n        syntax[syn] = strToRegExp(s);\n    }\n    return syntax;\n}\n\nconst escapeCharacters = /([{}[\\]()<>\\\\\\/^$\\-.+*?!=|&:])/g;\n\nfunction escape(str) {\n    return str.replace(escapeCharacters, \"\\\\$1\");\n}\n\nconst regexpPattern = /^\\/(.*)\\/([\\w]*)$/;\n\nfunction strToRegExp(str) {\n    const [, rx, flags] = str.match(regexpPattern);\n    return new RegExp(rx, flags);\n}\n\nfunction properties(args) {\n    return args.reduce((s, a, i) => s + (i ? \",\" : \"\") + a, \"{\") + \"}\";\n}\n\nfunction checkEncoders(c, encoders) {\n    const typ = encoderType[c.selfContained];\n    for (const enc in encoders) {\n        const e = c.encoders[enc];\n        if (!e) throw new Error(`unknown encoder \"${enc}\"`);\n        if (typeof e !== typ)\n            throw new Error(\n                `selfContained ${c.selfContained}: encoder type must be \"${typ}\"`\n            );\n    }\n}\n\nfunction addEncoders(c, encoders) {\n    let s = \"\";\n    for (const enc in encoders)\n        s += `const ${c.encodersPrefix}${enc}=${c.encoders[enc]};`;\n    return s;\n}\n\n\n//# sourceURL=webpack://stag-dotjs/./src/doT.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! default exports */
/*! export isLogged [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRegistered [provided] [no usage info] [missing usage info prevents renaming] */
/*! export register [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, CONTAINER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\nconst { AWS_ENDPOINT } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\nconst { registerViaProxy } = __webpack_require__(/*! ./proxy */ \"./src/services/proxy.js\");\nconst { registerViaStorefront, signInViaStorefront } = __webpack_require__(/*! ./storefront */ \"./src/services/storefront.js\");\n\nconst toggleLoading = () => {\n    const loading = $(`#${APP_ID} .loading`);\n    if (loading.style.getPropertyValue(\"display\") == \"none\") {\n        loading.style.setProperty(\"display\", \"block\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 0.2);\n    } else {\n        loading.style.setProperty(\"display\", \"none\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 1);\n    }\n};\n\nexports.isRegistered = async (email) => {\n    toggleLoading();\n    const res = await fetch(`${AWS_ENDPOINT}/customers/search/${email}`);\n    const json = await res.json();\n    toggleLoading();\n    return json.data;\n};\n\nexports.register = async (inputs) => {\n    registerViaStorefront(inputs);\n    return registerViaProxy(inputs);\n};\n\nexports.isLogged = async (inputs) => {\n    return new Promise((res, _) => {\n        toggleLoading();\n        setTimeout(() => {\n            signInViaStorefront(inputs);\n            toggleLoading();\n        }, 500);\n    });\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/index.js?");

/***/ }),

/***/ "./src/services/mutations.js":
/*!***********************************!*\
  !*** ./src/services/mutations.js ***!
  \***********************************/
/*! namespace exports */
/*! export customerAccessTokenCreate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export customerCreate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customerCreate\": () => /* binding */ customerCreate,\n/* harmony export */   \"customerAccessTokenCreate\": () => /* binding */ customerAccessTokenCreate\n/* harmony export */ });\nconst customerCreate = `mutation customerCreate($input: CustomerCreateInput!) {\n    customerCreate(input: $input) {\n      customer {\n        id\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }`;\n\nconst customerAccessTokenCreate = `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }`;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/mutations.js?");

/***/ }),

/***/ "./src/services/proxy.js":
/*!*******************************!*\
  !*** ./src/services/proxy.js ***!
  \*******************************/
/*! default exports */
/*! export registerViaProxy [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { AWS_ENDPOINT } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nexports.registerViaProxy = async (inputs) => {\n    const response = await fetch(`${AWS_ENDPOINT}/customers/add/`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(inputs),\n    });\n    return response.json();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/proxy.js?");

/***/ }),

/***/ "./src/services/storefront.js":
/*!************************************!*\
  !*** ./src/services/storefront.js ***!
  \************************************/
/*! default exports */
/*! export registerViaStorefront [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signInViaStorefront [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { customerCreate, customerAccessTokenCreate } = __webpack_require__(/*! ./mutations */ \"./src/services/mutations.js\");\n\nconst config = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nconst getParams = ({ query, input }) => ({\n    query: query,\n    variables: {\n        input: input,\n    },\n});\n\nconst getHeader = (body) => ({\n    method: \"post\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        Accept: \"application/json\",\n        \"X-Shopify-Storefront-Access-Token\": config.STOREFRONT_TOKEN,\n    },\n    body: JSON.stringify(body),\n});\n\nconst postRequest = async (fetchBody) => {\n    const response = await fetch(\n        globalThis.Shopify?.shop ||\n            \"https://paso2020.myshopify.com/api/graphql\",\n        getHeader(fetchBody)\n    );\n    return await response.json();\n};\n\nexports.registerViaStorefront = async (formData) => {\n    const fetchBody = getParams({ query: customerCreate, input: formData });\n    console.log(fetchBody);\n    // return await postRequest(fetchBody);\n};\n\nexports.signInViaStorefront = async (formData) => {\n    const fetchBody = getParams({\n        query: customerAccessTokenCreate,\n        input: formData,\n    });\n    console.log(fetchBody);\n    return await postRequest(fetchBody);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/storefront.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 32:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const dashboardTmpl = __webpack_require__(/*! ./dashboard.html */ \"./src/templates/dashboard.html\");\nconst containerTmpl = __webpack_require__(/*! ./container.html */ \"./src/templates/container.html\");\nconst landingTmpl = __webpack_require__(/*! ./landing.html */ \"./src/templates/landing.html\");\nconst registerTmpl = __webpack_require__(/*! ./register.html */ \"./src/templates/register.html\");\nconst signInTmpl = __webpack_require__(/*! ./sign-in.html */ \"./src/templates/sign-in.html\");\nconst registerNoSlidesTmpl = __webpack_require__(/*! ./register-no-slides.html */ \"./src/templates/register-no-slides.html\");\nconst registerWithSlidesTmpl = __webpack_require__(/*! ./register-with-slides.html */ \"./src/templates/register-with-slides.html\");\nconst [APP_ID, ROOT_ID, CONTAINER_ID] = [\"aaa\", \"bbb\", \"container\"];\nconst [LANDING_ID, REGISTER_ID, SIGNIN_ID] = [\"landing\", \"register\", \"signin\"];\n\nconst getTemplate = ({ id, html }) =>\n    `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n\nconst getPartialTemplate = ({ id, html }) => {\n    html = `<div class=\"${id}\" style=\"display: none\">${html}</div>`;\n    return `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n};\nconst templates = [];\n\ntemplates.push(getTemplate({ id: ROOT_ID, html: dashboardTmpl }));\ntemplates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));\ntemplates.push(getPartialTemplate({ id: LANDING_ID, html: landingTmpl }));\ntemplates.push(getPartialTemplate({ id: REGISTER_ID, html: registerTmpl }));\ntemplates.push(\n    getTemplate({ id: \"registerNoSlides\", html: registerNoSlidesTmpl })\n);\ntemplates.push(\n    getTemplate({ id: \"registerWithSlides\", html: registerWithSlidesTmpl })\n);\ntemplates.push(getPartialTemplate({ id: SIGNIN_ID, html: signInTmpl }));\n\nmodule.exports = {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! default exports */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export serialize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updatePages } = __webpack_require__(/*! ./load-pages */ \"./src/utils/load-pages.js\");\nconst { updateCss } = __webpack_require__(/*! ./load-css */ \"./src/utils/load-css.js\");\nconst { toggleModules } = __webpack_require__(/*! ./toggle-module */ \"./src/utils/toggle-module.js\");\nconst { serialize, isFormFilled } = __webpack_require__(/*! ./serialize */ \"./src/utils/serialize.js\");\n\nexports.updatePages = updatePages;\nexports.updateCss = updateCss;\nexports.toggleModules = toggleModules;\nexports.serialize = serialize;\nexports.isFormFilled = isFormFilled;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/load-css.js":
/*!*******************************!*\
  !*** ./src/utils/load-css.js ***!
  \*******************************/
/*! default exports */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nconst pretty = (ugly) => JSON.stringify(ugly, undefined, 1);\n\nexports.updateCss = (cssVars) => {\n    $(`#${APP_ID} .js-custom-style`).value = pretty(cssVars); //REMOVE\n    (function traverse(obj, key) {\n        if (obj !== null && typeof obj == \"object\") {\n            Object.entries(obj).forEach(([key, value]) => traverse(value, key));\n        } else $(`#${APP_ID}`).style.setProperty(key, obj);\n    })(cssVars);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-css.js?");

/***/ }),

/***/ "./src/utils/load-pages.js":
/*!*********************************!*\
  !*** ./src/utils/load-pages.js ***!
  \*********************************/
/*! default exports */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const doT = __webpack_require__(/*! ../doT */ \"./src/doT.js\");\nconst {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n} = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nconst getDef = () => ({\n    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,\n    [LANDING_ID]: document.getElementById(LANDING_ID).text,\n    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,\n    [SIGNIN_ID]: document.getElementById(SIGNIN_ID).text,\n    registerNoSlides: document.getElementById(\"registerNoSlides\").text,\n    registerWithSlides: document.getElementById(\"registerWithSlides\").text,\n});\n\nconst appendTemplate = (e) => {\n    const elemDiv = document.createElement(\"div\");\n    elemDiv.innerHTML = e.trim();\n    document.body.appendChild(elemDiv);\n};\n\nconst getTemplate = (data) => {\n    templates.forEach(appendTemplate);\n    return doT.template({\n        tmpl: document.getElementById(ROOT_ID).text,\n        def: getDef(),\n    })(data);\n};\n\nexports.updatePages = (text) => {\n    $(`#${APP_ID}`).innerHTML = getTemplate(text);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-pages.js?");

/***/ }),

/***/ "./src/utils/serialize.js":
/*!********************************!*\
  !*** ./src/utils/serialize.js ***!
  \********************************/
/*! default exports */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export serialize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("const serialize = (form) => {\n    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });\n    return Array.from(new FormData(form)).reduce(reducer, {});\n};\n\nconst isFormFilled = (form) => {\n    const inputs = serialize(form);\n    return Object.values(inputs).every((e) => e.length > 0);\n};\n\nexports.serialize = serialize;\nexports.isFormFilled = isFormFilled;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/serialize.js?");

/***/ }),

/***/ "./src/utils/toggle-module.js":
/*!************************************!*\
  !*** ./src/utils/toggle-module.js ***!
  \************************************/
/*! default exports */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nconst toggleModule = (id) => {\n    const module = $(`#${APP_ID} .${id}`);\n    module.style.getPropertyValue(\"display\") == \"none\"\n        ? module.style.setProperty(\"display\", \"block\")\n        : module.style.setProperty(\"display\", \"none\");\n};\n\nexports.toggleModules = (ids) => {\n    ids.forEach(toggleModule);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-module.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss":
/*!**********************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".carousel {\\n  height: 150px;\\n  position: relative;\\n  overflow-x: scroll;\\n}\\n\\n.carousel > div {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n}\\n\\n.cursor-prev {\\n  cursor: pointer;\\n  left: 20px;\\n  position: absolute;\\n  text-align: left;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/carousel.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss":
/*!********************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".loading {\\n  left: 50%;\\n  margin-left: -20px;\\n  top: 50%;\\n  margin-top: -20px;\\n  position: absolute;\\n  animation: loading-bar 400ms linear infinite;\\n}\\n\\n.loading .loading-icon {\\n  width: 40px;\\n  height: 40px;\\n  border: solid 4px transparent;\\n  border-top-color: #333;\\n  border-left-color: #333;\\n  border-radius: 50%;\\n}\\n\\n@keyframes loading-bar {\\n  0% {\\n    transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/loader.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"/*  ===================\\n    Table of contents\\n\\n        - Global styles\\n        - Theme/Typography\\n        - Components\\n        - Partials\\n\\n    =================== */\\n/*  ===================\\n    1. Global styles\\n    =================== */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/*  ===================\\n    Theme/Typography\\n    =================== */\\n.container {\\n  align-items: center;\\n  background: linear-gradient(var(--container-bg-color) 100%, var(--container-bg-color) 100%), var(--container-bg-image) center/cover;\\n  background-size: cover;\\n  display: flex;\\n  height: 100%;\\n  justify-content: center;\\n  position: absolute;\\n  right: 0;\\n  text-align: center;\\n  top: 0;\\n  width: 70%;\\n  /* to host the dashboard, otherwise 100% */\\n  z-index: 99;\\n}\\n\\n.content {\\n  color: var(--primary-text-color);\\n  background-color: var(--content-bg-color);\\n  border-radius: var(--container-border-radius);\\n  padding: var(--content-padding);\\n  position: relative;\\n  max-width: var(--content-width);\\n}\\n\\n.error {\\n  background-color: var(--error-bg-color);\\n  border-radius: 3px;\\n  color: var(--error-text-color);\\n  display: none;\\n  margin: 10px 0;\\n  padding: 5px;\\n}\\n\\n/*  ===================\\n    Components\\n    =================== */\\n.image {\\n  content: var(--image-url);\\n  padding: var(--image-padding);\\n  width: var(--image-size);\\n}\\n\\n.title {\\n  font-family: var(--large-font-family);\\n  font-size: var(--large-font-size);\\n  font-weight: var(--large-font-weight);\\n  letter-spacing: var(--large-letter-spacing);\\n  line-height: var(--large-line-height);\\n  text-transform: var(--large-text-transform);\\n}\\n\\n.sub-title {\\n  font-size: var(--medium-text-size);\\n  font-weight: var(--medium-font-weight);\\n}\\n\\n::placeholder {\\n  background-color: var(--content-bg-color);\\n  font-size: var(--placeholder-font-size);\\n  color: var(--placeholder-color);\\n  text-transform: var(--placeholder-text-transform);\\n}\\n\\n.btn {\\n  border: none;\\n  color: #fff;\\n  cursor: pointer;\\n  padding: 10px;\\n  text-transform: uppercase;\\n  width: 100%;\\n}\\n\\n.btn.btn-primary {\\n  background-color: var(--btn-bg-color);\\n}\\n\\n.btn:disabled,\\n.btn[disabled] {\\n  background-color: var(--btn-disabled-bg-color);\\n  opacity: var(--btn-disabled-opacity);\\n}\\n\\n.btn-small {\\n  width: 40%;\\n  margin: 20px auto;\\n}\\n\\n.btn-close {\\n  cursor: pointer;\\n  font-size: 40px;\\n  position: absolute;\\n  right: 14px;\\n  top: 0;\\n  transform: rotate(45deg);\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-container {\\n  align-items: center;\\n  display: flex;\\n  margin-top: 14px;\\n}\\n\\n.mandatory-container {\\n  margin-top: 10px;\\n}\\n\\n.inputs-container {\\n  margin-bottom: 10px;\\n}\\n\\n.input-text {\\n  border: none;\\n  outline: none;\\n  border-bottom: 1px solid;\\n  font: 400 13.3333px Arial;\\n  margin-bottom: var(--text-input-margin);\\n  padding-left: 2px;\\n  width: 100%;\\n}\\n\\n.input-text-secondary {\\n  display: inline;\\n  width: 75%;\\n}\\n\\n/*  ===================\\n    Partials\\n    =================== */\\n.or-social-login {\\n  margin: 15px 0;\\n}\\n\\n.gender {\\n  margin: 20px 0;\\n  text-align: left;\\n}\\n\\n.birth-date {\\n  align-items: center;\\n  display: flex;\\n}\\n.birth-date .birth-date-text {\\n  min-width: 40%;\\n}\\n\\n.fb {\\n  background-color: #3b5998;\\n  color: white;\\n}\\n\\n.google {\\n  background-color: #dd4b39;\\n  color: white;\\n}\\n\\n.mt-1 {\\n  margin-top: 5px;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 5px;\\n}\\n\\n/*  ===================\\n    3. Pages\\n    =================== */\\n/*  ===================\\n    3. Modules\\n    =================== */\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://stag-dotjs/../../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/carousel.scss":
/*!**********************************!*\
  !*** ./src/styles/carousel.scss ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/carousel.scss?");

/***/ }),

/***/ "./src/styles/loader.scss":
/*!********************************!*\
  !*** ./src/styles/loader.scss ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./loader.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/loader.scss?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://stag-dotjs/../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n__webpack_require__(/*! ./styles/loader.scss */ \"./src/styles/loader.scss\");\n__webpack_require__(/*! ./styles/carousel.scss */ \"./src/styles/carousel.scss\");\n\n__webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\nconst { APP_ID } = __webpack_require__(/*! ./templates/ */ \"./src/templates/index.js\");\n\nconst node = document.createElement(\"div\");\nnode.setAttribute(\"id\", APP_ID);\ndocument.body.prepend(node);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/app.js?");
})();

/******/ })()
;