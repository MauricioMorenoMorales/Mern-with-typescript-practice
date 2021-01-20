import { Response, Request } from 'express'
import chalk from 'chalk'

export const success = (
	req: Request,
	res: Response,
	message: string,
	status: number,
) => {
	console.log()
	console.log(chalk.green('Respuesta enviada'))
	res.status(status || 200).send(message)
}

export const failure = (
	req: Request,
	res: Response,
	message: string,
	status: number,
	internalMessage: string,
) => {
	console.log(
		`${chalk.inverse.red('[VideoResponses]')} ha ocurrido un error ${chalk.red(
			internalMessage,
		)}`,
	)
	res.status(status).send(message)
}
