import express from 'express';
import {
  createWorkspace,
  getWorkspaces,
  getWorkspaceById,
  updateWorkspace,
  deleteWorkspace
} from '../controllers/workspaces.controller.js';

const router = express.Router();

// Rutas para los espacios de trabajo con un path base '/workspace'
router.post('/workspaces', createWorkspace); // Crear un nuevo espacio de trabajo
router.get('/workspaces', getWorkspaces); // Obtener todos los espacios de trabajo
router.get('/workspaces/:id', getWorkspaceById); // Obtener un espacio de trabajo por ID
router.put('/workspaces/:id', updateWorkspace); // Actualizar un espacio de trabajo
router.delete('/workspaces/:id', deleteWorkspace); // Eliminar un espacio de trabajo

export default router;

