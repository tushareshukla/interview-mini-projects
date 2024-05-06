const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    status: {
      type: String,
      enum: ["pending", "compeleted"],
      default: ["pending"],
    },
    duedate: Date,
  },
  { timestamps: true }
);
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo