const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const nodemailer = require('nodemailer')

const local = 'shanghai/yangpu-district';
const weatherBaseUrl = 'https://tianqi.moji.com/weather/china/';
// 天气信息
const getWeatherData = function () {
  return new Promise((resolve, reject) => {
    // 地址拼接
    superagent
      .get(`${weatherBaseUrl}${local}`)
      .end((err, res) => {
        if (err) {
          reject(err);
          console.log(err)
          return;
        }
        let weatherTip = "";
        let $ = cheerio.load(res.text);
        // 爬取 weahter_tips
        $(".wea_tips").each(function (i, elem) {
          weatherTip = $(elem)
            .find("em")
            .text();
        });
        // console.log(res.text)
        // 最近三天的信息
        let threeDaysData = [];
        $(".forecast .days").each(function (i, elem) {
          const SingleDay = $(elem).find("li");
          const Day = $(SingleDay[0]).text().replace(/\s/g, "");
          const WeatherText = $(SingleDay[1]).text().replace(/\s/g, "");
          const Temperature = $(SingleDay[2]).text().replace(/\s/g, "");
          const WindDirection = $(SingleDay[3]).find("em").text().replace(/\s/g, "");
          const WindLevel = $(SingleDay[3]).find("b").text().replace(/\s/g, "");
          const Pollution = $(SingleDay[4]).text().replace(/\s/g, "");
          const PollutionLevel = $(SingleDay[4]).find("strong").attr("class");
          threeDaysData.push({
            Day, WeatherText, Temperature, WindDirection, WindLevel,
            Pollution, PollutionLevel
          });
        });
        // console.log({
        //   weatherTip,
        //   threeDaysData
        // })
        resolve({
          weatherTip,
          threeDaysData
        })
      })
  })
}
// sendEmail
const getOneData = function () {
  // http://wufazhuce.com/
  const OneUrl = 'http://wufazhuce.com/';
  let p = new Promise(function (resolve, reject) {
    superagent.get(OneUrl).end(function (err, res) {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)
    });
  })
  return p
}
// getWeatherData();
// 聚合数据 都放到一起
function getAllDataAndSendEmail() {
  Promise.all([getWeatherData(), getOneData()])
    // 可以接收到两个promise resolve的值
    .then(alldata => {
      const [weather, one] = alldata;
      // console.log(weather.threeDaysData)
      sendEmail(weather, one);
    })
}
function sendEmail(weather, one) {
  //把 ejs 编译成 html
  const template = ejs.compile(
    fs.readFileSync('./email.ejs', 'utf8')
  )
  const html = template({
    weatherTip: weather.weatherTip,
    threeDaysData: weather.threeDaysData
  })
  const transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465, // smtp 邮件传输的端口号
    auth: {
      user: '980220827@qq.com',
      pass: 'hzxfqupjcweabefj'
    }
  })
  // 配置发送邮件的具体
  transporter.sendMail({
    from: 'SkateCl <980220827@qq.com>',
    to: '2683549532@qq.com',
    subject: '叮！',
    html
  }, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log('success', info);
  })
}
getAllDataAndSendEmail();