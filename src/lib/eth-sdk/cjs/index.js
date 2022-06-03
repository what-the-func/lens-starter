"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolygonSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const lensHub_json_1 = __importDefault(require("../abis/polygon/lensHub.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getPolygonSdk(defaultSignerOrProvider) {
    return {
        "lensHub": getContract('0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d', lensHub_json_1.default, defaultSignerOrProvider),
    };
}
exports.getPolygonSdk = getPolygonSdk;
