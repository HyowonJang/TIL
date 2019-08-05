## Data check

### 기본 DataFrame check

1. 내용 : `head()`
1. column : `columns`
1. 행렬구조, data type, null data : `info()`
   - 행렬구조 ONLY
     - `shape`
   - data type ONLY
     - `dtypes`
   - null data ONLY
     - 열 단위 - `isnull().any()`
     - df 단위 - `isnull().any().any()`
1. 기술통계 : `describe()`

### `[pd.to_numeric]`

- 숫자와 문자가 섞여 string 형식인 column에 써보려고 했으나 error 옵션을 'coerce'로 하지 않으면 제대로 작동하지 않음

  - error 옵션을 'coerce'로 하면 문자는 일괄 nan 데이터로 변환되기 때문에 문자마다 구분해야 하는 경우에는 적절하지 않음, 이 경우 아래 코드로 대체함

  ```
  def to_numeric(a):
    try:
        return float(a)
    except:
        return a
  ```

- errors : {'ignore', 'raise', 'coerce'}, default 'raise'
  - If 'raise', then invalid parsing will raise an exception
  - If 'coerce', then invalid parsing will be set as NaN
  - If 'ignore', then invalid parsing will return the input

### `[pd.to_datetime]` datetime으로 data type 변경

> df['date'] = pd.to_datetime(df['date'])

### apply

- df[col].apply()에 적용된 function에서 어떤 값도 return 받지 못한 value는 모두 nan 데이터가 되므로 유의 필요

### 시계열 데이터에 따른 요약 통계

- 시계열 데이터 열을 index로 설정

  > df.set_index('date')

-

> df.resampling(rule='A') # 연마다의 통계
