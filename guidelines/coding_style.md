# Coding Style

## Files

- Encoding : `UTF-8`
- Line Ending : Unix `LF` (linefeed) `\n`
- Indent : `4 spaces`, NO tabs
- End of file: newline
- Line length : 120 characters
- NO trailing whitespace at the end of lines

## Code

- Variable names : `lowercase_with_underscore_separators` $test_test
- Constant names : `UPPERCASE_WITH_UNDERSCORE_SEPARATORS` TEST_TEST
- Method names : `camelCase` functionName
- Class names : `StudlyCaps` ClassName

## PHP : PSR-1 + PSR-12

- Long PHP tag :
    `<?php    ?>`
- Never close php-file with `?>`
- Short echo :
    `<?= "Text"; ?>`
    `<?= function(); ?>`
- Short if-else :
    `condition ? true : false`
- Counting variables : `$i, $i1, $i2, ...`
- Controle structures functions (statements) which `HAVE space` between name and bracket
    - do / while
    - for / foreach
    - if / elseif
    - switch
- Other functions (statements) `DON'T HAVE space` between name and bracket
- Function arguments SHOULD be separated by spaces,
    however, there should be NO spaces between the arguments and the opening/closing brackets,
    like `function test_test($test1, $test2)`
- If string contains no variables, use `single quotes` 'text'
- Associative array keys : within `single quotes` and `lowercase_with_underscore_separators`
- Use lowercase for boolean `true / false`
- Use `===` by compare
- By concatenate strings with dot, there should be `NO spaces` on the sides of it,
    like `'text1'.'text2'."/n"`

## Links

- [PHP Standards Recommendations](https://www.php-fig.org/psr/)