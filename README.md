# CPNT262 - Final Project

## Matrix Squad

### Authors
* [Fesal](https://github.com/FesalBadday)
* [Raj](https://github.com/Raj-Hunjan)
* [Lucas](https://github.com/lucas-cq)
* [Hyeju](https://github.com/Hyeju1996)

## Team Rules
* Comment your commits
* Try to stick to your own files, to avoid merge conflicts
* Ask questions if not sure, and have fun
* Who finish their part can help others as well

## Information
- For the fancy feature, we went with the EJS view engine, I have managed to get the view engine to work and instead of using the views folder I just added all of the pages inside public because I did not like the idea of adding the pages in another folder than public, I have also changed the view template from .ejs to .html. because from what I have read is that .ejs does not support everything .html does. 

- The views getting the pages from public
```js
app.set('views', path.join(__dirname, 'public'))
```

- Using .html as a view template instead of .ejs 
```js
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
```
  
### Attributions
- [Auth0](https://www.youtube.com/watch?v=vdFQJRVGHYM) For learning how to use EJS.
- [stackoverflow](https://stackoverflow.com/questions/17911228/how-do-i-use-html-as-the-view-engine-in-express) Learned how to use HTML as the view engine insted of ejs and for using the below code.

```js
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
```