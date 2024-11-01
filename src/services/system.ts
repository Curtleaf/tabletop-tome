import { System } from '../shared/types/system';
import * as systemRepository from '../data-access/system';

export const createSystem = async (systemData: System): Promise<System> => {
  // Perform any necessary validation or business logic before saving
  return systemRepository.addSystem(systemData);
};

export const updateSystem = async (systemId: string, updates: Partial<System>): Promise<System | null> => {
  // Perform any necessary validation or business logic before updating
  return systemRepository.modifySystem(systemId, updates);
};

export const removeSystem = async (systemId: string): Promise<void> => {
  // Perform any necessary checks or cleanup before deleting
  await systemRepository.deleteSystem(systemId);
};
