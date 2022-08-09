// ==UserScript==
// @name         StartPageBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for Yandex
// @author       Afonina Nataliya
// @match        https://www.startpage.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress", "Взаимодействие PHP и MySQL. Подключение к базе данных MySQL"];
let keyword = keywords[getRandom(0, keywords.length)];
let btnK = document.getElementsByClassName("search-form-home__button-desktop")[0];
let links = document.links;

if (btnK !== undefined) {
    document.getElementsByName("query")[0].value = keyword;
    btnK.click();
} else {

    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("napli.ru") !== -1) {
            let link = links[i];
            console.log("Нашел строку " + link);
            link.click();
            break;
        }
    }

}

function getRandom(min, max) {
return Math.floor(Math.random()*(max - min) + min);
}
