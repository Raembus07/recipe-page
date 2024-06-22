import omeletteImg from './assets/image-omelette.png';
import milchreisImg from './assets/milchreisImg.jpg';
import steakImg from './assets/steakimg.png';
import curryriceImg from './assets/curryreis-adobe-stock-ld1976.png';

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
            img={omeletteImg}
            imgDescription={omelette.imgDescription}
            title={omelette.title}
            text={omelette.text}
          />
        </div>
        <div className='card'>
          <Card
            img={milchreisImg}
            imgDescription={milchreis.imgDescription}
            title={milchreis.title}
            text={milchreis.text}
          />
        </div>
        <div className='card'>
          <Card
            img={steakImg}
            imgDescription={steak.imgDescription}
            title={steak.title}
            text={steak.text}
          />
        </div>
        <div className='card'>
          <Card 
            img={curryriceImg}
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