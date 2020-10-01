// Your code here
//using map
// const mapToNegativize = collection => collection.map(x => x * -1);
// ES6 notation
// if {} must include return
// no {} = implicit return

function mapToNegativize(collection){
  const newCollection = [];
    for (const element of collection) {
      newCollection.push(element * -1)
    }
    return newCollection
}

// const mapToNoChange = collection => collection.map(x => x);
function mapToNoChange(collection){
  const newCollection = [];
    for (const element of collection) {
      newCollection.push(element)
    }
    return newCollection
}

// const mapToDouble = collection => collection.map(x => x * 2);

function mapToDouble(collection){
  const newCollection = [];
    for (const element of collection) {
      newCollection.push(element * 2)
    }
    return newCollection
}

// const mapToSquare = collection => collection.map(x => x * x);

const mapToSquare = collection => {

}
// function mapToSquare(collection){
//   const newCollection = [];
//     for (const element of collection) {
//       newCollection.push(element * element)
//     }
//     return newCollection
// }

const reduceToTotal = (collection, startingPoint = 0) => {
  return collection.reduce((total, value) => {
    return total + value;
  }, startingPoint);
}

const reduceToAllTrue = (collection) => {
  return collection.reduce((condition, element) => {
    return condition && !!element;
  }, true);
}

const reduceToAnyTrue = (collection) => {
  return collection.reduce((condition, element) => {
    return condition || !!element;
  }, false);
}
