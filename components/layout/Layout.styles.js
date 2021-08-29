import styled from '@emotion/styled'
import { color } from '../../styles/Colors.styles'

export const LayoutContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0.5rem;
    height: auto;
    /* background-color: ${color.primary}; */
`
export const ContentWrapper = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`