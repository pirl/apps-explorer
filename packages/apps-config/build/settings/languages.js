"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
function create(t) {
  return [{
    text: t('lng.detect', 'Default browser language (auto-detect)', {
      ns: 'apps-config'
    }),
    value: 'default'
  }, // default/native
  {
    text: 'English',
    value: 'en'
  }, // translations (sorted by language code)
  {
    text: 'عربى',
    value: 'ar'
  }, {
    text: 'Español',
    value: 'es'
  }, {
    text: 'Français',
    value: 'fr'
  }, {
    text: 'Bahasa Indonesia',
    value: 'id'
  }, {
    text: 'Italiano',
    value: 'it'
  }, {
    text: '日本語',
    value: 'ja'
  }, {
    text: '한국어',
    value: 'ko'
  }, {
    text: 'Português',
    value: 'pt'
  }, {
    text: 'русский',
    value: 'ru'
  }, {
    text: '汉语',
    value: 'zh'
  }];
}