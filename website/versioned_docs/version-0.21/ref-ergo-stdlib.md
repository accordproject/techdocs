---
id: ref-ergo-stdlib
title: Standard Library
original_id: ref-ergo-stdlib
---

The following libraries are provided with the Ergo compiler.

## Stdlib

The following functions are in the `org.accordproject.ergo.stdlib` namespace and available by default.

### Functions on Integer

| Name | Signature | Description |
|------|-----------|-------------|
| `integerAbs`  | `(x:Integer) : Integer` | Absolute value |
| `integerLog2`  | `(x:Integer) : Integer` | Base 2 integer logarithm |
| `integerSqrt`  | `(x:Integer) : Integer` | Integer square root |
| `integerToDouble`  | `(x:Integer) : Double` | Cast to a Double |
| `integerModulo`  | `(x:Integer, y:Integer) : Integer` | Integer remainder |
| `integerMin`  | `(x:Integer, y:Integer) : Integer` | Smallest of `x` and `y`  |
| `integerMax`  | `(x:Integer, y:Integer) : Integer` | Largest of `x` and `y`  |

### Functions on Long

| Name | Signature | Description |
|------|-----------|-------------|
| `longAbs`  | `(x:Long) : Long` | Absolute value |
| `longLog2`  | `(x:Long) : Long` | Base 2 long logarithm |
| `longSqrt`  | `(x:Long) : Long` | Long square root |
| `longToDouble`  | `(x:Long) : Double` | Cast to a Double |
| `longModulo`  | `(x:Long, y:Long) : Long` | Long remainder |
| `longMin`  | `(x:Long, y:Long) : Long` | Smallest of `x` and `y`  |
| `longMax`  | `(x:Long, y:Long) : Long` | Largest of `x` and `y`  |

### Functions on Double

| Name | Signature | Description |
|------|-----------|-------------|
| `abs`  | `(x:Double) : Double` | Absolute value |
| `sqrt`  | `(x:Double) : Double` | Square root |
| `exp`  | `(x:Double) : Double` | Exponential |
| `log`  | `(x:Double) : Double` | Natural logarithm |
| `log10`  | `(x:Double) : Double` | Base 10 logarithm |
| `ceil`  | `(x:Double) : Double` | Round to closest integer above |
| `floor`  | `(x:Double) : Double` | Round to closest integer below |
| `truncate`  | `(x:Double) : Integer` | Cast to an Integer |
| `doubleToInteger`  | `(x:Double) : Integer` | Same as `truncate` |
| `doubleToLong`  | `(x:Double) : Long` | Cast to a Long |
| `minPair`  | `(x:Double, y:Double) : Double` | Smallest of `x` and `y`  |
| `maxPair`  | `(x:Double, y:Double) : Double` | Largest of `x` and `y`  |

### Functions on String

| Name | Signature | Description |
|------|-----------|-------------|
| `length` | `(x:String) : Integer` | Prints length of a string |
| `encode` | `(x:String) : String` | Encode as URI component |
| `decode` | `(x:String) : String` | Decode as URI component |
| `doubleOpt` | `(x:String) : Double?` | Cast to a Double |
| `double` | `(x:String) : Double` | Cast to a Double or NaN |
| `integerOpt` | `(x:String) : Integer?` | Cast to an Integer |
| `integer` | `(x:String) : Integer` | Cast to a Integer or 0 |
| `longOpt` | `(x:String) : Long?` | Cast to a Long |
| `long` | `(x:String) : Long` | Cast to a Long or 0 |

### Functions on Arrays

| Name | Signature | Description |
|------|-----------|-------------|
| `count` | (x:Any[]) : Integer | Number of elements |
| `flatten` | (x:Any[][]) : Any[] | Flattens a nested array |
| `arrayAdd`  | `(x:Any[],y:Any[]) : Any[]` | Array concatenation |
| `arraySubtract`  | `(x:Any[],y:Any[]) : Any[]` | Removes elements of `y` in `x` |
| `inArray`  | `(x:Any,y:Any[]) : Boolean` | Whether `x` is in `y` |
| `containsAll`  | `(x:Any[],y:Any[]) : Boolean` | Whether all elements of `y` are in `x` |
| `distinct`  | `(x:Any[]) : Any[]` | Duplicates elimination |
| `singleton` | `(x:Any[]) : Any?` | Single value from singleton array |

*Note*: For most of these functions, the type-checker infers more precise types than indicated here. For instance `concat([1,2],[3,4])` will return `[1,2,3,4]` and have the type `Integer[]`.

### Log functions

| Name | Signature | Description |
|------|-----------|-------------|
| `logString` | (x:String) : Unit | Adds string to the log |

### Aggregate functions

| Name | Signature | Description |
|------|-----------|-------------|
| `max` | (x:Double[]) : Double | The largest element in `x` |
| `min` | (x:Double[]) : Double | The smallest element in `x` |
| `sum` | (x:Double[]) : Double | Sum of the elements in `x` |
| `average` | (x:Double[]) : Double | Arithmetic mean |

### Math functions

| Name | Signature | Description |
|------|-----------|-------------|
| `acos` | (x:Double) : Double | The inverse cosine of x |
| `asin` | (x:Double) : Double | The inverse sine of x |
| `atan` | (x:Double) : Double | The inverse tangent of x |
| `atan2` | (x:Double, y:Double) : Double | The inverse tangent of `x / y` |
| `cos` | (x:Double) : Double | The cosine of x |
| `cosh` | (x:Double) : Double | The hyperbolic cosine of x |
| `sin` | (x:Double) : Double | The sine of x |
| `sinh` | (x:Double) : Double | The hyperbolic sine of x |
| `tan` | (x:Double) : Double | The tangent of x |
| `tanh` | (x:Double) : Double | The hyperbolic tangent of x |

### Other functions

| Name | Signature | Description |
|------|-----------|-------------|
| `failure` | `(x:String) : ErgoErrorResponse` | Ergo error from a string |
| `toString` | `(x:Any) : String` | Prints any value to a string |
| `toText` | `(x:Any) : String` | Template variant of `toString` (internal) |

## Time

The following functions are in the `org.accordproject.time` namespace and are available by importing that namespace.
They rely on the [time.cto](https://models.accordproject.org/v2.0/time.html) types from the Accord Project models.

### Functions on DateTime

| Name | Signature | Description |
|------|-----------|-------------|
| `now`  | `() : DateTime` | Returns the time when execution started |
| `dateTime` | `(x:String) : DateTime` | Parse a date and time |
| `getSecond` | `(x:DateTime) : Long` | Second component of a DateTime |
| `getMinute` | `(x:DateTime) : Long` | Minute component of a DateTime |
| `getHour` | `(x:DateTime) : Long` | Hour component of a DateTime |
| `getDay` | `(x:DateTime) : Long` | Day of the month component of a DateTime |
| `getWeek` | `(x:DateTime) : Long` | Week of the year component of a DateTime |
| `getMonth` | `(x:DateTime) : Long` | Month component in a DateTime |
| `getYear` | `(x:DateTime) : Long` | Year component in a DateTime |
| `isAfter` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` if after `y` |
| `isBefore` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` is before `y` |
| `isSame` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` is the same DateTime as `y` |
| `dateTimeMin` | `(x:DateTime[]) : DateTime` | The earliest in an array of DateTime |
| `dateTimeMax` | `(x:DateTime[]) : DateTime` | The latest in an array of DateTime |
| `format` | `(x:DateTime,f:String) : String` | Prints date `x` according to [format](markup-variables#datetime-formats) `f` |

### Functions on Duration

| Name | Signature | Description |
|------|-----------|-------------|
| `durationAs` | `(x:Duration, y:TemporalUnit) : Duration` | Change the unit for duration `x` to `y` |
| `diffDurationAs` | `(x:DateTime, y:DateTime, z:TemporalUnit) : Duration` | Duration between `x` and `y` in unit `z` |
| `diffDuration` | `(x:DateTime, y:DateTime) : Duration` | Duration between `x` and `y` in seconds |
| `addDuration` | `(x:DateTime, y:Duration) : DateTime` | Add duration `y` to `x` |
| `subtractDuration` | `(x:DateTime, y:Duration) : DateTime` | Subtract duration `y` to `x` |
| `divideDuration` | `(x:Duration, y:Duration) : Double` | Ratio between durations `x` and `y` |

### Functions on Period

| Name | Signature | Description |
|------|-----------|-------------|
| `diffPeriodAs` | `(x:DateTime, y:DateTime, z:PeriodUnit) : Period` | Time period between `x` and `y` in unit `z` |
| `addPeriod` | `(x:DateTime, y:Period) : DateTime` | Add time period `y` to `x` |
| `subtractPeriod` | `(x:DateTime, y:Period) : DateTime` | Subtract time period `y` to `x` |
| `startOf` | `(x:DateTime, y:PeriodUnit) : DateTime` | Start of period `y` nearest to DateTime `x` |
| `endOf` | `(x:DateTime, y:PeriodUnit) : DateTime` | End of period `y` nearest to DateTime `x` |

