import Searchbar from "../SearchBar/SearchBar";
import recipesData from '../../DataJson/recipesData.json';



function Recipes() {
    return (
       
        <div>
            <Searchbar
                placeholder="Enter recipe name..."
                data={recipesData}
            />
        </div>
       
    )
}

export default Recipes;
