import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../Actions/postActions';
import PropTypes from 'prop-types';

const PostForm = ({createPost}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        createPost({
            title,
            body
        });
        setBody('');
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='title' onChange={e => setTitle(e.target.value)} placeholder='Title' value={title} required/>
                <input type='text' name='body' onChange={e => setBody(e.target.value)} placeholder='Body' value={body} required/>
                <input type='submit' value='submit'/>
            </form>
            <hr />
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}


export default connect(null, {createPost})(PostForm);
