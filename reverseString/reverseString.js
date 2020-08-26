const reverseString = function(txt) {
 let txtSplit = txt.split("")
 let txtReverse = txtSplit.reverse()
 return txtReverse.join("")
}

module.exports = reverseString
