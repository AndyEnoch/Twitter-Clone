import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            {/* Post */}
            <Post 
                displayName="Real Fhama"
                username="fhama"
                verified={true}
                text="Yoo it's working"
                avatar="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                image=""
            />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed;
