import { useState } from 'react';
import './App.css';

function App() {

    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')

    const operator = ['/', '*', '+', '-', '.']

    const updateCalc = (value) => {
       if(
          operator.includes(value) && calc === '' ||
          operator.includes(value) && operator.includes(calc.slice(-1))
       ) { 
          return;
        }
          setCalc(calc + value)
            if(!operator.includes(value)) {
              setResult(eval((calc + value).toString()))
            }

        }

      const calculate = () => {
        setCalc(eval(calc).toString())
      }

      const deleteLast = () => {
        if(calc == '') {
            return
        }
          const value = calc.slice(0, -1)
            setCalc(value)
          }

      const createDigits = () => {
        const digits = []
          for(let i = 1; i < 10; i++) {
            digits.push(
              <button 
              onClick={() => updateCalc(i.toString())}
              key={i}
              >
                {i}
                </button>
              )
          }
        return digits
      }


  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <div className='display'>
            {result ? <span>{ result }</span> : ''} <br />
            { calc || '0'}
          </div>
          <div className='operators'>
            <button onClick={() => updateCalc('/')} >/</button>
            <button onClick={() => updateCalc('*')} >*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={deleteLast} >DEL</button>
          </div>
          <div className='digits'>
              { createDigits() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
