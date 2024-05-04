import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const datePostSchema = new Schema(
  {
    date: String,
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Date = mongoose.models.Date || mongoose.model("Date", datePostSchema);

export default Date;
