import React, { useRef } from "react";
import "./SearchForm.css";

function SearchForm({inputName, changeFunc, searchFunc} ){
    let formInput1 = useRef();
    let formInput2 = useRef();
    if(inputName === "title") {
        formInput1 = 'jobs';
        formInput2 = 'Salary';
    }
    else if (inputName === 'name') {
        formInput1 = 'companies';
        formInput2 = 'Employees'
    }

    return (
        <div className="Searchform-container">
            <form onSubmit={searchFunc}>
                <button style={{display:"none"}}> Search </button>
                    <input  type='text'
                            name={inputName}
                            placeholder={`Search ${formInput1}`}
                            onChange={changeFunc}
                            className='Searchbar primary-bar' />
                <label> Min {formInput2}
                    <input  type='number'
                            name={'min'+ formInput2}
                            min='1'
                            onChange={changeFunc}
                            className='Searchbar secondary-bar' />
                </label>
            {inputName === 'name' &&
                <label> Max {formInput2}
                    <input  type='number'
                            name={'max'+ formInput2}
                            min='1'
                            onChange={changeFunc}
                            className='Searchbar secondary-bar'/>
                </label>}
            </form>
        </div>
    )
}

export default SearchForm;
