import { screen, fireEvent, render, within } from "@testing-library/react";
import { lotterGamesElements } from "../helpers";
import App from "../page/App";

beforeEach(() => render(<App />));

describe("Testing Application", () => {
  test("Application Default", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    const lotterImgWeb = screen.getByRole("img", {
      name: /mega_sena\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /mega_sena_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.mega_sena.numbers;

    expect(buttonSelectName).toBeInTheDocument();
    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Quina", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.quina.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", { name: /quina\.png/i });

    const lotterImgMobile = screen.getByRole("img", {
      name: /quina_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.quina.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Lotofácil", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.lotofacil.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", {
      name: /lotofacil\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /lotofacil_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.lotofacil.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Lotomanía", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.lotomania.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", {
      name: /lotomania\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /lotomania_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.lotomania.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Timemania", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.timemania.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", {
      name: /timemania\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /timemania_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.timemania.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Dia De Sorte", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.dia_sorte.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", {
      name: /dia_sorte\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /dia_sorte_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.dia_sorte.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });

  test("Select Mega Sena", () => {
    const { looterObjectGames } = lotterGamesElements;

    const buttonSelectName = screen.getByRole("button", {
      name: /setinha\.png/i,
    });

    fireEvent.click(buttonSelectName);

    const container = screen.getByTestId("select-options");

    within(container).getByText(looterObjectGames.mega_sena.titulo);
    within(container).getByText(looterObjectGames.dia_sorte.titulo);
    within(container).getByText(looterObjectGames.quina.titulo);
    within(container).getByText(looterObjectGames.lotomania.titulo);
    within(container).getByText(looterObjectGames.timemania.titulo);
    within(container).getByText(looterObjectGames.lotofacil.titulo);

    fireEvent.click(
      within(container).getByText(looterObjectGames.mega_sena.titulo)
    );

    const lotterImgWeb = screen.getByRole("img", {
      name: /mega_sena\.png/i,
    });

    const lotterImgMobile = screen.getByRole("img", {
      name: /mega_sena_mobile\.png/i,
    });

    const lotterNumber = looterObjectGames.mega_sena.numbers;

    expect(lotterImgWeb).toBeInTheDocument();
    expect(lotterImgMobile).toBeInTheDocument();

    lotterNumber.map((number) =>
      expect(screen.getByText(number)).toBeInTheDocument()
    );
  });
});
