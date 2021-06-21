"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KULUPU_GENESIS = exports.POLKADOT_DENOM_BLOCK = exports.POLKADOT_GENESIS = exports.KUSAMA_GENESIS = void 0;

var _bn = _interopRequireDefault(require("bn.js"));

// Copyright 2017-2020 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0
const KUSAMA_GENESIS = '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe';
exports.KUSAMA_GENESIS = KUSAMA_GENESIS;
const POLKADOT_GENESIS = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3';
exports.POLKADOT_GENESIS = POLKADOT_GENESIS;
const POLKADOT_DENOM_BLOCK = new _bn.default(1248328);
exports.POLKADOT_DENOM_BLOCK = POLKADOT_DENOM_BLOCK;
const KULUPU_GENESIS = '0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba';
exports.KULUPU_GENESIS = KULUPU_GENESIS;