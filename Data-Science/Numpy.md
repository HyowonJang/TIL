### reshape

- `np.reshape(data, (row, column))`
- reshape에서 -1은 reshape할 array form의 열과 행 중 하나만 정하면 되고 나머지는 모를 때 사용

### `np.array`를 활용한 list 여러 요소의 indexing

```
np.array(ls)[[1, 2, 3, 4, 5]]

# index list가 있는 경우
ls_idx = [1, 2, 3, 4, 5]
np.array(ls)[ls_idx]
```

### 기술통계

- 평균 : np.mean(x)
- 분산 : np.var(x)
- 표준 편차 : np.std(x)
- 최대값 : np.max(x)
- 최소값 : np.min(x)
- 중앙값 : np.median(x)
- 1사분위 수 : np.percentile(x, 25)
- 2사분위 수 : np.percentile(x, 50)
- 3사분위 수 : np.percentile(x, 75)
