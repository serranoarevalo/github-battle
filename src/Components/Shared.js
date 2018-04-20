import styled from "styled-components";

const Button = styled.input`
  margin-top: 40px;
  background: ${props =>
    props.disabled
      ? "grey"
      : "#0a2acc radial-gradient(farthest-side at 50% 0, #0a2acc 0, #1717a6 100%)"};
  padding: 0 20px;
  line-height: 55px;
  height: 55px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  transition: transform 0.15s;
  user-select: none;
  text-align: center;
  outline: none;
  min-width: 255px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  ${props =>
    !props.disabled && "box-shadow: 0 10px 25px 0 rgba(23, 23, 166, 0.5)"};
  text-decoration: none;
`;

export { Button };
