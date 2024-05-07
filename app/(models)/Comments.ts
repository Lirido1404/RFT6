import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const commentsSchema = new Schema(
  {
    contentOfComment:String,
  },
  {
    timestamps: true,
  }
);

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;
