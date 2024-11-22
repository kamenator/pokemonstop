import Link from 'next/link';
import styles from '../styles/Result.module.css';

export default function PokemonResult({ result }) {
    const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/*(\w+)/;
    const pokemon_id = result.url.match(regex)[1];
    const pokemon_url = `/pokemon-details/${pokemon_id}`;

    return (
        <Link href={pokemon_url} className={styles.result_container}>
          <div className={styles.result_info}>
            {result.name}
          </div>
          <div className={styles.result_navigation}>
            {">"}
          </div>
        </Link>
      )
}
