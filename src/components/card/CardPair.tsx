import "./CardPair.css";
import target from '../../image/target.svg';

interface test {
  symbol: string;
  digits: number;
  ask: number;
  bid: number;
  change: number;
  change24h: number;
  lasttime: number;
}

export interface Prices {
  AUDUSD: test;
  AUDCAD: test;
  AUDCHF: test;
  AUDJPY: test;
  CADCHF: test;
  CADJPY: test;
  AUDNZD: test;
  EURCHF: test;
  EURGBP: test;
  EURJPY: test;
  CHFJPY: test;
  EURAUD: test;
  EURCAD: test;
  EURNZD: test;
  EURUSD: test;
  GBPUSD: test;
  NZDCAD: test;
  GBPCHF: test;
  GBPJPY: test;
  GBPAUD: test;
  GBPCAD: test;
  NZDUSD: test;
  USDCAD: test;
  USDCHF: test;
  USDJPY: test;
  NZDCHF: test;
  NZDJPY: test;
  GBPNZD: test;
}

interface CardPairProps {
  namePair: keyof Prices;
  prices: Prices;
}

const CardPair: React.FC<CardPairProps> = ({ namePair, prices }) => {
  return (
    <div className="uk-card uk-border-rounded uk-box-shadow-medium uk-width-small uk-height-small uk-margin-small-top uk-margin-small-bottom uk-margin-small-left uk-margin-small-right card-my">
      <div className="uk-flex">
        <div className="uk-card uk-card-primary uk-border-rounded uk-margin-small-left uk-margin-small-top uk-margin-small-right  uk-width-3-5 card-my__name">
          {/* <h3 className="uk-card-title"></h3> */}
          {namePair}: {prices[namePair].ask}
        </div>
        <button className="uk-button uk-button-primary uk-button-small uk-border-rounded uk-width-1-6 uk-margin-small-top card-my__button-target">
          {/* <img src={target} alt="target"  /> */}
          sdsds
        </button>
      </div>
    </div>
  );
};

export default CardPair;
