const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  // 处理get请求
  // const url = req.url
  // const query = querystring.parse(url.split('?')[1])
  // res.end(JSON.stringify(query)) // 将传递的参数转换为key/value字符串

  // 处理post请求
  // if (req.method === 'POST') {
  //   // 接收数据
  //   let postData = ''
  //   req.on('data', chunk => {
  //     // chunk 传递过来的数据为二进制流
  //     postData += chunk.toString()
  //   })
  //   req.on('end', () => {
  //     console.log(postData)
  //     res.end('post ended')
  //   })
  // }

  const method = req.method // 请求方式
  const url = req.url // 请求源路径
  const path = url.split('?')[0]  // 当前页面路径(路由)
  const query = querystring.parse(url.split('?')[1]) // 请求参数(get)
  // 设置返回格式为json
  res.setHeader('Content-Type', 'application/json')
  // 定义返回数据
  const resData = {
    method,
    path,
    url,
    query
  }
  if (method === 'GET') {
    res.end(JSON.stringify(resData))
  }
})

server.listen(3000)