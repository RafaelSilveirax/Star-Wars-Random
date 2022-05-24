import styled from 'styled-components';

export const PressContainer = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

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
  .hide{
      opacity: 0;
  }

  
  @keyframes fadeout {
    from {
        width: 100%;
    }
    to {
        width: 50%;
    }
  }
   

`; 
