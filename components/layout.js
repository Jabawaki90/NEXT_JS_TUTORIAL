import style from './layout.module.css'

const Layout = ({children})=>{
    return <div className={style.container}>{children}</div>
}

export default Layout;