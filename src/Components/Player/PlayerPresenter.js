import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.32);
  background-color: white;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.32);
  border-radius: 15px;
  padding: 30px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 5px solid ${props => (props.winner ? "#2ecc71" : "transparent")};
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const Span = styled.span`
  font-size: 30px;
`;

const Username = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Item = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #797979;
  margin-top: 10px;
  text-align: center;
`;

const B = styled.span`
  color: black;
`;

const PlayerPresenter = ({ data, loading, error }) => {
  if (loading) {
    return (
      <Card>
        <Span>⏰</Span>
      </Card>
    );
  }
  if (error) {
    return (
      <Card>
        <Span>😞</Span>
      </Card>
    );
  }
  return (
    <Card>
      <React.Fragment>
        <Image src={data.user.avatarUrl} />
        <Username>{data.user.login}</Username>
        <Item>{data.user.bio}</Item>
        <Item>
          Followers: <B>{data.user.followers.totalCount}</B>
        </Item>
        <Item>
          Repos: <B>{data.user.repositories.totalCount}</B>
        </Item>
      </React.Fragment>
    </Card>
  );
};

PlayerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  player: PropTypes.string.isRequired
};

export default PlayerPresenter;
