import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const HomeContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const MainContainer = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PageHeadline = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
`

export const SiteHighlight = styled.a`
    color: #0070f3;
    text-decoration: none;
`

export const PageDescription = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
`

export const PokemonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 0.5rem;
`

export const PokemonItem = styled.div`
    cursor: pointer;
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 45%;
    &:hover,
    &:focus,
    &:active{
        border-color: #0070f3;
    }
`

export const PokemonName = styled.h2`
    text-transform: capitalize;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
`

export const FindText = styled.h4`
    align-self: flex-end;
    margin-right: 25px;
    margin-bottom: -10px;
    text-decoration: underline;
    color: #0070f3;
`