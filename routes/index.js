var express = require('express');
var router = express.Router();
const cUsers = require('../apps/controllers/users.controller')
const cPredicates = require('../apps/controllers/predicates.controller')
const cProducts = require('../apps/controllers/products.controller')
const cCriterias = require('../apps/controllers/criterias.controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/list', cUsers.list)
router.get('/user', cUsers.single)
router.post('/user', cUsers.create)
router.patch('/user', cUsers.update)
router.delete('/user', cUsers.delete)
router.post('/user/auth', cUsers.login)

router.get('/predicate/list', cPredicates.list)
router.get('/predicate', cPredicates.single)
router.post('/predicate', cPredicates.create)
router.patch('/predicate', cPredicates.update)
router.delete('/predicate', cPredicates.delete)

router.get('/product/list', cProducts.list)
router.post('/product', cProducts.create)
router.patch('/product', cProducts.update)
router.delete('/product', cProducts.delete)

router.get('/criteria/list', cCriterias.list)
router.post('/criteria', cCriterias.create)
router.patch('/criteria', cCriterias.update)
router.delete('/criteria', cCriterias.delete)

module.exports = router;
