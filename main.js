// 타이핑 효과 랜딩 페이지 만들기 / 실습 / 웹 코딩

let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = ["Learn to CAP", "Learn to Hat", "Learn to Beanie", "Learn to Earflap", "Learn to Domestic Vendor"];
  // 이렇게 배열 함수에서 랜덤하게 셀렉트 할 것임
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // 자바스크립트에 있는 Math라는 객체 중에 random 이라는 메소드 사용.
  // 배열의 크기에 맞게끔하려면 이 랜덤의 length를 곱해준다. stringArr.length (5 미만인 것이다.)
  // 크기가 5기 때문에 5가 곱해져있는 것과 같기 때문에 이 코드로 나오는 랜덤한 소수점 붙은 숫자는 절대 5를 넘기지 않는다.
  // 다만, 소수점 형태로 나오기 때문에 배열에 index 에는 소수점이 사용될 수 없어서 소수점을 버리게끔 하는 Math객체 floor를 활용해서 소수점을 버린다.
  // Math.floor로 한번 더 묶어주니 5를 넘지 않는 랜덤한 숫자가 (1~4) 나온다.

  let selectStringArr = selectString.split("");
  // 해당 문자열을 이 기준 (split) 을 이용해서 배열로 분리시켜라.
  // 우리는 이 배열값을 이용해서 한글자씩 출력하는 효과를 낼 것이다.

  return selectStringArr;
}

// 타이핑 리셋
// 얘가 3초 뒤에 호출이 되었다면 target을 비어있게끔 처리 할거다.
function resetTyping() {
  target.textContent = "";
  // 사라지게 한 다음에 다시 한 번 이 함수를 실행시킨다.
  // 그 원리를 구현하기 위해서 조금 더 함수를 하나 더 만들어본다. function randomString
  dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  // randomArr 이라는 매개변수를 하나 받는다.
  // console.log(randomArr);

  if (randomArr.length > 0) { // 만약에 length가 0보다 크면
    target.textContent += randomArr.shift(); //target.textContent 복합연산자로 randomArr 라는 shift 메소드로 이 배열에 앞에값 부터 바깥으로 빼내서 출력하게 하는 것이다.
    // Learn to Beanie (14) ['e', 'a', 'r', 'n', ' ', 't', 'o', ' ', 'B', 'e', 'a', 'n', 'i', 'e']
    // 코드를 저장하고 실행을 해보면 Learn to CAP L 이런 식으로 앞에 'L'이 빠져서 나오는 이유는 target 이라는게 dynamic 이라는 id 값을 가지고 있는 문서객체니까
    // 문서 객체에 textContent로 이 randomArr이 가지고 있는 첫번째 배열을 shift에서 뺀 것이다. 
    // L만 화면에 출력된 상태에서 재기함수의 원리를 이용해서 만약에 randomArr이 0보다 크면 dynamic을 다시 호출하는 것이다.
    setTimeout(function () {
      dynamic(randomArr); //randomArr이 0보다 클 때까지 계속 반복적으로 호출된다.
    }, 80); // 0.08초의 간격으로 dynamic을 다시 호출할 것이다.
  } else { // 위 코드까지는 당겨져 있는 문자를 하나씩 다 shift 해가지고 여기에 다 출력시켰다. 여기에 남아있는게 하나도 없다 라고 한다면, 더이상 출력되는 문자열이 없다라고 볼 수 있는거죠.
    // 여기서 더이상 출력될게 없으면 이렇게 하면 된다.
    setTimeout(resetTyping, 3000); // resetTyping 이라는 함수를 3초 뒤에 호출하게 한다.

  }
}

// 그리고 dynamic을 호출할 때 이 랜덤배열을 매개변수로 전달하겠다.
// 그러면 결국에는 selectStringArr 배열화 되어져있는 값이 매개변수로 전달된다는 의미가 되는거죠.
// dynamic(selectStringArr);
// 최초에 dynamic 이라는걸 호출할 때 여기에 사용되었던 random 함수를 아래처럼 바로 호출해서 호출된 값으로 전달하도록 한다.
dynamic(randomString());


console.log(selectString); // "Learn to Earflap" 랜덤한게 하나 선택되는데 이렇게 선택된 문장을 다시 배열로 만들 것이다. (selectStringArr)
console.log(selectStringArr); // (24) ['L', 'e', 'a', 'r', 'n', ' ', 't', 'o', ' ', 'D', 'o', 'm', 'e', 's', 't', 'i', 'c', ' ', 'V', 'e', 'n', 'd', 'o', 'r']


// 커서 깜빡임 효과
function blink() {
  // blink: 커서가 깜빡거릴 수 있도록 처리
  target.classList.toggle("active");
  // 토글 매서드로 active라는 클래스가 추가 되었다가 삭제되었다가 하는 것을 반복하도록!
}
// setInterval : 반복함수 500 : 0.5초마다 실행해라.
setInterval(blink, 500);