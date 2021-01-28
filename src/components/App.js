import { Switch, Route } from "react-router-dom";
import Landing from "../components/pages/Landing";
import EnterPIN from "../components/pages/EnterPIN";
import GeneratePIN from "../components/pages/GeneratePIN";
import GiveFeedback1 from "../components/pages/GiveFeedback1";
import GiveFeedback2 from "../components/pages/GiveFeedback2";
import GiveFeedback3 from "../components/pages/GiveFeedback3";
import FeedbackSent from "../components/pages/FeedbackSent";
import ViewFeedback from "../components/pages/ViewFeedback";
import "../stylesheets/App.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/EnterPIN" component={EnterPIN} />
      <Route path="/GeneratePIN" component={GeneratePIN} />
      <Route path="/GiveFeedback1" component={GiveFeedback1} />
      <Route path="/GiveFeedback2" component={GiveFeedback2} />
      <Route path="/GiveFeedback3" component={GiveFeedback3} />
      <Route path="/FeedbackSent" component={FeedbackSent} />
      <Route path="/ViewFeedback" component={ViewFeedback} />
    </Switch>
  );
}

export default App;
