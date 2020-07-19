# Study-Buddies-Client

## Run

- `yarn install`: pacakge install
- `yarn build` : build
- `yarn gql-gen --watch` : graphql type에 변화가 있을 때마다 `graphql.tsx` 파일 재생성
- `yarn start`: 로컬에서 실행

[![Run on Ainize](https://ainize-dev.herokuapp.com/images/run_on_ainize_button.svg)](https://studybuddies-chloe-codes1.endpoint.ainize.ai/)

## Environment variables

- `REACT_APP_`: custom variables need this prefix
- use `process.env.REACT_APP_{env_var_name}`
  🧚‍♀️don't install dotenv package

e.g. .env
```
PORT=7000 // client port
REACT_APP_SERVER_BASE_URL=http://localhost:3000 // server url
```
  
## Query

- graphql document 작성 예시

```
gql`
  query QueryName {
    helloWorld
  }
`
```

- graphql-code-generator에서 `use{QueryName}Query`와 같은 네이밍 규칙으로 쿼리 함수 생성
- `src/generated/graphql.tsx` 파일로부터 `use{QueryName}Query` import하여 사용
- response에서 data, loading, error를 꺼내 먹어요(😎)

```typescript
const App = () => {
  const { data, loading, error } = useHelloWorldQuery()

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (error) return null

  return (
    <div className="App">
      {data?.helloWorld}
      <Pages />
    </div>
  )
}

export default App
```
