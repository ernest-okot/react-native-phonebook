import React from 'react';
import {Grow, Row} from "style/Flex";
import {palette} from "../../style";

const ScreenContent = props => {
  return <Grow direction="column">
    <Grow direction="column">
      {props.children}
    </Grow>
    <Row>
      <Grow style={{backgroundColor: palette.accent, height: 2}}/>
      <Grow style={{backgroundColor: palette.primary, height: 2}}/>
    </Row>
  </Grow>
};

export default ScreenContent