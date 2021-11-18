var express = require('express');
var router = express.Router();
var { authenticate } = require('../helper.js')//TODO check header and decrpty jwt
const { getAllArticles, addArticle, getArticle, updateArticle, deleteArticle , canUserDeleteArticle} = require('../controller/articlesController');

router.route('/')
    .get(getAllArticles)
    .post(addArticle)

router.route('/:id')
    .get(getArticle)
    .put(authenticate, updateArticle)
    .delete(authenticate, deleteArticle)

router.route('/userhasarticle/:id')
    .get(canUserDeleteArticle)
module.exports = router;