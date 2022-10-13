## Getting Started

install package
```bash
yarn install
```

dev
```bash
yarn run dev
```

start
```bash
yarn run build && yarn run start
```

### icon
icon은 svg를 주로 사용합니다.
assets/svg 폴더에 svg 파일을 넣고, script 를 통해 react 컴포넌트로 변환하여 사용합니다.
```bash
yarn run icon 
```


### 주요 폴더 구조
```
├── src
│   ├── api // server domain 의 형태로 api를 구성합니다
│   ├── assets // image, font 등의 asset 파일을 저장합니다
│   ├── components // 재사용 가능한 component 를 저장합니다
│   ├── constants // 상수를 저장합니다
│   ├── layout // 페이지의 레이아웃을 구성하는 component 를 저장합니다
│   ├── lib // 외부 모듈이 메인이 되어 사용되는 함수를 저장합니다
│   ├── modules // redux module 을 저장합니다
│   ├── pages // page 단위의 component 를 저장합니다
│   ├── styles // global style 을 저장합니다
│   ├── types // type 을 저장합니다
│   └── utils // 공통으로 사용되는 함수를 저장합니다

```
