### seaborn

- `sns.countplot`

  - 값 1개씩(1차원)을 가지는 데이터들이 x축에 표현되고, x축의 해당 위치에 모여있는 데이터의 개수들을 y축에 표현한다
  - 이를 통해 데이터가 어떤 x값에 밀집되어 있는지 알 수 있다
  - bar chart는 countplot처럼 1차원으로 나열되어 있는 데이터들을 알아서 카운팅해주지 않고, 해당 값에 해당하는 개수에 대한 데이터가 있어야 한다

  - count값을 기준으로 정렬하기
    - `Series.value_counts`의 index를 order로 주입
      - `Series.value_counts` : 해당 series의 unique 값을 index, count를 values로 새로운 Series를 반환하며, count를 기준으로 내림차순된 상태이기 때문에 `Series.value_counts().index`를 통해 원래 series의 count가 높은 순의 unique values를 얻을 수 있다

  ```
  plt.figure(figsize=(15,6))

  # df['CAT_A']의 value마다의 count를 센 뒤 index로 출력하여 order 인수에 주입
  sns.countplot(df['CAT_A'], order=df['CAT_A'].value_counts().index)
  plt.show()
  ```

- `plt.scatter(x, y)`

  - 값 2개씩(2차원)을 가지는 데이터들이 각각 x축, y축의 해당 위치에 표현된다
  - 데이터의 특성에 따라 선형 또는 군집하는 모습이 나타날 수 있다
    - 예를들면, 노트북의 사양과 무게를 scatterplot으로 그려보았을 때 어떤 기술적 환경에 따라 같은 무게여도 사양이 크게 차이나는 2개의 군집이 생기는 데이터가 있을 수 있다
  - 한 포인트에 많은 데이터가 몰려있어도 자동으로 포인트의 크기에 반영하지 않기 때문에 값에 해당하는 count를 데이터로 구성하여 전달해야 한다
    - 대신 `sns.jointplot`에서 kind를 'scatter'로 설정하면 scatter plot과 함께 히스토그램도 그리기 때문에 데이터 밀집도를 볼 수 있다

- `plt.bar(x, y)`

  - x : x값
  - y : x값에 해당하는 frequency
  - `bar chart` vs `histogram`
    - `bar chart` : 이산형 데이터의 각 값에 대한 빈도를 나타낸 그래프
    - `histogram` : 연속형 데이터를 구간으로 나누어 구간에 대한 빈도를 나타낸 그래프

- `sns.jointplot(x, y)`

  - 데이터가 2차원이고 모두 연속적인 실수값이라면 스캐터 플롯(scatter plot)을 사용
  - jointplot 명령은 스캐터 플롯뿐 아니라 차트의 가장자리(margin)에 각 변수의 히스토그램도 표현

    ```
    # scatter plot을 그리는 경우
    sns.jointplot(x="x_name", y="y_name", data=dataframe, kind='scatter')
    ```

    ![scatter](image/jointplot_scatter.png)

    ```
    # kernel density plot을 그리는 경우
    sns.jointplot(x="x_name", y="y_name", data=dataframe, kind='kde')
    ```

    ![kde](image/jointplot_kde.png)

- `sns.heatmap`

```
plt.figure(figsize=(15,6))
cmap = sns.light_palette("darkgray", as_cmap=True)
sns.heatmap(X.corr(), annot=True, cmap=cmap)
# annot : 상관관계 수치 표시
plt.show()
```
