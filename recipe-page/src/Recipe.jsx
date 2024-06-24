import Title from "./recipeComponents/Title";
import PrepTime from "./recipeComponents/PrepTime";
import Ingredients from "./recipeComponents/Ingredients";
import Instructions from './recipeComponents/Instructions';
import Nutrition from './recipeComponents/Nutrition';
import './index.css';

function Recipe(props) {
    return (
        <>
            <Title 
                img={props.img}
                imgDescription={props.imgDescription}
                title={props.title}
                text={props.text}
            />
            <PrepTime
                total={props.total}
                preparation={props.preparation}
                cooking={props.cooking}
            />
            <Ingredients
                ingredients={props.ingredients}
            />
            <div className="spaceLine"></div>
            <Instructions
                instructions={props.instructions}
            />
            <div className="spaceLine"></div>
            <Nutrition
                nutrition={props.nutrition}
            />
        </>
    );
}

export default Recipe;