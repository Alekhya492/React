import React from 'react';
const baseWrapper =({WrappedComponent,className})=>{
    return props=>{
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    }
}

export default baseWrapper;