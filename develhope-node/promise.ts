function luckyDraw(player: string) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw('Joe')
  .then((data) => {
    console.log(data);
    luckyDraw('Caroline').then((data) => {
      console.log(data);
      luckyDraw('Sabrina').then((data) => {
        console.log(data);
      });
    });
  })
  .catch((e) => console.log(e));
