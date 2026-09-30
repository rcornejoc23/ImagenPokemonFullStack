import { useEffect, useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'

// https://pokeapi.co/api/v2/pokemon/pikachu
function App() {
  const [pokemon, setPokemon] = useState(null)

  const buscarPokemon = async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/kyogre'
    )
    const data = await response.json()
    setPokemon(data)
    console.log(data)
  }

  useEffect(() => {
    buscarPokemon()
  }, [])

return (
  <div className="contenedor">
    <Card className="carta-pokemon">
      <Card.Body>
        <div className="cabecera">
          <Card.Title>{pokemon?.name}</Card.Title>
          <span>#{pokemon?.id}</span>
        </div>

        <div className="marco-imagen">
          <Card.Img
            src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
            alt={pokemon?.name}
          />
        </div>

        <p className="tipo">
          {pokemon?.types?.map((tipo) => tipo.type.name).join(' / ')}
        </p>

        <div className="estadisticas">
          {pokemon?.stats?.map((stat) => (
            <div className="estadistica" key={stat.stat.name}>
              <span>{stat.stat.name}</span>
              <strong>{stat.base_stat}</strong>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  </div>
)
}

export default App