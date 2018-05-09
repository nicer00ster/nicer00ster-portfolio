import Link from 'next/link';
import Overdrive from 'react-overdrive';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Home" />
        <Wrapper page={'landing'} />
        <Overdrive id="page-transition">
          <div className="p">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
          </div>
        </Overdrive>

      </div>
    )
  }
}

export default nextConnect((state) => state)(Index);
