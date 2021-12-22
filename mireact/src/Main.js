import Contenido from "./Contenido"

const Main = ({titulo}) => {
    return (
        <main>
            <header>
                <h2>{titulo}</h2>
            </header>
            <Contenido/>
        </main>
    )
}

export default Main