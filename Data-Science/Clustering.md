## Clustering

- 클러스터링은 이미 좌표가 정해져 있는 데이터들에 라벨링만 하는 작업
- 다차원 데이터를 시각화 하기위해서는 PCA나 t-SNE와 같은 차원감소 기법을 사용해야 함

- `K-means``

```
from sklearn.cluster import KMeans
X = df
model = KMeans(n_clusters=10, init='k-means++').fit(X)

# 데이터 row마다의 cluster labeling array
model.labels_

# clustering score 확인
model.score(X)
```

### Reference

[[조대협의 블로그]\_클러스터링 #3 - DBSCAN (밀도 기반 클러스터링)](https://bcho.tistory.com/1205)
