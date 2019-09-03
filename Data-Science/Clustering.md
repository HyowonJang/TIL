## Clustering

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
