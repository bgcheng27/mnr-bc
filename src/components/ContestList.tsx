import ContestPreview from "./ContestPreview";
import { useEffect, useState } from "react";
import { fetchContests } from "../api-client";

const ContestList = ({ initialContests }) => {
  const [contests, setContests] = useState(initialContests);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContestList;
