export type TPromotion = {
  id: string,
  type: string,
  icon: string,
  name: string,
  symbol: string,
  start: Date,
  finish: Date,
  link_usage: number,
  status: string,
}

export type TMyCoin= {
  id: string,
  name: string,
  symbol: string,
  likes: number,
  promotion: string,
  start: Date,
  finish: Date,
  icon: string,
  views_all: number,
  views_7d: number,
}

export type TAlert = {
  id: string,
  title: string,
  text: string,
  data: string,
}

export const getPromotionsData = (): TPromotion[] => ([
  {
    id: '1',
    type: 'Promotion',
    icon: 'Promotion',
    name: 'Drop',
    symbol: 'DROP',
    start: new Date(),
    finish: new Date(),
    link_usage: 198,
    status: 'Active',
  },
  {
    id: '2',
    type: 'Banner',
    icon: 'Banner',
    name: 'Drop',
    symbol: 'DROP',
    start: new Date(),
    finish: new Date(),
    link_usage: 198,
    status: 'Active',
  },
]);

export const getMyCoinsData = (): TMyCoin[] => ([
  {
    id: '1',
    name: 'Drop',
    symbol: 'DROP',
    likes: 182,
    promotion: 'no',
    start: new Date(),
    finish: new Date(),
    icon: '',
    views_all: 182,
    views_7d: 182,
  },{
    id: '2',
    name: 'Drop',
    symbol: 'DROP',
    likes: 182,
    promotion: 'no',
    start: new Date(),
    finish: new Date(),
    icon: '',
    views_all: 182,
    views_7d: 182,
  },{
    id: '3',
    name: 'Drop',
    symbol: 'DROP',
    likes: 182,
    promotion: 'no',
    start: new Date(),
    finish: new Date(),
    icon: '',
    views_all: 182,
    views_7d: 182,
  },{
    id: '4',
    name: 'Drop',
    symbol: 'DROP',
    likes: 182,
    promotion: 'no',
    start: new Date(),
    finish: new Date(),
    icon: '',
    views_all: 182,
    views_7d: 182,
  },{
    id: '5',
    name: 'Drop',
    symbol: 'DROP',
    likes: 182,
    promotion: 'no',
    start: new Date(),
    finish: new Date(),
    icon: '',
    views_all: 182,
    views_7d: 182,
  },
]);

export const getAlertsData = () => ([
  {
    id: '1',
    title: 'You have voted for the cryptocurrency You have voted for the cryptocurrencyYou have voted for the cryptocurrency',
    text: 'Today, you can vote 4 more times Today, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more times',
    data: '15.05.25',
  },
  {
    id: '2',
    title: 'You have voted for the cryptocurrency You have voted for the cryptocurrencyYou have voted for the cryptocurrency',
    text: 'Today, you can vote 4 more times Today, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more times',
    data: '15.05.25',
  },{
    id: '3',
    title: 'You have voted for the cryptocurrency You have voted for the cryptocurrencyYou have voted for the cryptocurrency',
    text: 'Today, you can vote 4 more times Today, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more times',
    data: '15.05.25',
  },{
    id: '4',
    title: 'You have voted for the cryptocurrency You have voted for the cryptocurrencyYou have voted for the cryptocurrency',
    text: 'Today, you can vote 4 more times Today, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more timesToday, you can vote 4 more times',
    data: '15.05.25',
  },
]);