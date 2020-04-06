/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import createTheme from './create-theme.js';
import type {ThemeT} from '../../styles/types.js';

const LightTheme: ThemeT = createTheme({}, {name: 'light-theme'});

export default LightTheme;
