## Clustering

- `K-means``

```
from sklearn.cluster import KMeans
X = df
model = KMeans(n_clusters=10, init='k-means++').fit(X)
```
