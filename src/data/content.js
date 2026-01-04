// ==========================================
// src/data/content.js
// PARTIE 1 : Module 0.1.1 à 0.1.5
// ==========================================
const content = {
  
  // ========================================
  // 0.1.1 - LE NOM
  // ========================================
  "0.1.1": {
    title: "0.1.1 - Le nom",
    theory: `
      <h3>LE NOM (ou substantif)</h3>
      
      <p><strong>Définition simple :</strong> Le nom désigne une réalité — une personne, un animal, une chose, un lieu, une idée.</p>
      
      <p><strong>Analogie :</strong> Imagine que tu veux parler du monde qui t'entoure. Les noms sont comme des étiquettes que tu mets sur tout ce qui existe : les gens (Marie), les objets (table), les lieux (Montréal), les idées (liberté). Sans noms, impossible de désigner quoi que ce soit !</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>On peut généralement mettre <strong>un/une/le/la/les</strong> devant</li>
        <li>Il a un <strong>genre</strong> (masculin OU féminin) — ce genre est fixe</li>
        <li>Il varie en <strong>nombre</strong> (singulier/pluriel)</li>
      </ul>
      
      <h4>Les types de noms</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Définition</th>
          <th>Exemples</th>
        </tr>
        <tr>
          <td><strong>Nom commun</strong></td>
          <td>Désigne une catégorie générale</td>
          <td>chat, maison, liberté</td>
        </tr>
        <tr>
          <td><strong>Nom propre</strong></td>
          <td>Désigne un individu unique (majuscule)</td>
          <td>Marie, Montréal, Québec</td>
        </tr>
        <tr>
          <td><strong>Nom concret</strong></td>
          <td>Désigne quelque chose de perceptible par les sens</td>
          <td>table, parfum, musique</td>
        </tr>
        <tr>
          <td><strong>Nom abstrait</strong></td>
          <td>Désigne une idée, un concept</td>
          <td>courage, amour, justice</td>
        </tr>
        <tr>
          <td><strong>Nom comptable</strong></td>
          <td>On peut le compter</td>
          <td>trois pommes, deux idées</td>
        </tr>
        <tr>
          <td><strong>Nom massif</strong></td>
          <td>On ne peut pas le compter directement</td>
          <td>du sable, de l'eau, du courage</td>
        </tr>
      </table>
      
      <p><strong>Attention !</strong> Un même nom peut être concret ET comptable (une pomme), ou abstrait ET massif (du courage). Ces catégories se combinent.</p>
      
      <h4>Exemples détaillés</h4>
      <ul>
        <li><strong>Le chat</strong> dort. → "chat" = nom commun, concret, comptable</li>
        <li><strong>Marie</strong> arrive. → "Marie" = nom propre</li>
        <li>Je bois de <strong>l'eau</strong>. → "eau" = nom commun, concret, massif</li>
        <li>La <strong>liberté</strong> est importante. → "liberté" = nom commun, abstrait, massif</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie les noms dans ces phrases",
        instruction: "Pour chaque phrase, trouve le NOM principal",
        options: ["chat", "Marie", "pomme", "Montréal", "jardin", "dort", "mange", "est", "magnifique"],
        items: [
          { text: "Le chat dort sur le canapé.", answer: "chat" },
          { text: "Marie mange une pomme rouge.", answer: "Marie" },
          { text: "Montréal est une grande ville.", answer: "Montréal" },
          { text: "Les enfants jouent dans le jardin.", answer: "jardin" }
        ],
        explanation: "Les noms désignent des personnes, animaux, choses ou lieux. On peut mettre un déterminant (le, une, les) devant."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Lequel de ces mots est un nom PROPRE ?",
        options: ["voiture", "Paris", "rapidement", "manger"],
        correct: 1,
        explanation: "\"Paris\" est un nom propre car il désigne un lieu unique et prend une majuscule. \"Voiture\" est un nom commun, \"rapidement\" est un adverbe, \"manger\" est un verbe."
      },
      {
        id: 3,
        type: "identification",
        question: "Classe ces noms : CONCRET ou ABSTRAIT",
        instruction: "Un nom concret se perçoit par les sens, un nom abstrait est une idée",
        options: ["concret", "abstrait"],
        items: [
          { text: "table", answer: "concret" },
          { text: "liberté", answer: "abstrait" },
          { text: "parfum", answer: "concret" },
          { text: "courage", answer: "abstrait" },
          { text: "montagne", answer: "concret" },
          { text: "justice", answer: "abstrait" }
        ],
        explanation: "Un nom concret désigne quelque chose que tu peux voir, toucher, sentir, entendre ou goûter. Un nom abstrait désigne une idée ou un sentiment."
      },
      {
        id: 4,
        type: "identification",
        question: "Classe ces noms : COMPTABLE ou MASSIF",
        instruction: "Peut-on dire \"trois...\" devant ce nom ?",
        options: ["comptable", "massif"],
        items: [
          { text: "pomme", answer: "comptable" },
          { text: "eau", answer: "massif" },
          { text: "livre", answer: "comptable" },
          { text: "sable", answer: "massif" },
          { text: "idée", answer: "comptable" },
          { text: "lait", answer: "massif" }
        ],
        explanation: "Un nom comptable peut être précédé d'un nombre (trois pommes, deux idées). Un nom massif ne se compte pas directement (on dit \"de l'eau\", pas \"trois eaux\")."
      },
      {
        id: 5,
        type: "text-input",
        question: "Trouve le genre des noms",
        instruction: "Écris M pour masculin ou F pour féminin",
        items: [
          { prompt: "table", answers: ["F", "f", "féminin", "Féminin"] },
          { prompt: "livre", answers: ["M", "m", "masculin", "Masculin"] },
          { prompt: "maison", answers: ["F", "f", "féminin", "Féminin"] },
          { prompt: "courage", answers: ["M", "m", "masculin", "Masculin"] },
          { prompt: "voiture", answers: ["F", "f", "féminin", "Féminin"] }
        ],
        explanation: "Le genre d'un nom est fixe en français : \"la table\" (F), \"le livre\" (M), \"la maison\" (F), \"le courage\" (M), \"la voiture\" (F)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Combien de noms y a-t-il dans cette phrase : \"Marie et Pierre mangent des pommes dans le jardin\" ?",
        options: ["2 noms", "3 noms", "4 noms", "5 noms"],
        correct: 2,
        explanation: "Il y a 4 noms : Marie (nom propre), Pierre (nom propre), pommes (nom commun), jardin (nom commun). Les mots \"et\", \"mangent\", \"des\", \"dans\", \"le\" ne sont pas des noms."
      },
      {
        id: 7,
        type: "identification",
        question: "Identifie le type de nom",
        instruction: "Pour chaque nom souligné, indique : commun ou propre ?",
        options: ["commun", "propre"],
        items: [
          { text: "La ville de Québec est belle.", answer: "propre" },
          { text: "Mon chat s'appelle Félix.", answer: "propre" },
          { text: "J'aime la musique classique.", answer: "commun" },
          { text: "Dylan étudie le français.", answer: "propre" }
        ],
        explanation: "Les noms propres désignent des individus uniques et prennent une majuscule (Québec, Félix, Dylan). Les noms communs désignent des catégories générales (ville, chat, musique, français)."
      }
    ]
  },

  // ========================================
  // 0.1.2 - LE DÉTERMINANT
  // ========================================
  "0.1.2": {
    title: "0.1.2 - Le déterminant",
    theory: `
      <h3>LE DÉTERMINANT</h3>
      
      <p><strong>Définition simple :</strong> Le déterminant est un petit mot qui se place devant le nom pour l'introduire dans la phrase. Sans déterminant, le nom ne peut généralement pas être sujet ou complément.</p>
      
      <p><strong>Analogie :</strong> Le déterminant, c'est comme un présentateur ! Imagine un nom qui veut entrer dans une phrase : le déterminant arrive avant lui et dit "Voici LE chat" ou "Voici UN chat" ou "Voici MON chat". Il présente le nom et donne des informations sur lui.</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>Il est toujours <strong>AVANT</strong> un nom (avec parfois un adjectif entre les deux)</li>
        <li>Il <strong>s'accorde</strong> avec le nom en genre et en nombre</li>
        <li>On ne peut pas en mettre deux du même type devant un nom (*le mon chat)</li>
      </ul>
      
      <h4>Les 8 types de déterminants</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Fonction</th>
          <th>Exemples</th>
        </tr>
        <tr>
          <td><strong>Article défini</strong></td>
          <td>Désigne quelque chose de connu, identifié</td>
          <td>le, la, l', les</td>
        </tr>
        <tr>
          <td><strong>Article indéfini</strong></td>
          <td>Désigne quelque chose de non identifié</td>
          <td>un, une, des</td>
        </tr>
        <tr>
          <td><strong>Article partitif</strong></td>
          <td>Désigne une partie d'un tout (noms massifs)</td>
          <td>du, de la, de l'</td>
        </tr>
        <tr>
          <td><strong>Dét. possessif</strong></td>
          <td>Indique la possession</td>
          <td>mon, ton, son, ma, notre, votre, leur, mes, tes, nos, vos, leurs</td>
        </tr>
        <tr>
          <td><strong>Dét. démonstratif</strong></td>
          <td>Montre, désigne</td>
          <td>ce, cet, cette, ces</td>
        </tr>
        <tr>
          <td><strong>Dét. interrogatif/exclamatif</strong></td>
          <td>Pose une question ou exprime une émotion</td>
          <td>quel, quelle, quels, quelles</td>
        </tr>
        <tr>
          <td><strong>Dét. numéral</strong></td>
          <td>Indique un nombre</td>
          <td>un, deux, trois... premier, deuxième...</td>
        </tr>
        <tr>
          <td><strong>Dét. indéfini</strong></td>
          <td>Désigne de façon vague</td>
          <td>quelques, plusieurs, certains, chaque, tout, aucun...</td>
        </tr>
      </table>
      
      <h4>Exemples en contexte</h4>
      <ul>
        <li><strong>Le</strong> chat dort. → article défini (on sait de quel chat on parle)</li>
        <li><strong>Un</strong> chat dort. → article indéfini (un chat parmi d'autres)</li>
        <li>Je bois <strong>du</strong> café. → article partitif (une partie du café)</li>
        <li><strong>Mon</strong> chat dort. → possessif (il m'appartient)</li>
        <li><strong>Ce</strong> chat dort. → démonstratif (je le montre)</li>
        <li><strong>Quel</strong> chat dort ? → interrogatif</li>
        <li><strong>Trois</strong> chats dorment. → numéral</li>
        <li><strong>Certains</strong> chats dorment. → indéfini</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le type de déterminant",
        instruction: "Pour chaque déterminant en majuscules, indique son type",
        options: ["défini", "indéfini", "partitif", "possessif", "démonstratif", "interrogatif", "numéral", "indéfini-vague"],
        items: [
          { text: "LE chat dort", answer: "défini" },
          { text: "UN chien aboie", answer: "indéfini" },
          { text: "Je bois DU café", answer: "partitif" },
          { text: "MON livre est ici", answer: "possessif" },
          { text: "CE film est bon", answer: "démonstratif" },
          { text: "TROIS pommes", answer: "numéral" }
        ],
        explanation: "Chaque type de déterminant a une fonction précise : le/la/les (défini), un/une/des (indéfini), du/de la (partitif), mon/ma/mes (possessif), ce/cette/ces (démonstratif), un/deux/trois (numéral)."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Quel déterminant utilise-t-on pour désigner quelque chose de connu et déjà identifié ?",
        options: ["Article indéfini (un, une)", "Article défini (le, la)", "Article partitif (du, de la)", "Déterminant possessif (mon, ton)"],
        correct: 1,
        explanation: "L'article défini (le, la, les) désigne quelque chose de connu, identifié ou déjà mentionné. Ex: \"LE chat\" (on sait de quel chat on parle)."
      },
      {
        id: 3,
        type: "text-input",
        question: "Complète avec le bon article",
        instruction: "Choisis entre : le, la, un, une, du, de la",
        items: [
          { prompt: "___ chat (défini, masculin)", answers: ["le", "Le"] },
          { prompt: "___ pomme (défini, féminin)", answers: ["la", "La"] },
          { prompt: "___ eau (partitif)", answers: ["de l'", "de l", "De l'", "De l"] },
          { prompt: "___ livre (indéfini, masculin)", answers: ["un", "Un"] },
          { prompt: "___ maison (défini, féminin)", answers: ["la", "La"] }
        ],
        explanation: "Les articles s'accordent avec le nom : le (masc. sg), la (fém. sg), de l' (partitif devant voyelle), un/une (indéfini)."
      },
      {
        id: 4,
        type: "identification",
        question: "Déterminant possessif : trouve le bon",
        instruction: "Choisis le déterminant possessif correct",
        options: ["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "votre", "leur"],
        items: [
          { text: "___ livre (à moi, masculin singulier)", answer: "mon" },
          { text: "___ maison (à moi, féminin singulier)", answer: "ma" },
          { text: "___ livres (à moi, pluriel)", answer: "mes" },
          { text: "___ chat (à toi, masculin singulier)", answer: "ton" },
          { text: "___ voiture (à lui/elle, féminin singulier)", answer: "sa" }
        ],
        explanation: "Les déterminants possessifs s'accordent avec le nom possédé (ce qui est à quelqu'un) : mon (masc. sg), ma (fém. sg), mes (pluriel), ton/ta/tes (à toi), son/sa/ses (à lui/elle)."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Dans \"Je mange DU pain\", quel type de déterminant est \"du\" ?",
        options: ["Article défini", "Article indéfini", "Article partitif", "Déterminant possessif"],
        correct: 2,
        explanation: "\"Du\" est un article partitif, utilisé avec des noms massifs (qu'on ne peut pas compter) pour indiquer qu'on parle d'une partie du tout. Ex: du pain, de l'eau, du sable."
      },
      {
        id: 6,
        type: "identification",
        question: "Trouve tous les déterminants",
        instruction: "Dans chaque phrase, combien y a-t-il de déterminants ?",
        options: ["1", "2", "3", "4"],
        items: [
          { text: "Le chat mange sa nourriture", answer: "2" },
          { text: "Mon frère et ma soeur arrivent", answer: "2" },
          { text: "Ces trois livres sont intéressants", answer: "2" },
          { text: "La petite fille joue dans le jardin", answer: "2" }
        ],
        explanation: "Compte les mots devant chaque nom : \"Le\" + \"sa\" = 2, \"Mon\" + \"ma\" = 2, \"Ces\" + \"trois\" = 2, \"La\" + \"le\" = 2."
      },
      {
        id: 7,
        type: "identification",
        question: "Distingue les déterminants démonstratifs",
        instruction: "Lesquels sont des déterminants démonstratifs (qui montrent) ?",
        options: ["démonstratif", "autre"],
        items: [
          { text: "ce livre", answer: "démonstratif" },
          { text: "mon livre", answer: "autre" },
          { text: "cette maison", answer: "démonstratif" },
          { text: "la maison", answer: "autre" },
          { text: "ces chats", answer: "démonstratif" }
        ],
        explanation: "Les déterminants démonstratifs sont : ce (masc. sg), cet (masc. sg devant voyelle), cette (fém. sg), ces (pluriel). Ils servent à montrer ou désigner quelque chose."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Quel est le déterminant dans \"Plusieurs enfants jouent\" ?",
        options: ["Plusieurs (dét. indéfini)", "enfants (nom)", "jouent (verbe)", "Il n'y a pas de déterminant"],
        correct: 0,
        explanation: "\"Plusieurs\" est un déterminant indéfini. Il indique une quantité vague (pas précise). Autres exemples : quelques, certains, chaque, tous."
      }
    ]
  },

  // ========================================
  // 0.1.3 - L'ADJECTIF
  // ========================================
  "0.1.3": {
    title: "0.1.3 - L'adjectif",
    theory: `
      <h3>L'ADJECTIF</h3>
      
      <p><strong>Définition simple :</strong> L'adjectif apporte une précision, une caractéristique au nom. Il dit « comment » est la chose désignée par le nom.</p>
      
      <p><strong>Analogie :</strong> Si le nom est une personne, l'adjectif est sa description ! Le nom dit "qui" ou "quoi", l'adjectif ajoute "comment c'est". Sans adjectif : "un chat". Avec adjectif : "un PETIT chat NOIR".</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>Il se rapporte toujours à un <strong>nom</strong> (ou pronom)</li>
        <li>Il <strong>s'accorde</strong> en genre et en nombre avec ce nom</li>
        <li>On peut souvent le mettre après <strong>très</strong> (très grand, très beau)</li>
        <li>On peut souvent le <strong>supprimer</strong> sans rendre la phrase agrammaticale</li>
      </ul>
      
      <h4>Position de l'adjectif</h4>
      <table>
        <tr>
          <th>Position</th>
          <th>Nom</th>
          <th>Exemples</th>
        </tr>
        <tr>
          <td>AVANT le nom</td>
          <td>Épithète antéposée</td>
          <td>une <strong>belle</strong> maison, un <strong>grand</strong> homme</td>
        </tr>
        <tr>
          <td>APRÈS le nom</td>
          <td>Épithète postposée</td>
          <td>une maison <strong>blanche</strong>, un homme <strong>intelligent</strong></td>
        </tr>
        <tr>
          <td>Après un verbe d'état</td>
          <td>Attribut du sujet</td>
          <td>Cette maison est <strong>belle</strong>. Il semble <strong>content</strong>.</td>
        </tr>
      </table>
      
      <h4>Les verbes d'état</h4>
      <p>Avec ces verbes, l'adjectif est attribut : <strong>être, sembler, paraître, devenir, rester, demeurer, avoir l'air</strong></p>
      
      <h4>⚠️ Attention ! Certains adjectifs changent de sens selon leur position</h4>
      <ul>
        <li>un <strong>grand</strong> homme = un homme illustre, important</li>
        <li>un homme <strong>grand</strong> = un homme de haute taille</li>
        <li>mon <strong>ancien</strong> professeur = mon professeur d'avant</li>
        <li>un meuble <strong>ancien</strong> = un vieux meuble, antique</li>
      </ul>
      
      <h4>L'accord de l'adjectif</h4>
      <p>L'adjectif s'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom :</p>
      <ul>
        <li>Un chat <strong>noir</strong> (masc. sg) → Une chatte <strong>noire</strong> (fém. sg)</li>
        <li>Un chat <strong>noir</strong> (sg) → Des chats <strong>noirs</strong> (pluriel)</li>
        <li>Une maison <strong>belle</strong> (fém. sg) → Des maisons <strong>belles</strong> (fém. pl)</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie les adjectifs",
        instruction: "Dans chaque phrase, trouve l'ADJECTIF",
        options: ["petit", "noir", "rouge", "intelligent", "content", "grande", "belle", "maison", "chat", "livre"],
        items: [
          { text: "Le petit chat dort.", answer: "petit" },
          { text: "Une pomme rouge.", answer: "rouge" },
          { text: "Il est content.", answer: "content" },
          { text: "Une grande maison.", answer: "grande" },
          { text: "Ce livre est intéressant.", answer: "intelligent" }
        ],
        explanation: "Les adjectifs qualifient le nom. On peut les reconnaître car ils décrivent \"comment\" est le nom : petit chat, pomme rouge, grande maison."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Dans \"Le chat est NOIR\", quel est le rôle de l'adjectif \"noir\" ?",
        options: ["Épithète (à côté du nom)", "Attribut (après verbe d'état)", "Complément du nom", "Ce n'est pas un adjectif"],
        correct: 1,
        explanation: "\"Noir\" est attribut du sujet car il vient après le verbe d'état \"être\". On relie le sujet \"chat\" à sa caractéristique \"noir\" via le verbe \"être\"."
      },
      {
        id: 3,
        type: "identification",
        question: "Épithète ou Attribut ?",
        instruction: "L'adjectif est-il épithète (à côté du nom) ou attribut (après verbe) ?",
        options: ["épithète", "attribut"],
        items: [
          { text: "Une belle maison", answer: "épithète" },
          { text: "Cette maison est belle", answer: "attribut" },
          { text: "Un chat noir", answer: "épithète" },
          { text: "Le chat semble content", answer: "attribut" },
          { text: "Des livres intéressants", answer: "épithète" }
        ],
        explanation: "Épithète = l'adjectif est directement à côté du nom (belle maison). Attribut = l'adjectif est après un verbe d'état (la maison EST belle)."
      },
      {
        id: 4,
        type: "text-input",
        question: "Accorde l'adjectif",
        instruction: "Écris l'adjectif correctement accordé",
        items: [
          { prompt: "Une maison (blanc)", answers: ["blanche", "Blanche"] },
          { prompt: "Des chats (noir)", answers: ["noirs", "Noirs"] },
          { prompt: "Une fille (intelligent)", answers: ["intelligente", "Intelligente"] },
          { prompt: "Des pommes (rouge)", answers: ["rouges", "Rouges"] },
          { prompt: "Un homme (content)", answers: ["content", "Content"] }
        ],
        explanation: "L'adjectif s'accorde en genre et nombre : blanc → blanche (fém.), noir → noirs (plur.), intelligent → intelligente (fém.), rouge → rouges (plur.)."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Peut-on supprimer l'adjectif sans rendre la phrase agrammaticale ?",
        options: ["Oui, toujours", "Non, jamais", "Ça dépend de la phrase", "Seulement les épithètes"],
        correct: 0,
        explanation: "Oui ! On peut généralement supprimer l'adjectif. \"Le PETIT chat dort\" → \"Le chat dort\" (grammatical). C'est un bon test pour identifier les adjectifs."
      },
      {
        id: 6,
        type: "identification",
        question: "Quel est le sens de l'adjectif selon sa position ?",
        instruction: "Choisis le sens correct",
        options: ["illustre/important", "de haute taille", "d'avant", "vieux/antique"],
        items: [
          { text: "Un grand homme (avant le nom)", answer: "illustre/important" },
          { text: "Un homme grand (après le nom)", answer: "de haute taille" },
          { text: "Mon ancien professeur (avant le nom)", answer: "d'avant" },
          { text: "Un meuble ancien (après le nom)", answer: "vieux/antique" }
        ],
        explanation: "Certains adjectifs changent de sens selon leur position : \"grand homme\" (illustre) ≠ \"homme grand\" (de haute taille), \"ancien professeur\" (d'avant) ≠ \"meuble ancien\" (antique)."
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Combien d'adjectifs y a-t-il dans \"Le petit chat noir dort paisiblement\" ?",
        options: ["1 adjectif", "2 adjectifs", "3 adjectifs", "4 adjectifs"],
        correct: 1,
        explanation: "Il y a 2 adjectifs : \"petit\" et \"noir\" (tous deux qualifient \"chat\"). \"Paisiblement\" est un ADVERBE (il modifie le verbe \"dort\"), pas un adjectif."
      },
      {
        id: 8,
        type: "identification",
        question: "Test du \"très\" : lesquels peuvent être précédés de \"très\" ?",
        instruction: "Un vrai adjectif peut souvent être précédé de \"très\"",
        options: ["oui", "non"],
        items: [
          { text: "grand (très grand)", answer: "oui" },
          { text: "rapidement (très rapidement)", answer: "non" },
          { text: "beau (très beau)", answer: "oui" },
          { text: "manger (très manger)", answer: "non" },
          { text: "content (très content)", answer: "oui" }
        ],
        explanation: "Les adjectifs acceptent généralement \"très\" devant eux (très grand, très beau). \"Rapidement\" est un adverbe, \"manger\" est un verbe."
      }
    ]
  },

  // ========================================
  // 0.1.4 - LE PRONOM
  // ========================================
  "0.1.4": {
    title: "0.1.4 - Le pronom",
    theory: `
      <h3>LE PRONOM</h3>
      
      <p><strong>Définition simple :</strong> Le pronom remplace un nom ou un groupe nominal pour éviter la répétition. « Pro-nom » = « à la place du nom ».</p>
      
      <p><strong>Analogie :</strong> Imagine que tu parles de Marie tout le temps : "Marie arrive. Marie est contente. Je parle à Marie." C'est répétitif ! Le pronom permet de dire : "Marie arrive. ELLE est contente. Je LUI parle." C'est plus fluide !</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>Il <strong>remplace</strong> quelque chose (son antécédent = ce qu'il remplace)</li>
        <li>Il a les <strong>mêmes fonctions</strong> possibles qu'un nom (sujet, complément, etc.)</li>
        <li>Il permet d'<strong>éviter les répétitions</strong></li>
      </ul>
      
      <h4>Les 6 types de pronoms</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Fonction</th>
          <th>Exemples</th>
        </tr>
        <tr>
          <td><strong>Personnel</strong></td>
          <td>Désigne les personnes du discours</td>
          <td>je, tu, il, elle, nous, vous, ils, elles / me, te, le, la, lui, leur, en, y</td>
        </tr>
        <tr>
          <td><strong>Possessif</strong></td>
          <td>Remplace nom + idée de possession</td>
          <td>le mien, la tienne, les siens, les nôtres, les vôtres, les leurs</td>
        </tr>
        <tr>
          <td><strong>Démonstratif</strong></td>
          <td>Remplace en montrant</td>
          <td>celui, celle, ceux, celles, ce, ceci, cela, ça</td>
        </tr>
        <tr>
          <td><strong>Relatif</strong></td>
          <td>Introduit une subordonnée relative</td>
          <td>qui, que, quoi, dont, où, lequel, laquelle, lesquels, lesquelles</td>
        </tr>
        <tr>
          <td><strong>Interrogatif</strong></td>
          <td>Pose une question</td>
          <td>qui, que, quoi, lequel, laquelle, lesquels, lesquelles</td>
        </tr>
        <tr>
          <td><strong>Indéfini</strong></td>
          <td>Désigne de façon vague</td>
          <td>on, quelqu'un, personne, rien, tout, chacun, certains, plusieurs</td>
        </tr>
      </table>
      
      <h4>Exemples détaillés</h4>
      <p><strong>Marie</strong> mange une pomme. <strong>Elle</strong> la trouve délicieuse.</p>
      <ul>
        <li><strong>Elle</strong> = pronom personnel sujet (remplace "Marie")</li>
        <li><strong>la</strong> = pronom personnel complément (remplace "une pomme")</li>
      </ul>
      
      <h4>⚠️ Piège : Déterminant ou pronom ?</h4>
      <p>Certains mots peuvent être l'un OU l'autre selon le contexte :</p>
      <table>
        <tr>
          <th>Mot</th>
          <th>Déterminant (devant nom)</th>
          <th>Pronom (remplace nom)</th>
        </tr>
        <tr>
          <td>le, la, les</td>
          <td><strong>Les</strong> enfants jouent</td>
          <td>Je <strong>les</strong> vois</td>
        </tr>
        <tr>
          <td>leur(s)</td>
          <td><strong>Leur</strong> maison est grande</td>
          <td>Je <strong>leur</strong> parle</td>
        </tr>
        <tr>
          <td>certain(s)</td>
          <td><strong>Certains</strong> élèves travaillent</td>
          <td><strong>Certains</strong> travaillent</td>
        </tr>
      </table>
      <p><strong>Truc :</strong> Si le mot est directement devant un nom → déterminant. S'il remplace un nom → pronom.</p>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve ce que remplace le pronom",
        instruction: "Quel nom est remplacé par le pronom souligné ?",
        options: ["Marie", "pomme", "chat", "Pierre", "livre"],
        items: [
          { text: "Marie mange une pomme. Elle est bonne.", answer: "pomme" },
          { text: "Le chat dort. Il ronfle.", answer: "chat" },
          { text: "Pierre arrive. Je le vois.", answer: "Pierre" },
          { text: "J'ai un livre. Je le lis.", answer: "livre" }
        ],
        explanation: "Le pronom remplace un nom (l'antécédent). \"Elle\" remplace \"pomme\", \"Il\" remplace \"chat\", \"le\" remplace \"Pierre\" ou \"livre\"."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Dans \"Marie et Pierre arrivent. ILS sont contents.\", quel type de pronom est \"ils\" ?",
        options: ["Pronom possessif", "Pronom personnel", "Pronom démonstratif", "Pronom relatif"],
        correct: 1,
        explanation: "\"Ils\" est un pronom personnel sujet (3e personne du pluriel). Il remplace \"Marie et Pierre\"."
      },
      {
        id: 3,
        type: "identification",
        question: "Identifie le type de pronom",
        instruction: "Quel type de pronom est souligné ?",
        options: ["personnel", "possessif", "démonstratif", "relatif", "interrogatif", "indéfini"],
        items: [
          { text: "Le chat QUI dort", answer: "relatif" },
          { text: "Ce livre est LE MIEN", answer: "possessif" },
          { text: "QUI vient ?", answer: "interrogatif" },
          { text: "QUELQU'UN frappe", answer: "indéfini" },
          { text: "Je LE vois", answer: "personnel" },
          { text: "CELUI de Marie", answer: "démonstratif" }
        ],
        explanation: "Qui/que (relatifs), le mien/la tienne (possessifs), qui?/que? (interrogatifs), quelqu'un/personne (indéfinis), je/tu/il/le/la (personnels), celui/celle (démonstratifs)."
      },
      {
        id: 4,
        type: "identification",
        question: "Déterminant ou Pronom ?",
        instruction: "Le mot souligné est-il déterminant ou pronom ?",
        options: ["déterminant", "pronom"],
        items: [
          { text: "LES enfants jouent", answer: "déterminant" },
          { text: "Je LES vois", answer: "pronom" },
          { text: "LEUR maison", answer: "déterminant" },
          { text: "Je LEUR parle", answer: "pronom" },
          { text: "CERTAINS élèves", answer: "déterminant" },
          { text: "CERTAINS travaillent", answer: "pronom" }
        ],
        explanation: "Devant un nom = déterminant (LES enfants, LEUR maison). Qui remplace un nom = pronom (Je LES vois, Je LEUR parle)."
      },
      {
        id: 5,
        type: "text-input",
        question: "Remplace par le bon pronom",
        instruction: "Évite la répétition en utilisant un pronom",
        items: [
          { prompt: "Marie arrive. ___ est contente. (Marie)", answers: ["Elle", "elle"] },
          { prompt: "Je vois Pierre. Je ___ parle. (à Pierre)", answers: ["lui"] },
          { prompt: "Les enfants jouent. Je ___ regarde. (les enfants)", answers: ["les"] },
          { prompt: "C'est mon livre. C'est ___. (mon livre)", answers: ["le mien", "Le mien"] }
        ],
        explanation: "Marie → Elle (pronom personnel sujet), à Pierre → lui (pronom personnel indirect), les enfants → les (pronom personnel direct), mon livre → le mien (pronom possessif)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Dans \"Le chat QUI dort est noir\", que fait le pronom \"qui\" ?",
        options: ["Il remplace \"chat\"", "Il introduit une subordonnée relative", "Il pose une question", "Les deux premières réponses"],
        correct: 3,
        explanation: "\"Qui\" est un pronom relatif : il remplace \"chat\" ET introduit une subordonnée relative (\"qui dort\" donne une info sur le chat). Les deux fonctions sont vraies !"
      },
      {
        id: 7,
        type: "identification",
        question: "Pronom personnel : sujet ou complément ?",
        instruction: "Le pronom personnel est-il sujet (fait l'action) ou complément (reçoit l'action) ?",
        options: ["sujet", "complément"],
        items: [
          { text: "IL mange", answer: "sujet" },
          { text: "Je LE vois", answer: "complément" },
          { text: "ELLE dort", answer: "sujet" },
          { text: "Tu LUI parles", answer: "complément" },
          { text: "NOUS arrivons", answer: "sujet" }
        ],
        explanation: "Sujet = fait l'action (IL mange, ELLE dort, NOUS arrivons). Complément = reçoit l'action ou est complément du verbe (Je LE vois, Tu LUI parles)."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Quel pronom indéfini signifie \"aucune personne\" ?",
        options: ["quelqu'un", "personne", "tout", "chacun"],
        correct: 1,
        explanation: "\"Personne\" (avec ne) signifie \"aucune personne\" : \"Personne ne vient\" = aucune personne ne vient. \"Quelqu'un\" = une personne non précisée."
      }
    ]
  },

  // ==========================================
// src/data/content.js - PARTIE 2
// À AJOUTER après la Partie 1
// Modules : 0.1.5, 0.1.6, 0.1.7, 0.1.8
// ==========================================

  // ========================================
  // 0.1.5 - LE VERBE (COMPLET)
  // ========================================
  "0.1.5": {
    title: "0.1.5 - Le verbe",
    theory: `
      <h3>LE VERBE</h3>
      
      <p><strong>Définition simple :</strong> Le verbe exprime une action (courir, manger), un état (être, sembler) ou un changement d'état (devenir, mourir).</p>
      
      <p><strong>Analogie :</strong> Le verbe, c'est le moteur de la phrase ! C'est lui qui fait bouger les choses. Sans verbe, pas de phrase. Le verbe dit CE QUI SE PASSE : une action (Pierre MANGE), un état (Marie EST contente), un changement (Il DEVIENT grand).</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>C'est le <strong>seul mot qui se conjugue</strong> (change selon la personne, le temps, le mode)</li>
        <li>On peut l'<strong>encadrer par ne... pas</strong> : Je ne mange pas</li>
        <li>On peut <strong>changer le temps</strong> : Je mange → Je mangeais → Je mangerai</li>
      </ul>
      
      <h4>Les 6 types de verbes (selon leur construction)</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Définition</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td><strong>Transitif direct</strong></td>
          <td>Accepte un complément direct (sans préposition)</td>
          <td>manger <strong>une pomme</strong></td>
        </tr>
        <tr>
          <td><strong>Transitif indirect</strong></td>
          <td>Accepte un complément indirect (avec préposition)</td>
          <td>parler <strong>à Marie</strong></td>
        </tr>
        <tr>
          <td><strong>Intransitif</strong></td>
          <td>N'accepte pas de complément d'objet</td>
          <td>dormir, partir, mourir</td>
        </tr>
        <tr>
          <td><strong>Attributif</strong></td>
          <td>Relie le sujet à un attribut</td>
          <td>être, sembler, paraître, devenir, rester</td>
        </tr>
        <tr>
          <td><strong>Pronominal</strong></td>
          <td>Se conjugue avec un pronom réfléchi</td>
          <td>se laver, se souvenir, s'enfuir</td>
        </tr>
        <tr>
          <td><strong>Impersonnel</strong></td>
          <td>Sujet "il" sans référent réel</td>
          <td>il pleut, il faut, il neige</td>
        </tr>
      </table>
      
      <h4>La conjugaison : ce qui change</h4>
      <ul>
        <li><strong>Personne :</strong> je mange, tu manges, il mange</li>
        <li><strong>Nombre :</strong> je mange, nous mangeons</li>
        <li><strong>Temps :</strong> je mange (présent), je mangeais (imparfait), je mangerai (futur)</li>
        <li><strong>Mode :</strong> je mange (indicatif), que je mange (subjonctif)</li>
      </ul>
      
      <h4>Test du "ne... pas"</h4>
      <p>Pour trouver le verbe, encadre-le par "ne... pas" :</p>
      <ul>
        <li>Pierre mange une pomme. → Pierre <strong>ne mange pas</strong> une pomme. ✓</li>
        <li>Le chat est noir. → Le chat <strong>n'est pas</strong> noir. ✓</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve le verbe",
        instruction: "Dans chaque phrase, quel est le VERBE ?",
        options: ["mange", "dort", "est", "parle", "devient", "chat", "Marie", "content"],
        items: [
          { text: "Le chat dort.", answer: "dort" },
          { text: "Marie mange une pomme.", answer: "mange" },
          { text: "Pierre est content.", answer: "est" },
          { text: "Elle parle à Jean.", answer: "parle" },
          { text: "Il devient grand.", answer: "devient" }
        ],
        explanation: "Le verbe se conjugue et exprime une action ou un état. Test : on peut dire \"ne...pas\" → Il ne dort pas, Elle ne mange pas, Il n'est pas."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Quel est le type du verbe dans \"Marie MANGE une pomme\" ?",
        options: ["Transitif direct", "Transitif indirect", "Intransitif", "Attributif"],
        correct: 0,
        explanation: "\"Manger\" est transitif direct car il a un complément direct (une pomme) sans préposition. On peut dire \"manger QUOI ?\" → une pomme."
      },
      {
        id: 3,
        type: "identification",
        question: "Identifie le type de verbe",
        instruction: "Quel type de verbe est-ce ?",
        options: ["transitif direct", "transitif indirect", "intransitif", "attributif", "pronominal", "impersonnel"],
        items: [
          { text: "Je mange une pomme", answer: "transitif direct" },
          { text: "Je parle à Marie", answer: "transitif indirect" },
          { text: "Le chat dort", answer: "intransitif" },
          { text: "Il est content", answer: "attributif" },
          { text: "Je me lave", answer: "pronominal" },
          { text: "Il pleut", answer: "impersonnel" }
        ],
        explanation: "Transitif direct (complément sans prép.), indirect (avec prép.), intransitif (pas de complément), attributif (être, sembler...), pronominal (se...), impersonnel (il impersonnel)."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Dans \"Le chat DORT paisiblement\", peut-on dire \"Le chat ne dort pas\" ?",
        options: ["Oui, c'est le test du \"ne...pas\"", "Non, ça ne marche pas avec \"dort\"", "Oui, mais seulement à l'oral", "Non, ce n'est pas un verbe"],
        correct: 0,
        explanation: "Oui ! Le test du \"ne...pas\" fonctionne avec tous les verbes : \"Le chat ne dort pas\". C'est une excellente façon d'identifier le verbe dans une phrase."
      },
      {
        id: 5,
        type: "text-input",
        question: "Conjugue le verbe",
        instruction: "Change la personne ou le temps",
        items: [
          { prompt: "Je mange → Nous ___", answers: ["mangeons", "Mangeons"] },
          { prompt: "Tu dors → Ils ___", answers: ["dorment", "Dorment"] },
          { prompt: "Je mange (présent) → Je ___ (imparfait)", answers: ["mangeais", "Mangeais"] },
          { prompt: "Il est → Ils ___", answers: ["sont", "Sont"] }
        ],
        explanation: "Le verbe se conjugue selon la personne (je/nous, tu/ils) et le temps (présent/imparfait) : mange → mangeons, dors → dorment, mange → mangeais, est → sont."
      },
      {
        id: 6,
        type: "identification",
        question: "Verbes d'état : lesquels introduisent un attribut ?",
        instruction: "Ces verbes peuvent-ils être suivis d'un adjectif attribut ?",
        options: ["oui", "non"],
        items: [
          { text: "être (Il est content)", answer: "oui" },
          { text: "manger (Il mange content)", answer: "non" },
          { text: "sembler (Il semble content)", answer: "oui" },
          { text: "dormir (Il dort content)", answer: "non" },
          { text: "devenir (Il devient content)", answer: "oui" },
          { text: "parler (Il parle content)", answer: "non" }
        ],
        explanation: "Les verbes d'état (être, sembler, paraître, devenir, rester) peuvent être suivis d'un adjectif attribut. Les autres verbes ne le peuvent pas naturellement."
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Dans \"IL PLEUT\", quel type de verbe est \"pleut\" ?",
        options: ["Transitif", "Intransitif", "Impersonnel", "Attributif"],
        correct: 2,
        explanation: "\"Pleuvoir\" est un verbe impersonnel : le sujet \"il\" ne désigne personne ou rien de précis. Autres exemples : il faut, il neige, il y a."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Dans \"Je ME lave\", quel type de verbe est \"se laver\" ?",
        options: ["Transitif direct", "Transitif indirect", "Pronominal", "Impersonnel"],
        correct: 2,
        explanation: "\"Se laver\" est un verbe pronominal : il se conjugue avec un pronom réfléchi (me, te, se, nous, vous, se). Le pronom renvoie au sujet."
      }
    ]
  },

  // ========================================
  // 0.1.6 - L'ADVERBE
  // ========================================
  "0.1.6": {
    title: "0.1.6 - L'adverbe",
    theory: `
      <h3>L'ADVERBE</h3>
      
      <p><strong>Définition simple :</strong> L'adverbe modifie (précise) le sens d'un verbe, d'un adjectif, d'un autre adverbe, ou d'une phrase entière.</p>
      
      <p><strong>Analogie :</strong> L'adverbe, c'est comme un modificateur qui ajoute une nuance ! Il répond à des questions : COMMENT ? (lentement), QUAND ? (hier), OÙ ? (ici), COMBIEN ? (beaucoup). Il ne change jamais de forme (invariable).</p>
      
      <h4>Comment le reconnaître ?</h4>
      <ul>
        <li>Il est <strong>invariable</strong> (ne s'accorde jamais)</li>
        <li>On peut souvent le <strong>supprimer</strong></li>
        <li>Beaucoup se terminent en <strong>-ment</strong> (mais pas tous !)</li>
      </ul>
      
      <h4>Les 7 types d'adverbes</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Question</th>
          <th>Exemples</th>
        </tr>
        <tr>
          <td><strong>De manière</strong></td>
          <td>Comment ?</td>
          <td>lentement, bien, mal, vite, ainsi</td>
        </tr>
        <tr>
          <td><strong>De temps</strong></td>
          <td>Quand ?</td>
          <td>hier, aujourd'hui, demain, souvent, jamais, toujours</td>
        </tr>
        <tr>
          <td><strong>De lieu</strong></td>
          <td>Où ?</td>
          <td>ici, là, ailleurs, partout, dehors, dessus</td>
        </tr>
        <tr>
          <td><strong>De quantité</strong></td>
          <td>Combien ?</td>
          <td>beaucoup, peu, très, trop, assez, plus, moins</td>
        </tr>
        <tr>
          <td><strong>D'affirmation</strong></td>
          <td>-</td>
          <td>oui, certainement, vraiment, assurément</td>
        </tr>
        <tr>
          <td><strong>De négation</strong></td>
          <td>-</td>
          <td>ne...pas, ne...plus, ne...jamais, non</td>
        </tr>
        <tr>
          <td><strong>De doute</strong></td>
          <td>-</td>
          <td>peut-être, probablement, sans doute</td>
        </tr>
      </table>
      
      <h4>Ce que l'adverbe modifie</h4>
      <ul>
        <li><strong>Un verbe :</strong> Elle parle <strong>lentement</strong>. (Comment parle-t-elle ?)</li>
        <li><strong>Un adjectif :</strong> Elle est <strong>très</strong> grande. (À quel degré ?)</li>
        <li><strong>Un autre adverbe :</strong> Elle parle <strong>très</strong> lentement. (À quel degré ?)</li>
        <li><strong>Une phrase :</strong> <strong>Heureusement</strong>, elle est arrivée. (Commentaire sur toute la phrase)</li>
      </ul>
      
      <h4>⚠️ Attention ! Adverbe ≠ Adjectif</h4>
      <p>L'adverbe est INVARIABLE, l'adjectif s'accorde :</p>
      <ul>
        <li>Elle parle <strong>doucement</strong> (adverbe, invariable)</li>
        <li>Elle est <strong>douce</strong> (adjectif, s'accorde avec "elle")</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve l'adverbe",
        instruction: "Dans chaque phrase, quel est l'ADVERBE ?",
        options: ["lentement", "hier", "ici", "beaucoup", "très", "parle", "arrive", "grand"],
        items: [
          { text: "Elle parle lentement.", answer: "lentement" },
          { text: "Il est arrivé hier.", answer: "hier" },
          { text: "Viens ici !", answer: "ici" },
          { text: "Il mange beaucoup.", answer: "beaucoup" },
          { text: "Elle est très grande.", answer: "très" }
        ],
        explanation: "Les adverbes modifient le verbe, l'adjectif ou un autre adverbe. Ils sont invariables et répondent à : comment ? quand ? où ? combien ?"
      },
      {
        id: 2,
        type: "identification",
        question: "Identifie le type d'adverbe",
        instruction: "À quel type appartient cet adverbe ?",
        options: ["manière", "temps", "lieu", "quantité", "affirmation", "négation", "doute"],
        items: [
          { text: "Elle parle LENTEMENT", answer: "manière" },
          { text: "Il arrive DEMAIN", answer: "temps" },
          { text: "Je vais LÀ", answer: "lieu" },
          { text: "C'est TRÈS bon", answer: "quantité" },
          { text: "OUI, je viens", answer: "affirmation" },
          { text: "PEUT-ÊTRE qu'il viendra", answer: "doute" }
        ],
        explanation: "Manière (comment ?), temps (quand ?), lieu (où ?), quantité (combien ?), affirmation (oui), négation (non/ne...pas), doute (peut-être)."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "L'adverbe est-il variable ou invariable ?",
        options: ["Variable (il s'accorde)", "Invariable (ne change jamais)", "Ça dépend du type", "Variable seulement en nombre"],
        correct: 1,
        explanation: "L'adverbe est TOUJOURS invariable. Il ne s'accorde jamais, peu importe le contexte : \"Elle parle lentement\", \"Elles parlent lentement\" (même forme)."
      },
      {
        id: 4,
        type: "identification",
        question: "Que modifie l'adverbe ?",
        instruction: "L'adverbe modifie un verbe, un adjectif, un adverbe ou toute la phrase ?",
        options: ["verbe", "adjectif", "adverbe", "phrase entière"],
        items: [
          { text: "Elle parle LENTEMENT (modifie \"parle\")", answer: "verbe" },
          { text: "Elle est TRÈS grande (modifie \"grande\")", answer: "adjectif" },
          { text: "Elle parle TRÈS lentement (modifie \"lentement\")", answer: "adverbe" },
          { text: "HEUREUSEMENT, elle arrive (modifie toute la phrase)", answer: "phrase entière" }
        ],
        explanation: "L'adverbe peut modifier : un verbe (parle lentement), un adjectif (très grande), un autre adverbe (très lentement), ou toute la phrase (heureusement, ...)."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Dans \"Elle est TRÈS RAPIDEMENT partie\", combien y a-t-il d'adverbes ?",
        options: ["0 adverbe", "1 adverbe", "2 adverbes", "3 adverbes"],
        correct: 2,
        explanation: "Il y a 2 adverbes : \"très\" (modifie \"rapidement\") et \"rapidement\" (modifie \"partie\"). Attention : \"partie\" est un participe passé, pas un adverbe !"
      },
      {
        id: 6,
        type: "identification",
        question: "Adverbe ou Adjectif ?",
        instruction: "Le mot souligné est-il un adverbe (invariable) ou un adjectif (variable) ?",
        options: ["adverbe", "adjectif"],
        items: [
          { text: "Elle parle DOUCEMENT", answer: "adverbe" },
          { text: "Elle est DOUCE", answer: "adjectif" },
          { text: "Il court RAPIDEMENT", answer: "adverbe" },
          { text: "Un homme RAPIDE", answer: "adjectif" },
          { text: "Elle chante BIEN", answer: "adverbe" }
        ],
        explanation: "Adverbe = invariable, modifie un verbe (parle doucement, court rapidement). Adjectif = variable, qualifie un nom (elle est douce, un homme rapide)."
      },
      {
        id: 7,
        type: "text-input",
        question: "Forme l'adverbe à partir de l'adjectif",
        instruction: "Beaucoup d'adverbes se forment en ajoutant -ment à l'adjectif féminin",
        items: [
          { prompt: "lent → lent__ (adverbe)", answers: ["lentement", "Lentement"] },
          { prompt: "doux → douc__ (adverbe)", answers: ["doucement", "Doucement"] },
          { prompt: "facile → facil__ (adverbe)", answers: ["facilement", "Facilement"] },
          { prompt: "heureux → heureus__ (adverbe)", answers: ["heureusement", "Heureusement"] }
        ],
        explanation: "Formation : adjectif féminin + -ment → lente + ment = lentement, douce + ment = doucement, facile + ment = facilement, heureuse + ment = heureusement."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Tous les adverbes se terminent-ils en -ment ?",
        options: ["Oui, tous", "Non, seulement les adverbes de manière", "Non, il y a des exceptions", "Oui, sauf les adverbes de temps"],
        correct: 2,
        explanation: "Non ! Beaucoup d'adverbes ne se terminent pas en -ment : hier, ici, là, bien, mal, vite, souvent, trop, très, etc. Mais beaucoup d'adverbes de manière se forment avec -ment."
      }
    ]
  },

  // ========================================
  // 0.1.7 - LA PRÉPOSITION
  // ========================================
  "0.1.7": {
    title: "0.1.7 - La préposition",
    theory: `
      <h3>LA PRÉPOSITION</h3>
      
      <p><strong>Définition simple :</strong> La préposition est un mot invariable qui introduit un complément et établit une relation entre ce complément et un autre mot de la phrase.</p>
      
      <p><strong>Analogie :</strong> La préposition, c'est comme un pont ! Elle relie deux éléments et dit quelle est leur relation : lieu (dans la maison), temps (pendant la nuit), moyen (avec un couteau), cause (à cause de toi), etc.</p>
      
      <h4>Comment la reconnaître ?</h4>
      <ul>
        <li>Elle est <strong>TOUJOURS suivie</strong> d'un groupe de mots (son complément)</li>
        <li>Elle ne peut <strong>pas être utilisée seule</strong></li>
        <li>Elle est <strong>invariable</strong></li>
      </ul>
      
      <h4>Liste des prépositions les plus courantes</h4>
      <p>à, de, pour, par, avec, sans, sous, sur, dans, en, entre, vers, chez, contre, depuis, pendant, durant, avant, après, devant, derrière, malgré, selon, dès, parmi...</p>
      
      <h4>Locutions prépositives (plusieurs mots = une préposition)</h4>
      <p>à cause de, grâce à, en face de, au lieu de, à travers, d'après, au-dessus de, au-dessous de, près de, loin de, le long de...</p>
      
      <h4>Relations exprimées par les prépositions</h4>
      <table>
        <tr>
          <th>Relation</th>
          <th>Prépositions</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td><strong>Lieu</strong></td>
          <td>à, de, dans, sur, sous, vers, chez...</td>
          <td>Je vais <strong>à</strong> Montréal.</td>
        </tr>
        <tr>
          <td><strong>Temps</strong></td>
          <td>à, de, avant, après, pendant, depuis...</td>
          <td>Je travaille <strong>depuis</strong> lundi.</td>
        </tr>
        <tr>
          <td><strong>Cause</strong></td>
          <td>à cause de, grâce à, pour...</td>
          <td>Il pleure <strong>à cause de</strong> toi.</td>
        </tr>
        <tr>
          <td><strong>But</strong></td>
          <td>pour, afin de...</td>
          <td>Je travaille <strong>pour</strong> réussir.</td>
        </tr>
        <tr>
          <td><strong>Moyen</strong></td>
          <td>avec, par, en...</td>
          <td>Je voyage <strong>en</strong> avion.</td>
        </tr>
        <tr>
          <td><strong>Manière</strong></td>
          <td>avec, sans, en...</td>
          <td>Il parle <strong>avec</strong> passion.</td>
        </tr>
      </table>
      
      <h4>⚠️ Attention !</h4>
      <p>La préposition n'est JAMAIS seule. Elle introduit toujours quelque chose :</p>
      <ul>
        <li>Je vais <strong>à</strong> Montréal. ✓ (à + Montréal)</li>
        <li>Je vais <strong>à</strong>. ✗ (incomplet !)</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve la préposition",
        instruction: "Dans chaque phrase, quelle est la PRÉPOSITION ?",
        options: ["dans", "à", "avec", "pour", "depuis", "sur", "sous", "chez"],
        items: [
          { text: "Le chat dort DANS la maison.", answer: "dans" },
          { text: "Je vais À Montréal.", answer: "à" },
          { text: "Il mange AVEC une fourchette.", answer: "avec" },
          { text: "Je travaille POUR réussir.", answer: "pour" },
          { text: "J'attends DEPUIS hier.", answer: "depuis" }
        ],
        explanation: "Les prépositions introduisent un complément et établissent une relation : dans (lieu), à (lieu), avec (moyen), pour (but), depuis (temps)."
      },
      {
        id: 2,
        type: "identification",
        question: "Quelle relation exprime la préposition ?",
        instruction: "La préposition exprime : lieu, temps, cause, but, moyen, ou manière ?",
        options: ["lieu", "temps", "cause", "but", "moyen", "manière"],
        items: [
          { text: "Je vais DANS la maison", answer: "lieu" },
          { text: "Je travaille DEPUIS lundi", answer: "temps" },
          { text: "Il pleure À CAUSE DE toi", answer: "cause" },
          { text: "Je travaille POUR réussir", answer: "but" },
          { text: "Je voyage EN avion", answer: "moyen" },
          { text: "Il parle AVEC passion", answer: "manière" }
        ],
        explanation: "Prépositions de lieu (dans, sur), temps (depuis, pendant), cause (à cause de), but (pour), moyen (avec, en), manière (avec, sans)."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "La préposition peut-elle être utilisée seule ?",
        options: ["Oui, toujours", "Non, jamais", "Oui, sauf les prépositions de lieu", "Seulement à l'oral"],
        correct: 1,
        explanation: "Non ! La préposition doit TOUJOURS introduire un complément. On ne peut pas dire \"Je vais à\" sans préciser où. Il faut dire \"Je vais à Montréal\"."
      },
      {
        id: 4,
        type: "text-input",
        question: "Complète avec la bonne préposition",
        instruction: "Choisis entre : à, de, dans, sur, avec, pour, depuis",
        items: [
          { prompt: "Je vais ___ Montréal (lieu)", answers: ["à", "À"] },
          { prompt: "Le livre est ___ la table (lieu/sur)", answers: ["sur", "Sur"] },
          { prompt: "Je travaille ___ lundi (temps)", answers: ["depuis", "Depuis"] },
          { prompt: "Il mange ___ une fourchette (moyen)", answers: ["avec", "Avec"] },
          { prompt: "Je le fais ___ toi (but)", answers: ["pour", "Pour"] }
        ],
        explanation: "Choisir la bonne préposition selon la relation : à (lieu/direction), sur (lieu/surface), depuis (temps/point de départ), avec (moyen), pour (but/destinataire)."
      },
      {
        id: 5,
        type: "identification",
        question: "Préposition simple ou locution prépositive ?",
        instruction: "Est-ce une préposition simple (1 mot) ou une locution prépositive (plusieurs mots) ?",
        options: ["simple", "locution"],
        items: [
          { text: "DANS la maison", answer: "simple" },
          { text: "À CAUSE DE toi", answer: "locution" },
          { text: "POUR réussir", answer: "simple" },
          { text: "EN FACE DE l'école", answer: "locution" },
          { text: "AVEC passion", answer: "simple" },
          { text: "AU-DESSUS DE la table", answer: "locution" }
        ],
        explanation: "Préposition simple = 1 mot (dans, pour, avec). Locution prépositive = plusieurs mots formant une unité (à cause de, en face de, au-dessus de)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Dans \"Je travaille DEPUIS LUNDI\", quel est le groupe introduit par la préposition ?",
        options: ["depuis", "lundi", "depuis lundi", "je travaille"],
        correct: 1,
        explanation: "La préposition \"depuis\" introduit le complément \"lundi\". Ensemble, \"depuis lundi\" forme un groupe prépositionnel qui complète le verbe \"travaille\"."
      },
      {
        id: 7,
        type: "identification",
        question: "Trouve toutes les prépositions",
        instruction: "Dans chaque phrase, combien y a-t-il de prépositions ?",
        options: ["1", "2", "3", "4"],
        items: [
          { text: "Je vais à Montréal avec Marie.", answer: "2" },
          { text: "Le chat dort dans sa maison depuis hier.", answer: "2" },
          { text: "Je travaille pour toi avec passion.", answer: "2" },
          { text: "Il va à l'école en bus.", answer: "2" }
        ],
        explanation: "Compte toutes les prépositions : \"à\" + \"avec\" = 2, \"dans\" + \"depuis\" = 2, \"pour\" + \"avec\" = 2, \"à\" + \"en\" = 2."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "La préposition est-elle variable ou invariable ?",
        options: ["Variable (s'accorde)", "Invariable (ne change jamais)", "Variable en nombre seulement", "Ça dépend du contexte"],
        correct: 1,
        explanation: "La préposition est TOUJOURS invariable. Elle ne change jamais de forme : \"Je vais à Montréal\", \"Nous allons à Montréal\" (même forme \"à\")."
      }
    ]
  },

  // ========================================
  // 0.1.8 - LA CONJONCTION
  // ========================================
  "0.1.8": {
    title: "0.1.8 - La conjonction",
    theory: `
      <h3>LA CONJONCTION</h3>
      
      <p><strong>Définition simple :</strong> La conjonction relie des mots, des groupes de mots ou des phrases.</p>
      
      <p><strong>Analogie :</strong> La conjonction, c'est comme de la colle ou un lien ! Elle attache des éléments ensemble : "Pierre ET Marie", "Je viens PARCE QUE tu me l'as demandé". Sans conjonctions, les phrases seraient hachées et déconnectées.</p>
      
      <h4>Les 2 types de conjonctions</h4>
      
      <h4>A. Conjonctions de COORDINATION</h4>
      <p><strong>Rôle :</strong> Elles relient des éléments de même fonction grammaticale (deux noms, deux verbes, deux phrases...).</p>
      <p><strong>Les 7 conjonctions de coordination :</strong> <strong>mais, ou, et, donc, or, ni, car</strong></p>
      <p><strong>Moyen mnémotechnique :</strong> "Mais où est donc Ornicar ?"</p>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>Pierre <strong>et</strong> Marie arrivent. (relie deux sujets)</li>
        <li>Il mange <strong>et</strong> boit. (relie deux verbes)</li>
        <li>Elle est fatiguée <strong>mais</strong> elle travaille. (relie deux phrases)</li>
        <li>Il pleut <strong>donc</strong> je reste. (conséquence)</li>
        <li>Je viens <strong>car</strong> tu me l'as demandé. (cause)</li>
      </ul>
      
      <h4>B. Conjonctions de SUBORDINATION</h4>
      <p><strong>Rôle :</strong> Elles introduisent une proposition subordonnée (qui dépend d'une principale).</p>
      <p><strong>Les plus courantes :</strong> que, quand, lorsque, si, comme, parce que, puisque, bien que, pour que, afin que, avant que, après que, dès que, tandis que...</p>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>Je pense <strong>que</strong> tu as raison. (complétive)</li>
        <li><strong>Quand</strong> il pleut, je reste à la maison. (temps)</li>
        <li><strong>Parce qu'</strong>il pleut, je reste à la maison. (cause)</li>
        <li>Je viens <strong>pour que</strong> tu sois content. (but)</li>
      </ul>
      
      <h4>Différence Coordination vs Subordination</h4>
      <table>
        <tr>
          <th></th>
          <th>Coordination</th>
          <th>Subordination</th>
        </tr>
        <tr>
          <td><strong>Relie</strong></td>
          <td>Éléments de même niveau</td>
          <td>Phrase principale + subordonnée</td>
        </tr>
        <tr>
          <td><strong>Nombre</strong></td>
          <td>7 (mais, ou, et, donc, or, ni, car)</td>
          <td>Beaucoup (que, quand, si, parce que...)</td>
        </tr>
        <tr>
          <td><strong>Exemple</strong></td>
          <td>Pierre <strong>et</strong> Marie</td>
          <td>Je pense <strong>que</strong> tu as raison</td>
        </tr>
      </table>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve la conjonction",
        instruction: "Dans chaque phrase, quelle est la CONJONCTION ?",
        options: ["et", "mais", "que", "quand", "parce que", "donc", "si"],
        items: [
          { text: "Pierre ET Marie arrivent.", answer: "et" },
          { text: "Il est fatigué MAIS il travaille.", answer: "mais" },
          { text: "Je pense QUE tu as raison.", answer: "que" },
          { text: "QUAND il pleut, je reste.", answer: "quand" },
          { text: "Il pleut DONC je reste.", answer: "donc" }
        ],
        explanation: "Les conjonctions relient des éléments : et/mais (coordination), que/quand/parce que (subordination)."
      },
      {
        id: 2,
        type: "identification",
        question: "Coordination ou Subordination ?",
        instruction: "La conjonction est-elle de coordination ou de subordination ?",
        options: ["coordination", "subordination"],
        items: [
          { text: "Pierre ET Marie", answer: "coordination" },
          { text: "Je pense QUE", answer: "subordination" },
          { text: "Il pleut DONC", answer: "coordination" },
          { text: "QUAND il pleut", answer: "subordination" },
          { text: "Fatigué MAIS content", answer: "coordination" },
          { text: "PARCE QU'il pleut", answer: "subordination" }
        ],
        explanation: "Coordination (7 : mais, ou, et, donc, or, ni, car) relie des éléments de même niveau. Subordination introduit une subordonnée qui dépend de la principale."
      },
      {
        id: 3,
        type: "text-input",
        question: "Les 7 conjonctions de coordination",
        instruction: "Complète : Mais où est donc Ornicar ?",
        items: [
          { prompt: "___ (opposition)", answers: ["mais", "Mais"] },
          { prompt: "___ (alternative)", answers: ["ou", "Ou"] },
          { prompt: "___ (addition)", answers: ["et", "Et"] },
          { prompt: "___ (conséquence)", answers: ["donc", "Donc"] },
          { prompt: "___ (cause)", answers: ["car", "Car"] }
        ],
        explanation: "Les 7 conjonctions de coordination : mais (opposition), ou (alternative), et (addition), donc (conséquence), or (transition), ni (négation), car (cause)."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Dans \"Pierre ET Marie arrivent\", que relie la conjonction \"et\" ?",
        options: ["Deux verbes", "Deux sujets", "Deux phrases", "Deux adjectifs"],
        correct: 1,
        explanation: "\"Et\" relie deux sujets de même fonction : \"Pierre\" et \"Marie\" sont tous deux sujets du verbe \"arrivent\"."
      },
      {
        id: 5,
        type: "identification",
        question: "Quelle relation exprime la conjonction ?",
        instruction: "Addition, opposition, conséquence, cause, ou condition ?",
        options: ["addition", "opposition", "conséquence", "cause", "condition", "temps"],
        items: [
          { text: "Pierre ET Marie (addition)", answer: "addition" },
          { text: "Fatigué MAIS content (opposition)", answer: "opposition" },
          { text: "Il pleut DONC je reste (conséquence)", answer: "conséquence" },
          { text: "Je reste CAR il pleut (cause)", answer: "cause" },
          { text: "SI tu viens, j'irai (condition)", answer: "condition" },
          { text: "QUAND il arrive, je pars (temps)", answer: "temps" }
        ],
        explanation: "Et (addition), mais (opposition), donc (conséquence), car/parce que (cause), si (condition), quand (temps)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Combien y a-t-il de conjonctions de coordination ?",
        options: ["5", "7", "10", "Beaucoup"],
        correct: 1,
        explanation: "Il y a exactement 7 conjonctions de coordination : mais, ou, et, donc, or, ni, car. Retiens : \"Mais où est donc Ornicar ?\""
      },
      {
        id: 7,
        type: "identification",
        question: "Que relie la conjonction ?",
        instruction: "La conjonction relie : noms, verbes, phrases, ou adjectifs ?",
        options: ["noms", "verbes", "phrases", "adjectifs"],
        items: [
          { text: "Pierre ET Marie", answer: "noms" },
          { text: "Il mange ET boit", answer: "verbes" },
          { text: "Il pleut DONC je reste", answer: "phrases" },
          { text: "Grand ET fort", answer: "adjectifs" }
        ],
        explanation: "Les conjonctions peuvent relier différents types d'éléments de même fonction : noms (Pierre et Marie), verbes (mange et boit), phrases (il pleut donc je reste), adjectifs (grand et fort)."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Dans \"Je pense QUE tu as raison\", quelle est la fonction de \"que\" ?",
        options: ["Pronom relatif", "Conjonction de subordination", "Conjonction de coordination", "Pronom interrogatif"],
        correct: 1,
        explanation: "\"Que\" est ici une conjonction de subordination qui introduit la subordonnée complétive \"tu as raison\" (ce que je pense)."
      }
    ]
  },

// ==========================================
// FIN DE LA PARTIE 2
// ==========================================
// ✅ COMPLÉTÉ : 0.1.5, 0.1.6, 0.1.7, 0.1.8
// 🔄 PROCHAINE PARTIE : 0.1.9, 0.2.1, 0.2.2, 0.2.3
// ==========================================

// ==========================================
// src/data/content.js - PARTIE 3
// À AJOUTER après la Partie 2
// Modules : 0.1.9, 0.2.1, 0.2.2, 0.2.3
// ==========================================

  // ========================================
  // 0.1.9 - L'INTERJECTION
  // ========================================
  "0.1.9": {
    title: "0.1.9 - L'interjection",
    theory: `
      <h3>L'INTERJECTION</h3>
      
      <p><strong>Définition simple :</strong> L'interjection exprime une émotion ou une réaction de façon spontanée. Elle est souvent suivie d'un point d'exclamation.</p>
      
      <p><strong>Analogie :</strong> L'interjection, c'est comme un cri du cœur ! Elle exprime une émotion brute, sans construction grammaticale : "Ah !", "Ouf !", "Zut !". C'est spontané et expressif.</p>
      
      <h4>Comment la reconnaître ?</h4>
      <ul>
        <li>Elle est <strong>invariable</strong></li>
        <li>Elle exprime une <strong>émotion</strong> ou une <strong>réaction</strong></li>
        <li>Elle est souvent <strong>suivie d'un !</strong></li>
        <li>Elle fonctionne <strong>seule</strong> ou en début de phrase</li>
        <li>Elle n'a <strong>pas de fonction syntaxique</strong> dans la phrase</li>
      </ul>
      
      <h4>Les principales interjections et leurs émotions</h4>
      <table>
        <tr>
          <th>Interjection</th>
          <th>Émotion / Réaction</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td>Ah !</td>
          <td>Surprise, compréhension</td>
          <td>Ah ! Je comprends maintenant !</td>
        </tr>
        <tr>
          <td>Oh !</td>
          <td>Surprise, étonnement</td>
          <td>Oh ! Quelle belle maison !</td>
        </tr>
        <tr>
          <td>Hélas !</td>
          <td>Regret, tristesse</td>
          <td>Hélas ! Il est trop tard.</td>
        </tr>
        <tr>
          <td>Ouf !</td>
          <td>Soulagement</td>
          <td>Ouf ! C'est terminé !</td>
        </tr>
        <tr>
          <td>Bravo !</td>
          <td>Félicitation, approbation</td>
          <td>Bravo ! Tu as réussi !</td>
        </tr>
        <tr>
          <td>Zut !</td>
          <td>Dépit, contrariété</td>
          <td>Zut ! J'ai oublié mon livre.</td>
        </tr>
        <tr>
          <td>Aïe !</td>
          <td>Douleur</td>
          <td>Aïe ! Je me suis fait mal !</td>
        </tr>
        <tr>
          <td>Hein ?</td>
          <td>Interrogation, incompréhension</td>
          <td>Hein ? Qu'est-ce que tu dis ?</td>
        </tr>
        <tr>
          <td>Eh bien !</td>
          <td>Transition, invitation</td>
          <td>Eh bien ! Allons-y !</td>
        </tr>
        <tr>
          <td>Tiens !</td>
          <td>Surprise, intérêt</td>
          <td>Tiens ! Tu es là ?</td>
        </tr>
      </table>
      
      <h4>Exemples en contexte</h4>
      <ul>
        <li><strong>Ah !</strong> Tu es là ! (surprise)</li>
        <li><strong>Hélas !</strong> Il est trop tard. (regret)</li>
        <li><strong>Ouf !</strong> C'est terminé. (soulagement)</li>
        <li><strong>Bravo !</strong> Excellent travail ! (félicitation)</li>
        <li><strong>Zut !</strong> J'ai oublié. (contrariété)</li>
      </ul>
      
      <h4>⚠️ Attention !</h4>
      <p>L'interjection n'a pas de fonction syntaxique. Elle ne fait pas vraiment partie de la structure de la phrase. On pourrait la supprimer sans changer la grammaire de la phrase :</p>
      <ul>
        <li><strong>Ah !</strong> Tu es là ! → Tu es là ! (même sens, juste moins expressif)</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Trouve l'interjection",
        instruction: "Dans chaque phrase, quelle est l'INTERJECTION ?",
        options: ["Ah", "Oh", "Hélas", "Ouf", "Bravo", "Zut", "Aïe"],
        items: [
          { text: "AH ! Tu es là !", answer: "Ah" },
          { text: "OH ! Quelle belle maison !", answer: "Oh" },
          { text: "HÉLAS ! Il est trop tard.", answer: "Hélas" },
          { text: "OUF ! C'est terminé !", answer: "Ouf" },
          { text: "BRAVO ! Tu as réussi !", answer: "Bravo" }
        ],
        explanation: "Les interjections expriment une émotion spontanée : Ah (surprise), Oh (étonnement), Hélas (regret), Ouf (soulagement), Bravo (félicitation)."
      },
      {
        id: 2,
        type: "identification",
        question: "Quelle émotion exprime l'interjection ?",
        instruction: "Associe l'interjection à l'émotion qu'elle exprime",
        options: ["surprise", "regret", "soulagement", "félicitation", "douleur", "contrariété"],
        items: [
          { text: "Ah ! (découverte)", answer: "surprise" },
          { text: "Hélas ! (tristesse)", answer: "regret" },
          { text: "Ouf ! (fin d'un effort)", answer: "soulagement" },
          { text: "Bravo ! (réussite)", answer: "félicitation" },
          { text: "Aïe ! (je me suis cogné)", answer: "douleur" },
          { text: "Zut ! (j'ai oublié)", answer: "contrariété" }
        ],
        explanation: "Chaque interjection exprime une émotion particulière : Ah (surprise), Hélas (regret), Ouf (soulagement), Bravo (félicitation), Aïe (douleur), Zut (contrariété)."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "L'interjection a-t-elle une fonction syntaxique dans la phrase ?",
        options: ["Oui, elle est sujet", "Oui, elle est complément", "Non, elle n'a pas de fonction", "Ça dépend de l'interjection"],
        correct: 2,
        explanation: "L'interjection n'a PAS de fonction syntaxique. Elle exprime une émotion mais ne joue pas de rôle grammatical dans la structure de la phrase."
      },
      {
        id: 4,
        type: "text-input",
        question: "Choisis la bonne interjection",
        instruction: "Complète avec l'interjection qui correspond à l'émotion",
        items: [
          { prompt: "___ ! Tu as réussi ! (félicitation)", answers: ["Bravo", "bravo"] },
          { prompt: "___ ! C'est fini ! (soulagement)", answers: ["Ouf", "ouf"] },
          { prompt: "___ ! Il est trop tard. (regret)", answers: ["Hélas", "hélas"] },
          { prompt: "___ ! Je me suis fait mal ! (douleur)", answers: ["Aïe", "aïe", "Aie", "aie"] },
          { prompt: "___ ! J'ai oublié. (contrariété)", answers: ["Zut", "zut"] }
        ],
        explanation: "Bravo (félicitation), Ouf (soulagement), Hélas (regret), Aïe (douleur), Zut (contrariété)."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Peut-on supprimer l'interjection sans changer la structure de la phrase ?",
        options: ["Oui, la phrase reste correcte", "Non, la phrase devient agrammaticale", "Oui, mais seulement à l'oral", "Non, l'interjection est obligatoire"],
        correct: 0,
        explanation: "Oui ! On peut supprimer l'interjection. \"Ah ! Tu es là !\" → \"Tu es là !\" La phrase reste grammaticale, juste moins expressive."
      },
      {
        id: 6,
        type: "identification",
        question: "Interjection ou autre classe ?",
        instruction: "Le mot est-il une interjection ou une autre classe de mots ?",
        options: ["interjection", "autre"],
        items: [
          { text: "Ah ! (émotion)", answer: "interjection" },
          { text: "vite (modifie le verbe)", answer: "autre" },
          { text: "Bravo ! (félicitation)", answer: "interjection" },
          { text: "bien (adverbe)", answer: "autre" },
          { text: "Hélas ! (regret)", answer: "interjection" }
        ],
        explanation: "Interjection = émotion spontanée (Ah, Bravo, Hélas). Autre = adverbe, verbe, etc. (vite modifie le verbe, bien est un adverbe)."
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "L'interjection est-elle variable ou invariable ?",
        options: ["Variable (s'accorde)", "Invariable (ne change jamais)", "Variable en nombre", "Ça dépend du contexte"],
        correct: 1,
        explanation: "L'interjection est TOUJOURS invariable. Elle ne change jamais de forme : \"Ah !\", \"Bravo !\", \"Ouf !\" restent identiques dans tous les contextes."
      },
      {
        id: 8,
        type: "identification",
        question: "Combien d'interjections ?",
        instruction: "Dans chaque phrase, combien y a-t-il d'interjections ?",
        options: ["0", "1", "2", "3"],
        items: [
          { text: "Ah ! Tu es là !", answer: "1" },
          { text: "Oh ! Hélas ! C'est fini !", answer: "2" },
          { text: "Le chat dort paisiblement.", answer: "0" },
          { text: "Bravo ! Ouf ! Enfin réussi !", answer: "2" }
        ],
        explanation: "Compte les interjections (mots exprimant une émotion) : \"Ah\" = 1, \"Oh\" + \"Hélas\" = 2, aucune = 0, \"Bravo\" + \"Ouf\" = 2."
      }
    ]
  },

  // ========================================
  // 0.2.1 - LE GROUPE NOMINAL (GN)
  // ========================================
  "0.2.1": {
    title: "0.2.1 - Le Groupe Nominal (GN)",
    theory: `
      <h3>LE GROUPE NOMINAL (GN)</h3>
      
      <p><strong>Définition :</strong> Un groupe nominal est un ensemble de mots organisés autour d'un NOM, qui est le noyau du groupe.</p>
      
      <p><strong>Analogie :</strong> Pense à une équipe de hockey. Le noyau (le nom), c'est comme le capitaine : c'est lui qui définit l'identité du groupe. Les autres mots (les expansions) complètent l'équipe, mais on pourrait jouer avec le capitaine seul.</p>
      
      <h4>Structure du GN</h4>
      <p><strong>Structure minimale :</strong> Déterminant + Nom</p>
      <ul>
        <li>le chat</li>
        <li>une maison</li>
        <li>des livres</li>
      </ul>
      
      <p><strong>Structure étendue :</strong> Déterminant + (Adjectif) + Nom + (Expansions)</p>
      
      <h4>Les expansions possibles du nom</h4>
      <table>
        <tr>
          <th>Type d'expansion</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td><strong>Adjectif</strong></td>
          <td>le chat <strong>noir</strong></td>
        </tr>
        <tr>
          <td><strong>Groupe prépositionnel</strong></td>
          <td>le chat <strong>de ma voisine</strong></td>
        </tr>
        <tr>
          <td><strong>Subordonnée relative</strong></td>
          <td>le chat <strong>qui dort</strong></td>
        </tr>
        <tr>
          <td><strong>GN en apposition</strong></td>
          <td><strong>Marie</strong>, ma voisine, arrive.</td>
        </tr>
      </table>
      
      <h4>Exemples de GN de plus en plus complexes</h4>
      <table>
        <tr>
          <th>GN</th>
          <th>Analyse</th>
        </tr>
        <tr>
          <td>le chat</td>
          <td>Dét + N</td>
        </tr>
        <tr>
          <td>le petit chat</td>
          <td>Dét + Adj + N</td>
        </tr>
        <tr>
          <td>le petit chat noir</td>
          <td>Dét + Adj + N + Adj</td>
        </tr>
        <tr>
          <td>le petit chat noir de ma voisine</td>
          <td>Dét + Adj + N + Adj + GPrép</td>
        </tr>
        <tr>
          <td>le petit chat noir de ma voisine qui dort</td>
          <td>Dét + Adj + N + Adj + GPrép + Sub. relative</td>
        </tr>
      </table>
      
      <h4>Comment délimiter un GN ?</h4>
      <p><strong>Test de remplacement par un pronom :</strong></p>
      <ul>
        <li>[Le petit chat noir de ma voisine] dort. → <strong>Il</strong> dort. ✓</li>
        <li>Tout ce qui peut être remplacé par il/elle/ils/elles forme un GN.</li>
      </ul>
      
      <h4>Le noyau du GN</h4>
      <p>Le <strong>noyau</strong> est le mot principal, obligatoire. C'est le NOM. On peut supprimer les expansions, mais pas le noyau :</p>
      <ul>
        <li>le <strong>chat</strong> noir → le <strong>chat</strong> ✓</li>
        <li>le noir (sans "chat") → ✗ (incomplet)</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le noyau du GN",
        instruction: "Quel est le NOM noyau dans chaque GN ?",
        options: ["chat", "maison", "livre", "enfants", "voiture", "petit", "rouge", "dans"],
        items: [
          { text: "le petit chat", answer: "chat" },
          { text: "une grande maison", answer: "maison" },
          { text: "des livres intéressants", answer: "livre" },
          { text: "les enfants de la classe", answer: "enfants" },
          { text: "ma vieille voiture rouge", answer: "voiture" }
        ],
        explanation: "Le noyau du GN est toujours le NOM. Les autres mots (déterminants, adjectifs) gravitent autour de lui : chat, maison, livres, enfants, voiture."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Quelle est la structure minimale d'un GN ?",
        options: ["Nom seul", "Déterminant + Nom", "Adjectif + Nom", "Nom + Adjectif"],
        correct: 1,
        explanation: "La structure minimale d'un GN est : Déterminant + Nom (ex: le chat, une maison). Le nom seul ne forme généralement pas un GN complet en français."
      },
      {
        id: 3,
        type: "identification",
        question: "Délimite le GN complet",
        instruction: "Quelle partie de la phrase forme le GN sujet ?",
        options: ["le chat", "le petit chat", "le petit chat noir", "le petit chat noir de ma voisine"],
        items: [
          { text: "Le chat dort.", answer: "le chat" },
          { text: "Le petit chat dort.", answer: "le petit chat" },
          { text: "Le petit chat noir dort.", answer: "le petit chat noir" },
          { text: "Le petit chat noir de ma voisine dort.", answer: "le petit chat noir de ma voisine" }
        ],
        explanation: "Le GN inclut le déterminant, le nom noyau ET toutes ses expansions (adjectifs, compléments du nom). Test : remplace tout par \"il\"."
      },
      {
        id: 4,
        type: "text-input",
        question: "Remplace le GN par un pronom",
        instruction: "Remplace le GN souligné par : il, elle, ils, ou elles",
        items: [
          { prompt: "Le petit chat dort. → ___ dort.", answers: ["Il", "il"] },
          { prompt: "La maison est grande. → ___ est grande.", answers: ["Elle", "elle"] },
          { prompt: "Les enfants jouent. → ___ jouent.", answers: ["Ils", "ils"] },
          { prompt: "Les filles arrivent. → ___ arrivent.", answers: ["Elles", "elles"] }
        ],
        explanation: "On remplace un GN sujet par un pronom personnel : le chat → il, la maison → elle, les enfants → ils, les filles → elles."
      },
      {
        id: 5,
        type: "identification",
        question: "Identifie le type d'expansion",
        instruction: "L'expansion du nom est-elle : adjectif, GPrép, ou subordonnée relative ?",
        options: ["adjectif", "GPrép", "subordonnée relative"],
        items: [
          { text: "le chat NOIR", answer: "adjectif" },
          { text: "le chat DE MA VOISINE", answer: "GPrép" },
          { text: "le chat QUI DORT", answer: "subordonnée relative" },
          { text: "une maison GRANDE", answer: "adjectif" },
          { text: "le livre DE MARIE", answer: "GPrép" }
        ],
        explanation: "Adjectif (noir, grande), Groupe prépositionnel = prép + GN (de ma voisine, de Marie), Subordonnée relative = qui/que + verbe (qui dort)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Peut-on supprimer le noyau (le nom) d'un GN ?",
        options: ["Oui, toujours", "Non, jamais", "Oui, si on garde les adjectifs", "Ça dépend du GN"],
        correct: 1,
        explanation: "Non ! Le noyau (le nom) est OBLIGATOIRE. On peut supprimer les expansions (adjectifs, compléments) mais pas le nom : \"le petit chat noir\" → \"le chat\" ✓, mais \"le petit noir\" ✗."
      },
      {
        id: 7,
        type: "identification",
        question: "Combien d'expansions ?",
        instruction: "Combien d'expansions du nom y a-t-il ?",
        options: ["0", "1", "2", "3", "4"],
        items: [
          { text: "le chat (juste dét + nom)", answer: "0" },
          { text: "le chat noir (+ 1 adj)", answer: "1" },
          { text: "le petit chat noir (+ 2 adj)", answer: "2" },
          { text: "le petit chat noir de Marie (+ 2 adj + 1 GPrép)", answer: "3" }
        ],
        explanation: "Compte les expansions autour du nom : adjectifs (petit, noir), GPrép (de Marie), subordonnées relatives, etc. Le déterminant ne compte pas comme expansion."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Dans \"Marie, ma voisine, arrive\", quel est le GN en apposition ?",
        options: ["Marie", "ma voisine", "arrive", "Marie ma voisine"],
        correct: 1,
        explanation: "\"Ma voisine\" est en apposition : c'est un GN qui précise, explique \"Marie\". L'apposition est entre virgules et on peut la supprimer : \"Marie arrive\"."
      }
    ]
  },

  // ========================================
  // 0.2.2 - LE GROUPE VERBAL (GV)
  // ========================================
  "0.2.2": {
    title: "0.2.2 - Le Groupe Verbal (GV)",
    theory: `
      <h3>LE GROUPE VERBAL (GV)</h3>
      
      <p><strong>Définition :</strong> Un groupe verbal est un ensemble de mots organisés autour d'un VERBE, qui est le noyau du groupe.</p>
      
      <p><strong>⚠️ Attention !</strong> Le GV, c'est le verbe avec TOUS ses compléments (sauf le sujet). C'est ce qu'on dit DU sujet.</p>
      
      <p><strong>Analogie :</strong> Si la phrase est une phrase "Sujet + Prédicat", le GV est le prédicat : tout ce qui n'est pas le sujet. Le sujet fait l'action, le GV décrit cette action.</p>
      
      <h4>Structure du GV</h4>
      <p><strong>Structure :</strong> Verbe + (Compléments) + (Modificateurs)</p>
      
      <h4>Les expansions possibles du verbe</h4>
      <table>
        <tr>
          <th>Type d'expansion</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td><strong>Complément direct (CD)</strong></td>
          <td>mange <strong>une pomme</strong></td>
        </tr>
        <tr>
          <td><strong>Complément indirect (CI)</strong></td>
          <td>parle <strong>à Marie</strong></td>
        </tr>
        <tr>
          <td><strong>Attribut du sujet</strong></td>
          <td>est <strong>gentille</strong></td>
        </tr>
        <tr>
          <td><strong>Modificateur (adverbe)</strong></td>
          <td>mange <strong>rapidement</strong></td>
        </tr>
      </table>
      
      <h4>Exemples de GV</h4>
      <table>
        <tr>
          <th>Phrase</th>
          <th>Sujet</th>
          <th>GV (prédicat)</th>
        </tr>
        <tr>
          <td>Marie dort.</td>
          <td>Marie</td>
          <td>dort</td>
        </tr>
        <tr>
          <td>Marie mange une pomme.</td>
          <td>Marie</td>
          <td>mange une pomme</td>
        </tr>
        <tr>
          <td>Marie donne un livre à Pierre.</td>
          <td>Marie</td>
          <td>donne un livre à Pierre</td>
        </tr>
        <tr>
          <td>Marie est heureuse.</td>
          <td>Marie</td>
          <td>est heureuse</td>
        </tr>
        <tr>
          <td>Marie parle lentement à ses élèves.</td>
          <td>Marie</td>
          <td>parle lentement à ses élèves</td>
        </tr>
      </table>
      
      <h4>Comment délimiter un GV ?</h4>
      <p><strong>Méthode :</strong> Le GV, c'est TOUT sauf le sujet (et les compléments de phrase détachés).</p>
      <ul>
        <li><strong>Trouve le sujet</strong> (C'est... qui + verbe)</li>
        <li><strong>Le GV = le reste</strong> (verbe + ce qui suit)</li>
      </ul>
      
      <p><strong>Exemple :</strong></p>
      <ul>
        <li>Marie mange une pomme dans la cuisine.</li>
        <li>Sujet : <strong>Marie</strong> (C'est Marie qui mange)</li>
        <li>GV : <strong>mange une pomme dans la cuisine</strong></li>
      </ul>
      
      <h4>Le noyau du GV</h4>
      <p>Le <strong>noyau</strong> du GV est le VERBE. C'est le seul élément obligatoire du GV.</p>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le noyau du GV",
        instruction: "Quel est le VERBE noyau dans chaque GV ?",
        options: ["dort", "mange", "donne", "parle", "est", "pomme", "livre", "heureuse"],
        items: [
          { text: "dort", answer: "dort" },
          { text: "mange une pomme", answer: "mange" },
          { text: "donne un livre à Pierre", answer: "donne" },
          { text: "parle lentement", answer: "parle" },
          { text: "est heureuse", answer: "est" }
        ],
        explanation: "Le noyau du GV est toujours le VERBE. Les autres éléments (compléments, adverbes) gravitent autour de lui."
      },
      {
        id: 2,
        type: "identification",
        question: "Délimite le GV",
        instruction: "Dans chaque phrase, quel est le GV (tout sauf le sujet) ?",
        options: ["dort", "mange une pomme", "est très contente", "parle à Marie", "donne un livre à Pierre"],
        items: [
          { text: "Le chat dort.", answer: "dort" },
          { text: "Marie mange une pomme.", answer: "mange une pomme" },
          { text: "Elle est très contente.", answer: "est très contente" },
          { text: "Pierre parle à Marie.", answer: "parle à Marie" },
          { text: "Jean donne un livre à Pierre.", answer: "donne un livre à Pierre" }
        ],
        explanation: "Le GV = verbe + tous ses compléments. Trouve le sujet (C'est... qui), le reste est le GV : \"Le chat\" (sujet) + \"dort\" (GV)."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Le sujet fait-il partie du GV ?",
        options: ["Oui, toujours", "Non, jamais", "Oui, seulement avec \"être\"", "Ça dépend du verbe"],
        correct: 1,
        explanation: "Non ! Le sujet ne fait JAMAIS partie du GV. Le GV, c'est ce qu'on dit DU sujet, mais pas le sujet lui-même. Phrase = Sujet + GV (prédicat)."
      },
      {
        id: 4,
        type: "identification",
        question: "Identifie le type de complément dans le GV",
        instruction: "Le complément est-il : CD (direct), CI (indirect), ou attribut ?",
        options: ["CD", "CI", "attribut", "modificateur"],
        items: [
          { text: "mange UNE POMME", answer: "CD" },
          { text: "parle À MARIE", answer: "CI" },
          { text: "est CONTENT", answer: "attribut" },
          { text: "donne UN LIVRE (à Pierre)", answer: "CD" },
          { text: "parle LENTEMENT", answer: "modificateur" }
        ],
        explanation: "CD = complément direct sans préposition (mange quoi ? une pomme), CI = avec préposition (parle à qui ? à Marie), attribut = après verbe d'état (est comment ? content), modificateur = adverbe."
      },
      {
        id: 5,
        type: "text-input",
        question: "Sépare sujet et GV",
        instruction: "Écris seulement le GV (sans le sujet)",
        items: [
          { prompt: "Le chat dort. → GV = ___", answers: ["dort", "Dort"] },
          { prompt: "Marie mange une pomme. → GV = ___", answers: ["mange une pomme", "Mange une pomme"] },
          { prompt: "Pierre est content. → GV = ___", answers: ["est content", "Est content"] },
          { prompt: "Elle parle doucement. → GV = ___", answers: ["parle doucement", "Parle doucement"] }
        ],
        explanation: "Trouve le sujet (C'est... qui), le reste est le GV : \"Le chat\" (sujet) → \"dort\" (GV), \"Marie\" → \"mange une pomme\"."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Dans \"Marie mange une pomme DANS LA CUISINE\", \"dans la cuisine\" fait-il partie du GV ?",
        options: ["Oui, toujours", "Non, c'est un complément de phrase", "Oui, c'est un CD", "Non, c'est le sujet"],
        correct: 0,
        explanation: "Oui ! \"Dans la cuisine\" fait partie du GV si ce n'est pas détaché. Le GV inclut tous les compléments du verbe. Si c'était \"Dans la cuisine, Marie mange\" (détaché), ce serait un complément de phrase."
      },
      {
        id: 7,
        type: "identification",
        question: "GV avec verbe attributif",
        instruction: "Identifie le GV dans les phrases avec verbe d'état",
        options: ["est content", "semble fatigué", "devient grand", "paraît heureux", "reste calme"],
        items: [
          { text: "Pierre est content.", answer: "est content" },
          { text: "Il semble fatigué.", answer: "semble fatigué" },
          { text: "Elle devient grande.", answer: "devient grand" },
          { text: "Marie paraît heureuse.", answer: "paraît heureux" },
          { text: "Il reste calme.", answer: "reste calme" }
        ],
        explanation: "Avec les verbes d'état (être, sembler, paraître, devenir, rester), le GV = verbe + attribut du sujet (adjectif qui qualifie le sujet)."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Peut-on avoir un GV sans complément ?",
        options: ["Non, impossible", "Oui, avec les verbes intransitifs", "Oui, mais seulement à l'impératif", "Non, il faut toujours un CD"],
        correct: 1,
        explanation: "Oui ! Avec les verbes intransitifs, le GV = juste le verbe : \"Le chat dort\" → GV = \"dort\" (pas de complément). Les verbes intransitifs n'ont pas besoin de complément."
      }
    ]
  },

  // ========================================
  // 0.2.3 - LE GROUPE ADJECTIVAL (GAdj)
  // ========================================
  "0.2.3": {
    title: "0.2.3 - Le Groupe Adjectival (GAdj)",
    theory: `
      <h3>LE GROUPE ADJECTIVAL (GAdj)</h3>
      
      <p><strong>Définition :</strong> Un groupe adjectival est un ensemble de mots organisés autour d'un ADJECTIF, qui est le noyau du groupe.</p>
      
      <p><strong>Analogie :</strong> L'adjectif est le chef, et il peut être accompagné d'un modificateur (très, assez) qui dit "à quel point" ou d'un complément qui précise "de quoi" ou "à quel sujet".</p>
      
      <h4>Structure du GAdj</h4>
      <p><strong>Structure :</strong> (Modificateur) + Adjectif + (Complément de l'adjectif)</p>
      
      <h4>Les expansions possibles de l'adjectif</h4>
      <table>
        <tr>
          <th>Type d'expansion</th>
          <th>Position</th>
          <th>Exemple</th>
        </tr>
        <tr>
          <td><strong>Adverbe modificateur</strong></td>
          <td>AVANT</td>
          <td><strong>très</strong> grand</td>
        </tr>
        <tr>
          <td><strong>Complément de l'adjectif</strong></td>
          <td>APRÈS</td>
          <td>fier <strong>de son travail</strong></td>
        </tr>
      </table>
      
      <h4>Exemples de GAdj</h4>
      <table>
        <tr>
          <th>GAdj</th>
          <th>Analyse</th>
        </tr>
        <tr>
          <td>grand</td>
          <td>Adj seul</td>
        </tr>
        <tr>
          <td>très grand</td>
          <td>Adv + Adj</td>
        </tr>
        <tr>
          <td>fier de son fils</td>
          <td>Adj + GPrép (complément)</td>
        </tr>
        <tr>
          <td>très fier de son fils</td>
          <td>Adv + Adj + GPrép</td>
        </tr>
        <tr>
          <td>facile à comprendre</td>
          <td>Adj + GPrép (complément)</td>
        </tr>
      </table>
      
      <h4>Le noyau du GAdj</h4>
      <p>Le <strong>noyau</strong> du GAdj est l'ADJECTIF. C'est le seul élément obligatoire.</p>
      <ul>
        <li>très <strong>grand</strong> → on peut supprimer "très" : <strong>grand</strong> ✓</li>
        <li>fier <strong>de son fils</strong> → on peut supprimer "de son fils" : <strong>fier</strong> ✓</li>
      </ul>
      
      <h4>Position du GAdj dans la phrase</h4>
      <p>Le GAdj peut être :</p>
      <ul>
        <li><strong>Épithète :</strong> un homme <strong>très grand</strong></li>
        <li><strong>Attribut :</strong> Cet homme est <strong>très grand</strong></li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le noyau du GAdj",
        instruction: "Quel est l'ADJECTIF noyau dans chaque GAdj ?",
        options: ["grand", "fier", "content", "facile", "heureux", "très", "de"],
        items: [
          { text: "grand", answer: "grand" },
          { text: "très grand", answer: "grand" },
          { text: "fier de son fils", answer: "fier" },
          { text: "très content", answer: "content" },
          { text: "facile à comprendre", answer: "facile" }
        ],
        explanation: "Le noyau du GAdj est toujours l'ADJECTIF. Les autres mots (adverbes, compléments) gravitent autour de lui : grand, fier, content, facile."
      },
      {
        id: 2,
        type: "identification",
        question: "Délimite le GAdj complet",
        instruction: "Quel est le GAdj complet (adjectif + expansions) ?",
        options: ["grand", "très grand", "fier de son travail", "très fier de son travail", "content de toi"],
        items: [
          { text: "Il est grand.", answer: "grand" },
          { text: "Il est très grand.", answer: "très grand" },
          { text: "Il est fier de son travail.", answer: "fier de son travail" },
          { text: "Il est très fier de son travail.", answer: "très fier de son travail" },
          { text: "Je suis content de toi.", answer: "content de toi" }
        ],
        explanation: "Le GAdj inclut l'adjectif noyau ET toutes ses expansions (modificateurs avant, compléments après)."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Quel type de mot peut modifier l'adjectif (venir AVANT) ?",
        options: ["Un nom", "Un adverbe", "Un verbe", "Une préposition"],
        correct: 1,
        explanation: "Un ADVERBE peut modifier l'adjectif et venir avant : très grand, assez beau, trop petit. Il indique le degré ou l'intensité."
      },
      {
        id: 4,
        type: "identification",
        question: "Identifie le modificateur",
        instruction: "Quel est l'adverbe modificateur dans le GAdj ?",
        options: ["très", "assez", "trop", "bien", "fort", "grand", "content"],
        items: [
          { text: "TRÈS grand", answer: "très" },
          { text: "ASSEZ content", answer: "assez" },
          { text: "TROP petit", answer: "trop" },
          { text: "BIEN fatigué", answer: "bien" },
          { text: "FORT aimable", answer: "fort" }
        ],
        explanation: "Les modificateurs (adverbes) viennent AVANT l'adjectif et indiquent le degré : très, assez, trop, bien, fort, peu, si..."
      },
      {
        id: 5,
        type: "identification",
        question: "Identifie le complément de l'adjectif",
        instruction: "Quelle est l'expansion qui vient APRÈS l'adjectif ?",
        options: ["de son fils", "de toi", "à comprendre", "de réussir", "avec Marie"],
        items: [
          { text: "fier DE SON FILS", answer: "de son fils" },
          { text: "content DE TOI", answer: "de toi" },
          { text: "facile À COMPRENDRE", answer: "à comprendre" },
          { text: "heureux DE RÉUSSIR", answer: "de réussir" },
          { text: "fâché AVEC MARIE", answer: "avec Marie" }
        ],
        explanation: "Le complément de l'adjectif vient APRÈS et est souvent introduit par une préposition (de, à, avec, contre) : fier DE, content DE, facile À."
      },
      {
        id: 6,
        type: "text-input",
        question: "Construis un GAdj",
        instruction: "Ajoute un modificateur (très, assez, trop) devant l'adjectif",
        items: [
          { prompt: "___ grand (avec \"très\")", answers: ["très grand", "Très grand"] },
          { prompt: "___ content (avec \"assez\")", answers: ["assez content", "Assez content"] },
          { prompt: "___ petit (avec \"trop\")", answers: ["trop petit", "Trop petit"] },
          { prompt: "___ heureux (avec \"si\")", answers: ["si heureux", "Si heureux"] }
        ],
        explanation: "On ajoute un adverbe modificateur AVANT l'adjectif : très grand, assez content, trop petit, si heureux."
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Peut-on avoir un GAdj réduit à l'adjectif seul ?",
        options: ["Non, impossible", "Oui, l'adjectif seul forme un GAdj", "Oui, mais seulement comme attribut", "Non, il faut toujours un modificateur"],
        correct: 1,
        explanation: "Oui ! L'adjectif seul peut former un GAdj : \"Il est grand\" → GAdj = \"grand\" (sans modificateur ni complément). Le noyau suffit."
      },
      {
        id: 8,
        type: "identification",
        question: "Fonction du GAdj : épithète ou attribut ?",
        instruction: "Le GAdj est-il épithète (dans le GN) ou attribut (après verbe) ?",
        options: ["épithète", "attribut"],
        items: [
          { text: "Un homme très grand", answer: "épithète" },
          { text: "Il est très grand", answer: "attribut" },
          { text: "Une idée facile à comprendre", answer: "épithète" },
          { text: "Cette idée semble facile", answer: "attribut" },
          { text: "Un père fier de son fils", answer: "épithète" }
        ],
        explanation: "Épithète = dans le GN, à côté du nom (un homme très grand). Attribut = après verbe d'état (il est très grand)."
      }
    ]
  },

// ==========================================
// FIN DE LA PARTIE 3
// ==========================================
// ✅ COMPLÉTÉ : 0.1.9, 0.2.1, 0.2.2, 0.2.3
// 🔄 PROCHAINE PARTIE : 0.2.4, 0.2.5, 0.2.6 + fermeture
// ==========================================

// ==========================================
// src/data/content.js - PARTIE 4 FINALE
// À AJOUTER après la Partie 3
// Modules : 0.2.4, 0.2.5, 0.2.6 + FERMETURE
// ==========================================

  // ========================================
  // 0.2.4 - LE GROUPE PRÉPOSITIONNEL (GPrép)
  // ========================================
  "0.2.4": {
    title: "0.2.4 - Le Groupe Prépositionnel (GPrép)",
    theory: `
      <h3>LE GROUPE PRÉPOSITIONNEL (GPrép)</h3>
      
      <p><strong>Définition :</strong> Un groupe prépositionnel est un ensemble de mots organisés autour d'une PRÉPOSITION, qui est le noyau du groupe.</p>
      
      <p><strong>Analogie :</strong> La préposition est comme un pont qui relie deux éléments. Elle ne peut jamais être seule, elle doit toujours introduire quelque chose (son complément).</p>
      
      <h4>Structure du GPrép</h4>
      <p><strong>Structure OBLIGATOIRE :</strong> Préposition + Groupe (souvent un GN)</p>
      
      <p><strong>⚠️ Important :</strong> Une préposition n'est JAMAIS seule. Elle introduit toujours quelque chose.</p>
      
      <h4>Exemples de GPrép</h4>
      <table>
        <tr>
          <th>GPrép</th>
          <th>Analyse</th>
        </tr>
        <tr>
          <td>dans la maison</td>
          <td>Prép + GN</td>
        </tr>
        <tr>
          <td>avec courage</td>
          <td>Prép + GN</td>
        </tr>
        <tr>
          <td>pour réussir</td>
          <td>Prép + GV infinitif</td>
        </tr>
        <tr>
          <td>sans aucune hésitation</td>
          <td>Prép + GN</td>
        </tr>
        <tr>
          <td>à cause de la pluie</td>
          <td>Loc. prép. + GN</td>
        </tr>
      </table>
      
      <h4>Le noyau du GPrép</h4>
      <p>Le <strong>noyau</strong> du GPrép est la PRÉPOSITION (ou locution prépositive).</p>
      <ul>
        <li><strong>dans</strong> la maison → noyau : "dans"</li>
        <li><strong>à cause de</strong> la pluie → noyau : "à cause de" (locution)</li>
      </ul>
      
      <h4>Ce que la préposition peut introduire</h4>
      <ul>
        <li><strong>Un GN :</strong> dans <strong>la maison</strong>, avec <strong>Marie</strong></li>
        <li><strong>Un GV infinitif :</strong> pour <strong>réussir</strong>, sans <strong>hésiter</strong></li>
        <li><strong>Un GAdv :</strong> depuis <strong>hier</strong>, jusqu'à <strong>maintenant</strong></li>
      </ul>
      
      <h4>Fonction du GPrép</h4>
      <p>Le GPrép peut être :</p>
      <ul>
        <li><strong>Complément du nom :</strong> le chat <strong>de Marie</strong></li>
        <li><strong>Complément du verbe :</strong> parler <strong>à Marie</strong></li>
        <li><strong>Complément de l'adjectif :</strong> fier <strong>de toi</strong></li>
        <li><strong>Complément de phrase :</strong> <strong>Dans la cuisine</strong>, Marie travaille.</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le GPrép",
        instruction: "Quel est le groupe prépositionnel dans chaque phrase ?",
        options: ["dans la maison", "avec Marie", "pour réussir", "de mon frère", "à Montréal"],
        items: [
          { text: "Le chat dort DANS LA MAISON.", answer: "dans la maison" },
          { text: "Je viens AVEC MARIE.", answer: "avec Marie" },
          { text: "Je travaille POUR RÉUSSIR.", answer: "pour réussir" },
          { text: "Le livre DE MON FRÈRE.", answer: "de mon frère" },
          { text: "Je vais À MONTRÉAL.", answer: "à Montréal" }
        ],
        explanation: "Le GPrép = préposition + son complément : dans la maison, avec Marie, pour réussir, de mon frère, à Montréal."
      },
      {
        id: 2,
        type: "identification",
        question: "Identifie le noyau du GPrép",
        instruction: "Quelle est la PRÉPOSITION noyau ?",
        options: ["dans", "avec", "pour", "de", "à", "sans", "sur"],
        items: [
          { text: "dans la maison", answer: "dans" },
          { text: "avec Marie", answer: "avec" },
          { text: "pour réussir", answer: "pour" },
          { text: "de mon frère", answer: "de" },
          { text: "sur la table", answer: "sur" }
        ],
        explanation: "Le noyau du GPrép est la préposition : dans, avec, pour, de, sur. C'est elle qui introduit le complément."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Une préposition peut-elle être seule ?",
        options: ["Oui, toujours", "Non, jamais", "Oui, à l'oral seulement", "Ça dépend de la préposition"],
        correct: 1,
        explanation: "Non ! Une préposition ne peut JAMAIS être seule. Elle doit toujours introduire un complément. On ne peut pas dire \"Je vais à\" sans préciser où."
      },
      {
        id: 4,
        type: "identification",
        question: "Que peut introduire une préposition ?",
        instruction: "La préposition introduit : GN, GV infinitif, ou GAdv ?",
        options: ["GN", "GV infinitif", "GAdv"],
        items: [
          { text: "dans LA MAISON (groupe nominal)", answer: "GN" },
          { text: "pour RÉUSSIR (verbe à l'infinitif)", answer: "GV infinitif" },
          { text: "depuis HIER (adverbe)", answer: "GAdv" },
          { text: "avec MARIE (groupe nominal)", answer: "GN" },
          { text: "sans HÉSITER (verbe à l'infinitif)", answer: "GV infinitif" }
        ],
        explanation: "Une préposition peut introduire : un GN (la maison), un GV infinitif (réussir), ou un GAdv (hier, maintenant)."
      },
      {
        id: 5,
        type: "text-input",
        question: "Complète le GPrép",
        instruction: "Ajoute une préposition pour former un GPrép",
        items: [
          { prompt: "___ la maison (lieu intérieur)", answers: ["dans", "Dans"] },
          { prompt: "___ la table (lieu dessus)", answers: ["sur", "Sur"] },
          { prompt: "___ Marie (accompagnement)", answers: ["avec", "Avec"] },
          { prompt: "___ réussir (but)", answers: ["pour", "Pour"] },
          { prompt: "___ mon frère (appartenance)", answers: ["de", "De"] }
        ],
        explanation: "Choisis la bonne préposition selon le sens : dans (intérieur), sur (dessus), avec (accompagnement), pour (but), de (appartenance)."
      },
      {
        id: 6,
        type: "identification",
        question: "Fonction du GPrép",
        instruction: "Le GPrép est : complément du nom, du verbe, de l'adjectif, ou de phrase ?",
        options: ["complément du nom", "complément du verbe", "complément de l'adjectif", "complément de phrase"],
        items: [
          { text: "le livre DE MARIE (complète \"livre\")", answer: "complément du nom" },
          { text: "Je parle À MARIE (complète \"parle\")", answer: "complément du verbe" },
          { text: "fier DE TOI (complète \"fier\")", answer: "complément de l'adjectif" },
          { text: "DANS LA CUISINE, je travaille (complète la phrase)", answer: "complément de phrase" }
        ],
        explanation: "Le GPrép peut compléter : un nom (le livre de Marie), un verbe (parle à Marie), un adjectif (fier de toi), ou toute la phrase (Dans la cuisine, ...)."
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Dans \"à cause de la pluie\", qu'est-ce que \"à cause de\" ?",
        options: ["Une préposition simple", "Une locution prépositive", "Trois prépositions", "Un adverbe"],
        correct: 1,
        explanation: "\"À cause de\" est une locution prépositive : plusieurs mots qui fonctionnent ensemble comme une seule préposition. Autres exemples : en face de, grâce à, au lieu de."
      },
      {
        id: 8,
        type: "identification",
        question: "GPrép déplaçable ou non ?",
        instruction: "Le GPrép peut-il être déplacé dans la phrase ?",
        options: ["oui, déplaçable", "non, fixe"],
        items: [
          { text: "le livre DE MARIE (complément du nom)", answer: "non, fixe" },
          { text: "DANS LA CUISINE, je travaille (complément de phrase)", answer: "oui, déplaçable" },
          { text: "Je parle À MARIE (complément du verbe)", answer: "non, fixe" },
          { text: "AVEC COURAGE, il continue (complément de phrase)", answer: "oui, déplaçable" }
        ],
        explanation: "Les GPrép compléments de phrase sont déplaçables. Les GPrép compléments du nom, du verbe ou de l'adjectif sont généralement fixes."
      }
    ]
  },

  // ========================================
  // 0.2.5 - LE GROUPE ADVERBIAL (GAdv)
  // ========================================
  "0.2.5": {
    title: "0.2.5 - Le Groupe Adverbial (GAdv)",
    theory: `
      <h3>LE GROUPE ADVERBIAL (GAdv)</h3>
      
      <p><strong>Définition :</strong> Un groupe adverbial est un ensemble de mots organisés autour d'un ADVERBE, qui est le noyau du groupe.</p>
      
      <p><strong>Analogie :</strong> C'est le groupe le plus simple ! L'adverbe est souvent seul, mais parfois il est précédé d'un autre adverbe qui le modifie (très rapidement = très + rapidement).</p>
      
      <h4>Structure du GAdv</h4>
      <p><strong>Structure :</strong> (Modificateur) + Adverbe</p>
      
      <h4>Exemples de GAdv</h4>
      <table>
        <tr>
          <th>GAdv</th>
          <th>Analyse</th>
        </tr>
        <tr>
          <td>rapidement</td>
          <td>Adv seul</td>
        </tr>
        <tr>
          <td>très rapidement</td>
          <td>Adv + Adv</td>
        </tr>
        <tr>
          <td>bien trop lentement</td>
          <td>Adv + Adv + Adv</td>
        </tr>
        <tr>
          <td>assez souvent</td>
          <td>Adv + Adv</td>
        </tr>
      </table>
      
      <h4>Le noyau du GAdv</h4>
      <p>Le <strong>noyau</strong> du GAdv est l'ADVERBE principal.</p>
      <ul>
        <li>très <strong>rapidement</strong> → noyau : "rapidement"</li>
        <li>bien trop <strong>lentement</strong> → noyau : "lentement"</li>
      </ul>
      
      <h4>Modificateurs d'adverbes</h4>
      <p>Les adverbes qui peuvent modifier d'autres adverbes :</p>
      <ul>
        <li><strong>très, trop, assez, bien, fort, si, plus, moins, peu</strong></li>
      </ul>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>très rapidement</li>
        <li>trop lentement</li>
        <li>assez souvent</li>
        <li>bien vite</li>
        <li>plus tard</li>
      </ul>
      
      <h4>Fonction du GAdv</h4>
      <p>Le GAdv peut modifier :</p>
      <ul>
        <li><strong>Un verbe :</strong> Il parle <strong>rapidement</strong>.</li>
        <li><strong>Un adjectif :</strong> Il est <strong>très</strong> grand.</li>
        <li><strong>Un autre adverbe :</strong> Il parle <strong>très</strong> rapidement.</li>
        <li><strong>Une phrase :</strong> <strong>Heureusement</strong>, il est arrivé.</li>
      </ul>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Identifie le GAdv",
        instruction: "Quel est le groupe adverbial dans chaque phrase ?",
        options: ["rapidement", "très rapidement", "bien trop vite", "assez souvent", "hier"],
        items: [
          { text: "Il parle RAPIDEMENT.", answer: "rapidement" },
          { text: "Il parle TRÈS RAPIDEMENT.", answer: "très rapidement" },
          { text: "Il part BIEN TROP VITE.", answer: "bien trop vite" },
          { text: "Je viens ASSEZ SOUVENT.", answer: "assez souvent" },
          { text: "Je suis arrivé HIER.", answer: "hier" }
        ],
        explanation: "Le GAdv = adverbe seul ou adverbe modifié par un autre adverbe : rapidement, très rapidement, bien trop vite."
      },
      {
        id: 2,
        type: "identification",
        question: "Identifie le noyau du GAdv",
        instruction: "Quel est l'ADVERBE noyau ?",
        options: ["rapidement", "lentement", "souvent", "vite", "tard", "très", "bien"],
        items: [
          { text: "rapidement", answer: "rapidement" },
          { text: "très rapidement", answer: "rapidement" },
          { text: "bien trop lentement", answer: "lentement" },
          { text: "assez souvent", answer: "souvent" },
          { text: "plus tard", answer: "tard" }
        ],
        explanation: "Le noyau du GAdv est l'adverbe principal : rapidement, lentement, souvent, tard. Les autres adverbes (très, bien, assez, plus) sont modificateurs."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Un GAdv peut-il être réduit à un seul adverbe ?",
        options: ["Non, il faut toujours un modificateur", "Oui, l'adverbe seul forme un GAdv", "Oui, mais seulement à l'oral", "Non, il faut au moins deux adverbes"],
        correct: 1,
        explanation: "Oui ! L'adverbe seul peut former un GAdv : \"Il parle rapidement\" → GAdv = \"rapidement\" (sans modificateur). C'est même le cas le plus fréquent."
      },
      {
        id: 4,
        type: "text-input",
        question: "Construis un GAdv avec modificateur",
        instruction: "Ajoute un modificateur (très, trop, assez, bien) devant l'adverbe",
        items: [
          { prompt: "___ rapidement (avec \"très\")", answers: ["très rapidement", "Très rapidement"] },
          { prompt: "___ lentement (avec \"trop\")", answers: ["trop lentement", "Trop lentement"] },
          { prompt: "___ souvent (avec \"assez\")", answers: ["assez souvent", "Assez souvent"] },
          { prompt: "___ vite (avec \"bien\")", answers: ["bien vite", "Bien vite"] }
        ],
        explanation: "On ajoute un adverbe modificateur AVANT l'adverbe principal : très rapidement, trop lentement, assez souvent, bien vite."
      },
      {
        id: 5,
        type: "identification",
        question: "Que modifie le GAdv ?",
        instruction: "Le GAdv modifie : verbe, adjectif, adverbe, ou phrase ?",
        options: ["verbe", "adjectif", "adverbe", "phrase"],
        items: [
          { text: "Il parle RAPIDEMENT (modifie \"parle\")", answer: "verbe" },
          { text: "Il est TRÈS grand (modifie \"grand\")", answer: "adjectif" },
          { text: "Il parle TRÈS rapidement (modifie \"rapidement\")", answer: "adverbe" },
          { text: "HEUREUSEMENT, il arrive (modifie toute la phrase)", answer: "phrase" }
        ],
        explanation: "Le GAdv peut modifier un verbe (parle rapidement), un adjectif (très grand), un autre adverbe (très rapidement), ou toute la phrase (Heureusement, ...)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Dans \"très rapidement\", quel adverbe est le modificateur ?",
        options: ["très", "rapidement", "Les deux", "Aucun"],
        correct: 0,
        explanation: "\"Très\" est le modificateur (il modifie l'intensité). \"Rapidement\" est le noyau (l'adverbe principal). Structure : modificateur + noyau."
      },
      {
        id: 7,
        type: "identification",
        question: "Adverbes modificateurs",
        instruction: "Lesquels peuvent modifier un autre adverbe ?",
        options: ["oui", "non"],
        items: [
          { text: "très (très vite)", answer: "oui" },
          { text: "hier (hier vite)", answer: "non" },
          { text: "trop (trop lentement)", answer: "oui" },
          { text: "ici (ici rapidement)", answer: "non" },
          { text: "assez (assez souvent)", answer: "oui" }
        ],
        explanation: "Modificateurs d'adverbes : très, trop, assez, bien, fort, si, plus, moins, peu. Les adverbes de temps (hier) et de lieu (ici) ne modifient pas d'autres adverbes."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Dans \"Il parle BIEN TROP LENTEMENT\", combien d'adverbes y a-t-il ?",
        options: ["1 adverbe", "2 adverbes", "3 adverbes", "4 adverbes"],
        correct: 2,
        explanation: "Il y a 3 adverbes : \"bien\" (modificateur), \"trop\" (modificateur), \"lentement\" (noyau). Structure : modificateur + modificateur + noyau."
      }
    ]
  },

  // ========================================
  // 0.2.6 - LES TESTS DE MANIPULATION
  // ========================================
  "0.2.6": {
    title: "0.2.6 - Les tests de manipulation",
    theory: `
      <h3>LES TESTS DE MANIPULATION SYNTAXIQUE</h3>
      
      <p><strong>Définition :</strong> Les tests de manipulation sont des outils pour identifier les groupes syntaxiques et comprendre leur fonction dans la phrase.</p>
      
      <p><strong>Analogie :</strong> C'est comme des expériences scientifiques sur la phrase ! On teste ce qui peut bouger, ce qui peut disparaître, ce qui peut être remplacé. Ces tests nous révèlent la structure cachée de la phrase.</p>
      
      <h4>Les 4 tests principaux</h4>
      
      <h4>TEST 1 : Le REMPLACEMENT (substitution)</h4>
      <p><strong>Principe :</strong> On remplace le groupe par un mot ou une expression plus courte.</p>
      <table>
        <tr>
          <th>Groupe</th>
          <th>Peut être remplacé par</th>
        </tr>
        <tr>
          <td>GN sujet</td>
          <td>il, elle, ils, elles, cela</td>
        </tr>
        <tr>
          <td>GN complément direct</td>
          <td>le, la, les, cela</td>
        </tr>
        <tr>
          <td>GPrép complément indirect</td>
          <td>lui, leur, y, en</td>
        </tr>
        <tr>
          <td>GAdj attribut</td>
          <td>le (invariable)</td>
        </tr>
        <tr>
          <td>GPrép ou GAdv (compl. de phrase)</td>
          <td>alors, ainsi, là</td>
        </tr>
      </table>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>[Le petit chat de ma voisine] dort. → <strong>Il</strong> dort. (GN sujet)</li>
        <li>Je mange [une délicieuse pomme rouge]. → Je <strong>la</strong> mange. (GN-CD)</li>
        <li>Marie est [très intelligente]. → Marie <strong>l'</strong>est. (GAdj attribut)</li>
      </ul>
      
      <h4>TEST 2 : L'EFFACEMENT (suppression)</h4>
      <p><strong>Principe :</strong> On supprime le groupe. Si la phrase reste grammaticale, le groupe est facultatif.</p>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>Marie mange une pomme [dans la cuisine]. → Marie mange une pomme. ✓ (effaçable = complément de phrase)</li>
        <li>Marie mange [une pomme]. → Marie mange. ✓ (grammatical mais sens incomplet)</li>
        <li>[Marie] mange une pomme. → Mange une pomme. ✗ (le sujet n'est pas effaçable, sauf à l'impératif)</li>
      </ul>
      
      <h4>TEST 3 : Le DÉPLACEMENT</h4>
      <p><strong>Principe :</strong> On déplace le groupe dans la phrase.</p>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>[Dans la cuisine], Marie mange une pomme. ✓</li>
        <li>Marie mange une pomme [dans la cuisine]. ✓</li>
        <li>Marie, [dans la cuisine], mange une pomme. ✓</li>
        <li>→ "dans la cuisine" est déplaçable = <strong>complément de phrase</strong></li>
      </ul>
      
      <ul>
        <li>Marie mange [une pomme]. → *Une pomme Marie mange. ✗</li>
        <li>→ Le CD n'est généralement pas déplaçable</li>
      </ul>
      
      <h4>TEST 4 : L'ENCADREMENT par "c'est... qui/que"</h4>
      <p><strong>Principe :</strong> On encadre le groupe pour le mettre en évidence.</p>
      
      <p><strong>Exemples :</strong></p>
      <ul>
        <li>C'est [le chat] qui dort. (identifie le GN sujet)</li>
        <li>C'est [une pomme] que Marie mange. (identifie le GN-CD)</li>
        <li>C'est [dans la cuisine] que Marie mange. (identifie le GPrép)</li>
      </ul>
      
      <h4>Tableau récapitulatif des tests</h4>
      <table>
        <tr>
          <th>Fonction</th>
          <th>Remplacement</th>
          <th>Effacement</th>
          <th>Déplacement</th>
          <th>Encadrement</th>
        </tr>
        <tr>
          <td>Sujet</td>
          <td>il/elle/ils/elles</td>
          <td>Non (obligatoire)</td>
          <td>Non (fixe)</td>
          <td>C'est... qui</td>
        </tr>
        <tr>
          <td>CD</td>
          <td>le/la/les</td>
          <td>Parfois</td>
          <td>Non (fixe)</td>
          <td>C'est... que</td>
        </tr>
        <tr>
          <td>CI</td>
          <td>lui/leur/y/en</td>
          <td>Parfois</td>
          <td>Non (fixe)</td>
          <td>C'est... que</td>
        </tr>
        <tr>
          <td>Compl. de phrase</td>
          <td>alors/ainsi/là</td>
          <td>Oui (facultatif)</td>
          <td>Oui (mobile)</td>
          <td>C'est... que</td>
        </tr>
      </table>
    `,
    exercises: [
      {
        id: 1,
        type: "identification",
        question: "Test du remplacement : remplace le GN sujet",
        instruction: "Remplace le GN souligné par un pronom",
        options: ["il", "elle", "ils", "elles", "le", "la"],
        items: [
          { text: "LE CHAT dort.", answer: "il" },
          { text: "LA MAISON est grande.", answer: "elle" },
          { text: "LES ENFANTS jouent.", answer: "ils" },
          { text: "LES FILLES arrivent.", answer: "elles" },
          { text: "LE LIVRE DE MARIE est intéressant.", answer: "il" }
        ],
        explanation: "Le GN sujet se remplace par : il (masc. sg), elle (fém. sg), ils (masc. pl), elles (fém. pl)."
      },
      {
        id: 2,
        type: "identification",
        question: "Test de l'effacement",
        instruction: "Le groupe peut-il être supprimé sans rendre la phrase agrammaticale ?",
        options: ["oui, effaçable", "non, obligatoire"],
        items: [
          { text: "Marie mange DANS LA CUISINE", answer: "oui, effaçable" },
          { text: "MARIE mange une pomme", answer: "non, obligatoire" },
          { text: "Je parle À MARIE", answer: "non, obligatoire" },
          { text: "HIER, je suis arrivé", answer: "oui, effaçable" },
          { text: "Elle est TRÈS CONTENTE", answer: "non, obligatoire" }
        ],
        explanation: "Effaçable = complément de phrase (dans la cuisine, hier). Obligatoire = sujet (Marie), compléments du verbe (à Marie), attribut (très contente)."
      },
      {
        id: 3,
        type: "identification",
        question: "Test du déplacement",
        instruction: "Le groupe peut-il être déplacé dans la phrase ?",
        options: ["oui, déplaçable", "non, fixe"],
        items: [
          { text: "Marie mange DANS LA CUISINE", answer: "oui, déplaçable" },
          { text: "Marie mange UNE POMME", answer: "non, fixe" },
          { text: "HIER, je suis venu", answer: "oui, déplaçable" },
          { text: "Je parle À MARIE", answer: "non, fixe" },
          { text: "AVEC COURAGE, il continue", answer: "oui, déplaçable" }
        ],
        explanation: "Déplaçable = complément de phrase (dans la cuisine, hier, avec courage). Fixe = compléments du verbe (une pomme, à Marie)."
      },
      {
        id: 4,
        type: "text-input",
        question: "Test de l'encadrement : utilise \"c'est... qui\"",
        instruction: "Encadre le sujet avec \"c'est... qui\"",
        items: [
          { prompt: "Le chat dort. → C'est ___ qui dort.", answers: ["le chat", "Le chat"] },
          { prompt: "Marie mange. → C'est ___ qui mange.", answers: ["Marie", "marie"] },
          { prompt: "Les enfants jouent. → Ce sont ___ qui jouent.", answers: ["les enfants", "Les enfants"] }
        ],
        explanation: "Pour identifier le sujet, on l'encadre avec \"C'est... qui\" : C'est le chat qui dort, C'est Marie qui mange."
      },
      {
        id: 5,
        type: "text-input",
        question: "Test de l'encadrement : utilise \"c'est... que\"",
        instruction: "Encadre le complément avec \"c'est... que\"",
        items: [
          { prompt: "Marie mange UNE POMME. → C'est ___ que Marie mange.", answers: ["une pomme", "Une pomme"] },
          { prompt: "Je travaille DANS LA CUISINE. → C'est ___ que je travaille.", answers: ["dans la cuisine", "Dans la cuisine"] }
        ],
        explanation: "Pour identifier un complément, on l'encadre avec \"C'est... que\" : C'est une pomme que Marie mange, C'est dans la cuisine que je travaille."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Quel test permet d'identifier le sujet ?",
        options: ["Remplacement par le/la/les", "Encadrement par \"c'est... qui\"", "Effacement", "Déplacement"],
        correct: 1,
        explanation: "Pour identifier le sujet, on utilise l'encadrement par \"C'est... qui\" : \"Le chat dort\" → \"C'est le chat qui dort\"."
      },
      {
        id: 7,
        type: "identification",
        question: "Combine les tests",
        instruction: "Ce groupe est-il un complément de phrase (effaçable ET déplaçable) ?",
        options: ["oui", "non"],
        items: [
          { text: "DANS LA CUISINE, Marie travaille", answer: "oui" },
          { text: "Marie mange UNE POMME", answer: "non" },
          { text: "HIER, je suis venu", answer: "oui" },
          { text: "Je parle À MARIE", answer: "non" },
          { text: "AVEC PASSION, il chante", answer: "oui" }
        ],
        explanation: "Un complément de phrase est à la fois effaçable ET déplaçable : \"dans la cuisine\", \"hier\", \"avec passion\". Les compléments du verbe (une pomme, à Marie) ne le sont pas."
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Quel pronom remplace un GN complément direct ?",
        options: ["il/elle", "le/la/les", "lui/leur", "y/en"],
        correct: 1,
        explanation: "Un GN complément direct se remplace par : le/la/les. Ex: \"Je mange une pomme\" → \"Je la mange\"."
      }
    ]
  },

// ========================================
// MODULE 0.3 : LES FONCTIONS SYNTAXIQUES
// ========================================

// ========================================
// 0.3.1 - LE SUJET
// ========================================
"0.3.1": {
  title: "0.3.1 - Le Sujet",
  theory: `
    <h3>LE SUJET</h3>
    
    <p><strong>Définition simple :</strong> Le sujet, c'est <em>de qui ou de quoi on parle</em> dans la phrase. C'est l'élément qui fait l'action (pour les verbes d'action) ou qui est dans l'état décrit (pour les verbes d'état).</p>
    
    <p><strong>Analogie :</strong> Imagine une scène de théâtre. Le sujet, c'est l'acteur principal, celui qui est sous les projecteurs. Toute la phrase parle de lui : que fait-il ? Comment est-il ? Le reste de la phrase (le prédicat) décrit ce qu'il fait ou comment il est.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li><strong>Test "C'est... qui" :</strong> Pose la question "C'est qui qui + verbe ?" ou "C'est quoi qui + verbe ?"</li>
      <li><strong>Le verbe s'accorde avec le sujet</strong> en personne et en nombre</li>
      <li><strong>Le sujet est généralement placé AVANT le verbe</strong> (sauf inversion)</li>
      <li><strong>Le sujet est obligatoire</strong> (on ne peut pas le supprimer)</li>
    </ul>
    
    <h4>Le test infaillible : "C'est... qui"</h4>
    <p>Pour trouver le sujet, encadre-le avec <strong>"C'est... qui + verbe"</strong> :</p>
    <ul>
      <li>Le chat dort. → <strong>C'est le chat qui</strong> dort. ✓</li>
      <li>Marie mange une pomme. → <strong>C'est Marie qui</strong> mange. ✓</li>
      <li>Les enfants jouent dans le jardin. → <strong>Ce sont les enfants qui</strong> jouent. ✓</li>
    </ul>
    
    <h4>Nature du sujet</h4>
    <p>Le sujet peut être de différentes natures :</p>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
        <th>Test</th>
      </tr>
      <tr>
        <td><strong>Groupe Nominal (GN)</strong></td>
        <td><strong>Le petit chat noir</strong> dort.</td>
        <td>C'est le petit chat noir qui dort.</td>
      </tr>
      <tr>
        <td><strong>Nom propre</strong></td>
        <td><strong>Marie</strong> travaille.</td>
        <td>C'est Marie qui travaille.</td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td><strong>Elle</strong> chante.</td>
        <td>C'est elle qui chante.</td>
      </tr>
      <tr>
        <td><strong>Verbe à l'infinitif</strong></td>
        <td><strong>Manger</strong> est nécessaire.</td>
        <td>C'est manger qui est nécessaire.</td>
      </tr>
      <tr>
        <td><strong>Proposition subordonnée</strong></td>
        <td><strong>Qu'il parte</strong> me rend triste.</td>
        <td>C'est qu'il parte qui me rend triste.</td>
      </tr>
    </table>
    
    <h4>Position du sujet</h4>
    
    <h5>1. Sujet AVANT le verbe (ordre normal)</h5>
    <p>C'est la position la plus fréquente :</p>
    <ul>
      <li><strong>Marie</strong> dort.</li>
      <li><strong>Le chien</strong> aboie.</li>
      <li><strong>Nous</strong> partons demain.</li>
    </ul>
    
    <h5>2. Sujet APRÈS le verbe (inversion)</h5>
    <p>Le sujet peut être inversé dans certains cas :</p>
    <table>
      <tr>
        <th>Situation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Phrase interrogative</strong></td>
        <td>Viens-<strong>tu</strong> demain ?</td>
      </tr>
      <tr>
        <td><strong>Incise (citation)</strong></td>
        <td>"Je pars", dit-<strong>elle</strong>.</td>
      </tr>
      <tr>
        <td><strong>Emphase stylistique</strong></td>
        <td>Vint ensuite <strong>le temps des vacances</strong>.</td>
      </tr>
      <tr>
        <td><strong>Après certains adverbes</strong></td>
        <td>Peut-être <strong>viendra-t-il</strong>.</td>
      </tr>
    </table>
    
    <p><strong>⚠️ Attention !</strong> Même quand le sujet est après le verbe, le test "C'est... qui" fonctionne toujours :</p>
    <ul>
      <li>Vient-il ? → C'est <strong>il</strong> qui vient.</li>
    </ul>
    
    <h4>Accord du verbe avec le sujet</h4>
    <p><strong>Règle fondamentale :</strong> Le verbe s'accorde TOUJOURS en personne et en nombre avec son sujet.</p>
    
    <table>
      <tr>
        <th>Sujet</th>
        <th>Verbe</th>
        <th>Explication</th>
      </tr>
      <tr>
        <td>Le chat</td>
        <td>dort</td>
        <td>3e pers. singulier</td>
      </tr>
      <tr>
        <td>Les chats</td>
        <td>dorment</td>
        <td>3e pers. pluriel</td>
      </tr>
      <tr>
        <td>Je</td>
        <td>dors</td>
        <td>1re pers. singulier</td>
      </tr>
      <tr>
        <td>Nous</td>
        <td>dormons</td>
        <td>1re pers. pluriel</td>
      </tr>
    </table>
    
    <h4>Cas particuliers</h4>
    
    <h5>1. Sujet "qui" (pronom relatif)</h5>
    <p>Le pronom relatif "qui" prend la personne et le nombre de son antécédent :</p>
    <ul>
      <li>C'est <strong>moi qui suis</strong> responsable. (1re pers. sg)</li>
      <li>C'est <strong>toi qui es</strong> en retard. (2e pers. sg)</li>
      <li>C'est <strong>nous qui avons</strong> gagné. (1re pers. pl)</li>
    </ul>
    
    <h5>2. Plusieurs sujets coordonnés</h5>
    <p>Quand il y a plusieurs sujets, le verbe se met au pluriel :</p>
    <ul>
      <li><strong>Pierre et Marie</strong> arrivent. (ils arrivent)</li>
      <li><strong>Le chat et le chien</strong> dorment. (ils dorment)</li>
    </ul>
    
    <h5>3. Sujet collectif</h5>
    <p>Avec un nom collectif, on peut accorder au singulier OU au pluriel selon le sens :</p>
    <ul>
      <li>La foule <strong>manifeste</strong>. (considérée comme un tout)</li>
      <li>La foule <strong>manifestent</strong>. (les gens qui la composent)</li>
    </ul>
    
    <h4>Exemples détaillés avec analyse</h4>
    
    <table>
      <tr>
        <th>Phrase</th>
        <th>Sujet</th>
        <th>Nature</th>
        <th>Test</th>
      </tr>
      <tr>
        <td>Marie travaille à Montréal.</td>
        <td>Marie</td>
        <td>Nom propre</td>
        <td>C'est Marie qui travaille.</td>
      </tr>
      <tr>
        <td>Le petit chat noir dort sur le canapé.</td>
        <td>Le petit chat noir</td>
        <td>GN</td>
        <td>C'est le petit chat noir qui dort.</td>
      </tr>
      <tr>
        <td>Nous partons demain matin.</td>
        <td>Nous</td>
        <td>Pronom personnel</td>
        <td>C'est nous qui partons.</td>
      </tr>
      <tr>
        <td>Mentir est mal.</td>
        <td>Mentir</td>
        <td>Verbe infinitif</td>
        <td>C'est mentir qui est mal.</td>
      </tr>
      <tr>
        <td>Celui qui travaille réussit.</td>
        <td>Celui qui travaille</td>
        <td>Pronom + sub. relative</td>
        <td>C'est celui qui travaille qui réussit.</td>
      </tr>
    </table>
    
    <h4>Schéma récapitulatif</h4>
    <p><strong>Structure de base de la phrase :</strong></p>
    <p style="padding: 15px; border: 1px solid #000; display: inline-block;">
      <strong>[SUJET]</strong> + [prédicat]
    </p>
    
    <p><strong>Le sujet :</strong></p>
    <ul>
      <li>✓ Répond à "Qui ?" ou "Qu'est-ce qui ?"</li>
      <li>✓ Test "C'est... qui + verbe"</li>
      <li>✓ Détermine l'accord du verbe</li>
      <li>✓ Généralement placé avant le verbe</li>
      <li>✓ Obligatoire (sauf impératif)</li>
      <li>✓ Peut être un GN, pronom, nom propre, infinitif, proposition</li>
    </ul>
  `
},

// ========================================
// 0.3.2 - LE PRÉDICAT
// ========================================
"0.3.2": {
  title: "0.3.2 - Le Prédicat",
  theory: `
    <h3>LE PRÉDICAT</h3>
    
    <p><strong>Définition simple :</strong> Le prédicat, c'est <em>ce qu'on dit du sujet</em>. C'est tout ce qui n'est pas le sujet dans la phrase, c'est-à-dire le verbe et tout ce qui l'accompagne (compléments, attributs, etc.).</p>
    
    <p><strong>Analogie :</strong> Si le sujet est l'acteur principal sur scène, le prédicat est l'action qu'il accomplit ou l'état dans lequel il se trouve. C'est le "spectacle" : que fait l'acteur ? Où ? Comment ? Avec qui ?</p>
    
    <h4>Structure de la phrase</h4>
    <p>Toute phrase de base se divise en DEUX constituants obligatoires :</p>
    
    <p style="padding: 15px; border: 1px solid #000; display: inline-block;">
      <strong>PHRASE = [SUJET] + [PRÉDICAT]</strong>
    </p>
    
    <h4>Qu'est-ce que le prédicat contient ?</h4>
    <p>Le prédicat = le <strong>Groupe Verbal (GV)</strong> complet, c'est-à-dire :</p>
    <ul>
      <li><strong>Le verbe conjugué</strong> (noyau obligatoire)</li>
      <li><strong>Tous les compléments du verbe</strong> (CD, CI, attribut)</li>
      <li><strong>Les modificateurs du verbe</strong> (adverbes)</li>
    </ul>
    
    <p><strong>⚠️ Attention !</strong> Le prédicat ne contient PAS :</p>
    <ul>
      <li>❌ Le sujet</li>
      <li>❌ Les compléments de phrase (qui sont facultatifs et mobiles)</li>
    </ul>
    
    <h4>Comment le reconnaître ?</h4>
    <p><strong>Méthode simple :</strong> Une fois que tu as identifié le sujet, <em>tout le reste qui n'est pas un complément de phrase</em> forme le prédicat.</p>
    
    <table>
      <tr>
        <th>Phrase complète</th>
        <th>Sujet</th>
        <th>Prédicat</th>
      </tr>
      <tr>
        <td>Le chat dort.</td>
        <td>[Le chat]</td>
        <td>[dort]</td>
      </tr>
      <tr>
        <td>Marie mange une pomme.</td>
        <td>[Marie]</td>
        <td>[mange une pomme]</td>
      </tr>
      <tr>
        <td>Les enfants jouent dans le jardin.</td>
        <td>[Les enfants]</td>
        <td>[jouent dans le jardin]</td>
      </tr>
      <tr>
        <td>Elle est très intelligente.</td>
        <td>[Elle]</td>
        <td>[est très intelligente]</td>
      </tr>
    </table>
    
    <h4>Les différents types de prédicats</h4>
    
    <h5>1. Prédicat avec verbe seul (verbe intransitif)</h5>
    <p>Le prédicat peut être constitué uniquement du verbe :</p>
    <ul>
      <li>Le chat [<strong>dort</strong>].</li>
      <li>Marie [<strong>sourit</strong>].</li>
      <li>Le soleil [<strong>brille</strong>].</li>
    </ul>
    
    <h5>2. Prédicat avec complément direct (verbe transitif direct)</h5>
    <p>Le prédicat contient le verbe + un complément direct (CD) :</p>
    <ul>
      <li>Marie [<strong>mange une pomme</strong>].</li>
      <li>Pierre [<strong>lit un livre</strong>].</li>
      <li>J'[<strong>aime le chocolat</strong>].</li>
    </ul>
    
    <h5>3. Prédicat avec complément indirect (verbe transitif indirect)</h5>
    <p>Le prédicat contient le verbe + un complément indirect (CI) :</p>
    <ul>
      <li>Je [<strong>parle à Marie</strong>].</li>
      <li>Elle [<strong>pense à son avenir</strong>].</li>
      <li>Nous [<strong>téléphonons à nos parents</strong>].</li>
    </ul>
    
    <h5>4. Prédicat avec attribut (verbe attributif)</h5>
    <p>Le prédicat contient le verbe + un attribut du sujet :</p>
    <ul>
      <li>Marie [<strong>est intelligente</strong>].</li>
      <li>Le chat [<strong>semble fatigué</strong>].</li>
      <li>Cette situation [<strong>devient problématique</strong>].</li>
    </ul>
    
    <h5>5. Prédicat avec plusieurs compléments</h5>
    <p>Le prédicat peut contenir plusieurs éléments :</p>
    <ul>
      <li>Pierre [<strong>donne un cadeau à Marie</strong>]. (verbe + CD + CI)</li>
      <li>Elle [<strong>parle lentement à ses élèves</strong>]. (verbe + modificateur + CI)</li>
      <li>Je [<strong>trouve ce film très intéressant</strong>]. (verbe + CD + attribut du CD)</li>
    </ul>
    
    <h4>Différence entre prédicat et complément de phrase</h4>
    <p>C'est ici que beaucoup d'élèves se trompent ! Voici comment les distinguer :</p>
    
    <table>
      <tr>
        <th>Critère</th>
        <th>Prédicat (GV)</th>
        <th>Complément de phrase</th>
      </tr>
      <tr>
        <td><strong>Obligatoire ?</strong></td>
        <td>✓ Oui (on ne peut pas le supprimer)</td>
        <td>✗ Non (facultatif)</td>
      </tr>
      <tr>
        <td><strong>Déplaçable ?</strong></td>
        <td>✗ Non (reste après le sujet)</td>
        <td>✓ Oui (très mobile)</td>
      </tr>
      <tr>
        <td><strong>Position</strong></td>
        <td>Après le sujet</td>
        <td>Début, milieu ou fin de phrase</td>
      </tr>
      <tr>
        <td><strong>Fonction</strong></td>
        <td>Dit ce que fait/est le sujet</td>
        <td>Donne le contexte (temps, lieu, cause...)</td>
      </tr>
    </table>
    
    <h4>Exemples d'analyse complète</h4>
    
    <h5>Exemple 1 : Phrase simple</h5>
    <p><strong>Le chat dort.</strong></p>
    <ul>
      <li>Sujet : [Le chat]</li>
      <li>Prédicat : [dort]</li>
      <li>Analyse : Le prédicat est un verbe intransitif seul.</li>
    </ul>
    
    <h5>Exemple 2 : Avec complément de phrase</h5>
    <p><strong>Hier, le chat dormait sur le canapé.</strong></p>
    <ul>
      <li>Complément de phrase : [Hier] (effaçable, déplaçable)</li>
      <li>Sujet : [le chat]</li>
      <li>Prédicat : [dormait sur le canapé]</li>
      <li>Analyse : Le prédicat contient le verbe "dormait" + le complément "sur le canapé".</li>
    </ul>
    
    <p><strong>⚠️ Piège !</strong> "Sur le canapé" fait partie du prédicat, PAS un complément de phrase, car :</p>
    <ul>
      <li>✗ On ne peut pas vraiment le supprimer (le sens devient vague)</li>
      <li>✗ Il est moins mobile qu'un vrai complément de phrase</li>
      <li>✓ Il complète directement le verbe "dormir" (où ?)</li>
    </ul>
    
    <h5>Exemple 3 : Phrase complexe</h5>
    <p><strong>Chaque matin, Marie donne un biscuit à son chien dans la cuisine.</strong></p>
    <ul>
      <li>Complément de phrase : [Chaque matin]</li>
      <li>Sujet : [Marie]</li>
      <li>Prédicat : [donne un biscuit à son chien dans la cuisine]</li>
      <li>Analyse : Le prédicat contient le verbe "donne" + CD "un biscuit" + CI "à son chien" + complément de lieu "dans la cuisine".</li>
    </ul>
    
    <h4>Tests pour identifier le prédicat</h4>
    
    <h5>Test 1 : Méthode par élimination</h5>
    <ol>
      <li>Trouve le sujet (test "C'est... qui")</li>
      <li>Trouve les compléments de phrase (effaçables + déplaçables)</li>
      <li>Ce qui reste = le prédicat</li>
    </ol>
    
    <p><strong>Exemple :</strong> Demain, Marie partira en voyage avec Pierre.</p>
    <ul>
      <li>Sujet : [Marie]</li>
      <li>Complément de phrase : [Demain] (effaçable, déplaçable)</li>
      <li>Prédicat : [partira en voyage avec Pierre]</li>
    </ul>
    
    <h5>Test 2 : Questions sur le verbe</h5>
    <p>Le prédicat répond aux questions sur le verbe :</p>
    <ul>
      <li><strong>Fait quoi ?</strong> → mange une pomme</li>
      <li><strong>Est comment ?</strong> → est intelligente</li>
      <li><strong>Va où ?</strong> → va à Montréal</li>
    </ul>
    
    <h4>Importance du prédicat</h4>
    <p>Le prédicat est <strong>obligatoire</strong> dans toute phrase. Sans prédicat, on n'a pas de phrase complète :</p>
    <ul>
      <li>✗ "Le chat" → Pas de phrase (pas de prédicat)</li>
      <li>✓ "Le chat dort." → Phrase complète (sujet + prédicat)</li>
    </ul>
    
    <h4>Schéma récapitulatif</h4>
    <p><strong>Structure de la phrase complète :</strong></p>
    <p style="padding: 15px; border: 1px solid #000;">
      <strong>(Complément de phrase) + [SUJET] + [PRÉDICAT] + (Complément de phrase)</strong>
    </p>
    
    <p>Exemple : <em>(Hier,) [Marie] [a mangé une pomme] (dans la cuisine).</em></p>
    
    <h4>Points clés à retenir</h4>
    <ul>
      <li>✓ Le prédicat = ce qu'on dit du sujet</li>
      <li>✓ Le prédicat = le Groupe Verbal (GV) complet</li>
      <li>✓ Le prédicat est OBLIGATOIRE (contrairement aux compléments de phrase)</li>
      <li>✓ Le prédicat contient toujours un verbe</li>
      <li>✓ Le prédicat peut contenir : verbe seul, verbe + CD, verbe + CI, verbe + attribut, etc.</li>
      <li>✓ Les compléments de phrase ne font PAS partie du prédicat</li>
    </ul>
  `
},

// ========================================
// 0.3.3 - LE COMPLÉMENT DE PHRASE
// ========================================
"0.3.3": {
  title: "0.3.3 - Le Complément de phrase",
  theory: `
    <h3>LE COMPLÉMENT DE PHRASE</h3>
    
    <p><strong>Définition simple :</strong> Le complément de phrase est un groupe de mots qui apporte une information <em>facultative</em> sur le contexte de la phrase (temps, lieu, cause, but, etc.). Il ne fait partie ni du sujet ni du prédicat.</p>
    
    <p><strong>Analogie :</strong> Imagine que tu racontes une histoire. Le sujet et le prédicat, c'est l'action principale : "Marie mange une pomme". Le complément de phrase, c'est le décor et le contexte : "Hier matin, dans la cuisine, parce qu'elle avait faim". Tu peux enlever le décor, l'histoire reste compréhensible !</p>
    
    <h4>Les deux tests infaillibles</h4>
    <p>Un complément de phrase a DEUX propriétés essentielles :</p>
    
    <table>
      <tr>
        <th>Test</th>
        <th>Description</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>1. EFFAÇABLE</strong></td>
        <td>On peut le supprimer sans rendre la phrase agrammaticale</td>
        <td>Marie travaille <strong>[dans la cuisine]</strong>.<br>→ Marie travaille. ✓</td>
      </tr>
      <tr>
        <td><strong>2. DÉPLAÇABLE</strong></td>
        <td>On peut le déplacer à différents endroits dans la phrase</td>
        <td><strong>[Dans la cuisine]</strong>, Marie travaille.<br>Marie travaille <strong>[dans la cuisine]</strong>.<br>Marie, <strong>[dans la cuisine]</strong>, travaille. ✓</td>
      </tr>
    </table>
    
    <p><strong>⚠️ Important !</strong> Un complément de phrase doit réussir LES DEUX tests. Si un complément n'est pas effaçable OU pas déplaçable, ce n'est PAS un complément de phrase.</p>
    
    <h4>Position du complément de phrase</h4>
    <p>Le complément de phrase est très mobile :</p>
    
    <h5>Position 1 : Au début de la phrase</h5>
    <ul>
      <li><strong>Hier</strong>, je suis allé au cinéma.</li>
      <li><strong>Dans le jardin</strong>, les enfants jouent.</li>
      <li><strong>Parce qu'il pleuvait</strong>, nous sommes restés à la maison.</li>
    </ul>
    
    <h5>Position 2 : À la fin de la phrase</h5>
    <ul>
      <li>Je suis allé au cinéma <strong>hier</strong>.</li>
      <li>Les enfants jouent <strong>dans le jardin</strong>.</li>
      <li>Nous sommes restés à la maison <strong>parce qu'il pleuvait</strong>.</li>
    </ul>
    
    <h5>Position 3 : Au milieu de la phrase (entre virgules)</h5>
    <ul>
      <li>Je suis, <strong>hier</strong>, allé au cinéma.</li>
      <li>Les enfants, <strong>dans le jardin</strong>, jouent.</li>
      <li>Nous sommes, <strong>parce qu'il pleuvait</strong>, restés à la maison.</li>
    </ul>
    
    <h4>Les types de compléments de phrase</h4>
    <p>Les compléments de phrase expriment différentes circonstances :</p>
    
    <table>
      <tr>
        <th>Type</th>
        <th>Question</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Temps</strong></td>
        <td>Quand ?</td>
        <td>hier, demain, ce matin, en 2020, depuis lundi, pendant l'été</td>
      </tr>
      <tr>
        <td><strong>Lieu</strong></td>
        <td>Où ?</td>
        <td>ici, là-bas, dans la cuisine, à Montréal, sur la table</td>
      </tr>
      <tr>
        <td><strong>Cause</strong></td>
        <td>Pourquoi ?</td>
        <td>parce qu'il pleut, à cause du froid, grâce à ton aide</td>
      </tr>
      <tr>
        <td><strong>But</strong></td>
        <td>Pour quoi ?</td>
        <td>pour réussir, afin de comprendre, dans le but de progresser</td>
      </tr>
      <tr>
        <td><strong>Manière</strong></td>
        <td>Comment ?</td>
        <td>avec courage, sans difficulté, en chantant</td>
      </tr>
      <tr>
        <td><strong>Condition</strong></td>
        <td>À quelle condition ?</td>
        <td>si tu viens, en cas de pluie, à condition que tu arrives tôt</td>
      </tr>
      <tr>
        <td><strong>Concession</strong></td>
        <td>Malgré quoi ?</td>
        <td>malgré la pluie, bien qu'il soit fatigué, même si tu refuses</td>
      </tr>
    </table>
    
    <h4>Nature du complément de phrase</h4>
    <p>Un complément de phrase peut être de différentes natures :</p>
    
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Groupe Adverbial (GAdv)</strong></td>
        <td><strong>Hier</strong>, je suis parti.<br><strong>Très rapidement</strong>, il a compris.</td>
      </tr>
      <tr>
        <td><strong>Groupe Prépositionnel (GPrép)</strong></td>
        <td>Je travaille <strong>dans la cuisine</strong>.<br>Nous partons <strong>en vacances</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Nominal (GN)</strong></td>
        <td>Je viendrai <strong>la semaine prochaine</strong>.<br>Il est parti <strong>ce matin</strong>.</td>
      </tr>
      <tr>
        <td><strong>Proposition subordonnée</strong></td>
        <td><strong>Quand il pleut</strong>, je reste chez moi.<br>Je travaille <strong>parce que c'est nécessaire</strong>.</td>
      </tr>
    </table>
    
    <h4>Différence avec les autres compléments</h4>
    <p>⚠️ Attention à ne pas confondre le complément de phrase avec les compléments du verbe !</p>
    
    <table>
      <tr>
        <th>Critère</th>
        <th>Complément de phrase</th>
        <th>Complément du verbe (CD/CI)</th>
      </tr>
      <tr>
        <td><strong>Effaçable ?</strong></td>
        <td>✓ Oui, toujours</td>
        <td>✗ Généralement non</td>
      </tr>
      <tr>
        <td><strong>Déplaçable ?</strong></td>
        <td>✓ Oui, très mobile</td>
        <td>✗ Non, position fixe</td>
      </tr>
      <tr>
        <td><strong>Partie du prédicat ?</strong></td>
        <td>✗ Non</td>
        <td>✓ Oui</td>
      </tr>
      <tr>
        <td><strong>Fonction</strong></td>
        <td>Donne le contexte</td>
        <td>Complète le verbe</td>
      </tr>
    </table>
    
    <h4>Exemples d'analyse comparative</h4>
    
    <h5>Exemple 1 : "dans la cuisine"</h5>
    <p><strong>Phrase A :</strong> Marie <em>travaille</em> <strong>dans la cuisine</strong>.</p>
    <ul>
      <li>Effacement : Marie travaille. ✓ (sens complet)</li>
      <li>Déplacement : <strong>Dans la cuisine</strong>, Marie travaille. ✓</li>
      <li>→ <strong>Complément de phrase</strong> ✓</li>
    </ul>
    
    <p><strong>Phrase B :</strong> Marie <em>entre</em> <strong>dans la cuisine</strong>.</p>
    <ul>
      <li>Effacement : Marie entre. ✗ (incomplet : entre où ?)</li>
      <li>Déplacement : <strong>*Dans la cuisine</strong>, Marie entre. ✗ (bizarre)</li>
      <li>→ <strong>Complément du verbe</strong> (fait partie du prédicat)</li>
    </ul>
    
    <h5>Exemple 2 : "hier"</h5>
    <p><strong>Hier</strong>, je suis allé au cinéma.</p>
    <ul>
      <li>Effacement : Je suis allé au cinéma. ✓</li>
      <li>Déplacement : Je suis allé au cinéma <strong>hier</strong>. ✓</li>
      <li>→ <strong>Complément de phrase</strong> ✓</li>
    </ul>
    
    <h5>Exemple 3 : Phrase avec plusieurs compléments</h5>
    <p><strong>Hier matin</strong>, Marie a téléphoné à Pierre <strong>depuis Montréal</strong> <strong>pour lui annoncer la nouvelle</strong>.</p>
    
    <table>
      <tr>
        <th>Groupe</th>
        <th>Effaçable ?</th>
        <th>Déplaçable ?</th>
        <th>Fonction</th>
      </tr>
      <tr>
        <td><strong>Hier matin</strong></td>
        <td>✓ Oui</td>
        <td>✓ Oui</td>
        <td>Compl. de phrase (temps)</td>
      </tr>
      <tr>
        <td>à Pierre</td>
        <td>✗ Non</td>
        <td>✗ Non</td>
        <td>Compl. du verbe (CI)</td>
      </tr>
      <tr>
        <td><strong>depuis Montréal</strong></td>
        <td>✓ Oui</td>
        <td>✓ Oui</td>
        <td>Compl. de phrase (lieu)</td>
      </tr>
      <tr>
        <td><strong>pour lui annoncer...</strong></td>
        <td>✓ Oui</td>
        <td>✓ Oui</td>
        <td>Compl. de phrase (but)</td>
      </tr>
    </table>
    
    <h4>Ponctuation et complément de phrase</h4>
    <p>Quand un complément de phrase est <strong>déplacé au début</strong> ou <strong>inséré au milieu</strong>, on le sépare généralement par une <strong>virgule</strong> :</p>
    
    <ul>
      <li><strong>Hier,</strong> je suis allé au cinéma.</li>
      <li>Je suis allé, <strong>hier,</strong> au cinéma.</li>
      <li>Je suis allé au cinéma hier. (pas de virgule à la fin)</li>
    </ul>
    
    <h4>Plusieurs compléments de phrase dans une même phrase</h4>
    <p>Une phrase peut contenir plusieurs compléments de phrase :</p>
    <ul>
      <li><strong>Hier soir</strong>, je suis resté à la maison <strong>à cause de la pluie</strong>.</li>
      <li><strong>Chaque matin</strong>, <strong>dans le parc</strong>, les gens font du jogging <strong>pour rester en forme</strong>.</li>
    </ul>
    
    <h4>Schéma récapitulatif</h4>
    <p><strong>Structure complète de la phrase :</strong></p>
    <p style="padding: 15px; border: 1px solid #000;">
      <strong>(Compl. phrase) + [SUJET] + [PRÉDICAT] + (Compl. phrase)</strong>
    </p>
    
    <p>Exemple analysé :</p>
    <p style="padding: 10px; border: 1px solid #000;">
      <strong>(Hier matin,)</strong> [Marie] [a mangé une pomme] <strong>(dans la cuisine)</strong>.
    </p>
    <ul>
      <li>Complément de phrase : <strong>Hier matin</strong> (temps)</li>
      <li>Sujet : [Marie]</li>
      <li>Prédicat : [a mangé une pomme]</li>
      <li>Complément de phrase : <strong>dans la cuisine</strong> (lieu)</li>
    </ul>
    
    <h4>Points clés à retenir</h4>
    <ul>
      <li>✓ Complément de phrase = information facultative sur le contexte</li>
      <li>✓ Les 2 tests : EFFAÇABLE + DÉPLAÇABLE</li>
      <li>✓ Types : temps, lieu, cause, but, manière, condition, concession</li>
      <li>✓ Ne fait PAS partie du prédicat</li>
      <li>✓ Très mobile dans la phrase</li>
      <li>✓ Souvent séparé par une virgule quand il est déplacé</li>
      <li>✓ Une phrase peut avoir plusieurs compléments de phrase</li>
    </ul>
  `
},

// ========================================
// 0.3.4 - LE COMPLÉMENT DIRECT (CD)
// ========================================
"0.3.4": {
  title: "0.3.4 - Le Complément direct (CD)",
  theory: `
    <h3>LE COMPLÉMENT DIRECT (CD)</h3>
    
    <p><strong>Définition simple :</strong> Le complément direct (CD) est un groupe de mots qui <em>complète directement le verbe</em>, sans préposition. Il répond aux questions "qui ?" ou "quoi ?" après le verbe.</p>
    
    <p><strong>Analogie :</strong> Imagine le verbe comme un pont qui relie le sujet à quelque chose. Le complément direct, c'est la destination directe de ce pont : "Marie mange" → mange quoi ? → "une pomme". Le pont va directement du verbe "mange" à "une pomme", sans intermédiaire.</p>
    
    <h4>Comment le reconnaître ?</h4>
    
    <h5>Test 1 : Questions "qui ?" ou "quoi ?"</h5>
    <p>Après le verbe, pose la question :</p>
    <ul>
      <li><strong>"Qui ?"</strong> → si le CD est une personne</li>
      <li><strong>"Quoi ?"</strong> → si le CD est une chose</li>
    </ul>
    
    <table>
      <tr>
        <th>Phrase</th>
        <th>Question</th>
        <th>Réponse = CD</th>
      </tr>
      <tr>
        <td>Marie mange une pomme.</td>
        <td>Marie mange <strong>quoi ?</strong></td>
        <td>une pomme</td>
      </tr>
      <tr>
        <td>Je regarde un film.</td>
        <td>Je regarde <strong>quoi ?</strong></td>
        <td>un film</td>
      </tr>
      <tr>
        <td>Pierre voit Marie.</td>
        <td>Pierre voit <strong>qui ?</strong></td>
        <td>Marie</td>
      </tr>
      <tr>
        <td>Nous aimons le chocolat.</td>
        <td>Nous aimons <strong>quoi ?</strong></td>
        <td>le chocolat</td>
      </tr>
    </table>
    
    <h5>Test 2 : Pronominalisation par "le/la/les"</h5>
    <p>Le CD peut TOUJOURS être remplacé par les pronoms : <strong>le, la, l', les</strong></p>
    
    <table>
      <tr>
        <th>Phrase originale</th>
        <th>Avec pronom</th>
      </tr>
      <tr>
        <td>Marie mange [une pomme].</td>
        <td>Marie <strong>la</strong> mange.</td>
      </tr>
      <tr>
        <td>Je regarde [un film].</td>
        <td>Je <strong>le</strong> regarde.</td>
      </tr>
      <tr>
        <td>Pierre voit [Marie].</td>
        <td>Pierre <strong>la</strong> voit.</td>
      </tr>
      <tr>
        <td>Nous aimons [les pommes].</td>
        <td>Nous <strong>les</strong> aimons.</td>
      </tr>
    </table>
    
    <h5>Test 3 : Transformation passive</h5>
    <p>Le CD de la phrase active devient le sujet de la phrase passive :</p>
    
    <table>
      <tr>
        <th>Phrase active</th>
        <th>Phrase passive</th>
      </tr>
      <tr>
        <td>Marie mange [une pomme].</td>
        <td><strong>Une pomme</strong> est mangée par Marie.</td>
      </tr>
      <tr>
        <td>Le chat attrape [la souris].</td>
        <td><strong>La souris</strong> est attrapée par le chat.</td>
      </tr>
    </table>
    
    <h4>Caractéristiques du CD</h4>
    
    <table>
      <tr>
        <th>Propriété</th>
        <th>Complément Direct (CD)</th>
      </tr>
      <tr>
        <td><strong>Préposition ?</strong></td>
        <td>✗ NON (directement après le verbe)</td>
      </tr>
      <tr>
        <td><strong>Effaçable ?</strong></td>
        <td>✗ NON (généralement obligatoire)</td>
      </tr>
      <tr>
        <td><strong>Déplaçable ?</strong></td>
        <td>✗ NON (position fixe après le verbe)</td>
      </tr>
      <tr>
        <td><strong>Partie du prédicat ?</strong></td>
        <td>✓ OUI</td>
      </tr>
      <tr>
        <td><strong>Pronominalisation</strong></td>
        <td>le, la, l', les</td>
      </tr>
    </table>
    
    <h4>Nature du CD</h4>
    <p>Le CD peut être de différentes natures grammaticales :</p>
    
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Groupe Nominal (GN)</strong></td>
        <td>Je mange [<strong>une délicieuse pomme rouge</strong>].</td>
      </tr>
      <tr>
        <td><strong>Nom propre</strong></td>
        <td>Je vois [<strong>Marie</strong>].</td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td>Je <strong>la</strong> vois. / Je vois <strong>quelqu'un</strong>.</td>
      </tr>
      <tr>
        <td><strong>Verbe à l'infinitif</strong></td>
        <td>J'aime [<strong>lire</strong>].</td>
      </tr>
      <tr>
        <td><strong>Proposition subordonnée</strong></td>
        <td>Je sais [<strong>que tu es là</strong>].</td>
      </tr>
    </table>
    
    <h4>Verbes transitifs directs</h4>
    <p>Les verbes qui acceptent un CD s'appellent des <strong>verbes transitifs directs</strong>.</p>
    
    <p><strong>Exemples courants :</strong></p>
    <ul>
      <li>manger, boire, voir, regarder, entendre, écouter</li>
      <li>prendre, donner, faire, dire, écrire, lire</li>
      <li>aimer, détester, préférer, vouloir, savoir</li>
      <li>acheter, vendre, construire, détruire</li>
    </ul>
    
    <p><strong>⚠️ Attention !</strong> Certains verbes peuvent être transitifs directs OU intransitifs selon le contexte :</p>
    <ul>
      <li>Je mange [une pomme]. → transitif direct (CD : une pomme)</li>
      <li>Je mange. → intransitif (pas de CD)</li>
    </ul>
    
    <h4>Position du CD</h4>
    
    <h5>Position normale : APRÈS le verbe</h5>
    <ul>
      <li>Marie mange [une pomme].</li>
      <li>Je lis [un livre].</li>
      <li>Nous regardons [la télévision].</li>
    </ul>
    
    <h5>Position avec pronom : AVANT le verbe</h5>
    <p>Quand le CD est pronominalisé, il se place AVANT le verbe :</p>
    <ul>
      <li>Marie <strong>la</strong> mange. (la = une pomme)</li>
      <li>Je <strong>le</strong> lis. (le = un livre)</li>
      <li>Nous <strong>la</strong> regardons. (la = la télévision)</li>
    </ul>
    
    <h4>CD vs Complément de phrase</h4>
    <p>⚠️ Ne confonds pas le CD avec un complément de phrase !</p>
    
    <table>
      <tr>
        <th>Critère</th>
        <th>CD</th>
        <th>Complément de phrase</th>
      </tr>
      <tr>
        <td><strong>Effaçable ?</strong></td>
        <td>✗ Non</td>
        <td>✓ Oui</td>
      </tr>
      <tr>
        <td><strong>Déplaçable ?</strong></td>
        <td>✗ Non</td>
        <td>✓ Oui</td>
      </tr>
      <tr>
        <td><strong>Question</strong></td>
        <td>Qui ? Quoi ?</td>
        <td>Où ? Quand ? Comment ? Pourquoi ?</td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td>le, la, les</td>
        <td>y, là, alors, etc.</td>
      </tr>
    </table>

<h4>Exemples d'analyse complète</h4>

<h5>Phrase 1 : "Marie mange une pomme dans la cuisine."</h5>
<table>
  <tr>
    <th>Groupe</th>
    <th>Test effacement</th>
    <th>Test déplacement</th>
    <th>Fonction</th>
  </tr>
  <tr>
    <td>Marie</td>
    <td>✗</td>
    <td>✗</td>
    <td>Sujet</td>
  </tr>
  <tr>
    <td>une pomme</td>
    <td>✗</td>
    <td>✗</td>
    <td><strong>CD</strong> (mange quoi ?)</td>
  </tr>
  <tr>
    <td>dans la cuisine</td>
    <td>✓</td>
    <td>✓</td>
    <td>Compl. de phrase</td>
  </tr>
</table>

<h5>Phrase 2 : "J'ai acheté ce magnifique livre hier."</h5>
<table>
  <tr>
    <th>Groupe</th>
    <th>Fonction</th>
    <th>Test</th>
  </tr>
  <tr>
    <td>J'</td>
    <td>Sujet</td>
    <td>C'est moi qui ai acheté</td>
  </tr>
  <tr>
    <td>ce magnifique livre</td>
    <td><strong>CD</strong></td>
    <td>J'ai acheté quoi ? → Je <strong>l'</strong>ai acheté</td>
  </tr>
  <tr>
    <td>hier</td>
    <td>Compl. de phrase</td>
    <td>Effaçable, déplaçable</td>
  </tr>
</table>

<h4>CD avec des verbes courants</h4>

<table>
  <tr>
    <th>Verbe</th>
    <th>Exemple avec CD</th>
    <th>Pronominalisation</th>
  </tr>
  <tr>
    <td>manger</td>
    <td>Je mange [une pomme].</td>
    <td>Je <strong>la</strong> mange.</td>
  </tr>
  <tr>
    <td>voir</td>
    <td>Je vois [Marie].</td>
    <td>Je <strong>la</strong> vois.</td>
  </tr>
  <tr>
    <td>lire</td>
    <td>Je lis [un livre].</td>
    <td>Je <strong>le</strong> lis.</td>
  </tr>
  <tr>
    <td>faire</td>
    <td>Je fais [mes devoirs].</td>
    <td>Je <strong>les</strong> fais.</td>
  </tr>
  <tr>
    <td>aimer</td>
    <td>J'aime [le chocolat].</td>
    <td>Je <strong>l'</strong>aime.</td>
  </tr>
</table>

<h4>Schéma récapitulatif</h4>
<p><strong>Structure avec CD :</strong></p>
<p style="padding: 15px; border: 1px solid #000;">
  [SUJET] + [VERBE + <strong>CD</strong>] + (Compl. phrase)
</p>
<p>Exemple : [Marie] [mange <strong>une pomme</strong>] (dans la cuisine).</p>

<h4>Points clés à retenir</h4>
<ul>
  <li>✓ CD = complète le verbe DIRECTEMENT (sans préposition)</li>
  <li>✓ Test : "Qui ?" ou "Quoi ?" après le verbe</li>
  <li>✓ Pronominalisation : le, la, l', les</li>
  <li>✓ Transformation passive : le CD devient le sujet</li>
  <li>✓ Fait partie du PRÉDICAT</li>
  <li>✓ Position : après le verbe (sauf si pronominalisé)</li>
  <li>✓ NON effaçable, NON déplaçable</li>
  <li>✓ Utilisé avec les verbes transitifs directs</li>
</ul>`
},

// ========================================
// 0.3.5 - LE COMPLÉMENT INDIRECT (CI)
// ========================================

"0.3.5": {
title: "0.3.5 - Le Complément indirect (CI)",
theory: `
<h3>LE COMPLÉMENT INDIRECT (CI)</h3>
<p><strong>Définition simple :</strong> Le complément indirect (CI) est un groupe de mots qui <em>complète le verbe indirectement</em>, c'est-à-dire <strong>avec une préposition</strong> (à, de, pour, etc.). Il répond aux questions "à qui ?", "de qui ?", "à quoi ?", "de quoi ?" après le verbe.</p>

<p><strong>Analogie :</strong> Si le CD est un pont direct entre le verbe et son complément, le CI est un pont avec un péage ! La préposition est le péage : le verbe ne peut pas atteindre directement son complément, il doit passer par "à" ou "de". Exemple : "Je parle" → parle <strong>à</strong> qui ? → "à Marie".</p>

<h4>Comment le reconnaître ?</h4>

<h5>Test 1 : Présence d'une PRÉPOSITION</h5>
<p>Le CI est TOUJOURS introduit par une préposition :</p>
<ul>
  <li><strong>à</strong> (la plus fréquente) : Je parle <strong>à</strong> Marie.</li>
  <li><strong>de</strong> : Je parle <strong>de</strong> mon voyage.</li>
  <li><strong>pour</strong> : Je travaille <strong>pour</strong> mes parents.</li>
  <li>Autres : avec, contre, sur, etc.</li>
</ul>

<h5>Test 2 : Questions avec préposition</h5>
<p>Après le verbe, pose ces questions :</p>
<ul>
  <li><strong>"À qui ?"</strong> → si le CI est une personne</li>
  <li><strong>"De qui ?"</strong> → si le CI est une personne</li>
  <li><strong>"À quoi ?"</strong> → si le CI est une chose</li>
  <li><strong>"De quoi ?"</strong> → si le CI est une chose</li>
</ul>

<table>
  <tr>
    <th>Phrase</th>
    <th>Question</th>
    <th>Réponse = CI</th>
  </tr>
  <tr>
    <td>Je parle à Marie.</td>
    <td>Je parle <strong>à qui ?</strong></td>
    <td>à Marie</td>
  </tr>
  <tr>
    <td>Elle pense à son avenir.</td>
    <td>Elle pense <strong>à quoi ?</strong></td>
    <td>à son avenir</td>
  </tr>
  <tr>
    <td>Je me souviens de cette histoire.</td>
    <td>Je me souviens <strong>de quoi ?</strong></td>
    <td>de cette histoire</td>
  </tr>
  <tr>
    <td>Il s'occupe de ses enfants.</td>
    <td>Il s'occupe <strong>de qui ?</strong></td>
    <td>de ses enfants</td>
  </tr>
</table>

<h5>Test 3 : Pronominalisation par "lui/leur/y/en"</h5>
<p>Le CI peut être remplacé par différents pronoms selon la préposition et le type de complément :</p>

<table>
  <tr>
    <th>Préposition</th>
    <th>Type</th>
    <th>Pronom</th>
    <th>Exemple</th>
  </tr>
  <tr>
    <td><strong>à</strong></td>
    <td>Personne (singulier)</td>
    <td><strong>lui</strong></td>
    <td>Je parle à Marie. → Je <strong>lui</strong> parle.</td>
  </tr>
  <tr>
    <td><strong>à</strong></td>
    <td>Personne (pluriel)</td>
    <td><strong>leur</strong></td>
    <td>Je parle aux élèves. → Je <strong>leur</strong> parle.</td>
  </tr>
  <tr>
    <td><strong>à</strong></td>
    <td>Chose / Lieu</td>
    <td><strong>y</strong></td>
    <td>Je pense à mon examen. → J'<strong>y</strong> pense.</td>
  </tr>
  <tr>
    <td><strong>de</strong></td>
    <td>Chose</td>
    <td><strong>en</strong></td>
    <td>Je parle de mon voyage. → J'<strong>en</strong> parle.</td>
  </tr>
</table>

<h4>Caractéristiques du CI</h4>

<table>
  <tr>
    <th>Propriété</th>
    <th>Complément Indirect (CI)</th>
  </tr>
  <tr>
    <td><strong>Préposition ?</strong></td>
    <td>✓ OUI (toujours : à, de, pour, etc.)</td>
  </tr>
  <tr>
    <td><strong>Effaçable ?</strong></td>
    <td>✗ NON (généralement obligatoire)</td>
  </tr>
  <tr>
    <td><strong>Déplaçable ?</strong></td>
    <td>✗ NON (position fixe après le verbe)</td>
  </tr>
  <tr>
    <td><strong>Partie du prédicat ?</strong></td>
    <td>✓ OUI</td>
  </tr>
  <tr>
    <td><strong>Pronominalisation</strong></td>
    <td>lui, leur, y, en (selon la préposition)</td>
  </tr>
</table>

<h4>Nature du CI</h4>
<p>Le CI est toujours un <strong>Groupe Prépositionnel (GPrép)</strong>, mais la partie après la préposition peut varier :</p>

<table>
  <tr>
    <th>Structure</th>
    <th>Exemple</th>
  </tr>
  <tr>
    <td><strong>Prép + GN</strong></td>
    <td>Je parle [<strong>à Marie</strong>].</td>
  </tr>
  <tr>
    <td><strong>Prép + Pronom</strong></td>
    <td>Je parle [<strong>à elle</strong>].</td>
  </tr>
  <tr>
    <td><strong>Prép + Infinitif</strong></td>
    <td>Je m'attends [<strong>à réussir</strong>].</td>
  </tr>
  <tr>
    <td><strong>Prép + Proposition</strong></td>
    <td>Je me souviens [<strong>de ce que tu as dit</strong>].</td>
  </tr>
</table>

<h4>Verbes transitifs indirects</h4>
<p>Les verbes qui acceptent un CI s'appellent des <strong>verbes transitifs indirects</strong>.</p>

<p><strong>Verbes avec "à" :</strong></p>
<ul>
  <li>parler à, téléphoner à, écrire à, répondre à</li>
  <li>penser à, songer à, réfléchir à, s'intéresser à</li>
  <li>obéir à, désobéir à, appartenir à, ressembler à</li>
  <li>plaire à, nuire à, succéder à</li>
</ul>

<p><strong>Verbes avec "de" :</strong></p>
<ul>
  <li>parler de, discuter de, se souvenir de, se rappeler de</li>
  <li>s'occuper de, se charger de, se moquer de</li>
  <li>dépendre de, profiter de, douter de</li>
  <li>manquer de, avoir besoin de, avoir envie de</li>
</ul>

<p><strong>⚠️ Attention !</strong> Certains verbes changent de sens selon qu'ils ont un CD ou un CI :</p>
<table>
  <tr>
    <th>Verbe</th>
    <th>Avec CD</th>
    <th>Avec CI</th>
  </tr>
  <tr>
    <td><strong>manquer</strong></td>
    <td>J'ai manqué [le train]. (rater)</td>
    <td>Tu me manques. = Je manque [à toi]. (absence)</td>
  </tr>
  <tr>
    <td><strong>jouer</strong></td>
    <td>Je joue [un rôle]. (interpréter)</td>
    <td>Je joue [au tennis]. (pratiquer un sport)</td>
  </tr>
</table>

<h4>Position du CI</h4>

<h5>Position normale : APRÈS le verbe</h5>
<ul>
  <li>Je parle [à Marie].</li>
  <li>Elle pense [à son examen].</li>
  <li>Nous téléphonons [à nos parents].</li>
</ul>

<h5>Position avec pronom : AVANT le verbe</h5>
<p>Quand le CI est pronominalisé, il se place AVANT le verbe :</p>
<ul>
  <li>Je <strong>lui</strong> parle. (lui = à Marie)</li>
  <li>Elle <strong>y</strong> pense. (y = à son examen)</li>
  <li>Nous <strong>leur</strong> téléphonons. (leur = à nos parents)</li>
</ul>

<h4>CD vs CI : Comment les distinguer ?</h4>

<table>
  <tr>
    <th>Critère</th>
    <th>Complément Direct (CD)</th>
    <th>Complément Indirect (CI)</th>
  </tr>
  <tr>
    <td><strong>Préposition ?</strong></td>
    <td>✗ NON</td>
    <td>✓ OUI (à, de, pour...)</td>
  </tr>
  <tr>
    <td><strong>Question</strong></td>
    <td>Qui ? Quoi ?</td>
    <td>À qui ? De qui ? À quoi ? De quoi ?</td>
  </tr>
  <tr>
    <td><strong>Pronom</strong></td>
    <td>le, la, l', les</td>
    <td>lui, leur, y, en</td>
  </tr>
  <tr>
    <td><strong>Phrase passive</strong></td>
    <td>✓ Devient le sujet</td>
    <td>✗ Reste complément</td>
  </tr>
</table>

<h4>Exemples comparatifs CD vs CI</h4>

<h5>Même verbe, complément différent :</h5>
<table>
  <tr>
    <th>Phrase</th>
    <th>Complément</th>
    <th>Type</th>
    <th>Test</th>
  </tr>
  <tr>
    <td>Je vois <strong>Marie</strong>.</td>
    <td>Marie</td>
    <td>CD</td>
    <td>Je vois qui ? → Je <strong>la</strong> vois.</td>
  </tr>
  <tr>
    <td>Je parle <strong>à Marie</strong>.</td>
    <td>à Marie</td>
    <td>CI</td>
    <td>Je parle à qui ? → Je <strong>lui</strong> parle.</td>
  </tr>
</table>

<h5>Verbes avec CD ET CI simultanément :</h5>
<p>Certains verbes (appelés <strong>ditransitifs</strong>) acceptent les deux :</p>
<ul>
  <li>Je donne [<strong>un livre</strong>] [<strong>à Marie</strong>]. → CD : un livre / CI : à Marie</li>
  <li>Elle prête [<strong>sa voiture</strong>] [<strong>à Pierre</strong>]. → CD : sa voiture / CI : à Pierre</li>
  <li>Nous offrons [<strong>des fleurs</strong>] [<strong>à notre mère</strong>]. → CD : des fleurs / CI : à notre mère</li>
</ul>

<p><strong>Pronominalisation :</strong></p>
<ul>
  <li>Je donne un livre à Marie. → Je <strong>le lui</strong> donne. (le = CD, lui = CI)</li>
  <li>Elle prête sa voiture à Pierre. → Elle <strong>la lui</strong> prête.</li>
</ul>

<h4>CI vs Complément de phrase</h4>
<p>⚠️ Ne confonds pas le CI avec un complément de phrase qui commence aussi par une préposition !</p>

<table>
  <tr>
    <th>Critère</th>
    <th>CI</th>
    <th>Complément de phrase</th>
  </tr>
  <tr>
    <td><strong>Effaçable ?</strong></td>
    <td>✗ Non</td>
    <td>✓ Oui</td>
  </tr>
  <tr>
    <td><strong>Déplaçable ?</strong></td>
    <td>✗ Non</td>
    <td>✓ Oui</td>
  </tr>
  <tr>
    <td><strong>Lien avec le verbe</strong></td>
    <td>✓ Très fort (complète le verbe)</td>
    <td>✗ Faible (contexte)</td>
  </tr>
</table>

<h5>Exemple comparatif :</h5>
<p><strong>Phrase A :</strong> Je parle <strong>à Marie</strong>.</p>
<ul>
  <li>Effacement : *Je parle. ✗ (incomplet)</li>
  <li>→ <strong>CI</strong> (complément du verbe)</li>
</ul>

<p><strong>Phrase B :</strong> Je travaille <strong>dans la cuisine</strong>.</p>
<ul>
  <li>Effacement : Je travaille. ✓ (sens complet)</li>
  <li>Déplacement : <strong>Dans la cuisine</strong>, je travaille. ✓</li>
  <li>→ <strong>Complément de phrase</strong></li>
</ul>

<h4>Exemples d'analyse complète</h4>

<h5>Phrase 1 : "Je téléphone à ma sœur."</h5>
<table>
  <tr>
    <th>Groupe</th>
    <th>Fonction</th>
    <th>Test</th>
  </tr>
  <tr>
    <td>Je</td>
    <td>Sujet</td>
    <td>C'est moi qui téléphone</td>
  </tr>
  <tr>
    <td>à ma sœur</td>
    <td><strong>CI</strong></td>
    <td>Je téléphone à qui ? → Je <strong>lui</strong> téléphone.</td>
  </tr>
</table>

<h5>Phrase 2 : "Pierre donne un cadeau à Marie."</h5>
<table>
  <tr>
    <th>Groupe</th>
    <th>Fonction</th>
    <th>Test</th>
  </tr>
  <tr>
    <td>Pierre</td>
    <td>Sujet</td>
    <td>C'est Pierre qui donne</td>
  </tr>
  <tr>
    <td>un cadeau</td>
    <td><strong>CD</strong></td>
    <td>Pierre donne quoi ? → Il <strong>le</strong> donne.</td>
  </tr>
  <tr>
    <td>à Marie</td>
    <td><strong>CI</strong></td>
    <td>Pierre donne à qui ? → Il <strong>lui</strong> donne.</td>
  </tr>
</table>

<h4>Schéma récapitulatif</h4>
<p><strong>Structure avec CI :</strong></p>
<p style="padding: 15px; border: 1px solid #000;">
  [SUJET] + [VERBE + <strong>CI</strong>] + (Compl. phrase)
</p>
<p>Exemple : [Je] [parle <strong>à Marie</strong>] (dans le bureau).</p>

<p><strong>Structure avec CD ET CI :</strong></p>
<p style="padding: 15px; border: 1px solid #000;">
  [SUJET] + [VERBE + <strong>CD</strong> + <strong>CI</strong>]
</p>
<p>Exemple : [Pierre] [donne <strong>un livre</strong> <strong>à Marie</strong>].</p>

<h4>Points clés à retenir</h4>
<ul>
  <li>✓ CI = complète le verbe INDIRECTEMENT (avec préposition)</li>
  <li>✓ Prépositions principales : à, de (+ pour, avec, contre, sur...)</li>
  <li>✓ Test : "À qui ?", "De qui ?", "À quoi ?", "De quoi ?"</li>
  <li>✓ Pronominalisation : lui, leur (personnes avec "à"), y (choses avec "à"), en (avec "de")</li>
  <li>✓ Fait partie du PRÉDICAT</li>
  <li>✓ Position : après le verbe (sauf si pronominalisé)</li>
  <li>✓ NON effaçable, NON déplaçable</li>
  <li>✓ Utilisé avec les verbes transitifs indirects</li>
  <li>✓ Un verbe peut avoir CD ET CI en même temps</li>
</ul>`
},

// ========================================
// 0.3.6 - L'ATTRIBUT DU SUJET
// ========================================
"0.3.6": {
  title: "0.3.6 - L'Attribut du sujet",
  theory: `
    <h3>L'ATTRIBUT DU SUJET</h3>
    
    <p><strong>Définition simple :</strong> L'attribut du sujet est un groupe de mots qui caractérise le sujet via un verbe attributif (être, sembler, paraître, devenir, rester, demeurer).</p>
    
    <p><strong>Analogie :</strong> L'attribut, c'est comme une étiquette qu'on colle sur le sujet ! Le verbe attributif est le trait d'union : "Marie EST intelligente" → on attribue la caractéristique "intelligente" à Marie.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>Il vient <strong>après un verbe attributif</strong> (être, sembler, paraître, devenir, rester, avoir l'air...)</li>
      <li>Il <strong>caractérise le sujet</strong> (dit comment il est)</li>
      <li>Il peut être remplacé par <strong>"le"</strong> invariable : Marie est intelligente → Marie l'est</li>
      <li>Il <strong>s'accorde</strong> avec le sujet (si c'est un adjectif)</li>
    </ul>
    
    <h4>Les verbes attributifs</h4>
    <p>être, sembler, paraître, devenir, rester, demeurer, avoir l'air, passer pour...</p>
    
    <h4>Nature de l'attribut</h4>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Adjectif</strong></td>
        <td>Marie est <strong>intelligente</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Nominal (GN)</strong></td>
        <td>Pierre est <strong>un excellent élève</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Prépositionnel</strong></td>
        <td>Elle est <strong>de bonne humeur</strong>.</td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td>C'est <strong>lui</strong>.</td>
      </tr>
      <tr>
        <td><strong>Infinitif</strong></td>
        <td>L'important est <strong>de participer</strong>.</td>
      </tr>
    </table>
    
    <h4>Tests de reconnaissance</h4>
    <p><strong>Test 1 : Remplacement par "le"</strong></p>
    <ul>
      <li>Marie est intelligente. → Marie <strong>l'</strong>est. ✓</li>
      <li>Le chat semble fatigué. → Le chat <strong>le</strong> semble. ✓</li>
    </ul>
    
    <p><strong>Test 2 : Question "Comment est le sujet ?"</strong></p>
    <ul>
      <li>Marie est intelligente. → Comment est Marie ? → Intelligente (attribut)</li>
    </ul>
    
    <h4>Accord de l'attribut</h4>
    <p>Quand l'attribut est un adjectif, il s'accorde en genre et nombre avec le sujet :</p>
    <ul>
      <li>Marie est <strong>contente</strong>. (fém. sg)</li>
      <li>Pierre est <strong>content</strong>. (masc. sg)</li>
      <li>Les filles sont <strong>contentes</strong>. (fém. pl)</li>
    </ul>
    
    <h4>⚠️ Ne pas confondre : Attribut vs Complément</h4>
    <table>
      <tr>
        <th>Phrase</th>
        <th>Fonction</th>
      </tr>
      <tr>
        <td>Marie est <strong>intelligente</strong>.</td>
        <td>Attribut (caractérise Marie)</td>
      </tr>
      <tr>
        <td>Marie mange <strong>une pomme</strong>.</td>
        <td>CD (pas d'attribut car "manger" n'est pas attributif)</td>
      </tr>
    </table>
  `
},

// ========================================
// 0.3.7 - L'ATTRIBUT DU COMPLÉMENT DIRECT
// ========================================
"0.3.7": {
  title: "0.3.7 - L'Attribut du complément direct",
  theory: `
    <h3>L'ATTRIBUT DU COMPLÉMENT DIRECT</h3>
    
    <p><strong>Définition simple :</strong> L'attribut du complément direct est un groupe de mots qui caractérise le complément direct (et non le sujet).</p>
    
    <p><strong>Analogie :</strong> Si l'attribut du sujet est une étiquette sur le sujet, l'attribut du CD est une étiquette sur le complément ! "Je trouve Marie intelligente" → j'attribue "intelligente" à "Marie" (qui est le CD).</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>Il vient <strong>après certains verbes</strong> (trouver, juger, croire, estimer, rendre, nommer, appeler...)</li>
      <li>Il <strong>caractérise le CD</strong> (pas le sujet)</li>
      <li>Il <strong>s'accorde avec le CD</strong> (si c'est un adjectif)</li>
    </ul>
    
    <h4>Les verbes qui acceptent un attribut du CD</h4>
    <p>trouver, juger, croire, estimer, considérer, rendre, nommer, appeler, élire, faire...</p>
    
    <h4>Nature de l'attribut du CD</h4>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Adjectif</strong></td>
        <td>Je trouve Marie <strong>intelligente</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Nominal</strong></td>
        <td>On l'a nommé <strong>président</strong>.</td>
      </tr>
    </table>
    
    <h4>Différence Attribut du sujet vs Attribut du CD</h4>
    <table>
      <tr>
        <th>Attribut du sujet</th>
        <th>Attribut du CD</th>
      </tr>
      <tr>
        <td>Marie <strong>est</strong> intelligente.</td>
        <td>Je <strong>trouve</strong> Marie intelligente.</td>
      </tr>
      <tr>
        <td>Caractérise le <strong>sujet</strong> (Marie)</td>
        <td>Caractérise le <strong>CD</strong> (Marie)</td>
      </tr>
      <tr>
        <td>Verbe attributif (être, sembler...)</td>
        <td>Verbe d'opinion/nomination (trouver, nommer...)</td>
      </tr>
      <tr>
        <td>Accord avec le sujet</td>
        <td>Accord avec le CD</td>
      </tr>
    </table>
    
    <h4>Test de reconnaissance</h4>
    <p><strong>Question : "Comment est le CD ?"</strong></p>
    <ul>
      <li>Je trouve Marie intelligente. → Comment est Marie (selon moi) ? → Intelligente</li>
      <li>On l'a nommé président. → Qu'est-il devenu ? → Président</li>
    </ul>
    
    <h4>Accord de l'attribut du CD</h4>
    <p>L'attribut s'accorde avec le CD :</p>
    <ul>
      <li>Je trouve <strong>Marie</strong> intelligent<strong>e</strong>. (fém. sg)</li>
      <li>Je trouve <strong>Pierre</strong> intelligent. (masc. sg)</li>
      <li>Je trouve <strong>les filles</strong> intelligent<strong>es</strong>. (fém. pl)</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Je considère ce projet important.</p>
    <ul>
      <li>Sujet : Je</li>
      <li>Verbe : considère</li>
      <li>CD : ce projet</li>
      <li>Attribut du CD : important (caractérise "ce projet")</li>
    </ul>
  `
},

// ========================================
// 0.3.8 - LE MODIFICATEUR DU VERBE
// ========================================
"0.3.8": {
  title: "0.3.8 - Le Modificateur du verbe",
  theory: `
    <h3>LE MODIFICATEUR DU VERBE</h3>
    
    <p><strong>Définition simple :</strong> Le modificateur du verbe est un adverbe ou un groupe prépositionnel qui modifie, précise ou nuance le sens du verbe.</p>
    
    <p><strong>Analogie :</strong> Le modificateur, c'est comme un réglage sur le verbe ! Il dit COMMENT se fait l'action : rapidement ? lentement ? avec passion ? Le verbe est l'action, le modificateur est la manière.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>Il <strong>modifie le verbe</strong> (dit comment, combien, à quel point)</li>
      <li>Il est souvent <strong>effaçable</strong> (facultatif)</li>
      <li>Il répond aux questions : <strong>Comment ? Combien ? À quel point ?</strong></li>
    </ul>
    
    <h4>Nature du modificateur</h4>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Adverbe</strong></td>
        <td>Elle parle <strong>lentement</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Adverbial</strong></td>
        <td>Elle parle <strong>très lentement</strong>.</td>
      </tr>
      <tr>
        <td><strong>Groupe Prépositionnel</strong></td>
        <td>Il travaille <strong>avec passion</strong>.</td>
      </tr>
    </table>
    
    <h4>Types de modificateurs</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>Question</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Manière</strong></td>
        <td>Comment ?</td>
        <td>lentement, rapidement, bien, avec soin</td>
      </tr>
      <tr>
        <td><strong>Intensité</strong></td>
        <td>À quel point ?</td>
        <td>beaucoup, peu, très, énormément</td>
      </tr>
      <tr>
        <td><strong>Quantité</strong></td>
        <td>Combien ?</td>
        <td>beaucoup, peu, assez</td>
      </tr>
    </table>
    
    <h4>Différence : Modificateur vs Complément de phrase</h4>
    <table>
      <tr>
        <th>Critère</th>
        <th>Modificateur</th>
        <th>Complément de phrase</th>
      </tr>
      <tr>
        <td><strong>Effaçable ?</strong></td>
        <td>✓ Oui</td>
        <td>✓ Oui</td>
      </tr>
      <tr>
        <td><strong>Déplaçable ?</strong></td>
        <td>✗ Peu/non</td>
        <td>✓ Très mobile</td>
      </tr>
      <tr>
        <td><strong>Modifie</strong></td>
        <td>Le verbe seulement</td>
        <td>Toute la phrase</td>
      </tr>
      <tr>
        <td><strong>Question</strong></td>
        <td>Comment ? Combien ?</td>
        <td>Où ? Quand ? Pourquoi ?</td>
      </tr>
    </table>
    
    <h4>Exemples comparatifs</h4>
    <p><strong>Modificateur (reste près du verbe) :</strong></p>
    <ul>
      <li>Elle parle <strong>lentement</strong>. (Comment parle-t-elle ?)</li>
      <li>Il travaille <strong>beaucoup</strong>. (Combien travaille-t-il ?)</li>
    </ul>
    
    <p><strong>Complément de phrase (mobile) :</strong></p>
    <ul>
      <li><strong>Hier</strong>, elle est partie. / Elle est partie <strong>hier</strong>. (Quand ?)</li>
      <li><strong>Dans le jardin</strong>, il joue. / Il joue <strong>dans le jardin</strong>. (Où ?)</li>
    </ul>
    
    <h4>Position du modificateur</h4>
    <p>Le modificateur se place généralement <strong>près du verbe</strong> :</p>
    <ul>
      <li>Elle parle <strong>rapidement</strong>.</li>
      <li>Il <strong>souvent</strong> voyage. / Il voyage <strong>souvent</strong>.</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Marie travaille sérieusement dans sa chambre.</p>
    <ul>
      <li>Sujet : Marie</li>
      <li>Verbe : travaille</li>
      <li>Modificateur : sérieusement (comment travaille-t-elle ?)</li>
      <li>Compl. de phrase : dans sa chambre (où ? → effaçable, déplaçable)</li>
    </ul>
  `
},

// ========================================
// 0.3.9 - LE COMPLÉMENT DU NOM
// ========================================
"0.3.9": {
  title: "0.3.9 - Le Complément du nom",
  theory: `
    <h3>LE COMPLÉMENT DU NOM</h3>
    
    <p><strong>Définition simple :</strong> Le complément du nom est un groupe de mots qui complète, précise le sens d'un nom. Il est souvent introduit par une préposition (de, à, en, pour...).</p>
    
    <p><strong>Analogie :</strong> Si le nom est une personne, le complément du nom est sa carte d'identité ! Il donne des précisions : "le livre" → de qui ? "le livre DE MARIE". Le complément du nom enrichit le nom avec des détails.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>Il <strong>complète un NOM</strong> (pas un verbe)</li>
      <li>Il est généralement introduit par une <strong>préposition</strong> (de, à, en, pour, sans...)</li>
      <li>Il fait partie du <strong>Groupe Nominal (GN)</strong></li>
      <li>Il répond aux questions : <strong>De qui ? De quoi ? À qui ? Pour quoi ?</strong></li>
    </ul>
    
    <h4>Structure</h4>
    <p><strong>Nom + Préposition + Complément</strong></p>
    <p>Exemples :</p>
    <ul>
      <li>le livre <strong>de Marie</strong></li>
      <li>une tasse <strong>à café</strong></li>
      <li>un manteau <strong>en laine</strong></li>
      <li>un cadeau <strong>pour toi</strong></li>
    </ul>
    
    <h4>Nature du complément du nom</h4>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Groupe Nominal</strong></td>
        <td>le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Nom propre</strong></td>
        <td>la ville <strong>de Montréal</strong></td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td>un ami <strong>à moi</strong></td>
      </tr>
      <tr>
        <td><strong>Infinitif</strong></td>
        <td>une machine <strong>à laver</strong></td>
      </tr>
      <tr>
        <td><strong>Adverbe</strong></td>
        <td>les gens <strong>d'ici</strong></td>
      </tr>
    </table>
    
    <h4>Types de relations exprimées</h4>
    <table>
      <tr>
        <th>Relation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Possession</strong></td>
        <td>le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Matière</strong></td>
        <td>une table <strong>en bois</strong></td>
      </tr>
      <tr>
        <td><strong>Destination/Usage</strong></td>
        <td>une tasse <strong>à café</strong></td>
      </tr>
      <tr>
        <td><strong>Contenu</strong></td>
        <td>un verre <strong>d'eau</strong></td>
      </tr>
      <tr>
        <td><strong>Origine</strong></td>
        <td>les gens <strong>de Montréal</strong></td>
      </tr>
      <tr>
        <td><strong>Caractérisation</strong></td>
        <td>un homme <strong>de courage</strong></td>
      </tr>
    </table>
    
    <h4>Prépositions les plus fréquentes</h4>
    <ul>
      <li><strong>de</strong> (la plus courante) : le livre de Marie, une tasse de café</li>
      <li><strong>à</strong> : une tasse à café, une machine à laver</li>
      <li><strong>en</strong> : une table en bois, un manteau en laine</li>
      <li><strong>pour</strong> : un cadeau pour toi</li>
      <li><strong>sans</strong> : un café sans sucre</li>
    </ul>
    
    <h4>Position dans le GN</h4>
    <p>Le complément du nom vient <strong>après le nom</strong> qu'il complète :</p>
    <p style="padding: 10px; border: 1px solid #000;">
      [Dét + Nom + <strong>Complément du nom</strong>]
    </p>
    <p>Exemple : [Le livre <strong>de Marie</strong>] est intéressant.</p>
    
    <h4>⚠️ Ne pas confondre : Complément du nom vs autres fonctions</h4>
    <table>
      <tr>
        <th>Fonction</th>
        <th>Complète</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Complément du nom</strong></td>
        <td>Un NOM</td>
        <td>Le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Complément indirect (CI)</strong></td>
        <td>Un VERBE</td>
        <td>Je parle <strong>à Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Complément de phrase</strong></td>
        <td>Toute la PHRASE</td>
        <td>Je travaille <strong>dans ma chambre</strong></td>
      </tr>
    </table>
    
    <h4>Test de reconnaissance</h4>
    <p><strong>Question après le nom :</strong></p>
    <ul>
      <li>Le livre <strong>de Marie</strong> → Le livre de qui ? → de Marie</li>
      <li>Une tasse <strong>à café</strong> → Une tasse pour quoi ? → à café</li>
      <li>Une table <strong>en bois</strong> → Une table en quoi ? → en bois</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Le petit chat de ma voisine dort sur le canapé.</p>
    <ul>
      <li>GN sujet : [Le petit chat <strong>de ma voisine</strong>]</li>
      <li>Nom noyau : chat</li>
      <li>Complément du nom : <strong>de ma voisine</strong> (complète "chat")</li>
    </ul>
  `
},

// ========================================
// 0.3.10 - L'ÉPITHÈTE
// ========================================
"0.3.10": {
  title: "0.3.10 - L'Épithète",
  theory: `
    <h3>L'ÉPITHÈTE</h3>
    
    <p><strong>Définition simple :</strong> L'épithète est un adjectif (ou participe passé employé comme adjectif) directement lié au nom, sans passer par un verbe.</p>
    
    <p><strong>Analogie :</strong> L'épithète, c'est comme un descriptif collé sur le nom ! "Un GRAND chat NOIR" → les adjectifs "grand" et "noir" sont épithètes car ils sont directement à côté du nom "chat", sans verbe intermédiaire.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>C'est un <strong>adjectif</strong> (ou participe passé)</li>
      <li>Il est <strong>directement à côté du nom</strong> (avant ou après)</li>
      <li>Il <strong>n'y a PAS de verbe</strong> entre l'adjectif et le nom</li>
      <li>Il fait partie du <strong>Groupe Nominal (GN)</strong></li>
      <li>Il <strong>s'accorde</strong> avec le nom</li>
    </ul>
    
    <h4>Position de l'épithète</h4>
    <table>
      <tr>
        <th>Position</th>
        <th>Nom</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td>AVANT le nom</td>
        <td>Épithète antéposée</td>
        <td>un <strong>grand</strong> chat, une <strong>belle</strong> maison</td>
      </tr>
      <tr>
        <td>APRÈS le nom</td>
        <td>Épithète postposée</td>
        <td>un chat <strong>noir</strong>, une maison <strong>blanche</strong></td>
      </tr>
    </table>
    
    <h4>⚠️ Différence : Épithète vs Attribut</h4>
    <p>C'est LA distinction fondamentale à maîtriser !</p>
    
    <table>
      <tr>
        <th>Critère</th>
        <th>Épithète</th>
        <th>Attribut</th>
      </tr>
      <tr>
        <td><strong>Verbe ?</strong></td>
        <td>✗ PAS de verbe</td>
        <td>✓ Après un verbe d'état</td>
      </tr>
      <tr>
        <td><strong>Position</strong></td>
        <td>À côté du nom</td>
        <td>Après le verbe</td>
      </tr>
      <tr>
        <td><strong>Fonction</strong></td>
        <td>Expansion du nom</td>
        <td>Caractérise via le verbe</td>
      </tr>
      <tr>
        <td><strong>Partie du</strong></td>
        <td>Groupe Nominal</td>
        <td>Groupe Verbal (prédicat)</td>
      </tr>
    </table>
    
    <p><strong>Exemples comparatifs :</strong></p>
    <ul>
      <li>Un chat <strong>noir</strong>. → ÉPITHÈTE (pas de verbe)</li>
      <li>Le chat est <strong>noir</strong>. → ATTRIBUT (après le verbe "être")</li>
    </ul>
    
    <ul>
      <li>Une <strong>belle</strong> maison. → ÉPITHÈTE</li>
      <li>Cette maison est <strong>belle</strong>. → ATTRIBUT</li>
    </ul>
    
    <h4>Adjectifs qui changent de sens selon leur position</h4>
    <p>Certains adjectifs ont un sens différent AVANT ou APRÈS le nom :</p>
    <table>
      <tr>
        <th>AVANT le nom</th>
        <th>APRÈS le nom</th>
      </tr>
      <tr>
        <td>un <strong>grand</strong> homme (illustre)</td>
        <td>un homme <strong>grand</strong> (de haute taille)</td>
      </tr>
      <tr>
        <td>mon <strong>ancien</strong> professeur (d'avant)</td>
        <td>un meuble <strong>ancien</strong> (vieux, antique)</td>
      </tr>
      <tr>
        <td>un <strong>pauvre</strong> homme (malheureux)</td>
        <td>un homme <strong>pauvre</strong> (sans argent)</td>
      </tr>
      <tr>
        <td>ma <strong>propre</strong> maison (qui m'appartient)</td>
        <td>une maison <strong>propre</strong> (nettoyée)</td>
      </tr>
    </table>
    
    <h4>Accord de l'épithète</h4>
    <p>L'épithète s'accorde toujours en genre et nombre avec le nom :</p>
    <ul>
      <li>Un chat <strong>noir</strong> (masc. sg) → Une chatte <strong>noire</strong> (fém. sg)</li>
      <li>Des chats <strong>noirs</strong> (masc. pl) → Des chattes <strong>noires</strong> (fém. pl)</li>
      <li>Une <strong>belle</strong> maison (fém. sg) → De <strong>belles</strong> maisons (fém. pl)</li>
    </ul>
    
    <h4>Participe passé épithète</h4>
    <p>Un participe passé peut être épithète quand il est employé comme adjectif :</p>
    <ul>
      <li>Un livre <strong>lu</strong> (participe passé de "lire" → épithète)</li>
      <li>Une histoire <strong>racontée</strong> (participe passé de "raconter" → épithète)</li>
      <li>Des fleurs <strong>fanées</strong> (participe passé de "faner" → épithète)</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Le petit chat noir de ma voisine est très gentil.</p>
    <ul>
      <li>GN sujet : [Le <strong>petit</strong> chat <strong>noir</strong> de ma voisine]</li>
      <li>Épithètes : <strong>petit</strong> (avant le nom), <strong>noir</strong> (après le nom)</li>
      <li>Complément du nom : de ma voisine</li>
      <li>Attribut du sujet : <strong>gentil</strong> (après le verbe "est")</li>
    </ul>
    
    <h4>Schéma récapitulatif du GN</h4>
    <p style="padding: 10px; border: 1px solid #000;">
      [Dét + <strong>(Épithète)</strong> + Nom + <strong>(Épithète)</strong> + (Compl. du nom)]
    </p>
    <p>Exemple : [Le <strong>petit</strong> chat <strong>noir</strong> de Marie]</p>
  `
},

// ========================================
// 0.3.9 - LE COMPLÉMENT DU NOM
// ========================================
"0.3.9": {
  title: "0.3.9 - Le Complément du nom",
  theory: `
    <h3>LE COMPLÉMENT DU NOM</h3>
    
    <p><strong>Définition simple :</strong> Le complément du nom est un groupe de mots qui complète, précise le sens d'un nom. Il est souvent introduit par une préposition (de, à, en, pour...).</p>
    
    <p><strong>Analogie :</strong> Si le nom est une personne, le complément du nom est sa carte d'identité ! Il donne des précisions : "le livre" → de qui ? "le livre DE MARIE". Le complément du nom enrichit le nom avec des détails.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>Il <strong>complète un NOM</strong> (pas un verbe)</li>
      <li>Il est généralement introduit par une <strong>préposition</strong> (de, à, en, pour, sans...)</li>
      <li>Il fait partie du <strong>Groupe Nominal (GN)</strong></li>
      <li>Il répond aux questions : <strong>De qui ? De quoi ? À qui ? Pour quoi ?</strong></li>
    </ul>
    
    <h4>Structure</h4>
    <p><strong>Nom + Préposition + Complément</strong></p>
    <p>Exemples :</p>
    <ul>
      <li>le livre <strong>de Marie</strong></li>
      <li>une tasse <strong>à café</strong></li>
      <li>un manteau <strong>en laine</strong></li>
      <li>un cadeau <strong>pour toi</strong></li>
    </ul>
    
    <h4>Nature du complément du nom</h4>
    <table>
      <tr>
        <th>Nature</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Groupe Nominal</strong></td>
        <td>le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Nom propre</strong></td>
        <td>la ville <strong>de Montréal</strong></td>
      </tr>
      <tr>
        <td><strong>Pronom</strong></td>
        <td>un ami <strong>à moi</strong></td>
      </tr>
      <tr>
        <td><strong>Infinitif</strong></td>
        <td>une machine <strong>à laver</strong></td>
      </tr>
      <tr>
        <td><strong>Adverbe</strong></td>
        <td>les gens <strong>d'ici</strong></td>
      </tr>
    </table>
    
    <h4>Types de relations exprimées</h4>
    <table>
      <tr>
        <th>Relation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Possession</strong></td>
        <td>le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Matière</strong></td>
        <td>une table <strong>en bois</strong></td>
      </tr>
      <tr>
        <td><strong>Destination/Usage</strong></td>
        <td>une tasse <strong>à café</strong></td>
      </tr>
      <tr>
        <td><strong>Contenu</strong></td>
        <td>un verre <strong>d'eau</strong></td>
      </tr>
      <tr>
        <td><strong>Origine</strong></td>
        <td>les gens <strong>de Montréal</strong></td>
      </tr>
      <tr>
        <td><strong>Caractérisation</strong></td>
        <td>un homme <strong>de courage</strong></td>
      </tr>
    </table>
    
    <h4>Prépositions les plus fréquentes</h4>
    <ul>
      <li><strong>de</strong> (la plus courante) : le livre de Marie, une tasse de café</li>
      <li><strong>à</strong> : une tasse à café, une machine à laver</li>
      <li><strong>en</strong> : une table en bois, un manteau en laine</li>
      <li><strong>pour</strong> : un cadeau pour toi</li>
      <li><strong>sans</strong> : un café sans sucre</li>
    </ul>
    
    <h4>Position dans le GN</h4>
    <p>Le complément du nom vient <strong>après le nom</strong> qu'il complète :</p>
    <p style="padding: 10px; border: 1px solid #000;">
      [Dét + Nom + <strong>Complément du nom</strong>]
    </p>
    <p>Exemple : [Le livre <strong>de Marie</strong>] est intéressant.</p>
    
    <h4>⚠️ Ne pas confondre : Complément du nom vs autres fonctions</h4>
    <table>
      <tr>
        <th>Fonction</th>
        <th>Complète</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Complément du nom</strong></td>
        <td>Un NOM</td>
        <td>Le livre <strong>de Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Complément indirect (CI)</strong></td>
        <td>Un VERBE</td>
        <td>Je parle <strong>à Marie</strong></td>
      </tr>
      <tr>
        <td><strong>Complément de phrase</strong></td>
        <td>Toute la PHRASE</td>
        <td>Je travaille <strong>dans ma chambre</strong></td>
      </tr>
    </table>
    
    <h4>Test de reconnaissance</h4>
    <p><strong>Question après le nom :</strong></p>
    <ul>
      <li>Le livre <strong>de Marie</strong> → Le livre de qui ? → de Marie</li>
      <li>Une tasse <strong>à café</strong> → Une tasse pour quoi ? → à café</li>
      <li>Une table <strong>en bois</strong> → Une table en quoi ? → en bois</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Le petit chat de ma voisine dort sur le canapé.</p>
    <ul>
      <li>GN sujet : [Le petit chat <strong>de ma voisine</strong>]</li>
      <li>Nom noyau : chat</li>
      <li>Complément du nom : <strong>de ma voisine</strong> (complète "chat")</li>
    </ul>
  `
},

// ========================================
// 0.3.10 - L'ÉPITHÈTE
// ========================================
"0.3.10": {
  title: "0.3.10 - L'Épithète",
  theory: `
    <h3>L'ÉPITHÈTE</h3>
    
    <p><strong>Définition simple :</strong> L'épithète est un adjectif (ou participe passé employé comme adjectif) directement lié au nom, sans passer par un verbe.</p>
    
    <p><strong>Analogie :</strong> L'épithète, c'est comme un descriptif collé sur le nom ! "Un GRAND chat NOIR" → les adjectifs "grand" et "noir" sont épithètes car ils sont directement à côté du nom "chat", sans verbe intermédiaire.</p>
    
    <h4>Comment le reconnaître ?</h4>
    <ul>
      <li>C'est un <strong>adjectif</strong> (ou participe passé)</li>
      <li>Il est <strong>directement à côté du nom</strong> (avant ou après)</li>
      <li>Il <strong>n'y a PAS de verbe</strong> entre l'adjectif et le nom</li>
      <li>Il fait partie du <strong>Groupe Nominal (GN)</strong></li>
      <li>Il <strong>s'accorde</strong> avec le nom</li>
    </ul>
    
    <h4>Position de l'épithète</h4>
    <table>
      <tr>
        <th>Position</th>
        <th>Nom</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td>AVANT le nom</td>
        <td>Épithète antéposée</td>
        <td>un <strong>grand</strong> chat, une <strong>belle</strong> maison</td>
      </tr>
      <tr>
        <td>APRÈS le nom</td>
        <td>Épithète postposée</td>
        <td>un chat <strong>noir</strong>, une maison <strong>blanche</strong></td>
      </tr>
    </table>
    
    <h4>⚠️ Différence : Épithète vs Attribut</h4>
    <p>C'est LA distinction fondamentale à maîtriser !</p>
    
    <table>
      <tr>
        <th>Critère</th>
        <th>Épithète</th>
        <th>Attribut</th>
      </tr>
      <tr>
        <td><strong>Verbe ?</strong></td>
        <td>✗ PAS de verbe</td>
        <td>✓ Après un verbe d'état</td>
      </tr>
      <tr>
        <td><strong>Position</strong></td>
        <td>À côté du nom</td>
        <td>Après le verbe</td>
      </tr>
      <tr>
        <td><strong>Fonction</strong></td>
        <td>Expansion du nom</td>
        <td>Caractérise via le verbe</td>
      </tr>
      <tr>
        <td><strong>Partie du</strong></td>
        <td>Groupe Nominal</td>
        <td>Groupe Verbal (prédicat)</td>
      </tr>
    </table>
    
    <p><strong>Exemples comparatifs :</strong></p>
    <ul>
      <li>Un chat <strong>noir</strong>. → ÉPITHÈTE (pas de verbe)</li>
      <li>Le chat est <strong>noir</strong>. → ATTRIBUT (après le verbe "être")</li>
    </ul>
    
    <ul>
      <li>Une <strong>belle</strong> maison. → ÉPITHÈTE</li>
      <li>Cette maison est <strong>belle</strong>. → ATTRIBUT</li>
    </ul>
    
    <h4>Adjectifs qui changent de sens selon leur position</h4>
    <p>Certains adjectifs ont un sens différent AVANT ou APRÈS le nom :</p>
    <table>
      <tr>
        <th>AVANT le nom</th>
        <th>APRÈS le nom</th>
      </tr>
      <tr>
        <td>un <strong>grand</strong> homme (illustre)</td>
        <td>un homme <strong>grand</strong> (de haute taille)</td>
      </tr>
      <tr>
        <td>mon <strong>ancien</strong> professeur (d'avant)</td>
        <td>un meuble <strong>ancien</strong> (vieux, antique)</td>
      </tr>
      <tr>
        <td>un <strong>pauvre</strong> homme (malheureux)</td>
        <td>un homme <strong>pauvre</strong> (sans argent)</td>
      </tr>
      <tr>
        <td>ma <strong>propre</strong> maison (qui m'appartient)</td>
        <td>une maison <strong>propre</strong> (nettoyée)</td>
      </tr>
    </table>
    
    <h4>Accord de l'épithète</h4>
    <p>L'épithète s'accorde toujours en genre et nombre avec le nom :</p>
    <ul>
      <li>Un chat <strong>noir</strong> (masc. sg) → Une chatte <strong>noire</strong> (fém. sg)</li>
      <li>Des chats <strong>noirs</strong> (masc. pl) → Des chattes <strong>noires</strong> (fém. pl)</li>
      <li>Une <strong>belle</strong> maison (fém. sg) → De <strong>belles</strong> maisons (fém. pl)</li>
    </ul>
    
    <h4>Participe passé épithète</h4>
    <p>Un participe passé peut être épithète quand il est employé comme adjectif :</p>
    <ul>
      <li>Un livre <strong>lu</strong> (participe passé de "lire" → épithète)</li>
      <li>Une histoire <strong>racontée</strong> (participe passé de "raconter" → épithète)</li>
      <li>Des fleurs <strong>fanées</strong> (participe passé de "faner" → épithète)</li>
    </ul>
    
    <h4>Exemples d'analyse</h4>
    <p><strong>Phrase :</strong> Le petit chat noir de ma voisine est très gentil.</p>
    <ul>
      <li>GN sujet : [Le <strong>petit</strong> chat <strong>noir</strong> de ma voisine]</li>
      <li>Épithètes : <strong>petit</strong> (avant le nom), <strong>noir</strong> (après le nom)</li>
      <li>Complément du nom : de ma voisine</li>
      <li>Attribut du sujet : <strong>gentil</strong> (après le verbe "est")</li>
    </ul>
    
    <h4>Schéma récapitulatif du GN</h4>
    <p style="padding: 10px; border: 1px solid #000;">
      [Dét + <strong>(Épithète)</strong> + Nom + <strong>(Épithète)</strong> + (Compl. du nom)]
    </p>
    <p>Exemple : [Le <strong>petit</strong> chat <strong>noir</strong> de Marie]</p>
  `
},
// ========================================
// MODULE 0.4 : LA PHRASE DE BASE ET SES TRANSFORMATIONS
// ========================================

// ========================================
// 0.4.1 - LA PHRASE DE BASE (P)
// ========================================
"0.4.1": {
  title: "0.4.1 - La phrase de base (P)",
  theory: `
    <h3>LA PHRASE DE BASE (P)</h3>
    
    <p><strong>Définition simple :</strong> La phrase de base (P) est le modèle de référence de la phrase française. C'est la structure la plus simple et la plus neutre à partir de laquelle toutes les autres phrases sont construites.</p>
    
    <p><strong>Analogie :</strong> La phrase de base, c'est comme la recette de base en cuisine ! Toutes les variations (phrase interrogative, négative, passive...) partent de cette recette de base. C'est le point de départ pour comprendre toutes les transformations.</p>
    
    <h4>Structure de la phrase de base</h4>
    <p style="padding: 15px; border: 1px solid #000; font-size: 18px;">
      <strong>P = Sujet + Prédicat + (Complément de phrase)</strong>
    </p>
    
    <p><strong>Exemple :</strong> [Marie] [mange une pomme] (dans la cuisine).</p>
    
    <h4>Les 5 caractéristiques de la phrase de base</h4>
    <p>Pour qu'une phrase soit considérée comme une phrase de base, elle doit avoir ces 5 propriétés :</p>
    
    <table>
      <tr>
        <th>Caractéristique</th>
        <th>Description</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>1. Déclarative</strong></td>
        <td>Affirme quelque chose (pas de question, exclamation ou ordre)</td>
        <td>Marie mange une pomme.</td>
      </tr>
      <tr>
        <td><strong>2. Positive</strong></td>
        <td>Pas de négation</td>
        <td>Marie mange. (pas : ne...pas)</td>
      </tr>
      <tr>
        <td><strong>3. Active</strong></td>
        <td>Le sujet fait l'action (pas passive)</td>
        <td>Marie mange la pomme. (pas : La pomme est mangée)</td>
      </tr>
      <tr>
        <td><strong>4. Neutre</strong></td>
        <td>Pas d'emphase, pas de mise en relief</td>
        <td>Marie mange. (pas : C'est Marie qui mange)</td>
      </tr>
      <tr>
        <td><strong>5. Personnelle</strong></td>
        <td>Sujet identifiable (pas impersonnel)</td>
        <td>Marie mange. (pas : Il pleut)</td>
      </tr>
    </table>
    
    <h4>Constituants obligatoires</h4>
    <p>La phrase de base a 2 constituants <strong>OBLIGATOIRES</strong> :</p>
    <ul>
      <li><strong>Sujet</strong> : de qui/quoi on parle</li>
      <li><strong>Prédicat</strong> : ce qu'on dit du sujet (= GV)</li>
    </ul>
    
    <p>Et 1 constituant <strong>FACULTATIF</strong> :</p>
    <ul>
      <li><strong>Complément de phrase</strong> : contexte (temps, lieu, cause...)</li>
    </ul>
    
    <h4>Exemples de phrases de base</h4>
    <table>
      <tr>
        <th>Phrase</th>
        <th>Sujet</th>
        <th>Prédicat</th>
        <th>Compl. phrase</th>
      </tr>
      <tr>
        <td>Le chat dort.</td>
        <td>Le chat</td>
        <td>dort</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Marie mange une pomme.</td>
        <td>Marie</td>
        <td>mange une pomme</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Pierre travaille dans son bureau.</td>
        <td>Pierre</td>
        <td>travaille</td>
        <td>dans son bureau</td>
      </tr>
      <tr>
        <td>Les enfants jouent dehors.</td>
        <td>Les enfants</td>
        <td>jouent</td>
        <td>dehors</td>
      </tr>
    </table>
    
    <h4>Exemples de phrases qui NE SONT PAS de base</h4>
    <table>
      <tr>
        <th>Phrase</th>
        <th>Pourquoi ?</th>
      </tr>
      <tr>
        <td>Est-ce que Marie mange ?</td>
        <td>Interrogative (pas déclarative)</td>
      </tr>
      <tr>
        <td>Marie ne mange pas.</td>
        <td>Négative (pas positive)</td>
      </tr>
      <tr>
        <td>La pomme est mangée par Marie.</td>
        <td>Passive (pas active)</td>
      </tr>
      <tr>
        <td>C'est Marie qui mange.</td>
        <td>Emphatique (pas neutre)</td>
      </tr>
      <tr>
        <td>Il pleut.</td>
        <td>Impersonnelle (pas personnelle)</td>
      </tr>
    </table>
    
    <h4>Pourquoi étudier la phrase de base ?</h4>
    <p>La phrase de base sert de <strong>modèle de référence</strong> pour :</p>
    <ul>
      <li>✓ Analyser la structure de toute phrase</li>
      <li>✓ Comprendre les transformations (interrogation, négation, emphase...)</li>
      <li>✓ Identifier les fonctions grammaticales</li>
      <li>✓ Corriger les erreurs de syntaxe</li>
    </ul>
    
    <h4>Schéma récapitulatif</h4>
    <p><strong>Toute phrase complexe peut être ramenée à une phrase de base :</strong></p>
    <ul>
      <li>Est-ce que Marie mange ? → <strong>Base :</strong> Marie mange.</li>
      <li>Marie ne mange pas. → <strong>Base :</strong> Marie mange.</li>
      <li>C'est Marie qui mange. → <strong>Base :</strong> Marie mange.</li>
    </ul>
  `
},

// ========================================
// 0.4.2 - LE TYPE DÉCLARATIF
// ========================================
"0.4.2": {
  title: "0.4.2 - Le type déclaratif",
  theory: `
    <h3>LE TYPE DÉCLARATIF</h3>
    
    <p><strong>Définition simple :</strong> La phrase déclarative sert à affirmer, déclarer ou raconter quelque chose. C'est le type de phrase le plus courant et le plus neutre.</p>
    
    <p><strong>Analogie :</strong> La phrase déclarative, c'est comme un journaliste qui rapporte un fait : "Marie mange une pomme." Il ne pose pas de question, ne donne pas d'ordre, il constate simplement.</p>
    
    <h4>Caractéristiques de la phrase déclarative</h4>
    <ul>
      <li><strong>Fonction :</strong> Affirmer, déclarer, informer, raconter</li>
      <li><strong>Ponctuation :</strong> Point (.) à la fin</li>
      <li><strong>Intonation :</strong> Descendante (la voix baisse à la fin)</li>
      <li><strong>Structure :</strong> Sujet + Verbe (ordre normal)</li>
    </ul>
    
    <h4>Structure de la phrase déclarative</h4>
    <p style="padding: 15px; border: 1px solid #000;">
      <strong>[Sujet] + [Verbe] + (Compléments)</strong>
    </p>
    
    <p><strong>Exemples :</strong></p>
    <ul>
      <li>[Marie] [mange] [une pomme].</li>
      <li>[Le chat] [dort] [sur le canapé].</li>
      <li>[Pierre] [travaille] [dans son bureau].</li>
    </ul>
    
    <h4>Ce qu'on peut faire avec une phrase déclarative</h4>
    <table>
      <tr>
        <th>Usage</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Constater un fait</strong></td>
        <td>Il pleut aujourd'hui.</td>
      </tr>
      <tr>
        <td><strong>Exprimer une opinion</strong></td>
        <td>Je pense que ce film est excellent.</td>
      </tr>
      <tr>
        <td><strong>Raconter une histoire</strong></td>
        <td>Marie est partie hier matin.</td>
      </tr>
      <tr>
        <td><strong>Donner une information</strong></td>
        <td>Le cours commence à 9 heures.</td>
      </tr>
      <tr>
        <td><strong>Décrire quelque chose</strong></td>
        <td>Cette maison est grande et belle.</td>
      </tr>
    </table>
    
    <h4>Forme positive vs forme négative</h4>
    <p>Une phrase déclarative peut être positive OU négative :</p>
    <ul>
      <li><strong>Positive :</strong> Marie mange une pomme.</li>
      <li><strong>Négative :</strong> Marie ne mange pas de pomme.</li>
    </ul>
    <p>Les deux sont déclaratives (elles affirment quelque chose), mais l'une est positive et l'autre négative.</p>
    
    <h4>⚠️ Ne pas confondre : Déclarative vs autres types</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>Fonction</th>
        <th>Exemple</th>
        <th>Ponctuation</th>
      </tr>
      <tr>
        <td><strong>Déclarative</strong></td>
        <td>Affirmer</td>
        <td>Marie mange une pomme.</td>
        <td>.</td>
      </tr>
      <tr>
        <td><strong>Interrogative</strong></td>
        <td>Poser une question</td>
        <td>Marie mange-t-elle une pomme ?</td>
        <td>?</td>
      </tr>
      <tr>
        <td><strong>Exclamative</strong></td>
        <td>Exprimer une émotion</td>
        <td>Comme cette pomme est bonne !</td>
        <td>!</td>
      </tr>
      <tr>
        <td><strong>Impérative</strong></td>
        <td>Donner un ordre</td>
        <td>Mange cette pomme !</td>
        <td>. ou !</td>
      </tr>
    </table>
    
    <h4>Exemples variés</h4>
    <p><strong>Phrases déclaratives courantes :</strong></p>
    <ul>
      <li>Le soleil se lève à l'est.</li>
      <li>J'aime beaucoup ce livre.</li>
      <li>Nous partons en vacances demain.</li>
      <li>Cette situation devient problématique.</li>
      <li>Les enfants jouent dans le jardin.</li>
    </ul>
    
    <h4>Importance de la phrase déclarative</h4>
    <p>La phrase déclarative est :</p>
    <ul>
      <li>✓ Le type le plus <strong>fréquent</strong> (90% des phrases)</li>
      <li>✓ Le type le plus <strong>neutre</strong></li>
      <li>✓ Le type de <strong>référence</strong> (phrase de base)</li>
      <li>✓ La base pour apprendre les autres types</li>
    </ul>
  `
},

// ========================================
// 0.4.3 - LE TYPE INTERROGATIF
// ========================================
"0.4.3": {
  title: "0.4.3 - Le type interrogatif",
  theory: `
    <h3>LE TYPE INTERROGATIF</h3>
    
    <p><strong>Définition simple :</strong> La phrase interrogative sert à poser une question. Elle demande une information à l'interlocuteur.</p>
    
    <p><strong>Analogie :</strong> La phrase interrogative, c'est comme un détective qui enquête ! Il cherche une information manquante : "Qui a mangé la pomme ?" "Quand est-ce arrivé ?" Il attend une réponse.</p>
    
    <h4>Caractéristiques de la phrase interrogative</h4>
    <ul>
      <li><strong>Fonction :</strong> Poser une question, demander une information</li>
      <li><strong>Ponctuation :</strong> Point d'interrogation (?) à la fin</li>
      <li><strong>Intonation :</strong> Montante (la voix monte à la fin)</li>
      <li><strong>Réponse attendue :</strong> Oui/Non OU une information précise</li>
    </ul>
    
    <h4>Les 2 types d'interrogation</h4>
    
    <h5>1. Interrogation TOTALE (réponse : oui/non)</h5>
    <p>On peut répondre par <strong>oui</strong> ou <strong>non</strong>.</p>
    <ul>
      <li>Est-ce que Marie mange ? → Oui / Non</li>
      <li>Tu viens demain ? → Oui / Non</li>
    </ul>
    
    <h5>2. Interrogation PARTIELLE (mot interrogatif)</h5>
    <p>On utilise un <strong>mot interrogatif</strong> pour demander une information précise.</p>
    <table>
      <tr>
        <th>Mot interrogatif</th>
        <th>Question sur</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Qui ?</strong></td>
        <td>Personne (sujet/complément)</td>
        <td>Qui vient ? Qui vois-tu ?</td>
      </tr>
      <tr>
        <td><strong>Que / Quoi ?</strong></td>
        <td>Chose</td>
        <td>Que fais-tu ? Tu fais quoi ?</td>
      </tr>
      <tr>
        <td><strong>Où ?</strong></td>
        <td>Lieu</td>
        <td>Où vas-tu ?</td>
      </tr>
      <tr>
        <td><strong>Quand ?</strong></td>
        <td>Temps</td>
        <td>Quand arrives-tu ?</td>
      </tr>
      <tr>
        <td><strong>Comment ?</strong></td>
        <td>Manière</td>
        <td>Comment vas-tu ?</td>
      </tr>
      <tr>
        <td><strong>Pourquoi ?</strong></td>
        <td>Cause/raison</td>
        <td>Pourquoi pars-tu ?</td>
      </tr>
      <tr>
        <td><strong>Combien ?</strong></td>
        <td>Quantité</td>
        <td>Combien coûte-t-il ?</td>
      </tr>
      <tr>
        <td><strong>Quel(le)(s) ?</strong></td>
        <td>Choix/précision</td>
        <td>Quel livre préfères-tu ?</td>
      </tr>
    </table>
    
    <h4>Les 3 niveaux de langue pour interroger</h4>
    
    <h5>Niveau 1 : Intonation seule (familier/oral)</h5>
    <p>Même structure que la déclarative, mais avec intonation montante et point d'interrogation.</p>
    <ul>
      <li>Tu viens demain ?</li>
      <li>Marie mange une pomme ?</li>
      <li>C'est bon ?</li>
    </ul>
    
    <h5>Niveau 2 : Est-ce que... (courant)</h5>
    <p>On ajoute "est-ce que" au début de la phrase déclarative.</p>
    <ul>
      <li>Est-ce que tu viens demain ?</li>
      <li>Est-ce que Marie mange une pomme ?</li>
      <li>Où est-ce que tu vas ?</li>
    </ul>
    
    <h5>Niveau 3 : Inversion (soutenu/écrit)</h5>
    <p>On inverse le sujet et le verbe.</p>
    <ul>
      <li>Viens-tu demain ?</li>
      <li>Marie mange-t-elle une pomme ?</li>
      <li>Où vas-tu ?</li>
    </ul>
    
    <p><strong>⚠️ Attention au "t" euphonique !</strong> Entre deux voyelles, on ajoute "-t-" :</p>
    <ul>
      <li>Mange-t-il ? (pas *Mange-il)</li>
      <li>A-t-elle compris ? (pas *A-elle compris)</li>
    </ul>
    
    <h4>Comparaison des 3 niveaux</h4>
    <table>
      <tr>
        <th>Registre</th>
        <th>Structure</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Familier</strong></td>
        <td>Intonation</td>
        <td>Tu viens ?</td>
      </tr>
      <tr>
        <td><strong>Courant</strong></td>
        <td>Est-ce que</td>
        <td>Est-ce que tu viens ?</td>
      </tr>
      <tr>
        <td><strong>Soutenu</strong></td>
        <td>Inversion</td>
        <td>Viens-tu ?</td>
      </tr>
    </table>
    
    <h4>Transformation déclarative → interrogative</h4>
    <p><strong>Phrase de base :</strong> Marie mange une pomme.</p>
    
    <table>
      <tr>
        <th>Méthode</th>
        <th>Phrase interrogative</th>
      </tr>
      <tr>
        <td>Intonation</td>
        <td>Marie mange une pomme ?</td>
      </tr>
      <tr>
        <td>Est-ce que</td>
        <td>Est-ce que Marie mange une pomme ?</td>
      </tr>
      <tr>
        <td>Inversion</td>
        <td>Marie mange-t-elle une pomme ?</td>
      </tr>
    </table>
    
    <h4>Exemples d'interrogation partielle</h4>
    <ul>
      <li><strong>Qui</strong> vient ce soir ?</li>
      <li><strong>Que</strong> fais-tu ?</li>
      <li><strong>Où</strong> habites-tu ?</li>
      <li><strong>Quand</strong> pars-tu en vacances ?</li>
      <li><strong>Comment</strong> vas-tu à l'école ?</li>
      <li><strong>Pourquoi</strong> pleures-tu ?</li>
      <li><strong>Combien</strong> de livres as-tu lus ?</li>
      <li><strong>Quel</strong> film préfères-tu ?</li>
    </ul>
  `
},

// ========================================
// 0.4.4 - LE TYPE EXCLAMATIF
// ========================================
"0.4.4": {
  title: "0.4.4 - Le type exclamatif",
  theory: `
    <h3>LE TYPE EXCLAMATIF</h3>
    
    <p><strong>Définition simple :</strong> La phrase exclamative sert à exprimer une émotion forte : joie, surprise, colère, admiration, étonnement, indignation...</p>
    
    <p><strong>Analogie :</strong> La phrase exclamative, c'est comme un cri du cœur ! On ne pose pas de question, on ne donne pas d'ordre, on exprime simplement ce qu'on ressent avec intensité : "Comme c'est beau !" "Quelle surprise !"</p>
    
    <h4>Caractéristiques de la phrase exclamative</h4>
    <ul>
      <li><strong>Fonction :</strong> Exprimer une émotion forte</li>
      <li><strong>Ponctuation :</strong> Point d'exclamation (!) à la fin</li>
      <li><strong>Intonation :</strong> Très expressive, montante ou descendante selon l'émotion</li>
      <li><strong>Intensité :</strong> Accent mis sur l'émotion</li>
    </ul>
    
    <h4>Les 3 formes d'exclamation</h4>
    
    <h5>1. Avec mot exclamatif</h5>
    <p>On utilise des mots exclamatifs pour renforcer l'émotion :</p>
    <table>
      <tr>
        <th>Mot exclamatif</th>
        <th>Utilisation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Quel(le)(s)</strong></td>
        <td>+ nom</td>
        <td>Quelle belle journée !</td>
      </tr>
      <tr>
        <td><strong>Comme</strong></td>
        <td>+ phrase</td>
        <td>Comme tu es grand !</td>
      </tr>
      <tr>
        <td><strong>Que</strong></td>
        <td>+ phrase</td>
        <td>Que c'est beau !</td>
      </tr>
      <tr>
        <td><strong>Combien</strong></td>
        <td>+ phrase</td>
        <td>Combien je t'aime !</td>
      </tr>
      <tr>
        <td><strong>Qu'est-ce que</strong></td>
        <td>+ phrase</td>
        <td>Qu'est-ce que c'est bon !</td>
      </tr>
    </table>
    
    <h5>2. Sans mot exclamatif (phrase déclarative + !)</h5>
    <p>Une phrase déclarative normale avec un point d'exclamation devient exclamative :</p>
    <ul>
      <li>C'est magnifique !</li>
      <li>Je suis tellement content !</li>
      <li>Tu as réussi !</li>
      <li>Il fait beau aujourd'hui !</li>
    </ul>
    
    <h5>3. Interjection seule</h5>
    <p>Une interjection peut exprimer l'émotion à elle seule :</p>
    <ul>
      <li>Ah ! Bravo ! Hélas ! Ouf !</li>
      <li>Zut ! Aïe ! Oh là là !</li>
    </ul>
    
    <h4>Exemples selon l'émotion exprimée</h4>
    <table>
      <tr>
        <th>Émotion</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Joie</strong></td>
        <td>Comme je suis heureux ! Quelle bonne nouvelle !</td>
      </tr>
      <tr>
        <td><strong>Surprise</strong></td>
        <td>Quelle surprise ! Tu es là !</td>
      </tr>
      <tr>
        <td><strong>Admiration</strong></td>
        <td>Comme c'est beau ! Quel talent !</td>
      </tr>
      <tr>
        <td><strong>Colère</strong></td>
        <td>Quel culot ! C'est inacceptable !</td>
      </tr>
      <tr>
        <td><strong>Tristesse</strong></td>
        <td>Quelle tristesse ! Hélas !</td>
      </tr>
      <tr>
        <td><strong>Peur</strong></td>
        <td>Quel effroi ! Au secours !</td>
      </tr>
    </table>
    
    <h4>⚠️ Ne pas confondre : Exclamative vs Interrogative</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>Fonction</th>
        <th>Exemple</th>
        <th>Ponctuation</th>
      </tr>
      <tr>
        <td><strong>Exclamative</strong></td>
        <td>Exprimer une émotion</td>
        <td>Comme tu es grand !</td>
        <td>!</td>
      </tr>
      <tr>
        <td><strong>Interrogative</strong></td>
        <td>Poser une question</td>
        <td>Comme tu es grand ?</td>
        <td>?</td>
      </tr>
    </table>
    
    <p><strong>Astuce :</strong> Si on attend une réponse → interrogative. Si on exprime une émotion → exclamative.</p>
    
    <h4>Structure avec "quel(le)(s)"</h4>
    <p>La structure la plus fréquente pour l'exclamation :</p>
    <p style="padding: 10px; border: 1px solid #000;">
      <strong>Quel(le)(s) + (Adjectif) + Nom + (Phrase) !</strong>
    </p>
    
    <p><strong>Exemples :</strong></p>
    <ul>
      <li>Quelle journée !</li>
      <li>Quelle belle journée !</li>
      <li>Quelle belle journée nous avons passée !</li>
      <li>Quels beaux enfants !</li>
      <li>Quelles magnifiques fleurs tu as achetées !</li>
    </ul>
    
    <h4>Transformation déclarative → exclamative</h4>
    <p><strong>Phrase de base :</strong> Cette pomme est bonne.</p>
    
    <table>
      <tr>
        <th>Méthode</th>
        <th>Phrase exclamative</th>
      </tr>
      <tr>
        <td>Comme</td>
        <td>Comme cette pomme est bonne !</td>
      </tr>
      <tr>
        <td>Que</td>
        <td>Que cette pomme est bonne !</td>
      </tr>
      <tr>
        <td>Qu'est-ce que</td>
        <td>Qu'est-ce que cette pomme est bonne !</td>
      </tr>
      <tr>
        <td>Quel</td>
        <td>Quelle bonne pomme !</td>
      </tr>
      <tr>
        <td>Simple !</td>
        <td>Cette pomme est bonne !</td>
      </tr>
    </table>
    
    <h4>Accord de "quel"</h4>
    <p>"Quel" s'accorde en genre et nombre avec le nom :</p>
    <ul>
      <li>Quel beau jour ! (masc. sg)</li>
      <li>Quelle belle journée ! (fém. sg)</li>
      <li>Quels beaux jours ! (masc. pl)</li>
      <li>Quelles belles journées ! (fém. pl)</li>
    </ul>
  `
},

// ========================================
// 0.4.5 - LE TYPE IMPÉRATIF
// ========================================
"0.4.5": {
  title: "0.4.5 - Le type impératif",
  theory: `
    <h3>LE TYPE IMPÉRATIF</h3>
    
    <p><strong>Définition simple :</strong> La phrase impérative sert à donner un ordre, un conseil, une instruction ou une interdiction. Le sujet n'est pas exprimé.</p>
    
    <p><strong>Analogie :</strong> La phrase impérative, c'est comme un panneau de signalisation ! Elle dit ce qu'il faut faire (ou ne pas faire) : "Arrête !" "Tourne à droite !" "Mange ta soupe !" Le message est direct et clair.</p>
    
    <h4>Caractéristiques de la phrase impérative</h4>
    <ul>
      <li><strong>Fonction :</strong> Donner un ordre, un conseil, une instruction, une interdiction</li>
      <li><strong>Ponctuation :</strong> Point (.) ou point d'exclamation (!) selon l'intensité</li>
      <li><strong>Sujet :</strong> Absent (non exprimé)</li>
      <li><strong>Mode :</strong> Impératif (ou infinitif dans certains contextes)</li>
    </ul>
    
    <h4>Les 3 personnes de l'impératif</h4>
    <p>L'impératif n'existe qu'à 3 personnes (pas de sujet exprimé) :</p>
    
    <table>
      <tr>
        <th>Personne</th>
        <th>À qui s'adresse-t-on ?</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>2e sg (tu)</strong></td>
        <td>Une personne</td>
        <td>Mange ! Pars ! Finis tes devoirs !</td>
      </tr>
      <tr>
        <td><strong>1re pl (nous)</strong></td>
        <td>Soi-même + autres</td>
        <td>Mangeons ! Partons ! Finissons !</td>
      </tr>
      <tr>
        <td><strong>2e pl (vous)</strong></td>
        <td>Plusieurs personnes (ou politesse)</td>
        <td>Mangez ! Partez ! Finissez vos devoirs !</td>
      </tr>
    </table>
    
    <h4>⚠️ Attention : Pas de "s" à la 2e sg pour les verbes en -er</h4>
    <p>Les verbes en -ER (et quelques autres) perdent le "s" final à la 2e personne du singulier :</p>
    <ul>
      <li>Tu manges → <strong>Mange !</strong> (pas *Manges)</li>
      <li>Tu vas → <strong>Va !</strong> (pas *Vas)</li>
      <li>Tu parles → <strong>Parle !</strong> (pas *Parles)</li>
    </ul>
    
    <p><strong>Exception :</strong> On garde le "s" devant "en" et "y" pour la liaison :</p>
    <ul>
      <li>Manges-en ! Vas-y !</li>
    </ul>
    
    <h4>Les 4 usages de l'impératif</h4>
    <table>
      <tr>
        <th>Usage</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Ordre</strong></td>
        <td>Tais-toi ! Sors d'ici ! Fais tes devoirs !</td>
      </tr>
      <tr>
        <td><strong>Conseil</strong></td>
        <td>Repose-toi. Prends ton temps. Écoute-moi.</td>
      </tr>
      <tr>
        <td><strong>Instruction</strong></td>
        <td>Tournez à droite. Ajoutez le sel. Mélangez bien.</td>
      </tr>
      <tr>
        <td><strong>Interdiction</strong></td>
        <td>Ne pars pas ! N'oublie pas ! Ne touche pas !</td>
      </tr>
    </table>
    
    <h4>Forme négative de l'impératif</h4>
    <p>Pour interdire quelque chose, on utilise <strong>ne...pas</strong> (ou ne...plus, ne...jamais) :</p>
    <ul>
      <li>Ne mange pas ! (interdiction)</li>
      <li>Ne pars plus ! (cessation)</li>
      <li>N'oublie jamais ! (mise en garde)</li>
      <li>Ne touchez pas ! (avertissement)</li>
    </ul>
    
    <h4>Place des pronoms compléments</h4>
    <p>À l'impératif, les pronoms compléments changent de place :</p>
    
    <h5>Impératif POSITIF : pronom APRÈS le verbe (avec trait d'union)</h5>
    <ul>
      <li>Mange-<strong>la</strong> ! (la pomme)</li>
      <li>Donne-<strong>le-moi</strong> ! (le livre)</li>
      <li>Parle-<strong>lui</strong> ! (à Marie)</li>
      <li>Vas-<strong>y</strong> !</li>
    </ul>
    
    <h5>Impératif NÉGATIF : pronom AVANT le verbe (ordre normal)</h5>
    <ul>
      <li>Ne <strong>la</strong> mange pas !</li>
      <li>Ne <strong>me le</strong> donne pas !</li>
      <li>Ne <strong>lui</strong> parle pas !</li>
      <li>N'<strong>y</strong> va pas !</li>
    </ul>
    
    <h4>⚠️ Changement me/te → moi/toi</h4>
    <p>À l'impératif positif, "me" et "te" deviennent "moi" et "toi" :</p>
    <ul>
      <li>Donne-<strong>moi</strong> le livre ! (pas *Donne-me)</li>
      <li>Écoute-<strong>toi</strong> ! (pas *Écoute-te)</li>
    </ul>
    
    <h4>Autres formes d'ordre ou d'instruction</h4>
    
    <h5>1. Infinitif (instructions générales)</h5>
    <p>Dans les recettes, modes d'emploi, panneaux :</p>
    <ul>
      <li><strong>Ne pas fumer.</strong></li>
      <li><strong>Ajouter</strong> le sel.</li>
      <li><strong>Tourner</strong> à droite.</li>
    </ul>
    
    <h5>2. Subjonctif (souhait formel)</h5>
    <ul>
      <li><strong>Qu'il</strong> parte !</li>
      <li><strong>Que</strong> tout le monde se taise !</li>
    </ul>
    
    <h4>Transformation déclarative → impérative</h4>
    <p><strong>Phrase de base :</strong> Tu manges ta soupe.</p>
    
    <table>
      <tr>
        <th>Transformation</th>
        <th>Phrase impérative</th>
      </tr>
      <tr>
        <td>Suppression du sujet</td>
        <td>Mange ta soupe !</td>
      </tr>
      <tr>
        <td>Mode impératif</td>
        <td>Mange !</td>
      </tr>
      <tr>
        <td>Forme négative</td>
        <td>Ne mange pas ta soupe !</td>
      </tr>
    </table>
    
    <h4>Exemples variés</h4>
    <ul>
      <li>Viens ici !</li>
      <li>Écoute-moi bien.</li>
      <li>Ne fais pas ça !</li>
      <li>Partons maintenant.</li>
      <li>Soyez prudents !</li>
      <li>N'oublie jamais cette leçon.</li>
    </ul>
  `
},

// ========================================
// 0.4.6 - LA FORME NÉGATIVE
// ========================================
"0.4.6": {
  title: "0.4.6 - La forme négative",
  theory: `
    <h3>LA FORME NÉGATIVE</h3>
    
    <p><strong>Définition simple :</strong> La forme négative sert à nier, refuser ou exprimer l'absence de quelque chose. Elle s'oppose à la forme positive (affirmative).</p>
    
    <p><strong>Analogie :</strong> La forme négative, c'est comme un interrupteur qu'on éteint ! La phrase positive allume l'action ("Je mange"), la phrase négative l'éteint ("Je ne mange pas"). On transforme l'affirmation en négation.</p>
    
    <h4>Structure de la négation</h4>
    <p>En français, la négation est généralement formée de <strong>DEUX mots</strong> qui encadrent le verbe :</p>
    <p style="padding: 15px; border: 1px solid #000; font-size: 18px;">
      <strong>ne + VERBE + pas/plus/jamais/rien...</strong>
    </p>
    
    <h4>Les principales négations</h4>
    <table>
      <tr>
        <th>Négation</th>
        <th>Sens</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>ne...pas</strong></td>
        <td>Négation générale</td>
        <td>Je ne mange pas.</td>
      </tr>
      <tr>
        <td><strong>ne...plus</strong></td>
        <td>Cessation (arrêt)</td>
        <td>Je ne mange plus. (j'ai arrêté)</td>
      </tr>
      <tr>
        <td><strong>ne...jamais</strong></td>
        <td>Absence totale dans le temps</td>
        <td>Je ne mange jamais de viande.</td>
      </tr>
      <tr>
        <td><strong>ne...rien</strong></td>
        <td>Aucune chose</td>
        <td>Je ne mange rien.</td>
      </tr>
      <tr>
        <td><strong>ne...personne</strong></td>
        <td>Aucune personne</td>
        <td>Je ne vois personne.</td>
      </tr>
      <tr>
        <td><strong>ne...aucun(e)</strong></td>
        <td>Pas un seul</td>
        <td>Je n'ai aucune idée.</td>
      </tr>
      <tr>
        <td><strong>ne...ni...ni</strong></td>
        <td>Négation de deux éléments</td>
        <td>Je ne mange ni viande ni poisson.</td>
      </tr>
      <tr>
        <td><strong>ne...que</strong></td>
        <td>Restriction (= seulement)</td>
        <td>Je ne mange que des fruits. (seulement)</td>
      </tr>
    </table>
    
    <h4>Position de la négation</h4>
    
    <h5>Temps simples : encadrement du verbe</h5>
    <ul>
      <li>Je <strong>ne</strong> mange <strong>pas</strong>.</li>
      <li>Tu <strong>ne</strong> pars <strong>jamais</strong>.</li>
      <li>Elle <strong>n'</strong>aime <strong>plus</strong> le chocolat.</li>
    </ul>
    
    <h5>Temps composés : encadrement de l'auxiliaire</h5>
    <ul>
      <li>Je <strong>n'</strong>ai <strong>pas</strong> mangé.</li>
      <li>Tu <strong>n'</strong>es <strong>jamais</strong> parti.</li>
      <li>Elle <strong>n'</strong>a <strong>plus</strong> aimé le chocolat.</li>
    </ul>
    
    <p><strong>Exception :</strong> Avec "personne", la négation vient APRÈS le participe passé :</p>
    <ul>
      <li>Je <strong>n'</strong>ai vu <strong>personne</strong>.</li>
    </ul>
    
    <h4>⚠️ Élision du "ne"</h4>
    <p>"Ne" devient "n'" devant une voyelle ou un h muet :</p>
    <ul>
      <li>Je <strong>n'</strong>aime pas. (ne + aime)</li>
      <li>Elle <strong>n'</strong>habite plus ici. (ne + habite)</li>
      <li>Il <strong>n'</strong>est jamais venu. (ne + est)</li>
    </ul>
    
    <h4>Transformation positive → négative</h4>
    <table>
      <tr>
        <th>Phrase positive</th>
        <th>Phrase négative</th>
      </tr>
      <tr>
        <td>Je mange une pomme.</td>
        <td>Je <strong>ne</strong> mange <strong>pas</strong> de pomme.</td>
      </tr>
      <tr>
        <td>Il est venu.</td>
        <td>Il <strong>n'</strong>est <strong>pas</strong> venu.</td>
      </tr>
      <tr>
        <td>Elle parle toujours.</td>
        <td>Elle <strong>ne</strong> parle <strong>jamais</strong>.</td>
      </tr>
      <tr>
        <td>J'ai tout compris.</td>
        <td>Je <strong>n'</strong>ai <strong>rien</strong> compris.</td>
      </tr>
      <tr>
        <td>Je vois quelqu'un.</td>
        <td>Je <strong>ne</strong> vois <strong>personne</strong>.</td>
      </tr>
    </table>
    
    <h4>⚠️ Articles et négation</h4>
    <p>Après la négation, les articles indéfinis et partitifs deviennent <strong>de/d'</strong> :</p>
    <table>
      <tr>
        <th>Positif</th>
        <th>Négatif</th>
      </tr>
      <tr>
        <td>Je mange <strong>une</strong> pomme.</td>
        <td>Je ne mange pas <strong>de</strong> pomme.</td>
      </tr>
      <tr>
        <td>J'ai <strong>des</strong> amis.</td>
        <td>Je n'ai pas <strong>d'</strong>amis.</td>
      </tr>
      <tr>
        <td>Je bois <strong>du</strong> café.</td>
        <td>Je ne bois pas <strong>de</strong> café.</td>
      </tr>
    </table>
    
    <p><strong>Exception :</strong> L'article défini ne change pas :</p>
    <ul>
      <li>J'aime <strong>le</strong> café. → Je n'aime pas <strong>le</strong> café.</li>
    </ul>
    
    <h4>Négation à l'oral familier</h4>
    <p>À l'oral familier, on omet souvent le "ne" (mais c'est incorrect à l'écrit !) :</p>
    <ul>
      <li>Oral familier : J'aime pas. / J'sais pas. / C'est pas vrai.</li>
      <li>Écrit correct : Je <strong>n'</strong>aime pas. / Je ne sais pas. / Ce n'est pas vrai.</li>
    </ul>
    
    <h4>Négation partielle : "ne...que"</h4>
    <p>"Ne...que" n'est pas une vraie négation, c'est une <strong>restriction</strong> (= seulement) :</p>
    <ul>
      <li>Je <strong>ne</strong> mange <strong>que</strong> des fruits. = Je mange seulement des fruits.</li>
      <li>Il <strong>n'</strong>a <strong>que</strong> 10 ans. = Il a seulement 10 ans.</li>
    </ul>
    
    <h4>Double négation : ni...ni</h4>
    <p>Pour nier deux éléments à la fois :</p>
    <ul>
      <li>Je <strong>ne</strong> mange <strong>ni</strong> viande <strong>ni</strong> poisson.</li>
      <li>Il <strong>n'</strong>aime <strong>ni</strong> le sport <strong>ni</strong> la lecture.</li>
      <li>Elle <strong>ne</strong> parle <strong>ni</strong> anglais <strong>ni</strong> espagnol.</li>
    </ul>
  `
},

// ========================================
// 0.4.7 - LA FORME PASSIVE
// ========================================
"0.4.7": {
  title: "0.4.7 - La forme passive",
  theory: `
    <h3>LA FORME PASSIVE</h3>
    
    <p><strong>Définition simple :</strong> La forme passive est une transformation de la phrase où le sujet subit l'action au lieu de la faire. Elle s'oppose à la forme active.</p>
    
    <p><strong>Analogie :</strong> La forme passive, c'est comme inverser les rôles ! En forme active, le sujet est l'acteur (Marie mange la pomme). En forme passive, le sujet devient le patient (La pomme est mangée par Marie). On change de point de vue !</p>
    
    <h4>Comparaison Active vs Passive</h4>
    <table>
      <tr>
        <th>Forme</th>
        <th>Phrase</th>
        <th>Le sujet...</th>
      </tr>
      <tr>
        <td><strong>Active</strong></td>
        <td>Marie mange la pomme.</td>
        <td>...fait l'action</td>
      </tr>
      <tr>
        <td><strong>Passive</strong></td>
        <td>La pomme est mangée par Marie.</td>
        <td>...subit l'action</td>
      </tr>
    </table>
    
    <h4>Structure de la phrase passive</h4>
    <p style="padding: 15px; border: 1px solid #000; font-size: 18px;">
      <strong>Sujet passif + ÊTRE + Participe passé + (par + complément d'agent)</strong>
    </p>
    
    <p><strong>Exemple :</strong> La pomme <strong>est mangée</strong> par Marie.</p>
    
    <h4>Formation du passif</h4>
    <p>Pour transformer une phrase active en passive :</p>
    <ol>
      <li>Le <strong>CD</strong> de l'active devient le <strong>sujet</strong> du passif</li>
      <li>Le verbe devient : <strong>être (au même temps) + participe passé</strong></li>
      <li>Le <strong>sujet</strong> de l'active devient le <strong>complément d'agent</strong> (introduit par "par" ou "de")</li>
    </ol>
    
    <h4>Transformation Active → Passive</h4>
    <table>
      <tr>
        <th>Active</th>
        <th>Passive</th>
      </tr>
      <tr>
        <td>Marie mange la pomme.</td>
        <td>La pomme est mangée par Marie.</td>
      </tr>
      <tr>
        <td>Le chat attrape la souris.</td>
        <td>La souris est attrapée par le chat.</td>
      </tr>
      <tr>
        <td>Les élèves lisent le livre.</td>
        <td>Le livre est lu par les élèves.</td>
      </tr>
      <tr>
        <td>Pierre a construit cette maison.</td>
        <td>Cette maison a été construite par Pierre.</td>
      </tr>
    </table>
    
    <h4>Conjugaison du passif aux différents temps</h4>
    <table>
      <tr>
        <th>Temps</th>
        <th>Active</th>
        <th>Passive</th>
      </tr>
      <tr>
        <td><strong>Présent</strong></td>
        <td>Marie mange la pomme.</td>
        <td>La pomme <strong>est mangée</strong> par Marie.</td>
      </tr>
      <tr>
        <td><strong>Imparfait</strong></td>
        <td>Marie mangeait la pomme.</td>
        <td>La pomme <strong>était mangée</strong> par Marie.</td>
      </tr>
      <tr>
        <td><strong>Futur</strong></td>
        <td>Marie mangera la pomme.</td>
        <td>La pomme <strong>sera mangée</strong> par Marie.</td>
      </tr>
      <tr>
        <td><strong>Passé composé</strong></td>
        <td>Marie a mangé la pomme.</td>
        <td>La pomme <strong>a été mangée</strong> par Marie.</td>
      </tr>
    </table>
    
    <h4>Le complément d'agent</h4>
    <p>Le complément d'agent indique qui fait l'action. Il est introduit par :</p>
    <ul>
      <li><strong>par</strong> (le plus fréquent) : La pomme est mangée <strong>par</strong> Marie.</li>
      <li><strong>de</strong> (avec certains verbes) : Il est aimé <strong>de</strong> tous. / La maison est entourée <strong>d'</strong>arbres.</li>
    </ul>
    
    <p><strong>⚠️ Attention !</strong> Le complément d'agent peut être omis :</p>
    <ul>
      <li>La pomme est mangée. (on ne dit pas par qui)</li>
      <li>Cette maison a été construite en 1950. (pas de complément d'agent)</li>
    </ul>
    
    <h4>Accord du participe passé au passif</h4>
    <p>Au passif, le participe passé s'accorde TOUJOURS avec le sujet :</p>
    <ul>
      <li>La pomme est mangé<strong>e</strong>. (fém. sg)</li>
      <li>Les pommes sont mangé<strong>es</strong>. (fém. pl)</li>
      <li>Le livre est lu. (masc. sg)</li>
      <li>Les livres sont lu<strong>s</strong>. (masc. pl)</li>
    </ul>
    
    <h4>Quels verbes peuvent être au passif ?</h4>
    <p><strong>✓ OUI :</strong> Les verbes <strong>transitifs directs</strong> (qui ont un CD)</p>
    <ul>
      <li>manger, voir, lire, écrire, construire, détruire...</li>
    </ul>
    
    <p><strong>✗ NON :</strong> Les verbes intransitifs et transitifs indirects</p>
    <ul>
      <li>*Il est dormi. ✗ (dormir = intransitif)</li>
      <li>*Marie est parlée. ✗ (parler à = transitif indirect)</li>
    </ul>
    
    <h4>Pourquoi utiliser le passif ?</h4>
    <table>
      <tr>
        <th>Raison</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td>Mettre en valeur le <strong>patient</strong></td>
        <td>Cette maison a été construite en 1850.</td>
      </tr>
      <tr>
        <td>L'agent est <strong>inconnu</strong></td>
        <td>Mon vélo a été volé.</td>
      </tr>
      <tr>
        <td>L'agent est <strong>évident</strong></td>
        <td>Le coupable a été arrêté. (par la police, évidemment)</td>
      </tr>
      <tr>
        <td>Style <strong>formel/administratif</strong></td>
        <td>Votre demande a été enregistrée.</td>
      </tr>
    </table>
    
    <h4>Différence Active vs Passive : même information, point de vue différent</h4>
    <ul>
      <li><strong>Active :</strong> L'architecte a conçu cette maison. (focus sur l'architecte)</li>
      <li><strong>Passive :</strong> Cette maison a été conçue par l'architecte. (focus sur la maison)</li>
    </ul>
    
    <h4>Exemples variés</h4>
    <ul>
      <li>Le film est réalisé par Spielberg.</li>
      <li>Ces livres ont été écrits au XIXe siècle.</li>
      <li>La réunion sera organisée demain.</li>
      <li>Les résultats seront annoncés la semaine prochaine.</li>
      <li>Cette loi a été votée par le Parlement.</li>
    </ul>
  `
},

// ========================================
// 0.4.8 - LA FORME EMPHATIQUE
// ========================================
"0.4.8": {
  title: "0.4.8 - La forme emphatique",
  theory: `
    <h3>LA FORME EMPHATIQUE</h3>
    
    <p><strong>Définition simple :</strong> La forme emphatique (ou phrase emphatique) sert à mettre en relief, en évidence un élément de la phrase. On attire l'attention sur cet élément.</p>
    
    <p><strong>Analogie :</strong> La forme emphatique, c'est comme un projecteur sur scène ! Au lieu de dire simplement "Marie mange une pomme", on braque le projecteur : "C'est MARIE qui mange une pomme" (focus sur Marie). On souligne l'élément important.</p>
    
    <h4>Comparaison Neutre vs Emphatique</h4>
    <table>
      <tr>
        <th>Forme</th>
        <th>Phrase</th>
      </tr>
      <tr>
        <td><strong>Neutre</strong></td>
        <td>Marie mange une pomme.</td>
      </tr>
      <tr>
        <td><strong>Emphatique</strong></td>
        <td><strong>C'est Marie qui</strong> mange une pomme.</td>
      </tr>
    </table>
    
    <h4>Les 3 procédés d'emphase principaux</h4>
    
    <h5>1. Emphase par "C'est...qui/que"</h5>
    <p>On encadre l'élément à mettre en relief avec <strong>c'est...qui</strong> (pour le sujet) ou <strong>c'est...que</strong> (pour les compléments).</p>
    
    <table>
      <tr>
        <th>Élément mis en relief</th>
        <th>Structure</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Sujet</strong></td>
        <td>C'est...qui</td>
        <td><strong>C'est Marie qui</strong> mange une pomme.</td>
      </tr>
      <tr>
        <td><strong>CD</strong></td>
        <td>C'est...que</td>
        <td><strong>C'est une pomme que</strong> Marie mange.</td>
      </tr>
      <tr>
        <td><strong>Complément de phrase</strong></td>
        <td>C'est...que</td>
        <td><strong>C'est hier que</strong> Marie est partie.</td>
      </tr>
    </table>
    
    <h5>2. Emphase par détachement (avec reprise pronominale)</h5>
    <p>On détache l'élément au début ou à la fin, et on le reprend par un pronom.</p>
    
    <p><strong>Détachement en tête :</strong></p>
    <ul>
      <li><strong>Marie</strong>, elle mange une pomme.</li>
      <li><strong>Cette pomme</strong>, je la trouve délicieuse.</li>
      <li><strong>Hier</strong>, je suis parti.</li>
    </ul>
    
    <p><strong>Détachement en queue :</strong></p>
    <ul>
      <li>Elle mange une pomme, <strong>Marie</strong>.</li>
      <li>Je la trouve délicieuse, <strong>cette pomme</strong>.</li>
      <li>Je suis parti, <strong>hier</strong>.</li>
    </ul>
    
    <h5>3. Emphase par extraction ("Ce que...c'est" / "Ce qui...c'est")</h5>
    <p>On extrait une partie de la phrase et on la présente en deux temps.</p>
    <ul>
      <li><strong>Ce que</strong> je veux, <strong>c'est</strong> partir.</li>
      <li><strong>Ce qui</strong> m'intéresse, <strong>c'est</strong> la linguistique.</li>
      <li><strong>Ce dont</strong> j'ai besoin, <strong>c'est</strong> de repos.</li>
    </ul>
    
    <h4>Transformation Neutre → Emphatique</h4>
    <p><strong>Phrase de base :</strong> Marie mange une pomme dans la cuisine.</p>
    
    <table>
      <tr>
        <th>Élément mis en relief</th>
        <th>Phrase emphatique</th>
      </tr>
      <tr>
        <td>Sujet (Marie)</td>
        <td><strong>C'est Marie qui</strong> mange une pomme dans la cuisine.</td>
      </tr>
      <tr>
        <td>CD (une pomme)</td>
        <td><strong>C'est une pomme que</strong> Marie mange dans la cuisine.</td>
      </tr>
      <tr>
        <td>Compl. lieu (dans la cuisine)</td>
        <td><strong>C'est dans la cuisine que</strong> Marie mange une pomme.</td>
      </tr>
      <tr>
        <td>Détachement sujet</td>
        <td><strong>Marie</strong>, elle mange une pomme dans la cuisine.</td>
      </tr>
      <tr>
        <td>Détachement CD</td>
        <td><strong>Une pomme</strong>, Marie la mange dans la cuisine.</td>
      </tr>
    </table>
    
    <h4>⚠️ "C'est...qui" vs "C'est...que"</h4>
    <table>
      <tr>
        <th>Utilisation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>qui</strong> : pour le sujet</td>
        <td>C'est Marie <strong>qui</strong> mange.</td>
      </tr>
      <tr>
        <td><strong>que</strong> : pour tout le reste</td>
        <td>C'est une pomme <strong>que</strong> Marie mange.</td>
      </tr>
    </table>
    
    <h4>Accord avec "C'est" ou "Ce sont"</h4>
    <p>Au pluriel, on peut dire "c'est" OU "ce sont" (les deux sont acceptés, "ce sont" est plus soutenu) :</p>
    <ul>
      <li><strong>C'est</strong> les enfants qui jouent. (courant)</li>
      <li><strong>Ce sont</strong> les enfants qui jouent. (soutenu)</li>
    </ul>
    
    <h4>Pourquoi utiliser la forme emphatique ?</h4>
    <table>
      <tr>
        <th>Raison</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Insister</strong> sur un élément</td>
        <td>C'est <strong>toi</strong> qui as fait ça ?</td>
      </tr>
      <tr>
        <td><strong>Corriger</strong> une erreur</td>
        <td>Non, c'est <strong>Pierre</strong> qui a appelé, pas Marie.</td>
      </tr>
      <tr>
        <td><strong>Répondre</strong> à une question</td>
        <td>Qui a mangé ? — C'est <strong>moi</strong> qui ai mangé.</td>
      </tr>
      <tr>
        <td><strong>Contraster</strong></td>
        <td>C'est <strong>Marie</strong> qui travaille, pas Pierre.</td>
      </tr>
    </table>
    
    <h4>Emphase à l'oral</h4>
    <p>À l'oral, l'emphase se marque aussi par :</p>
    <ul>
      <li><strong>Intonation</strong> : accent tonique sur l'élément important</li>
      <li><strong>Pause</strong> : Marie... elle mange une pomme.</li>
      <li><strong>Volume</strong> : C'est MARIE qui mange !</li>
    </ul>
    
    <h4>Exemples variés</h4>
    <ul>
      <li>C'est <strong>lui</strong> qui a gagné.</li>
      <li>C'est <strong>demain</strong> que je pars.</li>
      <li><strong>Ce livre</strong>, je l'ai déjà lu.</li>
      <li><strong>Moi</strong>, je préfère le chocolat.</li>
      <li>Ce que je veux, c'est <strong>réussir</strong>.</li>
      <li>C'est à <strong>toi</strong> que je parle !</li>
    </ul>
  `
},

// ========================================
// 0.4.9 - LA FORME IMPERSONNELLE
// ========================================
"0.4.9": {
  title: "0.4.9 - La forme impersonnelle",
  theory: `
    <h3>LA FORME IMPERSONNELLE</h3>
    
    <p><strong>Définition simple :</strong> La forme impersonnelle est une construction où le sujet "il" ne désigne aucune personne ni aucune chose précise. C'est un "il" vide, sans référent.</p>
    
    <p><strong>Analogie :</strong> La forme impersonnelle, c'est comme un sujet fantôme ! "Il pleut" → qui pleut ? Personne ! Le "il" ne remplace rien, il est juste là pour la structure grammaticale. C'est un sujet grammatical sans sens.</p>
    
    <h4>Caractéristiques de la forme impersonnelle</h4>
    <ul>
      <li><strong>Sujet :</strong> Toujours "il" (3e personne singulier)</li>
      <li><strong>Ce "il" ne remplace rien</strong> (pas de référent)</li>
      <li><strong>Verbe :</strong> Toujours au singulier</li>
      <li><strong>On ne peut pas demander "qui ?"</strong> pour ce sujet</li>
    </ul>
    
    <h4>Comparaison : "Il" personnel vs "Il" impersonnel</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>Exemple</th>
        <th>Explication</th>
      </tr>
      <tr>
        <td><strong>Personnel</strong></td>
        <td>Pierre arrive. <strong>Il</strong> est content.</td>
        <td>"Il" = Pierre (référent clair)</td>
      </tr>
      <tr>
        <td><strong>Impersonnel</strong></td>
        <td><strong>Il</strong> pleut.</td>
        <td>"Il" ne remplace rien (pas de référent)</td>
      </tr>
    </table>
    
    <h4>Les 3 types de verbes impersonnels</h4>
    
    <h5>1. Verbes essentiellement impersonnels</h5>
    <p>Ces verbes n'existent QUE sous forme impersonnelle :</p>
    
    <table>
      <tr>
        <th>Catégorie</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Phénomènes météo</strong></td>
        <td>Il pleut, il neige, il vente, il gèle, il tonne, il grêle</td>
      </tr>
      <tr>
        <td><strong>Expressions</strong></td>
        <td>Il s'agit de, il convient de, il importe de, il arrive que</td>
      </tr>
    </table>
    
    <h5>2. Verbe "falloir"</h5>
    <p>Le verbe <strong>falloir</strong> est toujours impersonnel :</p>
    <ul>
      <li>Il faut partir.</li>
      <li>Il faut que tu viennes.</li>
      <li>Il fallait réussir.</li>
    </ul>
    
    <h5>3. Construction impersonnelle de verbes personnels</h5>
    <p>Certains verbes personnels peuvent être utilisés en construction impersonnelle avec <strong>"il y a"</strong>, <strong>"il existe"</strong>, <strong>"il reste"</strong>, <strong>"il manque"</strong>, etc.</p>
    
    <table>
      <tr>
        <th>Forme personnelle</th>
        <th>Forme impersonnelle</th>
      </tr>
      <tr>
        <td>Des livres sont sur la table.</td>
        <td><strong>Il y a</strong> des livres sur la table.</td>
      </tr>
      <tr>
        <td>Trois élèves restent.</td>
        <td><strong>Il reste</strong> trois élèves.</td>
      </tr>
      <tr>
        <td>Deux personnes manquent.</td>
        <td><strong>Il manque</strong> deux personnes.</td>
      </tr>
      <tr>
        <td>Un problème existe.</td>
        <td><strong>Il existe</strong> un problème.</td>
      </tr>
    </table>
    
    <h4>Expressions impersonnelles courantes</h4>
    
    <h5>Avec infinitif</h5>
    <ul>
      <li>Il faut <strong>partir</strong>.</li>
      <li>Il convient de <strong>réfléchir</strong>.</li>
      <li>Il suffit de <strong>demander</strong>.</li>
      <li>Il vaut mieux <strong>attendre</strong>.</li>
      <li>Il est nécessaire de <strong>comprendre</strong>.</li>
    </ul>
    
    <h5>Avec subjonctif (il faut que...)</h5>
    <ul>
      <li>Il faut que tu <strong>viennes</strong>.</li>
      <li>Il est important que vous <strong>compreniez</strong>.</li>
      <li>Il se peut qu'il <strong>pleuve</strong>.</li>
      <li>Il arrive qu'elle <strong>oublie</strong>.</li>
    </ul>
    
    <h5>Avec adjectif (il est + adj + de...)</h5>
    <ul>
      <li>Il est <strong>facile</strong> de réussir.</li>
      <li>Il est <strong>difficile</strong> de comprendre.</li>
      <li>Il est <strong>important</strong> de savoir.</li>
      <li>Il est <strong>nécessaire</strong> de partir.</li>
    </ul>
    
    <h4>Le sujet réel</h4>
    <p>Dans certaines constructions impersonnelles, il y a un <strong>sujet réel</strong> après le verbe (le "il" est alors un sujet apparent) :</p>
    
    <table>
      <tr>
        <th>Phrase impersonnelle</th>
        <th>Sujet réel</th>
      </tr>
      <tr>
        <td><strong>Il</strong> arrive <strong>des gens</strong>.</td>
        <td>des gens (ce sont les gens qui arrivent)</td>
      </tr>
      <tr>
        <td><strong>Il</strong> reste <strong>trois élèves</strong>.</td>
        <td>trois élèves</td>
      </tr>
      <tr>
        <td><strong>Il</strong> manque <strong>deux pages</strong>.</td>
        <td>deux pages</td>
      </tr>
      <tr>
        <td><strong>Il</strong> existe <strong>une solution</strong>.</td>
        <td>une solution</td>
      </tr>
    </table>
    
    <p><strong>⚠️ Piège !</strong> Le verbe reste au singulier même si le sujet réel est au pluriel :</p>
    <ul>
      <li>Il <strong>reste</strong> trois élèves. (pas *restent)</li>
      <li>Il <strong>manque</strong> deux pages. (pas *manquent)</li>
    </ul>
    
    <h4>Transformation personnelle → impersonnelle</h4>
    <table>
      <tr>
        <th>Forme personnelle</th>
        <th>Forme impersonnelle</th>
      </tr>
      <tr>
        <td>Des problèmes existent.</td>
        <td><strong>Il existe</strong> des problèmes.</td>
      </tr>
      <tr>
        <td>Beaucoup de gens arrivent.</td>
        <td><strong>Il arrive</strong> beaucoup de gens.</td>
      </tr>
      <tr>
        <td>Partir est nécessaire.</td>
        <td><strong>Il est nécessaire</strong> de partir.</td>
      </tr>
      <tr>
        <td>Une erreur s'est produite.</td>
        <td><strong>Il s'est produit</strong> une erreur.</td>
      </tr>
    </table>
    
    <h4>Pourquoi utiliser la forme impersonnelle ?</h4>
    <table>
      <tr>
        <th>Raison</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Généraliser</strong></td>
        <td>Il faut travailler pour réussir.</td>
      </tr>
      <tr>
        <td><strong>Décrire la météo</strong></td>
        <td>Il pleut, il fait beau.</td>
      </tr>
      <tr>
        <td><strong>Exprimer une nécessité</strong></td>
        <td>Il est important de comprendre.</td>
      </tr>
      <tr>
        <td><strong>Style plus formel</strong></td>
        <td>Il convient de noter que...</td>
      </tr>
    </table>
    
    <h4>Exemples variés</h4>
    <ul>
      <li>Il pleut depuis ce matin.</li>
      <li>Il faut que tu partes maintenant.</li>
      <li>Il y a trois livres sur la table.</li>
      <li>Il reste du pain.</li>
      <li>Il manque deux élèves.</li>
      <li>Il est interdit de fumer.</li>
      <li>Il s'agit d'un problème important.</li>
      <li>Il arrive souvent qu'elle oublie.</li>
    </ul>
  `
},
// ========================================
// MODULE 0.5 : CONJUGAISON ET TEMPS VERBAUX
// ========================================

// ========================================
// 0.5.1 - LE MODE INDICATIF
// ========================================
"0.5.1": {
  title: "0.5.1 - Le mode indicatif",
  theory: `
    <h3>LE MODE INDICATIF</h3>
    
    <p><strong>Définition simple :</strong> L'indicatif est le mode de la réalité et de la certitude. Il présente les faits comme réels, certains, objectifs.</p>
    
    <p><strong>Analogie :</strong> L'indicatif, c'est comme un journaliste qui rapporte des faits : "Il pleut.", "Marie est partie.", "Je mangerai demain." Ce sont des affirmations présentées comme vraies, réelles.</p>
    
    <h4>Caractéristiques de l'indicatif</h4>
    <ul>
      <li><strong>Fonction :</strong> Exprimer des faits réels, certains</li>
      <li><strong>Usage :</strong> Le mode le plus utilisé (90% des verbes)</li>
      <li><strong>Temps :</strong> 8 temps (4 simples + 4 composés)</li>
    </ul>
    
    <h4>Les 8 temps de l'indicatif</h4>
    <table>
      <tr>
        <th>Temps</th>
        <th>Type</th>
        <th>Exemple (manger)</th>
      </tr>
      <tr>
        <td><strong>Présent</strong></td>
        <td>Simple</td>
        <td>je mange</td>
      </tr>
      <tr>
        <td><strong>Imparfait</strong></td>
        <td>Simple</td>
        <td>je mangeais</td>
      </tr>
      <tr>
        <td><strong>Passé simple</strong></td>
        <td>Simple</td>
        <td>je mangeai</td>
      </tr>
      <tr>
        <td><strong>Futur simple</strong></td>
        <td>Simple</td>
        <td>je mangerai</td>
      </tr>
      <tr>
        <td><strong>Passé composé</strong></td>
        <td>Composé</td>
        <td>j'ai mangé</td>
      </tr>
      <tr>
        <td><strong>Plus-que-parfait</strong></td>
        <td>Composé</td>
        <td>j'avais mangé</td>
      </tr>
      <tr>
        <td><strong>Passé antérieur</strong></td>
        <td>Composé</td>
        <td>j'eus mangé</td>
      </tr>
      <tr>
        <td><strong>Futur antérieur</strong></td>
        <td>Composé</td>
        <td>j'aurai mangé</td>
      </tr>
    </table>
    
    <h4>Quand utiliser l'indicatif ?</h4>
    <p>On utilise l'indicatif pour :</p>
    <ul>
      <li><strong>Constater un fait :</strong> Il pleut.</li>
      <li><strong>Raconter une histoire :</strong> Marie est partie hier.</li>
      <li><strong>Exprimer une certitude :</strong> Je sais qu'il viendra.</li>
      <li><strong>Décrire une action :</strong> Je mange une pomme.</li>
      <li><strong>Énoncer une vérité générale :</strong> L'eau bout à 100°C.</li>
    </ul>
    
    <h4>Temps simples vs temps composés</h4>
    <table>
      <tr>
        <th>Temps simples</th>
        <th>Temps composés</th>
      </tr>
      <tr>
        <td>1 seul mot</td>
        <td>Auxiliaire (être/avoir) + participe passé</td>
      </tr>
      <tr>
        <td>je mange</td>
        <td>j'ai mangé</td>
      </tr>
      <tr>
        <td>je mangeais</td>
        <td>j'avais mangé</td>
      </tr>
      <tr>
        <td>je mangerai</td>
        <td>j'aurai mangé</td>
      </tr>
    </table>
    
    <h4>Exemples selon le temps</h4>
    <ul>
      <li><strong>Présent :</strong> Je mange une pomme maintenant.</li>
      <li><strong>Passé composé :</strong> J'ai mangé une pomme ce matin.</li>
      <li><strong>Imparfait :</strong> Je mangeais quand tu es arrivé.</li>
      <li><strong>Futur simple :</strong> Je mangerai demain.</li>
    </ul>
    
    <h4>L'indicatif dans les subordonnées</h4>
    <p>Après certains verbes de certitude, on utilise l'indicatif (pas le subjonctif) :</p>
    <ul>
      <li>Je <strong>sais</strong> qu'il <strong>viendra</strong>. (indicatif)</li>
      <li>Je <strong>pense</strong> qu'il <strong>a raison</strong>. (indicatif)</li>
      <li>Je <strong>crois</strong> qu'elle <strong>est</strong> partie. (indicatif)</li>
    </ul>
  `
},

// ========================================
// 0.5.2 - LE MODE SUBJONCTIF
// ========================================
"0.5.2": {
  title: "0.5.2 - Le mode subjonctif",
  theory: `
    <h3>LE MODE SUBJONCTIF</h3>
    
    <p><strong>Définition simple :</strong> Le subjonctif est le mode du possible, du souhaité, du douteux. Il présente les faits comme incertains, subjectifs, envisagés.</p>
    
    <p><strong>Analogie :</strong> Le subjonctif, c'est comme exprimer un désir ou un doute : "Je veux qu'il VIENNE" (ce n'est pas encore sûr), "Il faut qu'il PARTE" (obligation envisagée). Ce n'est pas un fait réel comme avec l'indicatif.</p>
    
    <h4>Caractéristiques du subjonctif</h4>
    <ul>
      <li><strong>Fonction :</strong> Exprimer l'incertitude, le souhait, le doute, le sentiment</li>
      <li><strong>Usage :</strong> Principalement dans les subordonnées (après "que")</li>
      <li><strong>Temps courants :</strong> Présent et passé (l'imparfait et le plus-que-parfait sont littéraires)</li>
    </ul>
    
    <h4>Les 4 temps du subjonctif</h4>
    <table>
      <tr>
        <th>Temps</th>
        <th>Usage</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Présent</strong></td>
        <td>Courant</td>
        <td>que je mange</td>
      </tr>
      <tr>
        <td><strong>Passé</strong></td>
        <td>Courant</td>
        <td>que j'aie mangé</td>
      </tr>
      <tr>
        <td><strong>Imparfait</strong></td>
        <td>Littéraire</td>
        <td>que je mangeasse</td>
      </tr>
      <tr>
        <td><strong>Plus-que-parfait</strong></td>
        <td>Littéraire</td>
        <td>que j'eusse mangé</td>
      </tr>
    </table>
    
    <h4>Quand utiliser le subjonctif ?</h4>
    <p>On utilise le subjonctif après des expressions qui expriment :</p>
    
    <h5>1. Le souhait, la volonté</h5>
    <ul>
      <li>Je veux qu'il <strong>vienne</strong>.</li>
      <li>J'aimerais que tu <strong>réussisses</strong>.</li>
      <li>Je souhaite qu'elle <strong>soit</strong> heureuse.</li>
    </ul>
    
    <h5>2. Le doute, l'incertitude</h5>
    <ul>
      <li>Je doute qu'il <strong>vienne</strong>.</li>
      <li>Il est possible qu'elle <strong>parte</strong>.</li>
      <li>Je ne crois pas qu'il <strong>soit</strong> là.</li>
    </ul>
    
    <h5>3. La nécessité, l'obligation</h5>
    <ul>
      <li>Il faut qu'il <strong>vienne</strong>.</li>
      <li>Il est nécessaire que tu <strong>partes</strong>.</li>
      <li>Il est important que vous <strong>compreniez</strong>.</li>
    </ul>
    
    <h5>4. Le sentiment, l'émotion</h5>
    <ul>
      <li>Je suis content qu'il <strong>vienne</strong>.</li>
      <li>J'ai peur qu'il <strong>pleuve</strong>.</li>
      <li>Je regrette qu'elle <strong>soit</strong> partie.</li>
    </ul>
    
    <h4>Verbes et expressions qui déclenchent le subjonctif</h4>
    <table>
      <tr>
        <th>Catégorie</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>Volonté</strong></td>
        <td>vouloir, désirer, souhaiter, demander, exiger</td>
      </tr>
      <tr>
        <td><strong>Doute</strong></td>
        <td>douter, il est possible que, il se peut que</td>
      </tr>
      <tr>
        <td><strong>Nécessité</strong></td>
        <td>il faut que, il est nécessaire que, il est important que</td>
      </tr>
      <tr>
        <td><strong>Sentiment</strong></td>
        <td>être content, regretter, avoir peur, craindre</td>
      </tr>
    </table>
    
    <h4>Conjonctions suivies du subjonctif</h4>
    <ul>
      <li><strong>avant que</strong> : Je partirai avant qu'il <strong>arrive</strong>.</li>
      <li><strong>pour que</strong> : Je travaille pour que tu <strong>réussisses</strong>.</li>
      <li><strong>bien que</strong> : Bien qu'il <strong>pleuve</strong>, je sors.</li>
      <li><strong>jusqu'à ce que</strong> : J'attends jusqu'à ce qu'il <strong>vienne</strong>.</li>
      <li><strong>à condition que</strong> : Je viendrai à condition que tu <strong>sois</strong> là.</li>
    </ul>
    
    <h4>⚠️ Indicatif ou Subjonctif ?</h4>
    <table>
      <tr>
        <th>Certitude → Indicatif</th>
        <th>Doute/Souhait → Subjonctif</th>
      </tr>
      <tr>
        <td>Je sais qu'il <strong>viendra</strong>.</td>
        <td>Je doute qu'il <strong>vienne</strong>.</td>
      </tr>
      <tr>
        <td>Je pense qu'il <strong>est</strong> là.</td>
        <td>Je ne pense pas qu'il <strong>soit</strong> là.</td>
      </tr>
      <tr>
        <td>Il est certain qu'il <strong>partira</strong>.</td>
        <td>Il est possible qu'il <strong>parte</strong>.</td>
      </tr>
    </table>
    
    <h4>Formation du subjonctif présent</h4>
    <p>Pour la plupart des verbes : <strong>base de la 3e personne pluriel du présent + terminaisons</strong></p>
    <ul>
      <li>ils mang<strong>ent</strong> → que je mang<strong>e</strong></li>
      <li>ils finiss<strong>ent</strong> → que je finiss<strong>e</strong></li>
    </ul>
    
    <p><strong>Terminaisons :</strong> -e, -es, -e, -ions, -iez, -ent</p>
    
    <h4>Verbes irréguliers fréquents au subjonctif</h4>
    <table>
      <tr>
        <th>Verbe</th>
        <th>Subjonctif présent</th>
      </tr>
      <tr>
        <td>être</td>
        <td>que je <strong>sois</strong>, que nous <strong>soyons</strong></td>
      </tr>
      <tr>
        <td>avoir</td>
        <td>que j'<strong>aie</strong>, que nous <strong>ayons</strong></td>
      </tr>
      <tr>
        <td>aller</td>
        <td>que j'<strong>aille</strong>, que nous <strong>allions</strong></td>
      </tr>
      <tr>
        <td>faire</td>
        <td>que je <strong>fasse</strong></td>
      </tr>
      <tr>
        <td>pouvoir</td>
        <td>que je <strong>puisse</strong></td>
      </tr>
      <tr>
        <td>savoir</td>
        <td>que je <strong>sache</strong></td>
      </tr>
    </table>
  `
},

// ========================================
// 0.5.3 - LE MODE CONDITIONNEL
// ========================================
"0.5.3": {
  title: "0.5.3 - Le mode conditionnel",
  theory: `
    <h3>LE MODE CONDITIONNEL</h3>
    
    <p><strong>Définition simple :</strong> Le conditionnel est le mode de l'hypothèse et de l'imaginaire. Il présente les faits comme hypothétiques, possibles sous condition.</p>
    
    <p><strong>Analogie :</strong> Le conditionnel, c'est comme rêver ou imaginer : "Si j'avais de l'argent, j'ACHÈTERAIS une maison" (c'est imaginaire, hypothétique). On se projette dans une situation qui n'est pas réelle.</p>
    
    <h4>Caractéristiques du conditionnel</h4>
    <ul>
      <li><strong>Fonction :</strong> Exprimer une hypothèse, une politesse, un souhait</li>
      <li><strong>Temps :</strong> 2 temps (présent et passé)</li>
      <li><strong>Formation :</strong> Base du futur + terminaisons de l'imparfait</li>
    </ul>
    
    <h4>Les 2 temps du conditionnel</h4>
    <table>
      <tr>
        <th>Temps</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Conditionnel présent</strong></td>
        <td>je mangerais</td>
      </tr>
      <tr>
        <td><strong>Conditionnel passé</strong></td>
        <td>j'aurais mangé</td>
      </tr>
    </table>
    
    <h4>Formation du conditionnel présent</h4>
    <p><strong>Infinitif (ou base du futur) + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient)</strong></p>
    <ul>
      <li>manger → je manger<strong>ais</strong></li>
      <li>finir → je finir<strong>ais</strong></li>
      <li>être → je ser<strong>ais</strong> (base du futur : ser-)</li>
      <li>avoir → j'aur<strong>ais</strong> (base du futur : aur-)</li>
    </ul>
    
    <h4>Les 4 valeurs du conditionnel</h4>
    
    <h5>1. Hypothèse (avec "si")</h5>
    <p>Exprime une action qui dépend d'une condition :</p>
    <ul>
      <li><strong>Si</strong> j'avais de l'argent, j'<strong>achèterais</strong> une maison.</li>
      <li><strong>Si</strong> tu venais, je <strong>serais</strong> content.</li>
      <li><strong>Si</strong> elle étudiait, elle <strong>réussirait</strong>.</li>
    </ul>
    
    <p><strong>Structure :</strong> Si + imparfait, conditionnel présent</p>
    
    <h5>2. Futur dans le passé</h5>
    <p>Dans un récit au passé, pour exprimer un futur par rapport à ce moment :</p>
    <ul>
      <li>Il a dit qu'il <strong>viendrait</strong>. (= il viendra, vu du passé)</li>
      <li>Je pensais qu'il <strong>pleuvrait</strong>.</li>
      <li>Elle savait qu'elle <strong>réussirait</strong>.</li>
    </ul>
    
    <h5>3. Atténuation / Politesse</h5>
    <p>Pour adoucir une demande ou un souhait :</p>
    <ul>
      <li>Je <strong>voudrais</strong> un café. (plus poli que "je veux")</li>
      <li><strong>Pourriez</strong>-vous m'aider ? (plus poli que "pouvez-vous")</li>
      <li>J'<strong>aimerais</strong> partir. (plus doux que "je veux")</li>
    </ul>
    
    <h5>4. Information non confirmée (journalisme)</h5>
    <p>Pour rapporter une information incertaine :</p>
    <ul>
      <li>Le ministre <strong>démissionnerait</strong> demain. (rumeur)</li>
      <li>L'accident <strong>aurait fait</strong> trois victimes. (non confirmé)</li>
      <li>Le président <strong>serait</strong> malade. (à confirmer)</li>
    </ul>
    
    <h4>Les phrases avec "si" (hypothèses)</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>Structure</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Hypothèse réalisable</strong></td>
        <td>Si + présent, futur</td>
        <td><strong>Si</strong> tu viens, je <strong>serai</strong> content.</td>
      </tr>
      <tr>
        <td><strong>Hypothèse irréelle (présent)</strong></td>
        <td>Si + imparfait, conditionnel présent</td>
        <td><strong>Si</strong> j'avais de l'argent, j'<strong>achèterais</strong> une maison.</td>
      </tr>
      <tr>
        <td><strong>Hypothèse irréelle (passé)</strong></td>
        <td>Si + plus-que-parfait, conditionnel passé</td>
        <td><strong>Si</strong> j'avais su, je <strong>serais venu</strong>.</td>
      </tr>
    </table>
    
    <h4>⚠️ Erreur fréquente à éviter</h4>
    <p><strong>JAMAIS de conditionnel après "si" d'hypothèse !</strong></p>
    <ul>
      <li>✗ *Si tu viendrais, je serais content.</li>
      <li>✓ Si tu venais, je serais content.</li>
    </ul>
    
    <h4>Conditionnel présent vs passé</h4>
    <table>
      <tr>
        <th>Conditionnel présent</th>
        <th>Conditionnel passé</th>
      </tr>
      <tr>
        <td>j'achèterais (action future hypothétique)</td>
        <td>j'aurais acheté (action passée hypothétique)</td>
      </tr>
      <tr>
        <td>Si j'avais de l'argent, j'achèterais.</td>
        <td>Si j'avais eu de l'argent, j'aurais acheté.</td>
      </tr>
    </table>
    
    <h4>Exemples selon les valeurs</h4>
    <ul>
      <li><strong>Hypothèse :</strong> Si tu venais, nous irions au cinéma.</li>
      <li><strong>Futur du passé :</strong> Il a promis qu'il m'aiderait.</li>
      <li><strong>Politesse :</strong> Voudriez-vous fermer la porte ?</li>
      <li><strong>Information non confirmée :</strong> Le suspect serait déjà en fuite.</li>
    </ul>
  `
},
// ========================================
// 0.5.4 - LE MODE IMPÉRATIF
// ========================================
"0.5.4": {
  title: "0.5.4 - Le mode impératif",
  theory: `
    <h3>LE MODE IMPÉRATIF</h3>
    
    <p><strong>Définition simple :</strong> L'impératif est le mode de l'ordre, du conseil et de l'instruction. Le sujet n'est pas exprimé.</p>
    
    <p><strong>Analogie :</strong> L'impératif, c'est comme donner des directives : "Mange !", "Partons !", "Finissez vos devoirs !" On dit directement ce qu'il faut faire, sans sujet exprimé.</p>
    
    <h4>Caractéristiques de l'impératif</h4>
    <ul>
      <li><strong>Fonction :</strong> Donner un ordre, un conseil, une instruction</li>
      <li><strong>Sujet :</strong> Non exprimé</li>
      <li><strong>Personnes :</strong> Seulement 3 (tu, nous, vous)</li>
      <li><strong>Temps :</strong> 2 temps (présent et passé)</li>
    </ul>
    
    <h4>Les 3 personnes de l'impératif</h4>
    <table>
      <tr>
        <th>Personne</th>
        <th>Exemple (manger)</th>
        <th>Remarque</th>
      </tr>
      <tr>
        <td><strong>2e sg (tu)</strong></td>
        <td>Mange !</td>
        <td>Pas de "s" pour les verbes en -er</td>
      </tr>
      <tr>
        <td><strong>1re pl (nous)</strong></td>
        <td>Mangeons !</td>
        <td>Invitation, suggestion</td>
      </tr>
      <tr>
        <td><strong>2e pl (vous)</strong></td>
        <td>Mangez !</td>
        <td>Ordre/conseil à plusieurs ou politesse</td>
      </tr>
    </table>
    
    <h4>Formation de l'impératif présent</h4>
    <p>On prend les formes du <strong>présent de l'indicatif</strong> sans le pronom sujet :</p>
    <ul>
      <li>Tu manges → <strong>Mange</strong> ! (sans "s" final)</li>
      <li>Nous mangeons → <strong>Mangeons</strong> !</li>
      <li>Vous mangez → <strong>Mangez</strong> !</li>
    </ul>
    
    <h4>⚠️ Pas de "s" à la 2e personne singulier</h4>
    <p>Pour les verbes en <strong>-ER</strong> et quelques autres (ouvrir, cueillir, aller) :</p>
    <table>
      <tr>
        <th>Indicatif présent</th>
        <th>Impératif</th>
      </tr>
      <tr>
        <td>Tu manges</td>
        <td>Mange ! (pas *Manges)</td>
      </tr>
      <tr>
        <td>Tu vas</td>
        <td>Va ! (pas *Vas)</td>
      </tr>
      <tr>
        <td>Tu parles</td>
        <td>Parle ! (pas *Parles)</td>
      </tr>
    </table>
    
    <p><strong>Exception :</strong> On garde le "s" devant "en" et "y" pour la liaison :</p>
    <ul>
      <li>Manges-<strong>en</strong> ! Vas-<strong>y</strong> !</li>
    </ul>
    
    <h4>Verbes irréguliers à l'impératif</h4>
    <table>
      <tr>
        <th>Verbe</th>
        <th>2e sg</th>
        <th>1re pl</th>
        <th>2e pl</th>
      </tr>
      <tr>
        <td><strong>être</strong></td>
        <td>Sois</td>
        <td>Soyons</td>
        <td>Soyez</td>
      </tr>
      <tr>
        <td><strong>avoir</strong></td>
        <td>Aie</td>
        <td>Ayons</td>
        <td>Ayez</td>
      </tr>
      <tr>
        <td><strong>savoir</strong></td>
        <td>Sache</td>
        <td>Sachons</td>
        <td>Sachez</td>
      </tr>
      <tr>
        <td><strong>vouloir</strong></td>
        <td>Veuille</td>
        <td>Veuillons</td>
        <td>Veuillez</td>
      </tr>
    </table>
    
    <h4>Forme négative de l'impératif</h4>
    <p>On utilise <strong>ne...pas</strong> (ou ne...plus, ne...jamais) :</p>
    <ul>
      <li>Ne mange <strong>pas</strong> !</li>
      <li>Ne partons <strong>plus</strong> !</li>
      <li>N'oubliez <strong>jamais</strong> !</li>
    </ul>
    
    <h4>Place des pronoms compléments</h4>
    <table>
      <tr>
        <th>Impératif positif</th>
        <th>Impératif négatif</th>
      </tr>
      <tr>
        <td>Pronom APRÈS le verbe</td>
        <td>Pronom AVANT le verbe</td>
      </tr>
      <tr>
        <td>Mange-<strong>la</strong> !</td>
        <td>Ne <strong>la</strong> mange pas !</td>
      </tr>
      <tr>
        <td>Donne-<strong>le-moi</strong> !</td>
        <td>Ne <strong>me le</strong> donne pas !</td>
      </tr>
      <tr>
        <td>Vas-<strong>y</strong> !</td>
        <td>N'<strong>y</strong> va pas !</td>
      </tr>
    </table>
    
    <p><strong>⚠️ Attention :</strong> "me" et "te" deviennent "moi" et "toi" à l'impératif positif :</p>
    <ul>
      <li>Donne-<strong>moi</strong> le livre ! (pas *Donne-me)</li>
      <li>Écoute-<strong>toi</strong> ! (pas *Écoute-te)</li>
    </ul>
    
    <h4>Exemples selon l'usage</h4>
    <ul>
      <li><strong>Ordre :</strong> Tais-toi ! Sors d'ici !</li>
      <li><strong>Conseil :</strong> Repose-toi bien. Prends ton temps.</li>
      <li><strong>Instruction :</strong> Tournez à droite. Ajoutez le sel.</li>
      <li><strong>Invitation :</strong> Allons au cinéma ! Partons ensemble !</li>
    </ul>
  `
},

// ========================================
// 0.5.5 - L'INFINITIF ET LE PARTICIPE
// ========================================
"0.5.5": {
  title: "0.5.5 - L'infinitif et le participe",
  theory: `
    <h3>L'INFINITIF ET LE PARTICIPE</h3>
    
    <p><strong>Définition simple :</strong> L'infinitif et le participe sont des modes impersonnels : ils ne se conjuguent pas selon la personne (je, tu, il...).</p>
    
    <h4>A. L'INFINITIF</h4>
    
    <p><strong>Définition :</strong> L'infinitif est la forme nominale du verbe. C'est la forme qu'on trouve dans le dictionnaire.</p>
    
    <p><strong>Analogie :</strong> L'infinitif, c'est le verbe "à l'état brut", non conjugué : manger, partir, être, avoir. C'est le nom du verbe !</p>
    
    <h4>Les 2 temps de l'infinitif</h4>
    <table>
      <tr>
        <th>Temps</th>
        <th>Formation</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td><strong>Infinitif présent</strong></td>
        <td>Forme de base</td>
        <td>manger, finir, être</td>
      </tr>
      <tr>
        <td><strong>Infinitif passé</strong></td>
        <td>Auxiliaire + participe passé</td>
        <td>avoir mangé, être parti</td>
      </tr>
    </table>
    
    <h4>Les 3 groupes de verbes (selon l'infinitif)</h4>
    <table>
      <tr>
        <th>Groupe</th>
        <th>Terminaison</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>1er groupe</strong></td>
        <td>-ER</td>
        <td>manger, parler, chanter</td>
      </tr>
      <tr>
        <td><strong>2e groupe</strong></td>
        <td>-IR (avec -issons)</td>
        <td>finir (nous finissons), choisir</td>
      </tr>
      <tr>
        <td><strong>3e groupe</strong></td>
        <td>Tous les autres</td>
        <td>partir, voir, faire, prendre, être, avoir</td>
      </tr>
    </table>
    
    <h4>Usages de l'infinitif</h4>
    <ul>
      <li><strong>Sujet :</strong> <strong>Manger</strong> est nécessaire.</li>
      <li><strong>Complément :</strong> J'aime <strong>lire</strong>.</li>
      <li><strong>Ordre/Instruction :</strong> <strong>Ne pas fumer</strong>. <strong>Ajouter</strong> le sel.</li>
      <li><strong>Après préposition :</strong> Avant de <strong>partir</strong>. Pour <strong>réussir</strong>.</li>
      <li><strong>Après verbe modal :</strong> Je peux <strong>venir</strong>. Tu dois <strong>partir</strong>.</li>
    </ul>
    
    <h4>B. LE PARTICIPE</h4>
    
    <p><strong>Définition :</strong> Le participe est la forme adjectivale du verbe. Il peut fonctionner comme un adjectif.</p>
    
    <h4>Les 2 participes</h4>
    
    <h5>1. Participe présent</h5>
    <p><strong>Formation :</strong> Base de la 1re personne pluriel + <strong>-ant</strong></p>
    <table>
      <tr>
        <th>Verbe</th>
        <th>Base (nous...)</th>
        <th>Participe présent</th>
      </tr>
      <tr>
        <td>manger</td>
        <td>mange<strong>ons</strong></td>
        <td>mange<strong>ant</strong></td>
      </tr>
      <tr>
        <td>finir</td>
        <td>finiss<strong>ons</strong></td>
        <td>finiss<strong>ant</strong></td>
      </tr>
      <tr>
        <td>partir</td>
        <td>part<strong>ons</strong></td>
        <td>part<strong>ant</strong></td>
      </tr>
    </table>
    
    <p><strong>Usage :</strong> Exprime une action en cours</p>
    <ul>
      <li>Je l'ai vu <strong>mangeant</strong> une pomme.</li>
      <li><strong>Partant</strong> de ce principe, je conclus que...</li>
    </ul>
    
    <p><strong>⚠️ Invariable :</strong> Le participe présent ne s'accorde jamais.</p>
    
    <h5>2. Participe passé</h5>
    <p><strong>Formation :</strong> Selon le groupe</p>
    <table>
      <tr>
        <th>Groupe</th>
        <th>Terminaison</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td><strong>1er groupe</strong></td>
        <td>-é</td>
        <td>mangé, parlé, chanté</td>
      </tr>
      <tr>
        <td><strong>2e groupe</strong></td>
        <td>-i</td>
        <td>fini, choisi</td>
      </tr>
      <tr>
        <td><strong>3e groupe</strong></td>
        <td>Variable</td>
        <td>parti, vu, fait, pris, été, eu</td>
      </tr>
    </table>
    
    <p><strong>Usages :</strong></p>
    <ul>
      <li><strong>Temps composés :</strong> J'ai <strong>mangé</strong>. Elle est <strong>partie</strong>.</li>
      <li><strong>Adjectif (épithète) :</strong> Un livre <strong>lu</strong>. Une histoire <strong>racontée</strong>.</li>
      <li><strong>Passif :</strong> La pomme est <strong>mangée</strong> par Marie.</li>
    </ul>
    
    <h4>Accord du participe passé</h4>
    <p>Voir le Module 0.6 pour les règles d'accord détaillées.</p>
    
    <h4>⚠️ Ne pas confondre : Participe présent vs Adjectif verbal</h4>
    <table>
      <tr>
        <th>Participe présent</th>
        <th>Adjectif verbal</th>
      </tr>
      <tr>
        <td>Invariable</td>
        <td>Variable (s'accorde)</td>
      </tr>
      <tr>
        <td>Des filles <strong>mangeant</strong></td>
        <td>Des histoires <strong>intéressantes</strong></td>
      </tr>
      <tr>
        <td>Exprime une action</td>
        <td>Exprime une qualité</td>
      </tr>
    </table>
  `
},

// ========================================
// 0.5.6 - LES TEMPS DE L'INDICATIF (1/2)
// ========================================
"0.5.6": {
  title: "0.5.6 - Les temps de l'indicatif (1/2)",
  theory: `
    <h3>LES TEMPS DE L'INDICATIF (Partie 1)</h3>
    
    <p>L'indicatif possède 8 temps. Voici les 4 premiers temps (temps simples).</p>
    
    <h4>1. LE PRÉSENT</h4>
    
    <p><strong>Valeurs du présent :</strong></p>
    <ul>
      <li><strong>Action actuelle :</strong> Je mange en ce moment.</li>
      <li><strong>Vérité générale :</strong> La Terre tourne autour du Soleil.</li>
      <li><strong>Habitude :</strong> Je me lève à 7h chaque jour.</li>
      <li><strong>Présent de narration :</strong> En 1789, le peuple prend la Bastille.</li>
      <li><strong>Futur proche :</strong> Je pars demain.</li>
    </ul>
    
    <p><strong>Formation :</strong> Radical + terminaisons selon le groupe</p>
    <table>
      <tr>
        <th>Groupe</th>
        <th>Terminaisons</th>
        <th>Exemple (je, tu, il, nous, vous, ils)</th>
      </tr>
      <tr>
        <td><strong>1er (-ER)</strong></td>
        <td>-e, -es, -e, -ons, -ez, -ent</td>
        <td>mange, manges, mange, mangeons, mangez, mangent</td>
      </tr>
      <tr>
        <td><strong>2e (-IR)</strong></td>
        <td>-is, -is, -it, -issons, -issez, -issent</td>
        <td>finis, finis, finit, finissons, finissez, finissent</td>
      </tr>
      <tr>
        <td><strong>3e</strong></td>
        <td>Variable</td>
        <td>pars, pars, part, partons, partez, partent</td>
      </tr>
    </table>
    
    <h4>2. L'IMPARFAIT</h4>
    
    <p><strong>Valeurs de l'imparfait :</strong></p>
    <ul>
      <li><strong>Action passée en cours :</strong> Je mangeais quand tu es arrivé.</li>
      <li><strong>Description au passé :</strong> Il faisait beau. La maison était grande.</li>
      <li><strong>Habitude au passé :</strong> Quand j'étais jeune, je jouais souvent dehors.</li>
      <li><strong>Action répétée :</strong> Tous les jours, il partait à 8h.</li>
    </ul>
    
    <p><strong>Formation :</strong> Base de la 1re personne pluriel du présent + terminaisons</p>
    <p><strong>Terminaisons (pour tous les verbes) :</strong> -ais, -ais, -ait, -ions, -iez, -aient</p>
    
    <table>
      <tr>
        <th>Verbe</th>
        <th>Base (nous...)</th>
        <th>Imparfait (je...)</th>
      </tr>
      <tr>
        <td>manger</td>
        <td>mange<strong>ons</strong></td>
        <td>je mange<strong>ais</strong></td>
      </tr>
      <tr>
        <td>finir</td>
        <td>finiss<strong>ons</strong></td>
        <td>je finiss<strong>ais</strong></td>
      </tr>
      <tr>
        <td>être</td>
        <td>sommes (exception)</td>
        <td>j'ét<strong>ais</strong></td>
      </tr>
    </table>
    
    <h4>3. LE PASSÉ SIMPLE</h4>
    
    <p><strong>Valeurs du passé simple :</strong></p>
    <ul>
      <li><strong>Action passée ponctuelle (écrit soutenu/littéraire)</strong></li>
      <li>Il remplace le passé composé à l'écrit littéraire</li>
    </ul>
    
    <p><strong>Formation :</strong> Radical + terminaisons selon le groupe</p>
    <table>
      <tr>
        <th>Groupe</th>
        <th>Terminaisons</th>
        <th>Exemple (je, il, ils)</th>
      </tr>
      <tr>
        <td><strong>1er (-ER)</strong></td>
        <td>-ai, -as, -a, -âmes, -âtes, -èrent</td>
        <td>mangeai, mangea, mangèrent</td>
      </tr>
      <tr>
        <td><strong>2e (-IR)</strong></td>
        <td>-is, -is, -it, -îmes, -îtes, -irent</td>
        <td>finis, finit, finirent</td>
      </tr>
      <tr>
        <td><strong>3e (type 1)</strong></td>
        <td>-is, -is, -it, -îmes, -îtes, -irent</td>
        <td>partis, partit, partirent</td>
      </tr>
      <tr>
        <td><strong>3e (type 2)</strong></td>
        <td>-us, -us, -ut, -ûmes, -ûtes, -urent</td>
        <td>voulus, voulut, voulurent</td>
      </tr>
    </table>
    
    <p><strong>Usage :</strong> Rare à l'oral (remplacé par le passé composé), utilisé dans les récits littéraires.</p>
    <ul>
      <li>Il <strong>arriva</strong> le lendemain. (littéraire)</li>
      <li>Il <strong>est arrivé</strong> le lendemain. (oral/courant)</li>
    </ul>
    
    <h4>4. LE FUTUR SIMPLE</h4>
    
    <p><strong>Valeurs du futur simple :</strong></p>
    <ul>
      <li><strong>Action future :</strong> Je partirai demain.</li>
      <li><strong>Ordre atténué :</strong> Tu feras tes devoirs !</li>
      <li><strong>Vérité générale future :</strong> Un jour, l'homme ira sur Mars.</li>
    </ul>
    
    <p><strong>Formation :</strong> Infinitif (ou base du futur) + terminaisons</p>
    <p><strong>Terminaisons (pour tous les verbes) :</strong> -ai, -as, -a, -ons, -ez, -ont</p>
    
    <table>
      <tr>
        <th>Verbe</th>
        <th>Base</th>
        <th>Futur (je...)</th>
      </tr>
      <tr>
        <td>manger</td>
        <td>manger-</td>
        <td>je manger<strong>ai</strong></td>
      </tr>
      <tr>
        <td>finir</td>
        <td>finir-</td>
        <td>je finir<strong>ai</strong></td>
      </tr>
      <tr>
        <td>être</td>
        <td>ser- (irrégulier)</td>
        <td>je ser<strong>ai</strong></td>
      </tr>
      <tr>
        <td>avoir</td>
        <td>aur- (irrégulier)</td>
        <td>j'aur<strong>ai</strong></td>
      </tr>
      <tr>
        <td>aller</td>
        <td>ir- (irrégulier)</td>
        <td>j'ir<strong>ai</strong></td>
      </tr>
    </table>
    
    <h4>Comparaison Passé composé vs Passé simple</h4>
    <table>
      <tr>
        <th>Contexte</th>
        <th>Passé composé</th>
        <th>Passé simple</th>
      </tr>
      <tr>
        <td>Oral/Courant</td>
        <td>✓ J'ai mangé</td>
        <td>✗</td>
      </tr>
      <tr>
        <td>Écrit littéraire</td>
        <td>Rare</td>
        <td>✓ Je mangeai</td>
      </tr>
    </table>
    
    <h4>Comparaison Imparfait vs Passé composé</h4>
    <table>
      <tr>
        <th>Imparfait</th>
        <th>Passé composé</th>
      </tr>
      <tr>
        <td>Action en cours, durable</td>
        <td>Action ponctuelle, accomplie</td>
      </tr>
      <tr>
        <td>Je <strong>mangeais</strong> quand tu es arrivé.</td>
        <td>J'<strong>ai mangé</strong> à midi.</td>
      </tr>
      <tr>
        <td>Description, habitude</td>
        <td>Action unique, terminée</td>
      </tr>
    </table>
  `
},
// ==========================================
// FONCTION D'EXPORT
// ==========================================
};
export function getSubmoduleContent(submoduleId) {
  return content[submoduleId] || null;
}

export default content;