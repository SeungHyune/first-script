// let 선언 후 재할당이 가능, 재선언은 불가

let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30

// var 선언 후 재할당이 가능, 재선언도 가능 (호이스팅 됨(선언부분만 호이스팅))
var age1 = 30;
console.log(age1); // 30

var age1 = 35;
console.log(age1); // 35

// const 선언 시 할당해야함, 재선언 재할당 불가(읽기 전용)
const name = 'kim';
console.log(name);


// 대입 연산자
let a = 1;

// 산술 연산자
let b = 2;
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// 연결 연산자
let aa = '1';
let bb = '2';
console.log(aa + bb); // '12'

// 복합연산자
a += 10;
console.log(a); // 11

// 증감연산자
let a2 = 10;
console.log(a2++); // 10; (후위 연산) 다음줄에 증가, 감소함
console.log(a2); // 11;

console.log(--a2); // 10; (전위 연산) 즉시 실행
console.log(a2); // 10;

// 논리연산자
// ! (true => false, flase => true로 변경)
console.log(!false); // true;
console.log(!true); // false;

// && (and) 모두 true여야 true / 하나라도 false이면 false
console.log(true && true); // true;
console.log(true && true && false); // false;

// || (또는) 하나라도 true이면 true / 모두 false이면 false
console.log(false || false || true); // true;
console.log(false || false); // false;

// 비교연사자
// ==, ===, >, >=, <, <=

// typeof
console.log(typeof 'str');

// null 병합 연산자 (??)
let 한글;
한글 = 한글 ?? 10;
console.log(한글); // 10

// 함수 선언식, 함수 선언 방식의 함수 생성
function getArea(width, height){
  return width * height;
}

// 대입연산자를 통해 area 변수에 함수 호출 값을 return 받음
const area = getArea(10, 2);
console.log(area);

// 함수 선언식 (호이스팅 O)
function helloA(){
  return 'Hello A';
}

// 함수 표현식 (호이스팅 X)
let helloB = function () {
  return 'Hello B';
}

// 화살표 함수 (호이스팅 X)
let helloC = () => 'Hello C';

console.log(helloA());
console.log(helloB());
console.log(helloC());

// 콜백 함수
function checkMood(mood, goodCallback, badCallback){
  if(mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry(){
  console.log('ACTION : CRY');
}
function sing(){
  console.log('ACTION : SING');
}
function dance(){
  console.log('ACTION : DANCE');
}


checkMood('sad', sing, cry);


// 객체
let obj1 = new Object(); // 생성자 방식
let obj2 = {}; // 객체 리터럴 방식

let person = {
  name: '조승현', // 객체 프로퍼티
  age: 28, // 멤버
  sayHello(){
    console.log(`저는 ${this.name} 입니다.`);
  } // 메서드 -> 방법
}

let human = {
  name: 'Jin',
  age: 27
}

console.log(person);
console.log(person.name); // 조승현
console.log(person['name']); // 조승현
console.log(person.age); // 28
console.log(person['age']); // 28

console.log(findHuman("name")); // JIN
console.log(findHuman("age")); // 27
console.log(findHuman("tex")); // undefined

function findHuman(key){
  return human[key];
}

human.location = '한국';
human["gender"] = '남자';
human["say"] = function(){
  console.log(this.name);
}
human.name = '조승현';
human["age"] = 28;

delete human.name; // 값만 삭제, 메모리 삭제 X
delete human["age"];
human.name = null;
human.age = null;
console.log(human);

console.log("name" in human); // true
console.log("money" in human); // false

person.sayHello();

let arr = ['a','b','c','d','e'];
let obj = {
  name : 'kim',
  age : 28,
  gender : 'male'
}

for(const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

let objKeys = Object.keys(obj);
let objValues = Object.values(obj);

for(let i=0;i<objKeys.length;i++){
  console.log(obj[objKeys[i]])
}

// 배열의 내장 함수

const array = [1, 2, 3, 4];
// 1. forEach
let newArr = [];
array.forEach(n => {
  newArr.push(n * 2);
});
console.log(newArr);

// 2. map
let mapArr = array.map(n => {
  return n * 5
});
console.log(mapArr);

// 3. includes
let number = 3;
console.log(array.includes(number));

// 4. indexOf - 찾는 요소가 없으면 -1 반환
console.log(array.indexOf(number));

// 5. findIndex - 찾는 요소가 없으면 -1 반환
const color = [
  { idx: 1, color: "red" },
  { idx: 2, color: "black" },
  { idx: 3, color: "blue" },
  { idx: 4, color: "pink" },
]

let index = color.findIndex(c => c.color === "green");
console.log(index);

// 6. find - 찾는 요소가 없으면 undefined
let element = color.find(c => c.color === "pink");
console.log(element)

// 7. slice
let slice = color.slice(1);
console.log(...slice);

// 8. concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2));

// 9. sort
let str = ['가', '다', '나'];
str.sort((a,b) => {
  if(a > b) return -1;
  else if (a < b) return 1;
});
console.log(str);

let num = [1,2,5,10,100,8,22];
num.sort((a,b) => a - b);
console.log(num);

// Truthy & falsy
const getName = (person) => {
  if(!person) {
    return "객체가 아닙니다.";
  }
  return person.gender;
}

let person2 = "";
const gender = getName(person2);
console.log(gender);

// 삼항 연산자
let f1 = [];
let f1Result = f1.length ? '배열 값O' : '배열 값X';
console.log(f1Result);

// 삼항 연산자 중첩은 가독성이 떨어져 사용 지양
let score = 49;
let scoreResult = score >= 90 ? console.log('A+') : score >= 50 ? console.log('B+') : console.log('F');

if(score >= 90) console.log('A+')
else if(score >= 50) console.log('B+')
else console.log('F');

// 단락회로 평가
const getName3 = (person) => {
  let res = person && person.name;
  return res || '객체가 아닙니다';
}

const person3 = undefined;
const result3 = getName3(person3);
console.log(result3);

function isKoreaFood(food){
  // if(food === '불고기' || food === '김치찌개' || food === '비빔밥') {
  if(['불고기', '김치찌개', '비빔밥'].includes(food)){
    return '한식';
  }
  return '한식이 아닙니다.'
}

console.log(isKoreaFood('불고기'));

let isKoreanFood = (food) => {
  if(food === "불고기" || food === "비빔밥" || food === "김치") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");

console.log(food1); // true;
console.log(food2); // false;

let isKoreanFood2 = (food) => {
  if(["불고기", "비빔밥", "김치"].includes(food)) {
    return true;
  }
  return false;
}

const food3 = isKoreanFood2("불고기");
const food4 = isKoreanFood2();

console.log(food3); // true;
console.log(food4); // false; 

const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "중식") return "마라탕";
  if (mealType === "일식") return "초밥";
  if (mealType === "양식") return "파스타";
  return "다른 나라 요리";
}

const meal1 = getMeal("한식");
const meal2 = getMeal("일식");

console.log(meal1); // 불고기;
console.log(meal2); // 초밥;

const meal = {
  한식: "불고기",
  중식: "마라탕",
  일식: "초밥",
  양식: "파스타",
  인도식: "카레"
};

const getMeal2 = (mealType) => {
  return meal[mealType] || "다른 나라 요리";
};

console.log(getMeal2("한식")); // 불고기;
console.log(getMeal2()); // 다른 나라 요리;

// 배열 비구조화 할당
// const arr = ['one', 'two', 'three'];
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// default 값 설정 가능 , 순서에 따른 비구조화 할당이 적용 된다.
// const [one, two, three, four = 'four'] = ['one', 'two', 'three'];
// console.log(one, two, three, four);


// 값 swap
let a1 = 10;
let b1 = 20;
[a1, b1] = [b1, a1];
console.log('a1', a1, 'b1', b1);

// 객체 비구조화 할당
// 배열과 마찬가지로 default 값 설정 가능
// key 값에 따른 비구조화 할당이 적용 된다. (object의 key값과 동일해야 함)
// key 값도 변경 가능하다.

let {one1, two1, three1} = { one1: 'one', two1: 'two', three1: 'three' }
console.log(one1, two1, three1);

// Spread 연산자
const cookie = {
  base: "cookie",
  madeIn: "korea"
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip"
}

const blueberryCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "bluebreey"
}

const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
}

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

const food5 = ["치킨", "피자", "햄버거"];
const food6 = ["김치찌개", "부대찌개", "된장찌개"];

// food1 + food2 합치는 방법 (concat 메서드와 Spread 사용가능)
console.log(food5.concat(food6));
const allFoods = [...food5,"비빔밥", ...food6]; // 중간에 값 추가하기 유연함
console.log(allFoods);

// Promise
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// const result = taskA(3,4);
// const taskAResult = result.then(a_res => {
//   console.log(a_res);
//   return taskB(a_res);
// });

// console.log(taskAResult); 
// taskAResult.then(b_res => {
//   console.log(b_res);
//   return taskC(b_res);
// }).then(c_res => {
//   console.log(c_res);
// }); 

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT : ", res);
// });
// taskB(7, (res) => {
//   console.log("B TASK RESULT : ", res);
// });
// taskC(14, (res) => {
//   console.log("C TASK RESULT : ", res);
// });

// taskA(3, 4, (res) => {
//   console.log(`A TASK RESULT : ${res}`);
//   taskB(res, (res) => {
//     console.log(`B TASK RESULT : ${res}`);
//     taskC(res, (res) => {
//       console.log(`C TASK RESULT : ${res}`);
//     })
//   })
// });
// console.log("코드 끝");

// function isPositive(number){
//   const executor = (resolve, reject) => {
//       setTimeout(() => {
//       if(typeof number === "number") {
//         // 성공 -> resolve
//         resolve(number >= 0 ? "양수" : "음수");
//       } else {
//         // 실패 -> reject
//         reject("숫자가 아닙니다");
//       }
//     }, 2000);
//   };

//   const asyncTask = new Promise(executor);
//   return asyncTask
// }

// const result = isPositive([]);
// result.then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// await

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();

// API & fetch
async function getDate() {
  let getRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonRes = await getRes.json();
  return jsonRes;
}

getDate().then(res => {
  console.log(res);
});