import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | About" />
        <Wrapper page={'landing'} />
        <p className="example">about</p>
      </div>
    )
  }
}

export default nextConnect((state) => state)(About);
