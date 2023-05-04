import { useState } from 'react';
import Display from "../../components/Display/Display"
import Output from "../../components/Output/Output"
import style from './style.module.scss';

function CalculatorPage() {
    const [expression, setExpression] = useState('')

    return (
        <div className={style['wrapper']}>
            <Display setExpression={setExpression}/>
            <Output expression={expression}/>
        </div>
    )
}

export default CalculatorPage
