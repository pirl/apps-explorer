"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// structs need to be in order

/* eslint-disable sort-keys */
var _default = {
  Difficulty: 'U256',
  DifficultyAndTimestamp: {
    difficulty: 'Difficulty',
    timestamp: 'Moment'
  },
  Era: {
    genesisBlockHash: 'H256',
    finalBlockHash: 'H256',
    finalStateRoot: 'H256'
  },
  RefCount: 'u8'
};
exports.default = _default;