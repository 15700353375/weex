/* eslint-disable no-new-wrappers */
exports.getUrl = function (url) {
  let bundleUrl = new String(weex.config.bundleUrl)
  let platform = weex.config.env.platform.toLowerCase()

  console.log('bundleUrl: ', bundleUrl, platform)

  let nativeBase
  if (platform === 'android') {
    nativeBase = 'local://assets/' + `/${url}.js`
    // nativeBase = 'local://assets/dist/';
    nativeBase = 'local://' + 'file://assets/'
    nativeBase = nativeBase + url + '.js'

    // nativeBase =
    //   bundleUrl
    //     .split('/')
    //     .slice(0, -1)
    //     .join('/') + `/${url}.js` // 獲取b.we編譯後的b.js的相對路徑
  } else if (platform === 'ios') {
    // nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + url
    nativeBase =
      bundleUrl
        .split('/')
        .slice(0, -1)
        .join('/') + `/${url}.js` // 獲取b.we編譯後的b.js的相對路徑
  } else {
    let host = 'localhost:8081'
    const matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
    if (matches && matches.length >= 2) {
      host = matches[1]
    }

    if (typeof window === 'object') {
      nativeBase = 'http://' + host + '/'
    } else {
      nativeBase = 'http://' + host + '/'
    }
    nativeBase = nativeBase + url + '.html'
  }
  return nativeBase
}
