"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var acalaDefinitions = _interopRequireWildcard(require("@acala-network/type-definitions"));

var _util = require("../util");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
const acaTypes = (0, _util.typesFromDefs)(acalaDefinitions);
var _default = acaTypes;
exports.default = _default;