"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityNodes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// overrides based on the actual software node type, valid values are one of -
// polkadot, substrate, beachball
const identityNodes = [['centrifuge chain', 'polkadot'], ['edgeware-node', 'substrate'], ['joystream-node', 'beachball'], ['node-template', 'substrate'], ['parity-polkadot', 'polkadot'], ['phala-substrate-node', 'substrate'], ['polkadot-js', 'polkadot'], ['subsocial-node', 'substrate'], ['substrate-node', 'substrate'], ['pirl-node', 'pirl']].reduce((icons, [spec, icon]) => _objectSpread(_objectSpread({}, icons), {}, {
  [spec.toLowerCase().replace(/-/g, ' ')]: icon
}), {});
exports.identityNodes = identityNodes;