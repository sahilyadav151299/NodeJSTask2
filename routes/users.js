const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

router.get('/users', (req, res, next) => {

    fs.access('./username.txt', fs.constants.F_OK, (err) => {

        if(err)
        res.sendFile(path.join(__dirname, '../', 'views', 'create.html'));
        else{
            const users = [];
            let idx = 0;
            fs.readFile('username.txt', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
                        
            users.push(...data.toString().split('\n'));
            users.pop();
                         
            res.write('<html>');
            res.write('<head>');
            res.write('<title>User Info</title>');
            res.write('<style> .td2{border:1px solid black;width:150px;margin:0;text-align:center;}');
            res.write('.td1{border:1px solid black;width:50px;margin:0;text-align:center;')
            res.write('</style>');
            res.write('</head>');
            res.write('<body>');
            res.write('<h2>User Information</h2>');
            res.write('<table>');
            res.write('<th>');
            res.write('<tr><td class="td1">S.No</td><td class="td2">Usernames</td> </tr>')
            res.write('</th>');   
            for(const user of users){ 
                res.write('<tr>'); 
                res.write(`<td class="td1">${++idx}</td>`);
                res.write(`<td class="td2">${user}</td>`); 
                res.write('</tr>'); 
            }
            res.write('</table>');
            res.write('</body>');
            res.write('</html>');
            return res.end();});
        }
    });
});

module.exports = router;