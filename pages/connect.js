import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Overdrive from 'react-overdrive';
import { nextConnect } from '../components/store';

class Connect extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Connect" />
        <Wrapper page={'landing'} />
        <Overdrive id="page-transition">
          <div>
            <p>Connect</p>
          </div>
        </Overdrive>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Connect);
