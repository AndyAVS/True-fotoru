// ==UserScript==
// @name         True Fotoru (beta)
// @namespace    http://tampermonkey.net/
// @version      0.4.8
// @description  Fotoru imgflood filter & img resizer & css
// @author       _andy_
// @match        https://foto.ru/*
// @grant        GM_addStyle
// ==/UserScript==

/* globals $ */

const arts = [
  489974, // KAI
  360713, // AlexM
  705542, // koh
];

const textColor = "#f0f0f0";
const inputTextColor = "black";
const quoteColor = "#d0d0d0";
const bodyBackground = "#5a5a5a";
const postBackground = "#6a6a6a";
const quoteBackground = "#8a8a8a";

(function () {
  "use strict";

  arts.forEach((id) => {
    $(`a.topic-card__author-name[href='/users/${id}']`)
      .closest("section.topic-card")
      ?.remove();
  });

  // ignored
  $("section").removeClass("ignored-post-css");
  $("a.reaction-button").removeAttr("disabled");

  // theme
  const css = `
        body {
            background: ${bodyBackground} !important;
            color: ${textColor} !important;
        }

        .topic-card, .post, .message {
            background: ${postBackground} !important;
            color: ${textColor} !important;
        }

        .topic-card__user,
        .forum-table__title,
        .forum-table__link,
        .pagination__link,
        .forum-table__author,
        .forum-table__pages,
        .topic-card__author-name,
        .breadcrumbs__item.active
        {
            color: ${textColor} !important;
        }

        .forum-table__item,
        .sections-item,
        .top-main__description,
        .about-author,
        .author-favorites__content,
        .author-favorites__card,
        .author-favorites__item,
        .author-box
        {
            background: ${postBackground} !important;
        }

        blockquote, .quote {
            background: ${quoteBackground}  !important;
            color: ${quoteColor} !important;
        }

        div.post-text-js img.lazy {
             max-width: 1024px !important;
             max-height: 768px !important;
             border-radius: 10px
        }

        .reaction-button::before {
           background: ${textColor} !important;
        }

        .form__input {
           color: ${inputTextColor} !important;
        }
    `;

  // eslint-disable-next-line no-undef
  GM_addStyle(css);
})();
