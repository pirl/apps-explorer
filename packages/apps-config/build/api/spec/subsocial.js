"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var subsocialDefinitions = _interopRequireWildcard(require("@subsocial/types/substrate/interfaces/definitions"));

var _util = require("../util");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
const subsocialTypes = (0, _util.typesFromDefs)(subsocialDefinitions);
var _default = subsocialTypes;
exports.default = _default;