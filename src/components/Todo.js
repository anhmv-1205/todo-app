import React from "react";
import Button from "@atlaskit/button";
import CheckIcon from "@atlaskit/icon/glyph/check";
import styled, { css } from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 30,
};

export default function Todo({ todo, onCheckBtnClick }) {
  return (
    <ButtonStyled
      isDisabled={todo.isCompleted}
      shouldFitContainer
      iconBefore={
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      }
      iconAfter={
        !todo.isCompleted && (
          <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
            <CheckIcon primaryColor="#4fff4f" />
          </span>
        )
      }
    >
      {todo.name}
    </ButtonStyled>
  );
}
