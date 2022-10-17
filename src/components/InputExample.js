import { useState } from 'react'

function InputExample() {
  const [name, setName] = useState('Sakiz')
  const [surname, setSurname] = useState('İnce')
  return (
    <div>
        Name <br />
       <input value= {name} onChange = {(event) => setName(event.target.value)}/>
       <br />
       <br />
        Surname <br />
       <input value= {surname} onChange = {(event) => setSurname(event.target.value)}/>
    </div>
  )
}

export default InputExample
