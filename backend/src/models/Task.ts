import { Schema, model, connection } from 'mongoose';

type TaskProps = {
  title: string;
  description: string;
  status: string;
  date: string;
};

const schema = new Schema<TaskProps>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
});

const modelName = 'Task';

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<TaskProps>(modelName, schema);
