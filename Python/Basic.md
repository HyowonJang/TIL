### print

- Python의 print 함수의 end 파라미터에는 다음을 사용할 수 있다.

  - `\n` : 다음 줄로 이동(개행)
  - `\r` :해당 줄의 처음으로 이동
  - `\t` : 8칸 공백
  - `\'` : '문자
  - `\"` : "문자
  - `\` : \문자

  ```
  print("A", end='\"')
  print("B", end='\"')
  print("C", end='\"')

  > A"B"C"
  ```

### 리스트 원소로 모든 조합 생성

- python 기본 라이브러리인 `itertools` 사용

  - `permutations` : 순열 (순서 고려 O)

  ```
  items = ['1', '2', '3', '4', '5']

  from itertools import permutations
  list(permutations(items, 2))

  # [('1', '2'), ('1', '3'), ('1', '4'), ('1', '5'), ('2', '1'), ('2', '3'), ('2', '4'),
    ('2', '5'), ('3', '1'), ('3', '2'), ('3', '4'), ('3', '5'), ('4', '1'), ('4', '2'),
    ('4', '3'), ('4', '5'), ('5', '1'), ('5', '2'), ('5', '3'), ('5', '4')]
  ```

  - `combinations` : 조합 (순서 고려 X)

  ```
  from itertools import combinations
  list(combinations(items, 2))

  # [('1', '2'), ('1', '3'), ('1', '4'), ('1', '5'), ('2', '3'), ('2', '4'), ('2', '5'),
   ('3', '4'), ('3', '5'), ('4', '5')]
  ```

  - `product` : 여러개 리스트의 원소들의 조합

  ```
  from itertools import product
  items = [['a', 'b', 'c'],['1', '2', '3'],['!', '@', '#']]
  list(product(*items))
  ```

### Dictionary key, value 기준으로 정렬

- `operator`로 정렬

  - `operator.itemgetter()`에 1을 넣으면 value 가준 정렬, 0을 넣으면 key 기준 정렬

  ```
  import operator
  x = {1:2, 3:4, 4:3, 2:1, 0:0}

  # value 기준 정렬
  sorted_x = sorted(x.items(), key=operator.itemgetter(1))

  # key 기준 정렬
  sorted_x = sorted(x.items(), key=operator.itemgetter(0))
  ```

### Reference

- [파이썬 리스트 모든 조합 구하기](https://ourcstory.tistory.com/414)
- [Dictionary key기준, value기준으로 정렬하기](https://ourcstory.tistory.com/76)
