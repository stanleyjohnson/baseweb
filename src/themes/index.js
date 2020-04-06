/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import createDarkTheme from './dark-theme/create-theme.js';
import createLightTheme from './light-theme/create-theme.js';
import DarkTheme from './dark-theme/theme.js';
import DarkThemeMove from './move-theme/dark-theme-with-move.js';
import darkThemePrimitives from './dark-theme/primitives.js';
import LightTheme from './light-theme/theme.js';
import LightThemeMove from './move-theme/light-theme-with-move.js';
import lightThemePrimitives from './light-theme/primitives.js';

export {
  createDarkTheme,
  createLightTheme as createTheme,
  createLightTheme,
  DarkTheme as darkThemeOverrides,
  DarkTheme,
  DarkThemeMove,
  darkThemePrimitives,
  LightTheme,
  LightThemeMove,
  lightThemePrimitives,
};

export type * from './types.js';
