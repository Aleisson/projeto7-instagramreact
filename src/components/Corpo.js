import Posts from "./parts-Corpo/Posts";
import SideBar from "./parts-Corpo/SideBar"
import Stories from "./parts-Corpo/Stories";


function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories  />
                <Posts />
            </div>

            <SideBar src="assets/img/catanacomics.svg"  page="catanacomics" usuario="Catana"/>   
        </div>
    );
}

export default Corpo;