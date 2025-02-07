import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import workspaceRoutes from "./routes/workspaces.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', workspaceRoutes);

export default app; 