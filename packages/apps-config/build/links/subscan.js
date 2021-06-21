"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logos = require("../ui/logos");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = {
  chains: {
    Edgeware: 'edgeware',
    Kulupu: 'kulupu',
    Kusama: 'kusama',
    'Kusama CC3': 'kusama',
    Polkadot: 'polkadot',
    'Polkadot CC1': 'polkadot-cc1',
    Westend: 'westend'
  },
  create: (chain, path, data) => `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  logo: _logos.externalLogos.subscan,
  paths: {
    address: 'account',
    block: 'block',
    council: 'council',
    extrinsic: 'extrinsic',
    proposal: 'democracy_proposal',
    referendum: 'referenda',
    techcomm: 'tech',
    treasury: 'treasury'
  },
  url: 'https://subscan.io/'
};
exports.default = _default;