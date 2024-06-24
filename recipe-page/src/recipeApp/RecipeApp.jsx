import Recipe from '../Recipe';
import './recipeApp.css';

function RecipeApp(props) {
  return (
    <>
      <div className='recipes'>
        <Recipe
          img={props.img}
          imgDescription={props.imageDescription}
          title={props.title}
          text={props.text}
          total={props.prepTime[0]}
          preparation={props.prepTime[1]}
          cooking={props.prepTime[1]}
          ingredients={props.ingredients}
          instructions={props.instructions}
          nutrition={props.nutrition}
        />
      </div>
    </>
  );
}
RecipeApp.defaultProps = {
  img: '',
  imgDescription: 'defaultimg',
  title: 'defaulttitle',
  text: 'defaulttext',
  prepTime: ["default"],
  ingredients: ["default"],
  instructions: ["default"],
  nutrition: ["default"]
}

export default RecipeApp;