import mongoose from 'mongoose'

export const OrganizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }],
  },
  { timestamps: true }
)
