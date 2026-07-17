import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to handle simulation requests and save them in the central workspace file
  app.post('/api/send-email', async (req: express.Request, res: express.Response) => {
    const { name, email, phone, area, category, modality, companyName, message } = req.body;

    if (!name || !email || !phone || !category) {
      return res.status(400).json({ error: 'Campos obrigatórios em falta (Nome, E-mail, Telemóvel, Ramo).' });
    }

    // Save simulation request locally in the Google AI Studio workspace environment
    const filePath = path.join(process.cwd(), 'pedidos.json');
    let existingPedidos = [];
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingPedidos = JSON.parse(fileContent);
        if (!Array.isArray(existingPedidos)) {
          existingPedidos = [];
        }
      }
    } catch (e) {
      console.error('Erro ao ler pedidos.json, reiniciando array:', e);
      existingPedidos = [];
    }

    const novoPedido = {
      id: `pedido_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      phone,
      area: area || 'particular',
      category,
      modality: modality || 'Todas as modalidades',
      companyName: companyName || null,
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    existingPedidos.push(novoPedido);

    try {
      fs.writeFileSync(filePath, JSON.stringify(existingPedidos, null, 2), 'utf8');
      console.log(`[Sucesso] Pedido guardado em pedidos.json para o cliente: ${name}`);
      return res.status(200).json({ success: true, data: novoPedido });
    } catch (e: any) {
      console.error('Erro ao guardar o pedido em pedidos.json:', e);
      return res.status(500).json({ 
        error: 'Erro interno ao guardar o pedido no ficheiro central.', 
        details: e.message 
      });
    }
  });

  // Vite middleware or static files for frontend
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
