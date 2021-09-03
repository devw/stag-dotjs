(() => {
    const HEAD = document.getElementsByTagName('head')[0];

    // TODO in prod the endpoint won't work (you can pass from proxy?)
    const ENDPOINT = globalThis?.Shopify
        ? 'https://login-popup-dev-configs.s3.amazonaws.com/public'
        : './';

    const addCSS = (url) => {
        const link = `<link rel="stylesheet" href="${url}" />`;
        HEAD.insertAdjacentHTML('afterbegin', link);
    };

    const addJS = (url) => {
        const script = document.createElement('script');
        script.src = url;
        HEAD.appendChild(script);
    };

    addJS(`${ENDPOINT}/bundle.js?t=${Math.random()}`);
    // TODO to fix because they are not inside the popup scope
    addCSS(
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    );
})();
