import React, {useState} from 'react';
import { Link } from 'gatsby';
import faker from 'faker';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => {

  let [words, setWords] = useState('randoming');

  return (
    <Layout>
      <SEO title="Some words" />
      <h2>{words}</h2>
      <button onClick={() => setWords( faker.hacker.ingverb() )}>New Hacker</button>
      <hr />
      <ul>
        <li><Link to="/">Go back to the homepage</Link></li>
        <li><Link to="/words/">See some words</Link></li>
        <li><Link to="/article/">Read an article</Link></li>
      </ul>
    </Layout>
  );
};

export default SecondPage;
