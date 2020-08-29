import React from 'react'
import {Field} from 'formik'
import styled from '@emotion/styled'
import breakpoints from '../../utils/styles'

export const FormHolder = styled.div`
    width: 100%;
`
export const ListHolder = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
`
export const FormPartial = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2rem;
`
export const FormPartialImage = styled.div`
    flex-grow: 1;
    max-width: 150px;
    max-height: 105px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
` 
export const FormPartialText = styled.div`
    flex-grow: 2;
`
export const FormPartialCheck = styled.div`
    flex-grow: 0;
`
export const ParagraphTitle = styled.h4`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.75rem;
    margin: 0 !important;
`
export const Paragraph = styled.p`
    line-height: 1.75rem;
`
export const FieldCheckbox = styled(Field)`
    &[type="checkbox"]{
        visibility: hidden;
    }
    &[type="checkbox"] + div {
        position: relative;
        top: 0;
        left: 0;
        width: 3.125rem;
        height: 3.125rem;
        vertical-align: middle;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
    }
    &[type="checkbox"] + div:after {
        border: 4px solid #4292F4;
        border-top: none;
        border-right: none;
        border-radius: 0.25rem;
        content: "";
        height: 10px;
        left: 10px;
        opacity: 0;
        position: absolute;
        top: 15px;
        transform: rotate(-45deg);
        width: 24px;
    }
    &[type="checkbox"]:checked + div {
        border: 4px solid #4292F4;
    }
    &[type="checkbox"]:checked + div:after {
        opacity: 1;
    }
`
export const EmailCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    border-top: 1px #f5f5f5 solid;
    padding-top:20px;
    padding-bottom: 80px;
    box-shadow: 0px -6px 14px -6px rgba(204,204,204,1);
`
export const EmailContainer = styled.div`
    width: 60%;
`
export const Input = styled(Field)`
    background-color: #f5f5f5;
    border: 1px solid #e4e4e4;
    border-radius: 0.25rem;
    width: 100%;
    padding: 0.75rem 0.75rem;
    line-height: 1.4rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    mix-blend-mode: normal;
    opacity: 0.75;
`
export const Submit = styled.button`
    width: 100%;
    border: none;
    margin-top: 0.5rem;
    border-radius: 0.25rem;
    background-color: #4292F4;
    text-align: center;
    box-shadow: 0px 4px 13px rgba(66, 146, 244, 0.458824);
    line-height: 1.4rem;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;
    transition: 0.4s ease;
    margin-bottom: 1.25rem;
    &:hover {
        background-color: #3474c3;
    }
`
export const SmallText = styled.small`
    margin-left: 1.25rem;
`