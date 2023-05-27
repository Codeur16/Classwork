import React, {FunctionComponent} from 'react';
import Accueil from './pages/Accueil';
import Singing from './pages/Auth/Singin'
import login from './pages/Auth/login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import dashboard from './pages/dashbord';
//import Sidebar from './components/style/sidebar';
import Evaluation from './pages/Evaluation/evaluation-accueil';
import cours from './pages/cours/cours-1';
import devoirs from './pages/devoirs/devoir-1';
import compte from './pages/compte/compte-1';
import help from './pages/help';
import statistique from './pages/statistique/statistique-1'
// import Quiz from './components/quizForm';
// import Input2 from './components/input2';
// import QuestionComponent from './pages/Evaluation/QuestionComponent';

const App: FunctionComponent = () => {

 return (
   <Router>
   { <div>
  {/* gestion des routes */}
  <Switch>
  <Route exact path="/" component={Accueil} />
  <Route exact path="/login" component={login}/>
   <Route exact path="/signin" component={Singing} />
  <Route exact path="/dashboard" component={dashboard} />
  <Route exact path="/Evaluation" component={Evaluation} />
  <Route exact path="/cours" component={cours} />
  <Route exact path="/devoir" component={devoirs} />
  <Route exact path="/compte" component={compte} />
  <Route exact path="/help" component={help} />
  <Route exact path="/statistique" component={statistique} />
  {/* <Route exact path="/quiz" component={Quiz} /> */}
  {/* <Route exact path="/quiz-form" component={Question} /> */}

  
   <Route component={PageNotFound} />
  
  </Switch>
    </div>}
   </Router>
 )
}

export default App; 