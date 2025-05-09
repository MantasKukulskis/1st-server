import express from 'express';
import { textPost } from '../api/text/textPost.js';
import { textPut } from '../api/text/textPut.js';
import { updateCountPut } from '../api/update-count/updateCountPut.js';
import { textGet } from '../api/text/textGet.js';
import { textDelete } from '../api/text/textDelete.js';

export const apiRouter = express.Router();

apiRouter.all('/api', (req, res) => {
    return res.status(404).send('Toks adresas negalimas');
});
apiRouter.post('/api/text', textPost);
apiRouter.get('/api/text/:index', textGet);
apiRouter.delete('/api/text/:index', textDelete);
apiRouter.put('/api/text/:index/', textPut); 
apiRouter.put('/api/update-count/:number', updateCountPut); 