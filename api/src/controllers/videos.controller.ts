import { RequestHandler, response } from 'express'
import * as responses from '../res/responses'
import videoModel from '../models/video.model'

export const getVideos: RequestHandler = async (req, res) => {
	responses.success(req, res, { response: 'todo está bien' }, 200)
}

export const getVideo: RequestHandler = async (req, res) => {
	responses.success(req, res, 'Video enviado', 200)
}

export const createVideo: RequestHandler = async (req, res) => {
	console.log(req.body)
	responses.success(req, res, 'Video creado correctamente', 201)
}
