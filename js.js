// Donn�es du quiz
const easyQuestions = [
  {
    question: "Que signifie HTML ?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "Home Tool Markup", correct: false },
      { text: "Hyperlink Text Module", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree un lien ?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Quel element HTML represente un paragraphe ?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<div>", correct: false },
      { text: "<span>", correct: false },
      { text: "<section>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML insere une image ?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<picture>", correct: false },
      { text: "<src>", correct: false },
      { text: "<figure>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente un titre principal ?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h2>", correct: false },
      { text: "<title>", correct: false },
      { text: "<header>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML ouvre un formulaire ?",
    answers: [
      { text: "<form>", correct: true },
      { text: "<input>", correct: false },
      { text: "<button>", correct: false },
      { text: "<label>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree une liste ordonnee ?",
    answers: [
      { text: "<ol>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente un bouton ?",
    answers: [
      { text: "<button>", correct: true },
      { text: "<input>", correct: false },
      { text: "<submit>", correct: false },
      { text: "<form>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML definit une cellule de tableau ?",
    answers: [
      { text: "<td>", correct: true },
      { text: "<tr>", correct: false },
      { text: "<th>", correct: false },
      { text: "<table>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente un champ multi-lignes ?",
    answers: [
      { text: "<textarea>", correct: true },
      { text: "<input>", correct: false },
      { text: "<text>", correct: false },
      { text: "<field>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree une liste non ordonnee ?",
    answers: [
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML donne le titre de la page ?",
    answers: [
      { text: "<title>", correct: true },
      { text: "<h1>", correct: false },
      { text: "<header>", correct: false },
      { text: "<head>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML insere un saut de ligne ?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<hr>", correct: false },
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML affiche du texte en gras ?",
    answers: [
      { text: "<strong>", correct: true },
      { text: "<b>", correct: false },
      { text: "<bold>", correct: false },
      { text: "<em>", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML definit le texte alternatif d'une image ?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "data", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree une zone de navigation ?",
    answers: [
      { text: "<nav>", correct: true },
      { text: "<menu>", correct: false },
      { text: "<navy>", correct: false },
      { text: "<section>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML definit le contenu principal ?",
    answers: [
      { text: "<main>", correct: true },
      { text: "<body>", correct: false },
      { text: "<section>", correct: false },
      { text: "<div>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML definit une liste de definitions ?",
    answers: [
      { text: "<dl>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<dt>", correct: false },
      { text: "<dd>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML montre du texte preformatte ?",
    answers: [
      { text: "<pre>", correct: true },
      { text: "<code>", correct: false },
      { text: "<text>", correct: false },
      { text: "<format>", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML ouvre un lien dans un nouvel onglet ?",
    answers: [
      { text: "target=\"_blank\"", correct: true },
      { text: "href=\"_blank\"", correct: false },
      { text: "rel=\"noopener\"", correct: false },
      { text: "type=\"blank\"", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML definit une cellule d'entete de tableau ?",
    answers: [
      { text: "<th>", correct: true },
      { text: "<td>", correct: false },
      { text: "<tr>", correct: false },
      { text: "<thead>", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML indique l'URL d'une image ?",
    answers: [
      { text: "src", correct: true },
      { text: "href", correct: false },
      { text: "data", correct: false },
      { text: "alt", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente un lien vers un script JavaScript ?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<link>", correct: false },
      { text: "<js>", correct: false },
      { text: "<source>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree un element audio ?",
    answers: [
      { text: "<audio>", correct: true },
      { text: "<sound>", correct: false },
      { text: "<media>", correct: false },
      { text: "<music>", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML definit le type d'un champ input ?",
    answers: [
      { text: "type", correct: true },
      { text: "name", correct: false },
      { text: "value", correct: false },
      { text: "id", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML affiche une ligne horizontale ?",
    answers: [
      { text: "<hr>", correct: true },
      { text: "<line>", correct: false },
      { text: "<break>", correct: false },
      { text: "<divider>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML definit une legende pour un champ de formulaire ?",
    answers: [
      { text: "<label>", correct: true },
      { text: "<legend>", correct: false },
      { text: "<caption>", correct: false },
      { text: "<title>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente une definition de terme ?",
    answers: [
      { text: "<dfn>", correct: true },
      { text: "<dt>", correct: false },
      { text: "<dd>", correct: false },
      { text: "<dl>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree une zone de saisie courte ?",
    answers: [
      { text: "<input>", correct: true },
      { text: "<textarea>", correct: false },
      { text: "<form>", correct: false },
      { text: "<field>", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML embed un fichier PDF ?",
    answers: [
      { text: "<embed>", correct: true },
      { text: "<iframe>", correct: false },
      { text: "<object>", correct: false },
      { text: "<pdf>", correct: false }
    ]
  }
];

const mediumQuestions = [
  {
    question: "Quel selecteur CSS cible tous les elements ?",
    answers: [
      { text: "*", correct: true },
      { text: ".all", correct: false },
      { text: "#all", correct: false },
      { text: "element", correct: false }
    ]
  },
  {
    question: "Quelle methode JS affiche un message dans la console ?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "alert()", correct: false },
      { text: "print()", correct: false },
      { text: "write()", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS change la taille de la police ?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "size", correct: false },
      { text: "font-weight", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML affiche un texte alternatif pour une image ?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "data", correct: false }
    ]
  },
  {
    question: "Quel evenement JS est declenche au clic sur un bouton ?",
    answers: [
      { text: "click", correct: true },
      { text: "hover", correct: false },
      { text: "change", correct: false },
      { text: "input", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML insere une video ?",
    answers: [
      { text: "<video>", correct: true },
      { text: "<movie>", correct: false },
      { text: "<media>", correct: false },
      { text: "<vid>", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS change la couleur de fond ?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "font-color", correct: false },
      { text: "bg", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS definit l'espacement entre les lignes ?",
    answers: [
      { text: "line-height", correct: true },
      { text: "letter-spacing", correct: false },
      { text: "word-spacing", correct: false },
      { text: "spacing", correct: false }
    ]
  },
  {
    question: "Quelle methode JS ajoute un element a la fin d'un tableau ?",
    answers: [
      { text: "push()", correct: true },
      { text: "append()", correct: false },
      { text: "add()", correct: false },
      { text: "insert()", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML ouvre un lien dans un nouvel onglet ?",
    answers: [
      { text: "target=\"_blank\"", correct: true },
      { text: "href=\"_blank\"", correct: false },
      { text: "rel=\"noopener\"", correct: false },
      { text: "type=\"blank\"", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible une classe ?",
    answers: [
      { text: ".classe", correct: true },
      { text: "#classe", correct: false },
      { text: "classe", correct: false },
      { text: "*classe", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS cree un contour autour d'un element ?",
    answers: [
      { text: "border", correct: true },
      { text: "outline", correct: false },
      { text: "frame", correct: false },
      { text: "stroke", correct: false }
    ]
  },
  {
    question: "Quel element HTML contient les metadonnees d'une page ?",
    answers: [
      { text: "<head>", correct: true },
      { text: "<body>", correct: false },
      { text: "<meta>", correct: false },
      { text: "<title>", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible un identifiant ?",
    answers: [
      { text: "#id", correct: true },
      { text: ".id", correct: false },
      { text: "id", correct: false },
      { text: "*id", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS ajoute de l'espace interieur ?",
    answers: [
      { text: "padding", correct: true },
      { text: "margin", correct: false },
      { text: "gap", correct: false },
      { text: "space", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML insere une feuille de style externe ?",
    answers: [
      { text: "<link>", correct: true },
      { text: "<style>", correct: false },
      { text: "<css>", correct: false },
      { text: "<script>", correct: false }
    ]
  },
  {
    question: "Quel evenement JS se produit quand une page est entierement chargee ?",
    answers: [
      { text: "load", correct: true },
      { text: "click", correct: false },
      { text: "submit", correct: false },
      { text: "focus", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS change le style d'un texte souligne ?",
    answers: [
      { text: "text-decoration", correct: true },
      { text: "text-style", correct: false },
      { text: "text-underline", correct: false },
      { text: "underline", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML definit le type d'un champ de saisie ?",
    answers: [
      { text: "type", correct: true },
      { text: "name", correct: false },
      { text: "value", correct: false },
      { text: "id", correct: false }
    ]
  },
  {
    question: "Quel objet JS represente la console du navigateur ?",
    answers: [
      { text: "console", correct: true },
      { text: "window", correct: false },
      { text: "document", correct: false },
      { text: "screen", correct: false }
    ]
  },
  {
    question: "Quelle fonction CSS applique un degrade de couleurs ?",
    answers: [
      { text: "linear-gradient()", correct: true },
      { text: "gradient()", correct: false },
      { text: "color-gradient()", correct: false },
      { text: "bg-gradient()", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML indique l'URL d'un lien ?",
    answers: [
      { text: "href", correct: true },
      { text: "src", correct: false },
      { text: "link", correct: false },
      { text: "url", correct: false }
    ]
  },
  {
    question: "Comment ecrire un commentaire en JS ?",
    answers: [
      { text: "// commentaire", correct: true },
      { text: "<!-- commentaire -->", correct: false },
      { text: "/* commentaire */", correct: false },
      { text: "** commentaire", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS force l'affichage en bloc d'un element inline ?",
    answers: [
      { text: "display", correct: true },
      { text: "position", correct: false },
      { text: "float", correct: false },
      { text: "visibility", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML impose un champ obligatoire ?",
    answers: [
      { text: "required", correct: true },
      { text: "readonly", correct: false },
      { text: "disabled", correct: false },
      { text: "placeholder", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML pointe vers un fichier CSS externe ?",
    answers: [
      { text: "<link>", correct: true },
      { text: "<style>", correct: false },
      { text: "<css>", correct: false },
      { text: "<script>", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS transforme un element ?",
    answers: [
      { text: "transform", correct: true },
      { text: "translate", correct: false },
      { text: "move", correct: false },
      { text: "shift", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible le premier element enfant ?",
    answers: [
      { text: ":first-child", correct: true },
      { text: ":last-child", correct: false },
      { text: ".first", correct: false },
      { text: "#first", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML embed une video externe ?",
    answers: [
      { text: "<iframe>", correct: true },
      { text: "<video>", correct: false },
      { text: "<embed>", correct: false },
      { text: "<object>", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS fixe une largeur maximale ?",
    answers: [
      { text: "max-width", correct: true },
      { text: "width", correct: false },
      { text: "min-width", correct: false },
      { text: "size", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML indique le jeu de caracteres ?",
    answers: [
      { text: "charset", correct: true },
      { text: "encoding", correct: false },
      { text: "type", correct: false },
      { text: "lang", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML permet d'afficher des donnees tabulaires ?",
    answers: [
      { text: "<table>", correct: true },
      { text: "<grid>", correct: false },
      { text: "<list>", correct: false },
      { text: "<data>", correct: false }
    ]
  }
];

const hardQuestions = [
  {
    question: "Quelle fonction JS transforme un tableau en chaine ?",
    answers: [
      { text: "join()", correct: true },
      { text: "split()", correct: false },
      { text: "concat()", correct: false },
      { text: "map()", correct: false }
    ]
  },
  {
    question: "Quelle fonction selectionne un element par son identifiant ?",
    answers: [
      { text: "document.getElementById()", correct: true },
      { text: "document.querySelectorAll()", correct: false },
      { text: "document.getElementsByClassName()", correct: false },
      { text: "document.querySelectorAll('#id')", correct: false }
    ]
  },
  {
    question: "Quel mot-cle JS declare une constante ?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML represente un paragraphe ?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<span>", correct: false },
      { text: "<div>", correct: false },
      { text: "<section>", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS change la couleur de fond ?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "background", correct: false },
      { text: "bgcolor", correct: false }
    ]
  },
  {
    question: "Quel evenement JS est declenche lorsque la page est chargee ?",
    answers: [
      { text: "load", correct: true },
      { text: "click", correct: false },
      { text: "ready", correct: false },
      { text: "hover", correct: false }
    ]
  },
  {
    question: "Quelle methode supprime le dernier element d'un tableau ?",
    answers: [
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "splice()", correct: false },
      { text: "slice()", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML definit l'alternative d'une image ?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "href", correct: false }
    ]
  },
  {
    question: "Quelle methode retourne le premier element correspondant a un selecteur ?",
    answers: [
      { text: "document.querySelector()", correct: true },
      { text: "document.querySelectorAll()", correct: false },
      { text: "document.getElementsByTagName()", correct: false },
      { text: "document.getElementById()", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML definit l'adresse d'un lien ?",
    answers: [
      { text: "href", correct: true },
      { text: "src", correct: false },
      { text: "link", correct: false },
      { text: "url", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible un identifiant ?",
    answers: [
      { text: "#id", correct: true },
      { text: ".id", correct: false },
      { text: "id", correct: false },
      { text: "*id", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS rend un element invisible sans le supprimer du flux ?",
    answers: [
      { text: "visibility", correct: true },
      { text: "display", correct: false },
      { text: "opacity", correct: false },
      { text: "hidden", correct: false }
    ]
  },
  {
    question: "Quel operateur JS compare sans conversion de type ?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!==", correct: false }
    ]
  },
  {
    question: "Comment ecrire une fonction flechee en JS ?",
    answers: [
      { text: "() => {}", correct: true },
      { text: "function() {}", correct: false },
      { text: "fn => {}", correct: false },
      { text: "arrow() {}", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS definit la taille de police en rem ?",
    answers: [
      { text: "font-size", correct: true },
      { text: "font-weight", correct: false },
      { text: "line-height", correct: false },
      { text: "text-size", correct: false }
    ]
  },
  {
    question: "Quelle methode JS transforme une chaine JSON en objet ?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.toObject()", correct: false }
    ]
  },
  {
    question: "Quel evenement JS se produit lorsqu'un formulaire est soumis ?",
    answers: [
      { text: "submit", correct: true },
      { text: "click", correct: false },
      { text: "change", correct: false },
      { text: "input", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS utilise des variables personnalisees ?",
    answers: [
      { text: "var()", correct: true },
      { text: "--", correct: false },
      { text: "css()", correct: false },
      { text: "custom()", correct: false }
    ]
  },
  {
    question: "Quel mot-cle JS cree une variable reassignable ?",
    answers: [
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "var", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Quel objet JS represente la console du navigateur ?",
    answers: [
      { text: "console", correct: true },
      { text: "window", correct: false },
      { text: "document", correct: false },
      { text: "screen", correct: false }
    ]
  },
  {
    question: "Quelle methode JS convertit un objet en JSON ?",
    answers: [
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.parse()", correct: false },
      { text: "JSON.toString()", correct: false },
      { text: "JSON.object()", correct: false }
    ]
  },
  {
    question: "Quelle methode JS boucle sur un tableau sans le modifier ?",
    answers: [
      { text: "forEach()", correct: true },
      { text: "map()", correct: false },
      { text: "filter()", correct: false },
      { text: "reduce()", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible tous les enfants directs ?",
    answers: [
      { text: ">", correct: true },
      { text: "+", correct: false },
      { text: "~", correct: false },
      { text: "^", correct: false }
    ]
  },
  {
    question: "Quel attribut HTML permet de charger un script de facon asynchrone ?",
    answers: [
      { text: "async", correct: true },
      { text: "defer", correct: false },
      { text: "load", correct: false },
      { text: "lazy", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML cree des onglets dans un formulaire ?",
    answers: [
      { text: "<fieldset>", correct: true },
      { text: "<section>", correct: false },
      { text: "<div>", correct: false },
      { text: "<tab>", correct: false }
    ]
  },
  {
    question: "Quelle methode JS remplace un element par un autre ?",
    answers: [
      { text: "replaceChild()", correct: true },
      { text: "removeChild()", correct: false },
      { text: "appendChild()", correct: false },
      { text: "insertBefore()", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible un element avec un attribut data ?",
    answers: [
      { text: "[data-attr]", correct: true },
      { text: ".data-attr", correct: false },
      { text: "#data-attr", correct: false },
      { text: "data-attr", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS change la transparence d'un element ?",
    answers: [
      { text: "opacity", correct: true },
      { text: "visibility", correct: false },
      { text: "display", correct: false },
      { text: "transparent", correct: false }
    ]
  },
  {
    question: "Quel evenement JS se declenche quand un champ input change de valeur ?",
    answers: [
      { text: "change", correct: true },
      { text: "input", correct: false },
      { text: "click", correct: false },
      { text: "focus", correct: false }
    ]
  },
  {
    question: "Quel selecteur CSS cible un element avec la classe active et button ?",
    answers: [
      { text: ".active.button", correct: true },
      { text: "active.button", correct: false },
      { text: "#active.button", correct: false },
      { text: "button.active", correct: false }
    ]
  },
  {
    question: "Quelle balise HTML inserte un element audio avec controles ?",
    answers: [
      { text: "<audio controls>", correct: true },
      { text: "<sound controls>", correct: false },
      { text: "<music controls>", correct: false },
      { text: "<media controls>", correct: false }
    ]
  },
  {
    question: "Quelle methode JS transforme un tableau en string avec un separateur ?",
    answers: [
      { text: "join(',')", correct: true },
      { text: "split(',')", correct: false },
      { text: "concat(',')", correct: false },
      { text: "toString()", correct: false }
    ]
  },
  {
    question: "Quel mot-cle JS declare une variable globale avec portee de fonction ?",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "global", correct: false }
    ]
  },
  {
    question: "Quelle propriete CSS aligne verticalement le texte dans un element ?",
    answers: [
      { text: "vertical-align", correct: true },
      { text: "text-align", correct: false },
      { text: "align-items", correct: false },
      { text: "line-height", correct: false }
    ]
  },
  {
    question: "Quel evenement JS se declenche lorsque l'utilisateur fait defiler la page ?",
    answers: [
      { text: "scroll", correct: true },
      { text: "wheel", correct: false },
      { text: "resize", correct: false },
      { text: "mousemove", correct: false }
    ]
  }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
let selectedLevel = null;
let quizStarted = false;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const scoreText = document.getElementById("score");
const questionNumberText = document.getElementById("question-number");
const questionTotalText = document.getElementById("question-total");
const message = document.getElementById("message");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("timer");
const levelButtons = document.querySelectorAll(".level-btn");

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function resetGameState() {
  clearInterval(timer);
  timeLeft = 20;
  timerDisplay.textContent = timeLeft;
  score = 0;
  scoreText.textContent = score;
  message.textContent = "";
  nextButton.disabled = true;
  restartButton.hidden = true;
  questionNumberText.textContent = "0";
  questionTotalText.textContent = "0";
}

function selectLevel(level) {
  selectedLevel = level;
  startQuiz();
}

function startQuiz() {
  quizStarted = true;
  resetGameState();

  if (selectedLevel === "easy") {
    questions = shuffle(easyQuestions);
  } else if (selectedLevel === "medium") {
    questions = shuffle(mediumQuestions);
  } else {
    questions = shuffle(hardQuestions);
  }

  questionTotalText.textContent = questions.length;
  currentQuestionIndex = 0;
  showQuestion();
}

function startTimer() {
  clearInterval(timer);
  timerDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeExpired();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function handleTimeExpired() {
  const optionButtons = optionsContainer.querySelectorAll("button");

  optionButtons.forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
  });

  quizStarted = false;
  message.textContent = "Temps ecoule ! Clique sur Suivante.";
  nextButton.disabled = false;
  nextButton.textContent = currentQuestionIndex < questions.length - 1 ? "Suivante" : "Terminer";
}

function showQuestion() {
  stopTimer();
  timeLeft = 20;
  startTimer();

  const currentQuestion = questions[currentQuestionIndex];

  questionNumberText.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  const shuffledAnswers = shuffle(currentQuestion.answers);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = answer.text;
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (!quizStarted) {
    return;
  }

  stopTimer();

  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct === "true";
  const optionButtons = optionsContainer.querySelectorAll("button");

  optionButtons.forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
  });

  if (correct) {
    score += 1;
    scoreText.textContent = score;
    message.textContent = "Bonne reponse !";
  } else {
    message.textContent = "Mauvaise reponse.";
  }

  quizStarted = false;
  nextButton.disabled = false;
  nextButton.textContent = currentQuestionIndex < questions.length - 1 ? "Suivante" : "Terminer";
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    quizStarted = true;
    nextButton.disabled = true;
    message.textContent = "";
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  stopTimer();
  quizStarted = false;

  questionText.textContent = `Quiz termine ! Tu as obtenu ${score} / ${questions.length}.`;
  optionsContainer.innerHTML = "";
  message.textContent = "Bravo ! Clique sur Rejouer pour recommencer.";
  restartButton.hidden = false;
  nextButton.disabled = true;
}

function restartQuiz() {
  if (selectedLevel) {
    startQuiz();
  }
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => selectLevel(button.dataset.level));
});

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);
