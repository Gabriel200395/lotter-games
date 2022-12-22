import IMG from "./lotterGamesImgs";

interface looterGamesInstance {
  [key: string]: {
    imgWeb: string;
    imgMobile: string;
    titulo: string;
    numbers: string[];
  };
}

const looterObjectGames: looterGamesInstance = {
  mega_sena: {
    imgWeb: IMG.megaSena,
    imgMobile: IMG.mega_sena_mobile,
    titulo: "MEGA-SENA",
    numbers: ["23", "44", "56", "34", "58", "60", "70"],
  },
  lotofacil: {
    imgWeb: IMG.lotofacil,
    imgMobile: IMG.lotofacil_mobile,
    titulo: "LOTOFÁCIL",
    numbers: [
      "50",
      "21",
      "32",
      "19",
      "13",
      "11",
      "12",
      "44",
      "34",
      "78",
      "80",
      "81",
      "90",
      "96",
      "92",
    ],
  },
  timemania: {
    imgWeb: IMG.timemania,
    imgMobile: IMG.timemania_mobile,
    titulo: "TIMEMANÍA",
    numbers: ["05", "20", "12", "29", "30", "55", "67"],
  },
  lotomania: {
    imgWeb: IMG.lotomania,
    imgMobile: IMG.lotomania_mobile,
    titulo: "LOTOMANIA",
    numbers: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "50",
      "21",
      "32",
      "19",
      "13",
      "11",
      "12",
      "44",
      "34",
      "78",
      "80",
      "81",
      "90",
      "96",
    ],
  },
  dia_sorte: {
    imgWeb: IMG.dia_sorte,
    imgMobile: IMG.dia_sorte_mobile,
    titulo: "DIA DE SORTE",
    numbers: ["10", "20", "30", "40", "50"],
  },
  quina: {
    imgWeb: IMG.quina,
    imgMobile: IMG.quina_mobile,
    titulo: "QUINA",
    numbers: ["10", "20", "30", "40", "50", "80", "90"],
  },
};

export default {
  looterObjectGames,
};
