/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {ThemeProvider, styled} from '../../index.js';
import {Button} from '../../button/index.js';
import {StatefulInput} from '../../input/index.js';
import {Checkbox} from '../../checkbox/index.js';
import {RadioGroup, Radio} from '../../radio/index.js';
import {StatefulSlider} from '../../slider/index.js';
import {StatefulSelect} from '../../select/index.js';
import {StatefulDatepicker} from '../../datepicker/index.js';
import {StyledLink} from '../../link/index.js';
import {Tag} from '../../tag/index.js';
import {StyledSpinnerNext} from '../../spinner/index.js';
import {Toast, KIND as ToastKind} from '../../toast/index.js';
import {Card} from '../../card/index.js';

// vvvvv START EDITING HERE! vvvvv

// import createTheme from '../create-theme.js';
import createLightTheme from '../light-theme/create-theme.js';
import createDarkTheme from '../dark-theme/create-theme.js';

import DarkTheme from '../dark-theme/theme.js';
import DarkThemeMove from '../move-theme/dark-theme-with-move.js';
import LightTheme from '../light-theme/theme.js';
import LightThemeMove from '../move-theme/light-theme-with-move.js';

import {
  DarkTheme as oldDarkTheme,
  DarkThemeMove as oldDarkThemeMove,
  LightTheme as oldLightTheme,
  LightThemeMove as oldLightThemeMove,
} from './old-themes.js';

// Test if default themes match creator themes.

console.log(
  'dark-theme',
  JSON.stringify(DarkTheme.name) === JSON.stringify(oldDarkTheme.name),
  JSON.stringify(DarkTheme.colors) === JSON.stringify(oldDarkTheme.colors),
  JSON.stringify(DarkTheme.borders) === JSON.stringify(oldDarkTheme.borders),
  JSON.stringify(DarkTheme.typography) ===
    JSON.stringify(oldDarkTheme.typography),
);

console.log(
  'dark-theme-with-move',
  JSON.stringify(DarkThemeMove.typography) ===
    JSON.stringify(oldDarkThemeMove.typography),
);

console.log(
  'light-theme',
  JSON.stringify(LightTheme.name) === JSON.stringify(oldLightTheme.name),
  JSON.stringify(LightTheme.colors) === JSON.stringify(oldLightTheme.colors),
  JSON.stringify(LightTheme.borders) === JSON.stringify(oldLightTheme.borders),
  JSON.stringify(LightTheme.typography) ===
    JSON.stringify(oldLightTheme.typography),
);

console.log(
  'light-theme-with-move',
  JSON.stringify(LightThemeMove.typography) ===
    JSON.stringify(oldLightThemeMove.typography),
);

export const myDarkTheme = createDarkTheme(
  {primary: '#677de4', primaryFontFamily: 'Verdana'},
  {name: 'my-theme'},
);

export const myLightTheme = createLightTheme(
  {primary: '#677de4', primaryFontFamily: 'Verdana'},
  {name: 'my-theme'},
);

// ^^^^^^ EDIT ABOVE HERE! ^^^^^

export default function Scenario() {
  return (
    <ThemeProvider theme={DarkThemeMove}>
      <Showcase />
    </ThemeProvider>
  );
}

function Showcase() {
  return (
    <React.Fragment>
      <Box>
        <Button>Move</Button>
      </Box>
      <Box>
        <StatefulInput initialState={{value: 'Move'}} />
      </Box>
      <Box>
        <Checkbox>Move</Checkbox>
        <Checkbox checked>Move</Checkbox>
      </Box>
      <Box>
        <RadioGroup value="2">
          <Radio value="1">Move</Radio>
          <Radio value="2">Move</Radio>
        </RadioGroup>
      </Box>
      <Box>
        <StatefulSlider value={[10]} />
      </Box>
      <Box>
        <StatefulSelect
          options={[
            {label: 'AliceBlue', id: '#F0F8FF'},
            {label: 'AntiqueWhite', id: '#FAEBD7'},
            {label: 'Aqua', id: '#00FFFF'},
            {label: 'Aquamarine', id: '#7FFFD4'},
            {label: 'Azure', id: '#F0FFFF'},
            {label: 'Beige', id: '#F5F5DC'},
          ]}
        />
      </Box>
      <Box>
        <StatefulDatepicker />
      </Box>
      <Box>
        <StyledLink href="#">Move</StyledLink>
      </Box>
      <Box>
        <Tag kind="neutral">neutral</Tag>
        <Tag kind="primary">primary</Tag>
        <Tag kind="accent">accent</Tag>
        <Tag kind="positive">positive</Tag>
        <Tag kind="warning">warning</Tag>
        <Tag kind="negative">negative</Tag>
      </Box>
      <Box>
        <StyledSpinnerNext />
      </Box>
      <Box>
        <Card>Move</Card>
      </Box>
      <Box>
        <Toast>Default info notification</Toast>
        <Toast kind={ToastKind.positive}>Positive notification</Toast>
        <Toast kind={ToastKind.warning}>Warning notification</Toast>
        <Toast kind={ToastKind.negative}>Negative notification</Toast>
      </Box>
    </React.Fragment>
  );
}

const Box = styled('div', {
  margin: '10px',
});
