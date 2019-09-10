### print

- Python의 print 함수의 end 파라미터에는 다음을 사용할 수 있다.

  - `\n` : 다음 줄로 이동(개행)
  - `\r` : 해당 줄의 처음으로 이동
  - `\t` : 8칸 공백
  - `\'` : '문자
  - `\"` : "문자
  - `\` : \문자

  ```
  print("A", end='\"')
  print("B", end='\"')
  print("C", end='\"')

  # A"B"C"
  ```

### list comprehension

- `[ x에 적용할 연산 for x in list if 출력시 필터링 조건]`

```
# 3의 배수가 아닌, 20까지의 짝수 출력
ls = [ x * 2 for x in range(11) if x % 3 != 0]

# return : [2, 4, 8, 10, 14, 16, 20]

# 두 리스트의 원소들의 모든 조합 생성 (itertools의 product와 같은 결과 출력)
properties = ['yellow', 'cold', 'wide', 'blue']
fruits = ['apple', 'banana', 'mango']

ls = [(p,f) for p in properties for f in fruits]
```

- 연속된 for문

```
# 바깥쪽의 리스트가 list comprehension에서 더 왼쪽에 위치한다
[x + y for x in ls_1 for y in ls_2 ]

for x in ls_1:
    for y in ls_2:
       x + y
```

### zip

- `zip(*iterable)` : 동일한 개수로 이루어진 자료형을 묶어주는 함수

```
for f, b in zip(foo, bar):
    print(f, b)
```

### 리스트 원소로 모든 조합 생성

- python 기본 라이브러리인 `itertools` 사용

  - `permutations` : 한 리스트 내의 요소들로 순열 생성 (순서 고려 O)

  ```
  items = ['1', '2', '3']

  from itertools import permutations
  list(permutations(items, 2))

  # return : [('1', '2'), ('1', '3'), ('2', '1'), ('2', '3'), ('3', '1'), ('3', '2')]
  ```

  - `combinations` : 한 리스트 내의 요소들로 조합 생성 (순서 고려 X)

  ```
  from itertools import combinations
  list(combinations(items, 2))

  # return : [('1', '2'), ('1', '3'), ('2', '3')]
  ```

  - `product` : 여러개 리스트의 원소들의 조합 (순서 고려 X)

  ```
  from itertools import product
  items = [['a', 'b', 'c'],['1', '2', '3'],['!', '@', '#']]
  list(product(*items))

  properties = ['yellow', 'cold', 'wide', 'blue']
  ruits = ['apple', 'banana', 'mango']
  list(product(properties, fruits))

  # return : [('yellow', 'apple'),
              ('yellow', 'banana'),
              ('yellow', 'mango'),
              ('cold', 'apple'),
              ('cold', 'banana'),
              ('cold', 'mango'),
              ('wide', 'apple'),
              ('wide', 'banana'),
              ('wide', 'mango'),
              ('blue', 'apple'),
              ('blue', 'banana'),
              ('blue', 'mango')]
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

### 리스트의 교집합

- 1차원 리스트의 교집합을 구하는 경우

```
list(set(ls_1).intersection(ls_2))
```

- 2차원 리스트의 교집합을 구하는 경우

```
[list(set(ls_1).intersection(i)) for i in ls_2]
```

### for문의 반복 요소와 변수

```
for idx, i in enumerate(ls_one):
    for word in list(dict_words.keys()):
        if word in i:
            # for문의 i와 새로 값을 할당한 i는 다름
            # 자동으로 리스트의 값이 변경되지 않음
            i = i.replace(word, dict_words[word])
            # 리스트의 새로운 요소로 삽입해야 함
            ls_one[idx] = i
```

### 리스트에서 찾고자 하는 값의 모든 index 추출하기

- 리스트 안에 해당 값이 1개만 있는 경우

```
# 찾고자 하는 값 : 1
ls = [1,6,8,9,1,2,3]
ls.index(1)
# return : 0 -> 찾고자 하는 값이 있는 첫번째 index만 반환한다
```

- 리스트 안에 해당 값이 여러개 있는 경우

```
# 찾고자 하는 값 : 1
ls = [1,6,8,9,1,2,3]
value = 1
[idx for idx, x in enumerate(ls) if x == value]
# return : [0, 4] -> 찾고자 하는 값이 있는 모든 index를 반환한다
```

### Reference

- [파이썬 리스트 모든 조합 구하기](https://ourcstory.tistory.com/414)
- [Dictionary key기준, value기준으로 정렬하기](https://ourcstory.tistory.com/76)
- [파이썬의 Comprehension 소개](https://mingrammer.com/introduce-comprehension-of-python/)
