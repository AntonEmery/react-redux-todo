export function addToDo(text) {
  console.log(text)
  return {
    type: 'ADD_TODO',
    text: text
  }
}
