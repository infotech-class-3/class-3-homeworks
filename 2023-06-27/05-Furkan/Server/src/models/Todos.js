const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema([
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      default: 0,
    },
    todo: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    updatedDate: {
      type: Date,
      default: null,
    },
  },
]);

const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
