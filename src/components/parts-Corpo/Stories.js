import Story from "./Story";


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
                <Story src={"assets/img/" + story + ".svg" } user={story}/>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );


}

export default Stories;