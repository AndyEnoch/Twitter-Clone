import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__inputs">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                {/* <TwitterTweetEmbed tweetId={"1154431504753274886"}/> */}

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="andy_enoch"
                    options={{height: 400}}
                />

                <TwitterShareButton 
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{text: "#reactjs is awesome", via: "andy_enoch"}}
                />
            </div>
        </div>
    )
}

export default Widgets;
