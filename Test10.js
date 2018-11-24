const example0 = {
  label: 'abcd',
  content: 'HI',
  created: new Date()
};
const example1 = {
  label: 'afwe',
  created: new Date(2018, 1, 12)
};

const serializer = function(object1) {
  return JSON.stringify(object1);
};
const deserializer = function(object1) {
  return JSON.parse(object1);
};

console.log(
  serializer(deserializer(serializer(example0))) === serializer(example0)
);
console.log(
  serializer(deserializer(serializer(example1))) === serializer(example1)
);
