export default function PlaceAddress({info}) {
    return (
        <section>
            <div className="line2"></div>
            <table>
                <tbody>
                <tr>
                    <th className="th1">Адрес</th>
                    <th className="th2">Связаться</th>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td><a className="map"
                           href={info.placeAddress.link}>{info.placeAddress.address}</a></td>
                    <td>{info.placeAddress.telephone}</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}