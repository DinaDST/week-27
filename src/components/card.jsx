import React from "react";
import styles from "./card.css";

export default function Card(props) {
    const classCard = (props.isSelected ? "selected" : '');
return(
        <div className={styles.cardBody}>
            <div className={styles.cardBody}></div>
            <div className= {`${props.var.cardName}`}>
            <span className={styles.cardLimit}>Безлимитный </span>
            <span className={styles.cardTittle}> {props.price}</span>
            </div>
            <div className={`${props.var.cardPrice}`}>
                <span className={styles.cardNumber}>{props.price} </span>
                <span className={styles.cardCost}> руб/мес</span>
            </div>
            <div className={styles.cardSpeed}>До {props.speed} Мбит/cек</div>
            <div className={styles.cardInfo}>Объем включенного трафика не ограничен</div>
        </div>
)
}