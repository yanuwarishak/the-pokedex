import { css, Global, keyframes } from '@emotion/react'

export const globalStyles = (
    <Global
        styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        /* min-height: 100%; */
        font-size: 16px;
        
        /* background: papayawhip; */
      }
      a {
        color: inherit;
        text-decoration: none;
      }   
      * {
        box-sizing: border-box;
      }
    `}
    />
)