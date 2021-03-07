import React from 'react';
import { YMaps,Map,Placemark } from 'react-yandex-maps';

function Contact(props) {
    const mapData = {
        center: [43.324732, 45.692374],
        zoom: 15,
    };

    const coordinates = [
        [43.324732, 45.692374]
    ];

    const style ={
        width: "100%",
        height:400
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="contact-title">
                            Школа программирования intocode
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main-maps">
                            <YMaps  >
                                <Map  style={style} defaultState={mapData}>
                                    {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                                </Map>
                            </YMaps>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;