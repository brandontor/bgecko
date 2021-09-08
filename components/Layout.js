import styles from '../styles/Layout.module.css'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <div>
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
