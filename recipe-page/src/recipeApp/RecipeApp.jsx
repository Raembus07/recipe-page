import Recipe from '../Recipe';
import './RecipeApp.css';

function RecipeApp(props) {
  return (
    <>
      <div className='recipes'>
        <Recipe
          img={props.img}
          imgDescription={props.imageDescription}
          title={props.title}
          text={props.text}
          total={props.preptTime[0]}
          preparation={props.preptTime[1]}
          cooking={props.preptTime[1]}
          ingredients={props.ingredients}
          instructions={props.instructions}
          nutrition={props.nutrition}
        />
      </div>
    </>
  );
}

export default RecipeApp;