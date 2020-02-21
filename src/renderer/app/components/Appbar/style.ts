import styled from 'styled-components';

import { APPBAR_HEIGHT, TOOLBAR_HEIGHT, TOOLBAR_COLOR } from '../../constants';

export const StyledAppbar = styled.div`
  height: ${APPBAR_HEIGHT}px;
`;

export const StyledToolbar = styled.div`
  width: 100%;
  height: ${TOOLBAR_HEIGHT}px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-right: 24px;
  background-color: ${TOOLBAR_COLOR};
`;