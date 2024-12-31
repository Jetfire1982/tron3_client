import "./CardPair.css";
import target from "../../image/target.svg";
import { DOMAttributes, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { statusState } from "../../reducers/statusReducer";

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

// declare namespace React2 {
// interface DetailedHTMLProps<T> extends DOMAttributes<T> {
//     container?: string;
// }
// }

// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>

const CardPair: React.FC<CardPairProps> = ({ namePair, prices }) => {
  let modal = true;
  let containerTest = false;

  let [val, setVal] = useState(undefined)
  const test567: statusState = useSelector<RootState>((state) => state.status) as statusState; 

  console.log("namePair = ", namePair, "test456 = ",test567.test3)

  let test = () => {
    console.log("click, namePair = ", namePair);
  };

  let test123 = () => {
    console.log("!!!Closed MODAL pair = ", namePair);
  };

  return (
    <>
      <div className="uk-card uk-border-rounded uk-box-shadow-medium uk-width-small uk-height-small uk-margin-small-top uk-margin-small-bottom uk-margin-small-left uk-margin-small-right card-my">
        <div className="uk-flex">
          <div className="uk-card uk-card-primary uk-border-rounded uk-margin-small-left uk-margin-small-top uk-margin-small-right  uk-width-3-5 card-my__name">
            {/* <h3 className="uk-card-title"></h3> */}
            {namePair}: {prices[namePair].ask}
          </div>
          <button
            // uk-toggle="target: #my-id2"
            uk-toggle={`target: #${namePair}`}
            className="uk-button uk-button-primary uk-button-small uk-border-rounded uk-width-1-6 uk-margin-small-top card-my__button-target"
            onClick={test}
            // style={{background: "lightgreen"}}
          >
            <img src={target} className="card-my__img-target" alt="target" />
            {/* sdsds */}
          </button>
        </div>

        <div
          id={namePair}
          uk-modal={modal.toString()}
          container={containerTest.toString()}
        >
          <div className="uk-modal-dialog uk-modal-body">
            <h3 className="uk-modal-title">
              Set target values for {namePair}{" "}
            </h3>
            <form>
              <div className="uk-flex uk-flex-wrap">
                <input
                  className="uk-input uk-form-small uk-margin-right uk-margin-small-bottom uk-width-1-3"
                  type="text"
                  placeholder="Enter the target value"
                  value={val}
                  // onChange={(e) => changePas(e)}
                />
                <input
                  className="uk-input uk-form-small uk-width-1-2"
                  type="text"
                  placeholder="Enter the descripion"
                />
                <input
                  className="uk-input uk-form-small uk-margin-right uk-margin-small-bottom uk-width-1-3"
                  type="text"
                  placeholder="Enter the target value"
                />
                <input
                  className="uk-input uk-form-small uk-width-1-2"
                  type="text"
                  placeholder="Enter the descripion"
                />
                <input
                  className="uk-input uk-form-small uk-margin-right uk-margin-small-bottom uk-width-1-3"
                  type="text"
                  placeholder="Enter the target value"
                />
                <input
                  className="uk-input uk-form-small uk-width-1-2"
                  type="text"
                  placeholder="Enter the descripion"
                />
                <input
                  className="uk-input uk-form-small uk-margin-right uk-margin-small-bottom uk-width-1-3"
                  type="text"
                  placeholder="Enter the target value"
                />
                <input
                  className="uk-input uk-form-small uk-width-1-2"
                  type="text"
                  placeholder="Enter the descripion"
                />
                <input
                  className="uk-input uk-form-small uk-margin-right uk-margin-small-bottom uk-width-1-3"
                  type="text"
                  placeholder="Enter the target value"
                />
                <input
                  className="uk-input uk-form-small uk-width-1-2"
                  type="text"
                  placeholder="Enter the descripion"
                />
                {/* <div className="uk-width-1-2" style={{border: "1px solid green", height: "25px"}}></div>
                <div className="uk-width-1-2" style={{border: "1px solid blue", height: "25px"}}></div>
                <div className="uk-width-1-3" style={{border: "1px solid red", height: "25px"}}></div> */}
              </div>
            </form>
            <button
              className="uk-button uk-button-primary uk-margin-small-right uk-margin-small-top"
              onClick={() => test123()}
            >
              Test 123
            </button>
            <button className="uk-modal-close" type="button" onClick={test123}>
              {namePair}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPair;
