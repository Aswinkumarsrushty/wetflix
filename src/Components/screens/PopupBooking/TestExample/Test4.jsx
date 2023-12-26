import React from 'react';

const Test4 = ()=>{

    const steps = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six'
    ]

    return(
        <div>
            {steps.map((label,index)=>(
                <div>
                    {label}
                </div>
            ))}
        </div>
    )
}

export default Test4