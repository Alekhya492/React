import React,{Fragment} from "react";
import '../ItemsList.css';
import {Checkbox} from 'react-bootstrap';

const FilterComponent =()=>{
    return(
        <Fragment>
            <Checkbox>Items</Checkbox>
            <label>
                <input type="checkbox"/>Value
            </label>
        </Fragment>
    )
}

export default FilterComponent;