import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import apiGithub from '../../services/api_git';
import { Container, DivInfos, DivLinks, Img, Link, Name } from './styles';
import { Icon } from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import linkedinBoxFill from '@iconify/icons-akar-icons/linkedin-box-fill';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import styled from 'styled-components';

interface ResponseData {
  id: string;
  name: string;
  avatar_url: string;
  linkedin: string;
  github: string;
}

const AboutUs: NextPage = () => {
  const [users, setUsers] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiGithub
      .get('/users/yanstivaletti')
      .then((response) =>
        setUsers([
          ...users,
          {
            id: response.data.id,
            name: response.data.name,
            avatar_url: response.data.avatar_url,
            linkedin: 'https://www.linkedin.com/in/yan-stivaletti/',
            github: 'https://github.com/yanstivaletti',
          },
        ])
      )
      .catch((error) => {
        console.error('Erro!' + error);
      });
  }, []);

  useEffect(() => {
    apiGithub
      .get('/users/ramosspri')
      .then((response) =>
        setUsers([
          ...users,
          {
            id: response.data.id,
            name: response.data.name,
            avatar_url: response.data.avatar_url,
            linkedin: 'https://www.linkedin.com/in/ramosspri/',
            github: 'https://github.com/ramosspri',
          },
        ])
      )
      .catch((error) => {
        console.error('Erro!' + error);
      });
  }, [users.length === 0]);

  return (
    <WrapFooter>
      <WrapSidebar>
        <Sidebar />
        <WrapSideCont>
          <Header title="About Us" />
          <Container>
            {users?.map((users) => {
              return (
                <DivInfos key={users?.id}>
                  <Img src={users?.avatar_url} />
                  <Name>{users?.name}</Name>
                  <DivLinks>
                    <Link href={users?.github}>
                      <Icon icon={githubFill} />
                    </Link>
                    <Link href={users?.linkedin}>
                      <Icon icon={linkedinBoxFill} />
                    </Link>
                  </DivLinks>
                </DivInfos>
              );
            })}
          </Container>
        </WrapSideCont>
      </WrapSidebar>
      <Footer />
    </WrapFooter>
  );
};

const WrapFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapSidebar = styled.div`
  display: flex;
  flex-direction: row;

  height: 90.8vh;
`;

const WrapSideCont = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;
`;

export default AboutUs;
