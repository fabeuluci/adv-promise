# Adv-Promise
Promise utils

# Usage
Create deferred
```
import { PromiseUtils, Deferred } from "adv-promise";

const defer: Deferred<number> = PromiseUtils.defer(); // Create deferred
defer.promise; // get promise
defer.resolve(100); // resolve deferred
defer.reject(new Errro("some error")); // reject deferred
```

Create promise from callback
```
import { PromiseUtils } from "adv-promise";
import * as fs from "fs";

function readFile(path: string): Promise<Buffer> {
    return PromiseUtils.promisify<Buffer>(callback => fs.readFile(path, callback));
}
```

# License
MIT