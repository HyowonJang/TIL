## preprocessing

### one-hot-encoding

- sklearn 패키지 사용

```
from sklearn import preprocessing

# label encoder은 문자
label_encoder = preprocessing.LabelEncoder()
onehot_encoder = preprocessing.OneHotEncoder()

# one-hot-encoding의 input으로는 숫자형만 올 수 있기 때문에 label encoding을 통해 문자형 변수를 숫자형 변수로 변경
col2 = label_encoder.fit_transform(df['col'])
col2 = col2.reshape(len(col2), 1)

col2 = onehot_encoder.fit_transform(col2)
# -> csr_matrix를 반환

# csr_matrix에 접근
tmp = col2.toarray()

# pd.DataFrame을 이용해 dataframe으로 만든 뒤 기존 df에 concat, 단 두 df의 index가 일치해야함
pd.DataFrame(tmp, dtype=np.int64)
```

### dummy variable(더미변수)

- 0 또는 1만으로 표현되는 값으로 어떤 특징이 존재하는가, 존재하지 않는가를 표시하는 독립변수
- 범주형 변수를 더미변수로 인코딩
  - patsy 패키지의 `dmatrix`
  - `OLS` 클래스의 `from_formula` 메서드
- 풀랭크 방식, 축소랭크 방식
  - 풀랭크 방식 : 더미변수의 값을 one-hot-encoding 방식으로 지정
    > x = A or B<br>
    > x1 = A -> d1A = 1, d1B = 0<br>
    > x1 = B -> d1A = 0, d1B = 1
  - 축소랭크 방식 : 특정한 하나의 범주값을 기준값(reference, baseline)으로 하고 기준값에 대응하는 더미변수의 가중치는 항상 1로 설정, 다른 범주형 값을 가지는 경우에는 기준값에 추가적인 특성이 있는 것으로 간주
    > x = A or B<br>
    > A가 기준값인 경우<br>
    > x1 = A -> d1A = 1, d1B = 0<br>
    > x1 = B -> d1A = 1, d1B = 1<br>
    >
    > B가 기준값인 경우<br>
    > x1 = A -> d1A = 1, d1B = 1<br>
    > x1 = B -> d1A = 0, d1B = 1

### 스케일링

- scale(스케일링) vs standardization(표준화) vs normalization(정규화)

  - normalization(정규화) : 5개 영화에 대해 0~5의 범주에서 평가된 A 데이터와 0~10의 범주에서 평가된 B 데이터가 있다면 두 개의 데이터를 정규화하여(A 데이터 / 5, B 데이터 / 10) 동일 선상에서 사용할 수 있음
  - scale 데이터는 scale parameter을 알고있으면 다시 원래대로 되돌릴 수 있지만, normalization한 데이터는 원래 크기를 알아야지만 되돌릴 수 있음

- sklearn 패키지 사용

  - `StandardScaler(X)` : 평균이 0과 표준편차가 1이 되도록 변환
  - `RobustScaler(X)` : 중앙값이 0, IQR(interquartile range, 사분범위)이 1이 되도록 변환
    - IQR(사분범위) : 제3사분위수(75% 백분점수)에서 제1사분위수(25% 백분점수)를 뺀 값
      - 백분점수는 해당 백분위에 해당하는 value
      - 사분범위가 길면 보다 흩어진 분포이고 짧으면 밀집된 분포임
      - 자료의 극단적인 값들에 의한 영향을 덜 받는 장점이 있음
  - `MinMaxScaler(X)` : 최대값이 1, 최소값이 0이 되도록 변환
  - `MaxAbsScaler(X)` : 0을 기준으로 절대값이 가장 큰 수가 1또는 -1이 되도록 변환
    ![scaling](image/Scaling.png)

```
# df의 column 단위를 대상으로 한다면 scale 하기 전 reshape 필요
ary = df['col'].values
ary = ary.reshape(1-, 1)
X = ary

# StandardScaler
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
scaler.fit(X)
X_sclaed = scaler.transform(X)

# RobustScaler
robust_scaler = RobustScaler()
robust_scaler.fit(X)
X_robust_scaled = robust_scaler.transform(X)

```

### 중복행 삭제

- keep 인수는 'first' 혹은 'last'로 설정
- 중복을 체크하는 기준열을 지정하려면 'subset' 인수에 열을 리스트로 설정

```
# 처음 행을 남기고 뒤에 나오는 중복행을 삭제
df.drop_duplicates(keep='first', inplace=True)
```

### sklearn CountVectorizer

1. 문자열을 요소로 포함하는 리스트를 넣어 fit하면 출현한 단어들을 추출하여 고유의 번호를 부여한 vocabulary\_를 생성
   (고유의 번호는 벡터에 표현되는 단어의 위치가 됨)
2. vocabulary\_를 기반으로 리스트의 요소들(문자열)을 훑으면서 해당 요소에 출현하는 단어의 숫자를 세어 벡터를 생성

```
from sklearn.feature_extraction.text import CountVectorizer

# 벡터의 열이 될 corpus안의 모든 단어 추출 후 voca 생성
count = CountVectorizer()
count.fit(corpus)

# voca 확인
count.vocabulary_

# 벡터 생성
vect.transform(['This is the second document.']).toarray()
```

### Reference

- [Python - sklearn LabelEncoder, OnehotEncoder 사용](https://3months.tistory.com/207)
- [scikit-learn의 전처리 기능](https://datascienceschool.net/view-notebook/f43be7d6515b48c0beb909826993c856/)
- [Feature Scaling in Python](https://medium.com/@ian.dzindo01/feature-scaling-in-python-a59cc72147c1)
- [[Python] 어떤 스케일러를 쓸 것인가?](https://mkjjo.github.io/python/2019/01/10/scaler.html)
- [3.5 범주형 독립변수](https://datascienceschool.net/view-notebook/7dda1bc9ad1c435fb309ea88f672eff9/)
