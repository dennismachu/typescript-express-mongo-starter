"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.json());
app.listen(process.env.PORT || 3000, function () {
    console.log('Servers are listening');
});
