const sleep = ms => new Promise(r => setTimeout(r, ms));
const sleepAWhile = async () => {
  await sleep(500);
};

export default sleepAWhile;
