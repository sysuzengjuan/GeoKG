/**
 * https://blog.csdn.net/sinat_35515778/article/details/72677390
 */
export function MP(ak) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script')
    if (typeof BMap !== 'undefined') {
      setTimeout(() => {
        resolve(BMap)
      }, 100)
    }
    window.onload = function() {
      resolve(BMap)
    }
    script.type = 'text/javascript'
    script.src =
      'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
