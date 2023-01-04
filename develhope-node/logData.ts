const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.info(surprisingFact);
console.warn(surprisingFact);

const familyTree = [
  {
    name: 'Person 1',
    children: [
      {
        name: 'Person 2',
        children: [
          {
            name: 'Person 3',
            children: [
              {
                name: 'Person 4',
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log(JSON.stringify(familyTree, undefined, 4));
console.log('%o', familyTree);

let count = 0;

function importantTask() {
  console.log(++count);
  if (count === 4) {
    count = 0;
  }
}

importantTask();
importantTask();
importantTask();
importantTask();
importantTask();
importantTask();
