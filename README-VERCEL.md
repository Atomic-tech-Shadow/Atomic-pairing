# Déploiement sur Vercel

## Étapes pour déployer votre Atomic Session Generator sur Vercel

### 1. Préparation
Votre projet est maintenant prêt pour Vercel avec :
- `vercel.json` configuré pour Node.js
- Structure de fichiers optimisée
- Dépendances installées

### 2. Déploiement sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub/GitLab/Bitbucket
3. Cliquez sur "New Project"
4. Importez ce repository
5. Vercel détectera automatiquement la configuration

### 3. Variables d'environnement
Si vous utilisez des variables d'environnement, ajoutez-les dans les paramètres Vercel :
- `PORT` (optionnel, Vercel gère automatiquement)
- Autres variables spécifiques à votre app

### 4. Configuration automatique
Vercel utilisera :
- `vercel.json` pour la configuration de build
- `index.js` comme point d'entrée
- Installation automatique des dépendances depuis `package.json`

### 5. URL de production
Après déploiement, vous recevrez une URL comme :
`https://votre-projet.vercel.app`

## Notes importantes
- Vercel utilise des fonctions serverless
- Les sessions temporaires dans `/temp` peuvent ne pas persister
- Considérer utiliser un stockage externe pour la production