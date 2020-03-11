import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../Actions/postActions';
import PropTypes from 'prop-types';

const Posts = ({posts: {items, loading},fetchPosts}) => {

    useEffect(() => {
        fetchPosts();
        
        // eslint-disable-next-line
    }, []);

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Posts</h1>
            {items.map(post => 
                <Fragment key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <hr />
                </Fragment>
            )}
            
        </div>
    )
}


Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired 
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
