"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var laminarDefinitions = _interopRequireWildcard(require("@laminar/type-definitions"));

var _util = require("../util");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
const lamiTypes = (0, _util.typesFromDefs)(laminarDefinitions);
var _default = lamiTypes;
exports.default = _default;