import React from 'react';
import s from './index.module.scss';
import {ILetter} from "../../types";
import cx from 'classnames';

interface IButtonProps {
    letter: ILetter;
    onClick?: (args: any) => any;
}

const Button = ({letter, onClick}: IButtonProps) => {
    return <div className={s.button} onClick={onClick}>
        <div className={s.background} style={{background: letter.bgColor}} />
        <div className={s.letter}>
            {letter.char.split('').map(ch => (<div className={cx(s.char)}>{ch}</div>))}
        </div>
    </div>
}

export default Button;