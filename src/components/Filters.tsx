const HOUSES = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'] as const

interface FiltersProps {
  name: string
  school: string
  onNameChange: (value: string) => void
  onSchoolChange: (value: string) => void
}

export function Filters({
  name,
  school,
  onNameChange,
  onSchoolChange,
}: FiltersProps) {
  return (
    <form className="filters" onSubmit={(event) => event.preventDefault()}>
      <div className="filters__field">
        <label className="filters__label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="filters__input"
          placeholder="Hermione"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </div>

      <div className="filters__field">
        <label className="filters__label" htmlFor="school">
          School
        </label>
        <select
          id="school"
          className="filters__select"
          value={school}
          onChange={(event) => onSchoolChange(event.target.value)}
        >
          <option value="">Choose one</option>
          {HOUSES.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
