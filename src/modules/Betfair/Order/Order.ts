import { RunnerChange, StreamMessageOrderChange } from '@modules/Betfair';
import { createRunner, Runner } from '../Runner/Runner';

type OrderProps = {
  id: string;
};

export interface Order {
  id: () => string;
  updateCache: (msg: StreamMessageOrderChange) => void;
}

export const createOrder = (props: OrderProps): Order => {
  function _init() {
    console.log (props);
  }

  function updateCache(mChange: StreamMessageOrderChange) {}

  _init ();
  return {
    id: () => props.id,
    updateCache,
  };
};
