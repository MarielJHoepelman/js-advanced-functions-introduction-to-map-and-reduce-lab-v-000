// Your code here
//using map
const mapToNegativize = collection => collection.map(x => x * -1);
// ES6 notation
// if {} must include return
// no {} = implicit return

function mapToNegativize(collection){
    
}

const mapToNoChange = collection => collection.map(x => x);

const mapToDouble = collection => collection.map(x => x * 2);

const mapToSquare = collection => collection.map(x => x * x);

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
