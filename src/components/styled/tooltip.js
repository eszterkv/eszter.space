import styled from 'styled-components';
import { colors } from './variables';

export const Tooltip = styled.div`
  border: 1px dotted ${props => props.theme.primary};
  position: relative;
  top: -4em;
  padding: 1px 4px;
  box-shadow: 0 0 5px 1px ${props => props.theme.grey};
  background: #fffff0;
  display: inline-block;
  color: ${colors.primary};
  font-size: 12px;
  text-align: center;
  min-width: 85px;
`;

export const TooltipTrigger = styled.span`
  font-size: 14px;
  border: none;
  text-align: right;
  cursor: pointer;

  + input {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
  }
`;
