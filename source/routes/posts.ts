/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();
router.get('/', controller.homePage);
router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

router.get('/testPoint', controller.getTestPoint);
router.post('/betOffering', controller.postBetOffering);
router.get('/betOfferings', controller.getBetOfferings);

export = router;