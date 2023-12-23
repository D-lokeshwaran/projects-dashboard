import styled from 'styled-components';
import { usePath } from '../../contexts/PathContext'

const Aligned = styled.div `
    text-align: center;
    margin: 10% auto;
`;

export default function Home() {
    return(
        <Aligned>
            <h1>WELCOME TO YOUR PROJECTS <span style={{color: '#1bac1b'}}>ᏞᎧᏦＩ</span></h1>
        </Aligned>
    )
}