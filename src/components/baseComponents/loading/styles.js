import styled from 'styled-components';

export const LoadingContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        border: #fcde3d 8px solid;
        border-left-color: transparent;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        animation: rotation 0.8s infinite linear;

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`; 
