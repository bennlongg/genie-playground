# genie-playground

[English](README.md) | 한국어

TypeScript로 구현된 유틸리티 함수 및 알고리즘 모음입니다.

## 설명

이 저장소는 다음과 같은 다양한 유틸리티 함수를 포함하고 있습니다:
- 피보나치 수열 계산기
- 이진 검색 구현
- 다양한 정렬 알고리즘(버블 정렬, 삽입 정렬, 퀵 정렬, 병합 정렬, 선택 정렬)
- 랜덤 정렬 선택기

## 설치

저장소를 복제하고 의존성을 설치하세요:

```bash
git clone https://github.com/yourusername/genie-playground.git
cd genie-playground
npm install
```

## 사용법

TypeScript 코드에서 필요한 함수를 가져와 사용하세요:

```typescript
import { fibonacci, binarySearch, bubbleSort, randomSort } from './src/functions';

// 10번째 피보나치 수 계산
const fibResult = fibonacci(10); // 55 반환

// 정렬된 배열에서 값 검색
const index = binarySearch([1, 2, 3, 4, 5], 3); // 2 반환

// 버블 정렬로 배열 정렬
const sortedArray = bubbleSort([5, 3, 8, 1, 2]); // [1, 2, 3, 5, 8] 반환

// 무작위로 선택된 알고리즘으로 배열 정렬
const randomlySorted = randomSort([5, 3, 8, 1, 2]); // [1, 2, 3, 5, 8] 반환
```

## 테스트

모든 것이 올바르게 작동하는지 확인하려면 테스트를 실행하세요:

```bash
npm test
```

## 기여하기

이 프로젝트에 기여하는 방법에 대한 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

## 재미있는 사실

프로그래머들이 다크 모드를 선호하는 이유는 무엇일까요?

빛이 버그를 끌어들이기 때문입니다! 🐛

함수가 추웠던 이유는 무엇일까요?

누군가 함수를 스코프 밖에 두었기 때문입니다! ❄️

프로그래머가 책상에 커피포트를 필요로 하는 이유는 무엇일까요?

자바스크립트 작업에 도움이 되기 때문입니다! ☕
