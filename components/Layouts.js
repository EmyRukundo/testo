import styles from '../styles/Layouts.module.css';

 const Layouts = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
              {children}
            </main>
        </div>
    )
}
export default Layouts