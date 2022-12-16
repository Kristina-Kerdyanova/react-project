// import { useAppSelector } from "../../store/hooks/hooks";
// import { getBookDetails } from "../../store/selectors/detailsBookSelector";
import styled from "styled-components";
import GreyStar from "../../assets/icons/grey_star.svg";

export const Rating = () => {
  return (
    <StyledRating>
      <img src={GreyStar} alt="" />
      <img src={GreyStar} alt="" />
      <img src={GreyStar} alt="" />
      <img src={GreyStar} alt="" />
      <img src={GreyStar} alt="" />
    </StyledRating>
  );

  // const details = useAppSelector(getBookDetails);

  // if (details.rating === "1") {
  //   return (
  //     <StyledRating>
  //       <YellowStar />
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //     </StyledRating>
  //   );
  // } else if (details.rating === "2") {
  //   return (
  //     <StyledRating>
  //       <YellowStar />
  //       <YellowStar />
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //     </StyledRating>
  //   );
  // } else if (details.rating === "3") {
  //   return (
  //     <StyledRating>
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //       <GreyStar />
  //       <GreyStar />
  //     </StyledRating>
  //   );
  // } else if (details.rating === "4") {
  //   return (
  //     <StyledRating>
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //       <GreyStar />
  //     </StyledRating>
  //   );
  // } else if (details.rating === "5") {
  //   return (
  //     <StyledRating>
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //       <YellowStar />
  //     </StyledRating>
  //   );
  // } else if (details.rating === "0") {
  //   return (
  //     <StyledRating>
  //       {" "}
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //       <GreyStar />
  //     </StyledRating>
  //   );
  // } 
};

const StyledRating = styled.div`
  display: flex;
`;