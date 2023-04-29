# naming-convention-types

Validate naming convention of string type.

```ts
import {
  ValidateUpperSnakeCase,
  ValidateCamelCase
} from 'naming-convention-type'

ValidateUpperSnakeCase<'Foo'> // never
ValidateUpperSnakeCase<'FOO_BAR'> // 'FOO_BAR'

ValidateCamelCase<'Foo'> // never
ValidateCamelCase<'foo_bar'> // never
ValidateCamelCase<'fooBar'> // 'fooBar'
```
