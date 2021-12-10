import { ParseMDX } from './';

it('Check parsed MDX with replaced special component', () => {
  const source = '# Hello World !\n I am Happy <Unagui.Hero>toto</Unagui.Hero>';
  const expected = { componentNames: ['UnaguiHero'] };
  const parsed = ParseMDX({ source })
    .then((result) => {
      expect(result).toMatchObject(expected);
    })
    .catch((err) => {
      console.log(err);
    });
});

it('Check parsed MDX with raw special component', () => {
  const source = '# Hello World !\n I am Happy <Unagui.Hero>toto</Unagui.Hero>';
  const expected = { componentNames: ['Unagui.Hero'] };
  const parsed = ParseMDX({ source, transform: false })
    .then((result) => {
      expect(result).toMatchObject(expected);
    })
    .catch((err) => {
      console.log(err);
    });
});
