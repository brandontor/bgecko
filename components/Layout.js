import Sidebar from './Sidebar'
import style from '../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Sidebar/>
            <main className={style.main}>
                <header className={style.header}>
                    <h1>aBecko<i className="fab fa-bitcoin"></i></h1>
                </header>
                {children}
            </main>
        </div>
    )
}

export default Layout
