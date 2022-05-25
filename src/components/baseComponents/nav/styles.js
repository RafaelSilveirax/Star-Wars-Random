import styled from 'styled-components';

export const NavContainer = styled.div`
   
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 80%;
   height: 80%;

   section{
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
   }

   h1{
      color:  #fcde3d;
      font-size: 2rem;
      font-weight: bolder;
   }

   @media only screen and (max-width: 500px) {
    h1{
      font-size: 1.6rem;
    }
  } 
`; 
