function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  console.log('Hello Sagas!')
  // yield all([
  //   helloSaga()
  // ])
}
