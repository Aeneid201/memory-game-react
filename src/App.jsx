import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { shuffle } from './components/Card'

function App() {

  const [characterList, setCharacterList] = useState([])
  const [selected, setSelected] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    let ignore = false
    
    fetch('https://dattebayo-api.onrender.com/characters?page=1&limit=12')
    .then(res => res.json())
    .then(res => {
      setCharacterList(res.characters)
    })
    
    return() => {
      ignore = true
    }
    
  }, [])

  function Scramble(e) {
    const item = e.target.closest('.single--card')

    setSelected(prevItems => {
      if(prevItems.includes(item.dataset.id)){
        setScore(0)
        return []
      }else{
        setScore(score+1)
        return [...prevItems, item.dataset.id]
      }
    })

    setCharacterList(prevItems => {
      let newArr = prevItems.slice()
      shuffle(newArr)
      return newArr
    })
  }

  return (
    <section className='p-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12">
            <h1 className='acme'>Naruto Memory Game</h1>
            <p className='acme'>Get points by clicking on an image but don't click on any more than once!</p>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 text-end">
            Score : {score}
          </div>
        </div>
        <div className="row">
        {
          characterList.map(character => <Card id={character.id} onClick={(e) => Scramble(e)} key={character.id} url={character.images[0]} name={character.name} />)
        }
        </div>
      </div>
    </section>
  )
}

export default App
