import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { CharacterGrid } from './components/CharacterGrid'
import { fetchCharacters } from './api/characters'
import type { Character } from './types/character'
import './App.css'

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [school, setSchool] = useState('')

  useEffect(() => {
    let isCancelled = false

    fetchCharacters()
      .then((data) => {
        if (!isCancelled) {
          setCharacters(data)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setError('Could not load characters. Please try again later.')
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesName = character.name
        .toLowerCase()
        .includes(name.trim().toLowerCase())
      const matchesSchool = school === '' || character.house === school

      return matchesName && matchesSchool
    })
  }, [characters, name, school])

  return (
    <div className="page">
      <Header />
      <Filters
        name={name}
        school={school}
        onNameChange={setName}
        onSchoolChange={setSchool}
      />
      <CharacterGrid
        characters={filteredCharacters}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}

export default App
