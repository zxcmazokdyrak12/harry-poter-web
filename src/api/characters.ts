import type { Character } from '../types/character'

const API_URL = 'https://hp-api.onrender.com/api/characters'

export async function fetchCharacters(): Promise<Character[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`Failed to load characters: ${response.status}`)
  }

  return response.json()
}
