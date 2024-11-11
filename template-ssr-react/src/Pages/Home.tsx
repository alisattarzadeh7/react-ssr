import reactLogo from '../assets/react.svg'
import {useState} from 'react'
import {Link} from "react-router-dom";


const Home = () => {

    const [count, setCount] = useState(0)

    return (<>
        <div>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p style={{color: 'black'}}>
            Click on the Vite and React logos to learn more
        </p>
        <Link to='/other'>link to other page</Link>
    </>)
}

export default Home