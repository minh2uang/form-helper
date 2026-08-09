"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaders = exports.getUrl = void 0;
const baseUrl = "/api";
const getUrl = (tail) => `${baseUrl}${tail}`;
exports.getUrl = getUrl;
const getHeaders = () => ({
    accept: "application/json",
});
exports.getHeaders = getHeaders;
