import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Virtual Pets Paradise!</h1>
            <div className="news-section">
                <h2>Hot News</h2>
                <ul>
                    <li>🌟 New pet species added: Mythical Unicorn!</li>
                    <li>🐾 Check out our Winter Wonderland event, live now!</li>
                    <li>🎉 Join our community contest to win exclusive prizes!</li>
                </ul>
            </div>
            <div className="banner">
                🎲 Love games? Try our new Blackjack app and double the fun!
            </div>
        </div>
    );
};

export default Home;
