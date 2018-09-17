## Origami WebGL Runtime
This is the official WebGL runtime for the Origami Definition Language.

### Usage
#### Browser
```html
<script type="application/javascript" src="browser.min.js"></script>
<script type="application/origami">
# paper: square

--bottom: --(.b .c)
fold .a to .b
fold --bottom to --^1
</script>
```

#### As a module
```js
import OrigamiRuntime from '@origami-dsl/webgl';

const code = `
# paper: square

--bottom: --(.b .c)
fold .a to .b
fold --bottom to --^1
`;

let runtime = new OrigamiRuntime();
runtime.start();
```
