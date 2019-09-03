### seaborn

- `countplot`

  - 값 1개씩(1차원)을 가지는 데이터들이 x축에 표현되고, x축의 해당 위치에 모여있는 데이터의 개수들을 y축에 표현한다
  - 이를 통해 데이터가 어떤 x값에 밀집되어 있는지 알 수 있다
  - bar chart는 countplot처럼 1차원으로 나열되어 있는 데이터들을 알아서 카운팅해주지 않고, 해당 값에 해당하는 개수에 대한 데이터가 있어야 한다

  - count값을 기준으로 정렬하기

  ```
  plt.figure(figsize=(15,6))

  # df['CAT_A']의 value마다의 count를 센 뒤 index로 출력하여 order 인수에 주입
  sns.countplot(df['CAT_A'], order=df['CAT_A'].value_counts().index)
  plt.show()
  ```

- `scatterplot`
  - 값 2개씩(2차원)을 가지는 데이터들이 각각 x축, y축의 해당 위치에 표현된다
  - 데이터의 특성에 따라 선형 또는 군집하는 모습이 나타날 수 있다
    - 예를들면, 노트북의 사양과 무게를 scatterplot으로 그려보았을 때 어떤 기술적 환경에 따라 같은 무게여도 사양이 크게 차이나는 2개의 군집이 생기는 데이터가 있을 수 있다
