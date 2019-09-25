### patsy dmatrix로 만든 X를 column을 확인할 수 있는 Dataframe으로 만들기

```
train_X = dmatrix('0+' + '+'.join(col_numerical) + '+' +
                   '+'.join(C_col_categorical), data=train_)
train_X = pd.DataFrame(train_X, columns=train_X.design_info.column_names)
```
