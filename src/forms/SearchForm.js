import React, {useRef} from "react";

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
        <form onSubmit={searchFunc}>
            <input  type='text'
                    name={inputName}
                    placeholder={`Search ${formInput1}`}
                    onChange={changeFunc}
                    />
            <label> Minimum {formInput2}
                <input  type='number'
                        name={'min'+ formInput2}
                        min='1'
                        onChange={changeFunc}
                    />
            </label>
        {inputName === 'name' &&
            <label> Maximum {formInput2}
                <input  type='number'
                        name={'max'+ formInput2}
                        min='1'
                        onChange={changeFunc}
                    />
            </label>
        }
            <button> Search </button>
        </form>
    )
}

export default SearchForm;
