import donut1 from '../assets/donut_1.png'
import donut2 from '../assets/donut_2.png'
import donut3 from '../assets/donut_3.png'
import donut4 from '../assets/donut_4.png'
import donut5 from '../assets/donut_5.png'
import donut6 from '../assets/donut_6.png'
import donut7 from '../assets/donut_7.png'
import donut8 from '../assets/donut_8.png'
import donut9 from '../assets/donut_9.png'
import donut10 from '../assets/donut_10.png'
import donut11 from '../assets/donut_11.png'
import donut12 from '../assets/donut_12.png'


/**
 * Donut data structure
 * @typedef {Object} Donut
 * @property {string} imageUrl - URL of the donut image
 * @property {string} nameJp - Japanese name of the donut
 * @property {string} nameEn - English name of the donut
 * @property {number} price - Price in yen
 */

/** @type {Donut[]} */
export const donuts = [
  {
    imageUrl: donut1,
    nameJp: 'シュガーグレイズド',
    nameEn: 'SUGAR GLAZED',
    price: 180,
  },
  {
    imageUrl: donut2,
    nameJp: 'カラメリゼナッツ',
    nameEn: 'CARAMEL NUTS',
    price: 280,
  },
  {
    imageUrl: donut3,
    nameJp: 'チェリーデニッシュ',
    nameEn: 'CHERRY DANISH',
    price: 260,
  },
  {
    imageUrl: donut4,
    nameJp: 'マーブル',
    nameEn: 'MARBLE',
    price: 280,
  },
  {
    imageUrl: donut5,
    nameJp: 'アーモンドプードル',
    nameEn: 'ALMOND POWDER',
    price: 280, 
  },
  {
    imageUrl: donut6,
    nameJp: 'チョコクリーム',
    nameEn: 'CHOCOLATE CREAM',
    price: 280,
  },
  {
    imageUrl: donut7,
    nameJp: 'シナモンシュガー',
    nameEn: 'CINNAMON SUGAR',
    price: 280,
  },  
  {
    imageUrl: donut8,
    nameJp: 'モカ',
    nameEn: 'MOCHA',
    price: 280,
  },
  {
    imageUrl: donut9,
    nameJp: 'ホイップクリーム',
    nameEn: 'WHIPPED CREAM',
    price: 280,
  },  
  {
    imageUrl: donut10,
    nameJp: 'パウダーシュガー',
    nameEn: 'POWDER SUGAR',
    price: 280,
  },
  {
    imageUrl: donut11,
    nameJp: 'クリームチーズラズベリー',
    nameEn: 'CREAM CHEESE RASPBERRY',
    price: 280,
  },  
  {
    imageUrl: donut12,
    nameJp: 'ホワイトチョコ',
    nameEn: 'WHITE CHOCOLATE',
    price: 280,
  },  
] 