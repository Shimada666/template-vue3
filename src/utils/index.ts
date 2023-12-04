function dateFormat(date: Date, format = 'yyyy-MM-dd hh:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds(),
  }
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (`${date.getFullYear()}`).substr(4 - RegExp.$1.length),
    )
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        // @ts-expect-error ...
        RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length),
      )
    }
  }
  return format
}

function queryString(key: string) {
  const url = location.search || location.hash
  const re = new RegExp(`${key}=([^&?#/]*)`, 'ig')
  return url.match(re) ? decodeURI((url as any).match(re)[0].substr(key.length + 1)) : ''
}

export default {
  dateFormat,
  queryString,
}
