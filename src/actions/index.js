export const addProcessField = (id, value, formStep) => {
  return ({
    type: 'ADD_PROCESS_FIELD',
    formStep,
    id,
    value,
  })
}
