import express from 'express';
import { pageHome } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
import { textPost } from './api/text/textPost.js';
import { textPut } from './api/text/textPut.js';
import { updateCountPut } from './api/update-count/updateCountPut.js';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.get('/', pageHome);
app.get('/about', pageAbout);
app.get('/users/:userId', pageUser);

app.all('/api', (req, res) => {
    return res.status(404).send('Toks adresas negalimas');
});

app.post('/api/text', textPost);
app.put('/api/text/:index/', textPut); 
app.put('/api/update-count/:number', updateCountPut); 

app.get('*error', page404);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});