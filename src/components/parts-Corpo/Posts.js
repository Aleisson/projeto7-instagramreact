import Post from "./Post";
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



    return (
        <div class="posts">

            {posts.map(post =>
                <Post 
                src={"assets/img/" + post.usuario + ".svg"} 
                img={"assets/img/" + post.img + ".svg"}
                curtiu = {post.curtiu}
                img_curtiu={"assets/img/" + post.curtiu + ".svg"}
                curtidas = {post.curtidas}

                />
            )}

        </div>
    );

}

export default Posts;