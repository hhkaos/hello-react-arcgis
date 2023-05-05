import { useRef, useEffect } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import "./Map.css"; 

function Map() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });

      const view = new MapView({
        container: mapDiv.current,
        center: [-118, 34],
        zoom: 8,
        map: map
      });

      view.when(() => {
        console.log('view ready')
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Map;
