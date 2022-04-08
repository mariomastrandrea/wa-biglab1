import dayjs from "dayjs" ;

const films = [
   {title: "abc", favorite: true, Watchdate: new dayjs("2022-07-02"), rating: 4},
   {title: "adc", favorite: false, Watchdate: new dayjs("2021-05-02"), rating: 3},
   {title: "avc", favorite: false, Watchdate: new dayjs( "2020-02-02"), rating: 2},
   {title: "azc", favorite: true, Watchdate: new dayjs("2017-08-10"), rating: 1}
];

export {films};