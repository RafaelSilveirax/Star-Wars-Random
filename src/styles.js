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
   max-height: 600px;
   height: calc(100% - 30px);;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   border: 2px solid #FCDE3D;
   border-radius: 4px;
   position: relative;
   
   svg{
      color: black;
      position: absolute;
      top: 0;
      left: 0;
      background-color:#FCDE3D;
      font-size: 2rem;
      border-radius: 0 0px 4px 0;
      cursor: pointer;
   }
`; 



