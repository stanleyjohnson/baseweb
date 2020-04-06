/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import defaultColorTokens from './color-tokens.js';
import getComponentColorTokens from './get-component-color-tokens.js';
import getDeprecatedSemanticColorTokens from './get-deprecated-semantic-color-tokens.js';
import getSemanticColorTokens from './get-semantic-color-tokens.js';
import type {ColorTokensT} from '../types.js';

export default function getColors(customColorTokens: $Shape<ColorTokensT>) {
  const colorTokens = {...defaultColorTokens, ...customColorTokens};
  return {
    ...colorTokens,
    ...getComponentColorTokens(colorTokens),
    ...getDeprecatedSemanticColorTokens(colorTokens),
    ...getSemanticColorTokens(colorTokens),
  };
}
