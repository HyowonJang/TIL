## preprocessing

### one hot encoding

- sklearn 패키지 사용

```
from sklearn import preprocessing

label_encoder = preprocessing.LabelEncoder()
onehot_encoder = preprocessing.OneHotEncoder()

col2 = label_encoder.fit_transform(df['col'])
col2 = col2.reshape(len(col2), 1)
col2 = onehot_encoder.fit_transform(col2)
# csr_matrix를 반환

# csr_matrix에 접근
col2.toarray()
```

### Reference

- [Python - sklearn LabelEncoder, OnehotEncoder 사용](https://3months.tistory.com/207)
