import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import './TweetBox.css';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Real Fhama",
            username: "andy_enoch",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
        });

        setTweetMessage("");
        setTweetImage("")
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""></Avatar>
                    <input
                        className="tweetBox__inputText"
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"/>
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage} 
                    className="tweetBox__inputImage" 
                    placeholder="Optional: Enter image URL" 
                    type="text"/>
                <Button 
                    onClick={sendTweet}
                    className="tweetBox__tweetButton"
                    type="submit"
                    >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
