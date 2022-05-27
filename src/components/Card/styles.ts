import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 300px;
    margin: 25px;
    border-radius: 8px;
    padding: 16px;
    background: #fff;
    gap: 10px;
    width: 45%;
    img {
        object-fit: cover;
        height: 270px;
        border-radius: 8px;
        max-width: 180px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 40px;
  }
`;

export const Titulo = styled.h4``;

export const Resumo = styled.p``;

export const BotaoNoticia = styled.a`
    background-color: #49065e;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    width: 200px;
    text-align: center;
    font-weight: 700;
    border-radius: 8px;
`