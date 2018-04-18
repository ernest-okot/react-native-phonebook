// @flow
import React from 'react';
import {View} from 'react-native';

type FlexItem = {
  // Default size
  basis?: number | 'auto',
  // Growth proportion
  grow?: number,
  // Shrinkage proportion
  shrink?: number,
  // Overrides default alignment specified by align-items for flex items.
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  style?: CSSStyleDeclaration,
}

type FlexContainer = {
  // Direction to align items
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  // How items wrap
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  // Alignment of items along direction axis
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  // Alignment of items across direction axis
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  // aligns a flex container's lines within when there is extra space in the cross-axis
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';

  ...FlexItem,
}

export const Container = (props: FlexContainer) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: props.direction,
        flexWrap: props.wrap,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        alignContent: props.alignContent,
        flexBasis: props.basis,
        flexGrow: props.grow,
        flexShrink: props.shrink,
        alignSelf: props.align,

        ...(props.style || {}),
      }}>
      {props.children}
    </View>
  )
};

export const Row = props => (
  <Container direction='row' {...props}/>
);

export const Column = props => (
  <Container direction='column' {...props}/>
);

export const Grow = props => (
  <Container grow={1} {...props}/>
);