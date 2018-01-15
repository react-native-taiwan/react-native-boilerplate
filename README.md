# About React Native Boilerplate

## 結構

```
./src
├── actions
│   ├── __tests__
│   │   └── demo.test.js
│   └── demo.js
├── components
│   ├── Counter
│   │   └── index.js
│   ├── Home
│   │   └── index.js
│   └── __tests__
│       ├── Counter.test.js
│       └── Home.test.js
├── constants
│   └── ActionsType.js
├── containers
│   ├── Counter.js
│   └── Home.js
├── reducers
│   ├── __tests__
│   │   ├── __snapshots__
│   │   │   └── demo.test.js.snap
│   │   └── demo.test.js
│   ├── demo.js
│   ├── index.js
│   └── initialState.js
├── sagas
│   └── index.js
└── store
    └── configureStore.js
```

### actions

給 View 發送 action 的管道

固定格式為 

```javascript
export const less = payload => ({
  type: types.LESS,
  payload
});
```

* payload : 描述此次 action 所需要的資訊包含 saga 發送 request 需要的資訊

* type: 描述此次 action 的類型，藉由此讓 reducer 可以分辨執行相對應的 update function

### containers

描述每一個頁面和相關連的 `action` 和 `reducer` 的描述

利用 `connect` 來將需要的 `action` 和 `reducer` 利用 props 的形式流入 component 提供使用

### components

每一個資料夾代表一個頁面

描述顯示在瀏覽器上的 HTML CSS

藉由 container 來與 `reducer` 和 `action` 產生關聯

來顯示資料與發送 `action`

### reducer

提供 `store` 一個可以修改的接口，依據 `action` 的類型去修改相對應的 data

### sagas

當 `action` 有非同步需求的時候 可以在接收到 `broacast` 之後依據 `action` 的類型去執行後

發送成功或失敗的 `action` 讓 `store` 修改 data

## Test

```
  $ npm run test
```

### Test Watch

```
  $ npm run test:watch
```

## Trouble shotting

### missing super() call in constructor

```
  $ vim ./node_modules/jsdom/lib/jsdom/living/xmlhttprequest.js
```

在 `XMLHttpRequest` 的 `constructor` 中增加 `super()`