const config = {
    users:  [{"username":"susie","password":"123456"}],
    mongodb: {
        // url: 'mongodb://sysu:sysu2018@ds113693.mlab.com:13693/geokg',
        url: 'mongodb://localhost:27017/geokg',
        domain: 'mlab.com', // 主域名
        scheme: 'mongodb', // 协议
        database: 'geokg', // 数据库名称
        username: 'sysu', // 管理员用户名称
        password: 'sysu2018'// 管理员密码
    },
    imagePath: "~/opt/data/images/",
    imageURL: "https://www.arckg.cn/sysu-image/",
    sercet: "sysu-geokg"
  };
  
  module.exports = config;
  