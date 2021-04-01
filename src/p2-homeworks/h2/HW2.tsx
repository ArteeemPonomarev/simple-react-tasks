import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    switch (filter) {
        case 'low':
            return affairs.filter(affair => affair.priority === 'low');
        case 'middle':
            return affairs.filter(affair => affair.priority === 'middle');
        case 'high':
            return affairs.filter(affair => affair.priority === 'high');
        default:
            return affairs
    }
}
export const deleteAffair = (affairs: Array<AffairType> , _id: number): Array<AffairType> => {
    return affairs.filter(affair => affair._id !== _id );
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) ;
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id));

    return (
        <div>

            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>

            <hr/>
        </div>
    )
}

export default HW2
