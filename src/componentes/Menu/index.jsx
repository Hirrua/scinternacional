import styles from './Menu.module.scss'
import home from '../../assets/home.png'
import curtidas from '../../assets/curtidas.png'
import vistas from '../../assets/vistas.png'
import novas from '../../assets/novas.png'
import surpresa from '../../assets/surpresa.png'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt=""/>
                    <a href="">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={curtidas} alt=""/>
                    <a href="">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={vistas} alt=""/>
                    <a href="">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt=""/>
                    <a href="">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpresa} alt=""/>
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}