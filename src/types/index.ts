import React from "react";

export enum EButton {
    Letter = 'letter',
    Tail = 'tail',
    MusicTail = 'musicTail',
}

export interface IButton {
    id: string;
    type: EButton;
    title: string;
    bgColor: string;
    icon?: React.ReactNode;
    audio?: string;
}