import { proxy } from 'valtio'


export const store = proxy({
  age: 0
})

export const inc=()=>{
    store.age = store.age+1
}