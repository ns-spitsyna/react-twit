import React from 'react';
import { Button, Input } from 'reactstrap';

import styled from 'styled-components';

const BottomPanel = styled.div`
    display: flex;
    margin-top: 20px;
`

const PostAddForm = ({onAdd}) =>{
    return(
        <BottomPanel>
            <Input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"

                />
                <Button 
                    outline color="secondary"
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={() => onAdd('Hello')}
                >
                    Добавить
                </Button>

        </BottomPanel>
    )
}

export default PostAddForm;