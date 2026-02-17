import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No API routes needed for this static page
  // The frontend handling is done by the static file serving in index.ts

  return httpServer;
}
