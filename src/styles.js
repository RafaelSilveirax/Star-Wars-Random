import styled from 'styled-components';
import img from "./img/backgroundContainer.png"

export const Container = styled.div`
   width: 100vw;
   height: calc(100vh - 120px);
   display: flex;
   align-items: center;
   justify-content: center;
   background:url(${img});
   background-size: cover;

   h1{
      color: #fcde3d;
   }
`; 

export const SubContainer = styled.div`
   max-width: 600px;
   width: calc(100% - 30px);
   height: 600px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   border: 2px solid #FCDE3D;
   border-radius: 4px;
 
`; 



