# Portfolio de Madeleine Rezki

Portfolio français et anglais. Ouvre `index.html` dans ton navigateur pour le consulter et `gestion.html` pour préparer tes modifications.

Les six instrumentaux de l’accueil fonctionnent aussi en ouvrant `index.html`. Tu peux également utiliser `Ouvrir le portfolio.cmd` pour lancer un aperçu via un serveur local.

## Modifier le contenu

1. Ouvre `gestion.html`, choisis une rubrique et renseigne les champs FR et EN. Pour une expérience, utilise le champ date, organisme ou format pour indiquer l’entreprise et la période.
2. Pour les formations, exporte les diapositives en images WebP filigranées, numérotées `page-1.webp`, `page-2.webp`, etc. Place-les dans un sous-dossier de `supports/` et indique ce dossier et le nombre de diapositives dans l’éditeur. Garde les fichiers sources hors des fichiers publiés.
3. Télécharge `profil.js` et remplace le fichier du projet. Recharge le portfolio pour vérifier les modifications avant de les mettre sur GitHub.

Le brouillon appartient au navigateur utilisé. Le bouton de réinitialisation recharge le contenu du fichier courant. Si ton navigateur limite le stockage avec des fichiers ouverts directement, exporte ton travail avant de fermer l’éditeur.

Tu peux conserver `gestion.html` et `gestion.js` sur ton ordinateur lors de l’envoi à GitHub. Même si ces fichiers sont publiés, les visiteurs peuvent seulement modifier leur brouillon local. Seules les personnes ayant un accès en écriture au dépôt peuvent publier un nouveau `profil.js`.

## Publier sur GitHub Pages

1. Place toutes les pages HTML du portfolio, `style.css`, `theme.js`, `portfolio.js`, `profil.js`, `.nojekyll` et les dossiers `assets/` et `supports/` dans un dépôt GitHub. L’espace de gestion peut rester sur ton ordinateur.
2. Dans **Settings → Pages**, sélectionne **Deploy from a branch**, la branche contenant tes fichiers et **/ (root)**. Enregistre.
3. Ouvre l’adresse indiquée dans Pages. Vérifie les liens, les pièces jointes et le bouton **EN**.

[Documentation de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Activer les recommandations publiques

Le lien e-mail fonctionne dès que l’adresse de contact est renseignée. Pour activer les commentaires publics sur le portfolio :

1. Dans un dépôt public, active **Discussions** et installe [l’application Giscus](https://github.com/apps/giscus).
2. Ouvre [giscus.app](https://giscus.app/), indique le dépôt et choisis la catégorie qui recevra les recommandations.
3. Dans la rubrique **Commentaires GitHub** de `gestion.html`, reporte les quatre valeurs du script généré : `data-repo` → `repo`, `data-repo-id` → `repoId`, `data-category` → `category` et `data-category-id` → `categoryId`.
4. Exporte et publie `profil.js`. Les versions FR et EN utilisent la même discussion. Les visiteurs peuvent commenter avec leur compte GitHub, et tu peux modérer les messages depuis **Discussions**.

## Ajouter de la musique

Dans Spotify, ouvre une playlist publique, un album ou un morceau et sélectionne **Partager → Copier le lien**. Colle le lien `open.spotify.com` dans la rubrique **Musique Spotify** de l’éditeur, puis exporte et publie `profil.js`. Le lecteur apparaît dans **À écouter**. Chaque visiteur lance la lecture depuis le lecteur Spotify.

[Documentation du lecteur Spotify](https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed)

## Recevoir les messages

Les formulaires de recrutement et de recommandation utilisent FormSubmit et envoient les messages à `rezkimadeleine@gmail.com`. Le premier envoi depuis le site servi en HTTP(S) déclenche un e-mail d’activation à confirmer dans cette boîte (vérifier aussi les indésirables). Sans activation, la réception n’est pas opérationnelle. Le service affiche ensuite sa page de confirmation. Les recommandations reçues par e-mail ne sont pas publiées automatiquement. La messagerie du visiteur reste un lien de secours. Un test de réception réel reste à effectuer après activation.
