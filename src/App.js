import React, {useState, useEffect} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import DropDown from './components/DropDown'
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating compenents'
  }
]

const options = [
  {
    label: 'the color red',
    value: 'red'
  },
  {
    label: 'the color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]
export default () => {
  const [selected, setSelected] = useState(options[0])

  return  (
    <div>
      <DropDown 
        selected={selected} 
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}
