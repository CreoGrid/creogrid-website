import mongoose, { Schema, type Model } from "mongoose";

export interface Contact {
  name: string;
  email: string;
  company?: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<Contact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 150,
      default: undefined,
    },

    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<Contact> =
  mongoose.models.Contact ||
  mongoose.model<Contact>("Contact", contactSchema);

export default Contact;