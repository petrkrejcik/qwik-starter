import { useVisibleTask$ } from "@builder.io/qwik"

export default (id: string) => {
  useVisibleTask$(() => {
    console.log('🛎 ', 'running task with id', id);
  })
}