const ropa = [
    { titulo: "camisa", disponibleConsola: true, id: 1},
    { titulo: "pantalón", disponibleConsola: false, id: 2},
    { titulo: "zapatos", disponibleConsola: false, id: 3},
]

export default function ListaCompra() {
    const listaObjetos = ropa.map(ropas =>
    <li
        key={ropas.id}
        style={{
            color: ropas.disponibleConsola ? "Red" : "Blue"
        }}    
        >
            {ropas.titulo}
        </li>
        );

        return (
            <ul>{listaObjetos}</ul>
        )
}