const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
      
  //   app.get('/news', (req, res) => {
  //     res.render('news')
  //   }) <=>
  app.use('/news', newsRouter)
    
  // app.get('/search' or '/home', (req, res) => {
  //   res.render('search')
  // }) <=>
  app.use('/', siteRouter)
  
  // app.post('/search', (req, res) => {
  //   console.log(req.body);
  //   res.send('Tuan Anh dep trai:))')
  // })

}

module.exports = route
