"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const mongodb_1 = require("mongodb");
const DocumentIdFieldType = zod_1.default
    .custom(() => true)
    .transform((i) => i ? new mongodb_1.ObjectId(i).toString() : new mongodb_1.ObjectId().toString());
exports.default = DocumentIdFieldType;
