import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { updatePlayerScore } from "mutations";
import styled from "styled-components";
import { Spring } from "react-spring";

const Card = styled.div`
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.32);
  background-color: white;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.32);
  border-radius: 15px;
  padding: 40px;
  min-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const Loading = styled.span`
  font-size: 30px;
`;

const PlayerPresenter = ({ data, loading, error, player }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles => (
      <Card style={styles}>
        {(() => {
          if (loading) {
            return <Loading>⏰</Loading>;
          } else if (error) {
            return <Loading>⏰</Loading>;
          } else {
            return (
              <React.Fragment>
                <Image src={data.user.avatarUrl} />
                <Mutation mutation={updatePlayerScore()}>
                  {(updatePlayerScore, _) => (
                    <button
                      onClick={() =>
                        updatePlayerScore({
                          variables: {
                            score: Math.floor(Math.random() * 10),
                            player
                          }
                        })
                      }
                    >
                      {data.user.email}{" "}
                      {data.winner === data.user.login && "I win!"}
                    </button>
                  )}
                </Mutation>
              </React.Fragment>
            );
          }
        })()}
      </Card>
    )}
  </Spring>
);

PlayerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  player: PropTypes.string.isRequired
};

export default PlayerPresenter;
