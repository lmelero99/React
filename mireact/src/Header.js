import Nav from "./Nav"

function Header ({ titulo , links }) {
    return (
        <header>

            <Nav links={links} />  
        </header>
    )
}

export default Header