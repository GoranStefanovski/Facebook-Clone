import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import firebase from "./firebase";
import db from "./firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState(" ");
    const [imgUrl, setImgUrl] = useState(" ")
    const data = new Date();

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('Posts').add({
            message: input,
            timestamp: data,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgUrl
        })

        setInput(" ");
        setImgUrl(" ");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        placeholder={"What's on your mind"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        style={{ color: "black" }}
                    >

                    </input>
                    {/* ------------------------ */}
                    <input
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        placeholder="image URL (Optional)"></input>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div >
    )
}

export default MessageSender;
