# Guide de Test MCP Supabase pour Cursor

## Vérification de la Configuration

Votre fichier `mcp.json` est configuré avec :
- **Serveur MCP** : `mcp-server-supabase`
- **URL Supabase** : `https://tihrltssmpxpreadpzqm.supabase.co`
- **Clé Anon** : Configurée

## Méthodes pour Tester le MCP

### 1. Test via l'Interface Cursor

1. **Redémarrer Cursor** (important après modification de mcp.json)
   - Fermez complètement Cursor
   - Rouvrez Cursor
   - Le MCP devrait se connecter automatiquement

2. **Vérifier les Outils Disponibles**
   - Dans le chat Cursor, essayez de demander :
     - "Quelles sont les tables disponibles dans ma base Supabase ?"
     - "Peux-tu lister les colonnes de la table users ?"
     - "Montre-moi le schéma de la base de données"

### 2. Test via Requêtes Directes

Une fois le MCP connecté, vous pouvez tester avec ces commandes dans le chat :

#### Test Simple - Lister les Tables
```
Peux-tu me donner la liste de toutes les tables dans ma base Supabase ?
```

#### Test Interrogation - Schéma d'une Table
```
Montre-moi la structure de la table 'users' dans Supabase
```

#### Test Requête SQL
```
Exécute une requête SQL pour compter le nombre d'utilisateurs dans la table users
```

#### Test Lecture de Données
```
Récupère les 5 derniers utilisateurs créés dans ma base Supabase
```

### 3. Vérifier la Connexion

Si le MCP est bien connecté, Cursor devrait pouvoir :
- ✅ Accéder aux métadonnées de votre base de données
- ✅ Lister les tables disponibles
- ✅ Décrire la structure des tables
- ✅ Exécuter des requêtes SQL (lecture uniquement avec la clé anon)
- ✅ Aider à créer/mettre à jour le schéma

### 4. Problèmes Courants

#### Le MCP ne répond pas
- ✅ Vérifiez que `mcp-server-supabase` est installé :
  ```bash
  npm list -g mcp-server-supabase
  ```
  Si non installé :
  ```bash
  npm install -g @modelcontextprotocol/server-supabase
  ```

#### Erreur de Connexion
- ✅ Vérifiez que l'URL et la clé dans `mcp.json` sont correctes
- ✅ Testez la connexion directement depuis le Dashboard Supabase
- ✅ Vérifiez que la clé anon n'a pas expiré

#### Le MCP n'apparaît pas dans Cursor
- ✅ Redémarrez Cursor complètement
- ✅ Vérifiez les logs Cursor (View > Output > MCP)
- ✅ Assurez-vous que le fichier mcp.json est au bon emplacement :
  - Windows : `C:\Users\VOTRE_USER\.cursor\mcp.json`

## Test Recommandé

Essayez cette requête de test dans le chat Cursor :

> "Peux-tu me montrer la liste de toutes les tables de ma base Supabase et me donner un résumé du schéma de la table 'users' ?"

Si cette requête fonctionne, votre MCP Supabase est correctement configuré et opérationnel ! 🎉

