# JGProductions Portfolio

Site vitrine professionnel de **Jason Gingras / JGProductions**, concu pour presenter une offre de services en developpement web, design UX/UI, solutions d'intelligence artificielle et creation multimedia.

Le projet est un site statique HTML/CSS/JavaScript, sans dependance de compilation. Il peut etre ouvert directement dans un navigateur ou depose sur un hebergement statique comme GitHub Pages, Netlify, Vercel, Cloudflare Pages ou un serveur web classique.

---

## Sommaire

- [Vue d'ensemble](#vue-densemble)
- [Objectifs du projet](#objectifs-du-projet)
- [Fonctionnalites principales](#fonctionnalites-principales)
- [Arborescence](#arborescence)
- [Poids des fichiers](#poids-des-fichiers)
- [Pages du site](#pages-du-site)
- [Architecture technique](#architecture-technique)
- [Design system](#design-system)
- [JavaScript](#javascript)
- [SEO et metadonnees](#seo-et-metadonnees)
- [Accessibilite](#accessibilite)
- [Performance](#performance)
- [Installation et utilisation](#installation-et-utilisation)
- [Deploiement](#deploiement)
- [Maintenance](#maintenance)
- [Feuille de route](#feuille-de-route)

---

## Vue d'ensemble

| Element | Information |
| --- | --- |
| Nom du projet | `jgprod-portfolio` |
| Marque | JGProductions |
| Auteur | Jason Gingras |
| Type | Portfolio / site vitrine professionnel |
| Langue principale | Francais |
| Technologie | HTML5, CSS3, JavaScript natif |
| Architecture | Site statique multi-pages |
| Branche Git | `main` |
| Framework | Aucun |
| Build step | Aucun |
| Backend | Aucun |
| Base de donnees | Aucune |
| Public cible | Clients, entreprises, entrepreneurs, partenaires et prospects |

JGProductions est positionne comme un studio numerique polyvalent capable de livrer des experiences web claires, modernes et orientees resultat. Le site met l'accent sur la confiance, la lisibilite de l'offre, la facilite de prise de contact et une presentation soignee de l'identite de marque.

---

## Objectifs du projet

1. Presenter Jason Gingras et JGProductions de facon professionnelle.
2. Expliquer clairement les domaines de services : developpement web, design UX/UI, intelligence artificielle et multimedia.
3. Mettre en avant une offre tarifaire simple et comprehensible.
4. Faciliter la conversion avec des appels a l'action visibles.
5. Fournir une experience responsive utilisable sur mobile, tablette et desktop.
6. Garder une base technique legere, facile a maintenir et deployable partout.

---

## Fonctionnalites principales

- Page d'accueil avec hero, presentation, services, tarifs et appel a l'action.
- Page "A propos" avec profil, positionnement, statistiques et competences.
- Page "Tarifs" avec trois offres structurees : Basique, Standard et Entreprise.
- Page "Contact" avec coordonnees, formulaire et validation cote client.
- Navigation principale reutilisee sur les pages.
- Menu mobile avec bouton hamburger et attribut `aria-expanded`.
- Bouton "retour en haut" visible apres defilement.
- Defilement fluide vers les ancres internes.
- Header sticky avec effet visuel au scroll.
- Styles responsive centralises dans un fichier CSS unique.
- Metadonnees SEO et Open Graph sur la page d'accueil.
- Favicon et logo de marque integres.

---

## Arborescence

```text
jgprod-portfolio/
|-- .gitignore
|-- README.md
|-- about.html
|-- contact.html
|-- index.html
|-- projects.html
|-- JGProductions_master_vector.svg
`-- assets/
    |-- css/
    |   `-- style.css
    |-- images/
    |   `-- favicon.png
    `-- js/
        `-- main.js
```

### Role des dossiers

| Dossier | Role |
| --- | --- |
| `/` | Contient les pages HTML, la documentation et les fichiers racine du projet. |
| `assets/css/` | Contient la feuille de style globale du site. |
| `assets/js/` | Contient les comportements interactifs cote client. |
| `assets/images/` | Contient les images utilisees par l'interface et l'identite visuelle. |

---

## Poids des fichiers

Mesure effectuee sur les fichiers du projet hors dossier `.git`.

| Fichier | Poids | Lignes | Role |
| --- | ---: | ---: | --- |
| `.gitignore` | 0.29 KB | 27 | Exclusions Git. |
| `about.html` | 7.08 KB | 128 | Page de presentation du fondateur et des competences. |
| `assets/css/style.css` | 16.01 KB | 807 | Feuille de style globale, responsive design et composants visuels. |
| `assets/images/favicon.png` | 532.66 KB | N/A | Image de marque utilisee comme favicon et logo visuel. |
| `assets/js/main.js` | 3.68 KB | 94 | Interactions : menu mobile, scroll, bouton retour, formulaire. |
| `contact.html` | 8.05 KB | 138 | Page de contact et formulaire. |
| `index.html` | 13.73 KB | 185 | Page d'accueil principale. |
| `JGProductions_master_vector.svg` | 2.22 KB | 1 | Logo vectoriel maitre. |
| `projects.html` | 8.56 KB | 124 | Page tarifs / offres. |
| `README.md` | Variable | Variable | Documentation du projet. |

### Synthese du poids

| Mesure | Valeur |
| --- | ---: |
| Nombre de fichiers suivis dans l'inventaire | 10 |
| Poids total avant enrichissement du README | 606,571 octets |
| Poids total avant enrichissement du README | 592.35 KB |
| Plus gros fichier | `assets/images/favicon.png` |
| Fichier applicatif le plus volumineux | `assets/css/style.css` |

Le fichier le plus lourd est l'image `favicon.png`. Pour un site de production, une optimisation d'image peut reduire le poids global sans changer l'architecture du projet.

---

## Pages du site

### `index.html`

Page principale du site. Elle concentre les elements de conversion les plus importants.

Sections principales :

- Header avec logo, navigation et menu mobile.
- Hero centre sur Jason Gingras et JGProductions.
- Services : developpement web, UX/UI et intelligence artificielle.
- Tarifs : Basique, Standard et Entreprise.
- CTA final invitant a lancer un projet.
- Footer avec liens rapides et coordonnees.

Elements professionnels presents :

- Balises SEO de base.
- Balises Open Graph.
- Balises Twitter Card.
- Lien canonique implicite via `og:url`.
- Appels a l'action visibles.
- Structure semantique avec `header`, `main`, `section`, `article` et `footer`.

### `about.html`

Page institutionnelle de presentation.

Contenu principal :

- Presentation de Jason Gingras.
- Positionnement de JGProductions.
- Statistiques de confiance.
- Competences avec barres de progression.
- Footer adapte a la page.

Cette page renforce la credibilite du site en expliquant l'approche humaine, strategique et multidisciplinaire du studio.

### `projects.html`

Page dediee aux tarifs, meme si son nom technique reste `projects.html`.

Contenu principal :

- Offre Basique a 499 $ / projet.
- Offre Standard a 1299 $ / projet.
- Offre Entreprise a partir de 2499 $ / projet.
- Differenciation visuelle de l'offre populaire.
- Liens directs vers la page contact.

Recommandation de maintenance : si cette page reste exclusivement dediee aux tarifs, le fichier pourrait eventuellement etre renomme `pricing.html` ou `tarifs.html`, avec mise a jour des liens internes.

### `contact.html`

Page de conversion et de prise de contact.

Contenu principal :

- Coordonnees professionnelles.
- Lien courriel `mailto:`.
- Lien telephone `tel:`.
- Localisation : Quebec, Canada.
- Formulaire avec champs nom, courriel, sujet et message.
- Message de confirmation ou d'erreur gere par JavaScript.

Note importante : le formulaire est actuellement simule cote client. Il n'envoie pas encore les donnees vers une API, un service courriel ou un backend.

---

## Architecture technique

Le projet suit une architecture volontairement simple :

```text
HTML = structure et contenu
CSS  = apparence, mise en page, responsive design
JS   = interactions legeres cote client
```

### Choix techniques

| Choix | Raison |
| --- | --- |
| HTML statique | Chargement rapide, maintenance simple, hebergement facile. |
| CSS global unique | Centralisation du design et coherence visuelle. |
| JavaScript natif | Pas de dependance externe pour les interactions simples. |
| Google Fonts | Typographie Inter moderne et lisible. |
| SVG inline pour icones | Controle direct du rendu et aucune dependance d'icones. |
| Assets locaux | Meilleur controle sur les fichiers de marque. |

### Dependances externes

| Ressource | Utilisation |
| --- | --- |
| Google Fonts | Chargement de la police `Inter`. |
| Fonts static Google CDN | Fichiers de police associes. |

Aucune dependance npm, aucun bundler et aucun gestionnaire de paquets ne sont requis.

---

## Design system

Le design est pilote par des variables CSS definies dans `:root`.

### Couleurs principales

| Variable | Valeur | Usage |
| --- | --- | --- |
| `--primary` | `#0066ff` | Couleur de marque, liens actifs, boutons principaux. |
| `--primary-hover` | `#0055dd` | Etat hover des boutons principaux. |
| `--primary-light` | `rgba(0, 102, 255, 0.12)` | Effets lumineux subtils. |
| `--bg-dark` | `#111111` | Fond principal. |
| `--bg-darker` | `#0a0a0a` | Fond secondaire plus sombre. |
| `--bg-subtle` | `#141416` | Sections nuancees. |
| `--bg-card` | `rgba(39, 39, 42, 0.52)` | Cartes et panneaux. |
| `--text-light` | `#f3f4f6` | Texte principal clair. |
| `--text-gray` | `#9ca3af` | Texte secondaire. |

### Typographie

| Element | Approche |
| --- | --- |
| Police | `Inter`, sans-serif |
| Titres | Gras, tailles responsives via `clamp()` |
| Paragraphes | Couleur secondaire et hauteur de ligne confortable |
| Boutons | Font inherited, poids fort, hauteur minimale constante |

### Composants visuels

- Header sticky.
- Logo texte + image.
- Navigation desktop.
- Navigation mobile.
- Hero.
- Cartes de services.
- Cartes tarifaires.
- Badge "Populaire".
- Boutons primaires et secondaires.
- Formulaire de contact.
- Barres de competences.
- Footer.
- Bouton retour en haut.

---

## JavaScript

Le fichier `assets/js/main.js` contient les comportements suivants :

| Fonction | Description |
| --- | --- |
| Menu mobile | Ouvre et ferme la navigation mobile, met a jour `aria-expanded`. |
| Fermeture automatique | Ferme le menu lorsqu'un lien de navigation est clique. |
| Header au scroll | Ajoute la classe `scrolled` lorsque la page depasse 80 px. |
| Retour en haut | Affiche le bouton apres 500 px de scroll et remonte en douceur. |
| Smooth scroll | Gere les liens d'ancre internes. |
| Validation formulaire | Verifie nom, courriel et message. |
| Validation email | Utilise une expression reguliere simple. |
| Message utilisateur | Affiche un message de succes ou d'erreur. |

### Limite actuelle du formulaire

Le formulaire ne transmet pas les donnees. Le commentaire dans le code indique explicitement que l'envoi est simule et devra etre remplace par un appel API reel si necessaire.

Options possibles pour une version production :

- Formspree.
- Netlify Forms.
- EmailJS.
- Backend Node/PHP.
- Endpoint serverless.
- CRM ou outil d'automatisation.

---

## SEO et metadonnees

La page d'accueil contient deja plusieurs balises importantes :

- `title`
- `meta description`
- `meta keywords`
- `meta author`
- Open Graph : type, url, title, description, image
- Twitter Card : card, url, title, description, image
- `viewport`
- `charset`

### Recommandations SEO

1. Ajouter des balises Open Graph coherentes sur toutes les pages.
2. Verifier que les images `og-image.jpg` et `twitter-image.jpg` existent ou mettre a jour les URLs.
3. Ajouter un fichier `robots.txt`.
4. Ajouter un fichier `sitemap.xml`.
5. Ajouter une URL canonique sur chaque page.
6. Harmoniser le nom technique de `projects.html` si la page represente uniquement les tarifs.
7. Ajouter des donnees structurees JSON-LD pour une entreprise locale ou un service professionnel.

---

## Accessibilite

Elements deja presents :

- Langue du document : `html lang="fr"`.
- Lien d'evitement vers le contenu principal sur la page d'accueil.
- Navigation avec `aria-label`.
- Bouton mobile avec `aria-expanded`.
- Boutons et liens focusables.
- Styles `:focus-visible`.
- Structure semantique claire.
- Labels explicites pour les champs du formulaire.
- Textes alternatifs ou images decoratives avec `alt=""` selon le contexte.

Ameliorations possibles :

1. Ajouter le lien d'evitement sur toutes les pages, pas seulement l'accueil.
2. Verifier les contrastes finaux avec un outil WCAG.
3. Ajouter des labels plus descriptifs sur certains liens de CTA si necessaire.
4. Tester la navigation clavier complete.
5. Tester avec lecteur d'ecran.

---

## Performance

Points favorables :

- Site statique.
- Peu de JavaScript.
- Aucun framework lourd.
- CSS unique.
- Structure HTML simple.
- Pas de requetes API au chargement.

Points a surveiller :

- `assets/images/favicon.png` pese environ 532.66 KB, ce qui est eleve pour un favicon/logo.
- Les icones SVG inline repetent du code dans plusieurs pages.
- Google Fonts ajoute des requetes externes.
- Les images Open Graph referencees doivent exister pour eviter des liens sociaux incoherents.

Optimisations recommandees :

1. Generer un favicon leger en 32x32 et 192x192.
2. Ajouter une image logo optimisee separee du favicon si le logo doit etre affiche en grand.
3. Minifier CSS et JS pour la production.
4. Activer la compression Brotli ou Gzip sur l'hebergement.
5. Ajouter une strategie de cache pour les assets.
6. Eventuellement factoriser les icones SVG dans un sprite ou une librairie locale.

---

## Installation et utilisation

### Prerequis

Aucun outil obligatoire. Un navigateur moderne suffit.

Navigateurs recommandes :

- Chrome
- Edge
- Firefox
- Safari

### Ouvrir localement

Option simple :

```text
Double-cliquer sur index.html
```

Option avec serveur local :

```powershell
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

### Modifier le contenu

| Besoin | Fichier a modifier |
| --- | --- |
| Texte de l'accueil | `index.html` |
| Informations du fondateur | `about.html` |
| Tarifs et offres | `projects.html` |
| Coordonnees et formulaire | `contact.html` |
| Couleurs, espacements, responsive | `assets/css/style.css` |
| Interactions | `assets/js/main.js` |
| Logo / favicon | `assets/images/favicon.png` ou `JGProductions_master_vector.svg` |

---

## Deploiement

Le projet peut etre deploye sur n'importe quel hebergeur statique.

### GitHub Pages

1. Pousser le depot sur GitHub.
2. Ouvrir les parametres du depot.
3. Activer GitHub Pages.
4. Selectionner la branche `main`.
5. Utiliser la racine du projet comme source.

### Netlify

1. Importer le depot.
2. Laisser la commande de build vide.
3. Definir le dossier de publication sur `/`.
4. Deployer.

### Vercel

1. Importer le depot.
2. Choisir "Other" ou configuration statique.
3. Ne pas definir de build command.
4. Publier depuis la racine.

### Serveur web classique

Copier tous les fichiers a la racine du dossier public du serveur :

```text
public_html/
|-- index.html
|-- about.html
|-- projects.html
|-- contact.html
`-- assets/
```

---

## Maintenance

### Checklist avant publication

- Verifier tous les liens internes.
- Tester les pages en mobile et desktop.
- Tester le menu mobile.
- Tester le bouton retour en haut.
- Tester la validation du formulaire.
- Verifier les titres et descriptions SEO.
- Optimiser les images.
- Confirmer les coordonnees.
- Remplacer les numeros ou emails temporaires si necessaire.
- Ajouter un vrai service d'envoi pour le formulaire si le site est mis en production.

### Checklist apres modification de contenu

- Relire les textes en francais.
- Verifier la coherence des tarifs.
- Confirmer que les CTA pointent vers `contact.html`.
- Tester que les ancres de `index.html` fonctionnent.
- Verifier que le rendu mobile ne deborde pas.

### Conventions recommandees

- Garder les noms de fichiers en minuscules.
- Eviter les espaces dans les noms de fichiers.
- Centraliser les couleurs dans `:root`.
- Ne pas dupliquer inutilement les styles.
- Documenter les changements importants dans ce README.
- Optimiser toute image ajoutee avant de la publier.

---

## Feuille de route

Ameliorations possibles pour faire evoluer le projet :

- Ajouter un vrai systeme d'envoi de formulaire.
- Ajouter une page portfolio avec projets reels.
- Ajouter des temoignages clients.
- Ajouter `robots.txt` et `sitemap.xml`.
- Ajouter des donnees structurees JSON-LD.
- Optimiser les assets images.
- Ajouter des captures d'ecran du site dans la documentation.
- Ajouter une section "Processus de travail".
- Ajouter une page de politique de confidentialite si le formulaire collecte des donnees.
- Ajouter des tests Lighthouse et documenter les scores.

---

## Licence et droits

Sauf mention contraire, le contenu, l'identite visuelle et les elements de marque de ce projet appartiennent a **Jason Gingras / JGProductions**.

Avant toute reutilisation publique, copie commerciale ou redistribution, verifier les droits applicables avec le proprietaire du projet.

---

## Contact

| Canal | Information |
| --- | --- |
| Courriel | `jgproductions_inc@hotmail.com` |
| Telephone | `(418) 555-0123` |
| Localisation | Quebec, Canada |

---

## Resume executif

`jgprod-portfolio` est une base de site vitrine claire, rapide et maintenable. Sa structure statique limite la complexite technique, tandis que son contenu met en avant les services, les tarifs et la prise de contact. Les prochaines priorites professionnelles devraient etre l'optimisation des images, l'ajout d'un vrai traitement de formulaire et le renforcement SEO sur toutes les pages.
