import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressHandler}
) => {
    const inputClass = error ? s.errorInput : s.input;


    return (
        <div className={s.greeting}>
            <div>
                <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
                onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>

            <button className={s.button} onClick={addUser} disabled={!!error}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting;
