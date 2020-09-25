import React, {useState} from 'react';
import '../css/Cards.css';

function Cards() {

    const [people, setPeople] = useState([
        {
            name: 'Scarlett Johansson',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF_Zo1NKcfu5do-GGEYAEZoAvdClZPbRqB1w&usqp=CAU',
        },

        {
            name: 'Ann Hathaway',
            url: 'https://pickytop.com/wp-content/uploads/2020/03/Anne-Hathaway.jpg',
        },
    ]);

    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    people.map(person => (
                        <h1>
                            {person.name}
                        </h1>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
