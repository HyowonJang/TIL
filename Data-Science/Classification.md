### classification의 feature importances

1. modeling에 사용된 X의 columns를 확인
   - patsy dmatrix를 사용했다면 `.design_info.column_names` api를 사용하여 추출
1. model의 `feature importances` api를 사용하여 values 확인
1. 아래와 같이 dataframe으로 만들어 확인

```
# model에서 추출한 feature_importances_를 pd.Series로 name과 index를 설정하여 생성 후 pd.DataFrame으로 만든다
# pd.DataFrame을 만들 때 column과 index를 설정하면 Series의 name, index와 충돌하여 제대로 생성되지 않는다

fi = pd.DataFrame(pd.Series(tree.feature_importances_,
                            name='feature_importances',
                            index=train_X.columns))
fi.sort_values(by='feature_importances', ascending=False)
```
