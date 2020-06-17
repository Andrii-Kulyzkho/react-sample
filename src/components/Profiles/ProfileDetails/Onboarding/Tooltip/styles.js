import styled from 'styled-components';

const TooltipBody = styled.div`
  width: 344px;
  background-color: ${props => (props.index === 3 ? '#346CB9' : '#FFF')};
  border-radius: 3px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.24);
`;

const TooltipContent = styled.div`
  border-radius: 3px;
  padding: 30px 30px 10px 30px;
  text-align: center;
`;

const TooltipTitle = styled.h4`
  color: black;
`;

const TooltipFooter = styled.div`
  padding: 0 29px 22px 29px;
  text-align: right;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.skip ? '#2B3642' : '#2D89EF')};
  margin: 0 10px;
  font-weight: 600;
  outline: none;
  border: 0;
`;

const CloseButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.index === 3 ? '#FFF' : '#2D89EF')};
  font-weight: 600;
  outline: none;
  border: 0;
`;

export {
  TooltipBody,
  TooltipContent,
  TooltipTitle,
  TooltipFooter,
  Button,
  CloseButton,
};
