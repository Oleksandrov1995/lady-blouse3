export const productsTypeData = [
  {
    id: 'styledMini',
    imageSrc: require('../Images/products/styledMini/black-min.jpg'),
    type: 'Стильний Міні',
    price: 1838,
    todayPrice: 1286,
    discount: 30,
    aboutTitle:'Вкорочений пуффер з резинкою знизу для регулювання довжини, ширини та фіксації на талії для комфорту і стилю',
    aboutText: (
      <div>
        <p>Наповнювач: аеропух</p>
        <p>Матеріал: матова плащівка Gloria стійка до вологи, бруду та затирання</p>
        <p>Підкладка: гладенька та міцна саржа</p>
        <p>Висока горловина стійка яка відповідає трендам, захищає від холоду та додає комфорту</p>
        <p>М'які та трішки подовжені манжети</p>
      </div>
    ),
    
    colors: [
      '#030911',
      '#ea0070',
      '#d6bab9',
      '#89f5ff',
      '#dfc7f9',
      '#3e9898',
      '#eaeef9',
      '#edc003',
    ],
    colorsImg: [
      {
        id: 'smBezevy',
        img: require('../Images/products/styledMini/bezevy-min.jpg'),
        colorName: 'Бежевий',
      },
      {
        id: 'smBiryzovy',
        img: require('../Images/products/styledMini/biryzovy-min.jpg'),
        colorName: 'Бірюзовий',
      },
      {
        id: 'smBlack',
        img: require('../Images/products/styledMini/black-min.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'smFiolet',
        img: require('../Images/products/styledMini/fiolet-min.jpg'),
        colorName: 'Фіолетовий',
      },
      {
        id: 'smGreen',
        img: require('../Images/products/styledMini/green-min.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'smPink',
        img: require('../Images/products/styledMini/pink-min.jpg'),
        colorName: 'Рожевий',
      },
      {
        id: 'smWhite',
        img: require('../Images/products/styledMini/white-min.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'smYellow',
        img: require('../Images/products/styledMini/yellow-min.jpg'),
        colorName: 'Жовтий',
      },
    ],
    sizes:["42-46/55","48-52/57"]
  },
  {
    id: 'practicalMidi',
    imageSrc: require('../Images/products/practicalMidi/fiolet.jpg'),
    type: 'Практичний Міді',
    price: 1980,
    todayPrice: 1386,
    discount: 30,
    aboutTitle:'Демісезонний пуффер середньої довжини з двома кишенями на застібках, подовженими трикотажними манжетами та високою горловиною стійка',
    aboutText: `Наповнювач: аеропух 
    Матеріал: матова плащівка Gloria стійка до бруду, вологи та затирання
    Підкладка: міцна та гладенька саржа 
    Висока горловина стійка відповідає трендам, захищає від холоду та додає комфорту
    М'які та трішки подовжені манжети`,
    colors: ['#a78ef3', '#f6e3e9', '#9bf8ff', '#1b1517', '#58b4a9', '#dfe7fe'],
    colorsImg: [
      {
        id: 'pmBezevy',
        img: require('../Images/products/practicalMidi/bezevy.jpg'),
        colorName: 'Бежевий',
      },
      {
        id: 'pmBiryzovy',
        img: require('../Images/products/practicalMidi/biryzovy.jpg'),
        colorName: 'Бірюзовий',
      },
      {
        id: 'pmBlack',
        img: require('../Images/products/practicalMidi/black.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'pmFiolet',
        img: require('../Images/products/practicalMidi/fiolet.jpg'),
        colorName: 'Фіолетовий',
      },
      {
        id: 'pmGreen',
        img: require('../Images/products/practicalMidi/green.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'pmWhite',
        img: require('../Images/products/practicalMidi/white.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes:["42-46/73","48-50/74"]
  },
  {
    id: 'warmMaxi',
    imageSrc: require('../Images/products/warmMaxi/pink.jpeg'),
    type: 'Теплий Максі',
    price: 3989,
    todayPrice: 2792,
    discount: 30,
    aboutTitle:'Стильний, якісний та комфортний великий пуффер в двох варіантах довжини',
    aboutText: `120 см та 100 см (обирайте довжину при виборі розміру)

    - Наповнювач: набивний аеропух
    - Плащівка матова та стійка до бруду і вологи 
    - Підкладка міцна та гладенька саржа
    - Великий відстібний капюшон що заховає від неочікуваного дощу мінливої погоди🥰
    - М'які та теплі манжети завдяки яким можна регулювати довжину рукава`,
    colors: [
      '#ee2164',
      '#c1ae9f',
      '#5accd7',
      '#03030f',
      '#baa3f1',
      '#104e59',
      '#a2cb2d',
      '#c2d1ce',
      '#faf9ff',
      '#fcf823',
    ],
    colorsImg: [
      {
        id: 'wmBezevy',
        img: require('../Images/products/warmMaxi/bezevy.jpeg'),
        colorName: 'Бежевий',
      },
      {
        id: 'wmBiryzovy',
        img: require('../Images/products/warmMaxi/biryzovy.jpeg'),
        colorName: 'Бірюзовий',
      },
      {
        id: 'wmBlack',
        img: require('../Images/products/warmMaxi/black.jpeg'),
        colorName: 'Чорний',
      },
      {
        id: 'wmFiolet',
        img: require('../Images/products/warmMaxi/fiolet.jpeg'),
        colorName: 'Фіолетовий',
      },
      {
        id: 'wmGreen',
        img: require('../Images/products/warmMaxi/green.jpeg'),
        colorName: 'Зелений',
      },
      {
        id: 'wmLaym',
        img: require('../Images/products/warmMaxi/laym.jpeg'),
        colorName: 'Лаймовий',
      },
      {
        id: 'wmMint',
        img: require('../Images/products/warmMaxi/mint.jpeg'),
        colorName: 'М`ятний',
      },
      {
        id: 'wmPink',
        img: require('../Images/products/warmMaxi/pink.jpeg'),
        colorName: 'Рожевий',
      },
      {
        id: 'wmWhite',
        img: require('../Images/products/warmMaxi/white.jpeg'),
        colorName: 'Білий',
      },
      {
        id: 'wmYellow',
        img: require('../Images/products/warmMaxi/yellow.jpeg'),
        colorName: 'Жовтий',
      },
    ],
    sizes:["42-46/100","42-46/120","48-50/100","48-50/120","52-54/100","52-54/120"]
  },
];
