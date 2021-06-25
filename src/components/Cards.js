import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Have a look at BREATHTAKING visual of Creations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/dock.webp"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src="images/drop.webp"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        label='Drops'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/heart.webp"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        label='Sunset'
                        path='/services'
                        />
                        <CardItem 
                        src="images/japan.webp"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        label='Vastness'
                        path='/services'
                        />
                        <CardItem 
                        src="images/jasper.jpg"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        label='Mountains'
                        path='/services'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards