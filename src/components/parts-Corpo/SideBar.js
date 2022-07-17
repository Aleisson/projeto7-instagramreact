import Sugestao from "./Sugestao";
function SideBar(props) {

    const sugestoes = [
        {nome: "bad.vibes.memes", razao: "Segue você" },
        {nome: "chibirdart", razao: "Segue você" },
        {nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        {nome: "adorable_animals", razao: "Segue você" },
        {nome: "smallcutecats", razao: "Segue você" },
    ]


    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={props.src}/>
                <div class="texto">
                    <strong>{props.page}</strong>
                    {props.usuario}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
               {sugestoes.map(sugestao => 
                    <Sugestao src={"assets/img/"+sugestao.nome+".svg"} nome={props.nome} razao={sugestao.razao}/>
               )}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

export default SideBar;