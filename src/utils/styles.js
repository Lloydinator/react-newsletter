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
            }
        `}
    />
)