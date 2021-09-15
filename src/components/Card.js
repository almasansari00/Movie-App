import React from "react";

const Card = (props) =>(
    <main id="main">
        <div class="movie">
            <img src={props.source} alt="Movie-Name"/>
                <div class="movie-info">
                    <h3>{props.title}</h3>
                    <span>{props.year}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quisquam est architecto maxime molestias veniam quae neque veritatis temporibus, minus cum magnam libero, omnis sapiente illo laboriosam. Voluptatem, pariatur placeat?
                </div>
        </div>
    </main>)


export default Card;