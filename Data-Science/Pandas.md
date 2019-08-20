## Pandas

### pivot_table

- column마다 다른 aggfunc 적용 및 한 column에 여러 aggfunc 적용

```
tmp = df.pivot_table(index='ORDCUSTNO', values=['AGE', 'AMT'],
               aggfunc={
                   'AGE':['max','min'],
                   'AMT':'sum',
                       })
```

![MultiIndex](image/MultiIndex.png)

- aggfunc에 unique count 적용 : `aggfunc=lambda x: len(x.unique())`, x는 index별 해당 values

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
  import datetime as dt
  df['Pur_Week'] = df['Pur_Date_'].dt.week
  ```
