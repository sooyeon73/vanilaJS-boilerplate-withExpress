# vanilaJS-boilerplate-withExpress
```
npm start
// localhost:3000/public 
```
- vanilaJS 초기 세팅 ( + 서버 라우팅 )
- React 같은 클라이언트 라이브러리에서 자동으로 구성해주는 webpack 설정을 직접 구성해본다
- stack :
  - Webpack ( babel source-map )
  - Express ( with middleware )



## Webpack 
의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러
```Javascript
npm install
npm init -y 
npm install express --save
npm install eslint-config-prettier eslint-config-airbnb-base eslint-plugin-import
npm install @babel/core @babel/cli @babel/preset-env --save-dev // babel
npm install --save core-js@3 //babel polyfill
npm install --save-dev @babel/plugin-proposal-class-properties //proposal plugin
npm install webpack webpack-cli --save-dev // webpack
npm install babel-loader --save-dev // babel 연동
npm install --save-dev html-webpack-plugin //webpack plugin  설치
npm i -D style-loader css-loader mini-css-extract-plugin // css plugin
```
- webpack - module loader : 모듈(image, js, sass..)을 입력 받아 Javascript로 변환
- webpack - plugin : 의존 관계를 분석해서 번들된 결과에 대한 후속 처리를 담당
- webpack config : webpack은 config 파일을 통해 자신이 어떻게 동작해야 될지를 판단



### Babel
바벨은 ES6+ 버전 이상의 자바스크립트나 JSX, 타입스크립트 코드를 하위 버전의 자바스크립트 코드로 변환 시켜 IE나 다른 브라우저에서 동작할 수 있도록 하는 역할을 합니다.
벨은 컴파일러의 역할과는 다르게 같은 언어를 다른 실행 환경에서도 돌아갈 수 있도록 형태만 바꾸는 작업을 진행합니다. 이와 같은 작업을 하는 프로그램을 트랜스 파일러라고 합니다. 

- babel loader :  babel이 webpack에서 동작하려면 babel loader가 필요, Webpack이 모듈을 번들링할 때 Babel을 사용하여 ES6+ 코드를 ES5 코드로 트랜스파일링 해준다.
- babel-polyfill : ES6에서 추가된 Promise, Object.assign, Array.from 등은 ES5 이하로 트랜스파일링하여도 대체할 기능이 없기에 Babel을 사용하여도 트랜스파일링이 안되고 남아있을 수 있기 때문이다.



### source-map
```
// webpack.config.js
module.exports = {
  devtool: 'cheap-eval-source-map'
}
```
소스 맵(Source Map)이란 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능입니다. 보통 서버에 배포를 할 때 성능 최적화를 위해 HTML, CSS, JS와 같은 웹 자원들을 압축합니다. 그런데 만약 압축하여 배포한 파일에서 에러가 난다면 어떻게 디버깅을 할 수 있을까요?
정답은 바로 소스 맵을 이용해 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인하는 것입니다. 이러한 편의성을 제공하는 것이 소스 맵입니다.



## Webpack-dev-middleware
webpack middleware는 이미 존재하는 express서버에 webpack에서 컴파일한 파일을 전달해준다
```Javascript
npm i -D webpack-dev-middleware
```



### 참고자료
- [Vanilla JS 프로젝트 세팅하기](https://yujo11.github.io/javascript/Vanilla%20JS%20프로젝트%20세팅하기/)
- [Nodejs Webpack-dev-middleware 시작하기](https://velog.io/@dami/Node.js-Webpack-dev-middleware-시작하기)
- [express 와 webpack 을 이용한 빌드환경](https://rrecoder.tistory.com/105)
- [Babel Webpack ES6](https://agal.tistory.com/205)
