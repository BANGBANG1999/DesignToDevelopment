import React from 'react'

import "./css/BottomCover.css"

function BottomCover() {
  return (
    <>
    <div className="mainContainer">
    <div className="container">
        <div className="firstContainer">
        <div className="coverPhoto">
        <div className="articlePhoto">✍️ Article</div>
        <div style={{display: "flex"}}>

        <h2 className='first_header'>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
        <img className="dots" src="img/dots.png" alt="" />
        </div>
        <h3 className='second_header'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h3>
        <div className="profile">
            <img className="profilePic" src="img/profilePic.png" alt="" />
            <div className='name'>Sarthak Kamra</div>
            <img className="eye" src="img/eye.png" alt="" />
            <img className="share" src="img/share2.svg" alt="" />
        </div>
        </div>
        </div>
        
        {/* Second Section */}
        <div className="secondContainer">
        <div className="second_coverPhoto">
        <div className="second_articlePhoto">🔬️ Education</div>
        <div style={{display: "flex"}}>

        <h2 className='second_first_header'>Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
        <img className="second_dots" src="img/dots.png" alt="" />
        </div>
        <h3 className='second_second_header'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h3>
        <div className="second_profile">
            <img className="second_profilePic" src="img/secondProfilePic.png" alt="" />
            <div className='second_name'>Sarah West</div>
            <img className="second_eye" src="img/eye.png" alt="" />
            <img className="second_share" src="img/share2.svg" alt="" />
        </div>
        </div>
        </div>

        {/* Third Section */}
        <div className="thirdContainer">
        <div className="third_coverPhoto">
        <div className="third_articlePhoto">🗓️ Meetup</div>
        <div style={{display: "flex"}}>

        <h2 className='third_first_header'>Finance & Investment Elite Social Mixer @Lujiazui</h2>
        <img className="third_dots" src="img/dots.png" alt="" />
        </div>
        <div className='third_second_header'></div>
        <div className='visitWebsite'></div>
        <div className="third_profile">
            <img className="third_profilePic" src="img/thirdProfilePic.png" alt="" />
            <div className='third_name'>Ronal Jones</div>
            <img className="third_eye" src="img/eye.png" alt="" />
            <img className="third_share" src="img/share2.svg" alt="" />
        </div>
        </div>
        </div>

         {/* Fourth Section */}
         <div className="fourthContainer">
        <div className="fourth_coverPhoto">
        <div className="fourth_articlePhoto">💼️ Job</div>
        <div style={{display: "flex"}}>

        <h2 className='fourth_first_header'>Software Developer</h2>
        <img className="fourth_dots" src="img/dots.png" alt="" />
        </div>
        <div className='fourth_second_header'></div>
        <div className='apply'></div>
        <div className="fourth_profile">
            <img className="fourth_profilePic" src="img/fourthProfilePic.png" alt="" />
            <div className='fourth_name'>Ronal Jones</div>
            <img className="fourth_eye" src="img/eye.png" alt="" />
            <img className="fourth_share" src="img/share2.svg" alt="" />
        </div>
        </div>
        </div>
        
    </div>
    <div className="rightPart">
        <div className="location">
            <img src="img/locationIcon.png" alt="" className="locationIcon" />
            <div className="locationText">Noida, India</div>
            <img src="img/pencilIcon.png" alt="" className="pencilIcon" />
        </div>
            <img src="img/belowLocation.png" alt="" className="belowLocation" />
    </div>
    </div>
    
     


    </>
  )
}

export default BottomCover
