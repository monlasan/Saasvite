import mongoose from 'mongoose'

export const TenantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    database_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
