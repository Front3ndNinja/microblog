const express = require('express');
const { post } = require('./routes/articles');
const app = express();

//router
const articleRouter = require('./routes/articles');

//view engine
app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

//response
app.get('/', (req, res) => {
  const articles = [
    {
      title: 'this is a blog post',
      createAt: Date.now(),
      description: 'this is description for the article',
    },
  ];
  res.render('index', { articles: articles });
});

app.listen(5000);
