import React,{useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [inputValue,setInputValue]=useState('');
    const handleInputChange=(value)=>{
        setInputValue(value);
    }
    
    return (
        <div className='parent'>
         <p>inputValue:{inputValue}</p>
         <Child inputValue={inputValue} onInputChange={handleInputChange} />
        </div>
    );
}

export default Parent;
