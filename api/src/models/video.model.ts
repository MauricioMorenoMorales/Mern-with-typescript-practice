import { Schema, model } from 'mongoose'

const videoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		url: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
)

export default model('Video', videoSchema)
