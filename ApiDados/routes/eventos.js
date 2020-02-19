var express = require('express');
var router = express.Router();
var Eventos = require('../controllers/eventos')

/* GET users listing. */
router.get('/', function(req, res) {
  if(req.query.participante){
    Eventos.filtrarParticipante(req.query.participante)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
  }
  else{
    Eventos.listar()
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
  } 
});

router.get('/:id', function(req, res) {
  Eventos.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/inserir', function(req,res){
  Eventos.InserirGrupo(req.body)
  .then(dados=>res.jsonp(dados))
  .catch(erro=>res.jsonp(erro))
})

module.exports = router;