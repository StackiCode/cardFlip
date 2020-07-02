import React, { Component } from 'react';

class cards extends Component {
    
    render() {
        let cards = null;
        cards =         <div class="container">
        <div class="card">
            <div class="front-face">
                <div class="img_f img_f-3"></div>
                <div class="img_f--3">
                    <h1>BASIC</h1>
                </div>
            </div>
            <div class="back-face">
                <div class="decf decf-1">
                    <h1 class="head">BASIC</h1>
                    <button type= "button"class="btn_b">GET BASIC</button>
                    <p class="price_b">$17 / month</p>
                    <ul class="list">
                        <li>HD available</li>
                        <li>Watch on your laptop, TV, phone and tablet</li>
                        <li>Unlimited movies and TV shows</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="front-face">
                <div class="img_f img_f-1"></div>
                <div class="img_f--1">
                    <h1>STANDARD</h1>
                </div>
            </div>
            <div class="back-face">
                <div class="decf decf-2">
                    <h1 class="head">Standard</h1>
                    <button type= "button"class="btn_b">GET STANDARD</button>
                    <p class="price_b">$27 / month</p>
                    <ul class="list">
                        <li>HD available</li>
                        <li>Watch on your laptop, TV, phone and tablet</li>
                        <li>Unlimited movies and TV shows</li>
                        <li>Cancel anytime</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="front-face">
                <div class="img_f img_f-2"></div>
                <div class="img_f--2"><h1>PREMIUM</h1></div>
            </div>
            <div class="back-face">
                <div class="decf decf-3">
                    <h1 class="head">Premium</h1>
                    <button type= "button"class="btn_b">GET PREMIUM</button>
                    <p class="price_b">$57 / month</p>
                    <ul class="list">
                        <li>HD available</li>
                        <li>Ultra HD available</li>
                        <li>Watch on your laptop, TV, phone and tablet</li>
                        <li>Unlimited movies and TV shows</li>
                        <li>Cancel anytime</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
        return (
            <div>
                {cards}
            </div>
        );
    }    
}

export default cards;