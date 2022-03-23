import React, { useRef } from "react"

interface TodoFormProps {
    onAdd(title: string): void
} // What is interface blyat???

export const TodoForm: React.FC<TodoFormProps> = (props) => {
//   const [title, setTitle] = useState<string>('')
const ref = useRef<HTMLInputElement>(null)

//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setTitle(event.target.value)
//   }

  const keyPressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
          props.onAdd(ref.current!.value)
          ref.current!.value = ''
        //   alert(title)
        //   setTitle('')
      }
  }

  return (
    <div className="input-field mt2">
        <input
            // onChange={changeHandler}
            // value={title}
            ref={ref}
            id='title' 
            type="text"
            onKeyPress={keyPressHandler}/>
        <label
            className='active' 
            htmlFor="title">Введите название дела</label>
    </div>
  )
}
