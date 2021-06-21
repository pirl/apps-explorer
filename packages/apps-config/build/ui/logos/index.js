"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "emptyLogo", {
  enumerable: true,
  get: function () {
    return _empty.default;
  }
});
exports.nodeLogos = exports.namedLogos = exports.externalLogos = exports.extensionLogos = exports.chainLogos = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dusty = _interopRequireDefault(require("./chains/dusty.png"));

var _kusama = _interopRequireDefault(require("./chains/kusama-128.gif"));

var _rococo = _interopRequireDefault(require("./chains/rococo.svg"));

var _rococoTick = _interopRequireDefault(require("./chains/rococo-tick.svg"));

var _rococoTrack = _interopRequireDefault(require("./chains/rococo-track.svg"));

var _rococoTrick = _interopRequireDefault(require("./chains/rococo-trick.svg"));

var _pirl = _interopRequireDefault(require("./chains/pirl.png"));

var _acalaCircle = _interopRequireDefault(require("./nodes/acala-circle.svg"));

var _centrifuge = _interopRequireDefault(require("./nodes/centrifuge.png"));

var _crab = _interopRequireDefault(require("./nodes/crab.svg"));

var _crust = _interopRequireDefault(require("./nodes/crust.svg"));

var _darwinia = _interopRequireDefault(require("./nodes/darwinia.png"));

var _dockMainnet = _interopRequireDefault(require("./nodes/dock-mainnet.png"));

var _dockTestnet = _interopRequireDefault(require("./nodes/dock-testnet.png"));

var _edgewareCircle = _interopRequireDefault(require("./nodes/edgeware-circle.svg"));

var _encointerNotee = _interopRequireDefault(require("./nodes/encointer-notee.svg"));

var _encointerTeeproxy = _interopRequireDefault(require("./nodes/encointer-teeproxy.svg"));

var _equilibrium = _interopRequireDefault(require("./nodes/equilibrium.svg"));

var _nodle = _interopRequireDefault(require("./nodes/nodle.svg"));

var _kilt = _interopRequireDefault(require("./nodes/kilt.svg"));

var _kulupu = _interopRequireDefault(require("./nodes/kulupu.svg"));

var _laminarCircle = _interopRequireDefault(require("./nodes/laminar-circle.svg"));

var _phala = _interopRequireDefault(require("./nodes/phala.svg"));

var _plasm = _interopRequireDefault(require("./nodes/plasm.png"));

var _polkadotCircle = _interopRequireDefault(require("./nodes/polkadot-circle.svg"));

var _polkadotJs = _interopRequireDefault(require("./nodes/polkadot-js.svg"));

var _robonomics = _interopRequireDefault(require("./nodes/robonomics.svg"));

var _stafi = _interopRequireDefault(require("./nodes/stafi.png"));

var _subsocial = _interopRequireDefault(require("./nodes/subsocial.svg"));

var _substrateHexagon = _interopRequireDefault(require("./nodes/substrate-hexagon.svg"));

var _pirl2 = _interopRequireDefault(require("./nodes/pirl.png"));

var _polkadotJs2 = _interopRequireDefault(require("./extensions/polkadot-js.svg"));

var _commonwealth = _interopRequireDefault(require("./external/commonwealth.png"));

var _polkascan = _interopRequireDefault(require("./external/polkascan.png"));

var _polkassembly = _interopRequireDefault(require("./external/polkassembly.png"));

var _polkastats = _interopRequireDefault(require("./external/polkastats.png"));

var _subscan = _interopRequireDefault(require("./external/subscan.svg"));

var _empty = _interopRequireDefault(require("./empty.svg"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// overrides based on the actual matched chain name
// NOTE: this matches up with RPC system.chain
// alphabetical
const chainLogos = [['Dusty', _dusty.default], ['Kusama', _kusama.default], // new name after CC3
['Kusama CC1', _kusama.default], ['Kusama CC2', _kusama.default], ['Kusama CC3', _kusama.default], ['Rococo', _rococo.default], ['Tick', _rococoTick.default], ['Track', _rococoTrack.default], ['Trick', _rococoTrick.default], ['Pirl', _pirl.default]].reduce((logos, [chain, logo]) => _objectSpread(_objectSpread({}, logos), {}, {
  [chain.toLowerCase()]: logo
}), {}); // overrides based on the actual software node type (all '-' converted to ' ')
// NOTE: this matches up with what the RPC via system.name
// alphabetical

exports.chainLogos = chainLogos;
const nodeLogos = [['airalab-robonomics', _robonomics.default], ['centrifuge chain', _centrifuge.default], ['Centrifuge Chain Node', _centrifuge.default], ['crab', _crab.default], ['crust node', _crust.default], ['darwinia parachain', _darwinia.default], ['Dock Full Node', _dockMainnet.default], ['Edgeware Node', _edgewareCircle.default], ['Encointer Node', _encointerNotee.default], ['Encointer Node noTEE', _encointerNotee.default], ['Encointer Node TEE proxy', _encointerTeeproxy.default], ['KILT Node', _kilt.default], ['kulupu', _kulupu.default], ['node-template', _substrateHexagon.default], ['Nodle Chain Node', _nodle.default], ['parity-polkadot', _polkadotCircle.default], ['Plasm', _plasm.default], ['Plasm Node', _plasm.default], ['phala-substrate-node', _phala.default], ['polkadot-js', _polkadotJs.default], ['Stafi Node', _stafi.default], ['Stafi', _stafi.default], ['subsocial-node', _subsocial.default], ['pirl-node', _pirl2.default], ['substrate-node', _substrateHexagon.default], ['Equilibrium Node', _equilibrium.default], ['Equilibrium', _equilibrium.default]].reduce((logos, [node, logo]) => _objectSpread(_objectSpread({}, logos), {}, {
  [node.toLowerCase().replace(/-/g, ' ')]: logo
}), {}); // overrides when we pass an explicit logo name
// NOTE: this matches up with what is defined as "info" in settings/endpoints.ts
// alphabetical

exports.nodeLogos = nodeLogos;
const namedLogos = {
  acala: _acalaCircle.default,
  alexander: _polkadotCircle.default,
  centrifuge: _centrifuge.default,
  crab: _crab.default,
  crust: _crust.default,
  dockMainnet: _dockMainnet.default,
  dockTestnet: _dockTestnet.default,
  dusty: _dusty.default,
  edgeware: _edgewareCircle.default,
  empty: _empty.default,
  equilibrium: _equilibrium.default,
  kilt: _kilt.default,
  kulupu: _kulupu.default,
  kusama: _kusama.default,
  laminar: _laminarCircle.default,
  nodle: _nodle.default,
  phala: _phala.default,
  plasm: _plasm.default,
  polkadot: _polkadotCircle.default,
  rococo: _rococo.default,
  rococoAcala: _acalaCircle.default,
  rococoDarwinia: _darwinia.default,
  rococoLaminar: _laminarCircle.default,
  rococoPlasm: _plasm.default,
  rococoRobonomics: _robonomics.default,
  rococoTick: _rococoTick.default,
  rococoTrack: _rococoTrack.default,
  rococoTrick: _rococoTrick.default,
  stafi: _stafi.default,
  subsocial: _subsocial.default,
  pirl: _pirl2.default,
  substrate: _substrateHexagon.default,
  westend: _polkadotCircle.default
}; // extension logos

exports.namedLogos = namedLogos;
const extensionLogos = {
  'polkadot-js': _polkadotJs2.default
}; // external logos

exports.extensionLogos = extensionLogos;
const externalLogos = {
  commonwealth: _commonwealth.default,
  polkascan: _polkascan.default,
  polkassembly: _polkassembly.default,
  polkastats: _polkastats.default,
  subscan: _subscan.default
}; // empty logos

exports.externalLogos = externalLogos;
const emptyLogos = {
  empty: _empty.default
}; // preload all

[chainLogos, extensionLogos, externalLogos, namedLogos, nodeLogos, emptyLogos].map(imageSet => {
  Object.values(imageSet).forEach(src => {
    new Image().src = src;
  });
});