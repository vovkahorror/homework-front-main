import {ChangeEvent, Dispatch, SetStateAction} from 'react';

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: Dispatch<SetStateAction<string>> // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
