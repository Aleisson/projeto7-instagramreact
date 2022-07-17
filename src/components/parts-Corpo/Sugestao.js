


function Sugestao(props){

    return(
        <div class="sugestao">
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    );

}

export default Sugestao;