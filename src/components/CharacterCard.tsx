import type { Character } from '../types/character'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <li className="card">
      {character.image ? (
        <img className="card__image" src={character.image} alt={character.name} />
      ) : (
        <div className="card__image card__image--placeholder" aria-hidden="true" />
      )}

      <div className="card__body">
        <h2 className="card__name">{character.name}</h2>
        <dl className="card__details">
          <div className="card__row">
            <dt>Actor:</dt>
            <dd>{character.actor || '—'}</dd>
          </div>
          <div className="card__row">
            <dt>Gender:</dt>
            <dd>{character.gender || '—'}</dd>
          </div>
          <div className="card__row">
            <dt>House:</dt>
            <dd>{character.house || '—'}</dd>
          </div>
          <div className="card__row">
            <dt>Wand core:</dt>
            <dd>{character.wand?.core || '—'}</dd>
          </div>
          <div className="card__row">
            <dt>Alive:</dt>
            <dd>{character.alive ? 'yes' : 'no'}</dd>
          </div>
        </dl>
      </div>
    </li>
  )
}
