// 검색
// str.match(regexp)

// 위치검색
// str.search(regexp)

// 치환
// str.replace(regexp, replacement)

// 일치여부
// regexp.test(str)

// 휴대폰
const regex = /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/gm
const str = `010-898-0893`;
console.log(str.match(regex));
        
// 이메일
const regex2 = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/gm
const str2 = `tmdgus7820@naver.com
tmd.gus.7820@gmail.com`;
console.log(str2.match(regex2));


// 숫자 5자리 체크 (우편번호)
const regexp_post = /^\d{5}$/;
console.log(regexp_post.test("12345")); // true;
console.log(regexp_post.test("543212")); // false;
console.log(regexp_post.test("1234")); // false;

// 전화번호 체크
const regexp_telephone = /^(031|02)-(\d{3}|\d{4})-\d{4}$/;
console.log(regexp_telephone.test());