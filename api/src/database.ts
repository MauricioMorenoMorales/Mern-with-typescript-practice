import mongoose, { ConnectionOptions } from 'mongoose'
import chalk from 'chalk'
import config from './config'
;(async () => {
	const URI = (username: string, password: string, dbname: string): string =>
		`mongodb+srv://${username}:${password}@nodejsplatzi.cg57m.mongodb.net/${dbname}?retryWrites=true&w=majority`

	const mongooseOptions: ConnectionOptions = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	}

	try {
		mongoose.connect(
			URI(config.USERNAME, config.PASSWORD, config.DBNAME),
			mongooseOptions,
			() => {
				console.log(
					chalk.green(
						`${chalk.inverse.green('[DATABASE]')}: Base de datos conectada`,
					),
				)
			},
		)
	} catch (error) {
		console.log(
			chalk.red(
				`${chalk.inverse.red(
					'[DATABASE]',
				)} error en la coneccion con la base de datos ${error}`,
			),
		)
	}
})()
