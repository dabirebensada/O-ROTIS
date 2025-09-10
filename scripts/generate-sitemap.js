#!/usr/bin/env node

/**
 * Script de génération automatique du sitemap.xml
 * Pour le site O'ROTIS - orotisbf.com
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration du site
const SITE_URL = 'https://orotisbf.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Pages du site avec leurs métadonnées
const PAGES = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0',
    description: 'Page d\'accueil O\'ROTIS'
  },
  {
    path: '/produits',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9',
    description: 'Page des produits O\'ROTIS'
  },
  {
    path: '/a-propos',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7',
    description: 'À propos d\'O\'ROTIS'
  },
  {
    path: '/conseils',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6',
    description: 'Conseils culinaires O\'ROTIS'
  },
  {
    path: '/commande-succes',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3',
    description: 'Page de confirmation de commande'
  }
];

/**
 * Génère le contenu XML du sitemap
 */
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  let urls = '';
  
  PAGES.forEach(page => {
    urls += `  <!-- ${page.description} -->\n`;
    urls += `  <url>\n`;
    urls += `    <loc>${SITE_URL}${page.path}</loc>\n`;
    urls += `    <lastmod>${page.lastmod}</lastmod>\n`;
    urls += `    <changefreq>${page.changefreq}</changefreq>\n`;
    urls += `    <priority>${page.priority}</priority>\n`;
    urls += `  </url>\n\n`;
  });
  
  return xmlHeader + urlsetOpen + urls + urlsetClose;
}

/**
 * Écrit le sitemap dans le fichier
 */
function writeSitemap() {
  try {
    const sitemapContent = generateSitemapXML();
    
    // Créer le dossier public s'il n'existe pas
    const publicDir = path.dirname(SITEMAP_PATH);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Écrire le fichier
    fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
    
    console.log('✅ Sitemap généré avec succès !');
    console.log(`📁 Fichier créé : ${SITEMAP_PATH}`);
    console.log(`🌐 URL accessible : ${SITE_URL}/sitemap.xml`);
    console.log(`📊 Nombre de pages : ${PAGES.length}`);
    
    // Afficher les pages incluses
    console.log('\n📋 Pages incluses :');
    PAGES.forEach(page => {
      console.log(`   • ${SITE_URL}${page.path} (priorité: ${page.priority})`);
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap :', error.message);
    process.exit(1);
  }
}

/**
 * Fonction principale
 */
function main() {
  console.log('🚀 Génération du sitemap pour O\'ROTIS...\n');
  writeSitemap();
  console.log('\n🎉 Sitemap prêt pour Google Search Console !');
}

// Exécuter le script
main();
