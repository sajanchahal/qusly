import styled from 'styled-components';

import { TOOLBAR_BUTTON_WIDTH } from '~/renderer/constants';
import ToolbarButton from '../ToolbarButton';

export const TabbarBackground = styled.div`
  height: 32px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-right: 32px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.06);
`;

export const StyledTabbar = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.3s opacity, 0.3s transform;
  display: flex;
`;

export const TabsContainer = styled.div`
  height: 100%;
  width: calc(100% - ${TOOLBAR_BUTTON_WIDTH}px);
  bottom: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const AddTab = styled(ToolbarButton)`
  height: 32px;
  position: absolute;
  left: 0;
  bottom: 0;
`;
