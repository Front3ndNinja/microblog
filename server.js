const express = require('express');
const Article = require('./models/article');
const mongoose = require('mongoose');
const { post } = require('./routes/articles');
const methodOverride = require('method-override');
const app = express();

//database
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//router
const articleRouter = require('./routes/articles');

//view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//response
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc',
  });
  res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(5000);
