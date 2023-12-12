/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   let ans = [];
//   for (let i = 0; i < transactions.length; i++) {
//     let trans = transactions[i];
//     let found = false;
//     for (let j = 0; j < ans.length; j++) {
//       if (ans[j].category === trans.category) {
//         ans[j].totalSpent += trans.price;
//         found = true;
//         break;
//       }
//     }
//     if (found === false) {
//       let obj = {
//         category: trans.category,
//         totalSpent: trans.price,
//       };
//       ans.push(obj);
//     }
//   }
//   return ans;
// }

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  transactions.forEach((element) => {
    let index = ans.findIndex((obj) => obj.category === element.category);
    if (index != -1) {
      ans[index].totalSpent += element.price;
    } else {
      ans.push({ category: element.category, totalSpent: element.price });
    }
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
