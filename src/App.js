import React from 'react';
import './App.css';

const {useState, useEffect} = React

const App = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Flavio')

    useEffect(() => {
        console.log(`Hi ${name}, you clicked ${count} times!`)
        return () => {
            console.log(`Unmounting...`)
        }
    }, [name, count])

    return (
        <div className="App">
            <p>Hi {name}, you clicked {count} times!</p>
            <button onClick={() => setCount(count + 1)}>Click count!</button>
            <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>Change name</button>
        </div>
    )
}

export default App
