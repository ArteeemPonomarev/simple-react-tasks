import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    const classForPriority = styles.priority + ' ' + styles[props.affair.priority];

    return (
        <div>
            <div className={styles.name}>{props.affair.name}</div>
            <div className={classForPriority}>{props.affair.priority}</div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair;
