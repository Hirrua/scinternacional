import Cabecalho from '../../componentes/Cabecalho';
import Galeria from '../../componentes/Galeria';
import Menu from '../../componentes/Menu';
import Rodape from '../../componentes/Rodape';
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <img src={banner} alt="internacional"/>
                    </div>
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria/>
            </div>
            <footer>
                <Rodape/>
            </footer>
        </>
    )
}