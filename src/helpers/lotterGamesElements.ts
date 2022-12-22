import {
  megaSena,
  lotofacil,
  lotomania,
  dia_sorte,
  quina,
  timemania,
  quina_mobile,
  lotomania_mobile,
  timemania_mobile,
  dia_sorte_mobile,
  lotofacil_mobile,
  mega_sena_mobile,
} from "./lotterGamesImgs";

interface looterGamesInstance {
  [key: string]: {
    imgWeb: string;
    imgMobile: string;
    titulo: string;
    numbers: string[];
  };
}

export const looterObjectGames: looterGamesInstance = {
  mega_sena: {
    imgWeb: megaSena,
    imgMobile: mega_sena_mobile,
    titulo: "MEGA-SENA",
    numbers: ["23", "44", "56", "34", "58", "60", "70"],
  },
  lotofacil: {
    imgWeb: lotofacil,
    imgMobile: lotofacil_mobile,
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
    imgWeb: timemania,
    imgMobile: timemania_mobile,
    titulo: "TIMEMANÍA",
    numbers: ["05", "20", "12", "29", "30", "55", "67"],
  },
  lotomania: {
    imgWeb: lotomania,
    imgMobile: lotomania_mobile,
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
    imgWeb: dia_sorte,
    imgMobile: dia_sorte_mobile,
    titulo: "DIA DE SORTE",
    numbers: ["10", "20", "30", "40", "50"],
  },
  quina: {
    imgWeb: quina,
    imgMobile: quina_mobile,
    titulo: "QUINA",
    numbers: ["10", "20", "30", "40", "50", "80", "90"],
  },
};
