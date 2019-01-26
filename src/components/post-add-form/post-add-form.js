import React,{Component} from 'react';
import { Button, Input } from 'reactstrap';

import styled from 'styled-components';

const BottomPanel = styled.form`
    display: flex;
    margin-top: 20px;
`

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onValueChange(e){
      
        this.setState({
            text: e.target.value
        })  

    }

    onSubmit(e){
        e.preventDefault();
       
       if(this.state.text.replace(/^\s+|\s+$/g, '')!==''){
        this.props.onAdd(this.state.text)
        }else{
            return false
        }
        
        this.setState({
            text: ''
        }) 
    }
    render(){
        return(
            <BottomPanel 
                onSubmit={this.onSubmit}
            >
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange = {this.onValueChange}
                    value={this.state.text}
    
                    />
                    <Button 
                        outline color="secondary"
                        type="submit"
                        className="btn btn-outline-secondary"

                        
                    >
                        Добавить
                    </Button>
    
            </BottomPanel>
        )
    }
}

 