import mongoose, { Schema, type Model } from "mongoose";


export interface Lead {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message?: string;
    source: "demo" | "contact";
    product?: "torqone" | "custom";
    createdAt: Date;
    updatedAt: Date;
}


const leadSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        company: {
            type: String,
            trim: true,
        },

        message: {
            type: String,
            trim: true,
        },

        source: {
            type: String,
            enum: ["demo", "contact"],
            required: true,
        },

        product: {
            type: String,
            enum: ["torqone", "custom"],
        },
    },
    {
        timestamps: true,
    },
);

const Lead: Model<Lead> = mongoose.models.Lead || mongoose.model<Lead>("Lead", leadSchema);

export default Lead;
