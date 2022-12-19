import { useState } from 'react';
import styles from './toggles.module.css'


function Toggles() {
    const [selected, setSelected] = useState('yes')
    const [showText, setShowText] = useState(true)

    return (
        <div className={styles.container}>
            <div>
                <button onClick={(e) => setShowText(!showText)}>Скрыть текст</button>
                { showText ? 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p> 
                    : null }
            </div>
            <div>
                <div className={styles.question}>
                    <span>Вы уверены что хотите закончить курсы?</span>
                    <input
                        type="radio"
                        id="yes"
                        name="choose"
                        value="yes"
                        checked={selected === 'yes'}
                    />
                    <label htmlFor="yes">Yes</label>

                    <input
                        type="radio"
                        id="no"
                        name="choose"
                        value="no"
                        checked={selected === 'no'}
                    />
                    <label htmlFor="no">No</label>

                    <input
                        type="radio"
                        id="maybe"
                        name="choose"
                        value="maybe"
                        checked={selected === 'maybe'}
                    />
                    <label htmlFor="maybe">Maybe</label>
                </div>
            </div>
        </div>
    )
}

export default Toggles;