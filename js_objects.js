var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

//1) Print Elizabeth's phone number.
console.log(phonebookDict.Elizabeth);

// 2) Add a entry to the dictionary: Kareem's number is 938-489-1234.
phonebookDict.Kareem = "938-489-1234";
console.log(phonebookDict.Kareem);

// 3) Delete Alice's phone entry.
delete phonebookDict.Kareem;

// 4) Change Bob's phone number to '968-345-2345'.
phonebookDict.Bob = "968-345-2345";
console.log(phonebookDict.Bob);

// 5) Print all the phone entries.
for (var name in phonebookDict) {
  var number = phonebookDict[name];
  console.log(name + ': ' + number);
}
