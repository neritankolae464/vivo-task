/*
filename: data_analysis.js

This code performs complex data analysis on a given dataset.

Assumptions:
- The dataset is an array of objects, where each object represents a data point.
- Each object has properties 'name', 'age', 'gender', and 'score'.
- The 'score' property is a numerical value indicating performance.

Approach:
1. Filter out data points where the age is less than 18.
2. Group the remaining data points based on gender.
3. For each gender group, calculate the average score.
4. Sort the gender groups based on their average score in descending order.
5. Print the sorted gender groups along with their average scores.

*/

const dataset = [
  { name: 'John', age: 25, gender: 'male', score: 80 },
  { name: 'Jane', age: 16, gender: 'female', score: 95 },
  { name: 'Sam', age: 30, gender: 'male', score: 70 },
  { name: 'Emily', age: 20, gender: 'female', score: 85 },
  // ...more data points
];

function filterByAge(data) {
  return data.filter((item) => item.age >= 18);
}

function groupByGender(data) {
  const groups = {};
  
  data.forEach((item) => {
    if (!(item.gender in groups)) {
      groups[item.gender] = [];
    }
    groups[item.gender].push(item);
  });
  
  return groups;
}

function calculateAverageScore(data) {
  const avgScores = {};
  
  for (const gender in data) {
    const scores = data[gender].map((item) => item.score);
    const avgScore = scores.reduce((total, score) => total + score, 0) / scores.length;
    avgScores[gender] = avgScore.toFixed(2);
  }
  
  return avgScores;
}

function sortByAverageScore(data) {
  const sortedGroups = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const sortedData = {};
  
  sortedGroups.forEach((group) => {
    sortedData[group[0]] = group[1];
  });
  
  return sortedData;
}

function printResults(data) {
  console.log('Results:');
  
  for (const gender in data) {
    console.log(`${gender} - Average Score: ${data[gender]}`);
  }
}

// Perform data analysis
const filteredData = filterByAge(dataset);
const groupedData = groupByGender(filteredData);
const avgScores = calculateAverageScore(groupedData);
const sortedData = sortByAverageScore(avgScores);

// Print the results
printResults(sortedData);

This code performs a complex data analysis on a given dataset. It filters out data points based on age, groups them by gender, calculates the average score for each group, sorts the groups based on the average score, and finally prints the sorted groups along with their average scores. The code assumes a dataset structure and includes helper functions for each step of the analysis. The output is printed to the console.