import { Router, Response, Request } from 'express'

import * as videosController from '../controllers/videos.controller'
const router = Router()

router.get('/', videosController.getVideos)

export default router
