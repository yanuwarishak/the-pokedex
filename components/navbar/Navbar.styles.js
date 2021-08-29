import styled from '@emotion/styled'
import { color } from '../../styles/Colors.styles'

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    z-index: 99;
    height: 50px;
    min-width: 100vw;
    padding: 10px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const ListContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    `

export const ListItem = styled.li`
    color: ${props =>
        props.active ? color.primary : '#fff'};
    /* color: #fff; */
    margin: 5px 15px;
    &:hover{
        color: ${color.primary}
    }
`
