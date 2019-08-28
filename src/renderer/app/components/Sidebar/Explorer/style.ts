import styled, { css } from 'styled-components';

import { icons, transparency } from '~/renderer/constants';
import { centerIcon, robotoRegular } from '~/renderer/mixins';

export const StyledItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ExpandIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  background-image: url(${icons.expand});
  border-radius: 100%;
  opacity: ${transparency.icons.inactive};
  ${centerIcon()};

  ${({ expanded }: { expanded: boolean }) => css`
    transform: ${expanded ? 'rotate(-90deg)' : 'rotate(0deg)'};
  `}
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  opacity: ${transparency.icons.inactive};
  background-image: url(${icons.folder});
  ${centerIcon(18)}
`;

export const Label = styled.div`
  font-size: 13px;
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${robotoRegular()};
`;
