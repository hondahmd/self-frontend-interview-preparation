const alienOrder = (words) => {
  const graph = {};

  words.forEach(word => {
    Array().forEach.call(word, char => {
      if (!graph[char]) {
        graph[char] = [];
      }
    });
  });

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      Array().forEach.call(words[i], (char, index) => {
        if (char !== words[j][index] && words[j][index]) {
          graph[char].push(words[j][index]);
        }
      })
    }
  }

  console.log(graph)
};

const words = ["wrt","wrf","er","ett","rftt"];
console.log(alienOrder(words))
