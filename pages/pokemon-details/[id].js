import Subheader from '../../components/subheader';
import styles from '../../styles/Details.module.css';

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

    const types_info = []
    for (const type_info of repo.types) {
        types_info.push(<div className={styles.info_stat_body_item}>
                #{type_info.slot}: {type_info.type.name}
            </div>)
    }

    const stats_info = []
    for (const stat_info of repo.stats) {
        stats_info.push(<div className={styles.info_stat_body_item}>
                {stat_info.stat.name}: {stat_info.base_stat}
            </div>)
    }

    const moves_info = []
    for (const move_info of repo.moves) {
        moves_info.push(<div className={styles.info_stat_body_item}>{move_info.move.name}</div>)
    }

    const abilities_info = []
    for (const ability_info of repo.abilities) {
        abilities_info.push(<div className={styles.info_stat_body_item}>{ability_info.ability.name}</div>)
    }

    return (
        <>
            <Subheader subhead_info={subhead_info} />
            <div className={styles.details_container}>
                <div className={styles.image_container}>
                    <img src={repo.sprites.front_default}></img>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.info_stat_container}>
                        <div className={styles.info_stat_title}>Weight</div>
                        <div className={styles.info_stat_body}>
                            <div className={styles.info_stat_body_item}>{repo.weight} kg</div>
                        </div>
                    </div>
                    <div className={styles.info_stat_container}>
                        <div className={styles.info_stat_title}>Types</div>
                        <div className={styles.info_stat_body}>{types_info}</div>
                    </div>
                    <div className={styles.info_stat_container}>
                        <div className={styles.info_stat_title}>Stats</div>
                        <div className={styles.info_stat_body}>{stats_info}</div>
                    </div>
                    <div className={styles.info_stat_container}>
                        <div className={styles.info_stat_title}>Moves</div>
                        <div className={styles.info_stat_body}>{moves_info}</div>
                    </div>
                    <div className={styles.info_stat_container}>
                        <div className={styles.info_stat_title}>Abilities</div>
                        <div className={styles.info_stat_body}>{abilities_info}</div>
                    </div>
                </div>
            </div>
        </>
      )
}
