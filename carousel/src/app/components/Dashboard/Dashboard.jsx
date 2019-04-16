import React from 'react';
import Carousel from '../Carousel/Carousel';
import CreditScore from '../CreditScore/CreditScore';
import LongTermDebt from '../LongTermDebt/LongTermDebt';
import CreditService from '../../services/Credit';
import bemHelper from '../../utils/bem';

import './dashboard.scss';

const cn = bemHelper({ block: 'dashboard' });

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  render() {
    console.log(this.state.data);
    const data = this.state.data;
    return (
      <div className={cn(null, 'main')}>
        <div className={cn('carousel-container')}>
          {data
          ? <Carousel slides={[
            <CreditScore
              score={data.score || 0}
              max={data.maxScoreValue || 0}
              bandDescription={data.equifaxScoreBandDescription}
            />,
            <LongTermDebt
              total={data.currentLongTermDebt || 0}
              limit={data.currentLongTermCreditLimit || 0 + data.currentShortTermCreditLimit || 0}
              change={data.changeInLongTermDebt}
            />,
            <div>Add as many slides as you want</div>
          ]}/>
          : 'Loading data...'
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    CreditService.get().then(data => this.setState({data}));
  }
}

