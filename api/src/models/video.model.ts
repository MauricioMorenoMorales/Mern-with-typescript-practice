import { Schema, model } from 'mongoose'

const videoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		url: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
)

export default model('Video', videoSchema)
