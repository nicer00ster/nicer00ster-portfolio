import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Connect extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Connect" />
        <Wrapper page={'landing'} />
        <p>Connect</p>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Connect);
