import React from 'react'
import "./LandingPage.css"
import Header from './Header'
import Cards from './Cards'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const LandingPage = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='main'>
                <div className='intro-top'>
                    <div className='intro'>
                        <h1>Discover the Latest Anime Releases</h1>
                        <p>Stay up-to-date with the hottest anime series and movies. Explore our curated selection of the latest releases.</p>
                    </div>
                    <div className='top-cards'>
                        <Cards
                            title={"Demon Slayer"}
                            subtitle={"Season 4"}

                        />
                        <Cards
                            title={"Demon Slayer"}
                            subtitle={"Season 4"}

                        />
                        <Cards
                            title={"Demon Slayer"}
                            subtitle={"Season 4"}

                        />
                        <Cards
                            title={"Demon Slayer"}
                            subtitle={"Season 4"}

                        />
                    </div>
                </div>
                <div className='trending'>
                    <div className='trend-head'>
                        <h1>Trending Anime</h1>
                        <p>Check out the latest and greatest anime series that are taking the world by storm.</p>
                    </div>
                    <div className='trend-cards'>
                        <Cards
                            title={"Attack on Titan"}
                            subtitle={"Season 2"}
                            containerStyle={{ backgroundColor: "#EAEAEA", height: "60vh", width: "23vw" }}
                            detailsStyle={{ backgroundColor: "#F3F4F6" }}
                            hStyle={{ color: "black" }}



                        />
                        <Cards
                            title={"Attack on Titan"}
                            subtitle={"Season 2"}
                            containerStyle={{ backgroundColor: "#EAEAEA", height: "60vh", width: "23vw" }}
                            detailsStyle={{ backgroundColor: "#F3F4F6" }}
                            hStyle={{ color: "black" }}



                        />
                        <Cards
                            title={"Attack on Titan"}
                            subtitle={"Season 2"}
                            containerStyle={{ backgroundColor: "#EAEAEA", height: "60vh", width: "23vw" }}
                            detailsStyle={{ backgroundColor: "#F3F4F6" }}
                            hStyle={{ color: "black" }}



                        />
                        <Cards
                            title={"Attack on Titan"}
                            subtitle={"Season 2"}
                            containerStyle={{ backgroundColor: "#EAEAEA", height: "60vh", width: "23vw" }}
                            detailsStyle={{ backgroundColor: "#F3F4F6" }}
                            hStyle={{ color: "black" }}



                        />
                    </div>
                </div>
                <div className='social'>
                    <div className='icons'>
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
