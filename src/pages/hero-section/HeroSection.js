import React, { Component } from 'react';
import HeroContent from './HeroContent';
import Navbar from '../nav-bar/Navbar';

export default class HeroSection extends Component {
    render() {
        return (
            <header className="">
                <Navbar />
                <HeroContent />
            </header>
        )
    }
}
