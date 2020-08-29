import React from 'react'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'

export const breakpoints = {
    xs: 360,
	s: 576,
	m: 768,
	l: 992,
	lg: 1024,
	xl: 1280,
	xxl: 1600
}

export const GlobalStyles = props => (
    <Global 
        {...props} styles = {css`
            html {
                font-family: Montserrat, sans-serif;
                font-size: 16px;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
            body {
                margin: 0;
			  -webkit-font-smoothing: antialiased;
			  -moz-osx-font-smoothing: grayscale;
                overflow: auto;
                color: #1f1f27;
            }
            * {
                box-sizing: border-box;
            }
            *:before {
                box-sizing: border-box;
            }
            *:after {
                box-sizing: border-box;
            }
            h1,h2,h3,h4,h5,h6 {
                font-weight: 500;
            }
        `}
    />
)

export const CardHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding-top: 106px;
    padding-bottom: 106px;
`