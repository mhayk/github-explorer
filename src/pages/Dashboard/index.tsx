import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Type the repository's name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
            alt="Mhayk Whandson"
          />
          <div>
            <strong>mhayk/test</strong>
            <p>Description about the repository!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4"
            alt="Mhayk Whandson"
          />
          <div>
            <strong>mhayk/test</strong>
            <p>Description about the repository!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
