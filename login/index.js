const request = require('superagent')

let loginInfo = {
  app:'web',
  tp:'urstoken',
  cf:3,
  fr:1, 
  ru:'http://dict.youdao.com/wordbook/wordlist?keyfrom=login_from_dict2.index',
  product:'DICT',
  type:1,
  um:true,
  username:'webstudy616@163.com',
  password:'996952c8ad4c22926136347df5a7a31f',
  savelogin:1
}

let wordInfo = {
  word:'test2',
  phonetic:'[test]',
  desc:`n. 试验；检验
  vt. 试验；测试
  vi. 试验；测试
  n. (Test)人名；(英)特斯特`,
  tags:''
}
let header = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Encoding':'gzip, deflate, br',
  'Accept-Language':'zh-CN,zh;q=0.8',
  'Cache-Control':'max-age=0',
  'Connection':'keep-alive',
  // 'Content-Length':219,
  'Content-Type':'application/x-www-form-urlencoded',
  //'Cookie':'OUTFOX_SEARCH_USER_ID=2064566381@61.152.150.145',
  'Host':'logindict.youdao.com',
  'Origin':'http://account.youdao.com',
  'Referer':'http://account.youdao.com/login?service=dict&back_url=http://dict.youdao.com/wordbook/wordlist%3Fkeyfrom%3Dlogin_from_dict2.index',
  'Upgrade-Insecure-Requests':1,
  'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
}

let addHeader = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Encoding':'gzip, deflate',
  'Accept-Language':'zh-CN,zh;q=0.8',
  'Cache-Control':'max-age=0',
  'Content-Length':300,
  'Content-Type':'application/x-www-form-urlencoded',
  // 'Cookie':'OUTFOX_SEARCH_USER_ID=2064566381@61.152.150.145; DICT_SESS=v2|URSM|DICT||webstudy616@163.com||urstoken||mqcE2cohez0nodZRi65ljnIO89QjX5XVYsaedmId8SjqRcNfRVhy3u7DQkjRVbRoBz4EkfltqfgEAUzIq16kTKtmjMIkltl24_Cew7jUbbzydsPrG3mZHOKp7Wms9rCN_oAqjddjkYxSuEm6VpxH7LjdQrqaM0IQWD6xvGZ8nAACQGkDvSpIDB1EC50DG1GvwxT7_CkBell0u||604800000||Of6Mkm0Mgy0pFkf6K64QuROG0HpuPLUGRlf0LlfnMUMReFnLUY0LqL0kE0MTSO4OGRlMk4pL0LYf0QzO4YfOMwuR; DICT_LOGIN=5||1494231669269; JSESSIONID=abcrHzZWnkeHhdNF7kN',
  'Host':'dict.youdao.com',
  'Origin':'http://dict.youdao.com',
  'Proxy-Connection':'keep-alive',
  'Referer':'http://dict.youdao.com/wordbook/wordlist',
  'Upgrade-Insecure-Requests':1,
  'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
}

request
  .post('https://logindict.youdao.com/login/acc/login')
  .redirects(0)
  .set(header)
  .send(loginInfo)
  .end(function(err, res){
    // Calling the end function will send the request
    // console.log(res)
    addHeader.Cookie = res.header['set-cookie'].toString()
    request
      .post('http://dict.youdao.com/wordbook/wordlist?action=add')
      // .redirects(1)
      .set(addHeader)
      .send(wordInfo)
      .end(function(err, res){
        // Calling the end function will send the request
        console.log(res)
      });
  });
// request
//       .post('http://dict.youdao.com/wordbook/wordlist?action=add')
//       // .redirects(1)
//       .set(addHeader)
//       .send(wordInfo)
//       .end(function(err, res){
//         // Calling the end function will send the request
//         console.log(res)
//       });