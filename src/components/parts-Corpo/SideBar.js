
function SideBar() {

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
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
               {sugestoes.map(sugestao => 
                    <div class="sugestao">
                    <div class="usuario">
                        <img src={"assets/img/"+sugestao.nome+".svg"} />
                        <div class="texto">
                            <div class="nome">{sugestao.nome}</div>
                            <div class="razao">{sugestao.razao}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
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