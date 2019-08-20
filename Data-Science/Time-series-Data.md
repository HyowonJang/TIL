## Time series Data Handling

### 날짜/시간 데이터가 담긴 열을 `DatetimeIndex`로 설정

1. `pd.to_dateitme` (날짜/시간 데이터 열이 존재하는 경우)
   1. `pd.to_dateitme` : 날짜/시간이 담긴 문자열을 datetime 자료형으로 변환
      ```
      df['date'] = pd.to_datetime(df['date'], format='%Y%m%d')
      # format 인수로 기존 데이터의 형식을 기입
      ```
      | 기호 | 의미                                                   |
      | ---- | ------------------------------------------------------ |
      | %Y   | 앞의 빈자리를 0으로 채우는 4자리 연도 숫자             |
      | %m   | 앞의 빈자리를 0으로 채우는 2자리 월 숫자               |
      | %d   | 앞의 빈자리를 0으로 채우는 2자리 일 숫자               |
      | %H   | 앞의 빈자리를 0으로 채우는 24시간 형식 2자리 시간 숫자 |
      | %M   | 앞의 빈자리를 0으로 채우는 2자리 분 숫자               |
      | %S   | 앞의 빈자리를 0으로 채우는 2자리 초 숫자               |
      | %A   | 영어로 된 요일 문자열                                  |
      | %B   | 영어로 된 월 문자열                                    |
   1. `df.set_index('date')` : datetime으로 변환한 열을 인덱스로 설정
      ```
      df = df.set_index('date')
      ```
1. `pd.date_range` (날짜/시간 데이터 열을 생성하는 경우)

   1. `pd.date_range` : 시작일과 종료일 또는 시작일과 기간을 입력하면 범위 내의 인덱스를 생성

      ```
      # 시작일과 종료일로 생성
      idx = pd.date_range("2019-01-01", "2019-03-31")
      idx

      # 시작일과 기간으로 생성
      idx = pd.date_range(start="2019-01-01", periods=90)
      idx

      # freq 인수로 특정한 날짜만 생성
      idx = pd.date_range("2019-01-01", "2019-03-31", freq="B")
      ```

   1. `df.set_index('date')` : datetime으로 변환한 열을 인덱스로 설정
      ```
      df = df.set_index('date')
      ```

### `resample`

- down-sampling : 시간 간격을 크게하는 sampling, 원래 데이터를 그룹 연산하여 대표값 도출 -> 데이터 양이 감소
- up-sampling : 시간 간격을 좁게하는 sampling, 없는 데이터를 생성 -> 데이터 양이 증가

1. down-sampling

   - rule : 간격에 대한 조건(freq 인수값)

     - `A` : 매년
     - `Q` : 매분기
     - `Q-JAN` : 각 분기의 첫 달의 마지막 날
     - `Q-DEC` : 각 분기의 마지막 달의 마지막 날
     - `M` : 각 달의 마지막 날
     - `MS`: 각 달의 첫날
     - `W` : 매주(일요일)
     - `W-MON` : 매주(월요일)
     - `D` : 매일
     - `B` : 주말이 아닌 평일
     - `H` : 시간
     - `T` : 분
     - `s` : 초

     ```
     # 구간의 평균
     df.resample(rule='A').mean()

     # 구간의 합계
     df.resample(rule='A').sum()

     # 구간의 처음
     df.resample(rule='A').first()
     ```

   - `closed` 속성 : 날짜가 아닌 시/분 단위에서는 10분 단위라고 하면 정확히 10분, 20분은 구간의 시작점이 됨, 만약 11분이 구간의 시작점이 되고자 하면 `closed` 속성을 `"right"`로 설정하면 됨 (오른쪽 끝값을 구간에 포함한다는 의미)

     ```
     df.resample('10T', closed="right").sum()
     ```

   - `ohlc` 메서드 : 구간의 시작 데이터, 가장 값이 큰 데이터, 가장 작은 데이터, 끝 데이터를 구해줌

     ```
     df.resample('10T').ohlc()
     ```

1. up-sampling
   - `ffill` 메서드 : 앞에서 나온 데이터를 그대로 끌어다 채움
     ```
     df.resample('30s').ffill()
     ```
   - `bfill` 메서드 : 뒤에서 나올 데이터를 앞에다 끌어다 채움
     ```
     df.resample('30s').bfill()
     ```

### Reference

- (시계열 자료 다루기)[https://datascienceschool.net/view-notebook/8959673a97214e8fafdb159f254185e9/]
