// ==UserScript==
// @name         Read Something Greater - Ad Removal
// @namespace    https://github.com/mefengl
// @version      0.1.0
// @description  This userscript is dedicated to enhancing the reading experience on ReadSomethingGreat.com by removing all advertising elements from the web page.
// @author       mefengl
// @match        https://www.readsomethinggreat.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=readsomethinggreat.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  Array.from(document.querySelectorAll(".Text")).filter(t => t.textContent === "Advertise on RSG").map(t => t.parentElement.parentElement.parentElement.parentElement).forEach(e => e.remove());
})();
