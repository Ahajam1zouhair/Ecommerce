import iPhone13 from "./ImageElectronique/apple-iphone-13.png";
import Samsung from "./ImageElectronique/samsung.jpg";
import Sony from "./ImageElectronique/Sony WH.jpg";
import SteelSeries from "./ImageElectronique/SteelSeries .jpg";
import JBL from "./ImageElectronique/JBL Flip 5.jpg";
import Dell from "./ImageElectronique/Dell XPS 13jpg.jpg";
import PlayStation from "./ImageElectronique/PlayStation 5.jpg";
import Garmin from "./ImageElectronique/Garmin Forerunner 945.jpg";
import Iphone14 from "./ImageElectronique/iphone-14.webp";
// image Vitemont
import Chemise from "./ImageVetements/chemises.webp";
import Robe from "./ImageVetements/Robe webp.webp";
import Tshirt from "./ImageVetements/t-shirt-coton.jpg";
import Blouse from "./ImageVetements/Blouse.jpg";
import Jean from "./ImageVetements/Jean slim stretch.webp";
import Short from "./ImageVetements/Short .jpg";
import Pantalon from "./ImageVetements/Pantalon de costume classique.webp";
import Chemisier from "./ImageVetements/Chemisier en soie .jpg";
import Jupe from "./ImageVetements/Jupe plissée midi.jpg";
// // image COUSINS
import Mixeur from "./ImageCousin/Mixeur.png";
import Cafetière from "./ImageCousin/Cafetière.jpg";
import Ensemble from "./ImageCousin/Mixeur.png";
import Four from "./ImageCousin/Four.jpg";
import Batteur from "./ImageCousin/Batteur.jpg";
import Machine from "./ImageCousin/Machine.webp";
import Blender from "./ImageCousin/Blender.jpg";
import Moulin from "./ImageCousin/Moulin.webp";
import Machine2 from "./ImageCousin/Machine2.webp";

const DatePrudits = [
  {
    useID: 5,
    ID: 40,
    Marque: "Apple",
    Réduction: "30",
    Description:
      "The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.69 inches diagonally (actual viewable area is less)",
    Prix: 200,
    src: Iphone14,
    promtion: true,
  },
  {
    useID: 1,
    ID: 0,
    Nouveau: true,
    Marque: "Apple",
    Modèle: "Modèle  :  iPhone 13 Pro",
    promtion: true,
    Réduction: "15",
    Description:
      "Capturez des moments spéciaux avec l'iPhone 13 Pro. Ce smartphone de pointe vous permet de capturer des photos et des vidéos exceptionnelles. Profitez de ses fonctionnalités avancées pour rester connecté.",
    Prix: 999,
    Name: "Apple iPhone 13 Pro",
    src: iPhone13,
  },
  {
    useID: 1,
    ID: 1,
    Nouveau: true,
    Marque: "Samsung",
    Modèle: "Modèle  :  Samsung QLED 4K Smart TV",
    Description:
      "Vivez une expérience visuelle exceptionnelle avec la Samsung QLED 4K Smart TV. Dotée d'une résolution 4K et de fonctionnalités intelligentes, elle transformera votre divertissement à domicile.",
    Prix: 799,
    Name: "Samsung QLED 4K Smart TV",
    src: Samsung,
  },
  {
    useID: 1,
    ID: 2,
    Marque: "Apple",
    Modèle: "Modèle  :  iPad Air (2020)",
    Réduction: "17",
    Description:
      "L'iPad Air (2020) d'Apple offre une expérience de tablette haut de gamme. Avec son écran de 10,9 pouces et ses performances exceptionnelles, il est idéal pour le travail et les loisirs.",
    Prix: 599,
    Name: "Apple iPad Air (2020)",
    src: iPhone13,
  },
  {
    useID: 1,
    ID: 3,
    HomeEl: true,
    Nouveau: "Non",
    Marque: "Sony",
    Modèle: "Modèle : Sony WH-1000XM4",
    Description:
      "Découvrez une qualité sonore inégalée avec le casque audio sans fil Sony WH-1000XM4. Profitez du confort et de la suppression active du bruit pour une expérience d'écoute exceptionnelle.",
    Prix: 349,
    Name: "Sony WH-1000XM4",
    src: Sony,
  },
  {
    useID: 1,
    ID: 4,
    HomeEl: true,
    Nouveau: "Non",
    Marque: "SteelSeries",
    Modèle: "Modèle : SteelSeries Arctis 7",
    Description:
      "Le casque de jeu SteelSeries Arctis 7 offre un son de haute qualité et un confort exceptionnel. Plongez dans l'univers de vos jeux préférés avec ce casque de jeu performant.",
    Prix: 149,
    Name: "SteelSeries Arctis 7",
    src: SteelSeries,
  },
  {
    useID: 1,
    ID: 5,
    Nouveau: "Non",
    Marque: "JBL",
    Modèle: "Modèle : JBL Flip 5",
    Description:
      "Emportez la fête partout où vous allez avec l'enceinte Bluetooth portable JBL Flip 5. Profitez d'un son puissant et d'une connectivité sans fil pour votre musique.",
    Prix: 89,
    Name: "JBL Flip 5",
    src: JBL,
    promtion: true,
    Réduction: "20",
  },
  {
    useID: 1,
    ID: 6,
    Nouveau: true,
    promtion: true,
    Marque: "Dell",
    Modèle: "Modèle : Dell XPS 13",
    Réduction: "20",
    Description:
      "Le Dell XPS 13 est un ordinateur portable haut de gamme avec un processeur Intel Core i7, 16 Go de RAM et un SSD de 512 Go. Il offre des performances exceptionnelles pour la productivité.",
    Prix: 1199,
    Name: "Dell XPS 13",
    src: Dell,
  },
  {
    useID: 1,
    ID: 7,
    HomeEl: true,
    Marque: "Sony",
    Modèle: "Modèle : PlayStation 5",

    Description:
      "Plongez dans le monde du jeu avec la Sony PlayStation 5. Cette console de jeu offre des graphismes exceptionnels et une expérience de jeu immersive.",
    Prix: 499,
    Name: "Sony PlayStation 5",
    src: PlayStation,
  },
  {
    useID: 1,
    ID: 8,
    Marque: "Garmin",
    Modèle: "Modèle : Garmin Forerunner 945",
    Description:
      "La montre intelligente Garmin Forerunner 945 est parfaite pour les amateurs de fitness. Elle offre un suivi avancé des performances et de nombreuses fonctionnalités pour les athlètes.",
    Prix: 549,
    Name: "Garmin Forerunner 945",
    src: Garmin,
  },
  // LES VITMENES

  {
    useID: 2,
    ID: 9,

    Name: "Chemise en coton à manches",
    Marque: "Tommy Hilfiger",
    Genre: "Genre : Hommes",
    Taille: "Taille : M",
    Couleur: "Couleur : Bleu",
    Prix: 49.99,
    Description:
      "Une chemise en coton élégante avec des manches longues, parfaite pour les occasions formelles.",
    src: Chemise,
  },
  {
    useID: 2,
    ID: 10,
    Name: "Robe de soirée à paillettes",
    Marque: "Calvin Klein",
    Genre: "Genre : Femmes",
    Taille: "Taille : S",
    Couleur: "Couleur : Noir",
    Prix: 129.99,
    Description:
      "Une robe de soirée étincelante avec des paillettes, idéale pour les événements spéciaux.",
    src: Robe,
  },
  {
    useID: 2,
    ID: 11,
    Name: "T-shirt en coton à col rond",
    Marque: "H&M",
    Genre: "Genre : Hommes",
    Taille: "Taille : L",
    Couleur: "Couleur : Blanc",
    Prix: 19.99,
    Description:
      "Un t-shirt en coton confortable avec un col rond, parfait pour un usage quotidien.",
    src: Tshirt,
  },
  {
    useID: 2,
    ID: 12,
    Name: "Blouse imprimée à manches longues",
    Marque: "Zara",
    Genre: "Genre : Femmes",
    Taille: "Taille : M",
    Couleur: "Couleur : Rose",
    Prix: 39.99,
    Description:
      "Une blouse élégante avec un imprimé floral et des manches longues.",
    src: Blouse,
  },
  {
    useID: 2,
    ID: 13,

    Name: "Jean slim stretch",
    Marque: "Levi's",
    Genre: "Genre : Hommes",
    Taille: "Taille : 32/32",
    Couleur: "Couleur : Bleu foncé",
    Prix: 69.99,
    Description:
      "Un jean slim et extensible pour un look moderne et confortable.",
    src: Jean,
  },
  {
    useID: 2,
    ID: 14,
    Name: "Short de bain à motifs",
    Marque: "Speedo",
    Genre: "Genre : Hommes",
    Taille: "Taille : XL",
    Couleur: "Couleur : Bleu marine",
    Prix: 29.99,
    Description:
      "Un short de bain confortable avec des motifs amusants, idéal pour la plage.",
    src: Short,
  },
  {
    useID: 2,
    ID: 15,
    Name: "Chemisier en soie à manches courtes",
    Marque: "Ralph Lauren",
    Genre: "Genre : Femmes",
    Taille: "Taille : L",
    Couleur: "Couleur : Blanc",
    Prix: 89.99,
    Description:
      "Un chemisier élégant en soie avec des manches courtes pour un look sophistiqué.",
    src: Chemisier,
  },
  {
    useID: 2,
    ID: 16,
    Name: "Pantalon de costume classique",
    Marque: "Hugo Boss",
    Genre: "Genre : Hommes",
    Taille: "Taille : 34/34",
    Couleur: "Couleur : Noir",
    Prix: 129.99,
    Description:
      "Un pantalon de costume classique pour des occasions formelles.",
    src: Pantalon,
  },
  {
    useID: 2,
    ID: 17,
    Name: "Jupe plissée midi",
    Marque: "Zara",
    Genre: "Genre : Femmes",
    Taille: "Taille : M",
    Couleur: "Couleur : Bleu marine",
    Prix: 49.99,
    Description:
      "Une jupe plissée midi élégante pour un look tendance et polyvalent.",
    src: Jupe,
  },

  {
    useID: 3,
    src: Mixeur,
    ID: 18,
    Nouveau: true,
    Name: "Mixeur électrique",
    Marque: "KitchenAid",
    Type: "Type : Mixeur à main",
    Puissance: "Puissance : 450 W",
    Prix: 69.99,
    Description:
      "Un mixeur électrique puissant pour mélanger, fouetter et mixer les ingrédients de manière efficace.",
  },
  {
    useID: 3,
    src: Cafetière,
    ID: 19,
    Name: "Cafetière à goutte à goutte",
    Marque: "Breville",
    Capacité: " Capacité : 12 tasses",
    Fonctions: "Fonctions : Programmable, arrêt automatique",
    Prix: 79.99,
    Description:
      "Une cafetière pratique pour préparer jusqu'à 12 tasses de café avec des fonctions programmables.",
  },
  {
    useID: 3,
    ID: 20,
    Réduction: "25",
    Nouveau: true,
    src: Ensemble,
    Name: "Ensemble de casseroles antiadhésives",
    Marque: "T-fal",
    Nombre_de_pièces: "Nombre de pièces :  8",
    Revêtement: "Revêtement : Antiadhésif",
    Prix: 59.99,
    Description:
      "Un ensemble de casseroles antiadhésives de haute qualité pour la cuisine quotidienne.",
  },
  {
    useID: 3,
    ID: 21,
    HomeCUO: true,
    src: Four,
    Name: "Four à micro-ondes",
    Marque: "Panasonic",
    Capacité: "Capacité : 1.2 cu. ft.",
    Puissance: "Puissance : 1200 W",
    Prix: 129.99,
    Description:
      "Un four à micro-ondes spacieux et puissant pour réchauffer et cuire rapidement les aliments.",
  },
  {
    useID: 3,
    ID: 22,
    promtion: true,
    Réduction: "19",
    src: Batteur,
    Name: "Batteur sur socle",
    Marque: "Hamilton Beach",
    Puissance: "Puissance : 300 W",
    Accessoires_nclus: "Accessoires nclus : Fouet, crochet pétrisseur",
    Prix: 89.99,
    Description:
      "Un batteur sur socle polyvalent avec des accessoires pour la pâtisserie et la cuisine.",
  },
  // {
  //   useID: 3,
  //   ID: 23,
  //   promtion: true,
  //   Réduction: "15",
  //   Name: "Batteur sur socle",
  //   Marque: "Wusthof",
  //   Nombre_de_couteaux: "Nombre de couteaux :  6",
  //   Matériau_des_lames: "Matériau des lames : Acier inoxydable",
  //   Prix: 149.99,
  //   Description:
  //     "Un ensemble de couteaux de haute qualité pour la découpe et la préparation des aliments.",
  // },
  {
    useID: 3,
    ID: 24,
    HomeCUO: true,
    src: Machine,
    Name: "Machine à pain automatique",
    Marque: "Cuisinart",
    Capacité: "Capacité : 2 livres",
    Programmes: "Programmes : Pain, pâte, confiture, etc.",
    Prix: 129.99,
    Description:
      "Une machine à pain automatique pour préparer du pain frais et d'autres produits de boulangerie à la maison.",
  },
  {
    useID: 3,
    ID: 25,
    src: Blender,
    Name: "Blender haute performance",
    Marque: "Vitamix",
    Puissance: "Puissance : 1500 W",
    Fonctions: "Fonctions : Mixage à haute vitesse",
    Prix: 299.99,
    Description:
      "Un blender haute performance pour préparer des smoothies, des soupes et des purées en un rien de temps.",
    promtion: true,
    Réduction: "24",
  },
  {
    useID: 3,
    ID: 26,
    Nouveau: true,
    src: Moulin,
    Name: "Moulin à café électrique",
    Marque: "Krups",
    Type_de_mouture: "Type : Réglable",
    Capacité: "Capacité : 12 tasses",
    Prix: 49.99,
    Description:
      "Un moulin à café électrique pour moudre les grains de café frais à la maison.",
  },
  {
    useID: 3,
    ID: 27,
    HomeCUO: true,
    src: Machine2,
    Name: "Machine à glaçons portable",
    Marque: "Igloo",
    Capacité: "Capacité : 26 livres de glace par jour",
    Options_de_taille: "Options de taille : Petit, moyen, grand",
    Prix: 129.99,
    Description:
      "Une machine à glaçons portable pour préparer de la glace rapidement lors des fêtes et des événements.",
  },

  // {
  //   useID: 4,
  //   ID: 28,
  //   Nouveau: false,
  //   Marque: "Real Madrid",
  //   Promotion: false,
  //   Description:
  //     "Maillot du Real Madrid de la saison 2002. Portez fièrement les couleurs du club légendaire.",
  //   Prix: 59.99,
  // },
  // {
  //   useID: 4,
  //   ID: 29,
  //   Nouveau: false,
  //   Marque: "Barcelone",
  //   Promotion: false,
  //   Réduction: "",
  //   Description:
  //     "Maillot du FC Barcelone de la saison 2002. Un design emblématique pour les fans du Barça.",
  //   Prix: 54.99,
  // },
  // {
  //   useID: 4,
  //   ID: 30,
  //   Nouveau: false,
  //   Marque: "Murcie",
  //   Promotion: false,
  //   Réduction: "10%",
  //   Description:
  //     "Maillot du Real Murcie de la saison 2002. Ressentez l'esprit du football espagnol.",
  //   Prix: 49.99,
  // },
  // {
  //   useID: 4,
  //   ID: 31,
  //   Nouveau: false,
  //   Marque: "Bayern Munich",
  //   Promotion: false,
  //   Réduction: "20%",
  //   Description:
  //     "Maillot du Bayern Munich de la saison 2002. Un symbole de puissance et de victoire.",
  //   Prix: 64.99,
  // },
  // {
  //   useID: 32,
  //   ID: 4,
  //   Nouveau: false,
  //   Marque: "France",
  //   Promotion: false,
  //   Réduction: "",
  //   Description:
  //     "Maillot de l'équipe de France de la saison 2002. Représentez la fierté nationale sur le terrain.",
  //   Prix: 49.99,
  // },
  // {
  //   useID: 4,
  //   ID: 33,
  //   Nouveau: false,
  //   Marque: "Brésil",
  //   Promotion: false,
  //   Réduction: "18%",
  //   Description:
  //     "Maillot de l'équipe du Brésil de la saison 2002. Vibrez avec le style de jeu samba.",
  //   Prix: 55.99,
  // },
  // {
  //   useID: 4,
  //   ID: 34,
  //   Nouveau: false,
  //   Marque: "Milan AC",
  //   Promotion: false,
  //   Réduction: "",
  //   Description:
  //     "Maillot du Milan AC de la saison 2002. Une élégance italienne sur le terrain.",
  //   Prix: 57.99,
  // },
  // {
  //   useID: 4,
  //   ID: 35,
  //   Nouveau: false,
  //   Marque: "Liverpool",
  //   Promotion: false,
  //   Réduction: "22%",
  //   Description:
  //     "Maillot de Liverpool de la saison 2002. Marchez sur les traces des Reds légendaires.",
  //   Prix: 62.99,
  // },
  // {
  //   useID: 4,
  //   ID: 36,
  //   Nouveau: false,
  //   Marque: "Chelsea",
  //   Promotion: false,
  //   Réduction: "25%",
  //   Description:
  //     "Maillot de Chelsea de la saison 2002. Un bleu impérial sur le terrain de Stamford Bridge.",
  //   Prix: 58.99,
  // },
  // {
  //   useID: 4,
  //   ID: 37,
  //   Nouveau: false,
  //   Marque: "Argentine",
  //   Promotion: false,
  //   Réduction: "",
  //   Description:
  //     "Maillot de l'équipe d'Argentine de la saison 2002. Représentez la passion du football argentin.",
  //   Prix: 51.99,
  // },
  // AppleiPhone 14 Pro Max
];

export default DatePrudits;
