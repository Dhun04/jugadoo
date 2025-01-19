import React from 'react';
import './ArtFinder.css';

export default function ArtFinder() {
    return ( <
        div className = "artfinder" >
        <
        div className = "artfinder__hero" >
        <
        h1 className = "artfinder__title" > ArtFinder < /h1> <
        p className = "artfinder__subtitle" >
        Discover and explore creative works tailored just
        for you. <
        /p> <
        /div>

        <
        div className = "artfinder__content" >
        <
        div className = "artfinder__card" >
        <
        img src = "https://via.placeholder.com/150"
        alt = "Art Example"
        className = "artfinder__image" /
        >
        <
        h3 className = "artfinder__card-title" > Abstract Beauty < /h3> <
        p className = "artfinder__card-description" >
        Dive into the world of abstract creativity and art. <
        /p> <
        /div> <
        div className = "artfinder__card" >
        <
        img src = "https://via.placeholder.com/150"
        alt = "Art Example"
        className = "artfinder__image" /
        >
        <
        h3 className = "artfinder__card-title" > Nature 's Harmony</h3> <
        p className = "artfinder__card-description" >
        Explore how art blends with the serenity of nature. <
        /p> <
        /div> <
        div className = "artfinder__card" >
        <
        img src = "https://via.placeholder.com/150"
        alt = "Art Example"
        className = "artfinder__image" /
        >
        <
        h3 className = "artfinder__card-title" > Cultural Wonders < /h3> <
        p className = "artfinder__card-description" >
        Experience cultural art forms from around the globe. <
        /p> <
        /div> <
        /div> <
        /div>
    );
}