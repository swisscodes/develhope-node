import luckyDraw from './promise';

async function getResults() {
  try {
    let res = await luckyDraw('Tina');
    console.log(res);
    res = await luckyDraw('Jorge');
    console.log(res);
    res = await luckyDraw('Julien');
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
getResults();
