import Subheader from '../../components/subheader';

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
    const subhead_info = {
        back_button_url: '/pokemon-directory',
        subtitle: repo.species.name,
    }
    return (
        <>
            <Subheader subhead_info={subhead_info} />
            <p>User: {repo.species.name}</p>
        </>
      )
}
