const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

//  GET all thoughts at /api/thoughts
router.route('/').get(getAllThought);

// GET thought by id
router.route('/:thoughtId').get(getThoughtById);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(updateThought);

router
    .route('/:userId/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;