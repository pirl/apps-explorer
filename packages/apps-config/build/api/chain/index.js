"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _beresheet = _interopRequireDefault(require("./beresheet"));

var _phala = _interopRequireDefault(require("./phala"));

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// alphabetical
var _default = {
  Beresheet: _beresheet.default,
  'Phala PoC-2': _phala.default
};
exports.default = _default;