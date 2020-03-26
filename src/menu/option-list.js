/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {LocaleContext} from '../locale/index.js';
import {getOverrides} from '../helpers/overrides.js';

import {OPTION_LIST_SIZE} from './constants.js';
import MaybeChildMenu from './maybe-child-menu.js';
import {StyledListItem, StyledListItemAnchor} from './styled-components.js';
import type {OptionListPropsT} from './types.js';

import {isValidElementType} from 'react-is';
function Override(Base) {
  const Result = React.forwardRef((allProps, ref) => {
    const {override, ...props} = allProps;
    if (!override) {
      return <Base ref={ref} {...props} />;
    }

    if (isValidElementType(override)) {
      const ComponentOverride = override;
      return <ComponentOverride ref={ref} {...props} />;
    }

    if (typeof override === 'object') {
      let Component = Base;
      if (isValidElementType(override.component)) {
        Component = override.component;
      }

      let overrideProps = {};
      if (typeof override.props === 'object') {
        overrideProps = override.props;
      } else if (typeof override.props === 'function') {
        overrideProps = override.props(props);
      }

      if (override.style) {
        overrideProps.$style = override.style;
      }

      return <Component ref={ref} {...overrideProps} />;
    }

    return <Base ref={ref} {...props} />;
  });

  return Result;
}

const ListItem = Override(StyledListItem);
const ListItemAnchor = Override(StyledListItemAnchor);

function OptionList(props: OptionListPropsT, ref: React.ElementRef<*>) {
  const {
    getChildMenu,
    getItemLabel = item => (item ? item.label : ''),
    item,
    onMouseEnter = () => {},
    overrides = {},
    resetMenu = () => {},
    size = OPTION_LIST_SIZE.default,
    $isHighlighted,
    renderAll,
    ...restProps
  } = props;

  const getItem = item => {
    if (item.href) {
      return (
        <ListItemAnchor
          $item={item}
          href={item.href}
          override={overrides.ListItemAnchor}
        >
          {getItemLabel(item)}
        </ListItemAnchor>
      );
    } else {
      return <>{getItemLabel(item)}</>;
    }
  };

  return (
    <LocaleContext.Consumer>
      {locale => (
        <MaybeChildMenu
          getChildMenu={getChildMenu}
          isOpen={!!$isHighlighted}
          item={item}
          resetParentMenu={resetMenu}
          renderAll={renderAll}
        >
          <ListItem
            ref={ref}
            aria-label={
              getChildMenu && getChildMenu(item)
                ? locale.menu.parentMenuItemAriaLabel
                : null
            }
            item={item}
            onMouseEnter={onMouseEnter}
            $size={size}
            $isHighlighted={$isHighlighted}
            {...restProps}
            override={overrides.ListItem}
          >
            {getItem({isHighlighted: $isHighlighted, ...item})}
          </ListItem>
        </MaybeChildMenu>
      )}
    </LocaleContext.Consumer>
  );
}

function areEqualShallow(a, b) {
  if (!a || !b) return false;

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

function compare(prevProps, nextProps) {
  return (
    prevProps.$isHighlighted === nextProps.$isHighlighted &&
    prevProps.$isFocused === nextProps.$isFocused &&
    areEqualShallow(prevProps.item, nextProps.item) &&
    areEqualShallow(prevProps.overrides, nextProps.overrides) &&
    prevProps.size === nextProps.size &&
    prevProps.getItemLabel === nextProps.getItemLabel &&
    prevProps.getChildMenu === nextProps.getChildMenu &&
    prevProps.resetMenu === nextProps.resetMenu
  );
}

const forwarded = React.forwardRef<OptionListPropsT, HTMLElement>(OptionList);
forwarded.displayName = 'OptionList';

export default React.memo<OptionListPropsT>(forwarded, compare);
