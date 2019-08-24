### seaborn

- `countplot`

  - count값을 기준으로 정렬

  ```
  plt.figure(figsize=(15,6))

  # df['CAT_A']의 value마다의 count를 센 뒤 index로 출력하여 order 인수에 주입
  sns.countplot(df['CAT_A'], order=df['CAT_A'].value_counts().index)
  plt.show()
  ```
