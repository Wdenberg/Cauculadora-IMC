

import { useState } from 'react';
import styles from './App.module.css';
import powerdImage from './assets/powered.png'
import { GridItem } from './components/Griditem';
import leftArrowImag from './assets/leftarrow.png';
import { Levels, calculateImc, Level } from './helpers/imc';


const App = () => {
  const [heightFild, setHeightfild] = useState<number>(0);
  const [weightFilde, setWeightFilde] = useState<number>(0);
  const [toShow, setToShow] = useState <Level | null>(null);

  const handleCalculateButton= () =>{
    if(heightFild && weightFilde){
      setToShow(calculateImc(heightFild, weightFilde));
    }else{
      alert("Digite Todos os Campos!");
    }
  }

  const hendalBackButtun = () =>{ 
    setToShow(null);
    setHeightfild(0);
    setWeightFilde(0);
  }
   

 return(
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={powerdImage} alt="" width={150}/>
      </div>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro<br/> adotado pela Organização Mundial de Saúde<br/> para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number"
            placeholder='Digite  a sua Altura. Ex: 1.5 (em métros)'
            value={heightFild > 0 ? heightFild : ''}
            onChange={e => setHeightfild(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
             <input 
            type="number"
            placeholder='Digite o seu peso. Ex: 70Kg'
            value={weightFilde > 0 ? weightFilde : ''}
            onChange={e => setWeightFilde(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {! toShow &&
            <div className={styles.grid}>
            {Levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
       
          </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={hendalBackButtun}>

                <img src={leftArrowImag } alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            
            </div>

          }
            

        </div>
      </div>
      
    </header>
  </div>
 );
}

export default App;