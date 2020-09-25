import React, {useState} from 'react';
import '../css/Cards.css';
import TinderCard from 'react-tinder-card'

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

    const swiped = (direction, namedToDelete) => {
        console.log('remove: ' + namedToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left!');
    }

    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    people.map((person) => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className='card' style={{backgroundImage: `url(${person.url}`}}>
                                <h3>
                                    {person.name}
                                </h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
