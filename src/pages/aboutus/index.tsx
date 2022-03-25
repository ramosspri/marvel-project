import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import apiGithub from '../../services/api_git';

interface ResponseData {
  id: string;
  name: string;
  avatar_url: string;
}

const AboutUs: NextPage = () => {
  const [users, setUsers] = useState<ResponseData>();

  useEffect(() => {
    apiGithub
      .get('/users/yanstivaletti')
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error('Erro!' + error);
      });
  }, []);

  useEffect(() => {
    apiGithub
      .get('/users/ramosspri')
      .then((response) => setUsers(...users, ...response.data))
      .catch((error) => {
        console.error('Erro!' + error);
      });
  }, []);

  const handleTest = () => {
    console.log(users);
  };

  return (
    <div>
      <p>Hello World</p>
      <button onClick={handleTest}>Teste</button>
      {/* {users?.map((users) => {
        return (
          <p key={users.id} {...users}>
            {users.name}
          </p>
        );
      })} */}
    </div>
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default AboutUs;
