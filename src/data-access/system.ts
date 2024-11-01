import { System } from '../shared/types/system';
import mongoose, { Model } from 'mongoose';

const systemSchema = new mongoose.Schema<System>({
  // Define your schema based on the System type
});

const SystemModel: Model<System> = mongoose.model<System>('System', systemSchema);

export const addSystem = async (system: System): Promise<System> => {
  const newSystem = new SystemModel(system);
  return newSystem.save();
};

export const modifySystem = async (systemId: string, updates: Partial<System>): Promise<System | null> => {
  return SystemModel.findByIdAndUpdate(systemId, updates, { new: true }).exec();
};

export const deleteSystem = async (systemId: string): Promise<void> => {
  await SystemModel.findByIdAndDelete(systemId).exec();
};
