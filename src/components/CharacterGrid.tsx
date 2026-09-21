import type { Character } from '../types/character'
import { CharacterCard } from './CharacterCard'

interface CharacterGridProps {
  characters: Character[]
  isLoading: boolean
  error: string | null
}

export function CharacterGrid({
  characters,
  isLoading,
  error,
}: CharacterGridProps) {
  if (isLoading) {
    return <p className="status">Loading characters…</p>
  }

  if (error) {
    return <p className="status status--error">{error}</p>
  }

  if (characters.length === 0) {
    return <p className="status">No characters match your filters.</p>
  }

  return (
    <ul className="grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  )
}
