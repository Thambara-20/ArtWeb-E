import React from 'react'
import './welcome.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReactTypingEffect from 'react-typing-effect';

const Welcome = () => {
    return (
        <div className='main-welcome-wrapper'>
            <div className='welcome-top'>

            </div>

            <div className='welcome-down' >
                <div className='welcome-left'>

                </div>
                <div className='welcome-right'>
                    <h2>Welcome to the Art Web</h2>
                    <ReactTypingEffect
                        text ={["Discover and explore beautiful artworks.",
                            "Search for your artistic muse and uncover hidden gems",
                            "Start your art adventure today. Search, discover, and create."]}
                    />
                    <div className='icon-wrapper'>
                        <FacebookIcon className='icons-welcome' />
                        <InstagramIcon className='icons-welcome' />
                        <TwitterIcon className='icons-welcome' />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Welcome