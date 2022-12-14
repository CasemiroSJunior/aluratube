import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/cssReset";
import Menu  from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>
            </div>
        </>
    );
};

export default HomePage

const StyleHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    `;
function Header() {
    return (
        <StyleHeader>
            {/* <img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyleHeader>
    );
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const video = props.playlists[playlistName]
                console.log(playlistName);
                console.log(video);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {video.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })
            }
        </StyledTimeline>
    )
}
