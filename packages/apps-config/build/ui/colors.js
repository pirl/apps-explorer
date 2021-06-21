"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeColors = exports.emptyColor = exports.chainColors = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// defaults
const emptyColor = '#99999'; // based on chain name
// alphabetical

exports.emptyColor = emptyColor;
const chainCrab = '#7C30DD';
const chainCrust = '#ff8812';
const chainKulupu = '#003366';
const chainPhala = '#4dc56a';
const chainPlasm = '#2096F3';
const chainPolkadot = '#e6007a';
const chainKusama = '#000000';
const chainPirl = '#A2D729';
const chainRocco = '#6f36dc';
const chainRoccoAcala = '#173DC9';
const chainRoccoDarwinia = '#7C30DD';
const chainRococoLaminar = '#004FFF';
const chainRoccoTick = '#22bb22';
const chainRoccoTrack = '#bb2222';
const chainRoccoTrick = '#2222bb';
const chainWestend = '#da68a7'; // based on node name
// alphabetical

const nodeCentrifuge = '#fcc367';
const nodeEdgeware = '#0a95df';
const nodeEquilibrium = '#1792ff';
const nodeNodle = '#1ab394';
const nodeKilt = '#eb5b2a';
const nodeStafi = '#00F3AB';
const nodeSubsocial = '#b9018c';
const nodePirl = '#000000'; // overrides based on the actual matched chain name
// alphabetical

const chainColors = [['acala mandala pc1', chainRoccoAcala], ['Crab', chainCrab], ['crust maxwell cc2', chainCrust], ['darwinia parachain', chainRoccoDarwinia], ['Kulupu', chainKulupu], ['Kusama', chainKusama], ['Pirl', chainPirl], ['Kusama CC1', chainKusama], ['Kusama CC2', chainKusama], ['Kusama CC3', chainKusama], ['laminar turbulence pc1', chainRococoLaminar], ['phala poc 2', chainPhala], ['Plasm', chainPlasm], ['Polkadot', chainPolkadot], ['Polkadot CC1', chainPolkadot], ['Rococo', chainRocco], ['Tick', chainRoccoTick], ['Track', chainRoccoTrack], ['Trick', chainRoccoTrick], ['Westend', chainWestend]].reduce((colors, [chain, color]) => _objectSpread(_objectSpread({}, colors), {}, {
  [chain.toLowerCase()]: color
}), {}); // overrides based on the actual software node type (all '-' converted to ' ')
// alphabetical

exports.chainColors = chainColors;
const nodeColors = [['centrifuge chain', nodeCentrifuge], ['Centrifuge Chain Node', nodeCentrifuge], ['edgeware node', nodeEdgeware], ['Equilibrium node', nodeEquilibrium], ['kilt node', nodeKilt], ['nodle chain node', nodeNodle], ['Stafi node', nodeStafi], ['subsocial node', nodeSubsocial], ['pirl node', nodePirl] // ['node template', emptyColor],
// ['parity polkadot', emptyColor],
// ['substrate node', emptyColor]
].reduce((colors, [node, color]) => _objectSpread(_objectSpread({}, colors), {}, {
  [node.toLowerCase().replace(/-/g, ' ')]: color
}), {});
exports.nodeColors = nodeColors;