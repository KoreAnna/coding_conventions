# Example PHP

```php --------------------------------------------------------------- INI SET -

// Change ini settings
ini_set('error_reporting', E_ALL);

```

```php --------------------------------------------------------------- INCLUDE -

// Loads a file
include 'file.php';

```

```php ---------------------------------------------------------------- STRING -

// Generates output
echo '<html>'."\n";

```

```php ----------------------------------------------------------------- ARRAY -

array(
    'files' => array(
        'name' => array(
            0 => 'file0.txt',
            1 => 'file1.html',
        ),
        'type' => array(
            0 => 'text/plain',
            1 => 'text/html',
        ),
        /* etc. */
    ),
);

$array = array();
$array['foo'] = 'bar';
$array['spam'] = 'eggs';
$array[] = 'cockies';

```

```php --------------------------------------------------------------- IF ELSE -

if (
    ($condition1 || $condition2)
&&  ($condition3 === $condition 4)
&&  ($condition5)
) {
    action1();

} elseif (
    ($condition6)
&&  ($condition7 !== $condition8)
) {
    action2();

} else {
    defaultaction();
}

```

```php ---------------------------------------------------------------- SWITCH -

switch ($condition) {
  case 1:
    action1();
  break;

  case 2:
    action2();
  break;

  default:
    defaultaction();
  break;
}

```

```php -------------------------------------------------------------- FUNCTION -

// declaration
function foo()
{
    $fileName = '';
}

// conditional declaration
if (! function_exists('bar')) {
    function bar()
    {
        // function body
    }
}

```

```php ----------------------------------------------------------------- CLASS -

// PHP 5.3 and later:
namespace Vendor\Model;

use Vendor\Package\{ClassA as A, ClassB, ClassC as C};
use Vendor\Package\SomeNamespace\ClassD as D;

use const Vendor\Package\{ConstantA, ConstantB, ConstantC};

use function Vendor\Package\{functionA, functionB, functionC};

class Foo extends Bar implements FooInterface
{
    const VERSION = '1.0';
    const DATE_APPROVED = '2012-06-01';

    public function sampleFunction(int $a, int $b = null): array
    {
        // method body
    }

    final public static function bar()
    {
        // method body
    }
}

```
