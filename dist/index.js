var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NitrApi: () => NitrApi
});
module.exports = __toCommonJS(src_exports);
var import_axios = __toESM(require("axios"));
var import_fs = require("fs");
var { version } = JSON.parse((0, import_fs.readFileSync)("package.json", "utf-8"));
var NitrApi = /* @__PURE__ */ __name((token) => {
  const request = import_axios.default.create({
    baseURL: "https://api.nitrado.net",
    headers: {
      ContentType: "application/json",
      Authorization: token ? "Bearer " + token : "",
      "User-Agent": `nitrado.js/${version}`
    }
  });
  const path = /* @__PURE__ */ __name((url, params) => {
    const urlString = url.replace(/\{([^}]+)\}/g, (_, param) => params[param] || `{${param}}`);
    const handlers = {
      get: (data) => request.get(urlString, { data }),
      post: (data) => request.post(urlString, { data }),
      put: (data) => request.put(urlString, { data }),
      delete: (data) => request.delete(urlString, { data })
    };
    return handlers;
  }, "path");
  return {
    path
  };
}, "NitrApi");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NitrApi
});
/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @returns The NitrApi instance
 *
 * @github https://github.com/cainthebest/nitrado.js
 * @bugs https://github.com/cainthebest/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */
