import React from 'react'
import "./css/BelowCover.css"

function BelowCover() {
  return (
    <>
        <div className="allPosts">
            <li id='all_posts'>All posts(32)</li>
            <li id='articles'>Articles</li>
            <li id='event'>Event</li>
            <li id='education'>Education</li>
            <li id='job'>Job</li>

            <div className="right">
                <div className="writePost">
                <p className='text'>Write a post</p>
                <img className="dropdown" src="img/dropdown.png" />
                <div className='joinContainer'>
                <img className="join_img" src="img/join.png" />
                <div className='join'>Join Group</div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BelowCover
