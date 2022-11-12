// ==UserScript==
// @name be-careful-when-pr
// @version 0.1.0
// @namespace https://github.com/lightsing/be-careful-when-pr/
// @description Visually warn you when you are going to open a pr to upstream.
// @author lightsing
// @homepage https://github.com/lightsing/be-careful-when-pr#readme
// @match https://github.com*
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

const $ = document.querySelector.bind(document);
const handleRepo = () => {
    $('.octicon-repo-forked');
};
const handleCompare = () => {
};
const isRepoRegex = /https:\/\/github\.com\/[^/]+\/[^/?#\s]+([?#]\S+)?/i;
const isCompareRegex = /https:\/\/github\.com\/([^/]+)\/[^/]+\/compare\/[^.]+\.{3}([^:]+):[^:]+:[^?#]+([?#]\S+)?/i;
const current = window.location.href;
if (isRepoRegex.test(current))
    handleRepo();
else if (isCompareRegex.test(current))
    handleCompare();

/******/ })()
;