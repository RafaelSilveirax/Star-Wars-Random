import styled from 'styled-components';

export const PressContainer = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;

   img{
    display: block;
    margin: auto;
    max-width: 100%;
   
   }

  .fade {
  animation-name: fadeout;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  }

  h1{
    animation-name: fadetext;
    animation-duration: 10s;
    animation-fill-mode: forwards;
  }

  @keyframes fadeout {
    from {
        width: 100%;
    }
    to {
        width: 50%;
    }
  }

  @keyframes fadetext {
    from {
        opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 500px) {
    h1{
      font-size: 1.5rem;
    }
  }

`; 
