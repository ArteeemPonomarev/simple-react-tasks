import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter('all')
    // };
    // const setHigh = () => {
    //     props.setFilter('high')
    // };
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // };
    // const setLow = () => {
    //     props.setFilter('low')
    // };

    const setFilterValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    return (
        <div>

            {mappedAffairs}

            {/*<button className={styles.filter_btn} onClick={setAll} value={'all'}>All</button>*/}
            {/*<button className={styles.filter_btn} onClick={setHigh} value={'high'}>High</button>*/}
            {/*<button className={styles.filter_btn} onClick={setMiddle} value={'middle'}>Middle</button>*/}
            {/*<button className={styles.filter_btn} onClick={setLow} value={'low'}>Low</button>*/}

            <button className={styles.filter_btn} onClick={setFilterValue} value={'all'}>All</button>
            <button className={styles.filter_btn} onClick={setFilterValue} value={'high'}>High</button>
            <button className={styles.filter_btn} onClick={setFilterValue} value={'middle'}>Middle</button>
            <button className={styles.filter_btn} onClick={setFilterValue} value={'low'}>Low</button>

        </div>
    )
}

export default Affairs
