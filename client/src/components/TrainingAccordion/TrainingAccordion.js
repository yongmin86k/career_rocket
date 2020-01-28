import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import THEME from "../../theme";
import styles from "./styles";
import PropTypes from "prop-types";

const StyledAccordion = styled.div`
  width: 100%;
  height: 32px;
  border: solid 1px ${THEME.colors.lightGrey};
  display: flex;
  align-items: center;
  padding-left: 6px;
  padding-right: 8px;
  border-radius: 4px;
  background-color: white;
  ${({ active }) => !active && `margin-bottom: 8px;`};

  &:active {
    background-color: ${THEME.colors.lightGrey};
  }
`;

const StyledArrow = styled.img`
  flex: none;
  width: 18px;
  height: 18px;
  margin-right: 2px;
  transition: ${THEME.transition};
  transition-duration: 200ms;
  ${({ active }) =>
    active ? `transform: rotate(0deg)` : `transform: rotate(-90deg)`}
`;

const TrainingAccordion = ({ title, data }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <StyledAccordion
        active={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <StyledArrow
          src="/images/ic-chevron-down-grey.svg"
          alt={
            title === "preArr"
              ? "Prearranged"
              : title === "overDate"
              ? "Overdated"
              : "In process"
          }
          active={isOpen}
        />
        <p style={styles.accordionTitle}>
          {title === "preArr"
            ? "Prearranged"
            : title === "overDate"
            ? "Overdated"
            : "In process"}
        </p>

        <p style={styles.accordionNum(title)}>{data.length}</p>
      </StyledAccordion>

      {isOpen &&
        (data.length === 0 ? (
          <div style={styles.contentNoData}>There is no course yet.</div>
        ) : (
          data.map((item, index) => {
            return (
              <div
                key={`${title}_${index}`}
                style={styles.contentBox({
                  lastChild: index === data.length - 1
                })}
              >
                <div style={styles.wrapper}>
                  <p style={styles.periods}>{`${moment(item.dateStart).format(
                    "YYYY-MM-DD"
                  )} ~ ${moment(item.dateEnd).format("YYYY-MM-DD")}`}</p>

                  <h5 style={styles.title}>{item.title}</h5>
                </div>

                {index !== data.length - 1 && <div style={styles.separator} />}
              </div>
            );
          })
        ))}
    </>
  );
};

export default TrainingAccordion;

TrainingAccordion.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
