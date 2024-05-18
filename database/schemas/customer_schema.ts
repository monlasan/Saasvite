import mongoose from 'mongoose'

export const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    organizations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],
  },
  { timestamps: true }
)
