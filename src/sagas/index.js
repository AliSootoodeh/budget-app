import * as entriesSaga from "./entriesSaga";
import { deleteEntrySaga } from "./entriesSagaDeletion";
export function initSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(deleteEntrySaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
}
