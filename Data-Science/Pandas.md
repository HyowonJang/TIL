## Pandas

### 모든 데이터 확인하기

- 현재의 세팅 확인 후 변경하기 (columns도 rows와 동일하게 세팅 가능)

```
# 방법 1
pd.options.display.max_rows
pd.options.display.max_rows = 999

# 방법 2
pd.get_option("display.max_rows")
pd.set_option('display.max_rows', 999)
```

### pivot_table

- pivot vs pivot_table

  - pivot : 지정한 index와 지정한 columns에 해당하는 value값을 '그대로 넣어' df 생성
  - pivot_table : 지정한 index와 지정한 columns에 해당하는 value값을 '지정한 aggfunc에 맞춰 연산하여' df 생성

- column마다 다른 aggfunc 적용 및 한 column에 여러 aggfunc 적용

```
tmp = df.pivot_table(index='CUSTNO', values=['AGE', 'AMT'],
               aggfunc={
                   'AGE':['max','min'],
                   'AMT':'sum',
                       })
```

- aggfunc에 unique count 적용 : `aggfunc=lambda x: len(x.unique())`, x는 index별 해당 values

```
df_tmp = df.pivot_table(index=['CUSTNO'], values=['Pur_Week', 'AMT'],
               aggfunc={'Pur_Week':lambda x: len(x.unique()),
                        'AMT':'sum'})
df_tmp
# pivot_table 생성 시 index별 데이터 기준으로 연산하기 때문에
# lambda 함수에서의 x는 각 'ORDCUSTNO'에 해당하는 'Pur_Week'열의 데이터이다
```

### sort_values

- 지정한 열을 기준으로 value들을 정렬

```
df.sort_values(by='col1', ascending=False)
```

### MultiIndex

- 리스트 안의 리스트에 접근하는 것과 동일한 slicing 방식으로 column에 접근

```
tmp.columns
> MultiIndex(levels=[['AGE', 'AMT'], ['max', 'min', 'sum']], codes=[[0, 0, 1], [0, 1, 2]])

tmp['AGE']['max']
# 'max' column에 접근
```

### Week number

- 날짜 데이터에 해당하는 week number 반환

  - `pd.to_datetime`을 통해 column을 datetime 자료형으로 바꾼 뒤 datetime.week 사용

  ```
  df['Pur_Date'] = pd.to_datetime(df['Pur_Date'], format='%Y%m%d')

  import datetime as dt
  df['Pur_Week'] = df['Pur_Date'].dt.week
  ```

### pandas.Series.isin

- set 혹은 list-like 값들이 Series 안에 포함되어있는지 체크

```
s = pd.Series(['lama', 'cow', 'lama', 'beetle', 'lama', 'hippo'], name='animal')
s.isin(['cow', 'lama'])
# 0     True
# 1     True
# 2     True
# 3    False
# 4     True
# 5    False
```

### `df.where`

- 조건에 맞지 않는 값을 변경, 대체값을 지정하지 않으면 Nan값 return

  - `df.where(유지할 value의 조건, 변경할 value에 주입할 값)`

  ```
  s = pd.Series(range(5))

  s.where(s > 1)
  # 1 이하의 값만 남기고 나머지는 Nan값으로 대체

  s.where(s > 1, 10)
  # 1 이하의 값들은 10으로 대체
  ```

### `df.mask`

- 조건에 맞는 값을 변경, 대체 값을 지정하지 않으면 Nan값 return

  - `df.mask(변경할 value의 조건, 변경할 value에 주입할 값)`
  - 여러개의 조건은 적용하기 어려운 것으로 보임

  ```
  s = pd.Series(range(5))

  s.mask(s > 1)
  # 1 초과의 값만 남기고 나머지는 Nan값으로 대체

  s.where(s > 1, 10)
  # 1 초과한 값들은 10으로 대체
  ```

### `df.at`, `df.iat`

- 행과 열의 위치로 **한개**의 value에 접근, **값의 변경** 가능

  - `df.at(행 위치, 열 위치)`
  - `df.iat(행 숫자 위치, 열 숫자 위치)`
  - `df.loc` 및 `df.iloc`와 다른 점

    1. 여러 행과 열에 접근하는 것이 아니라 한 개의 행과 열로 한 개의 value에만 접근
    1. 한 개의 value에만 접근하기 때문에 가르키는 값이 분명하여 값의 대체 가능

    ```
    # 4번째 행, 'B'열에 접근
    df.at[4, 'B'] # return : 2

    df.at[4, 'B'] = 10

    df.at[4, 'B'] # return : 10

    # 사용예시 : 'CAT_A'의 Nan 데이터에 값 삽입

    for i in ls_tmp:
    # 'CAT_A'가 null이고 해당 NAME을 가진 df의 index 추출
    ls_idx = df[(df['CAT_A'].isnull())&(df['NAME'] == i)].index.tolist()

        for ii in ls_idx:
            # 추출해낸 index를 for문으로 구성하여 df.at으로 값 삽입
            df.at[ii, 'CAT_A'] = 'apple'
    ```

### `df.rename`

- column 이름을 바꾸는 경우 : `df.rename(columns={'기존 col 이름': '변경할 col 이름'})`

```
df = pd.DataFrame({"A":[1, 2, 3], "B":[4, 5, 6]})
df.rename(columns={"A":"a", "B":"c"})
```

- index 이름을 바꾸는 경우 : `df.rename(index={'기존 idx 이름': '변경할 idx 이름'})`

```
df.rename(index={0:"x", 1:"y", 2:"z"})
```

### Reference

- [pandas.DataFrame.mask](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.mask.html#pandas.DataFrame.mask)
