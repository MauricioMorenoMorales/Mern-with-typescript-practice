import { Router, Request, Response } from 'express'

import * as videosController from '../controllers/videos.controller'
const router = Router()

router.get('/', videosController.getVideos)

router.get('/:id', (req: Request, res: Response) => {})

router.post('/', videosController.createVideo)

router.delete('/:id', (req: Request, res: Response) => {
	res.send('Hola desde delete')
})
router.put('/:id', (req: Request, res: Response) => {
	res.send('Hola desde put')
})

export default router
