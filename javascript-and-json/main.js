var books = [
  {
    isbn: '978-1593279509',
    title: 'Eloquent JavaScript',
    author: 'Marjin Haverbeke'
  },
  {
    isbn: '979-8602477429',
    title: 'You Don\'t Know JS Yet: Get Started',
    author: 'Kyle Simpson'
  },
  {
    isbn: '978-0596517748',
    title: 'avaScript: The Good Parts',
    author: 'Douglas Crockford'
  }
];
console.log('books', books);
console.log('typeof books:', typeof books);

var stringify = JSON.stringify(books);
console.log('JSON.stringify:', stringify);

var jsonString = '{"id": 7122002, "name": "Timothy"}';

console.log('jsonString:', jsonString);
console.log('typeof jsonString:', typeof jsonString);

var parse = JSON.parse(jsonString);
console.log('JSON.parse:', parse);
console.log('type of JSON.parse:', typeof parse);
