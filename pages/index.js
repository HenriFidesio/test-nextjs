// components
import { AttachFilesComp } from 'components'; 
// styles
import 'styles/main.scss';

/**
 *
 */
const HomePage = () => {

    return (
        <div className="home-page">
        	<h2 className="home-page__title">
            	Home page
            </h2>
            <div className="home-page__inner">
            	<AttachFilesComp />
            </div>
        </div>
    );

}

export default HomePage;