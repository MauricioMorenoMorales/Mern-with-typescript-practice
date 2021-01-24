import { RequestHandler } from 'express'
import * as response from '../res/responses'
import videoModel from '../models/video.model'
import chalk from 'chalk'

export const getVideos: RequestHandler = async (req, res) => {
	const databaseResponse = await videoModel.find()
	response.success(req, res, databaseResponse, 200)
}

export const getVideo: RequestHandler = async (req, res) => {
	try {
		console.log(req.params.id)
		const databaseResponse = await videoModel.findById(req.params.id)
		if (!databaseResponse)
			return response.failure(
				req,
				res,
				'No se encontró el video:(',
				500,
				'[videos:controller]: no se encontró el video pedido',
			)
		console.log(databaseResponse)
		response.success(req, res, databaseResponse, 200)
	} catch (error) {
		console.log(
			chalk.red(
				`${chalk.inverse.red(
					'[Video controller]',
				)} ha ocurrido un error interno: ${error}`,
			),
		)
	}
}

export const createVideo: RequestHandler = async (req, res) => {
	try {
		const isAlreadyThisVideoInDatabase = await videoModel.findOne({
			url: req.body.url,
		})
		if (isAlreadyThisVideoInDatabase) {
			return response.failure(
				req,
				res,
				'El video ya existe en la base de datos',
				500,
			)
		} else {
			const video = new videoModel(req.body)
			const savedVideo = await video.save()
			response.success(req, res, savedVideo, 201)
		}
	} catch (error) {
		console.log(chalk.red(error))
	}
}

export const deleteVIdeo: RequestHandler = async (req, res) => {
	try {
		const dataBaseResponse = await videoModel.findByIdAndDelete(req.params.id)
		if (!dataBaseResponse) {
			return response.failure(
				req,
				res,
				'Error interno no pudimos eliminar el mensaje',
				500,
				'Ha ocurrido un error en el controlador de video al momento de eliminar un video',
			)
		}
		return response.success(req, res, dataBaseResponse, 200)
	} catch (error) {
		console.log(
			chalk.red(
				`${chalk.inverse.red(
					'[Video controller]',
				)} ha ocurrido un error interno: ${error}`,
			),
		)
	}
}

export const updateVideo: RequestHandler = async (req, res) => {
	try {
		const dataBaseResponse = await videoModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		)
		if (!dataBaseResponse)
			return response.failure(
				req,
				res,
				'Error interno al actualizar video',
				204,
				'Ha ocurrido un error al actualizar video en el controlador de videos',
			)
		return response.success(req, res, dataBaseResponse, 200)
	} catch (error) {
		console.log(
			chalk.red(
				`${chalk.inverse.red(
					'[Video controller]',
				)} ha ocurrido un error interno: ${error}`,
			),
		)
	}
}
