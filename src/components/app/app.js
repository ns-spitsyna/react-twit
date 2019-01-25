import React, {Component} from 'react';
import idGenerator from 'react-id-generator';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component{
    constructor(props){
        super(props);
      
        this.state={
            
            data:[
                {label: 'Going to learn React', important: false, id: idGenerator()},
                {label: 'That is so good', important: true, id: idGenerator()},
                {label: 'I need a break...', important: false, id: idGenerator()},
                0,
                'kjkljkklk',
                []
        
            ]

        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    deleteItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0,index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    addItem(body) {
        console.log(body);
    }
    render(){
        const dataCheck = this.state.data.filter(type =>(typeof type ==='object') && (typeof type !== 'null')&&(type.constructor === Object));
        return(
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                posts = {dataCheck}
                onDelete={ this.deleteItem}
                />
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
            
            )
    }
 
}
