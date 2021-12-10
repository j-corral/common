import { Grep, RemoveFirstChar } from './grep';

it('Should find hashtags in text', () => {
  const content = "Hello World, I'm : #Freelance Happy #Developer and Awesome #Developer";
  const pattern = new RegExp(/#\w+/g);
  const result = Grep({ content, pattern, unique: false });
  const expectedResult = ['#Freelance', '#Developer', '#Developer'];
  expect(result).toStrictEqual(expectedResult);
});

it('Should find UNIQUE hashtags in text', () => {
  const content = "Hello World, I'm : #Freelance Happy #Developer and Awesome #Developer";
  const pattern = new RegExp(/#\w+/g);
  const result = Grep({ content, pattern, unique: true });
  const expectedResult = ['#Freelance', '#Developer'];
  expect(result).toStrictEqual(expectedResult);
});

it('Should find UNIQUE hashtags in text then remove #', () => {
  const content = "Hello World, I'm : #Freelance Happy #Developer and Awesome #Developer";
  const pattern = new RegExp(/#\w+/g);
  const result = Grep({ content, pattern, unique: true }).map(RemoveFirstChar);
  const expectedResult = ['Freelance', 'Developer'];
  expect(result).toStrictEqual(expectedResult);
});
