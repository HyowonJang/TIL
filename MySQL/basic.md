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
  - `LIMIT(a, b)`에서 `a`는 시작 index(0부터 시작), `b`는 갯수

```
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1

# user1 테이블에서 두번째에서 네번째까지의 3개의 데이터 조회
SELECT *
FROM user1 LIMIT 1,3
```

### Max, Min, Count, Distinct 구하기

- 최댓값, 최솟값 선택하기 : `MAX`, `MIN`

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

### 사잇값 구하기

- 사잇값 구하기 : `BEWEEN ... AND ...`
  - 시작값, 끝값 포함!

```
SELECT HOUR(DATETIME) AS HOUR, COUNT(DATETIME) AS COUNT
FROM ANIMAL_OUTS
WHERE HOUR(DATETIME) BETWEEN 9 AND 19
GROUP BY HOUR
ORDER BY HOUR
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

### Datetime

- https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html

- Group by 설정 및 DATETIME에서 시간 추출하기

  - HOUR 함수 쓰기 : `HOUR`
  - DATE_FORMAT 및 CAST 함수 쓰기 : `DATE_FORMAT`, `CAST`
    - `CAST(컬럼 AS 바꿀타입)`

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

- 두 DATETIME 간의 간격 구하기 : `DATEDIFF(나중의 Datetime, 먼저의 Datetime)`

```
# 입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 기간이 긴 순으로 조회해야 합니다.

SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.NAME
FROM ANIMAL_INS
JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
ORDER BY DATEDIFF(ANIMAL_OUTS.DATETIME,ANIMAL_INS.DATETIME) DESC
LIMIT 2
```

- DATETIME에서 옵션으로 원하는 데이터 추출 및 형변환 : `DATE_FORMAT`

```
# ANIMAL_INS 테이블에 등록된 모든 레코드에 대해, 각 동물의 아이디와 이름, 들어온 날짜1를 조회하는 SQL문을 작성해주세요. 이때 결과는 아이디 순으로 조회해야 합니다.

SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d')
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

### 결측값 찾기

- 결측값 찾기 : `IS NULL`, `IS NOT NULL`

```
# 결측값인 경우 찾기
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NULL

# 결측값이 아닌 경우 찾기
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID
```

- 결측값인 경우 값 설정하기 : `IFNULL(컬럼, 대체할 값)`

```
# 입양 게시판에 동물 정보를 게시하려 합니다. 동물의 생물 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 프로그래밍을 모르는 사람들은 NULL이라는 기호를 모르기 때문에, 이름이 없는 동물의 이름은 No name으로 표시해 주세요.

SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name'), SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

### JOIN

- JOIN 하고 데이터 SELECT 하기 : `FROM ... JOIN/LEFT JOIN/RIGHT JOIN ... ON ...`

```
# 천재지변으로 인해 일부 데이터가 유실되었습니다. 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

SELECT ANIMAL_OUTS.ANIMAL_ID, ANIMAL_OUTS.NAME
# animal_outs에는 값이 있고 animal_ins에는 값이 없으므로 animal_outs를 기준으로 값 출력

FROM ANIMAL_INS
RIGHT JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_INS.ANIMAL_ID IS NULL
# animal_ins에 값이 없는 경우를 선택해야 하므로 animal_ins를 기준으로 조건 부여, SELECT되지 않은 컬럼도 조건 설정 가능

ORDER BY ANIMAL_OUTS.ANIMAL_ID


# 관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.

SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.NAME
FROM ANIMAL_INS
JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_INS.DATETIME > ANIMAL_OUTS.DATETIME
ORDER BY ANIMAL_INS.DATETIME

# 아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일 순으로 조회해야 합니다.

SELECT ANIMAL_INS.NAME, ANIMAL_INS.DATETIME
FROM ANIMAL_INS
LEFT JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_OUTS.DATETIME IS NULL
ORDER BY ANIMAL_INS.DATETIME
LIMIT 3
```

### LIKE

- `%`를 활용하여 유사한 값 찾기 : `LIKE '값%'/'%값'/'%값%'`, `NOT LIKE '값%'/'%값'/'%값%'`

```
SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.ANIMAL_TYPE, ANIMAL_INS.NAME
FROM ANIMAL_INS
JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_INS.SEX_UPON_INTAKE LIKE 'Intact%' AND ANIMAL_OUTS.SEX_UPON_OUTCOME NOT LIKE 'Intact%'
ORDER BY ANIMAL_INS.ANIMAL_ID
```

- 여러개의 유사한 값을 조건으로 설정하기 : `where 컬럼 REGEXP ('문자열1|문자열2|문자열3')` (-> 잘 작동되지 않음)

### IN

- 여러개의 조건 설정하기 : `IN()`

```
# 동물 보호소에 들어온 동물 중 이름이 Lucy, Ella, Pickle, Rogan, Sabrina, Mitty인 동물의 아이디와 이름, 성별을 조회하는 SQL 문을 작성해주세요.

SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')

# name이 peter와 alice 조회
SELECT *
FROM user1
WHERE name="peter" OR name="alice"

# name이 peter와 alice 조회
SELECT *
FROM user1
WHERE name IN ("peter", "alice")
```

### 조건문 `IF`, `CASE\ WHEN 조건 THEN 반환값 ELSE 반환값\ END AS 컬럼값`

- 참, 거짓에 따라 조건 설정하기 : `IF(조건, 참, 거짓)`

```
# 중성화된 동물은 SEX_UPON_INTAKE 컬럼에 'Neutered' 또는 'Spayed'라는 단어가 들어있습니다. 동물의 아이디와 이름, 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 중성화가 되어있다면 'O', 아니라면 'X'라고 표시해주세요.

SELECT ANIMAL_ID, NAME,
    IF(SEX_UPON_INTAKE LIKE 'Neutered%'
    OR SEX_UPON_INTAKE LIKE 'Spayed%', 'O', 'X')
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

- 여러개의 참, 거짓에 따라 조건 설정하기 : `CASE\ WHEN 조건 THEN 반환값 ELSE 반환값\ END AS 컬럼값`

```
# 위와 같은 문제

SELECT ANIMAL_ID, NAME,
    CASE
        WHEN SEX_UPON_INTAKE LIKE 'Neutered%'
          OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
        ELSE 'X'
    END AS SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

### CONCAT

- select한 데이터를 합쳐서 새로운 컬럼으로 보여주기

```
SELECT email, CONCAT(name, "(", age, ")") AS "name_age"
FROM user1
```

### Etc

- 컬럼명을 새로 지정할 때 `AS`는 생략 가능

### 데이터 타입

http://www.incodom.kr/DB_-_%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%83%80%EC%9E%85/MYSQL

### Referenct

http://tcpschool.com/mysql/mysql_operator_typeCasting

```

```
