const express = require("express");
const router = express.Router();

const admin = require("firebase-admin");
require("../db");
const db = admin.firestore();



router.get('/', async (req, res, next) => {
    try {
        const mcqsnapshot = await db.collection('mcqs').get();
        const mcqs = [];
        mcqsnapshot.forEach((doc) => {
            mcqs.push({
                id: doc.id,
                data: doc.data()
            });
        });
        res.json(mcqs);
    } catch(e) {
        // next(e);
    }
});


router.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('id is blank');
        const note = await db.collection('mcqs').doc(id).get();
        if (!note.exists) {
            throw new Error('note does not exists');
        }
        res.json({
            id: note.id,
            data: note.data()
        });
    } catch(e) {
        // next(e);
    }
})

router.post('/', async (req, res, next) => {
   
    try {
        const id = req.body.id;
        const question = req.body.question;
        const answer = req.body.answer;
        const A = req.body.A;
        const B = req.body.B;
        const C = req.body.C;
        const D = req.body.D;
        if (!question) throw new Error('Text is blank');
        const data = { id,question, answer , A, B, C, D };
        const ref = await db.collection('mcqs').add(data);
        res.json({
            id: ref.id,
            data
        });
    } catch(e) {
        // next(e);
    }
});



module.exports = router;