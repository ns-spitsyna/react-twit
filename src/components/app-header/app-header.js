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

const AppHeader = ({liked, allPosts}) =>{
    return (
        <Header>
        <h1>Nadezhda Spitsyna</h1>
        <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;