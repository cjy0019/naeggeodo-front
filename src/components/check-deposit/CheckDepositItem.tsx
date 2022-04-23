import Image from 'next/image';
import React from 'react';

import profile from '../../assets/img/profile.svg';
import styled from 'styled-components';
import palette from '../../styles/palette';
import CompleteDepositButton from './CompleteDepositButton';

const CheckDepositItem = ({ userNickName }: { userNickName: string }) => {
  return (
    <Container>
      <div style={{ height: '52px' }}>
        <StyledImg
          src={profile}
          layout='fixed'
          width={52}
          height={52}
          objectFit='contain'
        />
      </div>
      <NickNameWrapper>{userNickName}</NickNameWrapper>
      <CompleteDepositButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 17px;

  & > button {
    margin-left: 3px;
  }
`;

const StyledImg = styled(Image)`
  border-radius: 10px 0px 0px 10px;
`;

const NickNameWrapper = styled.div`
  display: flex;
  min-width: 115px;
  align-items: center;
  padding-left: 10px;
  width: 90%;
  height: 52px;
  border-radius: 0px 10px 10px 0px;
  background-color: ${palette.bgGray};
`;

export default CheckDepositItem;
