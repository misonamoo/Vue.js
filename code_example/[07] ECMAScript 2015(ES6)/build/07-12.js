'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
  자바스크립트의 배열도 List 형태의 컬렉션이기는 하지만 집합(set) 이나 맵(map) 형식의 데이터로 사용하기에는 불편함이 있다.
  ES6(ES2015)에서는 Set, Map, WeakSet, WeakMap과 같은 집합, 맵을 제공하여 이런 불편함을 해소할 수 있다.
  
  Set은 중복을 허용하지 않으며 합집합(Union), 교집합(Inersect) 과 같은 다양한 집합 연산을 제공한다.
*/

var s1 = new Set();
s1.add('사과');
s1.add('배');
s1.add('사과');
s1.add('포도');

// 실행 결과: Set { '사과 , '배', '포도' }
console.log(s1);

var john = new Set(['사과', '포도', '배']);
var susan = new Set(['파인애플', '키위', '배']);

// 합집합: Set { '사과', '포도', '배', '파인애플', '키위' }
var union = new Set([].concat(_toConsumableArray(john.values()), _toConsumableArray(susan.values())));
console.log(union);

// 교집합: Set { '배' }
var intersection = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return susan.has(e);
}));
console.log(intersection);

// 차집합: Set { '사과', '포도' }
var diff = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return !susan.has(e);
}));
console.log(diff);

/*
  여러 개의 요소를 가진 집합을 초기화 할때는 Set 생성자 함수에 배열값을 인자로 전달하면 된다.
*/