import {Component} from 'react'
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from './feedback/Statistics';
import Section from './feedback/Section';
import Notification from './feedback/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    
    const {good, neutral, bad} = this.state; 
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage ();
    const countTotalFeedback = this.countTotalFeedback();
    const handlClickButton = this.handlClickButton;
    const feedbackBtn = Object.keys(this.state);
  
    return (
      <div>
        <div>
          <Section title="Please leave feedback" >
          {<FeedbackOptions nameBtn = {feedbackBtn} handlClickButton = {handlClickButton}></FeedbackOptions>}
          </Section>
        </div>
  
        <div>
          <Section title="Statistics" >
            {countTotalFeedback > 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            ) :
            <Notification message={"There is no feedback"}/>
            }
          </Section>
        </div>
      </div>
    )
  }
  
  };


