"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = {
  Address: "AccountId",
  LookupSource: "AccountId",
  Account: {
    nonce: "U256",
    balance: "U256"
  },
  Transaction: {
    nonce: "U256",
    action: "String",
    gas_price: "u64",
    gas_limit: "u64",
    value: "U256",
    input: "Vec<u8>",
    signature: "Signature"
  },
  Signature: {
    v: "u64",
    r: "H256",
    s: "H256"
  },
  Keys: "SessionKeys5"
};
exports.default = _default;