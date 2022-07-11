import React from "react";
import { generalStyleProps } from "../../types/general.types";

export type VariationType = 'primary' | 'secondary' | 'ghost' | 'outline';
export type IconPositionType = 'none' | 'left' | 'right' | 'centerLeft' | 'centerRight';

export interface ButtonLargeProps extends generalStyleProps {
    title: string,
    variation: VariationType,
    icon?: React.ReactNode,
    iconPosition: IconPositionType,
    disabled?: boolean,
}