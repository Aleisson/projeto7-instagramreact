import React from "react";
function Post(props){
    
    const [tipoHeart, setTipo] = React.useState("heart-outline");
    
    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.src} />
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
            <img src={props.img} />
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
                <img src={props.img_curtiu} />
                <div class="texto">
                    Curtido por <strong>{props.curtiu}</strong> e <strong>{props.curtidas}</strong>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Post;