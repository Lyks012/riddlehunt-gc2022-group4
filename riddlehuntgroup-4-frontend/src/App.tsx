import { IonApp, setupIonicReact, IonContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import Map from './components/Partials/Map';

setupIonicReact();

const App: React.FC = () => {
    return (
        
            <IonApp>
                <IonContent>
                <Map lat={28.1296} long={-15.4480} />
                </IonContent>
                
            </IonApp>
        

    )
}

export default App;
