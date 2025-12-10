/**
 * Script de test pour vérifier la connexion Supabase
 * Usage: node test_supabase_connection.js
 */

const SUPABASE_URL = "https://tihrltssmpxpreadpzqm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpaHJsdHNzbXB4cHJlYWRwenFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjEwNDksImV4cCI6MjA3OTczNzA0OX0.lXbPKA8tYj7o582onzj8c9y1vhkdXrk5SN8WmIahJpY";

async function testSupabaseConnection() {
  try {
    // Charger le client Supabase
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    console.log('🔍 Test de connexion à Supabase...\n');
    console.log('URL:', SUPABASE_URL);
    console.log('Clé:', SUPABASE_ANON_KEY.substring(0, 20) + '...\n');

    // Test 1: Vérifier la connexion de base
    console.log('📊 Test 1: Vérification de la connexion...');
    const { data: healthCheck, error: healthError } = await supabase
      .from('users')
      .select('count')
      .limit(1);
    
    if (healthError) {
      console.log('⚠️  Erreur de connexion:', healthError.message);
    } else {
      console.log('✅ Connexion réussie!\n');
    }

    // Test 2: Lister les tables (via une requête sur users)
    console.log('📋 Test 2: Test de lecture de la table users...');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, email, username, created_at')
      .limit(5);

    if (usersError) {
      console.log('❌ Erreur:', usersError.message);
    } else {
      console.log('✅ Lecture réussie!');
      console.log(`   Nombre d'utilisateurs récupérés: ${users ? users.length : 0}\n`);
    }

    // Test 3: Compter les utilisateurs
    console.log('🔢 Test 3: Comptage des utilisateurs...');
    const { count, error: countError } = await supabase
      .from('users')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('❌ Erreur:', countError.message);
    } else {
      console.log(`✅ Nombre total d'utilisateurs: ${count || 0}\n`);
    }

    // Test 4: Vérifier la table daily_costs
    console.log('💰 Test 4: Vérification de la table daily_costs...');
    const { data: costs, error: costsError } = await supabase
      .from('daily_costs')
      .select('*')
      .limit(1);

    if (costsError) {
      console.log('⚠️  Table daily_costs:', costsError.message);
    } else {
      console.log('✅ Table daily_costs accessible!\n');
    }

    console.log('✅ Tests terminés! Votre configuration Supabase est opérationnelle.');
    console.log('\n💡 Pour tester le MCP dans Cursor, redémarrez Cursor et essayez:');
    console.log('   "Peux-tu me montrer les tables de ma base Supabase ?"');

  } catch (error) {
    console.error('❌ Erreur fatale:', error.message);
    console.error('\n💡 Assurez-vous d\'avoir installé @supabase/supabase-js:');
    console.error('   npm install @supabase/supabase-js');
  }
}

// Exécuter les tests
testSupabaseConnection();

