// Vercel API Route - Proxy vers backend externe
export default async function handler(req, res) {
  const { number } = req.query;
  
  if (!number) {
    return res.status(400).json({ error: 'Numéro de téléphone requis' });
  }
  
  try {
    // URL de votre backend sur Railway/Render avec WebSocket
    const BACKEND_URL = process.env.BACKEND_URL || 'https://votre-app.railway.app';
    
    // Faire appel au backend qui gère les WebSockets
    const response = await fetch(`${BACKEND_URL}/api/pair-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: 'Erreur lors de la génération du code' });
    }
    
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}