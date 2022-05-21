import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcde3d;
    height: 60px;
    width: 100vw;
    ul{
        display: flex;
        list-style-type: none;
        text-decoration: none;
        padding: 0;
        margin-left: 20px;
        gap: 10px;

        svg{
            color: black;
            font-size: 30px;
            transition: .5s;
           
        }
        svg:hover{
            color: #867203 ;
        }
    }
`; 
