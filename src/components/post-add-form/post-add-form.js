import React from 'react';
import { Button, Input } from 'reactstrap';
import './post-add-form.css';

const PostAddForm = ({onAdd}) =>{
    return(
        <div className="bottom-panel d-flex">
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

        </div>
    )
}

export default PostAddForm;