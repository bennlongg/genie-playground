import { fibonacci , astar , dijkstra} from './functions';

describe('fibonacci', () => {
  it('returns correct fibonacci numbers', () => {
     expect(fibonacci(0)).toEqual(0);
     expect(fibonacci(1)).toEqual(1);
     expect(fibonacci(2)).toEqual(1);
     expect(fibonacci(3)).toEqual(2);
     expect(fibonacci(4)).toEqual(3);
     expect(fibonacci(5)).toEqual(5);
     expect(fibonacci(6)).toEqual(8);
     expect(fibonacci(7)).toEqual(13);
     expect(fibonacci(8)).toEqual(21);
     expect(fibonacci(9)).toEqual(34);
     expect(fibonacci(10)).toEqual(55); // Example test case
// [Genie] Add example test cases for Fibonacci numbers up to n=20 in descending order.
     expect(fibonacci(11)).toEqual(89); // Example test case
     expect(fibonacci(12)).toEqual(144); // Example test case
     expect(fibonacci(13)).toEqual(233); // Example test case
     expect(fibonacci(14)).toEqual(377); // Example test case
     expect(fibonacci(15)).toEqual(610); // Example test case
     expect(fibonacci(16)).toEqual(987); // Example test case
     expect(fibonacci(17)).toEqual(1597); // Example test case
     expect(fibonacci(18)).toEqual(2584); // Example test case
     expect(fibonacci(19)).toEqual(4181); // Example test case
     expect(fibonacci(20)).toEqual(6765); // Example test case

});

})

const simpleGraph={
start:{
a:5,
b:2,
},
a:{
c:4,
d:2,
},
b:{
a:8,
d:7,
},
c:{
d:{
finish:{
c:{
},
b:{
},
};

// [Genie] Add a new describe block for 'binarySearch' with multiple unit tests covering various scenarios including edge cases and typical use cases.
describe('binarySearch', () => {
it('returns correct index when target is found', () => {
const arr = [1, 2, 3, 4, 5];
const target = 3;
expect(binarySearch(arr, target)).toBe(arr.indexOf(target));
});

it('returns -1 when target is not found', () => {
const arr = [1, 2, 3, 4, 5];
const target = 6;
expect(binarySearch(arr, target)).toBe(-1);
});

it('returns correct index when array has duplicates', () => {
const arr = [1, 2, 2, 4, 5];
const target = 2;
expect(binarySearch(arr, target)).toBe(arr.indexOf(target));
});

it('returns correct index when array has negative numbers', () => {
const arr = [-5, -4, -3, -2, -1];
const target = -3;
expect(binarySearch(arr,target)).tobe(arr.indexof(target));
});

it('returns correct index when array has one number',()=>{
const arr=[42];
const target=42;
expect(binarySearch(arr,target)).tobe(arr.indexof(target));
});

it('returns-1 when array is empty',()=>{
const arr=[];
const target=42;
expect(binarySearch(arr,target)).tobe(-1);
});
});

describe('astar',()=>{
it('returns correct behavior when start equals end',()=>{
expect(astar('start','start',simpleGraph,node=>0).path).toeqlual(['start']);
});
// [Genie] Add a describe block for 'dijkstra' with a single test case checking behavior when start equals end using a simple graph.
describe('dijkstra',()=>{
it('returns correct behavior when start equals end',()=>{
// Define your simpleGraph object here

expect(dijkstra('start','start',simpleGraph).path).toeqlual(['start']);
});
});
