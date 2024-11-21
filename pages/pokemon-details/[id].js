import BackButton from '../../components/back_button';

export async function getServerSideProps(context) {
    // Parse id from url
    const { id } = context.query;
    // Fetch data from external API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}

export default function User({ repo }) {
    const back_button_url = '/pokemon-directory';
    return (
        <>
            <BackButton back_button_url={back_button_url} />
            <p>User: {repo.species.name}</p>
        </>
      )
}
