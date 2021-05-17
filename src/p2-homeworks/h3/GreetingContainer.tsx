import React, {useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string)  => void
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        error &&  setError(null);
        const value = e.currentTarget.value;
        setName(e.currentTarget.value);
        value || setError('Title is required')
    };
    const addUser = () => {
        let trimmedName = name.trim();
        if (trimmedName) {
            addUserCallback(trimmedName);
            name && setName('');
            alert(`Hello ${trimmedName}!`);
        } else {
            setError('Title is required!');
        }
    };

    const onKeyPreesHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPreesHandler}
        />
    )
}

export default GreetingContainer;
