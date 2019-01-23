import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {
    const data = [
        {label: 'Going to learn React', important: false, id: 'ewrr'},
        {label: 'That is so good', important: true, id: 'wewe'},
        {label: 'I need a break...', important: false, id: 'jkopp'},
        0,
        'kjkljkklk',
        []

    ]
   const dataCheck = data.filter(type =>(typeof type ==='object') && (typeof type !== 'null')&&(type.constructor === Object));
    return(
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {dataCheck}/>
            <PostAddForm/>
        </div>
        
        )
}
export default App;