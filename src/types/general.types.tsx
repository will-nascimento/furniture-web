/* eslint-disable import/no-anonymous-default-export */
export interface generalStyleProps{
    active?: boolean,
    alignSelf?: string,
    alignItems?: string,
    backgroundColor?: string,
    borderRadius?: number,
    bold?: boolean,
    borderTop?: boolean;
    borderLeftWidth?: string,
    borderLeftColor?: string,
    borderPosition?: 'top' | 'bottom' | undefined;   
    color?: string,
    display?: string;
    flex?: number,
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: number,
    flexDirection?:string;
    justifyContent?: string,
    height?: number | string,
    lineHeight?: number;
    letterSpacing?: number,
    marginVertical?: number | string,
    marginHorizontal?: number | string,
    marginTop?: number | string,
    marginRight?: number | string,
    marginBottom?: number | string,
    marginLeft?: number | string,
    minWidth?: string | number;
    maxWidth?: string | number;
    opacity?:number;
    opacityColor?:number;
    paddingTop?: number | string,
    paddingRight?: number | string,
    paddingBottom?: number | string,
    paddingLeft?: number | string,
    paddingVertical?: number | string,
    paddingHorizontal?: number | string,
    padding?: number,
    position?: string;
    textAlign?: string,
    top?: number;
    width?: number | string,
}