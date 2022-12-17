import styles from './simpleForm.module.css'
import { useState } from 'react'

function SimpleForm() {
    const name = ""
    const age = 0
    const graduated = false


    return (
        <div className={styles.container}>
            <form className={styles.studentForm}>
                <label> Имя:
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="Введите имя студента"/>
                </label>
                <label> Возраст:
                    <input 
                        type="number"
                        name="age" min={1} max={120} />
                </label>
                <label>Закончил(а) курсы: 
                    <input 
                        type="checkbox" 
                        name="grad"/>
                </label>
            </form>
            <div className="profile">
                <div>Имя: {name}</div>
                <div>Возраст: {age}</div>
                <div>Закончил(а) курсы:</div>
            </div>
        </div>
    )
}

export default SimpleForm;