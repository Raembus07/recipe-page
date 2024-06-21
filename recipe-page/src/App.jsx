import omeletteImg from './assets/image-omelette.jpeg';
import milchreisImg from './assets/1600x900_vanille-milchreis.jpg';
import Recipe from './Recipe';
import omelette from './const/Omelette';
import milchreis from './const/Milchreis';
import './index.css'

function App() {
  return (
    <>
      <div className='recipes'>
        <Recipe
          img={omeletteImg}
          imgDescription={omelette.imageDescription}
          title={omelette.title}
          text={omelette.text}
          total={omelette.preptTime[0]}
          preparation={omelette.preptTime[1]}
          cooking={omelette.preptTime[1]}
          ingredients={omelette.ingredients}
          instructions={omelette.instructions}
          nutrition={omelette.nutrition}
        />
      </div>

      <div className='spaceNewRecipe'></div>
      <div className='recipes'>
        <Recipe
          img={milchreisImg}
          imgDescription={milchreis.imageDescription}
          title={milchreis.title}
          text={milchreis.text}
          total={milchreis.preptTime[0]}
          preparation={milchreis.preptTime[1]}
          cooking={milchreis.preptTime[1]}
          ingredients={milchreis.ingredients}
          instructions={milchreis.instructions}
          nutrition={milchreis.nutrition} />
      </div >
    </>
  );
}

export default App;
