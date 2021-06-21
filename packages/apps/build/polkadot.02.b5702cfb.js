((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([["polkadot.02"],{

/***/ "../../node_modules/@acala-network/type-definitions/accounts.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/accounts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    PalletBalanceOf: 'Balance'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/auctionManager.js":
/*!*********************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/auctionManager.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    CollateralAuctionItem: {
      refundRecipient: 'AccountId',
      currencyId: 'CurrencyId',
      initialAmount: 'Compact<Balance>',
      amount: 'Compact<Balance>',
      target: 'Compact<Balance>',
      startTime: 'BlockNumber'
    },
    DebitAuctionItem: {
      initialAmount: 'Compact<Balance>',
      amount: 'Compact<Balance>',
      fix: 'Compact<Balance>',
      startTime: 'BlockNumber'
    },
    SurplusAuctionItem: {
      amount: 'Compact<Balance>',
      startTime: 'BlockNumber'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/cdpEngine.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/cdpEngine.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    LiquidationStrategy: {
      _enum: ['Auction', 'Exchange']
    },
    OptionRate: 'Option<Rate>',
    OptionRatio: 'Option<Ratio>',
    ChangeOptionRate: {
      _enum: {
        NoChange: 'Null',
        NewValue: 'OptionRate'
      }
    },
    ChangeOptionRatio: {
      _enum: {
        NoChange: 'Null',
        NewValue: 'OptionRatio'
      }
    },
    ChangeBalance: {
      _enum: {
        NoChange: 'Null',
        NewValue: 'Balance'
      }
    },
    RiskManagementParams: {
      maximumTotalDebitValue: 'Balance',
      stabilityFee: 'Option<Rate>',
      liquidationRatio: 'Option<Rate>',
      liquidationPenalty: 'Option<Rate>',
      requiredCollateralRatio: 'Option<Rate>'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/dex.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/dex.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {
    getSupplyAmount: {
      description: 'Get supply amount',
      params: [{
        name: 'supplyCurrencyId',
        type: 'CurrencyId'
      }, {
        name: 'targetCurrencyId',
        type: 'CurrencyId'
      }, {
        name: 'targetCurrencyAmount',
        type: 'BalanceRequest'
      }],
      type: 'BalanceWrapper'
    },
    getTargetAmount: {
      description: 'Get target amount',
      params: [{
        name: 'supplyCurrencyId',
        type: 'CurrencyId'
      }, {
        name: 'targetCurrencyId',
        type: 'CurrencyId'
      }, {
        name: 'supplyCurrencyAmount',
        type: 'BalanceRequest'
      }],
      type: 'BalanceWrapper'
    }
  },
  types: {
    BalanceWrapper: {
      amount: 'Balance'
    },
    BalanceRequest: {
      amount: 'Balance'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/homa.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/homa.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    RedeemStrategy: {
      _enum: {
        Immediately: 'Null',
        Target: 'EraIndex',
        WaitForUnbonding: 'Null'
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/incentives.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/incentives.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    PoolId: {
      _enum: {
        Loans: 'CurrencyId',
        DexIncentive: 'CurrencyId',
        DexSaving: 'CurrencyId',
        Homa: 'Null'
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/index.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  accounts: true,
  auctionManager: true,
  cdpEngine: true,
  dex: true,
  homa: true,
  loans: true,
  nomineesElection: true,
  primitives: true,
  stakingPool: true,
  support: true,
  runtime: true,
  incentives: true
};
Object.defineProperty(exports, "accounts", {
  enumerable: true,
  get: function () {
    return _accounts.default;
  }
});
Object.defineProperty(exports, "auctionManager", {
  enumerable: true,
  get: function () {
    return _auctionManager.default;
  }
});
Object.defineProperty(exports, "cdpEngine", {
  enumerable: true,
  get: function () {
    return _cdpEngine.default;
  }
});
Object.defineProperty(exports, "dex", {
  enumerable: true,
  get: function () {
    return _dex.default;
  }
});
Object.defineProperty(exports, "homa", {
  enumerable: true,
  get: function () {
    return _homa.default;
  }
});
Object.defineProperty(exports, "loans", {
  enumerable: true,
  get: function () {
    return _loans.default;
  }
});
Object.defineProperty(exports, "nomineesElection", {
  enumerable: true,
  get: function () {
    return _nomineesElection.default;
  }
});
Object.defineProperty(exports, "primitives", {
  enumerable: true,
  get: function () {
    return _primitives.default;
  }
});
Object.defineProperty(exports, "stakingPool", {
  enumerable: true,
  get: function () {
    return _stakingPool.default;
  }
});
Object.defineProperty(exports, "support", {
  enumerable: true,
  get: function () {
    return _support.default;
  }
});
Object.defineProperty(exports, "runtime", {
  enumerable: true,
  get: function () {
    return _runtime.default;
  }
});
Object.defineProperty(exports, "incentives", {
  enumerable: true,
  get: function () {
    return _incentives.default;
  }
});

var _ormlTypeDefinitions = __webpack_require__(/*! @open-web3/orml-type-definitions */ "../../node_modules/@open-web3/orml-type-definitions/index.js");

Object.keys(_ormlTypeDefinitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ormlTypeDefinitions[key];
    }
  });
});

var _accounts = _interopRequireDefault(__webpack_require__(/*! ./accounts */ "../../node_modules/@acala-network/type-definitions/accounts.js"));

var _auctionManager = _interopRequireDefault(__webpack_require__(/*! ./auctionManager */ "../../node_modules/@acala-network/type-definitions/auctionManager.js"));

var _cdpEngine = _interopRequireDefault(__webpack_require__(/*! ./cdpEngine */ "../../node_modules/@acala-network/type-definitions/cdpEngine.js"));

var _dex = _interopRequireDefault(__webpack_require__(/*! ./dex */ "../../node_modules/@acala-network/type-definitions/dex.js"));

var _homa = _interopRequireDefault(__webpack_require__(/*! ./homa */ "../../node_modules/@acala-network/type-definitions/homa.js"));

var _loans = _interopRequireDefault(__webpack_require__(/*! ./loans */ "../../node_modules/@acala-network/type-definitions/loans.js"));

var _nomineesElection = _interopRequireDefault(__webpack_require__(/*! ./nomineesElection */ "../../node_modules/@acala-network/type-definitions/nomineesElection.js"));

var _primitives = _interopRequireDefault(__webpack_require__(/*! ./primitives */ "../../node_modules/@acala-network/type-definitions/primitives.js"));

var _stakingPool = _interopRequireDefault(__webpack_require__(/*! ./stakingPool */ "../../node_modules/@acala-network/type-definitions/stakingPool.js"));

var _support = _interopRequireDefault(__webpack_require__(/*! ./support */ "../../node_modules/@acala-network/type-definitions/support.js"));

var _runtime = _interopRequireDefault(__webpack_require__(/*! ./runtime */ "../../node_modules/@acala-network/type-definitions/runtime.js"));

var _incentives = _interopRequireDefault(__webpack_require__(/*! ./incentives */ "../../node_modules/@acala-network/type-definitions/incentives.js"));

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/loans.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/loans.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    Position: {
      collateral: 'Balance',
      debit: 'Balance'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/nomineesElection.js":
/*!***********************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/nomineesElection.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    HomaUnlockChunk: {
      value: 'Compact<Balance>',
      era: 'Compact<EraIndex>'
    },
    BondingLedger: {
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>'
    }
  },
  typesAlias: {
    nomineesElection: {
      UnlockChunk: 'HomaUnlockChunk'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/primitives.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/primitives.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    CurrencyId: {
      _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT', 'RENBTC']
    },
    AirDropCurrencyId: {
      _enum: ['KAR', 'ACA']
    },
    DataProviderId: {
      _enum: ['Aggregated', 'Acala', 'Band']
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/runtime.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/runtime.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  types: {
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    CurrencyIdOf: 'CurrencyId',
    Amount: 'i128',
    AmountOf: 'Amount',
    DebitAmount: 'Amount',
    DebitAmountOf: 'DebitAmount',
    DebitBalance: 'Balance',
    DebitBalanceOf: 'Balance',
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    Share: 'u128'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/stakingPool.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/stakingPool.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {
    getAvailableUnbonded: {
      description: 'Get Available Unbonded',
      params: [{
        name: 'account',
        type: 'AccountId'
      }],
      type: 'BalanceInfo'
    },
    getLiquidStakingExchangeRate: {
      description: 'get liquid staking exchange rate',
      params: [],
      type: 'ExchangeRate'
    }
  },
  types: {
    BalanceInfo: {
      amount: 'Balance'
    },
    StakingBalance: 'Balance',
    LiquidBalance: 'Balance',
    StakingBalanceOf: 'StakingBalance',
    LiquidBalanceOf: 'LiquidBalance',
    PolkadotAccountId: 'AccountId',
    PolkadotAccountIdOf: 'PolkadotAccountId'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@acala-network/type-definitions/support.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@acala-network/type-definitions/support.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    ExchangeRate: 'FixedU128',
    Rate: 'FixedU128',
    Ratio: 'FixedU128'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/index.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var mainnet_1 = __webpack_require__(/*! ./spec/mainnet */ "../../node_modules/@edgeware/node-types/dist/spec/mainnet.js");
Object.defineProperty(exports, "Mainnet", { enumerable: true, get: function () { return mainnet_1.default; } });
var beresheet_1 = __webpack_require__(/*! ./spec/beresheet */ "../../node_modules/@edgeware/node-types/dist/spec/beresheet.js");
Object.defineProperty(exports, "Beresheet", { enumerable: true, get: function () { return beresheet_1.default; } });
var dev_1 = __webpack_require__(/*! ./spec/dev */ "../../node_modules/@edgeware/node-types/dist/spec/dev.js");
Object.defineProperty(exports, "dev", { enumerable: true, get: function () { return dev_1.default; } });
__exportStar(__webpack_require__(/*! ./interfaces/index */ "../../node_modules/@edgeware/node-types/dist/interfaces/index.js"), exports);


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/definitions.js":
/*!***********************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/definitions.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var definitions_1 = __webpack_require__(/*! ./signaling/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/signaling/definitions.js");
Object.defineProperty(exports, "signaling", { enumerable: true, get: function () { return definitions_1.default; } });
var definitions_2 = __webpack_require__(/*! ./treasuryRewards/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/definitions.js");
Object.defineProperty(exports, "treasuryRewards", { enumerable: true, get: function () { return definitions_2.default; } });
var definitions_3 = __webpack_require__(/*! ./voting/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/voting/definitions.js");
Object.defineProperty(exports, "voting", { enumerable: true, get: function () { return definitions_3.default; } });


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/index.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./types */ "../../node_modules/@edgeware/node-types/dist/interfaces/types.js"), exports);


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/signaling/definitions.js":
/*!*********************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/signaling/definitions.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        ProposalRecord: {
            index: 'u32',
            author: 'AccountId',
            stage: 'VoteStage',
            transition_time: 'u32',
            title: 'Text',
            contents: 'Text',
            vote_id: 'u64',
        },
        ProposalContents: 'Bytes',
        ProposalTitle: 'Bytes',
    }
};


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/signaling/types.js":
/*!***************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/signaling/types.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/definitions.js":
/*!***************************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/definitions.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        Balance2: 'u128',
    }
};


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/types.js":
/*!*********************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/types.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/types.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/types.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./signaling/types */ "../../node_modules/@edgeware/node-types/dist/interfaces/signaling/types.js"), exports);
__exportStar(__webpack_require__(/*! ./treasuryRewards/types */ "../../node_modules/@edgeware/node-types/dist/interfaces/treasuryRewards/types.js"), exports);
__exportStar(__webpack_require__(/*! ./voting/types */ "../../node_modules/@edgeware/node-types/dist/interfaces/voting/types.js"), exports);


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/voting/definitions.js":
/*!******************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/voting/definitions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        VoteStage: {
            _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
        },
        VoteType: {
            _enum: ['Binary', 'MultiOption', 'RankedChoice']
        },
        TallyType: {
            _enum: ['OnePerson', 'OneCoin']
        },
        VoteOutcome: '[u8; 32]',
        VotingTally: 'Option<Vec<(VoteOutcome, u128)>>',
        VoteData: {
            initiator: 'AccountId',
            stage: 'VoteStage',
            vote_type: 'VoteType',
            tally_type: 'TallyType',
            is_commit_reveal: 'bool'
        },
        Commitments: 'Vec<(AccountId, VoteOutcome)>',
        Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
        VoteRecord: {
            id: 'u64',
            commitments: 'Commitments',
            reveals: 'Reveals',
            data: 'VoteData',
            outcomes: 'Vec<VoteOutcome>'
        }
    }
};


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/interfaces/voting/types.js":
/*!************************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/interfaces/voting/types.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/spec/beresheet.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/spec/beresheet.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const edgewareDefinitions = __importStar(__webpack_require__(/*! ../interfaces/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/definitions.js"));
const edgTypes = Object
    .values(edgewareDefinitions)
    .reduce((res, { types }) => ({ ...res, ...types }), {});
const types = {
    ...edgTypes,
    // aliases that don't do well as part of interfaces
    'voting::VoteType': 'VoteType',
    'voting::TallyType': 'TallyType',
    'voting::Tally': 'VotingTally',
};
const typesAlias = {
    voting: { Tally: 'VotingTally' },
};
exports.default = {
    types, typesAlias
};


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/spec/dev.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/spec/dev.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const edgewareDefinitions = __importStar(__webpack_require__(/*! ../interfaces/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/definitions.js"));
const edgTypes = Object
    .values(edgewareDefinitions)
    .reduce((res, { types }) => ({ ...res, ...types }), {});
const types = {
    ...edgTypes,
    // aliases that don't do well as part of interfaces
    'voting::VoteType': 'VoteType',
    'voting::TallyType': 'TallyType',
    'voting::Tally': 'VotingTally',
};
const typesAlias = {
    voting: { Tally: 'VotingTally' },
};
exports.default = {
    types, typesAlias
};


/***/ }),

/***/ "../../node_modules/@edgeware/node-types/dist/spec/mainnet.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@edgeware/node-types/dist/spec/mainnet.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const edgewareDefinitions = __importStar(__webpack_require__(/*! ../interfaces/definitions */ "../../node_modules/@edgeware/node-types/dist/interfaces/definitions.js"));
const edgTypes = Object
    .values(edgewareDefinitions)
    .reduce((res, { types }) => ({ ...res, ...types }), {});
const types = {
    ...edgTypes,
    // aliases that don't do well as part of interfaces
    'voting::VoteType': 'VoteType',
    'voting::TallyType': 'TallyType',
    'voting::Tally': 'VotingTally',
    // chain-specific overrides
    CompactAssignments: 'CompactAssignmentsTo257',
    ContractExecResult: 'ContractExecResultTo255',
    RefCount: 'RefCountTo259',
};
const typesAlias = {
    voting: { Tally: 'VotingTally' },
};
exports.default = {
    types, typesAlias
};


/***/ }),

/***/ "../../node_modules/@laminar/type-definitions/index.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@laminar/type-definitions/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  margin: true,
  runtime: true,
  synthetic: true
};
Object.defineProperty(exports, "margin", {
  enumerable: true,
  get: function () {
    return _margin.default;
  }
});
Object.defineProperty(exports, "runtime", {
  enumerable: true,
  get: function () {
    return _runtime.default;
  }
});
Object.defineProperty(exports, "synthetic", {
  enumerable: true,
  get: function () {
    return _synthetic.default;
  }
});

var _ormlTypeDefinitions = __webpack_require__(/*! @open-web3/orml-type-definitions */ "../../node_modules/@open-web3/orml-type-definitions/index.js");

Object.keys(_ormlTypeDefinitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ormlTypeDefinitions[key];
    }
  });
});

var _margin = _interopRequireDefault(__webpack_require__(/*! ./margin */ "../../node_modules/@laminar/type-definitions/margin.js"));

var _runtime = _interopRequireDefault(__webpack_require__(/*! ./runtime */ "../../node_modules/@laminar/type-definitions/runtime.js"));

var _synthetic = _interopRequireDefault(__webpack_require__(/*! ./synthetic */ "../../node_modules/@laminar/type-definitions/synthetic.js"));

/***/ }),

/***/ "../../node_modules/@laminar/type-definitions/margin.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@laminar/type-definitions/margin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {
    poolState: {
      description: '',
      params: [{
        name: 'pool_id',
        type: 'u32'
      }, {
        name: 'at',
        type: 'BlockHash',
        isOptional: true
      }],
      type: 'MarginPoolState'
    },
    traderState: {
      description: '',
      params: [{
        name: 'who',
        type: 'AccountId'
      }, {
        name: 'pool_id',
        type: 'LiquidityPoolId'
      }, {
        name: 'at',
        type: 'BlockHash',
        isOptional: true
      }],
      type: 'MarginTraderState'
    }
  },
  types: {
    MarginPoolState: {
      enp: 'FixedI128',
      ell: 'FixedI128',
      required_deposit: 'FixedI128'
    },
    MarginTraderState: {
      equity: 'FixedI128',
      margin_held: 'FixedI128',
      margin_level: 'FixedI128',
      free_margin: 'FixedI128',
      unrealized_pl: 'FixedI128'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@laminar/type-definitions/runtime.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@laminar/type-definitions/runtime.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    CurrencyId: {
      _enum: ['LAMI', 'AUSD', 'FEUR', 'FJPY', 'FBTC', 'FETH', 'FAUD', 'FCAD', 'FCHF', 'FXAU', 'FOIL', 'FGBP']
    },
    Leverage: {
      _enum: ['LongTwo', 'LongThree', 'LongFive', 'LongTen', 'LongTwenty', 'LongThirty', 'LongFifty', 'LongReserved', 'ShortTwo', 'ShortThree', 'ShortFive', 'ShortTen', 'ShortTwenty', 'ShortThirty', 'ShortFifty', 'ShortReserved']
    },
    SwapRate: {
      long: 'Rate',
      short: 'Rate'
    },
    CurrencyIdOf: 'CurrencyId',
    Amount: 'FixedI128',
    AmountOf: 'Amount',
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    LiquidityPoolId: 'u32',
    Leverages: {
      _set: {
        _bitLength: 16,
        LongTwo: 0b0000000000000001,
        LongThree: 0b0000000000000010,
        LongFive: 0b0000000000000100,
        LongTen: 0b0000000000001000,
        LongTwenty: 0b0000000000010000,
        LongThirty: 0b0000000000100000,
        LongFifty: 0b0000000001000000,
        LongReserved: 0b0000000010000000,
        ShortTwo: 0b0000000100000000,
        ShortThree: 0b0000001000000000,
        ShortFive: 0b0000010000000000,
        ShortTen: 0b0000100000000000,
        ShortTwenty: 0b0001000000000000,
        ShortThirty: 0b0010000000000000,
        ShortFifty: 0b0100000000000000,
        ShortReserved: 0b1000000000000000
      }
    },
    TradingPair: {
      base: 'CurrencyId',
      quote: 'CurrencyId'
    },
    AccumulateConfig: {
      frequency: 'Moment',
      offset: 'Moment'
    },
    IdentityDepositBalanceOf: 'Balance',
    Pool: {
      owner: 'AccountId',
      balance: 'Balance'
    },
    MarginTradingPairOption: {
      enabled: 'bool',
      maxSpread: 'Option<FixedU128>',
      swapRate: 'SwapRate',
      accumulateConfig: 'Option<AccumulateConfig>'
    },
    MarginPoolOption: {
      additionalSwapRate: 'FixedI128',
      minLeveragedAmount: 'FixedU128'
    },
    MarginPoolTradingPairOption: {
      enabled: 'bool',
      bidSpread: 'Option<FixedU128>',
      askSpread: 'Option<FixedU128>',
      enabledTrades: 'Leverages'
    },
    SyntheticPoolCurrencyOption: {
      bidSpread: 'Option<FixedU128>',
      askSpread: 'Option<FixedU128>',
      additionalCollateralRatio: 'Option<Permill>',
      syntheticEnabled: 'bool'
    },
    MarginPosition: {
      owner: 'AccountId',
      poolId: 'LiquidityPoolId',
      pair: 'TradingPair',
      leverage: 'Leverage',
      leveragedHeld: 'FixedI128',
      leveragedDebits: 'FixedI128',
      openAccumulatedSwapRate: 'Rate',
      marginHeld: 'FixedI128'
    },
    SyntheticPosition: {
      collateral: 'FixedU128',
      synthetic: 'FixedU128'
    },
    RiskThreshold: {
      marginCall: 'Permill',
      stopOut: 'Permill'
    },
    PositionId: 'u64',
    Rate: 'FixedI128',
    PoolTraderInfo: {
      positionNum: 'PositionId',
      long: 'PairInfo',
      short: 'PairInfo'
    },
    PairInfo: {
      baseAmount: 'FixedI128',
      quoteAmount: 'FixedI128'
    },
    TradingPairRiskThreshold: {
      trader: 'Option<RiskThreshold>',
      enp: 'Option<RiskThreshold>',
      ell: 'Option<RiskThreshold>'
    },
    SyntheticTokensRatio: {
      extreme: 'Option<Permill>',
      liquidation: 'Option<Permill>',
      collateral: 'Option<Permill>'
    },
    PositionsSnapshot: {
      positionsCount: 'PositionId',
      long: 'LeveragedAmounts',
      short: 'LeveragedAmounts'
    },
    LeveragedAmounts: {
      held: 'FixedI128',
      debits: 'FixedI128'
    },
    LiquidityPoolIdentityInfo: {
      legalName: 'Vec<u8>',
      displayName: 'Vec<u8>',
      web: 'Vec<u8>',
      email: 'Vec<u8>',
      image_url: 'Vec<u8>'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@laminar/type-definitions/synthetic.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@laminar/type-definitions/synthetic.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {
    poolState: {
      description: '',
      params: [{
        name: 'pool_id',
        type: 'u32'
      }, {
        name: 'currency_id',
        type: 'CurrencyId'
      }],
      type: 'SyntheticPoolState'
    }
  },
  types: {
    SyntheticPoolState: {
      collateral_ratio: 'FixedI128',
      is_safe: 'boolean'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@ledgerhq/devices/lib-es/index.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/devices/lib-es/index.js ***!
  \*****************************************************************/
/*! exports provided: IIGenericHID, IIKeyboardHID, IIU2F, IICCID, IIWebUSB, ledgerUSBVendorId, getDeviceModel, identifyUSBProductId, identifyProductName, getBluetoothServiceUuids, getInfosForServiceUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIGenericHID", function() { return IIGenericHID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIKeyboardHID", function() { return IIKeyboardHID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIU2F", function() { return IIU2F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IICCID", function() { return IICCID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIWebUSB", function() { return IIWebUSB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledgerUSBVendorId", function() { return ledgerUSBVendorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceModel", function() { return getDeviceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyUSBProductId", function() { return identifyUSBProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyProductName", function() { return identifyProductName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothServiceUuids", function() { return getBluetoothServiceUuids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfosForServiceUuid", function() { return getInfosForServiceUuid; });
/**
 * The USB product IDs will be defined as MMII, encoding a model (MM) and an interface bitfield (II)
 *
 ** Model
 * Ledger Nano S : 0x10
 * Ledger Blue : 0x00
 * Ledger Nano X : 0x40
 *
 ** Interface support bitfield
 * Generic HID : 0x01
 * Keyboard HID : 0x02
 * U2F : 0x04
 * CCID : 0x08
 * WebUSB : 0x10
 */
const IIGenericHID = 0x01;
const IIKeyboardHID = 0x02;
const IIU2F = 0x04;
const IICCID = 0x08;
const IIWebUSB = 0x10;
const devices = {
  blue: {
    id: "blue",
    productName: "Ledger Blue",
    productIdMM: 0x00,
    legacyUsbProductId: 0x0000,
    usbOnly: true,
    memorySize: 480 * 1024,
    blockSize: 4 * 1024
  },
  nanoS: {
    id: "nanoS",
    productName: "Ledger Nano S",
    productIdMM: 0x10,
    legacyUsbProductId: 0x0001,
    usbOnly: true,
    memorySize: 320 * 1024,
    blockSize: 4 * 1024
  },
  nanoX: {
    id: "nanoX",
    productName: "Ledger Nano X",
    productIdMM: 0x40,
    legacyUsbProductId: 0x0004,
    usbOnly: false,
    memorySize: 2 * 1024 * 1024,
    blockSize: 4 * 1024,
    bluetoothSpec: [{
      // this is the legacy one (prototype version). we will eventually drop it.
      serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
      notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
      writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66"
    }, {
      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-0004-0002-4c6564676572"
    }]
  }
};
const productMap = {
  Blue: "blue",
  "Nano S": "nanoS",
  "Nano X": "nanoX"
}; // $FlowFixMe

const devicesList = Object.values(devices);
/**
 *
 */

const ledgerUSBVendorId = 0x2c97;
/**
 *
 */

const getDeviceModel = id => {
  const info = devices[id];
  if (!info) throw new Error("device '" + id + "' does not exist");
  return info;
};
/**
 *
 */

const identifyUSBProductId = usbProductId => {
  const legacy = devicesList.find(d => d.legacyUsbProductId === usbProductId);
  if (legacy) return legacy;
  const mm = usbProductId >> 8;
  const deviceModel = devicesList.find(d => d.productIdMM === mm);
  return deviceModel;
};
const identifyProductName = productName => {
  const productId = productMap[productName];
  const deviceModel = devicesList.find(d => d.id === productId);
  return deviceModel;
};
const bluetoothServices = [];
const serviceUuidToInfos = {};

for (let id in devices) {
  const deviceModel = devices[id];
  const {
    bluetoothSpec
  } = deviceModel;

  if (bluetoothSpec) {
    for (let i = 0; i < bluetoothSpec.length; i++) {
      const spec = bluetoothSpec[i];
      bluetoothServices.push(spec.serviceUuid);
      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = {
        deviceModel,
        ...spec
      };
    }
  }
}
/**
 *
 */


const getBluetoothServiceUuids = () => bluetoothServices;
/**
 *
 */

const getInfosForServiceUuid = uuid => serviceUuidToInfos[uuid.toLowerCase()];
/**
 *
 */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@ledgerhq/devices/lib/hid-framing.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/devices/lib/hid-framing.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = __webpack_require__(/*! @ledgerhq/errors */ "../../node_modules/@ledgerhq/errors/dist/index.js");

const Tag = 0x05;

function asUInt16BE(value) {
  const b = Buffer.alloc(2);
  b.writeUInt16BE(value, 0);
  return b;
}

const initialAcc = {
  data: Buffer.alloc(0),
  dataLength: 0,
  sequence: 0
};
/**
 *
 */

const createHIDframing = (channel, packetSize) => {
  return {
    makeBlocks(apdu) {
      let data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
      const blockSize = packetSize - 5;
      const nbBlocks = Math.ceil(data.length / blockSize);
      data = Buffer.concat([data, // fill data with padding
      Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)]);
      const blocks = [];

      for (let i = 0; i < nbBlocks; i++) {
        const head = Buffer.alloc(5);
        head.writeUInt16BE(channel, 0);
        head.writeUInt8(Tag, 2);
        head.writeUInt16BE(i, 3);
        const chunk = data.slice(i * blockSize, (i + 1) * blockSize);
        blocks.push(Buffer.concat([head, chunk]));
      }

      return blocks;
    },

    reduceResponse(acc, chunk) {
      let {
        data,
        dataLength,
        sequence
      } = acc || initialAcc;

      if (chunk.readUInt16BE(0) !== channel) {
        throw new _errors.TransportError("Invalid channel", "InvalidChannel");
      }

      if (chunk.readUInt8(2) !== Tag) {
        throw new _errors.TransportError("Invalid tag", "InvalidTag");
      }

      if (chunk.readUInt16BE(3) !== sequence) {
        throw new _errors.TransportError("Invalid sequence", "InvalidSequence");
      }

      if (!acc) {
        dataLength = chunk.readUInt16BE(5);
      }

      sequence++;
      const chunkData = chunk.slice(acc ? 5 : 7);
      data = Buffer.concat([data, chunkData]);

      if (data.length > dataLength) {
        data = data.slice(0, dataLength);
      }

      return {
        data,
        dataLength,
        sequence
      };
    },

    getReducedResult(acc) {
      if (acc && acc.dataLength === acc.data.length) {
        return acc.data;
      }
    }

  };
};

var _default = createHIDframing;
exports.default = _default;
//# sourceMappingURL=hid-framing.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@ledgerhq/errors/dist/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/errors/dist/index.js ***!
  \**************************************************************/
/*! exports provided: AccountNameRequiredError, AccountNotSupported, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CantScanQRCode, CashAddrNotSupported, CurrencyNotSupported, DBNotReset, DBWrongPassword, DeviceAppVerifyNotSupported, DeviceGenuineSocketEarlyClose, DeviceHalted, DeviceInOSUExpected, DeviceNameInvalid, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceShouldStayInApp, DeviceSocketFail, DeviceSocketNoBulkStatus, DisconnectedDevice, DisconnectedDeviceDuringOperation, ETHAddressNonEIP, EnpointConfigError, EthAppPleaseEnableContractData, FeeEstimationFailed, FeeNotLoaded, FeeRequired, FeeTooHigh, FirmwareNotRecognized, FirmwareOrAppUpdateRequired, GasLessThanEstimate, GenuineCheckFailed, HardResetFail, InvalidAddress, InvalidAddressBecauseDestinationIsAlsoSource, InvalidXRPTag, LatestMCUInstalledError, LedgerAPI4xx, LedgerAPI5xx, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, MCUNotGenuineToDashboard, ManagerAppAlreadyInstalledError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerAppRelyOnBTCError, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, NetworkDown, NoAccessToCamera, NoAddressesFound, NoDBPathGiven, NotEnoughBalance, NotEnoughBalanceBecauseDestinationNotCreated, NotEnoughBalanceInParentAccount, NotEnoughBalanceToDelegate, NotEnoughGas, NotEnoughSpendableBalance, NotSupportedLegacyAddress, PairingFailed, PasswordIncorrectError, PasswordsDontMatchError, RecipientRequired, RecommendSubAccountsToEmpty, RecommendUndelegation, StatusCodes, SyncError, TimeoutTagged, TransportError, TransportInterfaceNotAvailable, TransportOpenUserCancelled, TransportRaceCondition, TransportStatusError, TransportWebUSBGestureRequired, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UnexpectedBootloader, UnknownMCU, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedAddress, UserRefusedAllowManager, UserRefusedDeviceNameChange, UserRefusedFirmwareUpdate, UserRefusedOnDevice, WebsocketConnectionError, WebsocketConnectionFailed, WrongAppForCurrency, WrongDeviceForAccount, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, getAltStatusMessage, serializeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNameRequiredError", function() { return AccountNameRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotSupported", function() { return AccountNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountRequired", function() { return AmountRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothRequired", function() { return BluetoothRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcUnmatchedApp", function() { return BtcUnmatchedApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantOpenDevice", function() { return CantOpenDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantScanQRCode", function() { return CantScanQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAddrNotSupported", function() { return CashAddrNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyNotSupported", function() { return CurrencyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBNotReset", function() { return DBNotReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrongPassword", function() { return DBWrongPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAppVerifyNotSupported", function() { return DeviceAppVerifyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGenuineSocketEarlyClose", function() { return DeviceGenuineSocketEarlyClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceHalted", function() { return DeviceHalted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInOSUExpected", function() { return DeviceInOSUExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNameInvalid", function() { return DeviceNameInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNotGenuineError", function() { return DeviceNotGenuineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardExpected", function() { return DeviceOnDashboardExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardUnexpected", function() { return DeviceOnDashboardUnexpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceShouldStayInApp", function() { return DeviceShouldStayInApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketFail", function() { return DeviceSocketFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketNoBulkStatus", function() { return DeviceSocketNoBulkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDevice", function() { return DisconnectedDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDeviceDuringOperation", function() { return DisconnectedDeviceDuringOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHAddressNonEIP", function() { return ETHAddressNonEIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnpointConfigError", function() { return EnpointConfigError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthAppPleaseEnableContractData", function() { return EthAppPleaseEnableContractData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeEstimationFailed", function() { return FeeEstimationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeNotLoaded", function() { return FeeNotLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeRequired", function() { return FeeRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTooHigh", function() { return FeeTooHigh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareNotRecognized", function() { return FirmwareNotRecognized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareOrAppUpdateRequired", function() { return FirmwareOrAppUpdateRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasLessThanEstimate", function() { return GasLessThanEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenuineCheckFailed", function() { return GenuineCheckFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardResetFail", function() { return HardResetFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddress", function() { return InvalidAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddressBecauseDestinationIsAlsoSource", function() { return InvalidAddressBecauseDestinationIsAlsoSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidXRPTag", function() { return InvalidXRPTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestMCUInstalledError", function() { return LatestMCUInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI4xx", function() { return LedgerAPI4xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI5xx", function() { return LedgerAPI5xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIError", function() { return LedgerAPIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIErrorWithMessage", function() { return LedgerAPIErrorWithMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPINotAvailable", function() { return LedgerAPINotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCUNotGenuineToDashboard", function() { return MCUNotGenuineToDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppAlreadyInstalledError", function() { return ManagerAppAlreadyInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepInstallRequired", function() { return ManagerAppDepInstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepUninstallRequired", function() { return ManagerAppDepUninstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppRelyOnBTCError", function() { return ManagerAppRelyOnBTCError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDeviceLockedError", function() { return ManagerDeviceLockedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFirmwareNotEnoughSpaceError", function() { return ManagerFirmwareNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerNotEnoughSpaceError", function() { return ManagerNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerUninstallBTCDep", function() { return ManagerUninstallBTCDep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDown", function() { return NetworkDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessToCamera", function() { return NoAccessToCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAddressesFound", function() { return NoAddressesFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDBPathGiven", function() { return NoDBPathGiven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalance", function() { return NotEnoughBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceBecauseDestinationNotCreated", function() { return NotEnoughBalanceBecauseDestinationNotCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceInParentAccount", function() { return NotEnoughBalanceInParentAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceToDelegate", function() { return NotEnoughBalanceToDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughGas", function() { return NotEnoughGas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughSpendableBalance", function() { return NotEnoughSpendableBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedLegacyAddress", function() { return NotSupportedLegacyAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairingFailed", function() { return PairingFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordIncorrectError", function() { return PasswordIncorrectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordsDontMatchError", function() { return PasswordsDontMatchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientRequired", function() { return RecipientRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendSubAccountsToEmpty", function() { return RecommendSubAccountsToEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendUndelegation", function() { return RecommendUndelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return StatusCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncError", function() { return SyncError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTagged", function() { return TimeoutTagged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return TransportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportInterfaceNotAvailable", function() { return TransportInterfaceNotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportOpenUserCancelled", function() { return TransportOpenUserCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportRaceCondition", function() { return TransportRaceCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return TransportStatusError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportWebUSBGestureRequired", function() { return TransportWebUSBGestureRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountReceive", function() { return UnavailableTezosOriginatedAccountReceive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountSend", function() { return UnavailableTezosOriginatedAccountSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedBootloader", function() { return UnexpectedBootloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownMCU", function() { return UnknownMCU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFetchFileFail", function() { return UpdateFetchFileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectHash", function() { return UpdateIncorrectHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectSig", function() { return UpdateIncorrectSig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateYourApp", function() { return UpdateYourApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAddress", function() { return UserRefusedAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAllowManager", function() { return UserRefusedAllowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedDeviceNameChange", function() { return UserRefusedDeviceNameChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedFirmwareUpdate", function() { return UserRefusedFirmwareUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedOnDevice", function() { return UserRefusedOnDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionError", function() { return WebsocketConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionFailed", function() { return WebsocketConnectionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongAppForCurrency", function() { return WrongAppForCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongDeviceForAccount", function() { return WrongDeviceForAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomErrorDeserializer", function() { return addCustomErrorDeserializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomErrorClass", function() { return createCustomErrorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeError", function() { return deserializeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return getAltStatusMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeError", function() { return serializeError; });
/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
var errorClasses = {};
var deserializers = {};
var addCustomErrorDeserializer = function (name, deserializer) {
    deserializers[name] = deserializer;
};
var createCustomErrorClass = function (name) {
    var C = function CustomError(message, fields) {
        Object.assign(this, fields);
        this.name = name;
        this.message = message || name;
        this.stack = new Error().stack;
    };
    C.prototype = new Error();
    errorClasses[name] = C;
    return C;
};
// inspired from https://github.com/programble/errio/blob/master/index.js
var deserializeError = function (object) {
    if (typeof object === "object" && object) {
        try {
            // $FlowFixMe FIXME HACK
            var msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
                object = msg;
            }
        }
        catch (e) {
            // nothing
        }
        var error = void 0;
        if (typeof object.name === "string") {
            var name_1 = object.name;
            var des = deserializers[name_1];
            if (des) {
                error = des(object);
            }
            else {
                var constructor = name_1 === "Error" ? Error : errorClasses[name_1];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name_1 + "'");
                    constructor = createCustomErrorClass(name_1);
                }
                error = Object.create(constructor.prototype);
                try {
                    for (var prop in object) {
                        if (object.hasOwnProperty(prop)) {
                            error[prop] = object[prop];
                        }
                    }
                }
                catch (e) {
                    // sometimes setting a property can fail (e.g. .name)
                }
            }
        }
        else {
            error = new Error(object.message);
        }
        if (!error.stack && Error.captureStackTrace) {
            Error.captureStackTrace(error, deserializeError);
        }
        return error;
    }
    return new Error(String(object));
};
// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
var serializeError = function (value) {
    if (!value)
        return value;
    if (typeof value === "object") {
        return destroyCircular(value, []);
    }
    if (typeof value === "function") {
        return "[Function: " + (value.name || "anonymous") + "]";
    }
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    var to = {};
    seen.push(from);
    for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = from[key];
        if (typeof value === "function") {
            continue;
        }
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") {
        to.name = from.name;
    }
    if (typeof from.message === "string") {
        to.message = from.message;
    }
    if (typeof from.stack === "string") {
        to.stack = from.stack;
    }
    return to;
}

var AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
var AccountNotSupported = createCustomErrorClass("AccountNotSupported");
var AmountRequired = createCustomErrorClass("AmountRequired");
var BluetoothRequired = createCustomErrorClass("BluetoothRequired");
var BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
var CantOpenDevice = createCustomErrorClass("CantOpenDevice");
var CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
var CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
var DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
var DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
var DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
var DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
var DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
var DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
var DeviceHalted = createCustomErrorClass("DeviceHalted");
var DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
var DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
var DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
var DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
var DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
var EnpointConfigError = createCustomErrorClass("EnpointConfig");
var EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
var FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
var FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
var HardResetFail = createCustomErrorClass("HardResetFail");
var InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
var InvalidAddress = createCustomErrorClass("InvalidAddress");
var InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
var LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
var UnknownMCU = createCustomErrorClass("UnknownMCU");
var LedgerAPIError = createCustomErrorClass("LedgerAPIError");
var LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
var LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
var ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
var ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
var ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
var ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
var ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
var ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
var ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
var ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
var NetworkDown = createCustomErrorClass("NetworkDown");
var NoAddressesFound = createCustomErrorClass("NoAddressesFound");
var NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
var NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
var NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
var NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
var NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
var NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
var NotEnoughGas = createCustomErrorClass("NotEnoughGas");
var NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
var GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
var PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
var PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
var RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
var RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
var TimeoutTagged = createCustomErrorClass("TimeoutTagged");
var UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
var MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
var RecipientRequired = createCustomErrorClass("RecipientRequired");
var UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
var UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
var UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
var UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
var UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
var UpdateYourApp = createCustomErrorClass("UpdateYourApp");
var UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
var UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
var UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
var UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
var UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
var TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
var TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
var TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
var TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
var DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
var WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
var WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
var WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
var WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
var ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
var CantScanQRCode = createCustomErrorClass("CantScanQRCode");
var FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
var FeeRequired = createCustomErrorClass("FeeRequired");
var FeeTooHigh = createCustomErrorClass("FeeTooHigh");
var SyncError = createCustomErrorClass("SyncError");
var PairingFailed = createCustomErrorClass("PairingFailed");
var GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
var LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
var LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
var FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
// db stuff, no need to translate
var NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
var DBWrongPassword = createCustomErrorClass("DBWrongPassword");
var DBNotReset = createCustomErrorClass("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */
function TransportError(message, id) {
    this.name = "TransportError";
    this.message = message;
    this.stack = new Error().stack;
    this.id = id;
}
TransportError.prototype = new Error();
addCustomErrorDeserializer("TransportError", function (e) { return new TransportError(e.message, e.id); });
var StatusCodes = {
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    INCORRECT_LENGTH: 0x6700,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    INCORRECT_DATA: 0x6a80,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    FILE_ALREADY_EXISTS: 0x6a89,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    CLA_NOT_SUPPORTED: 0x6e00,
    TECHNICAL_PROBLEM: 0x6f00,
    OK: 0x9000,
    MEMORY_PROBLEM: 0x9240,
    NO_EF_SELECTED: 0x9400,
    INVALID_OFFSET: 0x9402,
    FILE_NOT_FOUND: 0x9404,
    INCONSISTENT_FILE: 0x9408,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    INVALID_KCV: 0x9485,
    CODE_NOT_INITIALIZED: 0x9802,
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    CONTRADICTION_INVALIDATION: 0x9810,
    CODE_BLOCKED: 0x9840,
    MAX_VALUE_REACHED: 0x9850,
    GP_AUTH_FAILED: 0x6300,
    LICENSING: 0x6f42,
    HALTED: 0x6faa,
};
function getAltStatusMessage(code) {
    switch (code) {
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
    }
    if (0x6f00 <= code && code <= 0x6fff) {
        return "Internal error, please report";
    }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */
function TransportStatusError(statusCode) {
    this.name = "TransportStatusError";
    var statusText = Object.keys(StatusCodes).find(function (k) { return StatusCodes[k] === statusCode; }) ||
        "UNKNOWN_ERROR";
    var smsg = getAltStatusMessage(statusCode) || statusText;
    var statusCodeStr = statusCode.toString(16);
    this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
    this.stack = new Error().stack;
    this.statusCode = statusCode;
    this.statusText = statusText;
}
TransportStatusError.prototype = new Error();
addCustomErrorDeserializer("TransportStatusError", function (e) { return new TransportStatusError(e.statusCode); });




/***/ }),

/***/ "../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js":
/*!***************************************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransportWebUSB; });
/* harmony import */ var _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ledgerhq/hw-transport */ "../../node_modules/@ledgerhq/hw-transport/lib-es/Transport.js");
/* harmony import */ var _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/devices/lib/hid-framing */ "../../node_modules/@ledgerhq/devices/lib/hid-framing.js");
/* harmony import */ var _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/devices */ "../../node_modules/@ledgerhq/devices/lib-es/index.js");
/* harmony import */ var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ledgerhq/logs */ "../../node_modules/@ledgerhq/logs/lib-es/index.js");
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ledgerhq/errors */ "../../node_modules/@ledgerhq/errors/dist/index.js");
/* harmony import */ var _webusb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webusb */ "../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/webusb.js");






const configurationValue = 1;
const endpointNumber = 3;
/**
 * WebUSB Transport implementation
 * @example
 * import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
 * ...
 * TransportWebUSB.create().then(transport => ...)
 */

class TransportWebUSB extends _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(device, interfaceNumber) {
    super();
    this.device = void 0;
    this.deviceModel = void 0;
    this.channel = Math.floor(Math.random() * 0xffff);
    this.packetSize = 64;
    this.interfaceNumber = void 0;
    this._disconnectEmitted = false;

    this._emitDisconnect = e => {
      if (this._disconnectEmitted) return;
      this._disconnectEmitted = true;
      this.emit("disconnect", e);
    };

    this.exchange = apdu => this.exchangeAtomicImpl(async () => {
      const {
        channel,
        packetSize
      } = this;
      Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__["log"])("apdu", "=> " + apdu.toString("hex"));
      const framing = _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1___default()(channel, packetSize); // Write...

      const blocks = framing.makeBlocks(apdu);

      for (let i = 0; i < blocks.length; i++) {
        await this.device.transferOut(endpointNumber, blocks[i]);
      } // Read...


      let result;
      let acc;

      while (!(result = framing.getReducedResult(acc))) {
        const r = await this.device.transferIn(endpointNumber, packetSize);
        const buffer = Buffer.from(r.data.buffer);
        acc = framing.reduceResponse(acc, buffer);
      }

      Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__["log"])("apdu", "<= " + result.toString("hex"));
      return result;
    }).catch(e => {
      if (e && e.message && e.message.includes("disconnected")) {
        this._emitDisconnect(e);

        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["DisconnectedDeviceDuringOperation"](e.message);
      }

      throw e;
    });

    this.device = device;
    this.interfaceNumber = interfaceNumber;
    this.deviceModel = Object(_ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["identifyUSBProductId"])(device.productId);
  }
  /**
   * Check if WebUSB transport is supported.
   */


  /**
   * Similar to create() except it will always display the device permission (even if some devices are already accepted).
   */
  static async request() {
    const device = await Object(_webusb__WEBPACK_IMPORTED_MODULE_5__["requestLedgerDevice"])();
    return TransportWebUSB.open(device);
  }
  /**
   * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
   */


  static async openConnected() {
    const devices = await Object(_webusb__WEBPACK_IMPORTED_MODULE_5__["getLedgerDevices"])();
    if (devices.length === 0) return null;
    return TransportWebUSB.open(devices[0]);
  }
  /**
   * Create a Ledger transport with a USBDevice
   */


  static async open(device) {
    await device.open();

    if (device.configuration === null) {
      await device.selectConfiguration(configurationValue);
    }

    await device.reset();
    const iface = device.configurations[0].interfaces.find(({
      alternates
    }) => alternates.some(a => a.interfaceClass === 255));

    if (!iface) {
      throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportInterfaceNotAvailable"]("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
    }

    const interfaceNumber = iface.interfaceNumber;

    try {
      await device.claimInterface(interfaceNumber);
    } catch (e) {
      await device.close();
      throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportInterfaceNotAvailable"](e.message);
    }

    const transport = new TransportWebUSB(device, interfaceNumber);

    const onDisconnect = e => {
      if (device === e.device) {
        // $FlowFixMe
        navigator.usb.removeEventListener("disconnect", onDisconnect);

        transport._emitDisconnect(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["DisconnectedDevice"]());
      }
    }; // $FlowFixMe


    navigator.usb.addEventListener("disconnect", onDisconnect);
    return transport;
  }

  /**
   * Release the transport device
   */
  async close() {
    await this.exchangeBusyPromise;
    await this.device.releaseInterface(this.interfaceNumber);
    await this.device.reset();
    await this.device.close();
  }
  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   */


  setScrambleKey() {}

}
TransportWebUSB.isSupported = _webusb__WEBPACK_IMPORTED_MODULE_5__["isSupported"];
TransportWebUSB.list = _webusb__WEBPACK_IMPORTED_MODULE_5__["getLedgerDevices"];

TransportWebUSB.listen = observer => {
  let unsubscribed = false;
  Object(_webusb__WEBPACK_IMPORTED_MODULE_5__["getFirstLedgerDevice"])().then(device => {
    if (!unsubscribed) {
      const deviceModel = Object(_ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["identifyUSBProductId"])(device.productId);
      observer.next({
        type: "add",
        descriptor: device,
        deviceModel
      });
      observer.complete();
    }
  }, error => {
    if (window.DOMException && error instanceof window.DOMException && error.code === 18) {
      observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportWebUSBGestureRequired"](error.message));
    } else {
      observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportOpenUserCancelled"](error.message));
    }
  });

  function unsubscribe() {
    unsubscribed = true;
  }

  return {
    unsubscribe
  };
};
//# sourceMappingURL=TransportWebUSB.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/webusb.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/hw-transport-webusb/lib-es/webusb.js ***!
  \******************************************************************************/
/*! exports provided: requestLedgerDevice, getLedgerDevices, getFirstLedgerDevice, isSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLedgerDevice", function() { return requestLedgerDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLedgerDevices", function() { return getLedgerDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstLedgerDevice", function() { return getFirstLedgerDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony import */ var _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ledgerhq/devices */ "../../node_modules/@ledgerhq/devices/lib-es/index.js");

const ledgerDevices = [{
  vendorId: _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_0__["ledgerUSBVendorId"]
}];
async function requestLedgerDevice() {
  // $FlowFixMe
  const device = await navigator.usb.requestDevice({
    filters: ledgerDevices
  });
  return device;
}
async function getLedgerDevices() {
  // $FlowFixMe
  const devices = await navigator.usb.getDevices();
  return devices.filter(d => d.vendorId === _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_0__["ledgerUSBVendorId"]);
}
async function getFirstLedgerDevice() {
  const existingDevices = await getLedgerDevices();
  if (existingDevices.length > 0) return existingDevices[0];
  return requestLedgerDevice();
}
const isSupported = () => Promise.resolve(!!navigator && // $FlowFixMe
!!navigator.usb && typeof navigator.usb.getDevices === "function");
//# sourceMappingURL=webusb.js.map

/***/ }),

/***/ "../../node_modules/@ledgerhq/hw-transport/lib-es/Transport.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js ***!
  \**************************************************************************/
/*! exports provided: TransportError, TransportStatusError, StatusCodes, getAltStatusMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transport; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/errors */ "../../node_modules/@ledgerhq/errors/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["getAltStatusMessage"]; });




/**
 */

/**
 * Transport defines the generic interface to share between node/u2f impl
 * A **Descriptor** is a parametric type that is up to be determined for the implementation.
 * it can be for instance an ID, an file path, a URL,...
 */
class Transport {
  constructor() {
    this.exchangeTimeout = 30000;
    this.unresponsiveTimeout = 15000;
    this.deviceModel = null;
    this._events = new events__WEBPACK_IMPORTED_MODULE_0___default.a();

    this.send = async (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [_ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"].OK]) => {
      if (data.length >= 256) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
      }

      const response = await this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));
      const sw = response.readUInt16BE(response.length - 2);

      if (!statusList.some(s => s === sw)) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"](sw);
      }

      return response;
    };

    this.exchangeBusyPromise = void 0;

    this.exchangeAtomicImpl = async f => {
      if (this.exchangeBusyPromise) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportRaceCondition"]("An action was already pending on the Ledger device. Please deny or reconnect.");
      }

      let resolveBusy;
      const busyPromise = new Promise(r => {
        resolveBusy = r;
      });
      this.exchangeBusyPromise = busyPromise;
      let unresponsiveReached = false;
      const timeout = setTimeout(() => {
        unresponsiveReached = true;
        this.emit("unresponsive");
      }, this.unresponsiveTimeout);

      try {
        const res = await f();

        if (unresponsiveReached) {
          this.emit("responsive");
        }

        return res;
      } finally {
        clearTimeout(timeout);
        if (resolveBusy) resolveBusy();
        this.exchangeBusyPromise = null;
      }
    };

    this._appAPIlock = null;
  }

  /**
   * low level api to communicate with the device
   * This method is for implementations to implement but should not be directly called.
   * Instead, the recommanded way is to use send() method
   * @param apdu the data to send
   * @return a Promise of response data
   */
  exchange(_apdu) {
    throw new Error("exchange not implemented");
  }
  /**
   * set the "scramble key" for the next exchanges with the device.
   * Each App can have a different scramble key and they internally will set it at instanciation.
   * @param key the scramble key
   */


  setScrambleKey(_key) {}
  /**
   * close the exchange with the device.
   * @return a Promise that ends when the transport is closed.
   */


  close() {
    return Promise.resolve();
  }

  /**
   * Listen to an event on an instance of transport.
   * Transport implementation can have specific events. Here is the common events:
   * * `"disconnect"` : triggered if Transport is disconnected
   */
  on(eventName, cb) {
    this._events.on(eventName, cb);
  }
  /**
   * Stop listening to an event on an instance of transport.
   */


  off(eventName, cb) {
    this._events.removeListener(eventName, cb);
  }

  emit(event, ...args) {
    this._events.emit(event, ...args);
  }
  /**
   * Enable or not logs of the binary exchange
   */


  setDebugMode() {
    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
  }
  /**
   * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
   */


  setExchangeTimeout(exchangeTimeout) {
    this.exchangeTimeout = exchangeTimeout;
  }
  /**
   * Define the delay before emitting "unresponsive" on an exchange that does not respond
   */


  setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
    this.unresponsiveTimeout = unresponsiveTimeout;
  }
  /**
   * wrapper on top of exchange to simplify work of the implementation.
   * @param cla
   * @param ins
   * @param p1
   * @param p2
   * @param data
   * @param statusList is a list of accepted status code (shorts). [0x9000] by default
   * @return a Promise of response buffer
   */


  /**
   * create() allows to open the first descriptor available or
   * throw if there is none or if timeout is reached.
   * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
   * @example
  TransportFoo.create().then(transport => ...)
   */
  static create(openTimeout = 3000, listenTimeout) {
    return new Promise((resolve, reject) => {
      let found = false;
      const sub = this.listen({
        next: e => {
          found = true;
          if (sub) sub.unsubscribe();
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          this.open(e.descriptor, openTimeout).then(resolve, reject);
        },
        error: e => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          reject(e);
        },
        complete: () => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);

          if (!found) {
            reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
          }
        }
      });
      const listenTimeoutId = listenTimeout ? setTimeout(() => {
        sub.unsubscribe();
        reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_ListenTimeout, "ListenTimeout"));
      }, listenTimeout) : null;
    });
  }

  decorateAppAPIMethods(self, methods, scrambleKey) {
    for (let methodName of methods) {
      self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
    }
  }

  decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
    return async (...args) => {
      const {
        _appAPIlock
      } = this;

      if (_appAPIlock) {
        return Promise.reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
      }

      try {
        this._appAPIlock = methodName;
        this.setScrambleKey(scrambleKey);
        return await f.apply(ctx, args);
      } finally {
        this._appAPIlock = null;
      }
    };
  }

}
Transport.isSupported = void 0;
Transport.list = void 0;
Transport.listen = void 0;
Transport.open = void 0;
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
//# sourceMappingURL=Transport.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@ledgerhq/logs/lib-es/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@ledgerhq/logs/lib-es/index.js ***!
  \**************************************************************/
/*! exports provided: log, listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/**
 * A Log object
 */
let id = 0;
const subscribers = [];
/**
 * log something
 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
 * @param message a clear message of the log associated to the type
 */

const log = (type, message, data) => {
  const obj = {
    type,
    id: String(++id),
    date: new Date()
  };
  if (message) obj.message = message;
  if (data) obj.data = data;
  dispatch(obj);
};
/**
 * listen to logs.
 * @param cb that is called for each future log() with the Log object
 * @return a function that can be called to unsubscribe the listener
 */

const listen = cb => {
  subscribers.push(cb);
  return () => {
    const i = subscribers.indexOf(cb);

    if (i !== -1) {
      // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};

function dispatch(log) {
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log);
    } catch (e) {
      console.error(e);
    }
  }
} // for debug purpose


if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/authority.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/authority.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    CallOf: 'Call'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/graduallyUpdates.js":
/*!************************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/graduallyUpdates.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    StorageValue: 'Vec<u8>',
    GraduallyUpdate: {
      key: 'StorageKey',
      targetValue: 'StorageValue',
      perBlock: 'StorageValue'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/index.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "authority", {
  enumerable: true,
  get: function () {
    return _authority.default;
  }
});
Object.defineProperty(exports, "graduallyUpdates", {
  enumerable: true,
  get: function () {
    return _graduallyUpdates.default;
  }
});
Object.defineProperty(exports, "oracle", {
  enumerable: true,
  get: function () {
    return _oracle.default;
  }
});
Object.defineProperty(exports, "tokens", {
  enumerable: true,
  get: function () {
    return _tokens.default;
  }
});
Object.defineProperty(exports, "traits", {
  enumerable: true,
  get: function () {
    return _traits.default;
  }
});
Object.defineProperty(exports, "vesting", {
  enumerable: true,
  get: function () {
    return _vesting.default;
  }
});
Object.defineProperty(exports, "rewards", {
  enumerable: true,
  get: function () {
    return _rewards.default;
  }
});

var _authority = _interopRequireDefault(__webpack_require__(/*! ./authority */ "../../node_modules/@open-web3/orml-type-definitions/authority.js"));

var _graduallyUpdates = _interopRequireDefault(__webpack_require__(/*! ./graduallyUpdates */ "../../node_modules/@open-web3/orml-type-definitions/graduallyUpdates.js"));

var _oracle = _interopRequireDefault(__webpack_require__(/*! ./oracle */ "../../node_modules/@open-web3/orml-type-definitions/oracle.js"));

var _tokens = _interopRequireDefault(__webpack_require__(/*! ./tokens */ "../../node_modules/@open-web3/orml-type-definitions/tokens.js"));

var _traits = _interopRequireDefault(__webpack_require__(/*! ./traits */ "../../node_modules/@open-web3/orml-type-definitions/traits.js"));

var _vesting = _interopRequireDefault(__webpack_require__(/*! ./vesting */ "../../node_modules/@open-web3/orml-type-definitions/vesting.js"));

var _rewards = _interopRequireDefault(__webpack_require__(/*! ./rewards */ "../../node_modules/@open-web3/orml-type-definitions/rewards.js"));

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/oracle.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/oracle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {
    getValue: {
      description: 'Retrieves the oracle value for a given key.',
      params: [{
        name: 'DataProviderId',
        type: 'DataProviderId'
      }, {
        name: 'key',
        type: 'OracleKey'
      }],
      type: 'Option<TimestampedValue>'
    },
    getAllValues: {
      description: 'Retrieves all oracle values.',
      params: [{
        name: 'DataProviderId',
        type: 'DataProviderId'
      }],
      type: 'Vec<(OracleKey, Option<TimestampedValue>)>'
    }
  },
  types: {
    DataProviderId: 'u8',
    TimestampedValue: {
      value: 'OracleValue',
      timestamp: 'Moment'
    },
    TimestampedValueOf: 'TimestampedValue',
    OrderedSet: 'Vec<AccountId>'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/rewards.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/rewards.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    PoolInfo: {
      totalShares: 'Compact<Share>',
      totalRewards: 'Compact<Balance>',
      totalWithdrawnRewards: 'Compact<Balance>'
    },
    Share: 'u128'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/tokens.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/tokens.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    OrmlAccountData: {
      free: 'Balance',
      frozen: 'Balance',
      reserved: 'Balance'
    },
    OrmlBalanceLock: {
      amount: 'Balance',
      id: 'LockIdentifier'
    }
  },
  typesAlias: {
    tokens: {
      AccountData: 'OrmlAccountData',
      BalanceLock: 'OrmlBalanceLock'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/traits.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/traits.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    AuctionInfo: {
      bid: 'Option<(AccountId, Balance)>',
      start: 'BlockNumber',
      end: 'Option<BlockNumber>'
    },
    DelayedDispatchTime: {
      _enum: {
        At: 'BlockNumber',
        After: 'BlockNumber'
      }
    },
    DispatchId: 'u32',
    Price: 'FixedU128'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@open-web3/orml-type-definitions/vesting.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@open-web3/orml-type-definitions/vesting.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  rpc: {},
  types: {
    OrmlVestingSchedule: {
      start: 'BlockNumber',
      period: 'BlockNumber',
      periodCount: 'u32',
      perPeriod: 'Compact<Balance>'
    },
    VestingScheduleOf: 'OrmlVestingSchedule'
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/extension-dapp/index.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/extension-dapp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web3Enable = web3Enable;
exports.web3Accounts = web3Accounts;
exports.web3AccountsSubscribe = web3AccountsSubscribe;
exports.web3FromSource = web3FromSource;
exports.web3FromAddress = web3FromAddress;
exports.web3ListRpcProviders = web3ListRpcProviders;
exports.web3UseRpcProvider = web3UseRpcProvider;
exports.web3EnablePromise = exports.isWeb3Injected = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/extension-dapp/util.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// just a helper (otherwise we cast all-over, so shorter and more readable)
const win = window; // don't clobber the existing object, but ensure non-undefined

win.injectedWeb3 = win.injectedWeb3 || {}; // true when anything has been injected and is available

function web3IsInjected() {
  return Object.keys(win.injectedWeb3).length !== 0;
} // helper to throw a consistent error when not enabled


function throwError(method) {
  throw new Error(`${method}: web3Enable(originName) needs to be called before ${method}`);
} // internal helper to map from Array<InjectedAccount> -> Array<InjectedAccountWithMeta>


function mapAccounts(source, list, ss58Format) {
  return list.map(({
    address,
    genesisHash,
    name
  }) => {
    const encodedAddress = (0, _utilCrypto.encodeAddress)((0, _utilCrypto.decodeAddress)(address), ss58Format);
    return {
      address: encodedAddress,
      meta: {
        genesisHash,
        name,
        source
      }
    };
  });
} // have we found a properly constructed window.injectedWeb3


let isWeb3Injected = web3IsInjected(); // we keep the last promise created around (for queries)

exports.isWeb3Injected = isWeb3Injected;
let web3EnablePromise = null;
exports.web3EnablePromise = web3EnablePromise;

// enables all the providers found on the injected window interface
function web3Enable(originName) {
  if (!originName) {
    throw new Error('You must pass a name for your app to the web3Enable function');
  }

  exports.web3EnablePromise = web3EnablePromise = (0, _util.documentReadyPromise)(() => Promise.all(Object.entries(win.injectedWeb3).map(([name, {
    enable,
    version
  }]) => {
    return Promise.all([Promise.resolve({
      name,
      version
    }), enable(originName).catch(error => {
      console.error(`Error initializing ${name}: ${error.message}`);
    })]);
  })).then(values => values.filter(([, ext]) => !!ext).map(([info, ext]) => {
    // if we don't have an accounts subscriber, add a single-shot version
    if (ext && !ext.accounts.subscribe) {
      ext.accounts.subscribe = cb => {
        ext.accounts.get().then(cb).catch(console.error);
        return () => {// no ubsubscribe needed, this is a single-shot
        };
      };
    }

    const injected = _objectSpread(_objectSpread({}, info), ext);

    return injected;
  })).catch(() => []).then(values => {
    const names = values.map(({
      name,
      version
    }) => `${name}/${version}`);
    exports.isWeb3Injected = isWeb3Injected = web3IsInjected();
    console.log(`web3Enable: Enabled ${values.length} extension${values.length !== 1 ? 's' : ''}: ${names.join(', ')}`);
    return values;
  }));
  return web3EnablePromise;
} // retrieve all the accounts accross all providers


async function web3Accounts({
  ss58Format
} = {}) {
  if (!web3EnablePromise) {
    return throwError('web3Accounts');
  }

  const accounts = [];
  const injected = await web3EnablePromise;
  const retrieved = await Promise.all(injected.map(async ({
    accounts,
    name: source
  }) => {
    try {
      const list = await accounts.get();
      return mapAccounts(source, list, ss58Format);
    } catch (error) {
      // cannot handle this one
      return [];
    }
  }));
  retrieved.forEach(result => {
    accounts.push(...result);
  });
  const addresses = accounts.map(({
    address
  }) => address);
  console.log(`web3Accounts: Found ${accounts.length} address${accounts.length !== 1 ? 'es' : ''}: ${addresses.join(', ')}`);
  return accounts;
}

async function web3AccountsSubscribe(cb, {
  ss58Format
} = {}) {
  if (!web3EnablePromise) {
    return throwError('web3AccountsSubscribe');
  }

  const accounts = {};

  const triggerUpdate = () => cb(Object.entries(accounts).reduce((result, [source, list]) => {
    result.push(...mapAccounts(source, list, ss58Format));
    return result;
  }, []));

  const unsubs = (await web3EnablePromise).map(({
    accounts: {
      subscribe
    },
    name: source
  }) => subscribe(result => {
    accounts[source] = result; // eslint-disable-next-line @typescript-eslint/no-floating-promises

    triggerUpdate();
  }));
  return () => {
    unsubs.forEach(unsub => {
      unsub();
    });
  };
} // find a specific provider based on the name


async function web3FromSource(source) {
  if (!web3EnablePromise) {
    return throwError('web3FromSource');
  }

  const sources = await web3EnablePromise;
  const found = source && sources.find(({
    name
  }) => name === source);

  if (!found) {
    throw new Error(`web3FromSource: Unable to find an injected ${source}`);
  }

  return found;
} // find a specific provider based on an address


async function web3FromAddress(address) {
  if (!web3EnablePromise) {
    return throwError('web3FromAddress');
  }

  const accounts = await web3Accounts();
  const found = address && accounts.find(account => account.address === address);

  if (!found) {
    throw new Error(`web3FromAddress: Unable to find injected ${address}`);
  }

  return web3FromSource(found.meta.source);
} // retrieve all providers exposed by one source


async function web3ListRpcProviders(source) {
  const {
    provider
  } = await web3FromSource(source);

  if (!provider) {
    console.warn(`Extension ${source} does not expose any provider`);
    return null;
  }

  return provider.listProviders();
} // retrieve all providers exposed by one source


async function web3UseRpcProvider(source, key) {
  const {
    provider
  } = await web3FromSource(source);

  if (!provider) {
    throw new Error(`Extension ${source} does not expose any provider`);
  }

  const meta = await provider.startProvider(key);
  return {
    meta,
    provider
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/extension-dapp/util.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/extension-dapp/util.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentReadyPromise = documentReadyPromise;

// Copyright 2019-2020 @polkadot/extension-dapp authors & contributors
// SPDX-License-Identifier: Apache-2.0
function documentReadyPromise(creator) {
  return new Promise(resolve => {
    if (['complete', 'interactive'].includes(document.readyState)) {
      resolve(creator());
    } else {
      window.addEventListener('load', () => {
        resolve(creator());
      });
    }
  });
}

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/defaults.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/defaults.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEV_SEED = exports.DEV_PHRASE = void 0;
// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
// default substrate dev phrase
const DEV_PHRASE = 'bottom drive obey lake curtain smoke basket hold race lonely fit walk'; // seed from the above phrase

exports.DEV_PHRASE = DEV_PHRASE;
const DEV_SEED = '0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e';
exports.DEV_SEED = DEV_SEED;

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/index.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decodeAddress", {
  enumerable: true,
  get: function () {
    return _utilCrypto.decodeAddress;
  }
});
Object.defineProperty(exports, "encodeAddress", {
  enumerable: true,
  get: function () {
    return _utilCrypto.encodeAddress;
  }
});
Object.defineProperty(exports, "setSS58Format", {
  enumerable: true,
  get: function () {
    return _utilCrypto.setSS58Format;
  }
});
Object.defineProperty(exports, "Keyring", {
  enumerable: true,
  get: function () {
    return _keyring.default;
  }
});
exports.default = void 0;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _keyring = _interopRequireDefault(__webpack_require__(/*! ./keyring */ "../../node_modules/@polkadot/keyring/keyring.js"));

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
// eslint-disable-next-line @typescript-eslint/no-var-requires
(0, _util.detectPackage)(__webpack_require__(/*! ./package.json */ "../../node_modules/@polkadot/keyring/package.json"),  true && __dirname);
var _default = _keyring.default;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/keyring.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/keyring.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/keyring/defaults.js");

var _pair = _interopRequireDefault(__webpack_require__(/*! ./pair */ "../../node_modules/@polkadot/keyring/pair/index.js"));

var _pairs2 = _interopRequireDefault(__webpack_require__(/*! ./pairs */ "../../node_modules/@polkadot/keyring/pairs.js"));

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const keypairFromSeed = {
  ecdsa: seed => (0, _utilCrypto.secp256k1KeypairFromSeed)(seed),
  ed25519: seed => (0, _utilCrypto.naclKeypairFromSeed)(seed),
  ethereum: seed => (0, _utilCrypto.secp256k1KeypairFromSeed)(seed),
  sr25519: seed => (0, _utilCrypto.schnorrkelKeypairFromSeed)(seed)
};
/**
 * # @polkadot/keyring
 *
 * ## Overview
 *
 * @name Keyring
 * @summary Keyring management of user accounts
 * @description Allows generation of keyring pairs from a variety of input combinations, such as
 * json object containing account address or public key, account metadata, and account encoded using
 * `addFromJson`, or by providing those values as arguments separately to `addFromAddress`,
 * or by providing the mnemonic (seed phrase) and account metadata as arguments to `addFromMnemonic`.
 * Stores the keyring pairs in a keyring pair dictionary. Removal of the keyring pairs from the keyring pair
 * dictionary is achieved using `removePair`. Retrieval of all the stored pairs via `getPairs` or perform
 * lookup of a pair for a given account address or public key using `getPair`. JSON metadata associated with
 * an account may be obtained using `toJson` accompanied by the account passphrase.
 */

var _pairs = (0, _classPrivateFieldLooseKey2.default)("pairs");

var _type = (0, _classPrivateFieldLooseKey2.default)("type");

var _ss = (0, _classPrivateFieldLooseKey2.default)("ss58");

class Keyring {
  constructor(options = {}) {
    Object.defineProperty(this, _pairs, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _type, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _ss, {
      writable: true,
      value: void 0
    });
    this.decodeAddress = _utilCrypto.decodeAddress;

    this.encodeAddress = (address, ss58Format) => {
      return (0, _utilCrypto.encodeAddress)(address, (0, _util.isUndefined)(ss58Format) ? (0, _classPrivateFieldLooseBase2.default)(this, _ss)[_ss] : ss58Format);
    };

    options.type = options.type || 'ed25519';
    (0, _util.assert)(options && ['ecdsa', 'ethereum', 'ed25519', 'sr25519'].includes(options.type || 'undefined'), `Expected a keyring type of either 'ed25519', 'sr25519' or 'ecdsa', found '${options.type}`);
    (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs] = new _pairs2.default();
    (0, _classPrivateFieldLooseBase2.default)(this, _ss)[_ss] = options.ss58Format;
    (0, _classPrivateFieldLooseBase2.default)(this, _type)[_type] = options.type;
  }
  /**
   * @description retrieve the pairs (alias for getPairs)
   */


  get pairs() {
    return this.getPairs();
  }
  /**
   * @description retrieve the publicKeys (alias for getPublicKeys)
   */


  get publicKeys() {
    return this.getPublicKeys();
  }
  /**
   * @description Returns the type of the keyring, ed25519, sr25519 or ecdsa
   */


  get type() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _type)[_type];
  }
  /**
   * @name addPair
   * @summary Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   */


  addPair(pair) {
    return (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].add(pair);
  }
  /**
   * @name addFromAddress
   * @summary Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to explicitely provide separate inputs including account address or public key, and optionally
   * the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from them that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */


  addFromAddress(address, meta = {}, encoded = null, type = this.type, ignoreChecksum, encType) {
    const publicKey = this.decodeAddress(address, ignoreChecksum);
    return this.addPair((0, _pair.default)({
      toSS58: this.encodeAddress,
      type
    }, {
      publicKey,
      secretKey: new Uint8Array()
    }, meta, encoded, encType));
  }
  /**
   * @name addFromJson
   * @summary Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a json object argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */


  addFromJson(json, ignoreChecksum) {
    return this.addPair(this.createFromJson(json, ignoreChecksum));
  }
  /**
   * @name addFromMnemonic
   * @summary Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a mnemonic (seed phrase that is provided when account is originally created)
   * argument and a metadata argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */


  addFromMnemonic(mnemonic, meta = {}, type = this.type) {
    return this.addFromUri(mnemonic, meta, type);
  }
  /**
   * @name addFromSeed
   * @summary Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value.
   * Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to
   * `addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */


  addFromSeed(seed, meta = {}, type = this.type) {
    return this.addPair((0, _pair.default)({
      toSS58: this.encodeAddress,
      type
    }, keypairFromSeed[type](seed), meta, null));
  }
  /**
   * @name addFromUri
   * @summary Creates an account via an suri
   * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)
   */


  addFromUri(suri, meta = {}, type = this.type) {
    return this.addPair(this.createFromUri(suri, meta, type));
  }
  /**
   * @name createFromJson
   * @description Creates a pair from a JSON keyfile
   */


  createFromJson({
    address,
    encoded,
    encoding: {
      content,
      type,
      version
    },
    meta
  }, ignoreChecksum) {
    const cryptoType = version === '0' || !Array.isArray(content) ? this.type : content[1];
    const encType = !Array.isArray(type) ? [type] : type;
    const publicKey = (0, _util.isHex)(address) ? (0, _util.hexToU8a)(address) : this.decodeAddress(address, ignoreChecksum);
    const decoded = (0, _util.isHex)(encoded) ? (0, _util.hexToU8a)(encoded) : (0, _utilCrypto.base64Decode)(encoded);
    return (0, _pair.default)({
      toSS58: this.encodeAddress,
      type: cryptoType
    }, {
      publicKey,
      secretKey: new Uint8Array()
    }, meta, decoded, encType);
  }
  /**
   * @name createFromUri
   * @summary Creates a Keypair from an suri
   * @description This creates a pair from the suri, but does not add it to the keyring
   */


  createFromUri(_suri, meta = {}, type = this.type) {
    // here we only aut-add the dev phrase if we have a hard-derived path
    const suri = _suri.startsWith('//') ? `${_defaults.DEV_PHRASE}${_suri}` : _suri;
    const {
      password,
      path,
      phrase
    } = (0, _utilCrypto.keyExtractSuri)(suri);
    let seed;

    if ((0, _util.isHex)(phrase, 256)) {
      seed = (0, _util.hexToU8a)(phrase);
    } else {
      const str = phrase;
      const parts = str.split(' ');

      if ([12, 15, 18, 21, 24].includes(parts.length)) {
        seed = type === 'ethereum' ? (0, _utilCrypto.mnemonicToBip39)(phrase) : (0, _utilCrypto.mnemonicToMiniSecret)(phrase, password);
      } else {
        (0, _util.assert)(str.length <= 32, 'specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes');
        seed = (0, _util.stringToU8a)(str.padEnd(32));
      }
    } // FIXME Need to support Ethereum-type derivation paths


    const derived = (0, _utilCrypto.keyFromPath)(keypairFromSeed[type](seed), path, type);
    return (0, _pair.default)({
      toSS58: this.encodeAddress,
      type
    }, derived, meta, null);
  }
  /**
   * @name encodeAddress
   * @description Encodes the input into an ss58 representation
   */


  /**
   * @name getPair
   * @summary Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address
   * @description Returns a keyring pair value from the keyring pair dictionary by performing
   * a key lookup using the provided account address or public key (after decoding it).
   */
  getPair(address) {
    return (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].get(address);
  }
  /**
   * @name getPairs
   * @summary Retrieves all account keyring pairs from the Keyring Pair Dictionary
   * @description Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.
   */


  getPairs() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].all();
  }
  /**
   * @name getPublicKeys
   * @summary Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary
   * @description Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.
   */


  getPublicKeys() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].all().map(({
      publicKey
    }) => publicKey);
  }
  /**
   * @name removePair
   * @description Deletes the provided input address or public key from the stored Keyring Pair Dictionary.
   */


  removePair(address) {
    (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].remove(address);
  }
  /**
   * @name setSS58Format;
   * @description Sets the ss58 format for the keyring
   */


  setSS58Format(ss58) {
    (0, _classPrivateFieldLooseBase2.default)(this, _ss)[_ss] = ss58;
  }
  /**
   * @name toJson
   * @summary Returns a JSON object associated with the input argument that contains metadata assocated with an account
   * @description Returns a JSON object containing the metadata associated with an account
   * when valid address or public key and when the account passphrase is provided if the account secret
   * is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user
   * may backup their account to a JSON file that contains this information.
   */


  toJson(address, passphrase) {
    return (0, _classPrivateFieldLooseBase2.default)(this, _pairs)[_pairs].get(address).toJson(passphrase);
  }

}

exports.default = Keyring;

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/package.json":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/package.json ***!
  \**************************************************************/
/*! exports provided: name, version, description, main, publishConfig, repository, keywords, author, maintainers, contributors, license, bugs, homepage, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@polkadot/keyring\",\"version\":\"3.5.1\",\"description\":\"Keyring management\",\"main\":\"index.js\",\"publishConfig\":{\"access\":\"public\",\"registry\":\"https://registry.npmjs.org\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/polkadot-js/common.git\"},\"keywords\":[\"Polkadot\",\"Keyring\",\"ed25519\"],\"author\":\"Jaco Greeff <jacogr@gmail.com>\",\"maintainers\":[\"Jaco Greeff <jacogr@gmail.com>\"],\"contributors\":[],\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/polkadot-js/common/issues\"},\"homepage\":\"https://github.com/polkadot-js/common/tree/master/packages/keyring#readme\",\"dependencies\":{\"@babel/runtime\":\"^7.11.2\",\"@polkadot/util\":\"3.5.1\",\"@polkadot/util-crypto\":\"3.5.1\"}}");

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pair/decode.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pair/decode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/keyring/pair/defaults.js");

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const SEED_OFFSET = _defaults.PKCS8_HEADER.length;

function decodePkcs8(encoded) {
  const header = encoded.subarray(0, _defaults.PKCS8_HEADER.length);
  (0, _util.assert)(header.toString() === _defaults.PKCS8_HEADER.toString(), 'Invalid Pkcs8 header found in body');
  let secretKey = encoded.subarray(SEED_OFFSET, SEED_OFFSET + _defaults.SEC_LENGTH);
  let divOffset = SEED_OFFSET + _defaults.SEC_LENGTH;
  let divider = encoded.subarray(divOffset, divOffset + _defaults.PKCS8_DIVIDER.length); // old-style, we have the seed here

  if (divider.toString() !== _defaults.PKCS8_DIVIDER.toString()) {
    divOffset = SEED_OFFSET + _defaults.SEED_LENGTH;
    secretKey = encoded.subarray(SEED_OFFSET, divOffset);
    divider = encoded.subarray(divOffset, divOffset + _defaults.PKCS8_DIVIDER.length);
  }

  (0, _util.assert)(divider.toString() === _defaults.PKCS8_DIVIDER.toString(), 'Invalid Pkcs8 divider found in body');
  const pubOffset = divOffset + _defaults.PKCS8_DIVIDER.length;
  const publicKey = encoded.subarray(pubOffset, pubOffset + _defaults.PUB_LENGTH);
  return {
    publicKey,
    secretKey
  };
}

function decode(passphrase, encrypted, encType = _defaults.ENCODING) {
  (0, _util.assert)(encrypted, 'No encrypted data available to decode');
  (0, _util.assert)(passphrase || !encType.includes('xsalsa20-poly1305'), 'Password required to decode encypted data');
  let encoded = encrypted;

  if (passphrase) {
    let password;

    if (encType.includes('scrypt')) {
      const {
        params,
        salt
      } = (0, _utilCrypto.scryptFromU8a)(encrypted);
      password = (0, _utilCrypto.scryptEncode)(passphrase, salt, params).password;
      encrypted = encrypted.subarray(_defaults.SCRYPT_LENGTH);
    } else {
      password = (0, _util.stringToU8a)(passphrase);
    }

    encoded = (0, _utilCrypto.naclDecrypt)(encrypted.subarray(_defaults.NONCE_LENGTH), encrypted.subarray(0, _defaults.NONCE_LENGTH), (0, _util.u8aFixLength)(password, 256, true));
  }

  (0, _util.assert)(encoded, 'Unable to decode using the supplied passphrase');
  return decodePkcs8(encoded);
}

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pair/defaults.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pair/defaults.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCRYPT_LENGTH = exports.SEED_LENGTH = exports.SEC_LENGTH = exports.SALT_LENGTH = exports.PUB_LENGTH = exports.PKCS8_HEADER = exports.PKCS8_DIVIDER = exports.NONCE_LENGTH = exports.ENCODING = void 0;
// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ENCODING = ['scrypt', 'xsalsa20-poly1305'];
exports.ENCODING = ENCODING;
const NONCE_LENGTH = 24;
exports.NONCE_LENGTH = NONCE_LENGTH;
const PKCS8_DIVIDER = new Uint8Array([161, 35, 3, 33, 0]);
exports.PKCS8_DIVIDER = PKCS8_DIVIDER;
const PKCS8_HEADER = new Uint8Array([48, 83, 2, 1, 1, 48, 5, 6, 3, 43, 101, 112, 4, 34, 4, 32]);
exports.PKCS8_HEADER = PKCS8_HEADER;
const PUB_LENGTH = 32;
exports.PUB_LENGTH = PUB_LENGTH;
const SALT_LENGTH = 32;
exports.SALT_LENGTH = SALT_LENGTH;
const SEC_LENGTH = 64;
exports.SEC_LENGTH = SEC_LENGTH;
const SEED_LENGTH = 32;
exports.SEED_LENGTH = SEED_LENGTH;
const SCRYPT_LENGTH = SALT_LENGTH + 3 * 4;
exports.SCRYPT_LENGTH = SCRYPT_LENGTH;

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pair/encode.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pair/encode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/keyring/pair/defaults.js");

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
function encode({
  publicKey,
  secretKey
}, passphrase) {
  (0, _util.assert)(secretKey, 'Expected a valid secretKey to be passed to encode');
  const encoded = (0, _util.u8aConcat)(_defaults.PKCS8_HEADER, secretKey, _defaults.PKCS8_DIVIDER, publicKey);

  if (!passphrase) {
    return encoded;
  }

  const {
    params,
    password,
    salt
  } = (0, _utilCrypto.scryptEncode)(passphrase);
  const {
    encrypted,
    nonce
  } = (0, _utilCrypto.naclEncrypt)(encoded, password.subarray(0, 32));
  return (0, _util.u8aConcat)((0, _utilCrypto.scryptToU8a)(salt, params), nonce, encrypted);
}

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pair/index.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pair/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPair;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/keyring/pair/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/keyring/pair/encode.js"));

var _toJson = _interopRequireDefault(__webpack_require__(/*! ./toJson */ "../../node_modules/@polkadot/keyring/pair/toJson.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const SIG_TYPE_NONE = new Uint8Array();
const TYPE_FROM_SEED = {
  ecdsa: _utilCrypto.secp256k1KeypairFromSeed,
  ed25519: _utilCrypto.naclKeypairFromSeed,
  ethereum: _utilCrypto.secp256k1KeypairFromSeed,
  sr25519: _utilCrypto.schnorrkelKeypairFromSeed
};
const TYPE_PREFIX = {
  ecdsa: new Uint8Array([2]),
  ed25519: new Uint8Array([0]),
  ethereum: new Uint8Array([2]),
  sr25519: new Uint8Array([1])
};
const TYPE_SIGNATURE = {
  ecdsa: (m, p) => (0, _utilCrypto.secp256k1Sign)(m, p, 'blake2'),
  ed25519: _utilCrypto.naclSign,
  ethereum: (m, p) => (0, _utilCrypto.secp256k1Sign)(m, p, 'keccak'),
  sr25519: _utilCrypto.schnorrkelSign
};
const TYPE_ADDRESS = {
  ecdsa: p => p.length > 32 ? (0, _utilCrypto.blake2AsU8a)(p) : p,
  ed25519: p => p,
  ethereum: p => (0, _utilCrypto.keccakAsU8a)((0, _utilCrypto.secp256k1Expand)(p)),
  sr25519: p => p
};
const TYPE_VERIFY = {
  ecdsa: (m, s, p) => (0, _utilCrypto.secp256k1Verify)(m, s, TYPE_ADDRESS.ecdsa(p), 'blake2'),
  ed25519: _utilCrypto.naclVerify,
  ethereum: (m, s, p) => (0, _utilCrypto.secp256k1Verify)(m, s, TYPE_ADDRESS.ethereum(p), 'keccak', true),
  sr25519: _utilCrypto.schnorrkelVerify
};

function isEmpty(u8a) {
  return u8a.reduce((count, u8) => count + u8, 0) === 0;
} // Not 100% correct, since it can be a Uint8Array, but an invalid one - just say "undefined" is anything non-valid


function isLocked(secretKey) {
  return !secretKey || secretKey.length === 0 || isEmpty(secretKey);
}
/**
 * @name pair
 * @summary Creates a keyring pair object
 * @description Creates a keyring pair object with provided account public key, metadata, and encoded arguments.
 * The keyring pair stores the account state including the encoded address and associated metadata.
 *
 * It has properties whose values are functions that may be called to perform account actions:
 *
 * - `address` function retrieves the address associated with the account.
 * - `decodedPkcs8` function is called with the account passphrase and account encoded public key.
 * It decodes the encoded public key using the passphrase provided to obtain the decoded account public key
 * and associated secret key that are then available in memory, and changes the account address stored in the
 * state of the pair to correspond to the address of the decoded public key.
 * - `encodePkcs8` function when provided with the correct passphrase associated with the account pair
 * and when the secret key is in memory (when the account pair is not locked) it returns an encoded
 * public key of the account.
 * - `meta` is the metadata that is stored in the state of the pair, either when it was originally
 * created or set via `setMeta`.
 * - `publicKey` returns the public key stored in memory for the pair.
 * - `sign` may be used to return a signature by signing a provided message with the secret
 * key (if it is in memory) using Nacl.
 * - `toJson` calls another `toJson` function and provides the state of the pair,
 * it generates arguments to be passed to the other `toJson` function including an encoded public key of the account
 * that it generates using the secret key from memory (if it has been made available in memory)
 * and the optionally provided passphrase argument. It passes a third boolean argument to `toJson`
 * indicating whether the public key has been encoded or not (if a passphrase argument was provided then it is encoded).
 * The `toJson` function that it calls returns a JSON object with properties including the `address`
 * and `meta` that are assigned with the values stored in the corresponding state variables of the account pair,
 * an `encoded` property that is assigned with the encoded public key in hex format, and an `encoding`
 * property that indicates whether the public key value of the `encoded` property is encoded or not.
 */


function createPair({
  toSS58,
  type
}, {
  publicKey,
  secretKey
}, meta = {}, encoded = null, encTypes) {
  const decodePkcs8 = (passphrase, userEncoded) => {
    const decoded = (0, _decode.default)(passphrase, userEncoded || encoded, encTypes);

    if (decoded.secretKey.length === 64) {
      publicKey = decoded.publicKey;
      secretKey = decoded.secretKey;
    } else {
      const pair = TYPE_FROM_SEED[type](decoded.secretKey);
      publicKey = pair.publicKey;
      secretKey = pair.secretKey;
    }
  };

  const recode = passphrase => {
    isLocked(secretKey) && encoded && decodePkcs8(passphrase, encoded);
    encoded = (0, _encode.default)({
      publicKey,
      secretKey
    }, passphrase); // re-encode, latest version

    encTypes = undefined; // swap to defaults, latest version follows

    return encoded;
  };

  const encodeAddress = () => {
    const raw = TYPE_ADDRESS[type](publicKey);
    return type === 'ethereum' ? (0, _utilCrypto.ethereumEncode)(raw) : toSS58(raw);
  };

  return {
    get address() {
      return encodeAddress();
    },

    get addressRaw() {
      const raw = TYPE_ADDRESS[type](publicKey);
      return type === 'ethereum' ? raw.slice(-20) : raw;
    },

    get isLocked() {
      return isLocked(secretKey);
    },

    get meta() {
      return meta;
    },

    get publicKey() {
      return publicKey;
    },

    get type() {
      return type;
    },

    // eslint-disable-next-line sort-keys
    decodePkcs8,
    derive: (suri, meta) => {
      (0, _util.assert)(!isLocked(secretKey), 'Cannot derive on a locked keypair');
      const {
        path
      } = (0, _utilCrypto.keyExtractPath)(suri);
      const derived = (0, _utilCrypto.keyFromPath)({
        publicKey,
        secretKey
      }, path, type);
      return createPair({
        toSS58,
        type
      }, derived, meta, null);
    },
    encodePkcs8: passphrase => recode(passphrase),
    lock: () => {
      secretKey = new Uint8Array();
    },
    setMeta: additional => {
      meta = _objectSpread(_objectSpread({}, meta), additional);
    },
    sign: (message, options = {}) => {
      (0, _util.assert)(!isLocked(secretKey), 'Cannot sign with a locked key pair');
      return (0, _util.u8aConcat)(options.withType ? TYPE_PREFIX[type] : SIG_TYPE_NONE, TYPE_SIGNATURE[type](message, {
        publicKey,
        secretKey
      }));
    },
    toJson: passphrase => {
      const address = ['ecdsa', 'ethereum'].includes(type) ? (0, _util.u8aToHex)((0, _utilCrypto.secp256k1Compress)(publicKey)) : encodeAddress();
      return (0, _toJson.default)(type, {
        address,
        meta
      }, recode(passphrase), !!passphrase);
    },
    verify: (message, signature) => TYPE_VERIFY[type](message, signature, publicKey)
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pair/toJson.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pair/toJson.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJson;

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/keyring/pair/defaults.js");

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
// version 2 - nonce, encoded (previous)
// version 3 - salt, nonce, encoded
const VERSION = '3';
const ENC_NONE = ['none'];

function toJson(type, {
  address,
  meta
}, encoded, isEncrypted) {
  return {
    address,
    encoded: (0, _utilCrypto.base64Encode)(encoded),
    encoding: {
      content: ['pkcs8', type],
      type: isEncrypted ? _defaults.ENCODING : ENC_NONE,
      version: VERSION
    },
    meta
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/pairs.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/pairs.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _map = (0, _classPrivateFieldLooseKey2.default)("map");

class Pairs {
  constructor() {
    Object.defineProperty(this, _map, {
      writable: true,
      value: {}
    });
  }

  add(pair) {
    (0, _classPrivateFieldLooseBase2.default)(this, _map)[_map][(0, _utilCrypto.decodeAddress)(pair.address).toString()] = pair;
    return pair;
  }

  all() {
    return Object.values((0, _classPrivateFieldLooseBase2.default)(this, _map)[_map]);
  }

  get(address) {
    const pair = (0, _classPrivateFieldLooseBase2.default)(this, _map)[_map][(0, _utilCrypto.decodeAddress)(address).toString()];

    (0, _util.assert)(pair, () => {
      const formatted = (0, _util.isU8a)(address) || (0, _util.isHex)(address) ? (0, _util.u8aToHex)((0, _util.u8aToU8a)(address)) : address;
      return `Unable to retrieve keypair '${formatted}'`;
    });
    return pair;
  }

  remove(address) {
    delete (0, _classPrivateFieldLooseBase2.default)(this, _map)[_map][(0, _utilCrypto.decodeAddress)(address).toString()];
  }

}

exports.default = Pairs;

/***/ }),

/***/ "../../node_modules/@polkadot/keyring/testing.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/keyring/testing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testKeyring;
exports.PAIRS = void 0;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _pair = _interopRequireDefault(__webpack_require__(/*! ./pair */ "../../node_modules/@polkadot/keyring/pair/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! . */ "../../node_modules/@polkadot/keyring/index.js"));

// Copyright 2017-2020 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
// NOTE This is not great since we have the secretKey here explicitly, but a testing
// keyring is for testing - what happens is that in most cases the keyring is initialises
// before anything else. Since the sr25519 crypto is async, this creates problems with
// adding the keys when only the keyring is used.
const PAIRS = [{
  publicKey: (0, _util.hexToU8a)('0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'),
  secretKey: (0, _util.hexToU8a)('0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011'),
  seed: 'Alice'
}, {
  publicKey: (0, _util.hexToU8a)('0xbe5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f'),
  secretKey: (0, _util.hexToU8a)('0xe8da6c9d810e020f5e3c7f5af2dea314cbeaa0d72bc6421e92c0808a0c584a6046ab28e97c3ffc77fe12b5a4d37e8cd4afbfebbf2391ffc7cb07c0f38c023efd'),
  seed: 'Alice//stash'
}, {
  publicKey: (0, _util.hexToU8a)('0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'),
  secretKey: (0, _util.hexToU8a)('0x081ff694633e255136bdb456c20a5fc8fed21f8b964c11bb17ff534ce80ebd5941ae88f85d0c1bfc37be41c904e1dfc01de8c8067b0d6d5df25dd1ac0894a325'),
  seed: 'Bob'
}, {
  publicKey: (0, _util.hexToU8a)('0xfe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e'),
  secretKey: (0, _util.hexToU8a)('0xc006507cdfc267a21532394c49ca9b754ca71de21e15a1cdf807c7ceab6d0b6c3ed408d9d35311540dcd54931933e67cf1ea10d46f75408f82b789d9bd212fde'),
  seed: 'Bob//stash'
}, {
  publicKey: (0, _util.hexToU8a)('0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'),
  secretKey: (0, _util.hexToU8a)('0xa8f2d83016052e5d6d77b2f6fd5d59418922a09024cda701b3c34369ec43a7668faf12ff39cd4e5d92bb773972f41a7a5279ebc2ed92264bed8f47d344f8f18c'),
  seed: 'Charlie'
}, {
  publicKey: (0, _util.hexToU8a)('0x306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc20'),
  secretKey: (0, _util.hexToU8a)('0x20e05482ca4677e0edbc58ae9a3a59f6ed3b1a9484ba17e64d6fe8688b2b7b5d108c4487b9323b98b11fe36cb301b084e920f7b7895536809a6d62a451b25568'),
  seed: 'Dave'
}, {
  publicKey: (0, _util.hexToU8a)('0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e'),
  secretKey: (0, _util.hexToU8a)('0x683576abfd5dc35273e4264c23095a1bf21c14517bece57c7f0cc5c0ed4ce06a3dbf386b7828f348abe15d76973a72009e6ef86a5c91db2990cb36bb657c6587'),
  seed: 'Eve'
}, {
  publicKey: (0, _util.hexToU8a)('0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c'),
  secretKey: (0, _util.hexToU8a)('0xb835c20f450079cf4f513900ae9faf8df06ad86c681884122c752a4b2bf74d4303e4f21bc6cc62bb4eeed5a9cce642c25e2d2ac1464093b50f6196d78e3a7426'),
  seed: 'Ferdie'
}];
/**
 * @name testKeyring
 * @summary Create an instance of Keyring pre-populated with locked test accounts
 * @description The test accounts (i.e. alice, bob, dave, eve, ferdie)
 * are available on the dev chain and each test account is initialised with DOT funds.
 */

exports.PAIRS = PAIRS;

function testKeyring(options = {}, isDerived = true) {
  const keyring = new _.default(options);
  PAIRS.forEach(({
    name,
    publicKey,
    secretKey,
    seed,
    type = 'sr25519'
  }) => {
    const meta = {
      isTesting: true,
      name: name || seed.replace('//', '_').toLowerCase()
    };
    const pair = !isDerived && !name ? keyring.addFromUri(seed, meta, options.type) : keyring.addPair((0, _pair.default)({
      toSS58: keyring.encodeAddress,
      type
    }, {
      publicKey,
      secretKey
    }, meta));

    pair.lock = () => {// we don't have lock/unlock functionality here
    };
  });
  return keyring;
}

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/Identicon.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/Identicon.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactCopyToClipboard = _interopRequireDefault(__webpack_require__(/*! react-copy-to-clipboard */ "../../node_modules/react-copy-to-clipboard/lib/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _uiSettings = _interopRequireWildcard(__webpack_require__(/*! @polkadot/ui-settings */ "../../node_modules/@polkadot/ui-settings/index.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _icons = __webpack_require__(/*! ./icons */ "../../node_modules/@polkadot/react-identicon/icons/index.js");

// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
const Fallback = _icons.Beachball;
const DEFAULT_SIZE = 64;
const Components = {
  beachball: _icons.Beachball,
  empty: _icons.Empty,
  jdenticon: _icons.Jdenticon,
  polkadot: _icons.Polkadot,
  substrate: _icons.Jdenticon
};

const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Identicon__Wrapper",
  componentId: "sc-1gm2vek-0"
})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);

class BaseIcon extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      address: '',
      publicKey: '0x'
    };

    this.onCopy = () => {
      const {
        onCopy
      } = this.props;
      const {
        address
      } = this.state;

      if (address && onCopy) {
        onCopy(address);
      }
    };
  }

  static setDefaultPrefix(prefix) {
    BaseIcon.prefix = prefix;
  }

  static getDerivedStateFromProps({
    prefix = BaseIcon.prefix,
    value
  }, prevState) {
    try {
      const address = (0, _util.isU8a)(value) || (0, _util.isHex)(value) ? (0, _utilCrypto.encodeAddress)(value, prefix) : value || '';
      const publicKey = (0, _util.u8aToHex)((0, _utilCrypto.decodeAddress)(address, false, prefix));
      return address === prevState.address ? null : {
        address,
        publicKey
      };
    } catch (error) {
      return {
        address: '',
        publicKey: '0x'
      };
    }
  }

  render() {
    const {
      address
    } = this.state;
    const wrapped = this.getWrapped(this.state, this.props);
    return !address ? wrapped : /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.default, {
      onCopy: this.onCopy,
      text: address
    }, wrapped);
  }

  getWrapped({
    address,
    publicKey
  }, {
    Custom
  }) {
    const {
      className = '',
      isAlternative,
      isHighlight,
      size = DEFAULT_SIZE,
      style,
      theme = _uiSettings.default.icon
    } = this.props;
    const Component = !address ? _icons.Empty : Custom || Components[theme === 'default' ? _uiSettings.ICON_DEFAULT_HOST : theme] || Fallback;
    return /*#__PURE__*/_react.default.createElement(Wrapper, {
      className: `ui--IdentityIcon  ${className}`,
      key: address,
      style: style
    }, /*#__PURE__*/_react.default.createElement(Component, {
      address: address,
      className: isHighlight ? 'highlight' : '',
      isAlternative: isAlternative,
      publicKey: publicKey,
      size: size
    }));
  }

}

BaseIcon.prefix = undefined;

function Identicon(props) {
  return /*#__PURE__*/_react.default.createElement(BaseIcon, props);
}

var _default = /*#__PURE__*/_react.default.memo(Identicon);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/icons/Beachball.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/icons/Beachball.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _uiShared = __webpack_require__(/*! @polkadot/ui-shared */ "../../node_modules/@polkadot/ui-shared/index.js");

// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Beachball({
  address,
  className = '',
  size,
  style
}) {
  const updateElem = (0, _react.useCallback)(node => {
    node && node.appendChild((0, _uiShared.beachballIcon)(address, {
      isAlternative: false,
      size
    }));
  }, [address, size]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    ref: updateElem,
    style: style
  });
}

var _default = /*#__PURE__*/_react.default.memo(Beachball);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/icons/Empty.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/icons/Empty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Empty({
  className = '',
  size,
  style
}) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: className,
    height: size,
    style: style,
    viewBox: "0 0 64 64",
    width: size
  });
}

var _default = /*#__PURE__*/_react.default.memo(Empty);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/icons/Jdenticon.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/icons/Jdenticon.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _jdenticon = _interopRequireDefault(__webpack_require__(/*! jdenticon */ "../../node_modules/jdenticon/dist/jdenticon.min.js"));

// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Jdenticon({
  className = '',
  publicKey,
  size,
  style
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: _jdenticon.default.toSvg(publicKey.substr(2), size)
    },
    style: style
  });
}

var _default = /*#__PURE__*/_react.default.memo(Jdenticon);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/icons/Polkadot.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/icons/Polkadot.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _uiShared = __webpack_require__(/*! @polkadot/ui-shared */ "../../node_modules/@polkadot/ui-shared/index.js");

// Copyright 2018-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx
//
// Here we have done the following to convert the component -
//   - Converted the code to TypeScript
//   - Removed the oo7 dependencies (since not initialised properly, it makes calls to wrong endpoints)
//   - Remove encoding functionality, these are catered for in the base
//   - Remove copy functionality (this is catered from in the base components)
//   - Split calculations into relevant functions
//   - Move constants to file-level
//   - Overall it is now just a static component, expecting an address as an input value
function renderCircle({
  cx,
  cy,
  fill,
  r
}, key) {
  return /*#__PURE__*/_react.default.createElement("circle", {
    cx: cx,
    cy: cy,
    fill: fill,
    key: key,
    r: r
  });
}

function Identicon({
  address,
  className = '',
  isAlternative = false,
  size,
  style
}) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: className,
    height: size,
    id: address,
    name: address,
    style: style,
    viewBox: "0 0 64 64",
    width: size
  }, (0, _uiShared.polkadotIcon)(address, {
    isAlternative
  }).map(renderCircle));
}

var _default = /*#__PURE__*/_react.default.memo(Identicon);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/icons/index.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/icons/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Beachball", {
  enumerable: true,
  get: function () {
    return _Beachball.default;
  }
});
Object.defineProperty(exports, "Empty", {
  enumerable: true,
  get: function () {
    return _Empty.default;
  }
});
Object.defineProperty(exports, "Jdenticon", {
  enumerable: true,
  get: function () {
    return _Jdenticon.default;
  }
});
Object.defineProperty(exports, "Polkadot", {
  enumerable: true,
  get: function () {
    return _Polkadot.default;
  }
});

var _Beachball = _interopRequireDefault(__webpack_require__(/*! ./Beachball */ "../../node_modules/@polkadot/react-identicon/icons/Beachball.js"));

var _Empty = _interopRequireDefault(__webpack_require__(/*! ./Empty */ "../../node_modules/@polkadot/react-identicon/icons/Empty.js"));

var _Jdenticon = _interopRequireDefault(__webpack_require__(/*! ./Jdenticon */ "../../node_modules/@polkadot/react-identicon/icons/Jdenticon.js"));

var _Polkadot = _interopRequireDefault(__webpack_require__(/*! ./Polkadot */ "../../node_modules/@polkadot/react-identicon/icons/Polkadot.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/react-identicon/index.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-identicon/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _Identicon = _interopRequireDefault(__webpack_require__(/*! ./Identicon */ "../../node_modules/@polkadot/react-identicon/Identicon.js"));

var _icons = __webpack_require__(/*! ./icons */ "../../node_modules/@polkadot/react-identicon/icons/index.js");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _icons[key];
    }
  });
});
// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = _Identicon.default;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/Display.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/Display.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _qrcode = _interopRequireDefault(__webpack_require__(/*! ./qrcode */ "../../node_modules/@polkadot/react-qr/qrcode.js"));

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/react-qr/util.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const FRAME_DELAY = 2500;
const TIMER_INC = 500;

function getDataUrl(value) {
  const qr = (0, _qrcode.default)(0, 'M'); // HACK See out qrcode stringToBytes override as used internally. This
  // will only work for the case where we actuall pass `Bytes` in here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  qr.addData(value, 'Byte');
  qr.make();
  return qr.createDataURL(16, 0);
}

function Display({
  className,
  size,
  skipEncoding,
  style,
  value
}) {
  const [{
    image
  }, setFrameState] = (0, _react.useState)({
    frameIdx: 0,
    frames: [],
    image: null,
    valueHash: null
  });
  const timerRef = (0, _react.useRef)({
    timerDelay: FRAME_DELAY,
    timerId: null
  });
  const containerStyle = (0, _react.useMemo)(() => (0, _util.createImgSize)(size), [size]); // run on initial load to setup the global timer and provide and unsubscribe

  (0, _react.useEffect)(() => {
    const nextFrame = () => setFrameState(state => {
      // when we have a single frame, we only ever fire once
      if (state.frames.length <= 1) {
        return state;
      }

      let frameIdx = state.frameIdx + 1; // when we overflow, skip to the first and slightly increase the delay between frames

      if (frameIdx === state.frames.length) {
        frameIdx = 0;
        timerRef.current.timerDelay = timerRef.current.timerDelay + TIMER_INC;
      }

      timerRef.current.timerId = setTimeout(nextFrame, timerRef.current.timerDelay); // only encode the frames on demand, not above as part of the
      // state derivation - in the case of large payloads, this should
      // be slightly more responsive on initial load

      return _objectSpread(_objectSpread({}, state), {}, {
        frameIdx,
        image: getDataUrl(state.frames[frameIdx])
      });
    });

    timerRef.current.timerId = window.setTimeout(nextFrame, FRAME_DELAY);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerRef.current.timerId && clearTimeout(timerRef.current.timerId);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(() => {
    setFrameState(state => {
      const valueHash = (0, _utilCrypto.xxhashAsHex)(value);

      if (valueHash === state.valueHash) {
        return state;
      }

      const frames = skipEncoding ? [value] : (0, _util.createFrames)(value); // encode on demand

      return {
        frameIdx: 0,
        frames,
        image: getDataUrl(frames[0]),
        valueHash
      };
    });
  }, [skipEncoding, value]);

  if (!image) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui--qr-Display",
    style: style
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image
  })));
}

var _default = /*#__PURE__*/_react.default.memo((0, _styledComponents.default)(Display).withConfig({
  displayName: "Display",
  componentId: "f0xthb-0"
})([".ui--qr-Display{height:100%;width:100%;img,svg{background:white;height:auto !important;max-height:100%;max-width:100%;width:auto !important;}}"]));

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/DisplayAddress.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/DisplayAddress.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/react-qr/util.js");

var _Display = _interopRequireDefault(__webpack_require__(/*! ./Display */ "../../node_modules/@polkadot/react-qr/Display.js"));

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
function DisplayExtrinsic({
  address,
  className,
  genesisHash,
  size,
  style
}) {
  const data = (0, _react.useMemo)(() => (0, _util.createAddressPayload)(address, genesisHash), [address, genesisHash]);

  if (!data) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Display.default, {
    className: className,
    size: size,
    skipEncoding: true,
    style: style,
    value: data
  });
}

var _default = /*#__PURE__*/_react.default.memo(DisplayExtrinsic);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/DisplayPayload.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/DisplayPayload.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/react-qr/util.js");

var _Display = _interopRequireDefault(__webpack_require__(/*! ./Display */ "../../node_modules/@polkadot/react-qr/Display.js"));

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
function DisplayPayload({
  address,
  className,
  cmd,
  genesisHash,
  payload,
  size,
  style
}) {
  const data = (0, _react.useMemo)(() => (0, _util.createSignPayload)(address, cmd, payload, genesisHash), [address, cmd, payload, genesisHash]);

  if (!data) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Display.default, {
    className: className,
    size: size,
    style: style,
    value: data
  });
}

var _default = /*#__PURE__*/_react.default.memo(DisplayPayload);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/NetworkSpecs.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/NetworkSpecs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _Display = _interopRequireDefault(__webpack_require__(/*! ./Display */ "../../node_modules/@polkadot/react-qr/Display.js"));

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/react-qr/util.js");

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
function DisplayNetworkSpecs({
  className,
  networkSpecs,
  size,
  style
}) {
  const data = (0, _react.useMemo)(() => (0, _util.encodeString)(JSON.stringify(networkSpecs)), [networkSpecs]);

  if (!data) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Display.default, {
    className: className,
    size: size,
    skipEncoding: true,
    style: style,
    value: data
  });
}

var _default = /*#__PURE__*/_react.default.memo(DisplayNetworkSpecs);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/Scan.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/Scan.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactQrReader = _interopRequireDefault(__webpack_require__(/*! react-qr-reader */ "../../node_modules/react-qr-reader/lib/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _util = __webpack_require__(/*! ./util */ "../../node_modules/@polkadot/react-qr/util.js");

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_DELAY = 150;

const DEFAULT_ERROR = error => {
  console.error('@polkadot/react-qr:Scan', error.message);
};

function Scan({
  className,
  delay = DEFAULT_DELAY,
  onError = DEFAULT_ERROR,
  onScan,
  size,
  style
}) {
  const containerStyle = (0, _react.useMemo)(() => (0, _util.createImgSize)(size), [size]);

  const _onError = (0, _react.useCallback)(error => onError(error), [onError]);

  const _onScan = (0, _react.useCallback)(data => data && onScan(data), [onScan]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactQrReader.default, {
    className: "ui--qr-Scan",
    delay: delay,
    onError: _onError,
    onScan: _onScan,
    style: style
  }));
}

var _default = /*#__PURE__*/_react.default.memo((0, _styledComponents.default)(Scan).withConfig({
  displayName: "Scan",
  componentId: "zwjyub-0"
})([".ui--qr-Scan{display:inline-block;height:100%;transform:matrix(-1,0,0,1,0,0);width:100%;video{margin:0;}}"]));

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/ScanAddress.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/ScanAddress.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/@polkadot/react-qr/constants.js");

var _Scan = _interopRequireDefault(__webpack_require__(/*! ./Scan */ "../../node_modules/@polkadot/react-qr/Scan.js"));

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
function ScanAddress({
  className,
  onError,
  onScan,
  size,
  style
}) {
  const _onScan = (0, _react.useCallback)(data => {
    if (data) {
      try {
        const [prefix, content, genesisHash, ...name] = data.split(':');
        const isValidPrefix = prefix === _constants.ADDRESS_PREFIX || prefix === _constants.SEED_PREFIX;
        (0, _util.assert)(isValidPrefix, `Invalid prefix received, expected '${_constants.ADDRESS_PREFIX}/${_constants.SEED_PREFIX}' , found '${prefix}'`);
        const isAddress = prefix === _constants.ADDRESS_PREFIX;

        if (isAddress) {
          (0, _utilCrypto.decodeAddress)(content);
        }

        onScan({
          content,
          genesisHash,
          isAddress,
          name: (name === null || name === void 0 ? void 0 : name.length) ? name.join(':') : undefined
        });
      } catch (error) {
        console.error('@polkadot/react-qr:QrScanAddress', error.message, data);
      }
    }
  }, [onScan]);

  return /*#__PURE__*/_react.default.createElement(_Scan.default, {
    className: className,
    onError: onError,
    onScan: _onScan,
    size: size,
    style: style
  });
}

var _default = /*#__PURE__*/_react.default.memo(ScanAddress);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/ScanSignature.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/ScanSignature.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _Scan = _interopRequireDefault(__webpack_require__(/*! ./Scan */ "../../node_modules/@polkadot/react-qr/Scan.js"));

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
function ScanSignature({
  className,
  onError,
  onScan,
  size,
  style
}) {
  const _onScan = (0, _react.useCallback)(signature => signature && onScan({
    signature: `0x${signature}`
  }), [onScan]);

  return /*#__PURE__*/_react.default.createElement(_Scan.default, {
    className: className,
    onError: onError,
    onScan: _onScan,
    size: size,
    style: style
  });
}

var _default = /*#__PURE__*/_react.default.memo(ScanSignature);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/constants.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/constants.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBSTRATE_ID = exports.SEED_PREFIX = exports.FRAME_SIZE = exports.CRYPTO_SR25519 = exports.CMD_SIGN_MSG = exports.CMD_SIGN_IMMORTAL_TX = exports.CMD_SIGN_TX_HASH = exports.CMD_SIGN_TX = exports.ADDRESS_PREFIX = void 0;
// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ADDRESS_PREFIX = 'substrate';
exports.ADDRESS_PREFIX = ADDRESS_PREFIX;
const SEED_PREFIX = 'secret';
exports.SEED_PREFIX = SEED_PREFIX;
const FRAME_SIZE = 1024;
exports.FRAME_SIZE = FRAME_SIZE;
const SUBSTRATE_ID = new Uint8Array([0x53]);
exports.SUBSTRATE_ID = SUBSTRATE_ID;
const CRYPTO_SR25519 = new Uint8Array([0x01]);
exports.CRYPTO_SR25519 = CRYPTO_SR25519;
const CMD_SIGN_TX = new Uint8Array([0]);
exports.CMD_SIGN_TX = CMD_SIGN_TX;
const CMD_SIGN_TX_HASH = new Uint8Array([1]);
exports.CMD_SIGN_TX_HASH = CMD_SIGN_TX_HASH;
const CMD_SIGN_IMMORTAL_TX = new Uint8Array([2]);
exports.CMD_SIGN_IMMORTAL_TX = CMD_SIGN_IMMORTAL_TX;
const CMD_SIGN_MSG = new Uint8Array([3]);
exports.CMD_SIGN_MSG = CMD_SIGN_MSG;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/index.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "QrDisplayAddress", {
  enumerable: true,
  get: function () {
    return _DisplayAddress.default;
  }
});
Object.defineProperty(exports, "QrDisplayPayload", {
  enumerable: true,
  get: function () {
    return _DisplayPayload.default;
  }
});
Object.defineProperty(exports, "QrScanAddress", {
  enumerable: true,
  get: function () {
    return _ScanAddress.default;
  }
});
Object.defineProperty(exports, "QrScanSignature", {
  enumerable: true,
  get: function () {
    return _ScanSignature.default;
  }
});
Object.defineProperty(exports, "QrNetworkSpecs", {
  enumerable: true,
  get: function () {
    return _NetworkSpecs.default;
  }
});

var _DisplayAddress = _interopRequireDefault(__webpack_require__(/*! ./DisplayAddress */ "../../node_modules/@polkadot/react-qr/DisplayAddress.js"));

var _DisplayPayload = _interopRequireDefault(__webpack_require__(/*! ./DisplayPayload */ "../../node_modules/@polkadot/react-qr/DisplayPayload.js"));

var _ScanAddress = _interopRequireDefault(__webpack_require__(/*! ./ScanAddress */ "../../node_modules/@polkadot/react-qr/ScanAddress.js"));

var _ScanSignature = _interopRequireDefault(__webpack_require__(/*! ./ScanSignature */ "../../node_modules/@polkadot/react-qr/ScanSignature.js"));

var _NetworkSpecs = _interopRequireDefault(__webpack_require__(/*! ./NetworkSpecs */ "../../node_modules/@polkadot/react-qr/NetworkSpecs.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/qrcode.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/qrcode.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _qrcodeGenerator = _interopRequireDefault(__webpack_require__(/*! qrcode-generator */ "../../node_modules/qrcode-generator/qrcode.js"));

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
// A small hurdle to jump through, just to get the default/default correct (as generated)
const qrcode = _qrcodeGenerator.default; // HACK The default function take string -> number[], the Uint8array is compatible
// with that signature and the use thereof
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access

qrcode.stringToBytes = data => data;

var _default = qrcode;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/react-qr/util.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/react-qr/util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeNumber = encodeNumber;
exports.encodeString = encodeString;
exports.decodeString = decodeString;
exports.createAddressPayload = createAddressPayload;
exports.createSignPayload = createSignPayload;
exports.createFrames = createFrames;
exports.createImgSize = createImgSize;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/@polkadot/react-qr/constants.js");

// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0
const MULTIPART = new Uint8Array([0]);

function encodeNumber(value) {
  return new Uint8Array([value >> 8, value & 0xff]);
}

function encodeString(value) {
  const u8a = new Uint8Array(value.length);

  for (let i = 0; i < value.length; i++) {
    u8a[i] = value.charCodeAt(i);
  }

  return u8a;
}

function decodeString(value) {
  return value.reduce((str, code) => {
    return str + String.fromCharCode(code);
  }, '');
}

function createAddressPayload(address, genesisHash) {
  return encodeString(`${_constants.ADDRESS_PREFIX}:${address}:${genesisHash}`);
}

function createSignPayload(address, cmd, payload, genesisHash) {
  return (0, _util.u8aConcat)(_constants.SUBSTRATE_ID, _constants.CRYPTO_SR25519, new Uint8Array([cmd]), (0, _utilCrypto.decodeAddress)(address), (0, _util.u8aToU8a)(payload), (0, _util.u8aToU8a)(genesisHash));
}

function createFrames(input) {
  const frames = [];
  let idx = 0;

  while (idx < input.length) {
    frames.push(input.subarray(idx, idx + _constants.FRAME_SIZE));
    idx += _constants.FRAME_SIZE;
  }

  return frames.map((frame, index) => (0, _util.u8aConcat)(MULTIPART, encodeNumber(frames.length), encodeNumber(index), frame));
}

function createImgSize(size) {
  if (!size) {
    return {
      height: 'auto',
      width: '100%'
    };
  }

  const height = (0, _util.isString)(size) ? size : `${size}px`;
  return {
    height,
    width: height
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/Base.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/Base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _testing = _interopRequireDefault(__webpack_require__(/*! @polkadot/keyring/testing */ "../../node_modules/@polkadot/keyring/testing.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _accounts2 = _interopRequireDefault(__webpack_require__(/*! ./observable/accounts */ "../../node_modules/@polkadot/ui-keyring/observable/accounts.js"));

var _addresses2 = _interopRequireDefault(__webpack_require__(/*! ./observable/addresses */ "../../node_modules/@polkadot/ui-keyring/observable/addresses.js"));

var _contracts2 = _interopRequireDefault(__webpack_require__(/*! ./observable/contracts */ "../../node_modules/@polkadot/ui-keyring/observable/contracts.js"));

var _development = _interopRequireDefault(__webpack_require__(/*! ./observable/development */ "../../node_modules/@polkadot/ui-keyring/observable/development.js"));

var _Browser = _interopRequireDefault(__webpack_require__(/*! ./stores/Browser */ "../../node_modules/@polkadot/ui-keyring/stores/Browser.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _accounts = (0, _classPrivateFieldLooseKey2.default)("accounts");

var _addresses = (0, _classPrivateFieldLooseKey2.default)("addresses");

var _contracts = (0, _classPrivateFieldLooseKey2.default)("contracts");

var _keyring = (0, _classPrivateFieldLooseKey2.default)("keyring");

// direct import (skip index with all)
class Base {
  constructor() {
    Object.defineProperty(this, _accounts, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _addresses, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _contracts, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _keyring, {
      writable: true,
      value: void 0
    });
    this._store = void 0;
    this._genesisHash = void 0;

    this.decodeAddress = (key, ignoreChecksum, ss58Format) => {
      return this.keyring.decodeAddress(key, ignoreChecksum, ss58Format);
    };

    this.encodeAddress = (key, ss58Format) => {
      return this.keyring.encodeAddress(key, ss58Format);
    };

    (0, _classPrivateFieldLooseBase2.default)(this, _accounts)[_accounts] = _accounts2.default;
    (0, _classPrivateFieldLooseBase2.default)(this, _addresses)[_addresses] = _addresses2.default;
    (0, _classPrivateFieldLooseBase2.default)(this, _contracts)[_contracts] = _contracts2.default;
    this._store = new _Browser.default();
  }

  get accounts() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _accounts)[_accounts];
  }

  get addresses() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _addresses)[_addresses];
  }

  get contracts() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _contracts)[_contracts];
  }

  get keyring() {
    if ((0, _classPrivateFieldLooseBase2.default)(this, _keyring)[_keyring]) {
      return (0, _classPrivateFieldLooseBase2.default)(this, _keyring)[_keyring];
    }

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  get genesisHash() {
    return this._genesisHash;
  }

  getPair(address) {
    return this.keyring.getPair(address);
  }

  getPairs() {
    return this.keyring.getPairs().filter(pair => _development.default.isDevelopment() || pair.meta.isTesting !== true);
  }

  isAvailable(_address) {
    const accountsValue = this.accounts.subject.getValue();
    const addressesValue = this.addresses.subject.getValue();
    const contractsValue = this.contracts.subject.getValue();
    const address = (0, _util.isString)(_address) ? _address : this.encodeAddress(_address);
    return !accountsValue[address] && !addressesValue[address] && !contractsValue[address];
  }

  isPassValid(password) {
    return password.length > 0;
  }

  setSS58Format(ss58Format) {
    if ((0, _classPrivateFieldLooseBase2.default)(this, _keyring)[_keyring] && ss58Format) {
      (0, _classPrivateFieldLooseBase2.default)(this, _keyring)[_keyring].setSS58Format(ss58Format);
    }
  }

  setDevMode(isDevelopment) {
    _development.default.set(isDevelopment);
  }

  initKeyring(options) {
    const keyring = (0, _testing.default)(options, true);

    if ((0, _util.isBoolean)(options.isDevelopment)) {
      this.setDevMode(options.isDevelopment);
    }

    (0, _classPrivateFieldLooseBase2.default)(this, _keyring)[_keyring] = keyring;
    this._genesisHash = options.genesisHash && options.genesisHash.toHex();
    this._store = options.store || this._store;
    this.addAccountPairs();
  }

  addAccountPairs() {
    this.keyring.getPairs().forEach(({
      address,
      meta
    }) => {
      this.accounts.add(this._store, address, {
        address,
        meta
      });
    });
  }

  addTimestamp(pair) {
    if (!pair.meta.whenCreated) {
      pair.setMeta({
        whenCreated: Date.now()
      });
    }
  }

}

exports.default = Base;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/Keyring.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/Keyring.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Keyring = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _pair = _interopRequireDefault(__webpack_require__(/*! @polkadot/keyring/pair */ "../../node_modules/@polkadot/keyring/pair/index.js"));

var _chains = _interopRequireDefault(__webpack_require__(/*! @polkadot/ui-settings/defaults/chains */ "../../node_modules/@polkadot/ui-settings/defaults/chains.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _development = _interopRequireDefault(__webpack_require__(/*! ./observable/development */ "../../node_modules/@polkadot/ui-keyring/observable/development.js"));

var _Base = _interopRequireDefault(__webpack_require__(/*! ./Base */ "../../node_modules/@polkadot/ui-keyring/Base.js"));

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/ui-keyring/defaults.js");

var _options = _interopRequireDefault(__webpack_require__(/*! ./options */ "../../node_modules/@polkadot/ui-keyring/options/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const RECENT_EXPIRY = 24 * 60 * 60; // No accounts (or test accounts) should be loaded until after the chain determination.
// Chain determination occurs outside of Keyring. Loading `keyring.loadAll({ type: 'ed25519' | 'sr25519' })` is triggered
// from the API after the chain is received

var _stores = (0, _classPrivateFieldLooseKey2.default)("stores");

class Keyring extends _Base.default {
  constructor(...args) {
    super(...args);
    Object.defineProperty(this, _stores, {
      writable: true,
      value: {
        account: () => this.accounts,
        address: () => this.addresses,
        contract: () => this.contracts
      }
    });
  }

  addExternal(address, meta = {}) {
    const pair = this.keyring.addFromAddress(address, _objectSpread(_objectSpread({}, meta), {}, {
      isExternal: true
    }), null);
    return {
      json: this.saveAccount(pair),
      pair
    };
  }

  addHardware(address, hardwareType, meta = {}) {
    return this.addExternal(address, _objectSpread(_objectSpread({}, meta), {}, {
      hardwareType,
      isHardware: true
    }));
  }

  addMultisig(addresses, threshold, meta = {}) {
    const address = (0, _utilCrypto.createKeyMulti)(addresses, threshold); // we could use `sortAddresses`, but rather use internal encode/decode so we are 100%

    const who = (0, _util.u8aSorted)(addresses.map(who => this.decodeAddress(who))).map(who => this.encodeAddress(who));
    return this.addExternal(address, _objectSpread(_objectSpread({}, meta), {}, {
      isMultisig: true,
      threshold: (0, _util.bnToBn)(threshold).toNumber(),
      who
    }));
  }

  addPair(pair, password) {
    this.keyring.addPair(pair);
    return {
      json: this.saveAccount(pair, password),
      pair
    };
  }

  addUri(suri, password, meta = {}, type) {
    const pair = this.keyring.addFromUri(suri, meta, type);
    return {
      json: this.saveAccount(pair, password),
      pair
    };
  }

  backupAccount(pair, password) {
    if (!pair.isLocked) {
      pair.lock();
    }

    pair.decodePkcs8(password);
    return pair.toJson(password);
  }

  createFromJson(json, meta = {}) {
    return this.keyring.createFromJson(_objectSpread(_objectSpread({}, json), {}, {
      meta: _objectSpread(_objectSpread({}, json.meta || {}), {}, {
        meta
      })
    }));
  }

  createFromUri(suri, meta = {}, type) {
    return this.keyring.createFromUri(suri, meta, type);
  }

  encryptAccount(pair, password) {
    const json = pair.toJson(password);
    json.meta.whenEdited = Date.now();
    this.keyring.addFromJson(json);
    this.accounts.add(this._store, pair.address, json);
  }

  forgetAccount(address) {
    this.keyring.removePair(address);
    this.accounts.remove(this._store, address);
  }

  forgetAddress(address) {
    this.addresses.remove(this._store, address);
  }

  forgetContract(address) {
    this.contracts.remove(this._store, address);
  }

  getAccount(address) {
    return this.getAddress(address, 'account');
  }

  getAccounts() {
    const available = this.accounts.subject.getValue();
    return Object.keys(available).map(address => this.getAddress(address, 'account')).filter(account => _development.default.isDevelopment() || account.meta.isTesting !== true);
  }

  getAddress(_address, type = null) {
    const address = (0, _util.isString)(_address) ? _address : this.encodeAddress(_address);
    const publicKey = this.decodeAddress(address);
    const stores = type ? [(0, _classPrivateFieldLooseBase2.default)(this, _stores)[_stores][type]] : Object.values((0, _classPrivateFieldLooseBase2.default)(this, _stores)[_stores]);
    const info = stores.reduce((lastInfo, store) => store().subject.getValue()[address] || lastInfo, undefined);
    return info && {
      address,
      meta: info.json.meta,
      publicKey
    };
  }

  getAddresses() {
    const available = this.addresses.subject.getValue();
    return Object.keys(available).map(address => this.getAddress(address));
  }

  getContract(address) {
    return this.getAddress(address, 'contract');
  }

  getContracts() {
    const available = this.contracts.subject.getValue();
    return Object.entries(available).filter(([, {
      json: {
        meta: {
          contract
        }
      }
    }]) => !!contract && contract.genesisHash === this.genesisHash).map(([address]) => this.getContract(address));
  }

  rewriteKey(json, key, hexAddr, creator) {
    if (hexAddr.substr(0, 2) === '0x') {
      return;
    }

    this._store.remove(key);

    this._store.set(creator(hexAddr), json);
  }

  loadAccount(json, key) {
    if (!json.meta.isTesting && json.encoded) {
      // FIXME Just for the transition period (ignoreChecksum)
      const pair = this.keyring.addFromJson(json, true);
      this.accounts.add(this._store, pair.address, json);
    }

    const [, hexAddr] = key.split(':');
    this.rewriteKey(json, key, hexAddr.trim(), _defaults.accountKey);
  }

  loadAddress(json, key) {
    const {
      isRecent,
      whenCreated = 0
    } = json.meta;

    if (isRecent && Date.now() - whenCreated > RECENT_EXPIRY) {
      this._store.remove(key);

      return;
    }

    const address = this.encodeAddress((0, _util.isHex)(json.address) ? (0, _util.hexToU8a)(json.address) // FIXME Just for the transition period (ignoreChecksum)
    : this.decodeAddress(json.address, true));
    const [, hexAddr] = key.split(':');
    this.addresses.add(this._store, address, json);
    this.rewriteKey(json, key, hexAddr, _defaults.addressKey);
  }

  loadContract(json, key) {
    const address = this.encodeAddress(this.decodeAddress(json.address));
    const [, hexAddr] = key.split(':'); // move genesisHash to top-level (TODO Remove from contracts section?)

    json.meta.genesisHash = json.meta.genesisHash || json.meta.contract && json.meta.contract.genesisHash;
    this.contracts.add(this._store, address, json);
    this.rewriteKey(json, key, hexAddr, _defaults.contractKey);
  }

  loadInjected(address, meta) {
    const json = {
      address,
      meta: _objectSpread(_objectSpread({}, meta), {}, {
        isInjected: true
      })
    };
    const pair = this.keyring.addFromAddress(address, json.meta);
    this.accounts.add(this._store, pair.address, json);
  }

  allowGenesis(json) {
    if (json && json.meta && this.genesisHash) {
      const hashes = Object.values(_chains.default).find(hashes => hashes.includes(this.genesisHash || '')) || [this.genesisHash];

      if (json.meta.genesisHash) {
        return hashes.includes(json.meta.genesisHash);
      } else if (json.meta.contract) {
        return hashes.includes(json.meta.contract.genesisHash);
      }
    }

    return true;
  }

  loadAll(options, injected = []) {
    super.initKeyring(options);

    this._store.all((key, json) => {
      if (options.filter ? options.filter(json) : true) {
        if (this.allowGenesis(json)) {
          if (_defaults.accountRegex.test(key)) {
            this.loadAccount(json, key);
          } else if (_defaults.addressRegex.test(key)) {
            this.loadAddress(json, key);
          } else if (_defaults.contractRegex.test(key)) {
            this.loadContract(json, key);
          }
        }
      }
    });

    injected.forEach(account => {
      if (this.allowGenesis(account)) {
        this.loadInjected(account.address, account.meta);
      }
    });

    _options.default.init(this);
  }

  restoreAccount(json, password) {
    const cryptoType = Array.isArray(json.encoding.content) ? json.encoding.content[1] : 'ed25519';
    const encType = Array.isArray(json.encoding.type) ? json.encoding.type : [json.encoding.type];
    const pair = (0, _pair.default)({
      toSS58: this.encodeAddress,
      type: cryptoType
    }, {
      publicKey: this.decodeAddress(json.address, true)
    }, json.meta, (0, _util.isHex)(json.encoded) ? (0, _util.hexToU8a)(json.encoded) : (0, _utilCrypto.base64Decode)(json.encoded), encType); // unlock, save account and then lock (locking cleans secretKey, so needs to be last)

    pair.decodePkcs8(password);
    this.addPair(pair, password);
    pair.lock();
    return pair;
  }

  saveAccount(pair, password) {
    this.addTimestamp(pair);
    const json = pair.toJson(password);
    this.keyring.addFromJson(json);
    this.accounts.add(this._store, pair.address, json);
    return json;
  }

  saveAccountMeta(pair, meta) {
    const address = pair.address;

    this._store.get((0, _defaults.accountKey)(address), json => {
      pair.setMeta(meta);
      json.meta = pair.meta;
      this.accounts.add(this._store, address, json);
    });
  }

  saveAddress(address, meta, type = 'address') {
    const available = this.addresses.subject.getValue();
    const json = available[address] && available[address].json || {
      address,
      meta: {
        isRecent: undefined,
        whenCreated: Date.now()
      }
    };
    Object.keys(meta).forEach(key => {
      json.meta[key] = meta[key];
    });
    delete json.meta.isRecent;

    (0, _classPrivateFieldLooseBase2.default)(this, _stores)[_stores][type]().add(this._store, address, json);

    return json;
  }

  saveContract(address, meta) {
    return this.saveAddress(address, meta, 'contract');
  }

  saveRecent(address) {
    const available = this.addresses.subject.getValue();

    if (!available[address]) {
      this.addresses.add(this._store, address, {
        address,
        meta: {
          genesisHash: this.genesisHash,
          isRecent: true,
          whenCreated: Date.now()
        }
      });
    }

    return this.addresses.subject.getValue()[address];
  }

}

exports.Keyring = Keyring;
const keyringInstance = new Keyring();
var _default = keyringInstance;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/defaults.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/defaults.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contractRegex = exports.contractKey = exports.addressRegex = exports.addressKey = exports.accountRegex = exports.accountKey = void 0;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _keyring = __webpack_require__(/*! @polkadot/keyring */ "../../node_modules/@polkadot/keyring/index.js");

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ACCOUNT_PREFIX = 'account:';
const ADDRESS_PREFIX = 'address:';
const CONTRACT_PREFIX = 'contract:';

function toHex(address) {
  return (0, _util.u8aToHex)( // When saving pre-checksum changes, ensure that we can decode
  (0, _keyring.decodeAddress)(address, true));
}

const accountKey = address => `${ACCOUNT_PREFIX}${toHex(address)}`;

exports.accountKey = accountKey;

const addressKey = address => `${ADDRESS_PREFIX}${toHex(address)}`;

exports.addressKey = addressKey;

const contractKey = address => `${CONTRACT_PREFIX}${toHex(address)}`;

exports.contractKey = contractKey;
const accountRegex = new RegExp(`^${ACCOUNT_PREFIX}0x[0-9a-f]*`, '');
exports.accountRegex = accountRegex;
const addressRegex = new RegExp(`^${ADDRESS_PREFIX}0x[0-9a-f]*`, '');
exports.addressRegex = addressRegex;
const contractRegex = new RegExp(`^${CONTRACT_PREFIX}0x[0-9a-f]*`, '');
exports.contractRegex = contractRegex;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/index.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Keyring", {
  enumerable: true,
  get: function () {
    return _Keyring.Keyring;
  }
});
Object.defineProperty(exports, "Ledger", {
  enumerable: true,
  get: function () {
    return _ledger.default;
  }
});
exports.default = void 0;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _Keyring = _interopRequireWildcard(__webpack_require__(/*! ./Keyring */ "../../node_modules/@polkadot/ui-keyring/Keyring.js"));

var _ledger = _interopRequireDefault(__webpack_require__(/*! ./ledger */ "../../node_modules/@polkadot/ui-keyring/ledger/index.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
// eslint-disable-next-line @typescript-eslint/no-var-requires
(0, _util.detectPackage)(__webpack_require__(/*! ./package.json */ "../../node_modules/@polkadot/ui-keyring/package.json"),  true && __dirname);
var _default = _Keyring.default;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/ledger/index.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/ledger/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LEDGER_DEFAULT_INDEX = exports.LEDGER_DEFAULT_CHANGE = exports.LEDGER_DEFAULT_ACCOUNT = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _ledgerPolkadot = __webpack_require__(/*! @zondax/ledger-polkadot */ "../../node_modules/@zondax/ledger-polkadot/dist/index.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _transportsNode = _interopRequireDefault(__webpack_require__(/*! ./transportsNode */ "../../node_modules/@polkadot/ui-keyring/ledger/transportsEmpty.js"));

var _transportsWeb = _interopRequireDefault(__webpack_require__(/*! ./transportsWeb */ "../../node_modules/@polkadot/ui-keyring/ledger/transportsWeb.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const LEDGER_DEFAULT_ACCOUNT = 0x80000000;
exports.LEDGER_DEFAULT_ACCOUNT = LEDGER_DEFAULT_ACCOUNT;
const LEDGER_DEFAULT_CHANGE = 0x80000000;
exports.LEDGER_DEFAULT_CHANGE = LEDGER_DEFAULT_CHANGE;
const LEDGER_DEFAULT_INDEX = 0x80000000;
exports.LEDGER_DEFAULT_INDEX = LEDGER_DEFAULT_INDEX;
const SUCCESS_CODE = 0x9000;

const transports = _transportsNode.default.concat(_transportsWeb.default);

const APPS = {
  kusama: _ledgerPolkadot.newKusamaApp,
  polkadot: _ledgerPolkadot.newPolkadotApp
};

var _app = (0, _classPrivateFieldLooseKey2.default)("app");

var _chain = (0, _classPrivateFieldLooseKey2.default)("chain");

var _transport = (0, _classPrivateFieldLooseKey2.default)("transport");

// A very basic wrapper for a ledger app -
//  - it connects automatically, creating an app as required
//  - Promises return errors (instead of wrapper errors)
class Ledger {
  constructor(transport, chain) {
    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _chain, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _transport, {
      writable: true,
      value: void 0
    });
    // u2f is deprecated
    (0, _util.assert)(['hid', 'webusb'].includes(transport), `Unsupported transport ${transport}`);
    (0, _util.assert)(Object.keys(APPS).includes(chain), `Unsupported chain ${chain}`);
    (0, _classPrivateFieldLooseBase2.default)(this, _chain)[_chain] = chain;
    (0, _classPrivateFieldLooseBase2.default)(this, _transport)[_transport] = transport;
  }

  async _getApp() {
    if (!(0, _classPrivateFieldLooseBase2.default)(this, _app)[_app]) {
      const def = transports.find(({
        type
      }) => type === (0, _classPrivateFieldLooseBase2.default)(this, _transport)[_transport]);
      (0, _util.assert)(def, `Unable to find a transport for ${(0, _classPrivateFieldLooseBase2.default)(this, _transport)[_transport]}`);
      const transport = await def.create();
      (0, _classPrivateFieldLooseBase2.default)(this, _app)[_app] = APPS[(0, _classPrivateFieldLooseBase2.default)(this, _chain)[_chain]](transport);
    }

    return (0, _classPrivateFieldLooseBase2.default)(this, _app)[_app];
  }

  async _withApp(fn) {
    try {
      const app = await this._getApp();
      return await fn(app);
    } catch (error) {
      (0, _classPrivateFieldLooseBase2.default)(this, _app)[_app] = null;
      throw error;
    }
  }

  async _wrapError(promise) {
    const result = await promise;
    (0, _util.assert)(result.return_code === SUCCESS_CODE, result.error_message);
    return result;
  }

  async getAddress(confirm = false, accountOffset = 0, addressOffset = 0, {
    account = LEDGER_DEFAULT_ACCOUNT,
    addressIndex = LEDGER_DEFAULT_INDEX,
    change = LEDGER_DEFAULT_CHANGE
  } = {}) {
    return this._withApp(async app => {
      const {
        address,
        pubKey
      } = await this._wrapError(app.getAddress(account + accountOffset, change, addressIndex + addressOffset, confirm));
      return {
        address,
        publicKey: `0x${pubKey}`
      };
    });
  }

  async getVersion() {
    return this._withApp(async app => {
      const {
        device_locked: isLocked,
        major,
        minor,
        patch,
        test_mode: isTestMode
      } = await this._wrapError(app.getVersion());
      return {
        isLocked,
        isTestMode,
        version: [major, minor, patch]
      };
    });
  }

  async sign(message, accountOffset = 0, addressOffset = 0, {
    account = LEDGER_DEFAULT_ACCOUNT,
    addressIndex = LEDGER_DEFAULT_INDEX,
    change = LEDGER_DEFAULT_CHANGE
  } = {}) {
    return this._withApp(async app => {
      const buffer = (0, _util.u8aToBuffer)(message);
      const {
        signature
      } = await this._wrapError(app.sign(account + accountOffset, change, addressIndex + addressOffset, buffer));
      return {
        signature: (0, _util.u8aToHex)((0, _util.bufferToU8a)(signature))
      };
    });
  }

}

exports.default = Ledger;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/ledger/transportsEmpty.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/ledger/transportsEmpty.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const transports = [];
var _default = transports;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/ledger/transportsWeb.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/ledger/transportsWeb.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hwTransportWebusb = _interopRequireDefault(__webpack_require__(/*! @ledgerhq/hw-transport-webusb */ "../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const transports = [// deprecated
// import LedgerU2F from '@ledgerhq/hw-transport-u2f';
// {
//   create: (): Promise<Transport> =>
//     LedgerU2F.create(),
//   type: 'u2f'
// },
{
  create: () => _hwTransportWebusb.default.create(),
  type: 'webusb'
}];
var _default = transports;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/accounts.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/accounts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/@polkadot/ui-keyring/defaults.js");

var _genericSubject = _interopRequireDefault(__webpack_require__(/*! ./genericSubject */ "../../node_modules/@polkadot/ui-keyring/observable/genericSubject.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = (0, _genericSubject.default)(_defaults.accountKey, true);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/addresses.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/addresses.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/@polkadot/ui-keyring/defaults.js");

var _genericSubject = _interopRequireDefault(__webpack_require__(/*! ./genericSubject */ "../../node_modules/@polkadot/ui-keyring/observable/genericSubject.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = (0, _genericSubject.default)(_defaults.addressKey);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/contracts.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/contracts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/@polkadot/ui-keyring/defaults.js");

var _genericSubject = _interopRequireDefault(__webpack_require__(/*! ./genericSubject */ "../../node_modules/@polkadot/ui-keyring/observable/genericSubject.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = (0, _genericSubject.default)(_defaults.contractKey);

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/development.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
const subject = new _rxjs.BehaviorSubject(false);
var _default = {
  isDevelopment: () => subject.getValue(),
  set: isDevelopment => {
    subject.next(isDevelopment);
  },
  subject
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/genericSubject.js":
/*!*********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/genericSubject.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genericSubject;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _rxjs = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var _item = _interopRequireDefault(__webpack_require__(/*! ../options/item */ "../../node_modules/@polkadot/ui-keyring/options/item.js"));

var _development = _interopRequireDefault(__webpack_require__(/*! ./development */ "../../node_modules/@polkadot/ui-keyring/observable/development.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function callNext(current, subject, withTest) {
  const isDevMode = _development.default.isDevelopment();

  const filtered = {};
  Object.keys(current).forEach(key => {
    const {
      json: {
        meta: {
          isTesting = false
        } = {}
      } = {}
    } = current[key];

    if (!withTest || isDevMode || isTesting !== true) {
      filtered[key] = current[key];
    }
  });
  subject.next(filtered);
}

function genericSubject(keyCreator, withTest = false) {
  let current = {};
  const subject = new _rxjs.BehaviorSubject({});

  const next = () => callNext(current, subject, withTest);

  _development.default.subject.subscribe(next);

  return {
    add: (store, address, json) => {
      current = _objectSpread({}, current);
      current[address] = {
        json: _objectSpread(_objectSpread({}, json), {}, {
          address
        }),
        option: (0, _item.default)(address, json.meta.name)
      }; // we do not store dev accounts, injected or hardware (the latter two are external/transient)

      if (!json.meta.isInjected && !json.meta.isHardware && (!json.meta.isTesting || _development.default.isDevelopment())) {
        store.set(keyCreator(address), json);
      }

      next();
      return current[address];
    },
    remove: (store, address) => {
      current = _objectSpread({}, current);
      delete current[address];
      store.remove(keyCreator(address));
      next();
    },
    subject
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/observable/index.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/observable/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var _operators = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");

var _accounts = _interopRequireDefault(__webpack_require__(/*! ./accounts */ "../../node_modules/@polkadot/ui-keyring/observable/accounts.js"));

var _addresses = _interopRequireDefault(__webpack_require__(/*! ./addresses */ "../../node_modules/@polkadot/ui-keyring/observable/addresses.js"));

var _contracts = _interopRequireDefault(__webpack_require__(/*! ./contracts */ "../../node_modules/@polkadot/ui-keyring/observable/contracts.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = (0, _rxjs.combineLatest)(_accounts.default.subject, _addresses.default.subject, _contracts.default.subject).pipe((0, _operators.map)(([accounts, addresses, contracts]) => ({
  accounts,
  addresses,
  contracts
})));

exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/options/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/options/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _observable = _interopRequireDefault(__webpack_require__(/*! ../observable */ "../../node_modules/@polkadot/ui-keyring/observable/index.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
let hasCalledInitOptions = false;

const sortByName = (a, b) => {
  const valueA = a.option.name;
  const valueB = b.option.name;
  return valueA.localeCompare(valueB);
};

const sortByCreated = (a, b) => {
  const valueA = a.json.meta.whenCreated || 0;
  const valueB = b.json.meta.whenCreated || 0;

  if (valueA < valueB) {
    return 1;
  }

  if (valueA > valueB) {
    return -1;
  }

  return 0;
};

class KeyringOption {
  constructor() {
    this.optionsSubject = new _rxjs.BehaviorSubject(this.emptyOptions());
  }

  createOptionHeader(name) {
    return {
      key: `header-${name.toLowerCase()}`,
      name,
      value: null
    };
  }

  init(keyring) {
    (0, _util.assert)(!hasCalledInitOptions, 'Unable to initialise options more than once');

    _observable.default.subscribe(() => {
      const opts = this.emptyOptions();
      this.addAccounts(keyring, opts);
      this.addAddresses(keyring, opts);
      this.addContracts(keyring, opts);
      opts.address = this.linkItems({
        Addresses: opts.address,
        Recent: opts.recent
      });
      opts.account = this.linkItems({
        Accounts: opts.account,
        Development: opts.testing
      });
      opts.contract = this.linkItems({
        Contracts: opts.contract
      });
      opts.all = [].concat(opts.account, opts.address);
      opts.allPlus = [].concat(opts.account, opts.address, opts.contract);
      this.optionsSubject.next(opts);
    });

    hasCalledInitOptions = true;
  }

  linkItems(items) {
    return Object.keys(items).reduce((result, header) => {
      const options = items[header];
      return result.concat(options.length ? [this.createOptionHeader(header)] : [], options);
    }, []);
  }

  addAccounts(keyring, options) {
    const available = keyring.accounts.subject.getValue();
    Object.values(available).sort(sortByName).forEach(({
      json: {
        meta: {
          isTesting = false
        }
      },
      option
    }) => {
      if (!isTesting) {
        options.account.push(option);
      } else {
        options.testing.push(option);
      }
    });
  }

  addAddresses(keyring, options) {
    const available = keyring.addresses.subject.getValue();
    Object.values(available).filter(({
      json
    }) => !!json.meta.isRecent).sort(sortByCreated).forEach(({
      option
    }) => {
      options.recent.push(option);
    });
    Object.values(available).filter(({
      json
    }) => !json.meta.isRecent).sort(sortByName).forEach(({
      option
    }) => {
      options.address.push(option);
    });
  }

  addContracts(keyring, options) {
    const available = keyring.contracts.subject.getValue();
    Object.values(available).sort(sortByName).forEach(({
      option
    }) => {
      options.contract.push(option);
    });
  }

  emptyOptions() {
    return {
      account: [],
      address: [],
      all: [],
      allPlus: [],
      contract: [],
      recent: [],
      testing: []
    };
  }

}

const keyringOptionInstance = new KeyringOption();
var _default = keyringOptionInstance;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/options/item.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/options/item.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createItem;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
function createItem(address, _name) {
  const name = (0, _util.isUndefined)(_name) ? address.length > 15 ? `${address.slice(0, 6)}…${address.slice(-6)}` : address : _name;
  return {
    key: address,
    name,
    value: address
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/package.json":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/package.json ***!
  \*****************************************************************/
/*! exports provided: name, version, main, repository, author, maintainers, contributors, license, browser, react-native, dependencies, devDependencies, optionalDependencies, peerDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@polkadot/ui-keyring\",\"version\":\"0.60.1\",\"main\":\"index.js\",\"repository\":\"https://github.com/polkadot-js/apps.git\",\"author\":\"Jaco Greeff <jacogr@gmail.com>\",\"maintainers\":[\"Jaco Greeff <jacogr@gmail.com>\"],\"contributors\":[],\"license\":\"Apache-2.0\",\"browser\":{\"./ledger/transportsNode\":\"./ledger/transportsEmpty\"},\"react-native\":{\"./ledger/transportsNode\":\"./ledger/transportsEmpty\",\"./ledger/transportsWeb\":\"./ledger/transportsEmpty\"},\"dependencies\":{\"@babel/runtime\":\"^7.11.2\",\"@ledgerhq/hw-transport-webusb\":\"^5.25.0\",\"@zondax/ledger-polkadot\":\"^0.11.0\",\"mkdirp\":\"^1.0.4\",\"rxjs\":\"^6.6.3\",\"store\":\"^2.0.12\"},\"devDependencies\":{\"@polkadot/keyring\":\"^3.5.1\",\"@polkadot/types\":\"^2.1.2-1\",\"@polkadot/util\":\"^3.5.1\",\"@types/ledgerhq__hw-transport-node-hid\":\"^4.22.2\",\"@types/ledgerhq__hw-transport-webusb\":\"^4.70.1\",\"@types/mkdirp\":\"^1.0.1\",\"@types/store\":\"^2.0.2\"},\"optionalDependencies\":{\"@ledgerhq/hw-transport-node-hid\":\"^5.25.0\"},\"peerDependencies\":{\"@polkadot/keyring\":\"*\",\"@polkadot/ui-settings\":\"*\",\"@polkadot/util\":\"*\"}}");

/***/ }),

/***/ "../../node_modules/@polkadot/ui-keyring/stores/Browser.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-keyring/stores/Browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! store */ "../../node_modules/store/dist/store.legacy.js"));

// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
class BrowserStore {
  all(cb) {
    _store.default.each((value, key) => {
      cb(key, value);
    });
  }

  get(key, cb) {
    cb(_store.default.get(key));
  }

  remove(key, cb) {
    _store.default.remove(key);

    cb && cb();
  }

  set(key, value, cb) {
    _store.default.set(key, value);

    cb && cb();
  }

}

exports.default = BrowserStore;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/Settings.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/Settings.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Settings = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! store */ "../../node_modules/store/dist/store.legacy.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/ui-settings/defaults/index.js");

// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
function withDefault(options, option, fallback) {
  const _option = option || fallback;

  return options.some(({
    value
  }) => value === _option) ? _option : fallback;
}

var _emitter = (0, _classPrivateFieldLooseKey2.default)("emitter");

var _apiUrl = (0, _classPrivateFieldLooseKey2.default)("apiUrl");

var _camera = (0, _classPrivateFieldLooseKey2.default)("camera");

var _i18nLang = (0, _classPrivateFieldLooseKey2.default)("i18nLang");

var _icon = (0, _classPrivateFieldLooseKey2.default)("icon");

var _ledgerConn = (0, _classPrivateFieldLooseKey2.default)("ledgerConn");

var _locking = (0, _classPrivateFieldLooseKey2.default)("locking");

var _prefix = (0, _classPrivateFieldLooseKey2.default)("prefix");

var _uiMode = (0, _classPrivateFieldLooseKey2.default)("uiMode");

var _uiTheme = (0, _classPrivateFieldLooseKey2.default)("uiTheme");

class Settings {
  constructor() {
    Object.defineProperty(this, _emitter, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _apiUrl, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _camera, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _i18nLang, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _icon, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _ledgerConn, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _locking, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _prefix, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _uiMode, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _uiTheme, {
      writable: true,
      value: void 0
    });
    const settings = _store.default.get('settings') || {};
    (0, _classPrivateFieldLooseBase2.default)(this, _emitter)[_emitter] = new _eventemitter.default();
    (0, _classPrivateFieldLooseBase2.default)(this, _apiUrl)[_apiUrl] = typeof settings.apiUrl === 'string' && settings.apiUrl || undefined || _defaults.ENDPOINT_DEFAULT.value;
    (0, _classPrivateFieldLooseBase2.default)(this, _camera)[_camera] = withDefault(_defaults.CAMERA, settings.camera, _defaults.CAMERA_DEFAULT);
    (0, _classPrivateFieldLooseBase2.default)(this, _ledgerConn)[_ledgerConn] = withDefault(_defaults.LEDGER_CONN, settings.ledgerConn, _defaults.LEDGER_CONN_DEFAULT);
    (0, _classPrivateFieldLooseBase2.default)(this, _i18nLang)[_i18nLang] = settings.i18nLang || _defaults.LANGUAGE_DEFAULT;
    (0, _classPrivateFieldLooseBase2.default)(this, _icon)[_icon] = settings.icon || _defaults.ICON_DEFAULT;
    (0, _classPrivateFieldLooseBase2.default)(this, _locking)[_locking] = settings.locking || _defaults.LOCKING_DEFAULT;
    (0, _classPrivateFieldLooseBase2.default)(this, _prefix)[_prefix] = (0, _util.isUndefined)(settings.prefix) ? _defaults.PREFIX_DEFAULT : settings.prefix;
    (0, _classPrivateFieldLooseBase2.default)(this, _uiMode)[_uiMode] = settings.uiMode || _defaults.UIMODE_DEFAULT;
    (0, _classPrivateFieldLooseBase2.default)(this, _uiTheme)[_uiTheme] = settings.uiTheme || _defaults.UITHEME_DEFAULT;
  }

  get camera() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _camera)[_camera];
  }

  get apiUrl() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _apiUrl)[_apiUrl];
  }

  get i18nLang() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _i18nLang)[_i18nLang];
  }

  get icon() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _icon)[_icon];
  }

  get ledgerConn() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _ledgerConn)[_ledgerConn];
  }

  get locking() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _locking)[_locking];
  }

  get prefix() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _prefix)[_prefix];
  }

  get uiMode() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _uiMode)[_uiMode];
  }

  get uiTheme() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _uiTheme)[_uiTheme];
  }

  get availableCamera() {
    return _defaults.CAMERA;
  }

  get availableCryptos() {
    return _defaults.CRYPTOS;
  }

  get availableCryptosEth() {
    return _defaults.CRYPTOS_ETH;
  }

  get availableIcons() {
    return _defaults.ICONS;
  }

  get availableLedgerConn() {
    return _defaults.LEDGER_CONN;
  }

  get availableLocking() {
    return _defaults.LOCKING;
  }

  get availableNodes() {
    return _defaults.ENDPOINTS;
  }

  get availablePrefixes() {
    return _defaults.PREFIXES;
  }

  get availableUIModes() {
    return _defaults.UIMODES;
  }

  get availableUIThemes() {
    return _defaults.UITHEMES;
  }

  get() {
    return {
      apiUrl: (0, _classPrivateFieldLooseBase2.default)(this, _apiUrl)[_apiUrl],
      camera: (0, _classPrivateFieldLooseBase2.default)(this, _camera)[_camera],
      i18nLang: (0, _classPrivateFieldLooseBase2.default)(this, _i18nLang)[_i18nLang],
      icon: (0, _classPrivateFieldLooseBase2.default)(this, _icon)[_icon],
      ledgerConn: (0, _classPrivateFieldLooseBase2.default)(this, _ledgerConn)[_ledgerConn],
      locking: (0, _classPrivateFieldLooseBase2.default)(this, _locking)[_locking],
      prefix: (0, _classPrivateFieldLooseBase2.default)(this, _prefix)[_prefix],
      uiMode: (0, _classPrivateFieldLooseBase2.default)(this, _uiMode)[_uiMode],
      uiTheme: (0, _classPrivateFieldLooseBase2.default)(this, _uiTheme)[_uiTheme]
    };
  }

  set(settings) {
    (0, _classPrivateFieldLooseBase2.default)(this, _apiUrl)[_apiUrl] = settings.apiUrl || (0, _classPrivateFieldLooseBase2.default)(this, _apiUrl)[_apiUrl];
    (0, _classPrivateFieldLooseBase2.default)(this, _camera)[_camera] = settings.camera || (0, _classPrivateFieldLooseBase2.default)(this, _camera)[_camera];
    (0, _classPrivateFieldLooseBase2.default)(this, _ledgerConn)[_ledgerConn] = settings.ledgerConn || (0, _classPrivateFieldLooseBase2.default)(this, _ledgerConn)[_ledgerConn];
    (0, _classPrivateFieldLooseBase2.default)(this, _i18nLang)[_i18nLang] = settings.i18nLang || (0, _classPrivateFieldLooseBase2.default)(this, _i18nLang)[_i18nLang];
    (0, _classPrivateFieldLooseBase2.default)(this, _icon)[_icon] = settings.icon || (0, _classPrivateFieldLooseBase2.default)(this, _icon)[_icon];
    (0, _classPrivateFieldLooseBase2.default)(this, _locking)[_locking] = settings.locking || (0, _classPrivateFieldLooseBase2.default)(this, _locking)[_locking];
    (0, _classPrivateFieldLooseBase2.default)(this, _prefix)[_prefix] = (0, _util.isUndefined)(settings.prefix) ? (0, _classPrivateFieldLooseBase2.default)(this, _prefix)[_prefix] : settings.prefix;
    (0, _classPrivateFieldLooseBase2.default)(this, _uiMode)[_uiMode] = settings.uiMode || (0, _classPrivateFieldLooseBase2.default)(this, _uiMode)[_uiMode];
    (0, _classPrivateFieldLooseBase2.default)(this, _uiTheme)[_uiTheme] = settings.uiTheme || (0, _classPrivateFieldLooseBase2.default)(this, _uiTheme)[_uiTheme];
    const newValues = this.get();

    _store.default.set('settings', newValues);

    (0, _classPrivateFieldLooseBase2.default)(this, _emitter)[_emitter].emit('change', newValues);
  }

  on(type, cb) {
    (0, _classPrivateFieldLooseBase2.default)(this, _emitter)[_emitter].on(type, cb);
  }

}

exports.Settings = Settings;
const settings = new Settings();
var _default = settings;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/chains.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/chains.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const chains = {
  kusama: ['0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf', // Kusama CC1
  '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636', // Kusama CC2
  '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // Kusama CC3
  ],
  polkadot: ['0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' // Polkadot CC1
  ]
};
var _default = chains;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/crypto.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/crypto.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CRYPTOS_ETH = exports.CRYPTOS = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const CRYPTOS = [{
  info: 'sr25519',
  text: 'Schnorrkel (sr25519, recommended)',
  value: 'sr25519'
}, {
  info: 'ed25519',
  text: 'Edwards (ed25519, alternative)',
  value: 'ed25519'
}, {
  info: 'ecdsa',
  text: 'ECDSA (Non BTC/ETH compatible)',
  value: 'ecdsa'
}];
exports.CRYPTOS = CRYPTOS;
const CRYPTOS_ETH = [{
  info: 'ethereum',
  text: 'ECDSA (ETH compatible)',
  value: 'ethereum'
}];
exports.CRYPTOS_ETH = CRYPTOS_ETH;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/endpoints.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/endpoints.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDPOINT_DEFAULT = exports.ENDPOINTS = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ENDPOINTS = [{
  info: 'local',
  text: 'Local Node (Own, 127.0.0.1:9944)',
  value: 'ws://127.0.0.1:9944/'
}];
exports.ENDPOINTS = ENDPOINTS;
const ENDPOINT_DEFAULT = ENDPOINTS[0];
exports.ENDPOINT_DEFAULT = ENDPOINT_DEFAULT;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/index.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CRYPTOS", {
  enumerable: true,
  get: function () {
    return _crypto.CRYPTOS;
  }
});
Object.defineProperty(exports, "CRYPTOS_ETH", {
  enumerable: true,
  get: function () {
    return _crypto.CRYPTOS_ETH;
  }
});
Object.defineProperty(exports, "ENDPOINTS", {
  enumerable: true,
  get: function () {
    return _endpoints.ENDPOINTS;
  }
});
Object.defineProperty(exports, "ENDPOINT_DEFAULT", {
  enumerable: true,
  get: function () {
    return _endpoints.ENDPOINT_DEFAULT;
  }
});
Object.defineProperty(exports, "LEDGER_CONN", {
  enumerable: true,
  get: function () {
    return _ledger.LEDGER_CONN;
  }
});
Object.defineProperty(exports, "LEDGER_CONN_DEFAULT", {
  enumerable: true,
  get: function () {
    return _ledger.LEDGER_CONN_DEFAULT;
  }
});
Object.defineProperty(exports, "PREFIXES", {
  enumerable: true,
  get: function () {
    return _ss.PREFIXES;
  }
});
Object.defineProperty(exports, "PREFIX_DEFAULT", {
  enumerable: true,
  get: function () {
    return _ss.PREFIX_DEFAULT;
  }
});
Object.defineProperty(exports, "ICON_DEFAULT", {
  enumerable: true,
  get: function () {
    return _ui.ICON_DEFAULT;
  }
});
Object.defineProperty(exports, "ICON_DEFAULT_HOST", {
  enumerable: true,
  get: function () {
    return _ui.ICON_DEFAULT_HOST;
  }
});
Object.defineProperty(exports, "ICONS", {
  enumerable: true,
  get: function () {
    return _ui.ICONS;
  }
});
Object.defineProperty(exports, "UIMODE_DEFAULT", {
  enumerable: true,
  get: function () {
    return _ui.UIMODE_DEFAULT;
  }
});
Object.defineProperty(exports, "UIMODES", {
  enumerable: true,
  get: function () {
    return _ui.UIMODES;
  }
});
Object.defineProperty(exports, "UITHEME_DEFAULT", {
  enumerable: true,
  get: function () {
    return _ui.UITHEME_DEFAULT;
  }
});
Object.defineProperty(exports, "UITHEMES", {
  enumerable: true,
  get: function () {
    return _ui.UITHEMES;
  }
});
exports.LOCKING = exports.LOCKING_DEFAULT = exports.LANGUAGE_DEFAULT = exports.CAMERA = exports.CAMERA_DEFAULT = void 0;

var _crypto = __webpack_require__(/*! ./crypto */ "../../node_modules/@polkadot/ui-settings/defaults/crypto.js");

var _endpoints = __webpack_require__(/*! ./endpoints */ "../../node_modules/@polkadot/ui-settings/defaults/endpoints.js");

var _ledger = __webpack_require__(/*! ./ledger */ "../../node_modules/@polkadot/ui-settings/defaults/ledger.js");

var _ss = __webpack_require__(/*! ./ss58 */ "../../node_modules/@polkadot/ui-settings/defaults/ss58.js");

var _ui = __webpack_require__(/*! ./ui */ "../../node_modules/@polkadot/ui-settings/defaults/ui.js");

// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const CAMERA_DEFAULT = 'off';
exports.CAMERA_DEFAULT = CAMERA_DEFAULT;
const CAMERA = [{
  info: 'on',
  text: 'Allow camera access',
  value: 'on'
}, {
  info: 'off',
  text: 'Do not allow camera access',
  value: 'off'
}];
exports.CAMERA = CAMERA;
const LANGUAGE_DEFAULT = 'default';
exports.LANGUAGE_DEFAULT = LANGUAGE_DEFAULT;
const LOCKING_DEFAULT = 'session';
exports.LOCKING_DEFAULT = LOCKING_DEFAULT;
const LOCKING = [{
  info: 'session',
  text: 'Once per session',
  value: 'session'
}, {
  info: 'tx',
  text: 'On each transaction',
  value: 'tx'
}];
exports.LOCKING = LOCKING;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/ledger.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/ledger.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEDGER_CONN = exports.LEDGER_CONN_DEFAULT = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const LEDGER_CONN_DEFAULT = 'none';
exports.LEDGER_CONN_DEFAULT = LEDGER_CONN_DEFAULT;
const LEDGER_CONN = [{
  info: 'none',
  text: 'Do not attach Ledger devices',
  value: 'none'
}, // Deprecated
// {
//   info: 'u2f',
//   text: 'Attach Ledger via U2F',
//   value: 'u2f'
// },
{
  info: 'webusb',
  text: 'Attach Ledger via WebUSB',
  value: 'webusb'
}];
exports.LEDGER_CONN = LEDGER_CONN;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/ss58.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/ss58.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PREFIXES = exports.PREFIX_DEFAULT = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const PREFIX_DEFAULT = -1;
exports.PREFIX_DEFAULT = PREFIX_DEFAULT;
const PREFIXES = [{
  info: 'default',
  text: 'Default for the connected node',
  value: -1
}, // keep as first (well, after default)
{
  info: 'substrate',
  text: 'Substrate (generic)',
  value: 42
}, // all in ascending order based on value
{
  info: 'polkadot',
  text: 'Polkadot (live)',
  value: 0
}, {
  info: 'kusama',
  text: 'Kusama (canary)',
  value: 2
}, {
  info: 'edgeware',
  text: 'Edgeware (live)',
  value: 7
}, {
  info: 'kulupu',
  text: 'Kulupu (live)',
  value: 16
}, {
  info: 'subsocial',
  text: 'Subsocial (live)',
  value: 28
}];
exports.PREFIXES = PREFIXES;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/type.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/type.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPolkadot = void 0;
// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
// matches https://polkadot.js.org & https://*.polkadot.io
const isPolkadot = typeof window !== 'undefined' && window.location.host.includes('polkadot');
exports.isPolkadot = isPolkadot;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/defaults/ui.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/defaults/ui.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UITHEMES = exports.UITHEME_DEFAULT = exports.UIMODES = exports.UIMODE_DEFAULT = exports.LANGUAGE_DEFAULT = exports.ICONS = exports.ICON_DEFAULT_HOST = exports.ICON_DEFAULT = void 0;

var _type = __webpack_require__(/*! ./type */ "../../node_modules/@polkadot/ui-settings/defaults/type.js");

// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
const LANGUAGE_DEFAULT = 'default';
exports.LANGUAGE_DEFAULT = LANGUAGE_DEFAULT;
const UIMODE_DEFAULT = !_type.isPolkadot && typeof window !== 'undefined' && window.location.host.includes('ui-light') ? 'light' : 'full';
exports.UIMODE_DEFAULT = UIMODE_DEFAULT;
const UIMODES = [{
  info: 'full',
  text: 'Fully featured',
  value: 'full'
}, {
  info: 'light',
  text: 'Basic features only',
  value: 'light'
}];
exports.UIMODES = UIMODES;
const UITHEME_DEFAULT = _type.isPolkadot ? 'polkadot' : 'substrate';
exports.UITHEME_DEFAULT = UITHEME_DEFAULT;
const UITHEMES = [{
  info: 'polkadot',
  text: 'Polkadot',
  value: 'polkadot'
}, {
  info: 'substrate',
  text: 'Substrate',
  value: 'substrate'
}];
exports.UITHEMES = UITHEMES;
const ICON_DEFAULT = 'default';
exports.ICON_DEFAULT = ICON_DEFAULT;
const ICON_DEFAULT_HOST = _type.isPolkadot ? 'polkadot' : 'substrate';
exports.ICON_DEFAULT_HOST = ICON_DEFAULT_HOST;
const ICONS = [{
  info: 'default',
  text: 'Default for the connected node',
  value: 'default'
}, {
  info: 'polkadot',
  text: 'Polkadot',
  value: 'polkadot'
}, {
  info: 'substrate',
  text: 'Substrate',
  value: 'substrate'
}, {
  info: 'beachball',
  text: 'Beachball',
  value: 'beachball'
}];
exports.ICONS = ICONS;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Settings", {
  enumerable: true,
  get: function () {
    return _Settings.Settings;
  }
});
Object.defineProperty(exports, "ENDPOINT_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.ENDPOINT_DEFAULT;
  }
});
Object.defineProperty(exports, "ICON_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.ICON_DEFAULT;
  }
});
Object.defineProperty(exports, "ICON_DEFAULT_HOST", {
  enumerable: true,
  get: function () {
    return _defaults.ICON_DEFAULT_HOST;
  }
});
Object.defineProperty(exports, "LANGUAGE_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.LANGUAGE_DEFAULT;
  }
});
Object.defineProperty(exports, "LOCKING_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.LOCKING_DEFAULT;
  }
});
Object.defineProperty(exports, "PREFIX_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.PREFIX_DEFAULT;
  }
});
Object.defineProperty(exports, "UIMODE_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.UIMODE_DEFAULT;
  }
});
Object.defineProperty(exports, "UITHEME_DEFAULT", {
  enumerable: true,
  get: function () {
    return _defaults.UITHEME_DEFAULT;
  }
});
Object.defineProperty(exports, "SettingsStruct", {
  enumerable: true,
  get: function () {
    return _types.SettingsStruct;
  }
});
Object.defineProperty(exports, "NetworkSpecsStruct", {
  enumerable: true,
  get: function () {
    return _types.NetworkSpecsStruct;
  }
});
exports.default = void 0;

var _Settings = _interopRequireWildcard(__webpack_require__(/*! ./Settings */ "../../node_modules/@polkadot/ui-settings/Settings.js"));

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/ui-settings/defaults/index.js");

var _types = __webpack_require__(/*! ./types */ "../../node_modules/@polkadot/ui-settings/types.js");

// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = _Settings.default;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-settings/types.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-settings/types.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/colors.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/colors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = colors;

var _color = _interopRequireDefault(__webpack_require__(/*! color */ "../../node_modules/color/index.js"));

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/ui-shared/icons/beachball/defaults.js");

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
const WOBBLE = 30;

function colors(seeder) {
  const amount = seeder() * WOBBLE - WOBBLE / 2;

  const all = _defaults.COLORS.map(hex => (0, _color.default)(hex).rotate(amount));

  return (alpha = 1) => {
    const index = Math.floor(all.length * seeder());
    return all.splice(index, 1)[0].alpha(alpha).string();
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/container.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/container.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = container;

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
function container(diameter, background = 'white', className = '', _style = {}) {
  const element = document.createElement('div');
  const style = Object.assign({
    background,
    borderRadius: `${diameter / 2}px`,
    display: 'inline-block',
    height: `${diameter}px`,
    margin: '0px',
    overflow: 'hidden',
    padding: '0px',
    width: `${diameter}px`
  }, _style);
  element.className = className;
  element.style.background = background;
  Object.keys(style).forEach(key => {
    element.style[key] = style[key];
  });
  return element;
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/defaults.js":
/*!*******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/defaults.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHAPE_COUNT = exports.COLORS = void 0;
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
const COLORS = [// https://sashat.me/2017/01/11/list-of-20-simple-distinct-colors/
'#ffe119', '#4363d8', '#f58231', '#fabebe', '#e6beff', '#800000', '#000075', '#a9a9a9', '#ffffff', '#000000'];
exports.COLORS = COLORS;
const SHAPE_COUNT = 5;
exports.SHAPE_COUNT = SHAPE_COUNT;

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/index.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;

var _colors = _interopRequireDefault(__webpack_require__(/*! ./colors */ "../../node_modules/@polkadot/ui-shared/icons/beachball/colors.js"));

var _container = _interopRequireDefault(__webpack_require__(/*! ./container */ "../../node_modules/@polkadot/ui-shared/icons/beachball/container.js"));

var _seeder = _interopRequireDefault(__webpack_require__(/*! ./seeder */ "../../node_modules/@polkadot/ui-shared/icons/beachball/seeder.js"));

var _circle = _interopRequireDefault(__webpack_require__(/*! ./shape/circle */ "../../node_modules/@polkadot/ui-shared/icons/beachball/shape/circle.js"));

var _element = _interopRequireDefault(__webpack_require__(/*! ./svg/element */ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/element.js"));

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/ui-shared/icons/beachball/defaults.js");

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
function generate(seed, {
  size = 256
}, className = '', style) {
  const seeder = (0, _seeder.default)(seed);
  const colorGen = (0, _colors.default)(seeder);
  const outer = (0, _container.default)(size, 'white', className, style);
  const container = (0, _container.default)(size, colorGen());
  const svg = (0, _element.default)(size);
  outer.appendChild(container);
  container.appendChild(svg);

  for (let count = 0; count < _defaults.SHAPE_COUNT; count++) {
    const fill = colorGen();
    const shape = (0, _circle.default)(seeder, fill, size, count);
    svg.appendChild(shape);
  }

  return outer;
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/seeder.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/seeder.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seeder;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DIVISOR = 256 * 256;

function seeder(_seed = new Uint8Array(32)) {
  const seed = (0, _util.isU8a)(_seed) ? _seed : (0, _util.stringToU8a)(_seed);
  let index = seed[Math.floor(seed.length / 2)] % seed.length - 1;

  const next = () => {
    index += 1;

    if (index === seed.length) {
      index = 0;
    }

    return seed[index];
  };

  return () => {
    return (next() * 256 + next()) / DIVISOR;
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/shape/circle.js":
/*!***********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/shape/circle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = circle;

var _circle = _interopRequireDefault(__webpack_require__(/*! ../svg/circle */ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/circle.js"));

var _defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/@polkadot/ui-shared/icons/beachball/defaults.js");

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
function circle(seeder, fill, diameter, count) {
  const center = diameter / 2;
  const angle = seeder() * 360;
  const radius = (_defaults.SHAPE_COUNT - count) / _defaults.SHAPE_COUNT * (diameter / 2) + diameter / 8 * seeder();

  const offset = diameter / 4 * (seeder() + (count + 1) / _defaults.SHAPE_COUNT);

  const cx = offset * Math.sin(angle) + center;
  const cy = offset * Math.cos(angle) + center;
  const svg = (0, _circle.default)(radius, cx, cy);
  svg.setAttributeNS('', 'fill', fill);
  return svg;
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/circle.js":
/*!*********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/svg/circle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = circle;

var _svg = _interopRequireDefault(__webpack_require__(/*! ./svg */ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/svg.js"));

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
function circle(r, cx, cy) {
  const elem = (0, _svg.default)('circle');
  elem.setAttributeNS('', 'cx', `${cx}`);
  elem.setAttributeNS('', 'cy', `${cy}`);
  elem.setAttributeNS('', 'r', `${r}`);
  return elem;
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/element.js":
/*!**********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/svg/element.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = element;

var _svg = _interopRequireDefault(__webpack_require__(/*! ./svg */ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/svg.js"));

// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
function element(size, type = 'svg', x = 0, y = 0) {
  const elem = (0, _svg.default)(type);
  elem.setAttributeNS('', 'x', `${x}`);
  elem.setAttributeNS('', 'y', `${y}`);
  elem.setAttributeNS('', 'width', `${size}`);
  elem.setAttributeNS('', 'height', `${size}`);
  return elem;
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/beachball/svg/svg.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/beachball/svg/svg.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = svg;
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2016 Dan Finlay
const SVG_NS = 'http://www.w3.org/2000/svg';

function svg(type) {
  return document.createElementNS(SVG_NS, type);
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/index.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "beachballIcon", {
  enumerable: true,
  get: function () {
    return _beachball.default;
  }
});
Object.defineProperty(exports, "polkadotIcon", {
  enumerable: true,
  get: function () {
    return _polkadot.default;
  }
});

var _beachball = _interopRequireDefault(__webpack_require__(/*! ./beachball */ "../../node_modules/@polkadot/ui-shared/icons/beachball/index.js"));

var _polkadot = _interopRequireDefault(__webpack_require__(/*! ./polkadot */ "../../node_modules/@polkadot/ui-shared/icons/polkadot.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/icons/polkadot.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/icons/polkadot.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

// Copyright 2018-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx
const blake2 = value => (0, _utilCrypto.blake2AsU8a)(value, 512);

const S = 64;
const C = S / 2;
const Z = S / 64 * 5;
const ZERO = blake2(new Uint8Array(32));
/* eslint-disable sort-keys */

const SCHEMA = {
  target: {
    colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1],
    freq: 1
  },
  cube: {
    colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5],
    freq: 20
  },
  quazar: {
    colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0],
    freq: 16
  },
  flower: {
    colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3],
    freq: 32
  },
  cyclic: {
    colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6],
    freq: 32
  },
  vmirror: {
    colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10],
    freq: 128
  },
  hmirror: {
    colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11],
    freq: 128
  }
};
/* eslint-enable sort-keys */

const OUTER_CIRCLE = {
  cx: C,
  cy: C,
  fill: '#eee',
  r: C
};

function getRotation(isSixPoint) {
  const r = isSixPoint ? C / 8 * 5 : C / 4 * 3;
  const rroot3o2 = r * Math.sqrt(3) / 2;
  const ro2 = r / 2;
  const rroot3o4 = r * Math.sqrt(3) / 4;
  const ro4 = r / 4;
  const r3o4 = r * 3 / 4;
  return {
    r,
    r3o4,
    ro2,
    ro4,
    rroot3o2,
    rroot3o4
  };
}

function getCircleXY(isSixPoint) {
  const {
    r,
    r3o4,
    ro2,
    ro4,
    rroot3o2,
    rroot3o4
  } = getRotation(isSixPoint);
  return [[C, C - r], [C, C - ro2], [C - rroot3o4, C - r3o4], [C - rroot3o2, C - ro2], [C - rroot3o4, C - ro4], [C - rroot3o2, C], [C - rroot3o2, C + ro2], [C - rroot3o4, C + ro4], [C - rroot3o4, C + r3o4], [C, C + r], [C, C + ro2], [C + rroot3o4, C + r3o4], [C + rroot3o2, C + ro2], [C + rroot3o4, C + ro4], [C + rroot3o2, C], [C + rroot3o2, C - ro2], [C + rroot3o4, C - ro4], [C + rroot3o4, C - r3o4], [C, C]];
}

function findScheme(d) {
  let cum = 0;
  const schema = Object.values(SCHEMA).find(schema => {
    cum += schema.freq;
    return d < cum;
  });

  if (!schema) {
    throw new Error('Unable to find schema');
  }

  return schema;
}

function addressToId(address) {
  return blake2((0, _utilCrypto.decodeAddress)(address)).map((x, i) => (x + 256 - ZERO[i]) % 256);
}

function getColors(address) {
  const total = Object.values(SCHEMA).map(s => s.freq).reduce((a, b) => a + b);
  const id = addressToId(address);
  const d = Math.floor((id[30] + id[31] * 256) % total);
  const rot = id[28] % 6 * 3;
  const sat = Math.floor(id[29] * 70 / 256 + 26) % 80 + 30;
  const scheme = findScheme(d);
  const palette = Array.from(id).map((x, i) => {
    const b = (x + i % 28 * 58) % 256;

    if (b === 0) {
      return '#444';
    } else if (b === 255) {
      return 'transparent';
    }

    const h = Math.floor(b % 64 * 360 / 64);
    const l = [53, 15, 35, 75][Math.floor(b / 64)];
    return `hsl(${h}, ${sat}%, ${l}%)`;
  });
  return scheme.colors.map((_, i) => palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]);
}
/**
 * @description Generate a array of the circles that make up an identicon
 */


function generate(address, {
  isAlternative
}) {
  const colors = getColors(address);
  return [OUTER_CIRCLE].concat(getCircleXY(isAlternative).map(([cx, cy], index) => ({
    cx,
    cy,
    fill: colors[index],
    r: Z
  })));
}

/***/ }),

/***/ "../../node_modules/@polkadot/ui-shared/index.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/ui-shared/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "../../node_modules/@polkadot/ui-shared/icons/index.js");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _icons[key];
    }
  });
});

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/check.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/check.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = check;

var _decode = _interopRequireDefault(__webpack_require__(/*! ../base58/decode */ "../../node_modules/@polkadot/util-crypto/base58/decode.js"));

var _checkChecksum = _interopRequireDefault(__webpack_require__(/*! ./checkChecksum */ "../../node_modules/@polkadot/util-crypto/address/checkChecksum.js"));

var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/address/defaults.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name checkAddress
 * @summary Validates an ss58 address.
 * @description
 * From the provided input, validate that the address is a valid input.
 */
function check(address, prefix) {
  let decoded;

  try {
    decoded = (0, _decode.default)(address);
  } catch (error) {
    return [false, error.message];
  }

  if (decoded[0] !== prefix) {
    return [false, `Prefix mismatch, expected ${prefix}, found ${decoded[0]}`];
  } else if (!_defaults.default.allowedEncodedLengths.includes(decoded.length)) {
    return [false, 'Invalid decoded address length'];
  }

  const [isValid] = (0, _checkChecksum.default)(decoded);
  return [isValid, isValid ? null : 'Invalid decoded address checksum'];
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/checkChecksum.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/checkChecksum.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkChecksum;

var _sshash = _interopRequireDefault(__webpack_require__(/*! ./sshash */ "../../node_modules/@polkadot/util-crypto/address/sshash.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function checkChecksum(decoded) {
  const isPublicKey = [35, 36].includes(decoded.length); // non-publicKeys has 1 byte checksums, else default to 2

  const length = decoded.length - (isPublicKey ? 2 : 1); // calculate the hash and do the checksum byte checks

  const hash = (0, _sshash.default)(decoded.subarray(0, length)); // see if the hash actually matches

  const isValid = isPublicKey ? decoded[decoded.length - 2] === hash[0] && decoded[decoded.length - 1] === hash[1] : decoded[decoded.length - 1] === hash[0];
  return [isValid, length];
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/decode.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/decode.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ../base58/decode */ "../../node_modules/@polkadot/util-crypto/base58/decode.js"));

var _checkChecksum = _interopRequireDefault(__webpack_require__(/*! ./checkChecksum */ "../../node_modules/@polkadot/util-crypto/address/checkChecksum.js"));

var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/address/defaults.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Original implementation: https://github.com/paritytech/polka-ui/blob/4858c094684769080f5811f32b081dd7780b0880/src/polkadot.js#L6
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function decode(encoded, ignoreChecksum, ss58Format = 99) {
  if ((0, _util.isU8a)(encoded) || (0, _util.isHex)(encoded)) {
    return (0, _util.u8aToU8a)(encoded);
  }

  const wrapError = message => `Decoding ${encoded}: ${message}`;

  let decoded;

  try {
    decoded = (0, _decode.default)(encoded);
  } catch (error) {
    throw new Error(wrapError(error.message));
  } // assert(defaults.allowedPrefix.includes(decoded[0] as Prefix), error('Invalid decoded address prefix'));


  (0, _util.assert)(_defaults.default.allowedEncodedLengths.includes(decoded.length), wrapError('Invalid decoded address length')); // TODO Unless it is an "use everywhere" prefix, throw an error
  // if (decoded[0] !== prefix) {
  //   console.log(`WARN: Expected ${prefix}, found ${decoded[0]}`);
  // }

  const [isValid, endPos] = (0, _checkChecksum.default)(decoded);
  (0, _util.assert)(ignoreChecksum || isValid, wrapError('Invalid decoded address checksum'));
  return decoded.slice(1, endPos);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/defaults.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/defaults.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ss = __webpack_require__(/*! ./ss58 */ "../../node_modules/@polkadot/util-crypto/address/ss58.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const defaults = {
  allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
  // publicKey has prefix + 2 checksum bytes, short only prefix + 1 checksum byte
  allowedEncodedLengths: [3, 4, 6, 10, 35, 36],
  allowedPrefix: _ss.allowedSS58,
  prefix: 42
};
var _default = defaults;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/derive.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/derive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveAddress;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _key = __webpack_require__(/*! ../key */ "../../node_modules/@polkadot/util-crypto/key/index.js");

var _schnorrkel = __webpack_require__(/*! ../schnorrkel */ "../../node_modules/@polkadot/util-crypto/schnorrkel/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/address/encode.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name deriveAddress
 * @summary Creates a sr25519 derived address from the supplied and path.
 * @description
 * Creates a sr25519 derived address based on the input address/publicKey and the uri supplied.
 */
function deriveAddress(who, suri, ss58Format) {
  const {
    path
  } = (0, _key.keyExtractPath)(suri);
  (0, _util.assert)(path.length && !path.some(path => path.isHard), 'Expected suri to contain a combination of non-hard paths');
  return (0, _encode.default)(path.reduce((publicKey, path) => {
    return (0, _schnorrkel.schnorrkelDerivePublic)(publicKey, path.chainCode);
  }, (0, _decode.default)(who)), ss58Format);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/encode.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/encode.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _encode = _interopRequireDefault(__webpack_require__(/*! ../base58/encode */ "../../node_modules/@polkadot/util-crypto/base58/encode.js"));

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/address/defaults.js"));

var _sshash = _interopRequireDefault(__webpack_require__(/*! ./sshash */ "../../node_modules/@polkadot/util-crypto/address/sshash.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Original implementation: https://github.com/paritytech/polka-ui/blob/4858c094684769080f5811f32b081dd7780b0880/src/polkadot.js#L34
function encode(_key, ss58Format = _defaults.default.prefix) {
  // decode it, this means we can re-encode an address
  const key = (0, _decode.default)(_key);
  (0, _util.assert)(_defaults.default.allowedDecodedLengths.includes(key.length), `Expected a valid key to convert, with length ${_defaults.default.allowedDecodedLengths.join(', ')}`);
  const isPublicKey = [32, 33].includes(key.length);
  const input = (0, _util.u8aConcat)(new Uint8Array([ss58Format]), key);
  const hash = (0, _sshash.default)(input);
  return (0, _encode.default)((0, _util.u8aConcat)(input, hash.subarray(0, isPublicKey ? 2 : 1)));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/encodeDerived.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/encodeDerived.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeDerivedAddress;

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/address/encode.js"));

var _keyDerived = _interopRequireDefault(__webpack_require__(/*! ./keyDerived */ "../../node_modules/@polkadot/util-crypto/address/keyDerived.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name encodeDerivedAddress
 * @summary Creates a derived address as used in Substrate utility.
 * @description
 * Creates a Substrate derived address based on the input address/publicKey and the index supplied.
 */
function encodeDerivedAddress(who, index, ss58Format) {
  return (0, _encode.default)((0, _keyDerived.default)((0, _decode.default)(who), index), ss58Format);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/encodeMulti.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/encodeMulti.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeMultiAddress;

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/address/encode.js"));

var _keyMulti = _interopRequireDefault(__webpack_require__(/*! ./keyMulti */ "../../node_modules/@polkadot/util-crypto/address/keyMulti.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name encodeMultiAddress
 * @summary Creates a multisig address.
 * @description
 * Creates a Substrate multisig address based on the input address and the required threshold.
 */
function encodeMultiAddress(who, threshold, ss58Format) {
  return (0, _encode.default)((0, _keyMulti.default)(who, threshold), ss58Format);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/eq.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/eq.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addressEq;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name addressEq
 * @summary Compares two addresses, either in ss58, Uint8Array or hex format.
 * @description
 * For the input values, return true is the underlying public keys do match.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aEq } from '@polkadot/util';
 *
 * u8aEq(new Uint8Array([0x68, 0x65]), new Uint8Array([0x68, 0x65])); // true
 * ```
 */
function addressEq(a, b) {
  return (0, _util.u8aEq)((0, _decode.default)(a), (0, _decode.default)(b));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/index.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "checkAddress", {
  enumerable: true,
  get: function () {
    return _check.default;
  }
});
Object.defineProperty(exports, "checkAddressChecksum", {
  enumerable: true,
  get: function () {
    return _checkChecksum.default;
  }
});
Object.defineProperty(exports, "createKeyMulti", {
  enumerable: true,
  get: function () {
    return _keyMulti.default;
  }
});
Object.defineProperty(exports, "createKeyDerived", {
  enumerable: true,
  get: function () {
    return _keyDerived.default;
  }
});
Object.defineProperty(exports, "decodeAddress", {
  enumerable: true,
  get: function () {
    return _decode.default;
  }
});
Object.defineProperty(exports, "deriveAddress", {
  enumerable: true,
  get: function () {
    return _derive.default;
  }
});
Object.defineProperty(exports, "encodeAddress", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "encodeDerivedAddress", {
  enumerable: true,
  get: function () {
    return _encodeDerived.default;
  }
});
Object.defineProperty(exports, "encodeMultiAddress", {
  enumerable: true,
  get: function () {
    return _encodeMulti.default;
  }
});
Object.defineProperty(exports, "addressEq", {
  enumerable: true,
  get: function () {
    return _eq.default;
  }
});
Object.defineProperty(exports, "setSS58Format", {
  enumerable: true,
  get: function () {
    return _setSS58Format.default;
  }
});
Object.defineProperty(exports, "sortAddresses", {
  enumerable: true,
  get: function () {
    return _sort.default;
  }
});

var _check = _interopRequireDefault(__webpack_require__(/*! ./check */ "../../node_modules/@polkadot/util-crypto/address/check.js"));

var _checkChecksum = _interopRequireDefault(__webpack_require__(/*! ./checkChecksum */ "../../node_modules/@polkadot/util-crypto/address/checkChecksum.js"));

var _keyMulti = _interopRequireDefault(__webpack_require__(/*! ./keyMulti */ "../../node_modules/@polkadot/util-crypto/address/keyMulti.js"));

var _keyDerived = _interopRequireDefault(__webpack_require__(/*! ./keyDerived */ "../../node_modules/@polkadot/util-crypto/address/keyDerived.js"));

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _derive = _interopRequireDefault(__webpack_require__(/*! ./derive */ "../../node_modules/@polkadot/util-crypto/address/derive.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/address/encode.js"));

var _encodeDerived = _interopRequireDefault(__webpack_require__(/*! ./encodeDerived */ "../../node_modules/@polkadot/util-crypto/address/encodeDerived.js"));

var _encodeMulti = _interopRequireDefault(__webpack_require__(/*! ./encodeMulti */ "../../node_modules/@polkadot/util-crypto/address/encodeMulti.js"));

var _eq = _interopRequireDefault(__webpack_require__(/*! ./eq */ "../../node_modules/@polkadot/util-crypto/address/eq.js"));

var _setSS58Format = _interopRequireDefault(__webpack_require__(/*! ./setSS58Format */ "../../node_modules/@polkadot/util-crypto/address/setSS58Format.js"));

var _sort = _interopRequireDefault(__webpack_require__(/*! ./sort */ "../../node_modules/@polkadot/util-crypto/address/sort.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/keyDerived.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/keyDerived.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createKeyDerived;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const PREFIX = (0, _util.stringToU8a)('modlpy/utilisuba');

function createKeyDerived(who, index) {
  return (0, _asU8a.default)((0, _util.u8aConcat)(PREFIX, (0, _decode.default)(who), (0, _util.bnToU8a)(index, {
    bitLength: 16,
    isLe: true
  })));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/keyMulti.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/keyMulti.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createKeyMulti;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const PREFIX = (0, _util.stringToU8a)('modlpy/utilisuba');

function createKeyMulti(who, threshold) {
  return (0, _asU8a.default)((0, _util.u8aConcat)(PREFIX, (0, _util.compactToU8a)(who.length), ...(0, _util.u8aSorted)(who.map(who => (0, _decode.default)(who))), (0, _util.bnToU8a)(threshold, {
    bitLength: 16,
    isLe: true
  })));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/setSS58Format.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/setSS58Format.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setSS58Format;

var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/address/defaults.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @description Sets the global SS58 format to use for address encoding
 * @deprecated Use keyring.setSS58Format
 */
function setSS58Format(prefix) {
  _defaults.default.prefix = prefix;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/sort.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/sort.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortAddresses;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/address/encode.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function sortAddresses(addresses, ss58Format) {
  return (0, _util.u8aSorted)(addresses.map(who => (0, _decode.default)(who))).map(u8a => (0, _encode.default)(u8a, ss58Format));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/ss58.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/ss58.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowedSS58 = void 0;
// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const allowedSS58 = [// Polkadot
0, 1, // Kusama
2, 3, // Katal Chain
4, // Kulupu
16, 17, // Dothereum
20, // Dock testnet and mainnet
21, 22, // Substrate default
42, 43, // Substrate BBQ (deprecated)
68, 69];
exports.allowedSS58 = allowedSS58;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/address/sshash.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/address/sshash.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hash;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const SS58_PREFIX = (0, _util.stringToU8a)('SS58PRE');

function hash(key) {
  return (0, _asU8a.default)((0, _util.u8aConcat)(SS58_PREFIX, key), 512);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/bs32.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/bs32.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BITS_PER_CHAR = exports.BASE32_ALPHABET = void 0;
// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// https://github.com/multiformats/js-multibase/blob/master/src/constants.js
const BASE32_ALPHABET = 'abcdefghijklmnopqrstuvwxyz234567';
exports.BASE32_ALPHABET = BASE32_ALPHABET;
const BITS_PER_CHAR = 5;
exports.BITS_PER_CHAR = BITS_PER_CHAR;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/decode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/decode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base32Decode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _bs = __webpack_require__(/*! ./bs32 */ "../../node_modules/@polkadot/util-crypto/base32/bs32.js");

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base32/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// adapted from https://github.com/multiformats/js-multibase/blob/424709195b46ffb1d6f2f69a7707598ebe751e5e/src/rfc4648.js
// Build the character lookup table:
const LOOKUP = _bs.BASE32_ALPHABET.split('').reduce((lookup, char, index) => {
  lookup[char] = index;
  return lookup;
}, {});
/**
 * @name base32Decode
 * @summary Delookup a base32 value.
 * @description
 * From the provided input, decode the base32 and return the result as an `Uint8Array`.
 */


function base32Decode(value, ipfsCompat = false) {
  (0, _validate.default)(value, ipfsCompat);
  const out = new Uint8Array((value.length - (ipfsCompat ? 1 : 0)) * _bs.BITS_PER_CHAR / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;

  for (let i = ipfsCompat ? 1 : 0; i < value.length; ++i) {
    buffer = buffer << _bs.BITS_PER_CHAR | LOOKUP[value[i]];
    bits += _bs.BITS_PER_CHAR;

    if (bits >= 8) {
      bits -= 8;
      out[written++] = 0xff & buffer >> bits;
    }
  }

  (0, _util.assert)(!(bits >= _bs.BITS_PER_CHAR || 0xff & buffer << 8 - bits), 'Unexpected end of data');
  return out;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/encode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/encode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base32Encode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _bs = __webpack_require__(/*! ./bs32 */ "../../node_modules/@polkadot/util-crypto/base32/bs32.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// adapted from https://github.com/multiformats/js-multibase/blob/424709195b46ffb1d6f2f69a7707598ebe751e5e/src/rfc4648.js
const MASK = (1 << _bs.BITS_PER_CHAR) - 1;
/**
 * @name base32Encode
 * @summary Creates a base32 value.
 * @description
 * From the provided input, create the base32 and return the result as a string.
 */

function base32Encode(value, ipfsCompat = false) {
  const u8a = (0, _util.u8aToU8a)(value);
  let out = '';
  let bits = 0;
  let buffer = 0;

  for (let i = 0; i < u8a.length; ++i) {
    buffer = buffer << 8 | u8a[i];
    bits += 8;

    while (bits > _bs.BITS_PER_CHAR) {
      bits -= _bs.BITS_PER_CHAR;
      out += _bs.BASE32_ALPHABET[MASK & buffer >> bits];
    }
  }

  if (bits) {
    out += _bs.BASE32_ALPHABET[MASK & buffer << _bs.BITS_PER_CHAR - bits];
  }

  return ipfsCompat ? `b${out}` : out;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "base32Decode", {
  enumerable: true,
  get: function () {
    return _decode.default;
  }
});
Object.defineProperty(exports, "base32Encode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "base32Validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "isBase32", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/base32/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/base32/encode.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base32/validate.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "../../node_modules/@polkadot/util-crypto/base32/is.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/is.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/is.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase32;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base32/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isBase32(value) {
  try {
    return (0, _validate.default)(value);
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base32/validate.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base32/validate.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base32Validate;

var _validate = __webpack_require__(/*! ../base58/validate */ "../../node_modules/@polkadot/util-crypto/base58/validate.js");

var _bs = __webpack_require__(/*! ./bs32 */ "../../node_modules/@polkadot/util-crypto/base32/bs32.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base32Validate
 * @summary Validates a base32 value.
 * @description
 * Validates the the supplied value is valid base32
 */
function base32Validate(value, ipfsCompat = false) {
  return (0, _validate.validateChars)('base32', _bs.BASE32_ALPHABET, value, ipfsCompat ? 'b' : undefined);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/bs58.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/bs58.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bs58 = exports.BASE58_ALPHABET = void 0;

var _baseX = _interopRequireDefault(__webpack_require__(/*! base-x */ "../../node_modules/base-x/src/index.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// https://github.com/cryptocoinjs/base-x#alphabets
const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
exports.BASE58_ALPHABET = BASE58_ALPHABET;
const bs58 = (0, _baseX.default)(BASE58_ALPHABET);
exports.bs58 = bs58;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/decode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/decode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base58Decode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _bs = __webpack_require__(/*! ./bs58 */ "../../node_modules/@polkadot/util-crypto/base58/bs58.js");

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base58/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base58Decode
 * @summary Decodes a base58 value.
 * @description
 * From the provided input, decode the base58 and return the result as an `Uint8Array`.
 */
function base58Decode(value, ipfsCompat) {
  (0, _validate.default)(value, ipfsCompat);
  return (0, _util.bufferToU8a)(_bs.bs58.decode(value.substr(ipfsCompat ? 1 : 0)));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/encode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/encode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base58Encode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _bs = __webpack_require__(/*! ./bs58 */ "../../node_modules/@polkadot/util-crypto/base58/bs58.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base58Encode
 * @summary Creates a base58 value.
 * @description
 * From the provided input, create the base58 and return the result as a string.
 */
function base58Encode(value, ipfsCompat) {
  const out = _bs.bs58.encode((0, _util.u8aToBuffer)((0, _util.u8aToU8a)(value)));

  return ipfsCompat ? `z${out}` : out;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "base58Decode", {
  enumerable: true,
  get: function () {
    return _decode.default;
  }
});
Object.defineProperty(exports, "base58Encode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "base58Validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "isBase58", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/base58/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/base58/encode.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base58/validate.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "../../node_modules/@polkadot/util-crypto/base58/is.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/is.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/is.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase58;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base58/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isBase58(value, ipfsCompat) {
  try {
    return (0, _validate.default)(value, ipfsCompat);
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base58/validate.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base58/validate.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateChars = validateChars;
exports.default = base58Validate;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _bs = __webpack_require__(/*! ./bs58 */ "../../node_modules/@polkadot/util-crypto/base58/bs58.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function validateChars(type, alphabet, value, startChar) {
  (0, _util.assert)(value, `Expected non-null, non-empty ${type} input`);
  (0, _util.assert)(!startChar || value[0] === startChar, `Expected ${type} to start with '${startChar || ''}'`);

  for (let i = startChar ? 1 : 0; i < value.length; i++) {
    (0, _util.assert)(alphabet.includes(value[i]), `Invalid ${type} character "${value[i]}" (0x${value.charCodeAt(i).toString(16)}) at index ${i}`);
  }

  return true;
}
/**
 * @name base58Validate
 * @summary Validates a base58 value.
 * @description
 * Validates the the supplied value is valid base58
 */


function base58Validate(value, ipfsCompat = false) {
  return validateChars('base58', _bs.BASE58_ALPHABET, value, ipfsCompat ? 'z' : undefined);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/decode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/decode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base64Decode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base64/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base64Decode
 * @summary Decodes a base64 value.
 * @description
 * From the provided input, decode the base64 and return the result as an `Uint8Array`.
 */
function base64Decode(value) {
  (0, _validate.default)(value);
  return (0, _util.bufferToU8a)(Buffer.from(value, 'base64'));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/encode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/encode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base58Encode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base64Encode
 * @summary Creates a base64 value.
 * @description
 * From the provided input, create the base64 and return the result as a string.
 */
function base58Encode(value) {
  return (0, _util.u8aToBuffer)((0, _util.u8aToU8a)(value)).toString('base64');
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "base64Decode", {
  enumerable: true,
  get: function () {
    return _decode.default;
  }
});
Object.defineProperty(exports, "base64Encode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "base64Pad", {
  enumerable: true,
  get: function () {
    return _pad.default;
  }
});
Object.defineProperty(exports, "base64Trim", {
  enumerable: true,
  get: function () {
    return _trim.default;
  }
});
Object.defineProperty(exports, "base64Validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "isBase64", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});

var _decode = _interopRequireDefault(__webpack_require__(/*! ./decode */ "../../node_modules/@polkadot/util-crypto/base64/decode.js"));

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/base64/encode.js"));

var _pad = _interopRequireDefault(__webpack_require__(/*! ./pad */ "../../node_modules/@polkadot/util-crypto/base64/pad.js"));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./trim */ "../../node_modules/@polkadot/util-crypto/base64/trim.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base64/validate.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "../../node_modules/@polkadot/util-crypto/base64/is.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/is.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/is.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/base64/validate.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isBase64(value) {
  try {
    return (0, _validate.default)(value);
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/pad.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/pad.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base64Trim;

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function base64Trim(value) {
  return value.padEnd(value.length + value.length % 4, '=');
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/trim.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/trim.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base64Trim;

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function base64Trim(value) {
  while (value.length && value[value.length - 1] === '=') {
    value = value.slice(0, -1);
  }

  return value;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/base64/validate.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/base64/validate.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base64Validate;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base64Validate
 * @summary Validates a base64 value.
 * @description
 * Validates the the supplied value is valid base64
 */
function base64Validate(value) {
  (0, _util.assert)(value, 'Expected non-null, non-empty base64 input');
  (0, _util.assert)(/^(?:[A-Za-z0-9+/]{2}[A-Za-z0-9+/]{2})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value), 'Invalid base64 encoding');
  return true;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/blake2/asHex.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/blake2/asHex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blake2AsHex;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name blake2AsHex
 * @summary Creates a blake2b hex from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a hex string with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { blake2AsHex } from '@polkadot/util-crypto';
 *
 * blake2AsHex('abc'); // => 0xba80a53f981c4d0d
 * ```
 */
function blake2AsHex(data, bitLength = 256) {
  return (0, _util.u8aToHex)((0, _asU8a.default)(data, bitLength));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/blake2/asU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blake2AsU8a;

var _blakejs = _interopRequireDefault(__webpack_require__(/*! blakejs */ "../../node_modules/blakejs/index.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name blake2AsU8a
 * @summary Creates a blake2b u8a from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a u8a with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { blake2AsU8a } from '@polkadot/util-crypto';
 *
 * blake2AsU8a('abc'); // => [0xba, 0x80, 0xa53, 0xf98, 0x1c, 0x4d, 0x0d]
 * ```
 */
function blake2AsU8a(data, bitLength = 256, key = null, onlyJs = false) {
  const byteLength = Math.ceil(bitLength / 8);
  return (0, _wasmCrypto.isReady)() && !onlyJs ? (0, _wasmCrypto.blake2b)((0, _util.u8aToU8a)(data), (0, _util.u8aToU8a)(key), byteLength) : _blakejs.default.blake2b((0, _util.u8aToU8a)(data), key, byteLength);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/blake2/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/blake2/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "blake2AsHex", {
  enumerable: true,
  get: function () {
    return _asHex.default;
  }
});
Object.defineProperty(exports, "blake2AsU8a", {
  enumerable: true,
  get: function () {
    return _asU8a.default;
  }
});

var _asHex = _interopRequireDefault(__webpack_require__(/*! ./asHex */ "../../node_modules/@polkadot/util-crypto/blake2/asHex.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/ethereum/encode.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/ethereum/encode.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ethereumEncode;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _keccak = __webpack_require__(/*! ../keccak */ "../../node_modules/@polkadot/util-crypto/keccak/index.js");

var _secp256k = __webpack_require__(/*! ../secp256k1 */ "../../node_modules/@polkadot/util-crypto/secp256k1/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function getH160(u8a) {
  if ([33, 65].includes(u8a.length)) {
    u8a = (0, _keccak.keccakAsU8a)((0, _secp256k.secp256k1Expand)(u8a));
  }

  return u8a.slice(-20);
}

function ethereumEncode(addressOrPublic) {
  if (!addressOrPublic) {
    return '0x';
  }

  const u8aAddress = (0, _util.u8aToU8a)(addressOrPublic);
  (0, _util.assert)([20, 32, 33, 65].includes(u8aAddress.length), 'Invalid address or publicKey passed');
  const address = (0, _util.u8aToHex)(getH160(u8aAddress), -1, false);
  const hash = (0, _util.u8aToHex)((0, _keccak.keccakAsU8a)(address), -1, false);
  let result = '';

  for (let index = 0; index < 40; index++) {
    result = `${result}${parseInt(hash[index], 16) > 7 ? address[index].toUpperCase() : address[index]}`;
  }

  return `0x${result}`;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/ethereum/index.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/ethereum/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ethereumEncode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "isEthereumAddress", {
  enumerable: true,
  get: function () {
    return _isAddress.default;
  }
});
Object.defineProperty(exports, "isEthereumChecksum", {
  enumerable: true,
  get: function () {
    return _isChecksum.default;
  }
});

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/ethereum/encode.js"));

var _isAddress = _interopRequireDefault(__webpack_require__(/*! ./isAddress */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js"));

var _isChecksum = _interopRequireDefault(__webpack_require__(/*! ./isChecksum */ "../../node_modules/@polkadot/util-crypto/ethereum/isChecksum.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/ethereum/isAddress.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEthereumAddress;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _isChecksum = _interopRequireDefault(__webpack_require__(/*! ./isChecksum */ "../../node_modules/@polkadot/util-crypto/ethereum/isChecksum.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isEthereumAddress(address) {
  if (!address || address.length !== 42 || !(0, _util.isHex)(address)) {
    return false;
  }

  if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  return (0, _isChecksum.default)(address);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/ethereum/isChecksum.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/ethereum/isChecksum.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEthereumChecksum;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _keccak = __webpack_require__(/*! ../keccak */ "../../node_modules/@polkadot/util-crypto/keccak/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isEthereumChecksum(_address) {
  const address = _address.replace('0x', '');

  const hash = (0, _util.u8aToHex)((0, _keccak.keccakAsU8a)(address.toLowerCase()), -1, false);

  for (let index = 0; index < 40; index++) {
    const char = address[index];
    const hashval = parseInt(hash[index], 16);

    if (hashval > 7 && char !== char.toUpperCase() || hashval <= 7 && char !== char.toLowerCase()) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _init = __webpack_require__(/*! ./init */ "../../node_modules/@polkadot/util-crypto/init.js");

Object.keys(_init).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _init[key];
    }
  });
});

var _address = __webpack_require__(/*! ./address */ "../../node_modules/@polkadot/util-crypto/address/index.js");

Object.keys(_address).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _address[key];
    }
  });
});

var _base = __webpack_require__(/*! ./base32 */ "../../node_modules/@polkadot/util-crypto/base32/index.js");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _base[key];
    }
  });
});

var _base2 = __webpack_require__(/*! ./base58 */ "../../node_modules/@polkadot/util-crypto/base58/index.js");

Object.keys(_base2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _base2[key];
    }
  });
});

var _base3 = __webpack_require__(/*! ./base64 */ "../../node_modules/@polkadot/util-crypto/base64/index.js");

Object.keys(_base3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _base3[key];
    }
  });
});

var _blake = __webpack_require__(/*! ./blake2 */ "../../node_modules/@polkadot/util-crypto/blake2/index.js");

Object.keys(_blake).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _blake[key];
    }
  });
});

var _ethereum = __webpack_require__(/*! ./ethereum */ "../../node_modules/@polkadot/util-crypto/ethereum/index.js");

Object.keys(_ethereum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ethereum[key];
    }
  });
});

var _keccak = __webpack_require__(/*! ./keccak */ "../../node_modules/@polkadot/util-crypto/keccak/index.js");

Object.keys(_keccak).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keccak[key];
    }
  });
});

var _key = __webpack_require__(/*! ./key */ "../../node_modules/@polkadot/util-crypto/key/index.js");

Object.keys(_key).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _key[key];
    }
  });
});

var _mnemonic = __webpack_require__(/*! ./mnemonic */ "../../node_modules/@polkadot/util-crypto/mnemonic/index.js");

Object.keys(_mnemonic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mnemonic[key];
    }
  });
});

var _nacl = __webpack_require__(/*! ./nacl */ "../../node_modules/@polkadot/util-crypto/nacl/index.js");

Object.keys(_nacl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nacl[key];
    }
  });
});

var _pbkdf = __webpack_require__(/*! ./pbkdf2 */ "../../node_modules/@polkadot/util-crypto/pbkdf2/index.js");

Object.keys(_pbkdf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pbkdf[key];
    }
  });
});

var _random = __webpack_require__(/*! ./random */ "../../node_modules/@polkadot/util-crypto/random/index.js");

Object.keys(_random).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _random[key];
    }
  });
});

var _schnorrkel = __webpack_require__(/*! ./schnorrkel */ "../../node_modules/@polkadot/util-crypto/schnorrkel/index.js");

Object.keys(_schnorrkel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _schnorrkel[key];
    }
  });
});

var _scrypt = __webpack_require__(/*! ./scrypt */ "../../node_modules/@polkadot/util-crypto/scrypt/index.js");

Object.keys(_scrypt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scrypt[key];
    }
  });
});

var _secp256k = __webpack_require__(/*! ./secp256k1 */ "../../node_modules/@polkadot/util-crypto/secp256k1/index.js");

Object.keys(_secp256k).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _secp256k[key];
    }
  });
});

var _sha = __webpack_require__(/*! ./sha512 */ "../../node_modules/@polkadot/util-crypto/sha512/index.js");

Object.keys(_sha).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sha[key];
    }
  });
});

var _signature = __webpack_require__(/*! ./signature */ "../../node_modules/@polkadot/util-crypto/signature/index.js");

Object.keys(_signature).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _signature[key];
    }
  });
});

var _xxhash = __webpack_require__(/*! ./xxhash */ "../../node_modules/@polkadot/util-crypto/xxhash/index.js");

Object.keys(_xxhash).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xxhash[key];
    }
  });
});

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/init.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/init.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cryptoIsReady = cryptoIsReady;
exports.cryptoWaitReady = cryptoWaitReady;

var _wasmCrypto = _interopRequireDefault(__webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function cryptoIsReady() {
  return _wasmCrypto.default.isReady();
}

function cryptoWaitReady() {
  return _wasmCrypto.default.waitReady().then(() => true).catch(error => {
    console.error('Unable to initialize @polkadot/util-crypto', error);
    return false;
  });
} // start init process immediately


cryptoWaitReady().catch(() => {// shouldn't happen, logged above
});

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/keccak/asHex.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/keccak/asHex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keccakAsHex;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/keccak/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name keccakAsHex
 * @summary Creates a keccak hex string from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsHex } from '@polkadot/util-crypto';
 *
 * keccakAsHex('123'); // => 0x...
 * ```
 */
function keccakAsHex(value) {
  return (0, _util.u8aToHex)((0, _asU8a.default)(value));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/keccak/asU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/keccak/asU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keccakAsU8a;

var _jsSha = _interopRequireDefault(__webpack_require__(/*! js-sha3 */ "../../node_modules/js-sha3/src/sha3.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name keccakAsU8a
 * @summary Creates a keccak Uint8Array from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsU8a } from '@polkadot/util-crypto';
 *
 * keccakAsU8a('123'); // => Uint8Array
 * ```
 */
function keccakAsU8a(value) {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.keccak256)((0, _util.u8aToU8a)(value)) : new Uint8Array(_jsSha.default.keccak256.update((0, _util.u8aToU8a)(value)).arrayBuffer());
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/keccak/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/keccak/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "keccakAsHex", {
  enumerable: true,
  get: function () {
    return _asHex.default;
  }
});
Object.defineProperty(exports, "keccakAsU8a", {
  enumerable: true,
  get: function () {
    return _asU8a.default;
  }
});

var _asHex = _interopRequireDefault(__webpack_require__(/*! ./asHex */ "../../node_modules/@polkadot/util-crypto/keccak/asHex.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/keccak/asU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/DeriveJunction.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/DeriveJunction.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const RE_NUMBER = /^\d+$/;
const JUNCTION_ID_LEN = 32;
const BN_OPTIONS = {
  bitLength: 256,
  isLe: true
};

var _chainCode = (0, _classPrivateFieldLooseKey2.default)("chainCode");

var _isHard = (0, _classPrivateFieldLooseKey2.default)("isHard");

class DeriveJunction {
  constructor() {
    Object.defineProperty(this, _chainCode, {
      writable: true,
      value: new Uint8Array(32)
    });
    Object.defineProperty(this, _isHard, {
      writable: true,
      value: false
    });
  }

  static from(value) {
    const result = new DeriveJunction();
    const [code, isHard] = value.startsWith('/') ? [value.substr(1), true] : [value, false];
    result.soft(RE_NUMBER.test(code) ? parseInt(code, 10) : code);
    return isHard ? result.harden() : result;
  }

  get chainCode() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _chainCode)[_chainCode];
  }

  get isHard() {
    return (0, _classPrivateFieldLooseBase2.default)(this, _isHard)[_isHard];
  }

  get isSoft() {
    return !(0, _classPrivateFieldLooseBase2.default)(this, _isHard)[_isHard];
  }

  hard(value) {
    return this.soft(value).harden();
  }

  harden() {
    (0, _classPrivateFieldLooseBase2.default)(this, _isHard)[_isHard] = true;
    return this;
  }

  soft(value) {
    if ((0, _util.isNumber)(value) || (0, _util.isBn)(value) || (0, _util.isBigInt)(value)) {
      return this.soft((0, _util.bnToHex)(value, BN_OPTIONS));
    } else if ((0, _util.isString)(value)) {
      return (0, _util.isHex)(value) ? this.soft((0, _util.hexToU8a)(value)) : this.soft((0, _util.compactAddLength)((0, _util.stringToU8a)(value)));
    }

    if (value.length > JUNCTION_ID_LEN) {
      return this.soft((0, _asU8a.default)(value));
    }

    (0, _classPrivateFieldLooseBase2.default)(this, _chainCode)[_chainCode].fill(0);

    (0, _classPrivateFieldLooseBase2.default)(this, _chainCode)[_chainCode].set(value, 0);

    return this;
  }

  soften() {
    (0, _classPrivateFieldLooseBase2.default)(this, _isHard)[_isHard] = false;
    return this;
  }

}

exports.default = DeriveJunction;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/extractPath.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/extractPath.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyExtractPath;

var _DeriveJunction = _interopRequireDefault(__webpack_require__(/*! ./DeriveJunction */ "../../node_modules/@polkadot/util-crypto/key/DeriveJunction.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const RE_JUNCTION = /\/(\/?)([^/]+)/g;

/**
 * @description Extract derivation junctions from the supplied path
 */
function keyExtractPath(derivePath) {
  const parts = derivePath.match(RE_JUNCTION);
  const path = [];
  let constructed = '';

  if (parts) {
    constructed = parts.join('');
    parts.forEach(value => {
      path.push(_DeriveJunction.default.from(value.substr(1)));
    });
  }

  (0, _util.assert)(constructed === derivePath, `Re-constructed path "${constructed}" does not match input`);
  return {
    parts,
    path
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/extractSuri.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/extractSuri.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyExtract;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _extractPath = _interopRequireDefault(__webpack_require__(/*! ./extractPath */ "../../node_modules/@polkadot/util-crypto/key/extractPath.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const RE_CAPTURE = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/;
/**
 * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).
 */

function keyExtract(suri) {
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const matches = suri.match(RE_CAPTURE);
  (0, _util.assert)(!(0, _util.isNull)(matches), 'Unable to match provided value to a secret URI');
  const [, phrase,, derivePath,,, password] = matches;
  const {
    path
  } = (0, _extractPath.default)(derivePath);
  return {
    password,
    path,
    phrase
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/fromPath.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/fromPath.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyFromPath;

var _hdkdEd = _interopRequireDefault(__webpack_require__(/*! ./hdkdEd25519 */ "../../node_modules/@polkadot/util-crypto/key/hdkdEd25519.js"));

var _hdkdSr = _interopRequireDefault(__webpack_require__(/*! ./hdkdSr25519 */ "../../node_modules/@polkadot/util-crypto/key/hdkdSr25519.js"));

var _hdkdEcdsa = _interopRequireDefault(__webpack_require__(/*! ./hdkdEcdsa */ "../../node_modules/@polkadot/util-crypto/key/hdkdEcdsa.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const generators = {
  ecdsa: _hdkdEcdsa.default,
  ed25519: _hdkdEd.default,
  // FIXME This is Substrate-compatible, not Ethereum-compatible
  ethereum: _hdkdEcdsa.default,
  sr25519: _hdkdSr.default
};

function keyFromPath(pair, path, type) {
  const keyHdkd = generators[type];
  return path.reduce((pair, junction) => {
    return keyHdkd(pair, junction);
  }, pair);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/hdkdEcdsa.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/hdkdEcdsa.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyHdkdEcdsa;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _deriveHard = _interopRequireDefault(__webpack_require__(/*! ../secp256k1/deriveHard */ "../../node_modules/@polkadot/util-crypto/secp256k1/deriveHard.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ../secp256k1/keypair/fromSeed */ "../../node_modules/@polkadot/util-crypto/secp256k1/keypair/fromSeed.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function keyHdkdEcdsa(keypair, {
  chainCode,
  isHard
}) {
  (0, _util.assert)(isHard, 'A soft key was found in the path (and is unsupported)');
  return (0, _fromSeed.default)((0, _deriveHard.default)(keypair.secretKey.subarray(0, 32), chainCode));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/hdkdEd25519.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/hdkdEd25519.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyHdkdEd25519;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _deriveHard = _interopRequireDefault(__webpack_require__(/*! ../nacl/deriveHard */ "../../node_modules/@polkadot/util-crypto/nacl/deriveHard.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ../nacl/keypair/fromSeed */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSeed.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function keyHdkdEd25519(keypair, {
  chainCode,
  isHard
}) {
  (0, _util.assert)(isHard, 'A soft key was found in the path (and is unsupported)');
  return (0, _fromSeed.default)((0, _deriveHard.default)(keypair.secretKey.subarray(0, 32), chainCode));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/hdkdSr25519.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/hdkdSr25519.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyHdkdSr25519;

var _deriveHard = _interopRequireDefault(__webpack_require__(/*! ../schnorrkel/deriveHard */ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveHard.js"));

var _deriveSoft = _interopRequireDefault(__webpack_require__(/*! ../schnorrkel/deriveSoft */ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveSoft.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function keyHdkdSr25519(keypair, {
  chainCode,
  isSoft
}) {
  return isSoft ? (0, _deriveSoft.default)(keypair, chainCode) : (0, _deriveHard.default)(keypair, chainCode);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/key/index.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/key/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "keyExtractPath", {
  enumerable: true,
  get: function () {
    return _extractPath.default;
  }
});
Object.defineProperty(exports, "keyExtractSuri", {
  enumerable: true,
  get: function () {
    return _extractSuri.default;
  }
});
Object.defineProperty(exports, "keyFromPath", {
  enumerable: true,
  get: function () {
    return _fromPath.default;
  }
});
Object.defineProperty(exports, "keyHdkdEd25519", {
  enumerable: true,
  get: function () {
    return _hdkdEd.default;
  }
});
Object.defineProperty(exports, "keyHdkdSr25519", {
  enumerable: true,
  get: function () {
    return _hdkdEd.default;
  }
});
Object.defineProperty(exports, "keyHdkdEcdsa", {
  enumerable: true,
  get: function () {
    return _hdkdEcdsa.default;
  }
});

var _extractPath = _interopRequireDefault(__webpack_require__(/*! ./extractPath */ "../../node_modules/@polkadot/util-crypto/key/extractPath.js"));

var _extractSuri = _interopRequireDefault(__webpack_require__(/*! ./extractSuri */ "../../node_modules/@polkadot/util-crypto/key/extractSuri.js"));

var _fromPath = _interopRequireDefault(__webpack_require__(/*! ./fromPath */ "../../node_modules/@polkadot/util-crypto/key/fromPath.js"));

var _hdkdEd = _interopRequireDefault(__webpack_require__(/*! ./hdkdEd25519 */ "../../node_modules/@polkadot/util-crypto/key/hdkdEd25519.js"));

var _hdkdEcdsa = _interopRequireDefault(__webpack_require__(/*! ./hdkdEcdsa */ "../../node_modules/@polkadot/util-crypto/key/hdkdEcdsa.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/generate.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/generate.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mnemonicGenerate;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _bip = __webpack_require__(/*! bip39 */ "../../node_modules/bip39/src/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// mapping of words to the actual strength (as expected)
const STRENGTH_MAP = {
  12: 16 * 8,
  15: 20 * 8,
  18: 24 * 8,
  21: 28 * 8,
  24: 32 * 8
};
/**
 * @name mnemonicGenerate
 * @summary Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate } from '@polkadot/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * ```
 */

function mnemonicGenerate(numWords = 12) {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39Generate)(numWords) : (0, _bip.generateMnemonic)(STRENGTH_MAP[numWords]);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/index.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mnemonicToBip39", {
  enumerable: true,
  get: function () {
    return _toBip.default;
  }
});
Object.defineProperty(exports, "mnemonicGenerate", {
  enumerable: true,
  get: function () {
    return _generate.default;
  }
});
Object.defineProperty(exports, "mnemonicToEntropy", {
  enumerable: true,
  get: function () {
    return _toEntropy.default;
  }
});
Object.defineProperty(exports, "mnemonicToMiniSecret", {
  enumerable: true,
  get: function () {
    return _toMiniSecret.default;
  }
});
Object.defineProperty(exports, "mnemonicValidate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _toBip = _interopRequireDefault(__webpack_require__(/*! ./toBip39 */ "../../node_modules/@polkadot/util-crypto/mnemonic/toBip39.js"));

var _generate = _interopRequireDefault(__webpack_require__(/*! ./generate */ "../../node_modules/@polkadot/util-crypto/mnemonic/generate.js"));

var _toEntropy = _interopRequireDefault(__webpack_require__(/*! ./toEntropy */ "../../node_modules/@polkadot/util-crypto/mnemonic/toEntropy.js"));

var _toMiniSecret = _interopRequireDefault(__webpack_require__(/*! ./toMiniSecret */ "../../node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate */ "../../node_modules/@polkadot/util-crypto/mnemonic/validate.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/toBip39.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/toBip39.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBip39;

var _bip = __webpack_require__(/*! bip39 */ "../../node_modules/bip39/src/index.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name toSeed
 * @summary Creates a valid Ethereum/Bitcoin-compatible seed from a mnemonic input
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicToBip39, mnemonicValidate } from '@polkadot/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 *
 * if (isValidMnemonic) {
 *   console.log(`Seed generated from mnemonic: ${mnemonicToBip39(mnemonic)}`); => u8a
 * }
 * ```
 */
function toBip39(mnemonic, password = '') {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39ToSeed)(mnemonic, password) : (0, _util.bufferToU8a)((0, _bip.mnemonicToSeedSync)(mnemonic, password)).subarray(0, 32);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/toEntropy.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/toEntropy.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toEntropy;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _bip = __webpack_require__(/*! bip39 */ "../../node_modules/bip39/src/index.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function toEntropy(mnemonic) {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39ToEntropy)(mnemonic) : (0, _util.hexToU8a)((0, _util.hexAddPrefix)((0, _bip.mnemonicToEntropy)(mnemonic)));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toMiniSecret;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _pbkdf = __webpack_require__(/*! pbkdf2 */ "../../node_modules/pbkdf2/browser.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _toEntropy = _interopRequireDefault(__webpack_require__(/*! ./toEntropy */ "../../node_modules/@polkadot/util-crypto/mnemonic/toEntropy.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function toMiniSecret(mnemonic, password = '') {
  if ((0, _wasmCrypto.isReady)()) {
    return (0, _wasmCrypto.bip39ToMiniSecret)(mnemonic, password);
  }

  const entropy = (0, _util.u8aToBuffer)((0, _toEntropy.default)(mnemonic));
  const salt = (0, _util.u8aToBuffer)((0, _util.stringToU8a)(`mnemonic${password}`)); // return the first 32 bytes as the seed

  return (0, _util.bufferToU8a)((0, _pbkdf.pbkdf2Sync)(entropy, salt, 2048, 64, 'sha512')).slice(0, 32);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/mnemonic/validate.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/mnemonic/validate.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mnemonicValidate;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _bip = __webpack_require__(/*! bip39 */ "../../node_modules/bip39/src/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name mnemonicValidate
 * @summary Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicValidate } from '@polkadot/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 * ```
 */
function mnemonicValidate(mnemonic) {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39Validate)(mnemonic) : (0, _bip.validateMnemonic)(mnemonic);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/box/fromSecret.js":
/*!****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/box/fromSecret.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclBoxKeypairFromSecret;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclBoxKeypairFromSecret
 * @summary Creates a new public/secret box keypair from a secret.
 * @description
 * Returns a object containing a box `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclBoxKeypairFromSecret } from '@polkadot/util-crypto';
 *
 * naclBoxKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
function naclBoxKeypairFromSecret(secret) {
  return _tweetnacl.default.box.keyPair.fromSecretKey(secret.slice(0, 32));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/decrypt.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/decrypt.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclDecrypt;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclDecrypt
 * @summary Decrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an decrypted message, using the `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclDecrypt } from '@polkadot/util-crypto';
 *
 * naclDecrypt([...], [...], [...]); // => [...]
 * ```
 */
function naclDecrypt(encrypted, nonce, secret) {
  return _tweetnacl.default.secretbox.open(encrypted, nonce, secret) || null;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/deriveHard.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/deriveHard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveHard;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const HDKD = (0, _util.compactAddLength)((0, _util.stringToU8a)('Ed25519HDKD'));

function deriveHard(seed, chainCode) {
  return (0, _asU8a.default)((0, _util.u8aConcat)(HDKD, seed, chainCode));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/encrypt.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/encrypt.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclEncrypt;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../random/asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclEncrypt
 * @summary Encrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an encrypted message, using the `secretKey` and `nonce`. If the `nonce` was not supplied, a random value is generated.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclEncrypt } from '@polkadot/util-crypto';
 *
 * naclEncrypt([...], [...]); // => [...]
 * ```
 */
function naclEncrypt(message, secret, nonce = (0, _asU8a.default)(24)) {
  return {
    encrypted: _tweetnacl.default.secretbox(message, nonce, secret),
    nonce
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/index.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "naclDecrypt", {
  enumerable: true,
  get: function () {
    return _decrypt.default;
  }
});
Object.defineProperty(exports, "deriveHard", {
  enumerable: true,
  get: function () {
    return _deriveHard.default;
  }
});
Object.defineProperty(exports, "naclEncrypt", {
  enumerable: true,
  get: function () {
    return _encrypt.default;
  }
});
Object.defineProperty(exports, "naclKeypairFromRandom", {
  enumerable: true,
  get: function () {
    return _fromRandom.default;
  }
});
Object.defineProperty(exports, "naclKeypairFromSecret", {
  enumerable: true,
  get: function () {
    return _fromSecret.default;
  }
});
Object.defineProperty(exports, "naclKeypairFromSeed", {
  enumerable: true,
  get: function () {
    return _fromSeed.default;
  }
});
Object.defineProperty(exports, "naclKeypairFromString", {
  enumerable: true,
  get: function () {
    return _fromString.default;
  }
});
Object.defineProperty(exports, "naclSign", {
  enumerable: true,
  get: function () {
    return _sign.default;
  }
});
Object.defineProperty(exports, "naclVerify", {
  enumerable: true,
  get: function () {
    return _verify.default;
  }
});
Object.defineProperty(exports, "naclBoxKeypairFromSecret", {
  enumerable: true,
  get: function () {
    return _fromSecret2.default;
  }
});
Object.defineProperty(exports, "naclOpen", {
  enumerable: true,
  get: function () {
    return _open.default;
  }
});
Object.defineProperty(exports, "naclSeal", {
  enumerable: true,
  get: function () {
    return _seal.default;
  }
});

var _decrypt = _interopRequireDefault(__webpack_require__(/*! ./decrypt */ "../../node_modules/@polkadot/util-crypto/nacl/decrypt.js"));

var _deriveHard = _interopRequireDefault(__webpack_require__(/*! ./deriveHard */ "../../node_modules/@polkadot/util-crypto/nacl/deriveHard.js"));

var _encrypt = _interopRequireDefault(__webpack_require__(/*! ./encrypt */ "../../node_modules/@polkadot/util-crypto/nacl/encrypt.js"));

var _fromRandom = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromRandom */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromRandom.js"));

var _fromSecret = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromSecret */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSecret.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromSeed */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSeed.js"));

var _fromString = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromString */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromString.js"));

var _sign = _interopRequireDefault(__webpack_require__(/*! ./sign */ "../../node_modules/@polkadot/util-crypto/nacl/sign.js"));

var _verify = _interopRequireDefault(__webpack_require__(/*! ./verify */ "../../node_modules/@polkadot/util-crypto/nacl/verify.js"));

var _fromSecret2 = _interopRequireDefault(__webpack_require__(/*! ./box/fromSecret */ "../../node_modules/@polkadot/util-crypto/nacl/box/fromSecret.js"));

var _open = _interopRequireDefault(__webpack_require__(/*! ./open */ "../../node_modules/@polkadot/util-crypto/nacl/open.js"));

var _seal = _interopRequireDefault(__webpack_require__(/*! ./seal */ "../../node_modules/@polkadot/util-crypto/nacl/seal.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromRandom.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/keypair/fromRandom.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclKeypairFromRandom;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclKeypairFromRandom
 * @summary Creates a new public/secret keypair.
 * @description
 * Returns a new generate object containing a `publicKey` & `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromRandom } from '@polkadot/util-crypto';
 *
 * naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
function naclKeypairFromRandom() {
  return _tweetnacl.default.sign.keyPair();
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSecret.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/keypair/fromSecret.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclKeypairFromSecret;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclKeypairFromSecret
 * @summary Creates a new public/secret keypair from a secret.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSecret } from '@polkadot/util-crypto';
 *
 * naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
function naclKeypairFromSecret(secret) {
  return _tweetnacl.default.sign.keyPair.fromSecretKey(secret);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSeed.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/keypair/fromSeed.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclKeypairFromSeed;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclKeypairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSeed } from '@polkadot/util-crypto';
 *
 * naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
function naclKeypairFromSeed(seed) {
  if ((0, _wasmCrypto.isReady)()) {
    const full = (0, _wasmCrypto.ed25519KeypairFromSeed)(seed);
    return {
      publicKey: full.slice(32),
      secretKey: full.slice(0, 64)
    };
  }

  return _tweetnacl.default.sign.keyPair.fromSeed(seed);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromString.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/keypair/fromString.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclKeypairFromString;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ./fromSeed */ "../../node_modules/@polkadot/util-crypto/nacl/keypair/fromSeed.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclKeypairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromString } from '@polkadot/util-crypto';
 *
 * naclKeypairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
function naclKeypairFromString(value) {
  return (0, _fromSeed.default)((0, _asU8a.default)((0, _util.stringToU8a)(value), 256));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/open.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/open.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclOpen;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclOpen
 * @summary Opens a message using the receiver's secretKey and nonce
 * @description
 * Returns a message sealed by the sender, using the receiver's `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclOpen } from '@polkadot/util-crypto';
 *
 * naclOpen([...], [...], [...]); // => [...]
 * ```
 */
function naclOpen(sealed, nonce, senderBoxPublic, receiverBoxSecret) {
  return _tweetnacl.default.box.open(sealed, nonce, senderBoxPublic, receiverBoxSecret) || null;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/seal.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/seal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclSeal;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../random/asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclSeal
 * @summary Seals a message using the sender's encrypting secretKey, receiver's public key, and nonce
 * @description
 * Returns an encrypted message which can be open only by receiver's secretKey. If the `nonce` was not supplied, a random value is generated.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclEncrypt } from '@polkadot/util-crypto';
 *
 * naclSeal([...], [...], [...], [...]); // => [...]
 * ```
 */
function naclSeal(message, senderBoxSecret, receiverBoxPublic, nonce = (0, _asU8a.default)(24)) {
  return {
    nonce,
    sealed: _tweetnacl.default.box(message, nonce, receiverBoxPublic, senderBoxSecret)
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/sign.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/sign.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclSign;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclSign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclSign } from '@polkadot/util-crypto';
 *
 * naclSign([...], [...]); // => [...]
 * ```
 */
function naclSign(message, {
  publicKey,
  secretKey
}) {
  (0, _util.assert)(secretKey, 'Expected a valid secretKey');
  const messageU8a = (0, _util.u8aToU8a)(message);
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.ed25519Sign)(publicKey, secretKey.subarray(0, 32), messageU8a) : _tweetnacl.default.sign.detached(messageU8a, secretKey);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/nacl/verify.js":
/*!********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/nacl/verify.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = naclVerify;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name naclSign
 * @summary Verifies the signature on the supplied message.
 * @description
 * Verifies the `signature` on `message` with the supplied `publicKey`. Returns `true` on sucess, `false` otherwise.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclVerify } from '@polkadot/util-crypto';
 *
 * naclVerify([...], [...], [...]); // => true/false
 * ```
 */
function naclVerify(message, signature, publicKey) {
  const messageU8a = (0, _util.u8aToU8a)(message);
  const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
  const signatureU8a = (0, _util.u8aToU8a)(signature);
  (0, _util.assert)(publicKeyU8a.length === 32, `Invalid publicKey, received ${publicKeyU8a.length}, expected 32`);
  (0, _util.assert)(signatureU8a.length === 64, `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.ed25519Verify)(signatureU8a, messageU8a, publicKeyU8a) : _tweetnacl.default.sign.detached.verify(messageU8a, signatureU8a, publicKeyU8a);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js":
/*!*****************************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(nacl) {
'use strict';

// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/

var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};

//  Pluggable, initialized in high-level API below.
var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            // "expand 32-byte k"

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}

/*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/

var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  // t15 left as is

  // first car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  // second car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      // add
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma1
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Ch
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // K
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // w
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      // add
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma0
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Maj
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      // add
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          // add
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma0
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma1
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    // add
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = Math.floor((x[j] + 128) / 256);
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}

// Note: difference from C - smlen returned, not passed as argument.
function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  return n;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES,

  gf: gf,
  D: D,
  L: L,
  pack25519: pack25519,
  unpack25519: unpack25519,
  M: M,
  A: A,
  S: S,
  Z: Z,
  pow2523: pow2523,
  add: add,
  set25519: set25519,
  modL: modL,
  scalarmult: scalarmult,
  scalarbase: scalarbase,
};

/* High-level API */

function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Uint8Array))
      throw new TypeError('unexpected type, use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return null;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  // Zero length arguments are considered not equal.
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  // Initialize PRNG if environment provides CSPRNG.
  // If not, methods calling randombytes will throw.
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    // Browsers.
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (true) {
    // Node.js.
    crypto = __webpack_require__(/*! crypto */ 16);
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})( true && module.exports ? module.exports : (self.nacl = self.nacl || {}));


/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/pbkdf2/encode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/pbkdf2/encode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pbkdf2Encode;

var _pbkdf = __webpack_require__(/*! pbkdf2 */ "../../node_modules/pbkdf2/browser.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../random/asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function pbkdf2Encode(passphrase, salt = (0, _asU8a.default)(), rounds = 2048) {
  const u8a = (0, _util.u8aToU8a)(passphrase);
  const password = (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.pbkdf2)(u8a, salt, rounds) : (0, _util.bufferToU8a)((0, _pbkdf.pbkdf2Sync)((0, _util.u8aToBuffer)(u8a), (0, _util.u8aToBuffer)(salt), rounds, 64));
  return {
    password,
    rounds,
    salt
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/pbkdf2/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/pbkdf2/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pbkdf2Encode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/pbkdf2/encode.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/polyfill.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/polyfill.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @polkadot/wasm-crypto/crypto-polyfill */ "../../node_modules/@polkadot/wasm-crypto/crypto-polyfill.js");

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/random/asHex.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/random/asHex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomAsHex;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name randomAsHex
 * @summary Creates a hex string filled with random bytes.
 * @description
 * Returns a hex string with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsHex } from '@polkadot/util-crypto';
 *
 * randomAsHex(); // => 0x...
 * ```
 */
function randomAsHex(length = 32) {
  return (0, _util.u8aToHex)((0, _asU8a.default)(length));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/random/asNumber.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/random/asNumber.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomAsNumber;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asHex = _interopRequireDefault(__webpack_require__(/*! ./asHex */ "../../node_modules/@polkadot/util-crypto/random/asHex.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const BN_53 = new _bn.default(0b11111111111111111111111111111111111111111111111111111);
/**
 * @name randomAsNumber
 * @summary Creates a random number from random bytes.
 * @description
 * Returns a random number generated from the secure bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsNumber } from '@polkadot/util-crypto';
 *
 * randomAsNumber(); // => <random number>
 * ```
 */

function randomAsNumber() {
  return (0, _util.hexToBn)((0, _asHex.default)(8)).and(BN_53).toNumber();
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/random/asU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/random/asU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomAsU8a;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name randomAsU8a
 * @summary Creates a Uint8Array filled with random bytes.
 * @description
 * Returns a `Uint8Array` with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsU8a } from '@polkadot/util-crypto';
 *
 * randomAsU8a(); // => Uint8Array([...])
 * ```
 */
function randomAsU8a(length = 32) {
  return _tweetnacl.default.randomBytes(length);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/random/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/random/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "randomAsHex", {
  enumerable: true,
  get: function () {
    return _asHex.default;
  }
});
Object.defineProperty(exports, "randomAsNumber", {
  enumerable: true,
  get: function () {
    return _asNumber.default;
  }
});
Object.defineProperty(exports, "randomAsU8a", {
  enumerable: true,
  get: function () {
    return _asU8a.default;
  }
});

var _asHex = _interopRequireDefault(__webpack_require__(/*! ./asHex */ "../../node_modules/@polkadot/util-crypto/random/asHex.js"));

var _asNumber = _interopRequireDefault(__webpack_require__(/*! ./asNumber */ "../../node_modules/@polkadot/util-crypto/random/asNumber.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveHard.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/deriveHard.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveHard;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromU8a */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromU8a.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./keypair/toU8a */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/toU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function deriveHard(keypair, chainCode) {
  return (0, _fromU8a.default)((0, _wasmCrypto.sr25519DeriveKeypairHard)((0, _toU8a.default)(keypair), chainCode));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/derivePublic.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/derivePublic.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveSoft;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function deriveSoft(publicKey, chainCode) {
  return (0, _wasmCrypto.sr25519DerivePublicSoft)(publicKey, chainCode);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveSoft.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/deriveSoft.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveSoft;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromU8a */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromU8a.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./keypair/toU8a */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/toU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function deriveSoft(keypair, chainCode) {
  return (0, _fromU8a.default)((0, _wasmCrypto.sr25519DeriveKeypairSoft)((0, _toU8a.default)(keypair), chainCode));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/index.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "schnorrkelDeriveHard", {
  enumerable: true,
  get: function () {
    return _deriveHard.default;
  }
});
Object.defineProperty(exports, "schnorrkelDerivePublic", {
  enumerable: true,
  get: function () {
    return _derivePublic.default;
  }
});
Object.defineProperty(exports, "schnorrkelDeriveSoft", {
  enumerable: true,
  get: function () {
    return _deriveSoft.default;
  }
});
Object.defineProperty(exports, "schnorrkelKeypairFromSeed", {
  enumerable: true,
  get: function () {
    return _fromSeed.default;
  }
});
Object.defineProperty(exports, "schnorrkelSign", {
  enumerable: true,
  get: function () {
    return _sign.default;
  }
});
Object.defineProperty(exports, "schnorrkelVerify", {
  enumerable: true,
  get: function () {
    return _verify.default;
  }
});

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _deriveHard = _interopRequireDefault(__webpack_require__(/*! ./deriveHard */ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveHard.js"));

var _derivePublic = _interopRequireDefault(__webpack_require__(/*! ./derivePublic */ "../../node_modules/@polkadot/util-crypto/schnorrkel/derivePublic.js"));

var _deriveSoft = _interopRequireDefault(__webpack_require__(/*! ./deriveSoft */ "../../node_modules/@polkadot/util-crypto/schnorrkel/deriveSoft.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromSeed */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromSeed.js"));

var _sign = _interopRequireDefault(__webpack_require__(/*! ./sign */ "../../node_modules/@polkadot/util-crypto/schnorrkel/sign.js"));

var _verify = _interopRequireDefault(__webpack_require__(/*! ./verify */ "../../node_modules/@polkadot/util-crypto/schnorrkel/verify.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromSeed.js":
/*!************************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromSeed.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schnorrkelKeypairFromSeed;

__webpack_require__(/*! ../../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./fromU8a */ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name schnorrkelKeypairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */
function schnorrkelKeypairFromSeed(seed) {
  return (0, _fromU8a.default)((0, _wasmCrypto.sr25519KeypairFromSeed)(seed));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromU8a.js":
/*!***********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/keypair/fromU8a.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schnorrkelKeypairFromU8a;
// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const SEC_LEN = 64;
const PUB_LEN = 32;

function schnorrkelKeypairFromU8a(full) {
  return {
    publicKey: full.slice(SEC_LEN, SEC_LEN + PUB_LEN),
    secretKey: full.slice(0, SEC_LEN)
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/keypair/toU8a.js":
/*!*********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/keypair/toU8a.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schnorrkelKeypairToU8a;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function schnorrkelKeypairToU8a({
  publicKey,
  secretKey
}) {
  return (0, _util.u8aConcat)(secretKey, publicKey).slice();
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/sign.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/sign.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schnorrkelSign;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name schnorrkelSign
 * @description Returns message signature of `message`, using the supplied pair
 */
function schnorrkelSign(message, {
  publicKey,
  secretKey
}) {
  (0, _util.assert)((publicKey === null || publicKey === void 0 ? void 0 : publicKey.length) === 32, 'Expected a valid publicKey, 32-bytes');
  (0, _util.assert)((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 64, 'Expected a valid secretKey, 64-bytes');
  const messageU8a = (0, _util.u8aToU8a)(message);
  return (0, _wasmCrypto.sr25519Sign)(publicKey, secretKey, messageU8a);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/schnorrkel/verify.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/schnorrkel/verify.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schnorrkelVerify;

__webpack_require__(/*! ../polyfill */ "../../node_modules/@polkadot/util-crypto/polyfill.js");

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name schnorrkelVerify
 * @description Verifies the signature of `message`, using the supplied pair
 */
function schnorrkelVerify(message, signature, publicKey) {
  const messageU8a = (0, _util.u8aToU8a)(message);
  const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
  const signatureU8a = (0, _util.u8aToU8a)(signature);
  (0, _util.assert)(publicKeyU8a.length === 32, `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  (0, _util.assert)(signatureU8a.length === 64, `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
  return (0, _wasmCrypto.sr25519Verify)(signatureU8a, messageU8a, publicKeyU8a);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/scrypt/defaults.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/scrypt/defaults.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PARAMS = void 0;
// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_PARAMS = {
  N: 1 << 15,
  p: 1,
  r: 8
};
exports.DEFAULT_PARAMS = DEFAULT_PARAMS;

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/scrypt/encode.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/scrypt/encode.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scryptEncode;

var _scryptsy = _interopRequireDefault(__webpack_require__(/*! scryptsy */ "../../node_modules/scryptsy/lib/index.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../random/asU8a */ "../../node_modules/@polkadot/util-crypto/random/asU8a.js"));

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/scrypt/defaults.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function scryptEncode(passphrase, salt = (0, _asU8a.default)(), params = _defaults.DEFAULT_PARAMS) {
  const password = (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.scrypt)((0, _util.u8aToU8a)(passphrase), salt, Math.log2(params.N), params.r, params.p) : (0, _util.bufferToU8a)((0, _scryptsy.default)((0, _util.u8aToBuffer)((0, _util.u8aToU8a)(passphrase)), (0, _util.u8aToBuffer)(salt), params.N, params.r, params.p, 64));
  return {
    params,
    password,
    salt
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/scrypt/fromU8a.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/scrypt/fromU8a.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scryptFromU8a;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util-crypto/scrypt/defaults.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function scryptFromU8a(data) {
  const salt = data.subarray(0, 32);
  const N = (0, _util.u8aToBn)(data.subarray(32 + 0, 32 + 4), {
    isLe: true
  }).toNumber();
  const p = (0, _util.u8aToBn)(data.subarray(32 + 4, 32 + 8), {
    isLe: true
  }).toNumber();
  const r = (0, _util.u8aToBn)(data.subarray(32 + 8, 32 + 12), {
    isLe: true
  }).toNumber(); // FIXME At this moment we assume these to be fixed params, this is not a great idea since we lose flexibility
  // and updates for greater security. However we need some protection against carefully-crafted params that can
  // eat up CPU since these are user inputs. So we need to get very clever here, but atm we only allow the defaults
  // and if no match, bail out

  (0, _util.assert)(N === _defaults.DEFAULT_PARAMS.N && p === _defaults.DEFAULT_PARAMS.p && r === _defaults.DEFAULT_PARAMS.r, 'Invalid injected scrypt params found');
  return {
    params: {
      N,
      p,
      r
    },
    salt
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/scrypt/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/scrypt/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "scryptEncode", {
  enumerable: true,
  get: function () {
    return _encode.default;
  }
});
Object.defineProperty(exports, "scryptFromU8a", {
  enumerable: true,
  get: function () {
    return _fromU8a.default;
  }
});
Object.defineProperty(exports, "scryptToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _encode = _interopRequireDefault(__webpack_require__(/*! ./encode */ "../../node_modules/@polkadot/util-crypto/scrypt/encode.js"));

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./fromU8a */ "../../node_modules/@polkadot/util-crypto/scrypt/fromU8a.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util-crypto/scrypt/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/scrypt/toU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/scrypt/toU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scryptToU8a;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function scryptToU8a(salt, {
  N,
  p,
  r
}) {
  return (0, _util.u8aConcat)(salt, (0, _util.bnToU8a)(N, {
    bitLength: 32,
    isLe: true
  }), (0, _util.bnToU8a)(p, {
    bitLength: 32,
    isLe: true
  }), (0, _util.bnToU8a)(r, {
    bitLength: 32,
    isLe: true
  }));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/compress.js":
/*!***************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/compress.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Compress;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');

function secp256k1Compress(publicKey) {
  (0, _util.assert)([33, 65].includes(publicKey.length), 'Invalid publicKey provided');
  return new Uint8Array(ec.keyFromPublic(publicKey).getPublic().encodeCompressed());
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/deriveHard.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/deriveHard.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deriveHard;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ../blake2/asU8a */ "../../node_modules/@polkadot/util-crypto/blake2/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const HDKD = (0, _util.compactAddLength)((0, _util.stringToU8a)('Secp256k1HDKD'));

function deriveHard(seed, chainCode) {
  // NOTE This is specific to the Substrate HDD derivation, so always use the blake2 hasher
  return (0, _asU8a.default)((0, _util.u8aConcat)(HDKD, seed, chainCode), 256);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/expand.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/expand.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Expand;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');

function secp256k1Expand(publicKey) {
  (0, _util.assert)([33, 65].includes(publicKey.length), 'Invalid publicKey provided');
  const expanded = ec.keyFromPublic(publicKey).getPublic();
  return (0, _util.u8aConcat)((0, _util.bnToU8a)(expanded.getX(), {
    bitLength: 256,
    isLe: false
  }), (0, _util.bnToU8a)(expanded.getY(), {
    bitLength: 256,
    isLe: false
  }));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/hasher.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/hasher.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Hasher;

var _blake = __webpack_require__(/*! ../blake2 */ "../../node_modules/@polkadot/util-crypto/blake2/index.js");

var _keccak = __webpack_require__(/*! ../keccak */ "../../node_modules/@polkadot/util-crypto/keccak/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const HASH_TYPES = ['blake2', 'keccak'];

function secp256k1Hasher(hashType, data) {
  if (hashType === 'blake2') {
    return (0, _blake.blake2AsU8a)(data);
  } else if (hashType === 'keccak') {
    return (0, _keccak.keccakAsU8a)(data);
  }

  throw new Error(`Unsupported secp256k1 hasher '${hashType}', expected one of ${HASH_TYPES.join(', ')}`);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/index.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "secp256k1Compress", {
  enumerable: true,
  get: function () {
    return _compress.default;
  }
});
Object.defineProperty(exports, "secp256k1Expand", {
  enumerable: true,
  get: function () {
    return _expand.default;
  }
});
Object.defineProperty(exports, "secp256k1KeypairFromSeed", {
  enumerable: true,
  get: function () {
    return _fromSeed.default;
  }
});
Object.defineProperty(exports, "secp256k1Recover", {
  enumerable: true,
  get: function () {
    return _recover.default;
  }
});
Object.defineProperty(exports, "secp256k1Verify", {
  enumerable: true,
  get: function () {
    return _verify.default;
  }
});
Object.defineProperty(exports, "secp256k1Sign", {
  enumerable: true,
  get: function () {
    return _sign.default;
  }
});

var _compress = _interopRequireDefault(__webpack_require__(/*! ./compress */ "../../node_modules/@polkadot/util-crypto/secp256k1/compress.js"));

var _expand = _interopRequireDefault(__webpack_require__(/*! ./expand */ "../../node_modules/@polkadot/util-crypto/secp256k1/expand.js"));

var _fromSeed = _interopRequireDefault(__webpack_require__(/*! ./keypair/fromSeed */ "../../node_modules/@polkadot/util-crypto/secp256k1/keypair/fromSeed.js"));

var _recover = _interopRequireDefault(__webpack_require__(/*! ./recover */ "../../node_modules/@polkadot/util-crypto/secp256k1/recover.js"));

var _verify = _interopRequireDefault(__webpack_require__(/*! ./verify */ "../../node_modules/@polkadot/util-crypto/secp256k1/verify.js"));

var _sign = _interopRequireDefault(__webpack_require__(/*! ./sign */ "../../node_modules/@polkadot/util-crypto/secp256k1/sign.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/keypair/fromSeed.js":
/*!***********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/keypair/fromSeed.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1KeypairFromSeed;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');
/**
 * @name secp256k1KeypairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */

function secp256k1KeypairFromSeed(seed) {
  (0, _util.assert)(seed.length === 32, 'Expected valid 32-byte private key as a seed');
  const key = ec.keyFromPrivate(seed);
  return {
    publicKey: new Uint8Array(key.getPublic().encodeCompressed()),
    secretKey: (0, _util.bnToU8a)(key.getPrivate(), {
      bitLength: 256,
      isLe: false
    })
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/recover.js":
/*!**************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/recover.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Recover;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');
/**
 * @name secp256k1Recover
 * @description Recovers a publicKey from the supplied signature
 */

function secp256k1Recover(message, signature, recovery) {
  return new Uint8Array( // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  ec.recoverPubKey(message, {
    r: signature.slice(0, 32),
    s: signature.slice(32, 64)
  }, recovery).encode(null, true));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/sign.js":
/*!***********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/sign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Sign;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _hasher = _interopRequireDefault(__webpack_require__(/*! ./hasher */ "../../node_modules/@polkadot/util-crypto/secp256k1/hasher.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');
/**
 * @name secp256k1Sign
 * @description Returns message signature of `message`, using the supplied pair
 */

function secp256k1Sign(message, {
  secretKey
}, hashType = 'blake2') {
  (0, _util.assert)((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 32, 'Expected valid secp256k1 secretKey, 32-bytes');
  const key = ec.keyFromPrivate(secretKey);
  const ecsig = key.sign((0, _hasher.default)(hashType, message));
  return (0, _util.u8aConcat)((0, _util.bnToU8a)(ecsig.r, {
    bitLength: 256,
    isLe: false
  }), (0, _util.bnToU8a)(ecsig.s, {
    bitLength: 256,
    isLe: false
  }), new Uint8Array([ecsig.recoveryParam || 0]));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/secp256k1/verify.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/secp256k1/verify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secp256k1Verify;

var _elliptic = _interopRequireDefault(__webpack_require__(/*! elliptic */ "../../node_modules/elliptic/lib/elliptic.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _expand = _interopRequireDefault(__webpack_require__(/*! ./expand */ "../../node_modules/@polkadot/util-crypto/secp256k1/expand.js"));

var _hasher = _interopRequireDefault(__webpack_require__(/*! ./hasher */ "../../node_modules/@polkadot/util-crypto/secp256k1/hasher.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const EC = _elliptic.default.ec;
const ec = new EC('secp256k1');
/**
 * @name secp256k1Verify
 * @description Verifies the signature of `message`, using the supplied pair
 */

function secp256k1Verify(message, signature, address, hashType = 'blake2', isExpanded = false) {
  const u8a = (0, _util.u8aToU8a)(signature);
  (0, _util.assert)(u8a.length === 65, `Expected signature with 65 bytes, ${u8a.length} found instead`);
  const publicKey = new Uint8Array( // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  ec.recoverPubKey((0, _hasher.default)(hashType, message), {
    r: u8a.slice(0, 32),
    s: u8a.slice(32, 64)
  }, u8a[64]).encodeCompressed());
  return (0, _util.u8aEq)((0, _hasher.default)(hashType, isExpanded ? (0, _expand.default)(publicKey) : publicKey), (0, _util.u8aToU8a)(address));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/sha512/asU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/sha512/asU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sha512AsU8a;

var _tweetnacl = _interopRequireDefault(__webpack_require__(/*! tweetnacl */ "../../node_modules/@polkadot/util-crypto/node_modules/tweetnacl/nacl-fast.js"));

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name sha512AsU8a
 * @summary Creates sha-512 hash of the input.
 * @description
 * Returns a sha-512 `Uint8Array` from the supplied data.
 * @example
 * <BR>
 *
 * ```javascript
 * import { sha512AsU8a } from '@polkadot/util-crypto';
 *
 * sha512AsU8a(Uint8Array.from([...])); // => Uint8Array([...])
 * ```
 */
function sha512AsU8a(data) {
  return (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.sha512)(data) : _tweetnacl.default.hash(data);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/sha512/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/sha512/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sha512AsU8a", {
  enumerable: true,
  get: function () {
    return _asU8a.default;
  }
});

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/sha512/asU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/signature/index.js":
/*!************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/signature/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "signatureVerify", {
  enumerable: true,
  get: function () {
    return _verify.default;
  }
});

var _verify = _interopRequireDefault(__webpack_require__(/*! ./verify */ "../../node_modules/@polkadot/util-crypto/signature/verify.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/signature/verify.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/signature/verify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signatureVerify;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _decode = _interopRequireDefault(__webpack_require__(/*! ../address/decode */ "../../node_modules/@polkadot/util-crypto/address/decode.js"));

var _verify = _interopRequireDefault(__webpack_require__(/*! ../nacl/verify */ "../../node_modules/@polkadot/util-crypto/nacl/verify.js"));

var _verify2 = _interopRequireDefault(__webpack_require__(/*! ../schnorrkel/verify */ "../../node_modules/@polkadot/util-crypto/schnorrkel/verify.js"));

var _verify3 = _interopRequireDefault(__webpack_require__(/*! ../secp256k1/verify */ "../../node_modules/@polkadot/util-crypto/secp256k1/verify.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const VERIFIERS = [['ed25519', _verify.default], ['sr25519', _verify2.default], ['ecdsa', (message, signature, publicKey) => (0, _verify3.default)(message, signature, publicKey, 'blake2')], ['ethereum', (message, signature, publicKey) => (0, _verify3.default)(message, signature, publicKey, 'keccak')]];
const CRYPTO_TYPES = ['ed25519', 'sr25519', 'ecdsa', 'ethereum'];

function verifyDetect(result, message, signature, publicKey) {
  result.isValid = VERIFIERS.some(([crypto, verify]) => {
    try {
      if (verify(message, signature, publicKey)) {
        result.crypto = crypto;
        return true;
      }
    } catch (error) {// do nothing, result.isValid still set to false
    }

    return false;
  });
  return result;
}

function verifyMultisig(result, message, signature, publicKey) {
  (0, _util.assert)([0, 1, 2].includes(signature[0]), `Unknown crypto type, expected signature prefix [0..2], found ${signature[0]}`);
  result.crypto = CRYPTO_TYPES[signature[0]] || 'none';

  try {
    result.isValid = {
      ecdsa: () => (0, _verify3.default)(message, signature.subarray(1), publicKey, 'blake2'),
      ed25519: () => (0, _verify.default)(message, signature.subarray(1), publicKey),
      ethereum: () => (0, _verify3.default)(message, signature.subarray(1), publicKey, 'keccak'),
      none: () => {
        throw Error('no verify for `none` crypto type');
      },
      sr25519: () => (0, _verify2.default)(message, signature.subarray(1), publicKey)
    }[result.crypto]();
  } catch (error) {// ignore, result.isValid still set to false
  }

  return result;
}

function signatureVerify(message, signature, addressOrPublicKey) {
  const signatureU8a = (0, _util.u8aToU8a)(signature);
  (0, _util.assert)([64, 65, 66].includes(signatureU8a.length), `Invalid signature length, expected [64..66] bytes, found ${signatureU8a.length}`);
  const result = {
    crypto: 'none',
    isValid: false
  };
  const publicKey = (0, _decode.default)(addressOrPublicKey);
  const isMultisig = [0, 1, 2].includes(signatureU8a[0]) && [65, 66].includes(signatureU8a.length);

  if (isMultisig) {
    return verifyMultisig(result, message, signatureU8a, publicKey);
  } else {
    return verifyDetect(result, message, signatureU8a, publicKey);
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/asHex.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/asHex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhashAsHex;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/xxhash/asU8a.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name xxhashAsHex
 * @summary Creates a xxhash64 hex from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a hex string with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsHex } from '@polkadot/util-crypto';
 *
 * xxhashAsHex('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
function xxhashAsHex(data, bitLength = 64) {
  return (0, _util.u8aToHex)((0, _asU8a.default)(data, bitLength));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/asU8a.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/asU8a.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhashAsU8a;

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

var _wasmCrypto = __webpack_require__(/*! @polkadot/wasm-crypto */ "../../node_modules/@polkadot/wasm-crypto/index.js");

var _asBn = _interopRequireDefault(__webpack_require__(/*! ./xxhash64/asBn */ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asBn.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name xxhashAsU8a
 * @summary Creates a xxhash64 u8a from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsU8a } from '@polkadot/util-crypto';
 *
 * xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
function xxhashAsU8a(data, bitLength = 64) {
  const iterations = Math.ceil(bitLength / 64);

  if ((0, _wasmCrypto.isReady)()) {
    return (0, _wasmCrypto.twox)((0, _util.u8aToU8a)(data), iterations);
  }

  const u8a = new Uint8Array(Math.ceil(bitLength / 8));

  for (let seed = 0; seed < iterations; seed++) {
    u8a.set((0, _asBn.default)(data, seed).toArray('le', 8), seed * 8);
  }

  return u8a;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "xxhashAsHex", {
  enumerable: true,
  get: function () {
    return _asHex.default;
  }
});
Object.defineProperty(exports, "xxhashAsU8a", {
  enumerable: true,
  get: function () {
    return _asU8a.default;
  }
});

var _asHex = _interopRequireDefault(__webpack_require__(/*! ./asHex */ "../../node_modules/@polkadot/util-crypto/xxhash/asHex.js"));

var _asU8a = _interopRequireDefault(__webpack_require__(/*! ./asU8a */ "../../node_modules/@polkadot/util-crypto/xxhash/asU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asBn.js":
/*!*****************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/xxhash64/asBn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhash64AsBn;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _asRaw = _interopRequireDefault(__webpack_require__(/*! ./asRaw */ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asRaw.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name xxhash64AsBn
 * @summary Creates a xxhash BN from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a BN.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsNumber } from '@polkadot/util-crypto';
 *
 * xxhash64AsBn('abcd', 0xabcd)); // => new BN(0xe29f70f8b8c96df7)
 * ```
 */
function xxhash64AsBn(data, seed) {
  return new _bn.default((0, _asRaw.default)(data, seed), 16);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asRaw.js":
/*!******************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/xxhash64/asRaw.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhash64AsRaw;

var _asValue = _interopRequireDefault(__webpack_require__(/*! ./asValue */ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asValue.js"));

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name xxhash64AsRaw
 * @summary Creates a xxhash non-prefixed hex from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a non-prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsRaw } from '@polkadot/util-crypto';
 *
 * xxhash64AsRaw('abcd', 0xabcd)); // => e29f70f8b8c96df7
 * ```
 */
function xxhash64AsRaw(data, seed) {
  return (0, _asValue.default)(data, seed).toString(16);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util-crypto/xxhash/xxhash64/asValue.js":
/*!********************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util-crypto/xxhash/xxhash64/asValue.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhash64AsValue;

var _xxhashjs = _interopRequireDefault(__webpack_require__(/*! xxhashjs */ "../../node_modules/xxhashjs/lib/index.js"));

var _util = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/index.js");

// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name xxhash64AsValue
 * @summary Creates a hex number from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a hex number
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsValue } from '@polkadot/util-crypto';
 *
 * xxhash64AsValue('abcd', 0xabcd)); // => e29f70f8b8c96df7
 * ```
 */
function xxhash64AsValue(data, seed) {
  if ((0, _util.isBuffer)(data) || (0, _util.isString)(data)) {
    return _xxhashjs.default.h64(data, seed);
  }

  return _xxhashjs.default.h64((0, _util.u8aToBuffer)(data), seed);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/array/filter.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/array/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayFilter;

var _null = _interopRequireDefault(__webpack_require__(/*! ../is/null */ "../../node_modules/@polkadot/util/is/null.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ../is/undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name arrayFilter
 * @summary Filters undefined and (optionally) null values from an array
 * @description
 * Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well
 * @example
 * <BR>
 *
 * ```javascript
 * import { arrayFilter } from '@polkadot/util';
 *
 * arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
 * arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function arrayFilter(array, allowNulls = true) {
  return array.filter(value => !(0, _undefined.default)(value) && (allowNulls || !(0, _null.default)(value)));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/array/index.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/array/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrayFilter", {
  enumerable: true,
  get: function () {
    return _filter.default;
  }
});

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ "../../node_modules/@polkadot/util/array/filter.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/assert.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/assert.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assert;

var _function = _interopRequireDefault(__webpack_require__(/*! ./is/function */ "../../node_modules/@polkadot/util/is/function.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name assert
 * @summary Checks for a valid test, if not Error is thrown.
 * @description
 * Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an Error with the supplied `message`. When `test` passes, `true` is returned.
 * @example
 * <BR>
 *
 * ```javascript
 * const { assert } from '@polkadot/util';
 *
 * assert(true, 'True should be true'); // passes
 * assert(false, 'False should not be true'); // Error thrown
 * assert(false, () => 'message'); // Error with 'message'
 * ```
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error((0, _function.default)(message) ? message() : message);
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/consts.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/consts.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BN_THOUSAND = exports.BN_HUNDRED = exports.BN_TEN = exports.BN_ONE = exports.BN_ZERO = void 0;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name BN_ZERO
 * @summary BN constant for 0.
 */
const BN_ZERO = new _bn.default(0);
/**
 * @name BN_ONE
 * @summary BN constant for 1.
 */

exports.BN_ZERO = BN_ZERO;
const BN_ONE = new _bn.default(1);
/**
 * @name BN_TEN
 * @summary BN constant for 10.
 */

exports.BN_ONE = BN_ONE;
const BN_TEN = new _bn.default(10);
/**
 * @name BN_HUNDRED
 * @summary BN constant for 100.
 */

exports.BN_TEN = BN_TEN;
const BN_HUNDRED = new _bn.default(100);
/**
 * @name BN_THOUSAND
 * @summary BN constant for 1000.
 */

exports.BN_HUNDRED = BN_HUNDRED;
const BN_THOUSAND = new _bn.default(1000);
exports.BN_THOUSAND = BN_THOUSAND;

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/fromHex.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/fromHex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../hex/toBn */ "../../node_modules/@polkadot/util/hex/toBn.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bnFromHex
 * @summary Creates a BN.js bignumber object from a hex string.
 * @alias hex/toBn
 */
var _default = _toBn.default;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/index.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  bnFromHex: true,
  bnMax: true,
  bnMin: true,
  bnSqrt: true,
  bnToBn: true,
  bnToHex: true,
  bnToU8a: true
};
Object.defineProperty(exports, "bnFromHex", {
  enumerable: true,
  get: function () {
    return _fromHex.default;
  }
});
Object.defineProperty(exports, "bnMax", {
  enumerable: true,
  get: function () {
    return _max.default;
  }
});
Object.defineProperty(exports, "bnMin", {
  enumerable: true,
  get: function () {
    return _min.default;
  }
});
Object.defineProperty(exports, "bnSqrt", {
  enumerable: true,
  get: function () {
    return _sqrt.default;
  }
});
Object.defineProperty(exports, "bnToBn", {
  enumerable: true,
  get: function () {
    return _toBn.default;
  }
});
Object.defineProperty(exports, "bnToHex", {
  enumerable: true,
  get: function () {
    return _toHex.default;
  }
});
Object.defineProperty(exports, "bnToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _consts = __webpack_require__(/*! ./consts */ "../../node_modules/@polkadot/util/bn/consts.js");

Object.keys(_consts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _consts[key];
    }
  });
});

var _fromHex = _interopRequireDefault(__webpack_require__(/*! ./fromHex */ "../../node_modules/@polkadot/util/bn/fromHex.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "../../node_modules/@polkadot/util/bn/max.js"));

var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "../../node_modules/@polkadot/util/bn/min.js"));

var _sqrt = _interopRequireDefault(__webpack_require__(/*! ./sqrt */ "../../node_modules/@polkadot/util/bn/sqrt.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/bn/toBn.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/bn/toHex.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/bn/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/max.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/max.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _assert = _interopRequireDefault(__webpack_require__(/*! ../assert */ "../../node_modules/@polkadot/util/assert.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bnMax
 * @summary Finds and returns the highest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnMax } from '@polkadot/util';
 *
 * bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
 * ```
 */
function max(...items) {
  (0, _assert.default)(items && items.length >= 1, 'Must provide one or more BN arguments');
  return items.reduce((acc, val) => _bn.default.max(acc, val), items[0]);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/min.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _assert = _interopRequireDefault(__webpack_require__(/*! ../assert */ "../../node_modules/@polkadot/util/assert.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bnMin
 * @summary Finds and returns the smallest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnMin } from '@polkadot/util';
 *
 * bnMin([new BN(1), new BN(3), new BN(2)]).toString(); // => '1'
 * ```
 */
function min(...items) {
  (0, _assert.default)(items && items.length >= 1, 'Must provide one or more BN arguments');
  return items.reduce((acc, val) => _bn.default.min(acc, val), items[0]);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/sqrt.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/sqrt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sqrt;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _assert = _interopRequireDefault(__webpack_require__(/*! ../assert */ "../../node_modules/@polkadot/util/assert.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// https://golb.hplar.ch/2018/09/javascript-bigint.html
function newtonIteration(n, x0) {
  const x1 = n.div(x0).add(x0).shrn(1);

  if (x0.eq(x1) || x0.eq(x1.subn(1))) {
    return x0;
  }

  return newtonIteration(n, x1);
}
/**
 * @name bnSqrt
 * @summary Calculates the integer square root of a BN
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnSqrt } from '@polkadot/util';
 *
 * bnSqrt(new BN(16)).toString(); // => '4'
 * ```
 */


function sqrt(value) {
  (0, _assert.default)(value.gten(0), 'square root of negative numbers is not supported');
  return value.ltn(2) ? value : newtonIteration(value, new _bn.default(1));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/toBn.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/toBn.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bnToBn;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _bigInt = _interopRequireDefault(__webpack_require__(/*! ../is/bigInt */ "../../node_modules/@polkadot/util/is/bigInt.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../is/toBn */ "../../node_modules/@polkadot/util/is/toBn.js"));

var _hex = _interopRequireDefault(__webpack_require__(/*! ../is/hex */ "../../node_modules/@polkadot/util/is/hex.js"));

var _toBn2 = _interopRequireDefault(__webpack_require__(/*! ../hex/toBn */ "../../node_modules/@polkadot/util/hex/toBn.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bnToBn
 * @summary Creates a BN value from a BN, BigInt, string (base 10 or hex) or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@polkadot/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
function bnToBn(value) {
  if (!value) {
    return new _bn.default(0);
  } else if ((0, _hex.default)(value)) {
    return (0, _toBn2.default)(value.toString());
  } else if ((0, _bigInt.default)(value)) {
    return new _bn.default(value.toString());
  }

  return _bn.default.isBN(value) ? value : (0, _toBn.default)(value) ? value.toBn() : new _bn.default(value);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/toHex.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/toHex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _number = _interopRequireDefault(__webpack_require__(/*! ../is/number */ "../../node_modules/@polkadot/util/is/number.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/bn/toU8a.js"));

var _u8a = __webpack_require__(/*! ../u8a */ "../../node_modules/@polkadot/util/u8a/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const ZERO_STR = '0x00';

function bnToHex(value, arg1 = {
  bitLength: -1,
  isLe: false,
  isNegative: false
}, arg2) {
  if (!value) {
    return ZERO_STR;
  }

  const _options = _objectSpread({
    isLe: false,
    isNegative: false
  }, (0, _number.default)(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);

  return (0, _u8a.u8aToHex)((0, _toU8a.default)(value, _options));
}

var _default = bnToHex;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util/bn/toU8a.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/bn/toU8a.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _number = _interopRequireDefault(__webpack_require__(/*! ../is/number */ "../../node_modules/@polkadot/util/is/number.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/bn/toBn.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bnToU8a(value, arg1 = {
  bitLength: -1,
  isLe: true,
  isNegative: false
}, arg2) {
  const _options = _objectSpread({
    bitLength: -1,
    isLe: true,
    isNegative: false
  }, (0, _number.default)(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);

  const valueBn = (0, _toBn.default)(value);
  const byteLength = _options.bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((_options.bitLength || 0) / 8);

  if (!value) {
    return _options.bitLength === -1 ? new Uint8Array() : new Uint8Array(byteLength);
  }

  const output = new Uint8Array(byteLength);
  const bn = _options.isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
  output.set(bn.toArray(_options.isLe ? 'le' : 'be', byteLength), 0);
  return output;
}

var _default = bnToU8a;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util/buffer/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/buffer/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bufferToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/buffer/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/buffer/toU8a.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/buffer/toU8a.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bufferToU8a;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bufferToU8a
 * @summary Creates a Uint8Array value from a Buffer object.
 * @description
 * `null` inputs returns an empty result, `Buffer` values return the actual value as a `Uint8Array`. Anything that is not a `Buffer` object throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bufferToU8a } from '@polkadot/util';
 *
 * bufferToU8a(Buffer.from([1, 2, 3]));
 * ```
 */
function bufferToU8a(buffer) {
  return new Uint8Array(buffer || []);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/addLength.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/addLength.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compactAddLength;

var _u8a = __webpack_require__(/*! ../u8a */ "../../node_modules/@polkadot/util/u8a/index.js");

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/compact/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name compactAddLength
 * @description Adds a length prefix to the input value
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactAddLength } from '@polkadot/util';
 *
 * console.log(compactAddLength(new Uint8Array([0xde, 0xad, 0xbe, 0xef]))); // Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef])
 * ```
 */
function compactAddLength(input) {
  return (0, _u8a.u8aConcat)((0, _toU8a.default)(input.length), input);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/defaults.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/defaults.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_BITLENGTH = void 0;
// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_BITLENGTH = 32;
exports.DEFAULT_BITLENGTH = DEFAULT_BITLENGTH;

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/fromU8a.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/fromU8a.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compactFromU8a;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _u8a = __webpack_require__(/*! ../u8a */ "../../node_modules/@polkadot/util/u8a/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util/compact/defaults.js");

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name compactFromU8a
 * @description Retrievs the offset and encoded length from a compact-prefixed value
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactFromU8a } from '@polkadot/util';
 *
 * const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]), 32));
 *
 * console.log('value offset=', offset, 'length=', length); // 4, 0xffff
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function compactFromU8a(_input, bitLength = _defaults.DEFAULT_BITLENGTH) {
  const input = (0, _u8a.u8aToU8a)(_input);
  const flag = input[0] & 0b11;

  if (flag === 0b00) {
    return [1, new _bn.default(input[0]).shrn(2)];
  } else if (flag === 0b01) {
    return [2, (0, _u8a.u8aToBn)(input.slice(0, 2), true).shrn(2)];
  } else if (flag === 0b10) {
    return [4, (0, _u8a.u8aToBn)(input.slice(0, 4), true).shrn(2)];
  }

  const length = new _bn.default(input[0]).shrn(2) // clear flag
  .addn(4) // add 4 for base length
  .toNumber();
  const offset = 1 + length;
  return [offset, (0, _u8a.u8aToBn)(input.subarray(1, offset), true)];
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/index.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "compactAddLength", {
  enumerable: true,
  get: function () {
    return _addLength.default;
  }
});
Object.defineProperty(exports, "compactStripLength", {
  enumerable: true,
  get: function () {
    return _stripLength.default;
  }
});
Object.defineProperty(exports, "compactFromU8a", {
  enumerable: true,
  get: function () {
    return _fromU8a.default;
  }
});
Object.defineProperty(exports, "compactToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _addLength = _interopRequireDefault(__webpack_require__(/*! ./addLength */ "../../node_modules/@polkadot/util/compact/addLength.js"));

var _stripLength = _interopRequireDefault(__webpack_require__(/*! ./stripLength */ "../../node_modules/@polkadot/util/compact/stripLength.js"));

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./fromU8a */ "../../node_modules/@polkadot/util/compact/fromU8a.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/compact/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/stripLength.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/stripLength.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compactStripLength;

var _defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/@polkadot/util/compact/defaults.js");

var _fromU8a = _interopRequireDefault(__webpack_require__(/*! ./fromU8a */ "../../node_modules/@polkadot/util/compact/fromU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name compactStripLength
 * @description Removes the length prefix, returning both the total length (including the value + compact encoding) and the decoded value with the correct length
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactStripLength } from '@polkadot/util';
 *
 * console.log(compactStripLength(new Uint8Array([2 << 2, 0xde, 0xad]))); // [2, Uint8Array[0xde, 0xad]]
 * ```
 */
function compactStripLength(input, bitLength = _defaults.DEFAULT_BITLENGTH) {
  const [offset, length] = (0, _fromU8a.default)(input, bitLength);
  const total = offset + length.toNumber();
  return [total, input.subarray(offset, total)];
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/compact/toU8a.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/compact/toU8a.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compactToU8a;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _assert = _interopRequireDefault(__webpack_require__(/*! ../assert */ "../../node_modules/@polkadot/util/assert.js"));

var _bn2 = __webpack_require__(/*! ../bn */ "../../node_modules/@polkadot/util/bn/index.js");

var _u8a = __webpack_require__(/*! ../u8a */ "../../node_modules/@polkadot/util/u8a/index.js");

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const MAX_U8 = new _bn.default(2).pow(new _bn.default(8 - 2)).subn(1);
const MAX_U16 = new _bn.default(2).pow(new _bn.default(16 - 2)).subn(1);
const MAX_U32 = new _bn.default(2).pow(new _bn.default(32 - 2)).subn(1);
/**
 * @name compactToU8a
 * @description Encodes a number into a compact representation
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactToU8a } from '@polkadot/util';
 *
 * console.log(compactToU8a(511, 32)); // Uint8Array([0b11111101, 0b00000111])
 * ```
 */

function compactToU8a(_value) {
  const value = (0, _bn2.bnToBn)(_value);

  if (value.lte(MAX_U8)) {
    return new Uint8Array([value.toNumber() << 2]);
  } else if (value.lte(MAX_U16)) {
    return (0, _bn2.bnToU8a)(value.shln(2).addn(0b01), 16, true);
  } else if (value.lte(MAX_U32)) {
    return (0, _bn2.bnToU8a)(value.shln(2).addn(0b10), 32, true);
  }

  const u8a = (0, _bn2.bnToU8a)(value);
  let length = u8a.length; // adjust to the minimum number of bytes

  while (u8a[length - 1] === 0) {
    length--;
  }

  (0, _assert.default)(length >= 4, 'Previous tests match anyting less than 2^30; qed');
  return (0, _u8a.u8aConcat)(new Uint8Array([// substract 4 as minimum (also catered for in decoding)
  (length - 4 << 2) + 0b11]), u8a.subarray(0, length));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/detectPackage.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/detectPackage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectPackage;

var _assert = _interopRequireDefault(__webpack_require__(/*! ./assert */ "../../node_modules/@polkadot/util/assert.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./is/string */ "../../node_modules/@polkadot/util/is/string.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function expandPath(path) {
  return !path || path.length < 5 ? '<unknown>' : path;
}
/** @internal */


function flattenVersions(_all) {
  const all = _all.map(version => (0, _string.default)(version) ? {
    version
  } : version);

  const verLength = all.reduce((max, {
    version
  }) => Math.max(max, version.length), 0);
  return all.map(({
    path,
    version
  }) => `\t${version.padEnd(verLength)}\t${expandPath(path)}`).join('\n');
}
/**
 * @name detectPackage
 * @summary Checks that a specific package is only imported once
 */


function detectPackage({
  name,
  version
}, path) {
  const _global = typeof window !== 'undefined' ? window : global;

  if (!_global.__polkadotjs) {
    _global.__polkadotjs = {};
  }

  (0, _assert.default)(name.startsWith('@polkadot'), `Invalid package descriptor ${name}`);
  _global.__polkadotjs[name] = [...(_global.__polkadotjs[name] || []), {
    path: path || '',
    version
  }];

  if (_global.__polkadotjs[name].length !== 1) {
    const versions = flattenVersions(_global.__polkadotjs[name]);
    console.warn(`Multiple instances of ${name} detected, ensure that there is only one package in your dependency tree.\n${versions}`);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/@polkadot/util/extractTime.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/extractTime.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractTime;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const HRS = 60 * 60;
const DAY = HRS * 24;
/**
 * @name addTime
 * @summary Add together two Time arrays
 */

function addTime(a, b) {
  return {
    days: a.days + b.days,
    hours: a.hours + b.hours,
    milliseconds: a.milliseconds + b.milliseconds,
    minutes: a.minutes + b.minutes,
    seconds: a.seconds + b.seconds
  };
}

const ZERO = {
  days: 0,
  hours: 0,
  milliseconds: 0,
  minutes: 0,
  seconds: 0
};
/**
 * @name extractTime
 * @summary Convert a quantity of seconds to Time array representing accumulated {days, minutes, hours, seconds, milliseconds}
 * @example
 * <BR>
 *
 * ```javascript
 * import { extractTime } from '@polkadot/util';
 *
 * const { days, minutes, hours, seconds, milliseconds } = extractTime(6000); // 0, 0, 10, 0, 0
 * ```
 */

function extractTime(milliseconds) {
  if (!milliseconds) {
    return ZERO;
  } else if (milliseconds < 1000) {
    return _objectSpread(_objectSpread({}, ZERO), {}, {
      milliseconds
    });
  }

  const secs = milliseconds / 1000;

  if (secs < 60) {
    const seconds = Math.floor(secs);
    return addTime(_objectSpread(_objectSpread({}, ZERO), {}, {
      seconds
    }), extractTime(milliseconds - seconds * 1000));
  }

  const mins = secs / 60;

  if (mins < 60) {
    const minutes = Math.floor(mins);
    return addTime(_objectSpread(_objectSpread({}, ZERO), {}, {
      minutes
    }), extractTime(milliseconds - minutes * 60 * 1000));
  }

  const hrs = mins / 60;

  if (hrs < 24) {
    const hours = Math.floor(hrs);
    return addTime(_objectSpread(_objectSpread({}, ZERO), {}, {
      hours
    }), extractTime(milliseconds - hours * HRS * 1000));
  }

  const days = Math.floor(hrs / 24);
  return addTime(_objectSpread(_objectSpread({}, ZERO), {}, {
    days
  }), extractTime(milliseconds - days * DAY * 1000));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatBalance.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/formatBalance.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../bn/toBn */ "../../node_modules/@polkadot/util/bn/toBn.js"));

var _boolean = _interopRequireDefault(__webpack_require__(/*! ../is/boolean */ "../../node_modules/@polkadot/util/is/boolean.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ../is/undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

var _formatDecimal = _interopRequireDefault(__webpack_require__(/*! ./formatDecimal */ "../../node_modules/@polkadot/util/format/formatDecimal.js"));

var _si = __webpack_require__(/*! ./si */ "../../node_modules/@polkadot/util/format/si.js");

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_DECIMALS = 0;
const DEFAULT_UNIT = _si.SI[_si.SI_MID].text;
let defaultDecimals = DEFAULT_DECIMALS;
let defaultUnit = DEFAULT_UNIT; // Formats a string/number with <prefix>.<postfix><type> notation

function _formatBalance(input, options = true, optDecimals = defaultDecimals) {
  let text = (0, _toBn.default)(input).toString();

  if (text.length === 0 || text === '0') {
    return '0';
  } // strip the negative sign so we can work with clean groupings, re-add this in the
  // end when we return the result (from here on we work with positive numbers)


  const isNegative = text[0].startsWith('-');

  if (isNegative) {
    text = text.substr(1);
  } // extract options - the boolean case is for backwards-compat


  const {
    decimals = optDecimals,
    forceUnit = undefined,
    withSi = true,
    withSiFull = false,
    withUnit = true
  } = (0, _boolean.default)(options) ? {
    withSi: options
  } : options; // NOTE We start at midpoint (8) minus 1 - this means that values display as
  // 123.456 instead of 0.123k (so always 6 relevant). Additionally we us ceil
  // so there are at most 3 decimal before the decimal seperator

  const si = (0, _si.calcSi)(text, decimals, forceUnit);
  const mid = text.length - (decimals + si.power);
  const prefix = text.substr(0, mid);
  const padding = mid < 0 ? 0 - mid : 0;
  const postfix = `${`${new Array(padding + 1).join('0')}${text}`.substr(mid < 0 ? 0 : mid)}0000`.substr(0, 4);
  const units = withSi || withSiFull ? si.value === '-' ? withUnit ? ` ${(0, _boolean.default)(withUnit) ? si.text : withUnit}` : '' : ` ${withSiFull ? si.text : si.value}${withUnit ? `${withSiFull ? ' ' : ''}${(0, _boolean.default)(withUnit) ? _si.SI[_si.SI_MID].text : withUnit}` : ''}` : '';
  return `${isNegative ? '-' : ''}${(0, _formatDecimal.default)(prefix || '0')}.${postfix}${units}`;
}

const formatBalance = _formatBalance; // eslint-disable-next-line @typescript-eslint/unbound-method

formatBalance.calcSi = (text, decimals = defaultDecimals) => (0, _si.calcSi)(text, decimals); // eslint-disable-next-line @typescript-eslint/unbound-method


formatBalance.findSi = _si.findSi; // eslint-disable-next-line @typescript-eslint/unbound-method

formatBalance.getDefaults = () => {
  return {
    decimals: defaultDecimals,
    unit: defaultUnit
  };
}; // get allowable options to display in a dropdown
// eslint-disable-next-line @typescript-eslint/unbound-method


formatBalance.getOptions = (decimals = defaultDecimals) => {
  return _si.SI.filter(({
    power
  }) => power < 0 ? decimals + power >= 0 : true);
}; // Sets the default decimals to use for formatting (ui-wide)
// eslint-disable-next-line @typescript-eslint/unbound-method


formatBalance.setDefaults = ({
  decimals,
  unit
}) => {
  defaultDecimals = (0, _undefined.default)(decimals) ? defaultDecimals : decimals;
  defaultUnit = (0, _undefined.default)(unit) ? defaultUnit : unit;
  _si.SI[_si.SI_MID].text = defaultUnit;
};

var _default = formatBalance;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatDate.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/formatDate.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDate;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
function zeroPad(value) {
  return value.toString().padStart(2, '0');
}

function formatDate(date) {
  const year = date.getFullYear().toString();
  const month = zeroPad(date.getMonth() + 1);
  const day = zeroPad(date.getDate());
  const hour = zeroPad(date.getHours());
  const minute = zeroPad(date.getMinutes());
  const second = zeroPad(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatDecimal.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/formatDecimal.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDecimal;
// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const NUMBER_REGEX = new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');

function formatDecimal(value) {
  // We can do this by adjusting the regx, however for the sake of clarity
  // we rather strip and re-add the negative sign in the output
  const isNegative = value[0].startsWith('-');
  const matched = isNegative ? value.substr(1).match(NUMBER_REGEX) : value.match(NUMBER_REGEX);
  return matched ? `${isNegative ? '-' : ''}${matched.join(',')}` : value;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatElapsed.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/formatElapsed.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatElapsed;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../is/toBn */ "../../node_modules/@polkadot/util/is/toBn.js"));

// Copyright 2017-2020 @polkadot/ui-util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function getValue(value) {
  if (value) {
    if ((0, _toBn.default)(value)) {
      return getValue(value.toBn());
    } else if (value instanceof Date) {
      return getValue(value.getTime());
    } else if (value instanceof _bn.default) {
      return getValue(value.toNumber());
    }
  }

  return value || 0;
}

function formatElapsed(now, value) {
  const tsNow = now && now.getTime() || 0;
  const tsValue = getValue(value);
  let display = '0.0s';

  if (tsNow && tsValue) {
    const elapsed = Math.max(Math.abs(tsNow - tsValue), 0) / 1000;

    if (elapsed < 15) {
      display = `${elapsed.toFixed(1)}s`;
    } else if (elapsed < 60) {
      display = `${elapsed | 0}s`;
    } else if (elapsed < 3600) {
      display = `${elapsed / 60 | 0}m`;
    } else {
      display = `${elapsed / 3600 | 0}h`;
    }
  }

  return display;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatNumber.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/formatNumber.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNumber;

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../bn/toBn */ "../../node_modules/@polkadot/util/bn/toBn.js"));

var _formatDecimal = _interopRequireDefault(__webpack_require__(/*! ./formatDecimal */ "../../node_modules/@polkadot/util/format/formatDecimal.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function formatNumber(value) {
  return (0, _formatDecimal.default)((0, _toBn.default)(value).toString());
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatBalance", {
  enumerable: true,
  get: function () {
    return _formatBalance.default;
  }
});
Object.defineProperty(exports, "formatDate", {
  enumerable: true,
  get: function () {
    return _formatDate.default;
  }
});
Object.defineProperty(exports, "formatDecimal", {
  enumerable: true,
  get: function () {
    return _formatDecimal.default;
  }
});
Object.defineProperty(exports, "formatElapsed", {
  enumerable: true,
  get: function () {
    return _formatElapsed.default;
  }
});
Object.defineProperty(exports, "formatNumber", {
  enumerable: true,
  get: function () {
    return _formatNumber.default;
  }
});
Object.defineProperty(exports, "calcSi", {
  enumerable: true,
  get: function () {
    return _si.calcSi;
  }
});
Object.defineProperty(exports, "findSi", {
  enumerable: true,
  get: function () {
    return _si.findSi;
  }
});

var _formatBalance = _interopRequireDefault(__webpack_require__(/*! ./formatBalance */ "../../node_modules/@polkadot/util/format/formatBalance.js"));

var _formatDate = _interopRequireDefault(__webpack_require__(/*! ./formatDate */ "../../node_modules/@polkadot/util/format/formatDate.js"));

var _formatDecimal = _interopRequireDefault(__webpack_require__(/*! ./formatDecimal */ "../../node_modules/@polkadot/util/format/formatDecimal.js"));

var _formatElapsed = _interopRequireDefault(__webpack_require__(/*! ./formatElapsed */ "../../node_modules/@polkadot/util/format/formatElapsed.js"));

var _formatNumber = _interopRequireDefault(__webpack_require__(/*! ./formatNumber */ "../../node_modules/@polkadot/util/format/formatNumber.js"));

var _si = __webpack_require__(/*! ./si */ "../../node_modules/@polkadot/util/format/si.js");

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/si.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/format/si.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSi = findSi;
exports.calcSi = calcSi;
exports.SI = exports.SI_MID = void 0;
// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const SI_MID = 8;
exports.SI_MID = SI_MID;
const SI = [{
  power: -24,
  text: 'yocto',
  value: 'y'
}, {
  power: -21,
  text: 'zepto',
  value: 'z'
}, {
  power: -18,
  text: 'atto',
  value: 'a'
}, {
  power: -15,
  text: 'femto',
  value: 'f'
}, {
  power: -12,
  text: 'pico',
  value: 'p'
}, {
  power: -9,
  text: 'nano',
  value: 'n'
}, {
  power: -6,
  text: 'micro',
  value: 'µ'
}, {
  power: -3,
  text: 'milli',
  value: 'm'
}, {
  power: 0,
  text: 'Unit',
  value: '-'
}, // position 8
{
  power: 3,
  text: 'Kilo',
  value: 'k'
}, {
  power: 6,
  text: 'Mega',
  value: 'M'
}, {
  power: 9,
  text: 'Giga',
  value: 'G'
}, {
  power: 12,
  text: 'Tera',
  value: 'T'
}, {
  power: 15,
  text: 'Peta',
  value: 'P'
}, {
  power: 18,
  text: 'Exa',
  value: 'E'
}, {
  power: 21,
  text: 'Zeta',
  value: 'Z'
}, {
  power: 24,
  text: 'Yotta',
  value: 'Y'
}]; // Given a SI type (e.g. k, m, Y) find the SI definition

exports.SI = SI;

function findSi(type) {
  // use a loop here, better RN support (which doesn't have [].find)
  for (let i = 0; i < SI.length; i++) {
    if (SI[i].value === type) {
      return SI[i];
    }
  }

  return SI[SI_MID];
}

function calcSi(text, decimals, forceUnit) {
  if (forceUnit) {
    return findSi(forceUnit);
  }

  const siDefIndex = SI_MID - 1 + Math.ceil((text.length - decimals) / 3);
  return SI[siDefIndex] || SI[siDefIndex < 0 ? 0 : SI.length - 1];
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/addPrefix.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/addPrefix.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexAddPrefix;

var _hasPrefix = _interopRequireDefault(__webpack_require__(/*! ./hasPrefix */ "../../node_modules/@polkadot/util/hex/hasPrefix.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexAddPrefix
 * @summary Adds the `0x` prefix to string values.
 * @description
 * Returns a `0x` prefixed string from the input value. If the input is already prefixed, it is returned unchanged.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexAddPrefix } from '@polkadot/util';
 *
 * console.log('With prefix', hexAddPrefix('0a0b12')); // => 0x0a0b12
 * ```
 */
function hexAddPrefix(value) {
  if (value && (0, _hasPrefix.default)(value)) {
    return value;
  }

  const prefix = value && value.length % 2 === 1 ? '0' : '';
  return `0x${prefix}${value || ''}`;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/fixLength.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/fixLength.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexFixLength;

var _addPrefix = _interopRequireDefault(__webpack_require__(/*! ./addPrefix */ "../../node_modules/@polkadot/util/hex/addPrefix.js"));

var _stripPrefix = _interopRequireDefault(__webpack_require__(/*! ./stripPrefix */ "../../node_modules/@polkadot/util/hex/stripPrefix.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexFixLength
 * @summary Shifts a hex string to a specific bitLength
 * @description
 * Returns a `0x` prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When `withPadding` is set, shorter values are padded with `0`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexFixLength } from '@polkadot/util';
 *
 * console.log('fixed', hexFixLength('0x12', 16)); // => 0x12
 * console.log('fixed', hexFixLength('0x12', 16, true)); // => 0x0012
 * console.log('fixed', hexFixLength('0x0012', 8)); // => 0x12
 * ```
 */
function hexFixLength(value, bitLength = -1, withPadding = false) {
  const strLength = Math.ceil(bitLength / 4);
  const hexLength = strLength + 2;
  return (0, _addPrefix.default)(bitLength === -1 || value.length === hexLength || !withPadding && value.length < hexLength ? (0, _stripPrefix.default)(value) : value.length > hexLength ? (0, _stripPrefix.default)(value).slice(-1 * strLength) : `${'0'.repeat(strLength)}${(0, _stripPrefix.default)(value)}`.slice(-1 * strLength));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/hasPrefix.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/hasPrefix.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexHasPrefix;

var _hex = _interopRequireDefault(__webpack_require__(/*! ../is/hex */ "../../node_modules/@polkadot/util/is/hex.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexHasPrefix
 * @summary Tests for the existence of a `0x` prefix.
 * @description
 * Checks for a valid hex input value and if the start matched `0x`
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexHasPrefix } from '@polkadot/util';
 *
 * console.log('has prefix', hexHasPrefix('0x1234')); // => true
 * ```
 */
function hexHasPrefix(value) {
  return !!(value && (0, _hex.default)(value, -1, true) && value.substr(0, 2) === '0x');
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/index.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hexAddPrefix", {
  enumerable: true,
  get: function () {
    return _addPrefix.default;
  }
});
Object.defineProperty(exports, "hexFixLength", {
  enumerable: true,
  get: function () {
    return _fixLength.default;
  }
});
Object.defineProperty(exports, "hexHasPrefix", {
  enumerable: true,
  get: function () {
    return _hasPrefix.default;
  }
});
Object.defineProperty(exports, "hexStripPrefix", {
  enumerable: true,
  get: function () {
    return _stripPrefix.default;
  }
});
Object.defineProperty(exports, "hexToBn", {
  enumerable: true,
  get: function () {
    return _toBn.default;
  }
});
Object.defineProperty(exports, "hexToNumber", {
  enumerable: true,
  get: function () {
    return _toNumber.default;
  }
});
Object.defineProperty(exports, "hexToString", {
  enumerable: true,
  get: function () {
    return _toString.default;
  }
});
Object.defineProperty(exports, "hexToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _addPrefix = _interopRequireDefault(__webpack_require__(/*! ./addPrefix */ "../../node_modules/@polkadot/util/hex/addPrefix.js"));

var _fixLength = _interopRequireDefault(__webpack_require__(/*! ./fixLength */ "../../node_modules/@polkadot/util/hex/fixLength.js"));

var _hasPrefix = _interopRequireDefault(__webpack_require__(/*! ./hasPrefix */ "../../node_modules/@polkadot/util/hex/hasPrefix.js"));

var _stripPrefix = _interopRequireDefault(__webpack_require__(/*! ./stripPrefix */ "../../node_modules/@polkadot/util/hex/stripPrefix.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/hex/toBn.js"));

var _toNumber = _interopRequireDefault(__webpack_require__(/*! ./toNumber */ "../../node_modules/@polkadot/util/hex/toNumber.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./toString */ "../../node_modules/@polkadot/util/hex/toString.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/hex/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/stripPrefix.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/stripPrefix.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexStripPrefix;

var _hasPrefix = _interopRequireDefault(__webpack_require__(/*! ./hasPrefix */ "../../node_modules/@polkadot/util/hex/hasPrefix.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const UNPREFIX_HEX_REGEX = /^[a-fA-F0-9]+$/;
/**
 * @name hexStripPrefix
 * @summary Strips any leading `0x` prefix.
 * @description
 * Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexStripPrefix } from '@polkadot/util';
 *
 * console.log('stripped', hexStripPrefix('0x1234')); // => 1234
 * ```
 */

function hexStripPrefix(value) {
  if (!value) {
    return '';
  }

  if ((0, _hasPrefix.default)(value)) {
    return value.substr(2);
  }

  if (UNPREFIX_HEX_REGEX.test(value)) {
    return value;
  }

  throw new Error(`Invalid hex ${value} passed to hexStripPrefix`);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/toBn.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/toBn.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToBn;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

var _boolean = _interopRequireDefault(__webpack_require__(/*! ../is/boolean */ "../../node_modules/@polkadot/util/is/boolean.js"));

var _stripPrefix = _interopRequireDefault(__webpack_require__(/*! ./stripPrefix */ "../../node_modules/@polkadot/util/hex/stripPrefix.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reverse(value) {
  return (value.match(new RegExp('.{1,2}', 'g')) || []).reverse().join('');
}
/**
 * @name hexToBn
 * @summary Creates a BN.js bignumber object from a hex string.
 * @description
 * `null` inputs returns a `BN(0)` result. Hex input values return the actual value converted to a BN. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @param _value The value to convert
 * @param _options Options to pass while converting
 * @param _options.isLe Convert using Little Endian
 * @param _options.isNegative Convert using two's complement
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToBn } from '@polkadot/util';
 *
 * hexToBn('0x123480001f'); // => BN(0x123480001f)
 * ```
 */


function hexToBn(value, options = {
  isLe: false,
  isNegative: false
}) {
  if (!value) {
    return new _bn.default(0);
  }

  const _options = _objectSpread({
    isLe: false,
    isNegative: false
  }, (0, _boolean.default)(options) ? {
    isLe: options
  } : options);

  const _value = (0, _stripPrefix.default)(value); // FIXME: Use BN's 3rd argument `isLe` once this issue is fixed
  // https://github.com/indutny/bn.js/issues/208


  const bn = new _bn.default((_options.isLe ? reverse(_value) : _value) || '00', 16); // fromTwos takes as parameter the number of bits, which is the hex length
  // multiplied by 4.

  return _options.isNegative ? bn.fromTwos(_value.length * 4) : bn;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/toNumber.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/toNumber.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToNumber;

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/hex/toBn.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexToNumber
 * @summary Creates a Number value from a Buffer object.
 * @description
 * `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToNumber } from '@polkadot/util';
 *
 * hexToNumber('0x1234'); // => 0x1234
 * ```
 */
function hexToNumber(value) {
  return value ? (0, _toBn.default)(value).toNumber() : NaN;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/toString.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/toString.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToString;

var _toString = _interopRequireDefault(__webpack_require__(/*! ../u8a/toString */ "../../node_modules/@polkadot/util/u8a/toString.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/hex/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexToU8a
 * @summary Creates a Uint8Array object from a hex string.
 * @description
 * Hex input values return the actual bytes value converted to a string. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToString } from '@polkadot/util';
 *
 * hexToU8a('0x68656c6c6f'); // hello
 * ```
 */
function hexToString(_value) {
  return (0, _toString.default)((0, _toU8a.default)(_value));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/toU8a.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/hex/toU8a.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToU8a;

var _assert = _interopRequireDefault(__webpack_require__(/*! ../assert */ "../../node_modules/@polkadot/util/assert.js"));

var _hex = _interopRequireDefault(__webpack_require__(/*! ../is/hex */ "../../node_modules/@polkadot/util/is/hex.js"));

var _stripPrefix = _interopRequireDefault(__webpack_require__(/*! ./stripPrefix */ "../../node_modules/@polkadot/util/hex/stripPrefix.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexToU8a
 * @summary Creates a Uint8Array object from a hex string.
 * @description
 * `null` inputs returns an empty `Uint8Array` result. Hex input values return the actual bytes value converted to a Uint8Array. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToU8a } from '@polkadot/util';
 *
 * hexToU8a('0x80001f'); // Uint8Array([0x80, 0x00, 0x1f])
 * hexToU8a('0x80001f', 32); // Uint8Array([0x00, 0x80, 0x00, 0x1f])
 * ```
 */
function hexToU8a(_value, bitLength = -1) {
  if (!_value) {
    return new Uint8Array();
  }

  (0, _assert.default)((0, _hex.default)(_value), `Expected hex value to convert, found '${_value}'`);
  const value = (0, _stripPrefix.default)(_value);
  const valLength = value.length / 2;
  const bufLength = Math.ceil(bitLength === -1 ? valLength : bitLength / 8);
  const result = new Uint8Array(bufLength);
  const offset = Math.max(0, bufLength - valLength);

  for (let index = 0; index < bufLength; index++) {
    result[index + offset] = parseInt(value.substr(index * 2, 2), 16);
  }

  return result;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/index.js":
/*!*******************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  assert: true,
  detectPackage: true,
  extractTime: true,
  logger: true,
  promisify: true
};
Object.defineProperty(exports, "assert", {
  enumerable: true,
  get: function () {
    return _assert.default;
  }
});
Object.defineProperty(exports, "detectPackage", {
  enumerable: true,
  get: function () {
    return _detectPackage.default;
  }
});
Object.defineProperty(exports, "extractTime", {
  enumerable: true,
  get: function () {
    return _extractTime.default;
  }
});
Object.defineProperty(exports, "logger", {
  enumerable: true,
  get: function () {
    return _logger.default;
  }
});
Object.defineProperty(exports, "promisify", {
  enumerable: true,
  get: function () {
    return _promisify.default;
  }
});

__webpack_require__(/*! ./polyfill */ "../../node_modules/@polkadot/util/polyfill/index.js");

var _assert = _interopRequireDefault(__webpack_require__(/*! ./assert */ "../../node_modules/@polkadot/util/assert.js"));

var _detectPackage = _interopRequireDefault(__webpack_require__(/*! ./detectPackage */ "../../node_modules/@polkadot/util/detectPackage.js"));

var _extractTime = _interopRequireDefault(__webpack_require__(/*! ./extractTime */ "../../node_modules/@polkadot/util/extractTime.js"));

var _logger = _interopRequireDefault(__webpack_require__(/*! ./logger */ "../../node_modules/@polkadot/util/logger.js"));

var _promisify = _interopRequireDefault(__webpack_require__(/*! ./promisify */ "../../node_modules/@polkadot/util/promisify.js"));

var _array = __webpack_require__(/*! ./array */ "../../node_modules/@polkadot/util/array/index.js");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _array[key];
    }
  });
});

var _bn = __webpack_require__(/*! ./bn */ "../../node_modules/@polkadot/util/bn/index.js");

Object.keys(_bn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bn[key];
    }
  });
});

var _buffer = __webpack_require__(/*! ./buffer */ "../../node_modules/@polkadot/util/buffer/index.js");

Object.keys(_buffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buffer[key];
    }
  });
});

var _compact = __webpack_require__(/*! ./compact */ "../../node_modules/@polkadot/util/compact/index.js");

Object.keys(_compact).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compact[key];
    }
  });
});

var _format = __webpack_require__(/*! ./format */ "../../node_modules/@polkadot/util/format/index.js");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});

var _hex = __webpack_require__(/*! ./hex */ "../../node_modules/@polkadot/util/hex/index.js");

Object.keys(_hex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hex[key];
    }
  });
});

var _is = __webpack_require__(/*! ./is */ "../../node_modules/@polkadot/util/is/index.js");

Object.keys(_is).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _is[key];
    }
  });
});

var _number = __webpack_require__(/*! ./number */ "../../node_modules/@polkadot/util/number/index.js");

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _number[key];
    }
  });
});

var _string = __webpack_require__(/*! ./string */ "../../node_modules/@polkadot/util/string/index.js");

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _string[key];
    }
  });
});

var _u8a = __webpack_require__(/*! ./u8a */ "../../node_modules/@polkadot/util/u8a/index.js");

Object.keys(_u8a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _u8a[key];
    }
  });
});

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/ascii.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/ascii.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ../u8a/toU8a */ "../../node_modules/@polkadot/util/u8a/toU8a.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "../../node_modules/@polkadot/util/is/string.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const FORMAT = [9, 10, 13];
/**
 * @name isAscii
 * @summary Tests if the input is printable ASCII
 * @description
 * Checks to see if the input string or Uint8Array is printable ASCII, 32-127 + formatters
 */

function isAscii(value) {
  if (!value) {
    return (0, _string.default)(value);
  }

  const u8a = (0, _toU8a.default)(value);
  return !u8a.some(byte => byte >= 127 || byte < 32 && !FORMAT.includes(byte));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/bigInt.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/bigInt.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBigInt;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBigInt
 * @summary Tests for a `BigInt` object instance.
 * @description
 * Checks to see if the input object is an instance of `BigInt`
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBigInt } from '@polkadot/util';
 *
 * console.log('isBigInt', isBigInt(123_456n)); // => true
 * ```
 */
function isBigInt(value) {
  return typeof value === 'bigint';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/bn.js":
/*!*******************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/bn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBn;

var _bn = _interopRequireDefault(__webpack_require__(/*! bn.js */ "../../node_modules/bn.js/lib/bn.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBn
 * @summary Tests for a `BN` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { isBn } from '@polkadot/util';
 *
 * console.log('isBn', isBn(new BN(1))); // => true
 * ```
 */
function isBn(value) {
  return _bn.default.isBN(value);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/boolean.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/boolean.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from '@polkadot/util';
 *
 * isBoolean(false); // => true
 * ```
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/buffer.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/buffer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBuffer;

var _instanceOf = _interopRequireDefault(__webpack_require__(/*! ./instanceOf */ "../../node_modules/@polkadot/util/is/instanceOf.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBuffer
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBuffer } from '@polkadot/util';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
function isBuffer(value) {
  return (0, _instanceOf.default)(value, Buffer);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/childClass.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/childClass.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isChildClass;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isChildClass
 * @summary Tests if the child extends the parent Class
 * @description
 * Checks to see if the child Class extends the parent Class
 * @example
 * <BR>
 *
 * ```javascript
 * import { isChildClass } from '@polkadot/util';
 *
 * console.log('isChildClass', isChildClass(BN, BN); // => true
 * console.log('isChildClass', isChildClass(BN, Uint8Array); // => false
 * ```
 */
function isChildClass(Parent, Child) {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  return Child // eslint-disable-next-line no-prototype-builtins
  ? Parent === Child || Parent.isPrototypeOf(Child) : false;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/error.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/error.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isError;

var _instanceOf = _interopRequireDefault(__webpack_require__(/*! ./instanceOf */ "../../node_modules/@polkadot/util/is/instanceOf.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isError
 * @summary Tests for a `Error` object instance.
 * @description
 * Checks to see if the input object is an instance of `Error`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isError } from '@polkadot/util';
 *
 * console.log('isError', isError(new Error('message'))); // => true
 * ```
 */
function isError(value) {
  return (0, _instanceOf.default)(value, Error);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/function.js":
/*!*************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// eslint-disable-next-line @typescript-eslint/ban-types

/**
 * @name isFunction
 * @summary Tests for a `function`.
 * @description
 * Checks to see if the input value is a JavaScript function.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isFunction } from '@polkadot/util';
 *
 * isFunction(() => false); // => true
 * ```
 */
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/hex.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/hex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHex;

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "../../node_modules/@polkadot/util/is/string.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const HEX_REGEX = /^0x[a-fA-F0-9]+$/;
/**
 * @name isHex
 * @summary Tests for a hex string.
 * @description
 * Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isHex } from '@polkadot/util';
 *
 * isHex('0x1234'); // => true
 * isHex('0x1234', 8); // => false
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types

function isHex(value, bitLength = -1, ignoreLength = false) {
  const isValidHex = value === '0x' || (0, _string.default)(value) && HEX_REGEX.test(value.toString());

  if (isValidHex && bitLength !== -1) {
    return value.length === 2 + Math.ceil(bitLength / 4);
  }

  return isValidHex && (ignoreLength || value.length % 2 === 0);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/index.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isAscii", {
  enumerable: true,
  get: function () {
    return _ascii.default;
  }
});
Object.defineProperty(exports, "isBigInt", {
  enumerable: true,
  get: function () {
    return _bigInt.default;
  }
});
Object.defineProperty(exports, "isBn", {
  enumerable: true,
  get: function () {
    return _bn.default;
  }
});
Object.defineProperty(exports, "isBuffer", {
  enumerable: true,
  get: function () {
    return _buffer.default;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function () {
    return _boolean.default;
  }
});
Object.defineProperty(exports, "isChildClass", {
  enumerable: true,
  get: function () {
    return _childClass.default;
  }
});
Object.defineProperty(exports, "isError", {
  enumerable: true,
  get: function () {
    return _error.default;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function () {
    return _function.default;
  }
});
Object.defineProperty(exports, "isHex", {
  enumerable: true,
  get: function () {
    return _hex.default;
  }
});
Object.defineProperty(exports, "isInstanceOf", {
  enumerable: true,
  get: function () {
    return _instanceOf.default;
  }
});
Object.defineProperty(exports, "isIp", {
  enumerable: true,
  get: function () {
    return _ip.default;
  }
});
Object.defineProperty(exports, "isJsonObject", {
  enumerable: true,
  get: function () {
    return _jsonObject.default;
  }
});
Object.defineProperty(exports, "isNull", {
  enumerable: true,
  get: function () {
    return _null.default;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function () {
    return _number.default;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function () {
    return _object.default;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _observable.default;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function () {
    return _string.default;
  }
});
Object.defineProperty(exports, "isTestChain", {
  enumerable: true,
  get: function () {
    return _testChain.default;
  }
});
Object.defineProperty(exports, "isToBn", {
  enumerable: true,
  get: function () {
    return _toBn.default;
  }
});
Object.defineProperty(exports, "isU8a", {
  enumerable: true,
  get: function () {
    return _u8a.default;
  }
});
Object.defineProperty(exports, "isUndefined", {
  enumerable: true,
  get: function () {
    return _undefined.default;
  }
});
Object.defineProperty(exports, "isUtf8", {
  enumerable: true,
  get: function () {
    return _utf.default;
  }
});
Object.defineProperty(exports, "isWasm", {
  enumerable: true,
  get: function () {
    return _wasm.default;
  }
});

var _ascii = _interopRequireDefault(__webpack_require__(/*! ./ascii */ "../../node_modules/@polkadot/util/is/ascii.js"));

var _bigInt = _interopRequireDefault(__webpack_require__(/*! ./bigInt */ "../../node_modules/@polkadot/util/is/bigInt.js"));

var _bn = _interopRequireDefault(__webpack_require__(/*! ./bn */ "../../node_modules/@polkadot/util/is/bn.js"));

var _buffer = _interopRequireDefault(__webpack_require__(/*! ./buffer */ "../../node_modules/@polkadot/util/is/buffer.js"));

var _boolean = _interopRequireDefault(__webpack_require__(/*! ./boolean */ "../../node_modules/@polkadot/util/is/boolean.js"));

var _childClass = _interopRequireDefault(__webpack_require__(/*! ./childClass */ "../../node_modules/@polkadot/util/is/childClass.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "../../node_modules/@polkadot/util/is/error.js"));

var _function = _interopRequireDefault(__webpack_require__(/*! ./function */ "../../node_modules/@polkadot/util/is/function.js"));

var _hex = _interopRequireDefault(__webpack_require__(/*! ./hex */ "../../node_modules/@polkadot/util/is/hex.js"));

var _instanceOf = _interopRequireDefault(__webpack_require__(/*! ./instanceOf */ "../../node_modules/@polkadot/util/is/instanceOf.js"));

var _ip = _interopRequireDefault(__webpack_require__(/*! ./ip */ "../../node_modules/@polkadot/util/is/ip.js"));

var _jsonObject = _interopRequireDefault(__webpack_require__(/*! ./jsonObject */ "../../node_modules/@polkadot/util/is/jsonObject.js"));

var _null = _interopRequireDefault(__webpack_require__(/*! ./null */ "../../node_modules/@polkadot/util/is/null.js"));

var _number = _interopRequireDefault(__webpack_require__(/*! ./number */ "../../node_modules/@polkadot/util/is/number.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "../../node_modules/@polkadot/util/is/object.js"));

var _observable = _interopRequireDefault(__webpack_require__(/*! ./observable */ "../../node_modules/@polkadot/util/is/observable.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "../../node_modules/@polkadot/util/is/string.js"));

var _testChain = _interopRequireDefault(__webpack_require__(/*! ./testChain */ "../../node_modules/@polkadot/util/is/testChain.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/is/toBn.js"));

var _u8a = _interopRequireDefault(__webpack_require__(/*! ./u8a */ "../../node_modules/@polkadot/util/is/u8a.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ./undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

var _utf = _interopRequireDefault(__webpack_require__(/*! ./utf8 */ "../../node_modules/@polkadot/util/is/utf8.js"));

var _wasm = _interopRequireDefault(__webpack_require__(/*! ./wasm */ "../../node_modules/@polkadot/util/is/wasm.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/instanceOf.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/instanceOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInstanceOf;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isInstanceOf
 * @summary Tests for a instance of a class.
 * @description
 * Checks to see if the input value is an instance of the test class.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isInstanceOf } from '@polkadot/util';
 *
 * console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isInstanceOf(value, clazz) {
  return value instanceof clazz;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/ip.js":
/*!*******************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/ip.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIp;

var _ipRegex = _interopRequireDefault(__webpack_require__(/*! ip-regex */ "../../node_modules/ip-regex/index.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isIp
 * @summary Tests if the value is a valid IP address
 * @description
 * Checks to see if the value is a valid IP address. Optionally check for either v4/v6
 * @example
 * <BR>
 *
 * ```javascript
 * import { isIp } from '@polkadot/util';
 *
 * isIp('192.168.0.1')); // => true
 * isIp('1:2:3:4:5:6:7:8'); // => true
 * isIp('192.168.0.1', 'v6')); // => false
 * isIp('1:2:3:4:5:6:7:8', 'v4'); // => false
 * ```
 */
function isIp(value, type) {
  if (type === 'v4') {
    return _ipRegex.default.v4({
      exact: true
    }).test(value);
  } else if (type === 'v6') {
    return _ipRegex.default.v6({
      exact: true
    }).test(value);
  }

  return (0, _ipRegex.default)({
    exact: true
  }).test(value);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/jsonObject.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/jsonObject.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJsonObject;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isJsonObject
 * @summary Tests for a valid JSON `object`.
 * @description
 * Checks to see if the input value is a valid JSON object.
 * It returns false if the input is JSON parsable, but not an Javascript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isJsonObject } from '@polkadot/util';
 *
 * isJsonObject({}); // => true
 * isJsonObject({
 *  "Test": "1234",
 *  "NestedTest": {
 *   "Test": "5678"
 *  }
 * }); // => true
 * isJsonObject(1234); // JSON parsable, but not an object =>  false
 * isJsonObject(null); // JSON parsable, but not an object => false
 * isJsonObject('not an object'); // => false
 * ```
 */
function isJsonObject(value) {
  const str = typeof value !== 'string' ? JSON.stringify(value) : value;

  try {
    const obj = JSON.parse(str);
    return typeof obj === 'object' && obj !== null;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/null.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/null.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNull;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isNull
 * @summary Tests for a `null` values.
 * @description
 * Checks to see if the input value is `null`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNull } from '@polkadot/util';
 *
 * console.log('isNull', isNull(null)); // => true
 * ```
 */
function isNull(value) {
  return value === null;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/number.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/number.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isNumber
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNumber } from '@polkadot/util';
 *
 * console.log('isNumber', isNumber(1234)); // => true
 * ```
 */
function isNumber(value) {
  return typeof value === 'number';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/object.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isObject
 * @summary Tests for an `object`.
 * @description
 * Checks to see if the input value is a JavaScript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObject } from '@polkadot/util';
 *
 * isObject({}); // => true
 * isObject('something'); // => false
 * ```
 */
function isObject(value) {
  return typeof value === 'object';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/observable.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObservable;

var _function = _interopRequireDefault(__webpack_require__(/*! ./function */ "../../node_modules/@polkadot/util/is/function.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "../../node_modules/@polkadot/util/is/object.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBObservable
 * @summary Tests for a `Observable` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObservable } from '@polkadot/util';
 *
 * console.log('isObservable', isObservable(...));
 * ```
 */
function isObservable(value) {
  return (0, _object.default)(value) && (0, _function.default)(value.next);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/string.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isString;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isString
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isString } from '@polkadot/util';
 *
 * console.log('isString', isString('test')); // => true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/testChain.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/testChain.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTestChain;
// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const re = new RegExp('(Development|Local Testnet)$');

function isTestChain(chain) {
  if (!chain) {
    return false;
  }

  return !!re.test(chain.toString());
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/toBn.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/toBn.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isToBn;

var _function = _interopRequireDefault(__webpack_require__(/*! ./function */ "../../node_modules/@polkadot/util/is/function.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isToBn(value) {
  return !!value && (0, _function.default)(value.toBn);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/u8a.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/u8a.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isU8a;

var _instanceOf = _interopRequireDefault(__webpack_require__(/*! ./instanceOf */ "../../node_modules/@polkadot/util/is/instanceOf.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from '@polkadot/util';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
function isU8a(value) {
  return (0, _instanceOf.default)(value, Uint8Array);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/undefined.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/undefined.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUndefined;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isUndefined
 * @summary Tests for a `undefined` values.
 * @description
 * Checks to see if the input value is `undefined`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUndefined } from '@polkadot/util';
 *
 * console.log('isUndefined', isUndefined(void(0))); // => true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isUndefined(value) {
  return typeof value === 'undefined';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/utf8.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/utf8.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUtf8;

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ../u8a/toU8a */ "../../node_modules/@polkadot/util/u8a/toU8a.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "../../node_modules/@polkadot/util/is/string.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Adapted from https://github.com/JulienPalard/is_utf8/blob/master/is_utf8.c

/**
 * @name isUtf8
 * @summary Tests if the input is valid Utf8
 * @description
 * Checks to see if the input string or Uint8Array is valid Utf8
 */
function isUtf8(value) {
  if (!value) {
    return (0, _string.default)(value);
  }

  const u8a = (0, _toU8a.default)(value);
  const len = u8a.length;
  let i = 0;

  while (i < len) {
    if (u8a[i] <= 0x7F)
      /* 00..7F */
      {
        i += 1;
      } else if (u8a[i] >= 0xC2 && u8a[i] <= 0xDF)
      /* C2..DF 80..BF */
      {
        if (i + 1 < len)
          /* Expect a 2nd byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte between C2 and DF, expecting a 2nd byte between 80 and BF";
              // *faulty_bytes = 2;
              return false;
            }
          } else {
          // *message = "After a first byte between C2 and DF, expecting a 2nd byte.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 2;
      } else if (u8a[i] === 0xE0)
      /* E0 A0..BF 80..BF */
      {
        if (i + 2 < len)
          /* Expect a 2nd and 3rd byte */
          {
            if (u8a[i + 1] < 0xA0 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte of E0, expecting a 2nd byte between A0 and BF.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte of E0, expecting a 3nd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }
          } else {
          // *message = "After a first byte of E0, expecting two following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 3;
      } else if (u8a[i] >= 0xE1 && u8a[i] <= 0xEC)
      /* E1..EC 80..BF 80..BF */
      {
        if (i + 2 < len)
          /* Expect a 2nd and 3rd byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte between E1 and EC, expecting the 2nd byte between 80 and BF.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte between E1 and EC, expecting the 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }
          } else {
          // *message = "After a first byte between E1 and EC, expecting two following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 3;
      } else if (u8a[i] === 0xED)
      /* ED 80..9F 80..BF */
      {
        if (i + 2 < len)
          /* Expect a 2nd and 3rd byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0x9F) {
              // *message = "After a first byte of ED, expecting 2nd byte between 80 and 9F.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte of ED, expecting 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }
          } else {
          // *message = "After a first byte of ED, expecting two following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 3;
      } else if (u8a[i] >= 0xEE && u8a[i] <= 0xEF)
      /* EE..EF 80..BF 80..BF */
      {
        if (i + 2 < len)
          /* Expect a 2nd and 3rd byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte between EE and EF, expecting 2nd byte between 80 and BF.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte between EE and EF, expecting 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }
          } else {
          // *message = "After a first byte between EE and EF, two following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 3;
      } else if (u8a[i] === 0xF0)
      /* F0 90..BF 80..BF 80..BF */
      {
        if (i + 3 < len)
          /* Expect a 2nd, 3rd 3th byte */
          {
            if (u8a[i + 1] < 0x90 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte of F0, expecting 2nd byte between 90 and BF.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte of F0, expecting 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }

            if (u8a[i + 3] < 0x80 || u8a[i + 3] > 0xBF) {
              // *message = "After a first byte of F0, expecting 4th byte between 80 and BF.";
              // *faulty_bytes = 4;
              return false;
            }
          } else {
          // *message = "After a first byte of F0, expecting three following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 4;
      } else if (u8a[i] >= 0xF1 && u8a[i] <= 0xF3)
      /* F1..F3 80..BF 80..BF 80..BF */
      {
        if (i + 3 < len)
          /* Expect a 2nd, 3rd 3th byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0xBF) {
              // *message = "After a first byte of F1, F2, or F3, expecting a 2nd byte between 80 and BF.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte of F1, F2, or F3, expecting a 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }

            if (u8a[i + 3] < 0x80 || u8a[i + 3] > 0xBF) {
              // *message = "After a first byte of F1, F2, or F3, expecting a 4th byte between 80 and BF.";
              // *faulty_bytes = 4;
              return false;
            }
          } else {
          // *message = "After a first byte of F1, F2, or F3, expecting three following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 4;
      } else if (u8a[i] === 0xF4)
      /* F4 80..8F 80..BF 80..BF */
      {
        if (i + 3 < len)
          /* Expect a 2nd, 3rd 3th byte */
          {
            if (u8a[i + 1] < 0x80 || u8a[i + 1] > 0x8F) {
              // *message = "After a first byte of F4, expecting 2nd byte between 80 and 8F.";
              // *faulty_bytes = 2;
              return false;
            }

            if (u8a[i + 2] < 0x80 || u8a[i + 2] > 0xBF) {
              // *message = "After a first byte of F4, expecting 3rd byte between 80 and BF.";
              // *faulty_bytes = 3;
              return false;
            }

            if (u8a[i + 3] < 0x80 || u8a[i + 3] > 0xBF) {
              // *message = "After a first byte of F4, expecting 4th byte between 80 and BF.";
              // *faulty_bytes = 4;
              return false;
            }
          } else {
          // *message = "After a first byte of F4, expecting three following bytes.";
          // *faulty_bytes = 1;
          return false;
        }

        i += 4;
      } else {
      // *message = "Expecting bytes in the following ranges: 00..7F C2..F4.";
      // *faulty_bytes = 1;
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/is/wasm.js":
/*!*********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/is/wasm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWasm;

var _eq = _interopRequireDefault(__webpack_require__(/*! ../u8a/eq */ "../../node_modules/@polkadot/util/u8a/eq.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const WASM_MAGIC = new Uint8Array([0, 97, 115, 109]); // \0asm

/**
 * @name isWasm
 * @summary Tests if the input has a WASM header
 * @description
 * Checks to see if the input Uint8Array contains a valid WASM header
 */

function isWasm(value) {
  return !!value && (0, _eq.default)(value.subarray(0, 4), WASM_MAGIC);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/logger.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = format;
exports.default = logger;

var _chalk = _interopRequireDefault(__webpack_require__(/*! chalk */ "../../node_modules/chalk/source/index.js"));

var _formatDate = _interopRequireDefault(__webpack_require__(/*! ./format/formatDate */ "../../node_modules/@polkadot/util/format/formatDate.js"));

var _bn = _interopRequireDefault(__webpack_require__(/*! ./is/bn */ "../../node_modules/@polkadot/util/is/bn.js"));

var _buffer = _interopRequireDefault(__webpack_require__(/*! ./is/buffer */ "../../node_modules/@polkadot/util/is/buffer.js"));

var _function = _interopRequireDefault(__webpack_require__(/*! ./is/function */ "../../node_modules/@polkadot/util/is/function.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./is/object */ "../../node_modules/@polkadot/util/is/object.js"));

var _u8a = _interopRequireDefault(__webpack_require__(/*! ./is/u8a */ "../../node_modules/@polkadot/util/is/u8a.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./u8a/toHex */ "../../node_modules/@polkadot/util/u8a/toHex.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const logTo = {
  debug: 'log',
  error: 'error',
  log: 'log',
  warn: 'warn'
};
const chalked = {
  debug: _chalk.default.gray,
  error: _chalk.default.red,
  log: _chalk.default.reset,
  warn: _chalk.default.yellow
};

function formatObject(value) {
  const result = {};
  return Object.keys(value).reduce((result, key) => {
    result[key] = format(value[key]);
    return result;
  }, result);
}

function format(value) {
  if (Array.isArray(value)) {
    return value.map(format);
  }

  if ((0, _bn.default)(value)) {
    return value.toString();
  }

  if ((0, _buffer.default)(value)) {
    return `0x${value.toString('hex')}`;
  }

  if ((0, _u8a.default)(value)) {
    return (0, _toHex.default)(value);
  }

  if (value && (0, _object.default)(value) && value.constructor === Object) {
    return formatObject(value);
  }

  return value;
}

function apply(log, type, values) {
  if (values.length === 1 && (0, _function.default)(values[0])) {
    const fnResult = values[0]();
    return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult]);
  }

  const chalk = value => chalked[log](value);

  console[logTo[log]](chalk((0, _formatDate.default)(new Date())), chalk(type), ...values.map(format));
}

function noop() {// noop
}
/**
 * @name Logger
 * @summary Creates a consistent log interface for messages
 * @description
 * Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.
 * @example
 * <BR>
 *
 * ```javascript
 * const l from '@polkadot/util/logger')('test');
 *
 * l.log('blah'); // <date>     TEST: blah
 * ```
 */


function logger(_type) {
  const type = `${_type.toUpperCase()}:`.padStart(16);
  let isDebug;

  try {
    const isTest = "development" === 'test';
    const debugList = (Object({"NODE_ENV":"development","VERSION":"0.62.2-2","WS_URL":undefined}).DEBUG || '').split(',');
    isDebug = isTest || !!debugList.find(entry => _type.startsWith(entry));
  } catch (error) {
    isDebug = false;
  }

  return {
    debug: isDebug ? (...values) => apply('debug', type, values) : noop,
    error: (...values) => apply('error', type, values),
    log: (...values) => apply('log', type, values),
    noop,
    warn: (...values) => apply('warn', type, values)
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/number/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/number/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "numberToHex", {
  enumerable: true,
  get: function () {
    return _toHex.default;
  }
});
Object.defineProperty(exports, "numberToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/number/toHex.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/number/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/number/toHex.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/number/toHex.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberToHex;

var _fixLength = _interopRequireDefault(__webpack_require__(/*! ../hex/fixLength */ "../../node_modules/@polkadot/util/hex/fixLength.js"));

var _null = _interopRequireDefault(__webpack_require__(/*! ../is/null */ "../../node_modules/@polkadot/util/is/null.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ../is/undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name numberToHex
 * @summary Creates a hex value from a number.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `0x` result. `number` input values return the actual bytes value converted to a `hex`. With `bitLength` set, it converts the number to the equivalent size.
 * @example
 * <BR>
 *
 * ```javascript
 * import { numberToHex } from '@polkadot/util';
 *
 * numberToHex(0x1234); // => '0x1234'
 * numberToHex(0x1234, 32); // => 0x00001234
 * ```
 */
function numberToHex(value, bitLength = -1) {
  if ((0, _undefined.default)(value) || (0, _null.default)(value) || isNaN(value)) {
    return '0x';
  }

  return (0, _fixLength.default)(value.toString(16), bitLength, true);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/number/toU8a.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/number/toU8a.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberToU8a;

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ../hex/toU8a */ "../../node_modules/@polkadot/util/hex/toU8a.js"));

var _null = _interopRequireDefault(__webpack_require__(/*! ../is/null */ "../../node_modules/@polkadot/util/is/null.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ../is/undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/number/toHex.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name numberToU8a
 * @summary Creates a Uint8Array object from a number.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `number` input values return the actual bytes value converted to a `Uint8Array`. With `bitLength`, it converts the value to the equivalent size.
 * @example
 * <BR>
 *
 * ```javascript
 * import { numberToU8a } from '@polkadot/util';
 *
 * numberToU8a(0x1234); // => [0x12, 0x34]
 * ```
 */
function numberToU8a(value, bitLength = -1) {
  if ((0, _undefined.default)(value) || (0, _null.default)(value) || isNaN(value)) {
    return new Uint8Array();
  }

  return (0, _toU8a.default)((0, _toHex.default)(value, bitLength));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/polyfill/fill.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/polyfill/fill.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-extend-native */

/* eslint-disable @typescript-eslint/unbound-method */
if (!Array.prototype.fill) {
  // eslint-disable-next-line no-extend-native,@typescript-eslint/no-explicit-any
  Array.prototype.fill = function fill(value, start = 0, end) {
    // Steps 1-2.
    if (!this) {
      throw new TypeError('this is null or not defined');
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


    const A = Object(this); // Steps 3-5.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    const len = A.length >>> 0; // Steps 6-7.

    const relativeStart = start >> 0; // Step 8.

    let k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.

    const relativeEnd = end === undefined ? len : end >> 0; // Step 11.

    const final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.

    while (k < final) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      A[k] = value;
      k++;
    } // Step 13.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return


    return A;
  };
}

if (!Uint8Array.prototype.fill) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Uint8Array.prototype.fill = Array.prototype.fill;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/polyfill/index.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/polyfill/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./fill */ "../../node_modules/@polkadot/util/polyfill/fill.js");

__webpack_require__(/*! ./padEnd */ "../../node_modules/@polkadot/util/polyfill/padEnd.js");

__webpack_require__(/*! ./padStart */ "../../node_modules/@polkadot/util/polyfill/padStart.js");

__webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@polkadot/util/polyfill/setPrototypeOf.js");

/***/ }),

/***/ "../../node_modules/@polkadot/util/polyfill/padEnd.js":
/*!*****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/polyfill/padEnd.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-extend-native */

/* eslint-disable @typescript-eslint/unbound-method */
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(length, char = ' ') {
    let result = String(this);

    while (result.length < length) {
      result = result + char;
    }

    return result;
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/polyfill/padStart.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/polyfill/padStart.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-extend-native */

/* eslint-disable @typescript-eslint/unbound-method */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(length, char = ' ') {
    let result = String(this);

    while (result.length < length) {
      result = char + result;
    }

    return result;
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/polyfill/setPrototypeOf.js":
/*!*************************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/polyfill/setPrototypeOf.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// React Native does not have Object.setPrototypeOf
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function (obj, proto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,no-proto
    obj.__proto__ = proto;
    return obj;
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/promisify.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/promisify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promisify;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name promisify
 * @summary Wraps an async callback into a `Promise`
 * @description
 * Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.
 * @example
 * <BR>
 *
 * ```javascript
 * const { promisify } from '@polkadot/util';
 *
 * await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
 * await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function promisify(self, fn, ...params) {
  return new Promise((resolve, reject) => {
    const handler = (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    };

    fn.apply(self, params.concat(handler));
  });
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/camelCase.js":
/*!******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/camelCase.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelcase = _interopRequireDefault(__webpack_require__(/*! camelcase */ "../../node_modules/camelcase/index.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = _camelcase.default;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/index.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "stringCamelCase", {
  enumerable: true,
  get: function () {
    return _camelCase.default;
  }
});
Object.defineProperty(exports, "stringLowerFirst", {
  enumerable: true,
  get: function () {
    return _lowerFirst.default;
  }
});
Object.defineProperty(exports, "stringShorten", {
  enumerable: true,
  get: function () {
    return _shorten.default;
  }
});
Object.defineProperty(exports, "stringToHex", {
  enumerable: true,
  get: function () {
    return _toHex.default;
  }
});
Object.defineProperty(exports, "stringToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});
Object.defineProperty(exports, "stringUpperFirst", {
  enumerable: true,
  get: function () {
    return _upperFirst.default;
  }
});

var _camelCase = _interopRequireDefault(__webpack_require__(/*! ./camelCase */ "../../node_modules/@polkadot/util/string/camelCase.js"));

var _lowerFirst = _interopRequireDefault(__webpack_require__(/*! ./lowerFirst */ "../../node_modules/@polkadot/util/string/lowerFirst.js"));

var _shorten = _interopRequireDefault(__webpack_require__(/*! ./shorten */ "../../node_modules/@polkadot/util/string/shorten.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/string/toHex.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/string/toU8a.js"));

var _upperFirst = _interopRequireDefault(__webpack_require__(/*! ./upperFirst */ "../../node_modules/@polkadot/util/string/upperFirst.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/lowerFirst.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/lowerFirst.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringLowerFirst;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringLowerFirst
 * @summary Lowercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringLowerFirst } from '@polkadot/util';
 *
 * stringLowerFirst('ABC'); // => 'aBC'
 * ```
 */
function stringLowerFirst(value) {
  return value ? value.charAt(0).toLowerCase() + value.slice(1) : '';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/shorten.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/shorten.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringShorten;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringShorten
 * @summary Returns a string with maximum length
 * @description
 * Checks the string against the `prefixLength`, if longer than double this, shortens it by placing `..` in the middle of it
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringShorten } from '@polkadot/util';
 *
 * stringShorten('1234567890', 2); // => 12..90
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stringShorten(value, prefixLength = 6) {
  if (value.length <= 2 + 2 * prefixLength) {
    return value;
  }

  return `${value.substr(0, prefixLength)}…${value.slice(-prefixLength)}`;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/toHex.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/toHex.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringToHex;

var _toHex = _interopRequireDefault(__webpack_require__(/*! ../u8a/toHex */ "../../node_modules/@polkadot/util/u8a/toHex.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/string/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringToHex
 * @summary Creates a hex string from a utf-8 string
 * @description
 * String input values return the actual encoded hex value.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToHex } from '@polkadot/util';
 *
 * stringToU8a('hello'); // 0x68656c6c6f
 * ```
 */
function stringToHex(value) {
  return (0, _toHex.default)((0, _toU8a.default)(value));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/toU8a.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/toU8a.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringToU8a;

var _xTextencoder = _interopRequireDefault(__webpack_require__(/*! @polkadot/x-textencoder */ "../../node_modules/@polkadot/x-textencoder/browser.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const encoder = new _xTextencoder.default();
/**
 * @name stringToU8a
 * @summary Creates a Uint8Array object from a utf-8 string.
 * @description
 * String input values return the actual encoded `UInt8Array`. `null` or `undefined` values returns an empty encoded array.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 *
 * stringToU8a('hello'); // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * ```
 */

function stringToU8a(value) {
  return value ? encoder.encode(value) : new Uint8Array();
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/string/upperFirst.js":
/*!*******************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/string/upperFirst.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringUpperFirst;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringUpperFirst
 * @summary Lowercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringUpperFirst } from '@polkadot/util';
 *
 * stringUpperFirst('abc'); // => 'Abc'
 * ```
 */
function stringUpperFirst(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/concat.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/concat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aConcat;

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/u8a/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aConcat
 * @summary Creates a concatenated Uint8Array from the inputs.
 * @description
 * Concatenates the input arrays into a single `UInt8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aConcat } from '@polkadot/util';
 *
 * u8aConcat(
 *   new Uint8Array([1, 2, 3]),
 *   new Uint8Array([4, 5, 6])
 * ); // [1, 2, 3, 4, 5, 6]
 * ```
 */
function u8aConcat(...list) {
  let length = 0;
  let offset = 0;
  const u8as = new Array(list.length);

  for (let i = 0; i < list.length; i++) {
    u8as[i] = (0, _toU8a.default)(list[i]);
    length += u8as[i].length;
  }

  const result = new Uint8Array(length);

  for (let i = 0; i < u8as.length; i++) {
    result.set(u8as[i], offset);
    offset += u8as[i].length;
  }

  return result;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/eq.js":
/*!********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/eq.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aEq;

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/u8a/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function equals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
/**
 * @name u8aEq
 * @summary Compares two Uint8Arrays.
 * @description
 * For `UInt8Array` (or hex string) input values true if there is a match.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aEq } from '@polkadot/util';
 *
 * u8aEq(new Uint8Array([0x68, 0x65]), new Uint8Array([0x68, 0x65])); // true
 * ```
 */


function u8aEq(a, b) {
  return equals((0, _toU8a.default)(a), (0, _toU8a.default)(b));
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/fixLength.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/fixLength.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aFixLength;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aFixLength
 * @summary Shifts a Uint8Array to a specific bitLength
 * @description
 * Returns a uint8Array with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aFixLength } from '@polkadot/util';
 *
 * u8aFixLength('0x12') // => 0x12
 * u8aFixLength('0x12', 16) // => 0x0012
 * u8aFixLength('0x1234', 8) // => 0x12
 * ```
 */
function u8aFixLength(value, bitLength = -1, atStart = false) {
  const byteLength = Math.ceil(bitLength / 8);

  if (bitLength === -1 || value.length === byteLength) {
    return value;
  } else if (value.length > byteLength) {
    return value.subarray(0, byteLength);
  }

  const result = new Uint8Array(byteLength);

  if (atStart) {
    result.set(value, 0);
  } else {
    result.set(value, byteLength - value.length);
  }

  return result;
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/index.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "u8aConcat", {
  enumerable: true,
  get: function () {
    return _concat.default;
  }
});
Object.defineProperty(exports, "u8aEq", {
  enumerable: true,
  get: function () {
    return _eq.default;
  }
});
Object.defineProperty(exports, "u8aFixLength", {
  enumerable: true,
  get: function () {
    return _fixLength.default;
  }
});
Object.defineProperty(exports, "u8aSorted", {
  enumerable: true,
  get: function () {
    return _sorted.default;
  }
});
Object.defineProperty(exports, "u8aToBn", {
  enumerable: true,
  get: function () {
    return _toBn.default;
  }
});
Object.defineProperty(exports, "u8aToBuffer", {
  enumerable: true,
  get: function () {
    return _toBuffer.default;
  }
});
Object.defineProperty(exports, "u8aToHex", {
  enumerable: true,
  get: function () {
    return _toHex.default;
  }
});
Object.defineProperty(exports, "u8aToString", {
  enumerable: true,
  get: function () {
    return _toString.default;
  }
});
Object.defineProperty(exports, "u8aToU8a", {
  enumerable: true,
  get: function () {
    return _toU8a.default;
  }
});

var _concat = _interopRequireDefault(__webpack_require__(/*! ./concat */ "../../node_modules/@polkadot/util/u8a/concat.js"));

var _eq = _interopRequireDefault(__webpack_require__(/*! ./eq */ "../../node_modules/@polkadot/util/u8a/eq.js"));

var _fixLength = _interopRequireDefault(__webpack_require__(/*! ./fixLength */ "../../node_modules/@polkadot/util/u8a/fixLength.js"));

var _sorted = _interopRequireDefault(__webpack_require__(/*! ./sorted */ "../../node_modules/@polkadot/util/u8a/sorted.js"));

var _toBn = _interopRequireDefault(__webpack_require__(/*! ./toBn */ "../../node_modules/@polkadot/util/u8a/toBn.js"));

var _toBuffer = _interopRequireDefault(__webpack_require__(/*! ./toBuffer */ "../../node_modules/@polkadot/util/u8a/toBuffer.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/u8a/toHex.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./toString */ "../../node_modules/@polkadot/util/u8a/toString.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ./toU8a */ "../../node_modules/@polkadot/util/u8a/toU8a.js"));

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/sorted.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/sorted.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aSorted;

var _undefined = _interopRequireDefault(__webpack_require__(/*! ../is/undefined */ "../../node_modules/@polkadot/util/is/undefined.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function u8aSorted(u8as) {
  return u8as.sort((a, b) => {
    let i = 0;

    while (true) {
      if ((0, _undefined.default)(a[i]) && (0, _undefined.default)(b[i])) {
        return 0;
      } else if ((0, _undefined.default)(a[i])) {
        return -1;
      } else if ((0, _undefined.default)(b[i])) {
        return 1;
      }

      const cmp = a[i] - b[i];

      if (cmp !== 0) {
        return cmp;
      }

      i++;
    }
  });
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toBn.js":
/*!**********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/toBn.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aToBn;

var _toBn = _interopRequireDefault(__webpack_require__(/*! ../hex/toBn */ "../../node_modules/@polkadot/util/hex/toBn.js"));

var _toHex = _interopRequireDefault(__webpack_require__(/*! ./toHex */ "../../node_modules/@polkadot/util/u8a/toHex.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aToBn
 * @summary Creates a BN from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.
 * @param value The value to convert
 * @param options Options to pass while converting
 * @param options.isLe Convert using Little Endian
 * @param options.isNegative Convert using two's complement
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBn } from '@polkadot/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */
function u8aToBn(value, options = {
  isLe: true,
  isNegative: false
}) {
  return (0, _toBn.default)((0, _toHex.default)(value), options);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toBuffer.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/toBuffer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aToBuffer;

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aToBuffer
 * @summary Creates a Buffer object from a hex string.
 * @description
 * `null` inputs returns an empty `Buffer` result. `UInt8Array` input values return the actual bytes value converted to a `Buffer`. Anything that is not a `UInt8Array` throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBuffer } from '@polkadot/util';
 *
 * console.log('Buffer', u8aToBuffer('0x123480001f'));
 * ```
 */
function u8aToBuffer(value) {
  return !value ? Buffer.from([]) : Buffer.from(value);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toHex.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/toHex.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aToHex;
// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ALPHABET = new Array(256);

for (let n = 0; n < 256; ++n) {
  ALPHABET[n] = n.toString(16).padStart(2, '0');
}
/**
 * @name u8aToHex
 * @summary Creates a hex string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToHex } from '@polkadot/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */


function u8aToHex(value, bitLength = -1, isPrefixed = true) {
  const prefix = isPrefixed ? '0x' : '';

  if (!(value === null || value === void 0 ? void 0 : value.length)) {
    return prefix;
  }

  const byteLength = Math.ceil(bitLength / 8);

  if (byteLength > 0 && value.length > byteLength) {
    const halfLength = Math.ceil(byteLength / 2);
    return `${u8aToHex(value.subarray(0, halfLength), -1, isPrefixed)}…${u8aToHex(value.subarray(value.length - halfLength), -1, false)}`;
  }

  const result = new Array(value.length);

  for (let i = 0; i < value.length; i++) {
    result[i] = ALPHABET[value[i]];
  }

  return prefix + result.join('');
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toString.js":
/*!**************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/toString.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aToString;

var _xTextdecoder = _interopRequireDefault(__webpack_require__(/*! @polkadot/x-textdecoder */ "../../node_modules/@polkadot/x-textdecoder/browser.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const decoder = new _xTextdecoder.default('utf-8');
/**
 * @name u8aToString
 * @summary Creates a utf-8 string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual decoded utf-8 string. `null` or `undefined` values returns an empty string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToString } from '@polkadot/util';
 *
 * u8aToString(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])); // hello
 * ```
 */

function u8aToString(value) {
  return !(value === null || value === void 0 ? void 0 : value.length) ? '' : decoder.decode(value);
}

/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toU8a.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/util/u8a/toU8a.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u8aToU8a;

var _buffer = _interopRequireDefault(__webpack_require__(/*! ../is/buffer */ "../../node_modules/@polkadot/util/is/buffer.js"));

var _hex = _interopRequireDefault(__webpack_require__(/*! ../is/hex */ "../../node_modules/@polkadot/util/is/hex.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ../is/string */ "../../node_modules/@polkadot/util/is/string.js"));

var _toU8a = _interopRequireDefault(__webpack_require__(/*! ../buffer/toU8a */ "../../node_modules/@polkadot/util/buffer/toU8a.js"));

var _toU8a2 = _interopRequireDefault(__webpack_require__(/*! ../hex/toU8a */ "../../node_modules/@polkadot/util/hex/toU8a.js"));

var _toU8a3 = _interopRequireDefault(__webpack_require__(/*! ../string/toU8a */ "../../node_modules/@polkadot/util/string/toU8a.js"));

// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aToU8a
 * @summary Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.
 * @description
 * `null` or `undefined` inputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToU8a } from '@polkadot/util';
 *
 * u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
 * u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
 * ```
 */
function u8aToU8a(value) {
  if (!value) {
    return new Uint8Array();
  } else if ((0, _buffer.default)(value)) {
    return (0, _toU8a.default)(value);
  } else if ((0, _string.default)(value)) {
    return (0, _hex.default)(value) ? (0, _toU8a2.default)(value) : (0, _toU8a3.default)(value);
  }

  return Array.isArray(value) ? Uint8Array.from(value) : value;
}

/***/ }),

/***/ "../../node_modules/@polkadot/vanitygen/calculate.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/vanitygen/calculate.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculate;
// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
const MAX_OFFSET = 5;

function calculateAtOne(atOffset, test, address) {
  return {
    count: test.reduce((count, c, index) => {
      if (index === count) {
        count += c === '?' || c === address.charAt(index + atOffset) ? 1 : 0;
      }

      return count;
    }, 0),
    offset: atOffset
  };
}

function calculateAt(atOffset, test, address) {
  let bestCount = 0;
  let bestOffset = 1;

  for (let i = 0; i < test.length; i++) {
    const {
      count,
      offset
    } = calculateAtOne(atOffset, test[i], address);

    if (count > bestCount) {
      bestCount = count;
      bestOffset = offset;
    }
  }

  return {
    count: bestCount,
    offset: bestOffset
  };
}

function calculate(test, _address, {
  atOffset = -1,
  withCase = false
}) {
  const address = withCase ? _address : _address.toLowerCase();

  if (atOffset > 0) {
    return calculateAt(atOffset, test, address);
  }

  let bestCount = 0;
  let bestOffset = 1;

  for (let index = 0; index < MAX_OFFSET; index++) {
    const {
      count,
      offset
    } = calculateAt(index, test, address);

    if (count > bestCount) {
      bestCount = count;
      bestOffset = offset;
    }
  }

  return {
    count: bestCount,
    offset: bestOffset
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/vanitygen/generate.js":
/*!***************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/vanitygen/generate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;

var _utilCrypto = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/index.js");

var _calculate = _interopRequireDefault(__webpack_require__(/*! ./calculate */ "../../node_modules/@polkadot/vanitygen/calculate.js"));

// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
function generator(test, options) {
  const mnemonic = options.withHex ? undefined : (0, _utilCrypto.mnemonicGenerate)(12);
  const seed = mnemonic ? (0, _utilCrypto.mnemonicToMiniSecret)(mnemonic) : (0, _utilCrypto.randomAsU8a)();
  const pair = options.type === 'sr25519' ? (0, _utilCrypto.schnorrkelKeypairFromSeed)(seed) : (0, _utilCrypto.naclKeypairFromSeed)(seed);
  const address = (0, _utilCrypto.encodeAddress)(pair.publicKey);
  const {
    count,
    offset
  } = (0, _calculate.default)(test, address, options);
  return {
    address,
    count,
    mnemonic,
    offset,
    seed
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/vanitygen/generator.js":
/*!****************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/vanitygen/generator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;

var _generate = _interopRequireDefault(__webpack_require__(/*! ./generate */ "../../node_modules/@polkadot/vanitygen/generate.js"));

// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
function generator(options) {
  const {
    match,
    runs = 10,
    withCase = false
  } = options;
  const found = [];
  const startAt = Date.now();
  const test = (withCase ? match : match.toLowerCase()).split(',').map(c => c.split(''));

  while (found.length !== runs) {
    found.push((0, _generate.default)(test, options));
  }

  return {
    elapsed: Date.now() - startAt,
    found
  };
}

/***/ }),

/***/ "../../node_modules/@polkadot/vanitygen/regex.js":
/*!************************************************************!*\
  !*** /root/apps/node_modules/@polkadot/vanitygen/regex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
const regex = new RegExp('^[1-9A-HJ-NP-Za-km-z]*$', '');
var _default = regex;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@polkadot/vanitygen/sort.js":
/*!***********************************************************!*\
  !*** /root/apps/node_modules/@polkadot/vanitygen/sort.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort;

// Copyright 2017-2020 @polkadot/vanitygen authors & contributors
// SPDX-License-Identifier: Apache-2.0
function numberSort(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }

  return 0;
}

function sort(a, b) {
  const countResult = numberSort(a.count, b.count);

  if (countResult !== 0) {
    return countResult;
  }

  const positionResult = numberSort(b.offset, a.offset);

  if (positionResult !== 0) {
    return positionResult;
  }

  return a.address.localeCompare(b.address);
}

/***/ }),

/***/ "../../node_modules/@subsocial/types/substrate/interfaces/definitions.js":
/*!************************************************************************************!*\
  !*** /root/apps/node_modules/@subsocial/types/substrate/interfaces/definitions.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "subsocial", {
  enumerable: true,
  get: function () {
    return _definitions.default;
  }
});

var _definitions = _interopRequireDefault(__webpack_require__(/*! ./subsocial/definitions */ "../../node_modules/@subsocial/types/substrate/interfaces/subsocial/definitions.js"));

/***/ }),

/***/ "../../node_modules/@subsocial/types/substrate/interfaces/subsocial/definitions.js":
/*!**********************************************************************************************!*\
  !*** /root/apps/node_modules/@subsocial/types/substrate/interfaces/subsocial/definitions.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  types: {
    Address: 'AccountId',
    LookupSource: 'AccountId',
    RefCount: 'u8',
    IpfsCid: 'Text',
    DonationId: 'u64',
    DonationRecipient: {
      _enum: {
        Account: 'AccountId',
        Space: 'SpaceId',
        Post: 'PostId'
      }
    },
    Donation: {
      id: 'DonationId',
      created: 'WhoAndWhen',
      recipient: 'DonationRecipient',
      donation_wallet: 'AccountId',
      amount: 'Balance',
      comment_id: 'Option<PostId>'
    },
    DonationSettings: {
      donations_allowed: 'bool',
      min_amount: 'Option<Balance>',
      max_amount: 'Option<Balance>'
    },
    DonationSettingsUpdate: {
      donations_allowed: 'Option<bool>',
      min_amount: 'Option<Option<Balance>>',
      max_amount: 'Option<Option<Balance>>'
    },
    DropId: 'u64',
    Drop: {
      id: 'DropId',
      first_drop_at: 'BlockNumber',
      total_dropped: 'Balance'
    },
    FaucetSettings: {
      period: 'Option<BlockNumber>',
      period_limit: 'Balance'
    },
    FaucetSettingsUpdate: {
      period: 'Option<Option<BlockNumber>>',
      period_limit: 'Option<Balance>'
    },
    ReportId: 'u64',
    EntityId: {
      _enum: {
        Content: 'Content',
        Account: 'AccountId',
        Space: 'SpaceId',
        Post: 'PostId'
      }
    },
    EntityStatus: {
      _enum: ['Allowed', 'Blocked']
    },
    Report: {
      id: 'ReportId',
      created: 'WhoAndWhen',
      reported_entity: 'EntityId',
      reported_within: 'SpaceId',
      reason: 'Content'
    },
    SuggestedStatus: {
      suggested: 'WhoAndWhen',
      status: 'Option<EntityStatus>',
      report_id: 'Option<ReportId>'
    },
    SpaceModerationSettings: {
      autoblock_threshold: 'Option<u16>'
    },
    SpaceModerationSettingsUpdate: {
      autoblock_threshold: 'Option<Option<u16>>'
    },
    SpacePermissionSet: 'BTreeSet<SpacePermission>',
    SpacePermission: {
      _enum: ['ManageRoles', 'RepresentSpaceInternally', 'RepresentSpaceExternally', 'UpdateSpace', 'CreateSubspaces', 'UpdateOwnSubspaces', 'DeleteOwnSubspaces', 'HideOwnSubspaces', 'UpdateAnySubspace', 'DeleteAnySubspace', 'HideAnySubspace', 'CreatePosts', 'UpdateOwnPosts', 'DeleteOwnPosts', 'HideOwnPosts', 'UpdateAnyPost', 'DeleteAnyPost', 'HideAnyPost', 'CreateComments', 'UpdateOwnComments', 'DeleteOwnComments', 'HideOwnComments', 'HideAnyComment', 'Upvote', 'Downvote', 'Share', 'OverrideSubspacePermissions', 'OverridePostPermissions', 'SuggestEntityStatus', 'UpdateEntityStatus', 'UpdateSpaceSettings']
    },
    SpacePermissions: {
      none: 'Option<SpacePermissionSet>',
      everyone: 'Option<SpacePermissionSet>',
      follower: 'Option<SpacePermissionSet>',
      space_owner: 'Option<SpacePermissionSet>'
    },
    SpacePermissionsContext: {
      space_id: 'SpaceId',
      is_space_owner: 'bool',
      is_space_follower: 'bool',
      space_perms: 'Option<SpacePermissions>'
    },
    PostHistoryRecord: {
      edited: 'WhoAndWhen',
      old_data: 'PostUpdate'
    },
    PostId: 'u64',
    Post: {
      id: 'PostId',
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      owner: 'AccountId',
      extension: 'PostExtension',
      space_id: 'Option<SpaceId>',
      content: 'Content',
      hidden: 'bool',
      replies_count: 'u16',
      hidden_replies_count: 'u16',
      shares_count: 'u16',
      upvotes_count: 'u16',
      downvotes_count: 'u16',
      score: 'i32'
    },
    PostUpdate: {
      space_id: 'Option<SpaceId>',
      content: 'Option<Content>',
      hidden: 'Option<bool>'
    },
    PostExtension: {
      _enum: {
        RegularPost: 'Null',
        Comment: 'Comment',
        SharedPost: 'PostId'
      }
    },
    Comment: {
      parent_id: 'Option<PostId>',
      root_post_id: 'PostId'
    },
    ProfileHistoryRecord: {
      edited: 'WhoAndWhen',
      old_data: 'ProfileUpdate'
    },
    SocialAccount: {
      followers_count: 'u32',
      following_accounts_count: 'u16',
      following_spaces_count: 'u16',
      reputation: 'u32',
      profile: 'Option<Profile>'
    },
    Profile: {
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      content: 'Content'
    },
    ProfileUpdate: {
      content: 'Option<Content>'
    },
    ReactionId: 'u64',
    ReactionKind: {
      _enum: ['Upvote', 'Downvote']
    },
    Reaction: {
      id: 'ReactionId',
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      kind: 'ReactionKind'
    },
    RoleId: 'u64',
    Role: {
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      id: 'RoleId',
      space_id: 'SpaceId',
      disabled: 'bool',
      expires_at: 'Option<BlockNumber>',
      content: 'Content',
      permissions: 'SpacePermissionSet'
    },
    RoleUpdate: {
      disabled: 'Option<bool>',
      content: 'Option<Content>',
      permissions: 'Option<SpacePermissionSet>'
    },
    ScoringAction: {
      _enum: ['UpvotePost', 'DownvotePost', 'SharePost', 'CreateComment', 'UpvoteComment', 'DownvoteComment', 'ShareComment', 'FollowSpace', 'FollowAccount']
    },
    SessionKey: {
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      expires_at: 'BlockNumber',
      limit: 'Option<Balance>',
      spent: 'Balance'
    },
    SpaceHistoryRecord: {
      edited: 'WhoAndWhen',
      old_data: 'SpaceUpdate'
    },
    Space: {
      id: 'SpaceId',
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      owner: 'AccountId',
      parent_id: 'Option<SpaceId>',
      handle: 'Option<Text>',
      content: 'Content',
      hidden: 'bool',
      posts_count: 'u32',
      hidden_posts_count: 'u32',
      followers_count: 'u32',
      score: 'i32',
      permissions: 'Option<SpacePermissions>'
    },
    SpaceUpdate: {
      parent_id: 'Option<Option<SpaceId>>',
      handle: 'Option<Option<Text>>',
      content: 'Option<Content>',
      hidden: 'Option<bool>',
      permissions: 'Option<Option<SpacePermissions>>'
    },
    SubscriptionPlanId: 'u64',
    SubscriptionId: 'u64',
    SubscriptionPeriod: {
      _enum: {
        Daily: 'Null',
        Weekly: 'Null',
        Monthly: 'Null',
        Quarterly: 'Null',
        Yearly: 'Null',
        Custom: 'BlockNumber'
      }
    },
    SubscriptionPlan: {
      id: 'SubscriptionPlanId',
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      is_active: 'bool',
      content: 'Content',
      space_id: 'SpaceId',
      wallet: 'Option<AccountId>',
      price: 'Balance',
      period: 'SubscriptionPeriod'
    },
    Subscription: {
      id: 'SubscriptionPlanId',
      created: 'WhoAndWhen',
      updated: 'Option<WhoAndWhen>',
      is_active: 'bool',
      wallet: 'Option<AccountId>',
      plan_id: 'SubscriptionPlanId'
    },
    SpaceId: 'u64',
    WhoAndWhen: {
      account: 'AccountId',
      block: 'BlockNumber',
      time: 'Moment'
    },
    User: {
      _enum: {
        Account: 'AccountId',
        Space: 'SpaceId'
      }
    },
    Content: {
      _enum: {
        None: 'Null',
        Raw: 'Text',
        IPFS: 'Text',
        Hyper: 'Text'
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/@zondax/ledger-polkadot/dist/common.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@zondax/ledger-polkadot/dist/common.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js"));

var INS = {
  GET_VERSION: 0x00
};
var CHUNK_SIZE = 250;
var PAYLOAD_TYPE = {
  INIT: 0x00,
  ADD: 0x01,
  LAST: 0x02
};
var P1_VALUES = {
  ONLY_RETRIEVE: 0x00,
  SHOW_ADDRESS_IN_DEVICE: 0x01
};
var ERROR_CODE = {
  NoError: 0x9000
};
var ERROR_DESCRIPTION = {
  1: "U2F: Unknown",
  2: "U2F: Bad request",
  3: "U2F: Configuration unsupported",
  4: "U2F: Device Ineligible",
  5: "U2F: Timeout",
  14: "Timeout",
  0x9000: "No errors",
  0x9001: "Device is busy",
  0x6802: "Error deriving keys",
  0x6400: "Execution Error",
  0x6700: "Wrong Length",
  0x6982: "Empty Buffer",
  0x6983: "Output buffer too small",
  0x6984: "Data is invalid",
  0x6985: "Conditions not satisfied",
  0x6986: "Transaction rejected",
  0x6a80: "Bad key handle",
  0x6b00: "Invalid P1/P2",
  0x6d00: "Instruction not supported",
  0x6e00: "App does not seem to be open",
  0x6f00: "Unknown error",
  0x6f01: "Sign/verify error"
};

function errorCodeToString(statusCode) {
  if (statusCode in ERROR_DESCRIPTION) return ERROR_DESCRIPTION[statusCode];
  return "Unknown Status Code: ".concat(statusCode);
}

function isDict(v) {
  return (0, _typeof2.default)(v) === "object" && v !== null && !(v instanceof Array) && !(v instanceof Date);
}

function processErrorResponse(response) {
  if (response) {
    if (isDict(response)) {
      if (Object.prototype.hasOwnProperty.call(response, "statusCode")) {
        return {
          return_code: response.statusCode,
          error_message: errorCodeToString(response.statusCode)
        };
      }

      if (Object.prototype.hasOwnProperty.call(response, "return_code") && Object.prototype.hasOwnProperty.call(response, "error_message")) {
        return response;
      }
    }

    return {
      return_code: 0xffff,
      error_message: response.toString()
    };
  }

  return {
    return_code: 0xffff,
    error_message: response.toString()
  };
}

function getVersion(_x, _x2) {
  return _getVersion.apply(this, arguments);
}

function _getVersion() {
  _getVersion = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(transport, cla) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", transport.send(cla, INS.GET_VERSION, 0, 0).then(function (response) {
              var errorCodeData = response.slice(-2);
              var returnCode = errorCodeData[0] * 256 + errorCodeData[1]; // 12 bytes + 2 error code

              if (response.length !== 14) {
                return {
                  return_code: 0x6984,
                  error_message: errorCodeToString(0x6984)
                };
              }

              var major = response[1] * 256 + response[2];
              var minor = response[3] * 256 + response[4];
              var patch = response[5] * 256 + response[6];
              var deviceLocked = response[7] === 1; // eslint-disable-next-line no-bitwise

              var targetId = (response[8] << 24) + (response[9] << 16) + (response[10] << 8) + (response[11] << 0);
              return {
                return_code: returnCode,
                error_message: errorCodeToString(returnCode),
                // ///
                test_mode: response[0] !== 0,
                major: major,
                minor: minor,
                patch: patch,
                deviceLocked: deviceLocked,
                target_id: targetId.toString(16)
              };
            }, processErrorResponse));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getVersion.apply(this, arguments);
}

module.exports = {
  CHUNK_SIZE: CHUNK_SIZE,
  INS: INS,
  PAYLOAD_TYPE: PAYLOAD_TYPE,
  P1_VALUES: P1_VALUES,
  ERROR_CODE: ERROR_CODE,
  getVersion: getVersion,
  processErrorResponse: processErrorResponse,
  errorCodeToString: errorCodeToString
};

/***/ }),

/***/ "../../node_modules/@zondax/ledger-polkadot/dist/config.js":
/*!**********************************************************************!*\
  !*** /root/apps/node_modules/@zondax/ledger-polkadot/dist/config.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CLA = {
  KUSAMA: 0x99,
  POLKADOT: 0x90
}; // https://github.com/satoshilabs/slips/blob/master/slip-0044.md

var SLIP0044 = {
  KUSAMA: 0x800001b2,
  POLKADOT: 0x80000162
};
module.exports = {
  CLA: CLA,
  SLIP0044: SLIP0044
};

/***/ }),

/***/ "../../node_modules/@zondax/ledger-polkadot/dist/index.js":
/*!*********************************************************************!*\
  !*** /root/apps/node_modules/@zondax/ledger-polkadot/dist/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _common = __webpack_require__(/*! ./common */ "../../node_modules/@zondax/ledger-polkadot/dist/common.js");

var _config = __webpack_require__(/*! ./config */ "../../node_modules/@zondax/ledger-polkadot/dist/config.js");

/** ******************************************************************************
 *  (c) 2019 ZondaX GmbH
 *  (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */
var INS = {
  GET_VERSION: 0x00,
  GET_ADDR_ED25519: 0x01,
  SIGN_ED25519: 0x02,
  // Allow list related commands
  ALLOWLIST_GET_PUBKEY: 0x90,
  ALLOWLIST_SET_PUBKEY: 0x91,
  ALLOWLIST_GET_HASH: 0x92,
  ALLOWLIST_UPLOAD: 0x93
};

var SubstrateApp = /*#__PURE__*/function () {
  function SubstrateApp(transport, cla, slip0044) {
    (0, _classCallCheck2.default)(this, SubstrateApp);

    if (!transport) {
      throw new Error("Transport has not been defined");
    }

    this.transport = transport;
    this.cla = cla;
    this.slip0044 = slip0044;
  }

  (0, _createClass2.default)(SubstrateApp, [{
    key: "getVersion",
    value: function () {
      var _getVersion2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _common.getVersion)(this.transport, this.cla);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _common.processErrorResponse)(_context.t0));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function getVersion() {
        return _getVersion2.apply(this, arguments);
      }

      return getVersion;
    }()
  }, {
    key: "appInfo",
    value: function () {
      var _appInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.transport.send(0xb0, 0x01, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var result = {};
                  var appName = "err";
                  var appVersion = "err";
                  var flagLen = 0;
                  var flagsValue = 0;

                  if (response[0] !== 1) {
                    // Ledger responds with format ID 1. There is no spec for any format != 1
                    result.error_message = "response format ID not recognized";
                    result.return_code = 0x9001;
                  } else {
                    var appNameLen = response[1];
                    appName = response.slice(2, 2 + appNameLen).toString("ascii");
                    var idx = 2 + appNameLen;
                    var appVersionLen = response[idx];
                    idx += 1;
                    appVersion = response.slice(idx, idx + appVersionLen).toString("ascii");
                    idx += appVersionLen;
                    var appFlagsLen = response[idx];
                    idx += 1;
                    flagLen = appFlagsLen;
                    flagsValue = response[idx];
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    // //
                    appName: appName,
                    appVersion: appVersion,
                    flagLen: flagLen,
                    flagsValue: flagsValue,
                    // eslint-disable-next-line no-bitwise
                    flag_recovery: (flagsValue & 1) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_signed_mcu_code: (flagsValue & 2) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_onboarded: (flagsValue & 4) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_pin_validated: (flagsValue & 128) !== 0
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function appInfo() {
        return _appInfo.apply(this, arguments);
      }

      return appInfo;
    }()
  }, {
    key: "getAddress",
    value: function () {
      var _getAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(account, change, addressIndex) {
        var requireConfirmation,
            bip44Path,
            p1,
            _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requireConfirmation = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
                bip44Path = SubstrateApp.serializePath(this.slip0044, account, change, addressIndex);
                p1 = 0;
                if (requireConfirmation) p1 = 1;
                return _context3.abrupt("return", this.transport.send(this.cla, INS.GET_ADDR_ED25519, p1, 0, bip44Path).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var errorCode = errorCodeData[0] * 256 + errorCodeData[1];
                  return {
                    pubKey: response.slice(0, 32).toString("hex"),
                    address: response.slice(32, response.length - 2).toString("ascii"),
                    return_code: errorCode,
                    error_message: (0, _common.errorCodeToString)(errorCode)
                  };
                }, _common.processErrorResponse));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAddress(_x, _x2, _x3) {
        return _getAddress.apply(this, arguments);
      }

      return getAddress;
    }()
  }, {
    key: "signSendChunk",
    value: function () {
      var _signSendChunk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(chunkIdx, chunkNum, chunk) {
        var payloadType;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                payloadType = _common.PAYLOAD_TYPE.ADD;

                if (chunkIdx === 1) {
                  payloadType = _common.PAYLOAD_TYPE.INIT;
                }

                if (chunkIdx === chunkNum) {
                  payloadType = _common.PAYLOAD_TYPE.LAST;
                }

                return _context4.abrupt("return", this.transport.send(this.cla, INS.SIGN_ED25519, payloadType, 0, chunk, [_common.ERROR_CODE.NoError, 0x6984, 0x6a80]).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var errorMessage = (0, _common.errorCodeToString)(returnCode);
                  var signature = null;

                  if (returnCode === 0x6a80 || returnCode === 0x6984) {
                    errorMessage = response.slice(0, response.length - 2).toString("ascii");
                  } else if (response.length > 2) {
                    signature = response.slice(0, response.length - 2);
                  }

                  return {
                    signature: signature,
                    return_code: returnCode,
                    error_message: errorMessage
                  };
                }, _common.processErrorResponse));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function signSendChunk(_x4, _x5, _x6) {
        return _signSendChunk.apply(this, arguments);
      }

      return signSendChunk;
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(account, change, addressIndex, message) {
        var _this = this;

        var chunks;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                chunks = SubstrateApp.signGetChunks(this.slip0044, account, change, addressIndex, message);
                return _context6.abrupt("return", this.signSendChunk(1, chunks.length, chunks[0]).then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(result) {
                    var i;
                    return _regenerator.default.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            i = 1;

                          case 1:
                            if (!(i < chunks.length)) {
                              _context5.next = 10;
                              break;
                            }

                            _context5.next = 4;
                            return _this.signSendChunk(1 + i, chunks.length, chunks[i]);

                          case 4:
                            result = _context5.sent;

                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context5.next = 7;
                              break;
                            }

                            return _context5.abrupt("break", 10);

                          case 7:
                            i += 1;
                            _context5.next = 1;
                            break;

                          case 10:
                            return _context5.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message,
                              signature: result.signature
                            });

                          case 11:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11) {
                    return _ref.apply(this, arguments);
                  };
                }(), _common.processErrorResponse));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function sign(_x7, _x8, _x9, _x10) {
        return _sign.apply(this, arguments);
      }

      return sign;
    }() /// Allow list related commands. They are NOT available on all apps

  }, {
    key: "getAllowlistPubKey",
    value: function () {
      var _getAllowlistPubKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_GET_PUBKEY, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  console.log(response);
                  var pubkey = response.slice(0, 32); // 32 bytes + 2 error code

                  if (response.length !== 34) {
                    return {
                      return_code: 0x6984,
                      error_message: (0, _common.errorCodeToString)(0x6984)
                    };
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    pubkey: pubkey
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAllowlistPubKey() {
        return _getAllowlistPubKey.apply(this, arguments);
      }

      return getAllowlistPubKey;
    }()
  }, {
    key: "setAllowlistPubKey",
    value: function () {
      var _setAllowlistPubKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(pk) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_SET_PUBKEY, 0, 0, pk).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode)
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function setAllowlistPubKey(_x12) {
        return _setAllowlistPubKey.apply(this, arguments);
      }

      return setAllowlistPubKey;
    }()
  }, {
    key: "getAllowlistHash",
    value: function () {
      var _getAllowlistHash = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_GET_HASH, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  console.log(response);
                  var hash = response.slice(0, 32); // 32 bytes + 2 error code

                  if (response.length !== 34) {
                    return {
                      return_code: 0x6984,
                      error_message: (0, _common.errorCodeToString)(0x6984)
                    };
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    hash: hash
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAllowlistHash() {
        return _getAllowlistHash.apply(this, arguments);
      }

      return getAllowlistHash;
    }()
  }, {
    key: "uploadSendChunk",
    value: function () {
      var _uploadSendChunk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(chunkIdx, chunkNum, chunk) {
        var payloadType;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                payloadType = _common.PAYLOAD_TYPE.ADD;

                if (chunkIdx === 1) {
                  payloadType = _common.PAYLOAD_TYPE.INIT;
                }

                if (chunkIdx === chunkNum) {
                  payloadType = _common.PAYLOAD_TYPE.LAST;
                }

                return _context10.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_UPLOAD, payloadType, 0, chunk, [_common.ERROR_CODE.NoError]).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var errorMessage = (0, _common.errorCodeToString)(returnCode);
                  return {
                    return_code: returnCode,
                    error_message: errorMessage
                  };
                }, _common.processErrorResponse));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function uploadSendChunk(_x13, _x14, _x15) {
        return _uploadSendChunk.apply(this, arguments);
      }

      return uploadSendChunk;
    }()
  }, {
    key: "uploadAllowlist",
    value: function () {
      var _uploadAllowlist = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(message) {
        var _this2 = this;

        var chunks;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                chunks = [];
                chunks.push(Buffer.from([0]));
                chunks.push.apply(chunks, (0, _toConsumableArray2.default)(SubstrateApp.GetChunks(message)));
                return _context12.abrupt("return", this.uploadSendChunk(1, chunks.length, chunks[0]).then( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(result) {
                    var i;
                    return _regenerator.default.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context11.next = 2;
                              break;
                            }

                            return _context11.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message
                            });

                          case 2:
                            i = 1;

                          case 3:
                            if (!(i < chunks.length)) {
                              _context11.next = 12;
                              break;
                            }

                            _context11.next = 6;
                            return _this2.uploadSendChunk(1 + i, chunks.length, chunks[i]);

                          case 6:
                            result = _context11.sent;

                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context11.next = 9;
                              break;
                            }

                            return _context11.abrupt("break", 12);

                          case 9:
                            i += 1;
                            _context11.next = 3;
                            break;

                          case 12:
                            return _context11.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message
                            });

                          case 13:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x17) {
                    return _ref2.apply(this, arguments);
                  };
                }(), _common.processErrorResponse));

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function uploadAllowlist(_x16) {
        return _uploadAllowlist.apply(this, arguments);
      }

      return uploadAllowlist;
    }()
  }], [{
    key: "serializePath",
    value: function serializePath(slip0044, account, change, addressIndex) {
      if (!Number.isInteger(account)) throw new Error("Input must be an integer");
      if (!Number.isInteger(change)) throw new Error("Input must be an integer");
      if (!Number.isInteger(addressIndex)) throw new Error("Input must be an integer");
      var buf = Buffer.alloc(20);
      buf.writeUInt32LE(0x8000002c, 0);
      buf.writeUInt32LE(slip0044, 4);
      buf.writeUInt32LE(account, 8);
      buf.writeUInt32LE(change, 12);
      buf.writeUInt32LE(addressIndex, 16);
      return buf;
    }
  }, {
    key: "GetChunks",
    value: function GetChunks(message) {
      var chunks = [];
      var buffer = Buffer.from(message);

      for (var i = 0; i < buffer.length; i += _common.CHUNK_SIZE) {
        var end = i + _common.CHUNK_SIZE;

        if (i > buffer.length) {
          end = buffer.length;
        }

        chunks.push(buffer.slice(i, end));
      }

      return chunks;
    }
  }, {
    key: "signGetChunks",
    value: function signGetChunks(slip0044, account, change, addressIndex, message) {
      var chunks = [];
      var bip44Path = SubstrateApp.serializePath(slip0044, account, change, addressIndex);
      chunks.push(bip44Path);
      chunks.push.apply(chunks, (0, _toConsumableArray2.default)(SubstrateApp.GetChunks(message)));
      return chunks;
    }
  }]);
  return SubstrateApp;
}();

function newKusamaApp(transport) {
  return new SubstrateApp(transport, _config.CLA.KUSAMA, _config.SLIP0044.KUSAMA);
}

function newPolkadotApp(transport) {
  return new SubstrateApp(transport, _config.CLA.POLKADOT, _config.SLIP0044.POLKADOT);
}

module.exports = {
  newKusamaApp: newKusamaApp,
  newPolkadotApp: newPolkadotApp
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

}]);