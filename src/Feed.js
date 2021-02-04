import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post

                profilePic='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                message='WOW really nice'
                timestamp='Timestamp'
                username='tevidma'
                image='https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943'
            />
            <Post

                profilePic='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                message='WOW really nice'
                timestamp='Timestamp'
                username='tevidma'
                image='https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943'
            />
            <Post

                profilePic='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                message='WOW really nice'
                timestamp='Timestamp'
                username='tevidma'
                image='https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943'
            />
        </div>
    )
}

export default Feed;
