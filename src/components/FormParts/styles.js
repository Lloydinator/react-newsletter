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

`
export const Paragraph = styled.p`

`
export const FieldCheckbox = styled(Field)`
    &[type="checkbox"]{
        display: none;
    }
    &[type="checkbox"] + div {
        display: inline-block;
        position: relative;
        top: -1px;
        width: 1.25rem;
        height: 1.25rem;
        vertical-align: middle;
        background: white left top no-repeat;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    &[type="checkbox"]:checked + div {
        background: #d53f8c =19px top no-repeat;
    }
`
export const EmailCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    border-top: 1px #ccc solid;
    padding-top:20px;
    padding-bottom: 80px;
`
export const EmailContainer = styled.div`
    width: 60%;
`
export const Input = styled(Field)`
    border: 1px solid lightgrey;
    border-radius: 0.25rem;
    width: 100%;
    padding: 0.75rem 0.75rem;
`
export const Submit = styled.button`
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 0.25rem;
    border-color: #868e96 !important;
    background-color: #868e96;
    text-align: center;

`