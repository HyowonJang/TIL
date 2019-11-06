- import list

```
import pandas as pd
import numpy as np
import missingno as msno
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings(action='ignore')
plt.rcParams["font.family"] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False
```

- Classification 문제에서 Categorical columns를 pivot_table이나 dmatrix를 사용하여 펼친 후 model에 fit한다면 해당 columns의 unique values들이 test 데이터에도 동일하게 존재해야만 predict를 할 수 있다. unique values들이 train 데이터와 test 데이터가 서로 다르다면, 동일한 로직으로 train_X와 test_X 데이터를 생성했을지라도 두 데이터의 columns에는 차이가 나서 model이 제대로 동작하지 않는다.

  1. train에는 있지만 test에는 없는 값이 결측치라면 채워주거나,
  1. train에는 있지만 test에는 없는 값을 일부러 만들어서 test_X를 생성하거나, (-> 이 경우 정확도는 장담할 수 없다)
  1. 처음부터 train과 test의 교집합인 값으로 model을 fit하는 방법을 취할 수 있다. (-> 이 경우 새로운 test 데이터를 predict하려면 model을 새로 생성해야 한다)

### 어떤 변수를 어떻게 전처리해야할지 확인

- (회귀분석에는 각 변수별로 딱 1개의 가중치만 가질 수 있다는 제약조건이 있음)
- distplot & boxplot
- human error가 있는지 대략적으로 파악 후 처리
- 모델링 후에는 아웃라이어와 레버리지 계산 후 재처리

y와 pred_y로 표현된 스캐터 플롯과 독립변수 x와 종속변수 y로 표현된 그래프는 아예 의미가 다르다. 후자는 뽑기에 동전을 넣고 돌리듯이 x값을 넣으면 함수를 돌아 그에 해당하는 y값이 표현되는 것으로 보아야 한다. 독립변수가 2개이면 x1, x2를 넣어서 그 값들에 해당하는 결과가 z축에 표현된다. 이때 x축과 y축은 위치(좌표)축이고 z축이 값축이다.

- x1, x2를 넣었을 때 얼마를 곱해서 y를 반환할 것인가가 이 회귀분석이다
- x1과 x2가 `numerical feature`일 때 x1과 x2에 대해 각각 `1개씩의 가중치`가 계산된다
  - 해당 가중치는 데이터 각 행의 x1값과 x2에 곱해져 y_hat을 예측했을 때, `전체적으로 y와의 잔차가 가장 작아지는 가중치`이다
  - 아래와 같이 종속변수와 독립변수의 scatterplot에 점들이 산재해 있어도 회귀분석 결과는 `가중치 1개, 즉 선 1개`로만 표현된다, y와 y_hat이 가장 가까워질 수 있는 선 1개이다.
  - `선 1개가 선형이 아닌 다항으로도 계산될 수 있다`
  - Wind Bearing같은 경우는 회귀분석을 해도 어느 방향으로 선을 그어야할지 알기 어렵기 때문에 긍정적인 영향을 줄 것이라 보기 어렵다
  - 독립변수가 어떤 값이 들어가든 종속변수에 특정한 값만 나오는 경우는 독립변수의 가중치가 0이고 intercept가 곧 종속변수인 경우로 해석할 수 있다, 만약 특정한 값이 1개가 아니라면 해석하기 어렵다
  - 독립변수에 특정한 값만 들어가는데 모든 종속변수가 나오는 경우는 해석하기 어렵다
- x1과 x2가 `categorical feature`일 때는 label값들이 각각 하나의 feature들이 되고, 그 feature에는 1또는 0값만 존재하므로 0일때는 intercept(0일때의 y값의 평균) 1일 때는 그때의 가중치(1일때의 y값의 평균)가 도출된다

np.exp()-1로 원복해서 구한 r2보다 y와 y_pred에 둘다 log를 취해서 구한 r2가 훨씬 성적이 좋다.
이유는 y와 y_pred 사이의 잔차가 np.exp()-1로 원복해주면서 증폭하기 때문이다.
의미는 같으나 값이 다르다.
