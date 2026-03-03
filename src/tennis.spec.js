import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  it("jugador 1 gana el game", () => {
  const tennis = new Tennis();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  expect(tennis.score()).toEqual("Game for Player 1");
  });

  it("jugador 2 anota una vez y queda Love - 15", () => {
  const tennis = new Tennis();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("Love - 15");
  });

  it("15 - 15 cuando ambos anotan una vez", () => {
  const tennis = new Tennis();
  tennis.player1Scores();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("15 - 15");
  });

  it("30 - 30 cuando ambos anotan dos veces", () => {
    const tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("30 - 30");
  });

  it("3 - 3 debe mostrar Deuce", () => {
    const tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    expect(tennis.score()).toEqual("Deuce");
  });

  it("desde Deuce jugador 1 anota y muestra Advantage for Player 1", () => {
    const tennis = new Tennis();

    // llegar a Deuce
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    // jugador 1 anota
    tennis.player1Scores();

    expect(tennis.score()).toEqual("Advantage for Player 1");
  });

  it("desde Advantage jugador 1 anota otra vez y gana el game", () => {
  const tennis = new Tennis();

  // llegar a Deuce
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage
  tennis.player1Scores();

  // Gana el game
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Game for Player 1");
  });


it("desde Advantage jugador 2 anota otra vez y gana el game", () => {
  const tennis = new Tennis();

  // llegar a Deuce
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage Player 2
  tennis.player2Scores();

  // Game Player 2
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Game for Player 2");
});





});



