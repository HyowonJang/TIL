### 정렬하기

- 오름차순, 내림차순 정렬하기 : `ORDER BY ... (ASC)`, `ORDER BY ... DESC`

```
# 오름차순
SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID (ASC)

# 내림차순
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC
```

- 여러 컬럼 기준으로 정렬하기 : `ORDER BY ... , ...`

```
# 두 컬럼 모두 역순 정렬
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME DESC, DATETIME DESC

# 한 컬럼만 역순 정렬
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC
```

- 특정 컬럼을 기준으로 정해진 순서대로 정렬하기 : `ORDER BY FIELD(컬럼명, 정렬순서1, 정렬순서2, ...)`

```
SELECT ANIMAL_TYPE, COUNT(ANIMAL_ID)
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
ORDER BY FIELD(ANIMAL_TYPE, 'Cat', 'Dog')
```

- 정렬을 이용하여 상위 n개 혹은 하위 n개의 데이터 선택하기 : `ORDER BY` + `LIMIT`

```
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1
```

### Max, Min, Count, Distinct 구하기

- 최댓값, 최솟값 선택하기 : `MAX`, `MIN`

```
# 최댓값
SELECT MAX(DATETIME)
FROM ANIMAL_INS

# 최솟값
SELECT MIN(DATETIME)
FROM ANIMAL_INS
```

- 갯수 세기, unique 값의 갯수 세기 : `COUNT`, `COUNT(DISTINCT())`

```
# 갯수 세기
SELECT COUNT(ANIMAL_ID)
FROM ANIMAL_INS

# unique 값의 갯수 세기
SELECT COUNT(DISTINCT(NAME))
FROM ANIMAL_INS
```

### 조건 설정하기

- 조건 설정하기 : `WHERE`

```
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION='SICK'
ORDER BY ANIMAL_ID
```

- '같지 않음'의 조건 설정하기 : `!=` 또는 `<>`

```
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged'
ORDER BY ANIMAL_ID
```

### Group by

- Group by 후 그 결과에 대해 추가 조건 설정하기 : `HAVING`

```
# 동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.

SELECT NAME, COUNT(NAME)
FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT(NAME) >= 2
ORDER BY NAME

# WHERE COUNT(NAME) >= 2는 쓸 수 없음
# 여기서의 COUNT(NAME)는 GROUP BY 결과를 COUNT하는 것이 아닌 전체 NAME에 대해 COUNT를 의미
```

- Group by 설정 및 DATETIME에서 시간 추출하기

  1. HOUR 함수 쓰기 : `HOUR`
  2. DATE_FORMAT 및 CAST 함수 쓰기 : `DATE_FORMAT`, `CAST`

  ```
  # 9시부터 19시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

  # HOUR 함수 사용
  SELECT HOUR(DATETIME) AS HOUR, COUNT(DATETIME) AS COUNT
  FROM ANIMAL_OUTS
  WHERE HOUR(DATETIME) BETWEEN 9 AND 19
  GROUP BY HOUR
  ORDER BY HOUR

  # DATE_FORMAT 함수의 '%k' 옵션으로 hour 추출 후 CAST 함수를 이용하여 UNSIGNED(숫자)로 바꿔주기
  SELECT CAST(DATE_FORMAT(DATETIME, '%k') AS UNSIGNED) AS HOUR, COUNT(DATETIME) AS COUNT
  FROM ANIMAL_OUTS
  WHERE DATE_FORMAT(DATETIME, '%k') BETWEEN 9 AND 19
  GROUP BY HOUR
  ORDER BY HOUR
  ```

### 데이터 타입

http://www.incodom.kr/DB_-_%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%83%80%EC%9E%85/MYSQL
