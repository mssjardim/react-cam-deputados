export const getDeputados = async (url) => {
  const data = await fetch(
    url || 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome',
    {
      headers: {
        accept: 'application/json',
      },
    },
  ).then(results => results.json());
  return data;
};
