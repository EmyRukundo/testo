import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className='title'>
            <span>SiteDev</span> Mag
            </h1>
            <style jsx>
                {
                    `
                    .title{
                        color: red;
                    }
                    `
                }
            </style>
        </div>
    )
}