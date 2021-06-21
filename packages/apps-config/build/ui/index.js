"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemIcon = getSystemIcon;
exports.getSystemChainColor = getSystemChainColor;

var _colors = require("./colors");

var _identityIcons = require("./identityIcons");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
function sanitize(value) {
  return (value === null || value === void 0 ? void 0 : value.toLowerCase().replace('-', ' ')) || '';
}

function getSystemIcon(systemName) {
  return _identityIcons.identityNodes[systemName.toLowerCase().replace(/-/g, ' ')] || 'substrate';
}

function getSystemChainColor(systemChain, systemName) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return _colors.chainColors[sanitize(systemChain)] || _colors.nodeColors[sanitize(systemName)];
}