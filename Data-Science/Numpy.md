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
