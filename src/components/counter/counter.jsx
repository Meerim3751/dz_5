import styles from './counter.module.css'


function Counter() {
    const count = 10
    return (
        <div className={styles.container}>
            <button>-</button>
            <div className={styles.counter}>{count}</div>
            <button>+</button>
        </div>
    )
}

export default Counter;