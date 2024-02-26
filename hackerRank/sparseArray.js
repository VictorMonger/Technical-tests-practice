const matchingStrings = (strings, queries) => {
  const counts = [];

    for (let i = 0; i < queries.length; i++) {
      counts[i] = 0;
  
      for (let j = 0; j < strings.length; j++) {
        if (queries[i] === strings[j]) {
          counts[i] = counts[i] + 1
        }
      }
    }
    console.log(counts)
  };

const strings = ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"];
const queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

matchingStrings(strings, queries);
