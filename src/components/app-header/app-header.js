import React from 'react';
import styled from 'styled-components';
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
      }

`

const AppHeader = () =>{
    return (
        <Header>
        <h1>Nadezhda Spitsyna</h1>
        <h2>7 записей, из них прочитано 0</h2>
        </Header>
    )
}

export default AppHeader;