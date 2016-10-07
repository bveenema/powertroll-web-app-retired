let nextTodoId = 0
export const addTodo = (text) => {console.log('action');return({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleCustomProcess = (isToggled) => {
  return ({
    type: 'TOGGLE_CUSTOM_PROCESS',
    toggled: !isToggled,
  })
}
