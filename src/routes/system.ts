import express from 'express';
import * as systemService from '../services/system';
import { System } from '../shared/types/system';

const app = express();

app.post('/api/systems', async (req, res) => {
    try {
      const systemData: System = req.body;
      const newSystem = await systemService.createSystem(systemData);
      res.status(201).json(newSystem);
    } catch (error) {
      // Handle errors
    }
  });
  
  app.put('/api/systems/:systemId', async (req, res) => {
    // ...
  });
  
  app.delete('/api/systems/:systemId', async (req, res) => {
    // ...
  });
  