const request = require('request');
const cheerio = require('cheerio');
let searchQiyi = function(name){
  let url = `http://so.iqiyi.com/so/q_${encodeURIComponent(name)}?source=input&sr=309914729852`;
  let promise = new Promise(function(resolve,reject){
    request(url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        let $ = cheerio.load(body);
        let url_arr = $('.list_item'),
          all_list = [],
          list_obj = [],
          movies_obj = [],
          result = {};
        url_arr.each(function (index, item) {
          let title = $(this).find('.result_title a').attr('title');
          let img = $(this).find('.figure img').attr('src');
          img = img.substring(2,img.length);// 去除url前面的//
          if ($(this).find('.info_play_btn').length > 0) { //拿到单个电影
            let url = $(this).find('.info_play_btn').attr('href');
            movies_obj = {
              title: title,
              img:img,
              url: url,
              type:'single'
            }
            all_list.push(movies_obj);
          } else if ($(this).find('.result_album').length > 0) {//拿到对应多个电影的列表
            let itemList = $(this).find('.result_album .album_item .album_link');
            itemList.each(function (index, item) {
              let itemTitle = '第' + $(this).attr('title') + '集';
              list_obj.push({
                title: itemTitle,
                url: $(this).attr('href')
              });
            })
            all_list.push({
              title:title,
              img:img,
              type:'list',
              list:list_obj
            });
          }
          list_obj = [];
          movies_obj = [];
        });
        resolve(all_list);
      }
    })
  })
  return promise;
}
export { searchQiyi}

