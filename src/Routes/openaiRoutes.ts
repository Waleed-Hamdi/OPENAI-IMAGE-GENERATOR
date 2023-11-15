import express from 'express';
import generateImage from '../controllers/openaiController';


const router = express.Router();

router.get('/generateimage', generateImage);


export default router;