var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		newArr = [];
		for (number of arr){
			result = number * number;
			newArr.push(result);
		}
		return newArr;
	},

	sum: function (arr) {
		total = 0;
		arr.forEach(function(number){
			total += number;
		})
		return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		for (var i=0; i < arr.length - 1; i++){
			if (arr[i-1] === arr[i] && arr[i] !== arr[i-2]){
				newArray.push(arr[i]);
			}
		}
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for (var i=0; i<arr.length; i++){
			if(arr[i] !== valueToRemove){
				newArray.push(arr[i]);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		var result = arr.indexOf(itemToFind);
		while(result !==-1){
			newArray.push(result);
			result = arr.indexOf(itemToFind, result +1);
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var newArray = [];
		arr.forEach(function(number){
			if (number % 2 === 0){
				result = number * number;
				newArray.push(result);
			}
		})
		return this.sum(newArray);
	}

}

module.exports = arrayTasks
