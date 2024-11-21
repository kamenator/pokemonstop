import PokemonResult from '../../components/pokemon_result';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}

export default function PokemonDirectory({ repo }) {
    const results = []
    for (const result of repo.results) {
        results.push(<PokemonResult result={result} />)
    }

    return (
        <>
            <h3>Pokemon Directory</h3>
            {results}
        </>
    );
}