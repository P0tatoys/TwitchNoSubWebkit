function injectScript(src) {
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(src);
    s.onload = () => s.remove();
    (document.head || document.documentElement).append(s);
}

const isSafari = navigator.vendor === 'Apple Computer, Inc.';
const extensionType = isSafari ? "safari" : (window.chrome !== undefined ? "chrome" : "firefox");

console.log("[TNS] Found extension type : " + extensionType);

injectScript(`src/${extensionType}/app.js`);
injectScript("src/app.js");