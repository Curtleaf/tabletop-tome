import express from 'express';
import * as systemService from '../services/system';
import { System } from '../shared/types/system';

const router = express.Router(); // Create a router instance

router.get('/systems', async (req, res) => {
  try {
    const systems = await systemService.getAllSystems();
    res.json(systems);
  } catch (error) {
    // Handle errors
  }
});

router.post('/systems', async (req, res) => {
  try {
    console.log(req.body);
    const systemData: System = req.body;
    const newSystem = await systemService.createSystem(systemData);
    res.status(201).json(newSystem);
  } catch (error) {
    // Handle errors
  }
});

router.put('/systems/:systemId', async (req, res) => {
  // ...
});

router.delete('/systems/:systemId', async (req, res) => {
  // ...
});

export default router; // Export the router
