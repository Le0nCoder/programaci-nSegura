const express = require('express');
const app = express();
app.get('/run', (req,res) => {
	eval(req.query.code);
	res.send('ok');
});
app.listen(3000);
