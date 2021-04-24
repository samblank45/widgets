import React, {useState, useEffect} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import DropDown from './components/DropDown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


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

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />
//   }
// }

// const showDropDown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <DropDown />
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }

export default () => {
  const [selected, setSelected] = useState(0)
  return  (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <DropDown 
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}
