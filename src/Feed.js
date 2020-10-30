import React, { useEffect, useState } from 'react';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import Flipmove from 'react-flip-move';
import './Feed.css';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            <Flipmove>
                {posts.map(post => (
                    <Post 
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                />
                ))}
            </Flipmove>

        </div>
    )
}

export default Feed;
