import React from "react";

function Posts() {

    const posts = [
        {
            usuario: "meowed",
            img: "gato-telefone",
            curtiu: "respondeai",
            curtidas: "outras 101.523 pessoas"
        },
        {
            usuario: "barked",
            img: "dog",
            curtiu: "adorable_animals",
            curtidas: "outras 99.159 pessoas"
        }
    ]

    const [tipoHeart, setTipo] = React.useState("heart-outline");


    return (
        <div class="posts">

            {posts.map(post =>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={"assets/img/" + post.usuario + ".svg"} />
                            meowed
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div onClick={() => {
                        if (tipoHeart === "heart-outline") {
                            setTipo("heart");
                        } else {
                            setTipo("heart-outline")
                        }
                    }} class="conteudo">
                        <img src={"assets/img/" + post.img + ".svg"} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon onClick={() => {
                                    if (tipoHeart === "heart-outline") {
                                        setTipo("heart");
                                    } else {
                                        setTipo("heart-outline")
                                    }
                                }} name={tipoHeart}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={"assets/img/" + post.curtiu + ".svg"} />
                            <div class="texto">
                                Curtido por <strong>{post.curtiu}</strong> e <strong>{post.curtidas}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

}

export default Posts;