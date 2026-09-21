export interface Character {
  id: string
  name: string
  actor: string
  gender: string
  house: string
  wand: {
    wood: string
    core: string
    length: number | null
  }
  alive: boolean
  image: string
}
