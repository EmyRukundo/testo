import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
            <span>SiteDev</span> Mag
            </h1>
            <p className={headerStyles.description}>The World Technology WOrld wide</p>
        </div>
    )
}