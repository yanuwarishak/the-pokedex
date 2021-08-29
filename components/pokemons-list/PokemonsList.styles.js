import styled from "@emotion/styled";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* see notes below */
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 0.5rem;
    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    } 

`
export const PokemonCard = styled.div`
    position: relative;
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 200px;
    height: 340px;
    &:hover{
    color: #0070f3;
    border-color: #0070f3;
    }
    &:focus{
    color: #0070f3;
    border-color: #0070f3;
    }
    &:active{
    color: #0070f3;
    border-color: #0070f3;
    }
`

export const PokemonName = styled.h2`
    text-transform: capitalize;
    margin: 0.5rem 0rem;
`

export const DetailButton = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    font-size: 1rem;
    border-radius: 10px;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    color: inherit;
    background-color: transparent;
    border: 1px solid #eaeaea;
    transition: color 0.15s ease, border-color 0.15s ease;
    &:hover
    &:focus
    &:active{
    color: #0070f3;
    border-color: #0070f3;
    }
`