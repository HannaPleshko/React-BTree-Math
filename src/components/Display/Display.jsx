import { useState } from 'react';
import { Input, Button } from '@mantine/core';
import style from './style.module.scss';

function Display({ setExpression }) {
    const [input, setInput] = useState('')

    const checkExpression = () => /[^0-9+\-\*\/ \s]+/gm.test(input)

    return (
        <>
            <p>Input is allowed for the following characters: 0-9, +, -, *, /</p>
            <div className={style['display']}>
                <Input className={style['input']} onChange={(e) => setInput(e.target.value)} placeholder="Your expression" />
                <Button onClick={() => !checkExpression() ? setExpression(input) : null} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Ccalculate ( = )</Button>
            </div>
            {checkExpression() ? <p className={style['error-message']}>invalid character</p> : null}
        </>
    );
}

export default Display