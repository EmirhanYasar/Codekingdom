const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase");


router.get("/", async (req, res) => {
try {
const snapshot = await db.collection("questions").get();
const questions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
res.json(questions);
} catch (e) {
res.status(500).json({ error: e.message });
}
});


module.exports = router;
