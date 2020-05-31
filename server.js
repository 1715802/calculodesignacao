const express = require('express');

const app = express();


// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static('./dist/calculodesignacao'));

app.get('/*', function(req,res) {
    
res.sendFile('index.html', {root:'/dist/calculodesignacao/'});
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);