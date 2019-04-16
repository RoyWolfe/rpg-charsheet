import { ITrait } from "./ITraitOfT";

export interface ICollectionTrait<T> extends ITrait<Array<ITrait<T>>> {
  collection: Array<ITrait<T>>;
}
