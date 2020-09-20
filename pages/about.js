import Header from '../components/MyLayout.js' 
import styles from './about.module.scss'
export default () => (
    <div>
        <Header />
        <p className={styles.nav}>This is the about page</p>
    </div>
)