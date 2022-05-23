import styled from 'styled-components';

export const NavItem = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
    
    
    a{
        width: 100%;
        margin: 0 10px;   
    }

    button{
        color: black;
        background-color: #fcde3d;
        width: 100%;
        min-width: 200px;
        height: 40px;
        border: none;
        border-radius: 2px;
       
        font-size: 1em;
        font-weight: bold;
    }
`; 

