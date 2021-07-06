import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import './Info.css';
import Faq from '../components/Faq';

function Info() {
  return (
    <div>
      <Navigation />
      <h1>Info</h1>
      <Faq />
      <Footer />
    </div>
  );
}

export default Info;
