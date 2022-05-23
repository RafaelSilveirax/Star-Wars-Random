import styled from 'styled-components';

export const FilmsContainer = styled.footer`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    h1{
        padding: 0;
    }
    h2{
        color:#FCDE3D;
        font-size: 2rem;
        margin: 0;
    }
    p{
        color:#FCDE3D;
        font-size: 1.6rem;
        width: 70%;
        text-align: justify;
        padding: 0 20px;
        line-height: 1.1em;
        margin: 0;
        animation: up 20s; 
        transform: perspective(400px) rotateX(25deg);
    }
    
    @keyframes up {
  from {
    transform: perspective(400px) rotateX(25deg) translatey(500px);
  }
  to {
    transform: perspective(400px) rotateX(25deg) translatey(0px);
  }
}

@media only screen and (max-width: 615px) {
    p{
        font-size: 1.4rem;
    }
}
    
`; 
