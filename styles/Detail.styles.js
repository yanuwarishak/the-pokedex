import styled from "@emotion/styled";
import Image from "next/image"
import { typeColors } from "./Colors.styles";

export const DetailContainer = styled.div`
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Name = styled.h1`
    text-transform: capitalize;
    font-size: 2.5rem;
    margin: 10px 0px 0px 0px;
    color: #0070f3;
`

export const TypesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`

export const PokemonType = styled.div`
    margin: 10px 10px;
    background-color: ${props => typeColors[props.type]};
    width: fit-content;
    padding: 0px 20px;
    border-radius: 10px;
`

export const TypeName = styled.p`
    font-size: 0.75rem;
    margin: 10px;
    color: #FFFBFBEE;
    text-transform: uppercase;
    font-weight: bold;
`

export const Sprites = styled(Image)`
    background-color: ${props => `${typeColors[props.type]}AA`};
    padding: 10px !important;
    border-radius: 50%;
    margin: 10px 0px;
`

export const SizeContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #0070f3;
    text-decoration: none;
    border: 1px solid #0070f3;
    border-radius: 10px;
`

export const FlexContainer = styled.div`
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SizeLabel = styled.p`
    /* font-size: 1rem; */
    margin: 10px;
    color: #0070f3BB;
    font-weight: bold;
`

export const Value = styled.h3`
    margin: 0px;
    font-size: 1.5rem;
    text-transform: capitalize;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border: 1px solid #0070f3;
    border-radius: 10px;
`

export const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TabItem = styled.div`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    padding: 5px 30px;
    margin: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #0070f3;
    border-radius: 10px;
    background-color: ${props => props.active ? "#0070f3" : "transparent"};
    color: ${props => props.active ? "white" : "#0070f3"};
`

export const MovesContainer = styled.div`
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: fit-content;
    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    } 
`

export const MovesItem = styled.div`
    width: 100px;
    word-wrap: break-word;
    height: fit-content;
    padding: 5px;
    margin: 5px 5px;
    border: 1px solid #0070f3;
    text-align: center;
    font-size: 0.75rem;
    text-transform: capitalize;
    color: #0070F3;
`

export const CatchButton = styled.button`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    padding: 5px 30px;
    margin: 1.5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #0070f3;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    background-color: #FFF;
    color: #0070f3;
    &:hover{
        background-color: #0070f3;
        color: #FFF;
    }
`

export const UndiscoveredContainer = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const RedirectLink = styled.h3`
    text-decoration: underline;
    &:hover{
        color: #0070F3;
    }
`