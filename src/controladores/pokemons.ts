import { Request, Response } from 'express';
import { listarPokemons, detalharPokemon } from 'utils-playground';

export const pokemons = async (req: Request, res: Response) => {
    const { pagina } = req.query;
    const listaPokemons = await listarPokemons(pagina ?? 1);

    return res.json(listaPokemons);
}

export const pokemon = async (req: Request, res: Response) => {
    const { idOuNome } = req.params;

    const pokemonEncontrado = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species })
}