(() => {
    const getEvent = (json) =>
        new CustomEvent("message", {
            detail: json,
        });

    const textEvent = {
        setting_id: "landing|loginRegister|",
        value: "Creazfione di login",
    };

    const layout = {
        setting_id: "landing|layout|",
        value: "popup-full",
    };

    const style = {
        setting_id: "landing|--btn-bg-color|",
        value: "rgba(129, 183, 84, 1)",
    };

    const hasCarousel = {
        setting_id: "register|hasCarousel|",
        value: true,
    };

    const animation = {
        setting_id: "landing|--animation|",
        value: "slide-in",
    };

    const changeTheme = {
        setting_id: "|change-theme|",
        value: "respire",
    };

    const socialLogin = {
        setting_id: "landing|hasSocialLogin|",
        value: true,
    };

    const form = {
        data: {
            data: { setting_id: "landing|formStyle|", value: "label-go-down" },
        },
    };

    const carousel = {
        setting_id: "register|hasCarousel|",
        value: true,
    };

    globalThis.dispatchEvent(getEvent(form));
})();

(() => {
    const block = {
        setting_id: "register|hasMultiLine|",
        value: true,
    };

    globalThis.dispatchEvent(getEvent(block));
})();

(() => {
    const block = {
        setting_id: "register|hasMultiChoice|",
        value: true,
    };

    const kastorEvent = new CustomEvent("message", {
        detail: block,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// TESTING METAFIELD
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|metaChoices|",
                value: [
                    { key: "key-1", value: "meta-label-1" },
                    { key: "key-2", value: "meta-label-2" },
                ],
            },
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// TESTING TAG
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|choiceList|",
                value: ["item_1", "item_2", "item_3", "item_4"],
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);

    json = {
        data: {
            data: {
                setting_id: "register|choiceTag|",
                value: "gender",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    setTimeout(() => {
        globalThis.dispatchEvent(kastorEvent);
    }, 1000);
})();

// Add a block
(() => {
    const hasFirstNameBlock = {
        data: {
            setting_id: "register|hasFirstNameBlock|",
            value: true,
        },
        target: "block:add",
    };

    const kastorEvent = new CustomEvent("message", {
        detail: hasFirstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

//Choice Block - radio click
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|tagOrMetadata|",
                value: "hasTag", // "hasMetafield"
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);
})();

//Remove block
(() => {
    const json = {
        data: {
            data: {
                block_type_id: "register|hasLastName|",
                value: undefined,
            },
            target: "block:remove",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// change placeholder
(() => {
    const firstNameBlock = {
        data: {
            data: {
                setting_id: "register|yourFirstName|",
                value: "Votre Prénom",
            },
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: firstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

(() => {
    const json = {
        setting_id: "register|yourLastName|",
        value: "Votre Nom",
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

(() => {
    const json = {
        setting_id: "register|yourPassword|",
        value: "Votre Mot de password",
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// show error in register form
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|pswMinLengthErr|",
                value: "Your password is too short",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// reorder fields
(() => {
    const json = {
        data: {
            data: {
                blocks: {
                    "register|hasFirstName|": {
                        "66ae96e1-1c92-4e6d-9bff-82a912ba1c1c": {
                            "register|yourFirstName|": "Votre Prénom",
                        },
                    },
                    "register|hasEmail|": {
                        "054255cf-07e7-401d-afb6-6ab11bc7d702": {},
                    },
                    "register|hasLastName|": {},
                    "register|hasPassword|": {
                        "a560aef9-edd5-428e-9ee0-a7c84bdb59a7": {},
                    },
                },
                order: [
                    "a560aef9-edd5-428e-9ee0-a7c84bdb59a7",
                    "66ae96e1-1c92-4e6d-9bff-82a912ba1c1c",
                    "054255cf-07e7-401d-afb6-6ab11bc7d702",
                    "0e4dc077-ed0c-4d7a-9b60-b8a6ea6bbca6",
                ],
            },
            target: "block:reorder",
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// register - label style
(() => {
    const json = {
        data: {
            data: { setting_id: "register|formStyle|", value: "label-go-down" },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// landing
(() => {
    const json = {
        data: {
            data: { setting_id: "landing||", value: "" },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// change fontSize
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|--large-font-size|em",
                value: "4",
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// set animation
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|--animation|",
                value: "slide-from-right",
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// social login
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|hasSocialLogin|",
                value: true,
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();
