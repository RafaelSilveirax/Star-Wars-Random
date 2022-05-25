import styled from 'styled-components';

export const planetContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
   
    h1{
        padding: 0;
    } 
    p{
        color: #FCDE3D;
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 500px) {
        h1{
            font-size: 1.6rem;
        }
        p{
            font-size: 1.2rem;
            text-align: center;
        }
    } 
`; 
