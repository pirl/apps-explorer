"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _acala = _interopRequireDefault(require("./acala"));

var _centrifugeChain = _interopRequireDefault(require("./centrifuge-chain"));

var _crab = _interopRequireDefault(require("./crab"));

var _crust = _interopRequireDefault(require("./crust"));

var _darwiniaParachain = _interopRequireDefault(require("./darwinia-parachain"));

var _dock = _interopRequireDefault(require("./dock"));

var _cumulusTestParachain = _interopRequireDefault(require("./cumulus-test-parachain"));

var _edgeware = _interopRequireDefault(require("./edgeware"));

var _encointerNodeNotee = _interopRequireDefault(require("./encointer-node-notee"));

var _encointerNodeTeeproxy = _interopRequireDefault(require("./encointer-node-teeproxy"));

var _equilibrium = _interopRequireDefault(require("./equilibrium"));

var _kilt = _interopRequireDefault(require("./kilt"));

var _kulupu = _interopRequireDefault(require("./kulupu"));

var _laminar = _interopRequireDefault(require("./laminar"));

var _nodeTemplate = _interopRequireDefault(require("./node-template"));

var _nodle = _interopRequireDefault(require("./nodle"));

var _plasm = _interopRequireDefault(require("./plasm"));

var _robonomics = _interopRequireDefault(require("./robonomics"));

var _stablePoc = _interopRequireDefault(require("./stable-poc"));

var _stafi = _interopRequireDefault(require("./stafi"));

var _subsocial = _interopRequireDefault(require("./subsocial"));

var _pirl = _interopRequireDefault(require("./pirl"));

/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = {
  Crab: _crab.default,
  Equilibrium: _equilibrium.default,
  acala: _acala.default,
  'centrifuge-chain': _centrifugeChain.default,
  crust: _crust.default,
  'cumulus-test-parachain': _cumulusTestParachain.default,
  'darwinia-parachain': _darwiniaParachain.default,
  'dock-main-runtime': _dock.default,
  'dock-testnet': _dock.default,
  dusty3: _plasm.default,
  edgeware: _edgeware.default,
  'encointer-node': _encointerNodeNotee.default,
  'encointer-node-notee': _encointerNodeNotee.default,
  'encointer-node-teeproxy': _encointerNodeTeeproxy.default,
  kulupu: _kulupu.default,
  laminar: _laminar.default,
  'mashnet-node': _kilt.default,
  'node-template': _nodeTemplate.default,
  'nodle-chain': _nodle.default,
  plasm: _plasm.default,
  robonomics: _robonomics.default,
  'stable-poc': _stablePoc.default,
  stable_poc: _stablePoc.default,
  stafi: _stafi.default,
  subsocial: _subsocial.default,
  pirl: _pirl.default
};
exports.default = _default;