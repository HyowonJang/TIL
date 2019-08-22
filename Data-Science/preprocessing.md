## preprocessing

### one hot encoding

- sklearn 패키지 사용

```
from sklearn import preprocessing

# label encoder은 문자
label_encoder = preprocessing.LabelEncoder()
onehot_encoder = preprocessing.OneHotEncoder()

# one hot encoding의 input으로는 숫자형만 올 수 있기 때문에 label encoding을 통해 문자형 변수를 숫자형 변수로 변경
col2 = label_encoder.fit_transform(df['col'])
col2 = col2.reshape(len(col2), 1)

col2 = onehot_encoder.fit_transform(col2)
# -> csr_matrix를 반환

# csr_matrix에 접근
tmp = col2.toarray()

# pd.DataFrame을 이용해 dataframe으로 만든 뒤 기존 df에 concat, 단 두 df의 index가 일치해야함
pd.DataFrame(tmp, dtype=np.int64)
```

### 스케일링

- sklearn 패키지 사용

  - `StandardScler(X)` : 평균이 0과 표준편차가 1이 되도록 변환
  - `RobustScaler(X)` : 중앙값이 0, IQR(interquartile range, 사분범위)이 1이 되도록 변환
    - IQR(사분범위) : 제3사분위수(75% 백분점수)에서 제1사분위수(25% 백분점수)를 뺀 값
      - 백분점수는 해당 백분위에 해당하는 value
      - 사분범위가 길면 보다 흩어진 분포이고 짧으면 밀집된 분포임
      - 자료의 극단적인 값들에 의한 영향을 덜 받는 장점이 있음
  - `MinMaxScaler(X)` : 최대값이 1, 최소값이 0이 되도록 변환
  - `MaxAbsScaler(X)` : 0을 기준으로 절대값이 가장 큰 수가 1또는 -1이 되도록 변환
    ![scaling](image/Scaling.png)

```

```

### Reference

- [Python - sklearn LabelEncoder, OnehotEncoder 사용](https://3months.tistory.com/207)
- [scikit-learn의 전처리 기능](https://datascienceschool.net/view-notebook/f43be7d6515b48c0beb909826993c856/)
- [Feature Scaling in Python](https://medium.com/@ian.dzindo01/feature-scaling-in-python-a59cc72147c1)
- [[Python] 어떤 스케일러를 쓸 것인가?](https://mkjjo.github.io/python/2019/01/10/scaler.html)
