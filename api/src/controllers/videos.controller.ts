import { RequestHandler } from 'express'
import * as responses from '../res/responses'

export const getVideos: RequestHandler = async (req, res) => {
	responses.success(req, res, 'Todo funciona perfectamente', 201)
}

export const createVideo: RequestHandler = async (req, res) => {
	
}