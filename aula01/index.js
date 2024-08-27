/*
var root = document.getElementById('root');
// function Titulo() {
//     return (
//         <h1>Hello World!</h1>
//     );
// }
// function Titulo() {
//     return (
//         <React.Fragment>
//             <h1>HELLO WORLD!</h1>
//             <h1>OLÁ MUNDO!</h1>
//         </React.Fragment>
//     )
// }



// function Titulos() {
//     return (
//         <div>
//             <Titulo />
//             <Titulo />
//             <Titulo />
//         </div>
//     );
// }

function Titulo(props) {
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{props.descricao}</h2>
        </React.Fragment>
    );
}
function Titulos() {
    return (
        <>
            <Titulo titulo="Hellouw" descricao="lorem" />
            <Titulo titulo="HElloWW" descricao="YES" />
            <Titulo titulo="OLAR" descricao="sepasim" />
        </>
    );
}


// ReactDOM.render(<Titulo />, container); Versão antig
//ReactDOM.createRoot(root).render(<Titulos />);
*/

var container = document.getElementById("root");
function Participante(props) {
    const [numero, setNumero] = React.useState(0);
    function votar() {
        setNumero(numero + 1);
    }
    return (
        <>
            <div>
                <h2>{props.nome}</h2>
                <h3>{numero}</h3>
                <button onClick={votar}>Votar</button>
            </div>
        </>
    );
}
function Votacao() {
    return (
        <>
            <h1>Participantes</h1>
            <Participante nome="Blue Pen" />
            <Participante nome="Blue Red" />
            <Participante nome="Blue Orange" />
        </>)
}
ReactDOM.createRoot(container).render(<Votacao />);