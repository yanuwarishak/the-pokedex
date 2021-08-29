import styled from "@emotion/styled";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* see notes below */
    grid-gap: 1rem;
    align-items: flex-start;
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
    min-height: fit-content;
    &:hover
    &:focus
    &:active{
    color: #0070f3;
    border-color: #0070f3;
    }
`

export const PokemonName = styled.h2`
    text-transform: capitalize;
    margin: 0.5rem 0rem;
`

export const ReleaseButton = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: -25px;
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    font-weight: 500;
    color: white;
    background-color: red;
    border: 1px solid #eaeaea;
    transition: color 0.15s ease, border-color 0.15s ease;
    &:hover
    &:focus
    &:active{
    color: #e61111;
    border-color: #e61111;
    }
`

export const PokemonNickname = styled.h4`
    cursor: default;
    text-transform: capitalize;
    color: #0070f3;
    margin: 5px 0px 15px 0px;
    font-size: 1rem;
    word-wrap: break-word;
    width: 100%;
    
`

export const NoList = styled.div`
  display: flex;
  height: calc(100vh - 250px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;
`;

export const CatchText = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #084b5c;
`;

export const PokeballImage = styled.div`
  background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fafa59;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 20px 0px;
`;

export const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 0px 0px;
  width: fit-content;
  height: 50px;
  background-color: #084b5c;
  border-radius: 5px;

  text-align: center;
  font-weight: bold;
  color: white;
`;
