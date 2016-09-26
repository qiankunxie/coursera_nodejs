var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

// promoRouter.route('/')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

// .get(function(req,res,next){
//         res.end('Will send all the dishes to you!');
// })

// .post(function(req, res, next){
//     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
// })

// .delete(function(req, res, next){
//         res.end('Deleting all dishes');
// });

promoRouter.route('/:id')
.all(Verify.verifyOrdinaryUser, function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the promotion: ' + req.params.id +' to you!');
})

.put(Verify.verifyAdmin ,function(req, res, next){
        res.write('Updating the promotion: ' + req.params.id + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(Verify.verifyAdmin ,function(req, res, next){
        res.end('Deleting promotion: ' + req.params.id);
});

module.exports = promoRouter