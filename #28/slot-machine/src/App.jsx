import React from 'react'
import SlotM from './SlotM';

const App = () => {
    return (
        <>
            <h1 className='heading_style'>🎰 Welcome to <span className='game_name'>Slot Machine Game</span> 🎰</h1>

            <div className='slotmachine'>
                <SlotM x='😊' y='😊' z='😊' />
                <SlotM x='🎧' y='😊' z='🎰' />
                <SlotM x='🎰' y='🎰' z='🎰' />
                <SlotM x='🕕' y='🕐' z="🕖" />
            </div>
        </>
    )
}

export default App;