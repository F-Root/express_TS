/* any & unknown: 아무 타입 vs 모르는 타입 */

let slimeOne: any = 1;
slimeOne = 'string';
slimeOne = true;
slimeOne = null;
slimeOne = undefined;
slimeOne = [1,2,3];
slimeOne = () => {};
slimeOne = { key: "something"};
slimeOne.key;

let slimeTwo: unknown = 1;
slimeTwo = 'string';
slimeTwo = true;
slimeTwo = null;
slimeTwo = undefined;
slimeTwo = [1,2,3];
slimeTwo = () => {};
slimeTwo = { key: "something"};
// slimeTwo.key; // unknown type은 자신이 어떤 type인지 모르기 때문에 이런식으로 property 호출이 불가하다.
(<{key: string}>slimeTwo).key; // unknown type은 강제로 type을 명시해야 한다.


export {};