/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import colors from "./colors";
import {generalStyleProps} from "../types/general.types";

export const Heading0bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props=>props.fontWeight || 600}px;
line-height: ${props=>props.lineHeight || 72}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading1bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 600}px;
line-height: ${props => props.lineHeight || 42}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading2bold = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 600}px;
line-height: ${props => props.lineHeight || 32}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading0regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 72}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading1regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 42}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading2regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 32}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading0light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 48}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 72}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading1light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 32}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 42}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Heading2light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 24}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 32}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`

//  <Body></Body>

export const Body0medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props=>props.fontWeight || 500}px;
line-height: ${props=>props.lineHeight || 27}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body1medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 24}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body2medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 21}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body3medium = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 500}px;
line-height: ${props => props.lineHeight || 16}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body0regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 27}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body1regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 24}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body2regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 21}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body3regular = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 400}px;
line-height: ${props => props.lineHeight || 16}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body0light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 18}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 27}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body1light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 16}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 24}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body2light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 14}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 21}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`
export const Body3light = styled.p<generalStyleProps>`
color: ${props => props.color || colors.black};
font-size: ${props => props.fontSize || 12}px;
font-weight: ${props => props.fontWeight || 300}px;
line-height: ${props => props.lineHeight || 16}px;
margin: 
    ${props=>props.marginTop || 0}px
    ${props=>props.marginRight || 0}px
    ${props=>props.marginBottom || 0}px
    ${props=>props.marginLeft || 0}px;
`