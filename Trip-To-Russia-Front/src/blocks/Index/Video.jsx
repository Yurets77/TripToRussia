import '/src/App.css'

export default function Video () {
    return (
        <section>
            <div className="video-container">
                <video autoPlay={true} muted={true} loop={true}>
                    <source src="./Video/video_final.mp4" type="video/mp4"/>
                </video>
                <div className="video-text">НЕОБЪЯТНЫЕ ПРОСТОРЫ РОССИИ</div>
            </div>
            <div className="attractions">Выбери свое направление</div>
        </section>
    )

}