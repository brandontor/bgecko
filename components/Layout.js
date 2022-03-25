import Sidebar from './Sidebar'
import style from '../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Sidebar/>
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
