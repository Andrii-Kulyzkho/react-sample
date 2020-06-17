/* eslint-disable react/prop-types */
import React from 'react';

import {
  TooltipBody,
  TooltipContent,
  TooltipTitle,
  TooltipFooter,
  Button,
  CloseButton,
} from './styles';

const Tooltip = ({
  continuous,
  index,
  step,
  skipProps,
  closeProps,
  primaryProps,
  tooltipProps,
}) => {
  return (
    <TooltipBody {...tooltipProps} index={index}>
      {step.title && <TooltipTitle>{step.title}</TooltipTitle>}
      <TooltipContent>{step.content}</TooltipContent>
      <TooltipFooter>
        {step.showSkipButton && (
          <Button {...skipProps} skip>
            {skipProps.title}
          </Button>
        )}
        {continuous && <Button {...primaryProps}>{primaryProps.title}</Button>}
        {!continuous && (
          <CloseButton {...closeProps} index={index}>
            {closeProps.title}
          </CloseButton>
        )}
      </TooltipFooter>
    </TooltipBody>
  );
};

export default Tooltip;
