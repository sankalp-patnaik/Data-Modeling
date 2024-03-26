import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      // Now we are giving the refernce from user Model
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: SubTodo,
      },
    ], // Array of SubTodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
