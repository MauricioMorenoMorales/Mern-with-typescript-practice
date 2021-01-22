import { RequestHandler, response } from 'express'
import * as responses from '../res/responses'
import videoModel from '../models/video.model'
import chalk from 'chalk'

export const getVideos: RequestHandler = async (req, res) => {
	const databaseResponse = await videoModel.find()
	responses.success(req, res, databaseResponse, 200)
}

export const getVideo: RequestHandler = async (req, res) => {
	responses.success(req, res, 'Video enviado', 200)
}

export const createVideo: RequestHandler = async (req, res) => {
	try {
		const isAlreadyThisVideoInDatabase = await videoModel.findOne({
			url: req.body.url,
		})
		if (isAlreadyThisVideoInDatabase) {
			return responses.failure(
				req,
				res,
				'El video ya existe en la base de datos',
				500,
			)
		} else {
			const video = new videoModel(req.body)
			const savedVideo = await video.save()
			responses.success(req, res, savedVideo, 201)
		}
	} catch (error) {
		console.log(chalk.red(error))
	}
}

export const deleteVIdeo: RequestHandler = async (req, res) => {
	res.send('saludos desde delete')
}
