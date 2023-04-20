import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    addBtnClick: (value: string) => void
}

const Input: React.FC<InputPropsType> = (props) => {
    const [value, setValue] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const onClickHandler = () => {
        props.addBtnClick(value);
        setValue('');
    }

    return (
        <div>
            <input
                onChange={onChangeHandler}
                value={value}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default Input;