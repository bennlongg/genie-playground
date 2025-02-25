# JavaScript/TypeScript 유틸리티 함수

이 저장소는 TypeScript로 구현된 유틸리티 함수 모음입니다.

## 설치

```bash
npm install
```

## 사용법

```typescript
import { fibonacci, binarySearch } from './src/functions';

// 함수 사용하기
const fibResult = fibonacci(10);
const searchResult = binarySearch([1, 2, 3, 4, 5], 3);
```

## 사용 가능한 함수

### 피보나치 함수

피보나치 수열의 n번째 숫자를 반환합니다.

**매개변수:**
- `n` (number): 피보나치 수열의 위치 (음수가 아니어야 함)

**반환값:**
- n 위치의 피보나치 숫자

**예시:**

```typescript
fibonacci(0); // 0 반환
fibonacci(1); // 1 반환
fibonacci(2); // 1 반환
fibonacci(10); // 55 반환
```

**오류 처리:**
- n이 음수일 경우 오류 발생

### 이진 검색 함수

이진 검색 알고리즘을 사용하여 정렬된 배열에서 대상 값을 검색합니다.

**매개변수:**
- `array` (number[]): 정렬된 숫자 배열
- `target` (number): 검색할 값

**반환값:**
- 대상을 찾은 경우 해당 인덱스, 배열에 없는 경우 -1 반환

**예시:**

```typescript
binarySearch([1, 3, 5, 7, 9], 5); // 2 반환
binarySearch([1, 3, 5, 7, 9], 6); // -1 반환
binarySearch([], 5); // -1 반환
```

**시간 복잡도:**
- O(log n) (n은 배열의 길이)

### 버블 정렬 함수

버블 정렬 알고리즘을 사용하여 숫자 배열을 오름차순으로 정렬합니다.

**매개변수:**
- `array` (number[]): 정렬할 숫자 배열

**반환값:**
- 오름차순으로 정렬된 새 배열

**예시:**

```typescript
bubbleSort([5, 3, 8, 1, 2]); // [1, 2, 3, 5, 8] 반환
bubbleSort([]); // [] 반환
```

**시간 복잡도:**
- O(n²) (n은 배열의 길이)

### 커리된 수학 함수

두 숫자에 대해 산술 연산을 수행하는 커리된 함수를 생성합니다.

**매개변수:**
- `operation` (string): 수행할 산술 연산: "add", "subtract", "multiply", 또는 "divide"

**반환값:**
- 두 숫자를 받아 지정된 연산을 수행하는 함수

**예시:**

```typescript
const add = curriedMath("add");
add(2, 3); // 5 반환

const multiply = curriedMath("multiply");
multiply(4, 5); // 20 반환
```

**오류 처리:**
- 지원되지 않는 연산이 제공된 경우 오류 발생
- 0으로 나누기를 시도할 경우 오류 발생

## 테스트

다음 명령으로 테스트를 실행하세요:

```bash
npm test
```

## 오늘의 농담

프로그래머들이 다크 모드를 선호하는 이유는 무엇일까요?

빛이 버그를 끌어들이기 때문입니다!

프로그래머들이 자연을 좋아하지 않는 이유는 무엇일까요?

자연에는 버그가 너무 많고 디버깅 도구가 없기 때문입니다!
