import React from 'react';
import s from './index.module.scss';
import {IButton} from "../../types";
import cx from 'classnames';

interface IButtonProps {
    letter: IButton;
    onClick?: (args?: any) => any;
}

const Button = ({letter, onClick}: IButtonProps) => {
    const handleClick = () => {
        const audio = document.createElement('audio');
        audio.src = letter.audio!;
        audio.play().then(() => audio.remove());

        onClick && onClick();
    };

    return <div className={s.button} onClick={handleClick}>
        <div className={s.background} style={{background: letter.bgColor}}/>
        <div className={s.letter}>
            {letter.title.split('').map((ch, i) => (<div key={i} className={cx(s.char)}>{ch}</div>))}
        </div>
    </div>
}

export default Button;