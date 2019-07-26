## DataFrame check

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
