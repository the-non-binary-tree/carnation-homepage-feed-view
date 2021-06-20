import React, { useState } from 'react';
import './WeeklyAsk.css';
import MainFeed from '../MainFeed/MainFeed';


const WeeklyAsk = () => {
    const EXAMPLE_COMMENTS = [
        {
            author: 'Sandy K.',
            content: "I'm sleep deprived but don't want to use stimulants while breastfeeding. What can I do?",
            timestamp: 'June 15'
        },
        {
            author: 'Jiyoung Eum',
            content: "I can't sleep if I hear my baby's voice, even when I'm exhausted. What should be my strategy?",
            timestamp: 'June 15'
        },
        {
            author: 'Siya M.',
            content: "I'm sleepy all the time after birth but still physically tired. How to I get better quality sleep?",
            timestamp: 'June 15'
        },

    ]
    const [comments, setComments] = useState(EXAMPLE_COMMENTS);
    
    const EXAMPLE_POSTS = [
        {
            author: 'DrJoSleep',
            content: 'Hi! I’m Dr. Jo and I’m a research specialist on sleep regressions. AMA!',
            // content: '',
            timestamp: 'June 15',
            comments: comments
        }
    ]

    const [reactCount, setReactCount] = useState(0);
    const handleReactClick = (event) => {
        console.log('react button clicked')
        setReactCount(reactCount + 1)
    }

    const [commentText, setCommentText] = useState('');
    const handleCommentClick = (event) => {
        console.log(commentText)
        const commentObject = {
            author: 'HongAnh Ng.',
            content: commentText,
            timestamp: 'June 20'
        }
        setComments(comments.concat(commentObject))
    }
    const handleCommentTextChange = (event) => {
        setCommentText(event.target.value)
    }

    return (
        <div className='weekly-ask'>
            <div className='title'>The WeeklyAsk</div>
            <ul>
                {EXAMPLE_POSTS.map((postItem, index) =>
                    <li key={index}>
                        <div className='root-post'>{postItem.content}</div>
                        <div className='post-info'>
                            <div className='author-name'>By {postItem.author}</div> 
                            <div className='post-time'>On {postItem.timestamp}</div>
                            
                        </div>
                        <div className='comment'>
                            <textarea value={commentText} onChange={handleCommentTextChange}></textarea>
                            <button className='btn-react' onClick={handleReactClick}>{reactCount}</button>
                            <button className='btn-comment' onClick={handleCommentClick}>Comment</button>
                        </div>
                        {postItem.comments.map((commentItem, index) => 
                            <div key={index}>
                                <div>{commentItem.content}</div>
                                <div>By {commentItem.author}</div>
                                <div>On {commentItem.timestamp}</div>
                            </div>
                        )}
                    </li>
                )}
            </ul>
            <MainFeed/>
        </div>
    );
}

export default WeeklyAsk;