import React from 'react'
import './Welcome.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ReactTypingEffect from 'react-typing-effect';


const Welcome = ({isDarkMode}) => {
    return (
        <div className='main-welcome-wrapper'>
            <div className='welcome-top'>

            </div>
            
            <div className='welcome-down' style={{ backgroundColor: isDarkMode?  'rgba(0, 0, 0, 0.6)':'rgba(255, 255, 255, 0.6)'  }} >
                <div className='welcome-left'>

                </div>
                <div className='welcome-right'>
                    <h1 style={{fontWeight:400 }}>Welcome to the Art Web</h1>
                    <ReactTypingEffect style={{fontWeight:400}}
                        text={["Discover and explore beautiful artworks.",
                            "Search for your artistic muse and uncover hidden gems",
                            "Start your art adventure today. Search, discover, and create."]}
                    />
                    <div className='icon-wrapper'>
                        <FacebookIcon className='icons-welcome' />
                        <InstagramIcon className='icons-welcome' />
                        <TwitterIcon className='icons-welcome' />
                        <YouTubeIcon className='icons-welcome' />
                    </div>
                    
                </div>


            </div>

        </div>
    )
}

export default Welcome