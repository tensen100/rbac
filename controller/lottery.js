const axios = require('axios');
const cheerio = require('cheerio');
const operators = require('../config/actions');
const {response_success, response_none} = require('../tools/handle_response');

module.exports = async (ctx) => {
  const operator = ctx.params.operator;
  switch (operator) {
    case operators.FIND:
      const res = await axios.get('http://datachart.500.com/ssq/history/newinc/history.php', {
        params: {
          start: 17077,
          end: 19023
        },
      });

      const $ = cheerio.load(res.data);

      const dataList = [];
      const andList = [];
      const numberList = [];
      const oddList = [];
      const bigList = [];

      $('#tdata tr').each( function (index, tr) {
        const tds = $(tr).find('td');

        const red =  [
          tds.eq(1).text() * 1,
          tds.eq(2).text() * 1,
          tds.eq(3).text() * 1,
          tds.eq(4).text() * 1,
          tds.eq(5).text() * 1,
          tds.eq(6).text() * 1,
        ];
        const blue = tds.eq(7).text() * 1;
        const number = tds.eq(0).text();
        const add = red.reduce( (sum, cur) => sum + cur, 0); // 和值
        const odd = red.reduce( (sum, cur) => sum + cur & 2 ,0 ); // 奇偶
        const big = red.reduce( (sum, cur) => sum + Math.floor(cur / 16) ,0 ); // 大小

        andList.push(add);
        numberList.push(number);
        oddList.push(odd);
        bigList.push(big);

        dataList.push({
          number: number ,
          red: red,
          blue: blue,
          date: tds.eq(-1).text(),
          and: add,
          odd: odd,
          big: big, // 大小
        });
      });

      return response_success ({
        list: dataList,
        and: andList,
        odd: oddList,
        big: bigList,
        number: numberList
      });
    default:
      return response_none;
  }

};