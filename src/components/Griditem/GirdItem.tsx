import { Level } from "../../helpers/imc";
import styles from '../Griditem/GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Pros = {
    item: Level
}
export const GridItem = ({item}: Pros) => {
    return(
        <div className={styles.main} style={{background: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30"/>}
                {item.icon === 'down' && <img src={downImage} alt="" width="30"/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yuorImc}> Seu Imc é de {item.yourImc} Kg/M²</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}