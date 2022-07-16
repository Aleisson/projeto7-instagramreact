
function Stories() {

    const stories = [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ]


    return (
        <div class="stories">
            {stories.map(story =>
                <div class="story">
                    <div class="imagem">
                        <img src={"assets/img/"+story+".svg"} />
                    </div>
                    <div class="usuario">
                        {story}
                    </div>
                </div>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );


}

export default Stories;