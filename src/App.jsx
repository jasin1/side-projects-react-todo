// import {useState} from 'react'
import './App.css'
import trashCan from './assets/trash-can.svg'
import clockIcon from './assets/clock_icon.svg'


function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <main>
                <header>
                    <h1>Todo App</h1>
                </header>
                <article>
                    <section>
                        <form action="">
                            <div className="task-submit">
                                <label htmlFor="">
                                    <input type="text"/>
                                    <div className="btn-wrap">
                                        <button>
                                            <img src={clockIcon} alt=""/>
                                        </button>
                                        <button type="submit"> Add</button>
                                    </div>
                                </label>
                            </div>

                            <div className="task-added">
                                <ul>
                                    <li>
                                        <label htmlFor="">
                                            <div className="cheking">
                                            <input type="checkbox"/>
                                            <span>Drink water</span>
                                            </div>
                                            <div>
                                                <span>7:55 PM</span>
                                                <button>
                                                    <img src={trashCan} alt=""/>
                                                </button>

                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </section>
                    <section>

                    </section>
                </article>


            </main>
        </>
    )
}

export default App
