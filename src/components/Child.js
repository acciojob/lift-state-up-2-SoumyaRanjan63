import React from 'react';

const Child = ({inputValue,onInputChange}) => {
    

    const handleInput=(e)=>{
        const value=e.target.value
        onInputChange(value);
    }
    return (
        <div className='chlid'>
        <h1>Child component</h1>
            <input type='text' value={inputValue} onChange={handleInput} />
        </div>
    );
}

export default Child;
