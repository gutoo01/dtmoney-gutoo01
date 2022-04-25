import styled from "styled-components";
import { darken, transparentize } from 'polished'



export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9e7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {  // atribuindo estilo as propriedades
      color: var(--text-body);
    }

    & + input { // todo input que antes tiver um input {}
      margin-top: 1rem;
    }
  }

  button[type="submit"] { // aplicando estilo apenas ao button tipo 'submit'
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const TransactionTypeContainer = styled.div`

margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

`;


// Passando Props de estilo

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | "red";
}


// Mapeando cores usadas nesta operação
const colors = {
  green: '#3c9',
  red: '#e24'
}


export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
  ? transparentize(0.9, colors[props.activeColor]) // 'transparentize' opacidade aplicada somente no background do button
  : 'transparent'};
  

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.4, '#d7d7d7')}; // 'darken' importado da lib 'polished'
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;