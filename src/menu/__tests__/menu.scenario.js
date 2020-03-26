/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {StatefulMenu} from '../index.js';

export default function Scenario() {
  return (
    <StatefulMenu
      items={[
        {label: 'Apple', href: '//www.example.com/apple'},
        {label: 'Orange', href: '//www.example.com/orange'},
        {label: 'Strawberry', href: '//www.example.com/strawberry'},
      ]}
      overrides={{
        ListItemAnchor: {
          props: p => ({
            ...p,
            href: '//www.example.com/banana',
            'data-foo': 'moo',
          }),
        },
        List: {
          style: {
            width: '200px',
          },
        },
        Option: {
          props: {
            getItemLabel: item => item.label,
          },
        },
      }}
    />
  );
}
