const removeFromArray = function(...args) {
//     const index = myArray.indexOf(x)
//     if (index > -1){
//         myArray.splice(index, 1)
//     }
//     return myArray
// }
const array = args[0];
const newArray = [];
array.forEach((item) => {
	if (!args.includes(item)){
		newArray.push(item);
	}
});
return newArray;
}
module.exports = removeFromArray
