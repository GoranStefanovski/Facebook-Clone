import React from 'react'
import "./storyReel.css";
import Story from "./Story";
import MessageSender from './MessageSender';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://cdn.stocksnap.io/img-thumbs/960w/couple-love_FGVPERBQAU.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dnTPinsqKjbwfHqn4yTxtL-SLfFlbFZm0A&usqp=CAU"
                title="Frankie"
            />
            <Story
                image="https://cdn.stocksnap.io/img-thumbs/280h/blurred-portrait_JW2PZFOJ1X.jpg"
                profileSrc="https://cdn.stocksnap.io/img-thumbs/960w/woman-model_Z6GBTIHNVL.jpg"
                title="Joana"
            />
            <Story
                image="https://cdn.stocksnap.io/img-thumbs/960w/woman-portrait_DTLVQXZC5Q.jpg"
                profileSrc="https://cdn.stocksnap.io/img-thumbs/960w/smiling-woman_VXTSWFJO8X.jpg"
                title="Lisa"
            />
            <Story
                image="https://cdn.stocksnap.io/img-thumbs/960w/couple-selfie_XNOUUIHJGG.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3LoPbi7GSWF9Fiw5GhPgNmlJ8pNYz8jmeg&usqp=CAU"
                title="Steve"
            />
            <Story
                image="https://cdn.stocksnap.io/img-thumbs/960w/winter-forest_J7OU1ATTFF.jpg"
                profileSrc="https://pickaface.net/gallery/avatar/Dorka123551177b601b1e.png"
                title="Marry"
            />
            {/* <MessageSender /> */}
        </div>
    )
}

export default StoryReel;
