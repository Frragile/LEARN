//定义
'use strict'
const env = 'dev';

const defaultAlertMessage = '好像哪里出问题了~请再试一次';

const defaultShareText = {
  en: '分享给朋友'
}

const defaultBarTitle = {
  en:'iKcamp英语学习'
}

const deaultImage = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

let core = {
  env:env,
  defaultAlertMessage:defaultAlertMessage,
  defaultShareText:defaultShareText,
  defaultBarTitle:defaultBarTitle['en'],
  deaultImage:deaultImage,
  isDev:env === 'dev',
  isProduction: env === 'production'
}

export default core