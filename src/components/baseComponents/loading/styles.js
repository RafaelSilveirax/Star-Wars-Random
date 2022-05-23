import styled from 'styled-components';

export const LoadingContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        border: #fcde3d 2px solid;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        /* padding: 25px 20px; */
    img{
        padding-left: 10px;
        width: 150px;
        animation: rotation 4s infinite linear;
    }

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`; 
