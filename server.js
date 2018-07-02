const express = require('express');
const PythonShell = require('python-shell')
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'mticserver Home',

  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About mticserver',

  })
});

app.get('/coloc', (req, res) => {
  res.render('coloc.hbs', {
    pageTitle: 'Colocalizer',

  })
});

app.get('/python', (req, res) => {
  PythonShell.run('script.py', {
    pythonPath: "C:\\Users\\Peter\\Anaconda3\\python"
  }, function (err, results) {
    if (err) throw err;
    res.render('python.hbs', {
      pageTitle: 'Python Script test',
      output : results
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
