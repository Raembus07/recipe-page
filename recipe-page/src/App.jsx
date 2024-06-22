import Recipe from './Recipe';
import omelette from './const/Omelette';
import milchreis from './const/Milchreis';
import steak from './const/Steak';
import curryrice from './const/Curryrice';
import Card from './card/Card';
import './index.css'

function App() {
  return (
    <>
      <div className='appElements'>
        <div className='card'>
          <Card
            img={omelette.img}
            imgDescription={omelette.imgDescription}
            title={omelette.title}
            text={omelette.text}
          />
        </div>
        <div className='card'>
          <Card
            img={milchreis.img}
            imgDescription={milchreis.imgDescription}
            title={milchreis.title}
            text={milchreis.text}
          />
        </div>
        <div className='card'>
          <Card
            img={steak.img}
            imgDescription={steak.imgDescription}
            title={steak.title}
            text={steak.text}
          />
        </div>
        <div className='card'>
          <Card 
            img={curryrice.img}
            imgDescription={curryrice.imgDescription}
            title={curryrice.title}
            text={curryrice.text}
          />
        </div>
      </div>
    </>
  );
}

export default App;