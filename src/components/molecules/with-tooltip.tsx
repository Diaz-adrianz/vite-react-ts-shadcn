import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface Props {
  children: ReactNode;
  text: string;
  asChild?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const WithTooltip = ({
  children,
  side = 'top',
  text,
  asChild = true,
}: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
      <TooltipContent side={side}>{text}</TooltipContent>
    </Tooltip>
  );
};

export default WithTooltip;
