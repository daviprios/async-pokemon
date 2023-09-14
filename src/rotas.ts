import express from 'express';
import { pokemons, pokemon } from './controladores/pokemons';

const rotas = express();

rotas.get('/pokemon', pokemons);
rotas.get('/pokemon/:idOuNome', pokemon);

export default rotas;