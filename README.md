# Observable.fromHistory

Create an Observable from a History object.

```js
import createHistory from 'history';

let history = createHistory();

import { Observable } from 'rxjs';
import 'rx-history';

Observable.fromHistory(history)
  .pluck("pathname")
  .tap( (path) => {
    console.log("Path change!", path);
  });
```
