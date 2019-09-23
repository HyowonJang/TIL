- Classification 문제에서 Categorical columns를 pivot_table이나 dmatrix를 사용하여 펼친 후 model에 fit한다면 해당 columns의 unique values들이 test 데터에도 동일하게 존재해야만 predict를 할 수 있다. unique values들이 train 데이터와 test 데이터가 서로 다르다면, 동일한 로직으로 train_X와 test_X 데이터를 생성했을지라도 두 데이터의 columns에는 차이가 나서 model이 제대로 동작하지 않는다.

  1. train에는 있지만 test에는 없는 값이 결측치라면 채워주거나,
  1. train에는 있지만 test에는 없는 값을 일부러 만들어서 test_X를 생성하거나, (-> 이 경우 정확도는 장담할 수 없다)
  1. 처음부터 train과 test의 교집합인 값으로 model을 fit하는 방법을 취할 수 있다. (-> 이 경우 새로운 test 데이터를 predict하려면 model을 새로 생성해야 한다)
