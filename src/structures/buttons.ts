import {EButton, IButton} from "../types";

const buttonsData = [
    ['А', '#d73232'],
    ['Б', '#45ae45'],
    ['В', '#df7e36'],
    ['Г', '#173472'],
    ['Д', '#641990'],
    ['Е', '#d067c8'],
    ['Ё', '#4890e4'],
    ['Ж', '#e36bdb'],
    ['З', '#fbd31e'],
    ['ИЙ', 'green'],
    ['К', '#4890e4'],
    ['Л', '#3dbdc0'],
    ['М', '#173472'],
    ['Н', '#45ae45'],
    ['О', '#d73232'],
    ['П', '#45ae45'],
    ['Р', '#d73232'],
    ['С', '#173472'],
    ['Т', 'green'],
    ['У', '#d067c8'],
    ['Ф', '#4890e4'],
    ['Х', '#d73232'],
    ['Ц', '#641990'],
    ['Ч', '#d067c8'],
    ['Ш', '#fbd31e'],
    ['Щ', 'green'],
    ['ЪЫЬ', '#641990'],
    ['Э', '#3dbdc0'],
    ['Ю', '#df7e36'],
    ['Я', '#45ae45'],
]

export const buttons: IButton[] = buttonsData.map<IButton>((b, i) => ({
    id: String(i + 1),
    type: EButton.Letter,
    title: b[0],
    bgColor: b[1],
    audio: '/audio/buttons/letters/' + String(i + 1) + '.mp3',
}))