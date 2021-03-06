import FilaSrc from '../images/fila.jpg';
import AvoSaladSrc from '../images/avo-salad.jpg';
import BorschSrc from '../images/borsch.jpg';
import JulienSrc from '../images/julien.jpg';

export const RECIPES = [
    {
        name: 'Борщ',
        src: BorschSrc,
        ingredients: [
            {
                name: 'лук',
                quantity: '2',
            },
            {
                name: 'морковь',
                quantity: '2',
            },
        ]
    },
    {
        name: 'Филадельфия с лососем',
        src: FilaSrc,
        ingredients: [
            {
                name: 'Рис для суши',
                quantity: '1 большая горсть',
            },
            {
                name: 'Лососёвая рыба с/с',
                quantity: '100 г',
            },
            {
                name: 'Нори',
                quantity: '1/2 листа',
            },
            {
                name: 'Сливочный сыр',
                quantity: '80-100 г',
            },
        ]
    },
    {
        name: 'Салат из авокадо',
        src: AvoSaladSrc,
        ingredients: [
            {
                name: 'авокадо',
                quantity: '1 шт.',
            },
            {
                name: 'помидоры чери',
                quantity: '3 шт.',
            },
            {
                name: 'руккола',
                quantity: '100 гр.',
            },
        ]
    },
    {
        name: 'Жульен с курицей и грибами',
        src: JulienSrc,
        ingredients: [
            {
                name: 'Курица (филе)',
                quantity: '300г',
            },
            {
                name: 'шампиньоны',
                quantity: '700г',
            },
            {
                name: 'репчатый лук',
                quantity: '1 шт.',
            },
            {
                name: 'сыр (твердый)',
                quantity: '200г',
            },
            {
                name: 'сливки (20%)',
                quantity: '350г'
            },
            {
                name: 'мука',
                quantity: '2 ст.л.',
            },
            {
                name: 'сливочное масло',
                quantity: '4-5 ст.л.',
            },
        ]
    },
];