/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import colors from "./colors";
import {generalStyleProps} from "../types/general.types";

export const heading0bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props=>props.fontWeight || 600}px;
line-height: ${props=>props.lineHeight || 72}px;
`
export const heading1bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 600}px;
line-height: ${props => props.lineHeight || 42}px;
`
export const heading2bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 600}px;
line-height: ${props => props.lineHeight || 32}px;
`
export const heading0regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 72}px;
`
export const heading1regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 42}px;
`
export const heading2regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 32}px;
`
export const heading0light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 72}px;
`
export const heading1light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 42}px;
`
export const heading2light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 32}px;
`

//  <Body></Body>

export const body0medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props=>props.fontWeight || 500}px;
line-height: ${props=>props.lineHeight || 27}px;
`
export const body1medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 24}px;
`
export const body2medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 21}px;
`
export const body3medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 16}px;
`
export const body0regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 27}px;
`
export const body1regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 24}px;
`
export const body2regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 21}px;
`
export const body3regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 16}px;
`
export const body0light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 27}px;
`
export const body1light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 24}px;
`
export const body2light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 21}px;
`
export const body3light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 16}px;
`