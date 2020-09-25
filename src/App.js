import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Swipe from './components/Swipe';

function App() {
    return (
        <div className='app'>
            <Header />
            <Cards />
            <Swipe />
        </div>
    );
}

export default App;
