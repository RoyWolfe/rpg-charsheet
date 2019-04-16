import { ITrait } from "./ITraitOfT";
import { ICollectionTrait } from "./ICollectionTrait";

export class CollectionTrait<T> implements ICollectionTrait<T> {
  constructor(traits: Array<ITrait<T>>) {
    this.collection = traits;
  }

  name: string = "Collection Trait";
  serializationIdentifier: string = "de.royderwolf.rpgsheet.collectiontrait";
  collection: ITrait<T>[];

  get Value() {
    return this.collection;
  }
}
