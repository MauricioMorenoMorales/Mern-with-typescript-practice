import { Router, Request, Response } from 'express'

import * as videosController from '../controllers/videos.controller'
const router = Router()

router.get('/', videosController.getVideos)

router.get('/:id', videosController.getVideo)

router.post('/', videosController.createVideo)

router.delete('/:id', videosController.deleteVIdeo)

router.put('/:id', (req: Request, res: Response) => {
	res.send('Hola desde put')
})

export default router
