"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const env_1 = __importDefault(require("./config/env"));
_1.default.listen(env_1.default.port, () => {
    console.log(`Server running on port ${env_1.default.port}`);
});
