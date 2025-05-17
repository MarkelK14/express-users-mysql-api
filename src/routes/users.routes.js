const { getAll, getById, create, edit, remove } = require('../controllers/users.controller');
const { checkUserId } = require('../middlewares/users.middlewares');

const router = require('express').Router();

// Define your routes here:

// SELECT
router.get('/', getAll); // GET /api/users
router.get('/:userId', checkUserId, getById); // GET /api/users/:id

// INSERT
router.post('/', create); // POST /api/users

// UPDATE
router.put('/:userId', checkUserId, edit); // PUT /api/users/:id

// DELETE
router.delete('/:userId', checkUserId, remove); // DELETE /api/users/:id

module.exports = router;