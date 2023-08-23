import Header from "./Header"
import ContestList from "./ContestList";

const App = ({ initialData }) => {
  return (
    <div className="container">
      <Header message="Naming Contests" />

      <ContestList initialContests={initialData.contests} />
    </div>
  );
};

export default App;
