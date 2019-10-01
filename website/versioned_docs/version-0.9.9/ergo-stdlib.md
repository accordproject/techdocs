---
id: version-0.9.9-ergo-stdlib
title: Standard Library
original_id: ergo-stdlib
---

The following functions are in the `org.accordproject.ergo.stdlib` namespace and available by default.

## Functions on Integer

| Name | Signature | Description |
|------|-----------|-------------|
| `integerAbs`  | `(x:Integer) : Integer` | Absolute value |
| `integerLog2`  | `(x:Integer) : Integer` | Base 2 integer logarithm |
| `integerSqrt`  | `(x:Integer) : Integer` | Integer square root |
| `integerToDouble`  | `(x:Integer) : Double` | Cast to a Double |
| `integerMod`  | `(x:Integer, y:Integer) : Integer` | Integer remainder |
| `integerMin`  | `(x:Integer, y:Integer) : Integer` | Smallest of `x` and `y`  |
| `integerMax`  | `(x:Integer, y:Integer) : Integer` | Largest of `x` and `y`  |

## Functions on Double

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
| `doubleToInteger`  | `(x:Double) : Integer` | Same as `truncate`  |
| `minPair`  | `(x:Double, y:Double) : Double` | Smallest of `x` and `y`  |
| `maxPair`  | `(x:Double, y:Double) : Double` | Largest of `x` and `y`  |

## Functions on Arrays

| Name | Signature | Description |
|------|-----------|-------------|
| `count` | (x:Any[]) : Integer | Number of elements |
| `flatten` | (x:Any[][]) : Any[] | Flattens a nested array |
| `arrayAdd`  | `(x:Any[],y:Any[]) : Any[]` | Array concatenation |
| `arraySubstract`  | `(x:Any[],y:Any[]) : Any[]` | Removes elements of `y` in `x` |
| `inArray`  | `(x:Any,y:Any[]) : Boolean` | Whether `x` is in `y` |
| `containsAll`  | `(x:Any[],y:Any[]) : Boolean` | Whether all elements of `y` are in `x` |
| `distinct`  | `(x:Any[]) : Any[]` | Duplicates elimination |

*Note*: For most of these functions, the type-checker infers more precise types than indicated here. For instance `concat([1,2],[3,4])` will return `[1,2,3,4]` and have the type `Integer[]`.

## Aggregate functions

| Name | Signature | Description |
|------|-----------|-------------|
| `max` | (x:Double[]) : Double | The largest element in `x` |
| `min` | (x:Double[]) : Double | The smallest element in `x` |
| `sum` | (x:Double[]) : Double | Sum of the elements in `x` |
| `average` | (x:Double[]) : Double | Arithmetic mean |

## Math functions

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

## Functions on DateTime & Duration

| Name | Signature | Description |
|------|-----------|-------------|
| `now`  | `() : DateTime` | Returns the time when execution started |
| `dateTime` | `(x:String) : DateTime` | Parse a date and time |
| `dateTimeDayOfMonth` | `(x:DateTime) : Double` | Date of the month |
| `dateTimeMonth` | `(x:DateTime) : Double` | The date's month |
| `dateTimeQuarter` | `(x:DateTime) : Double` | The date's quarter (from 1.0 to 4.0) |
| `dateTimeYear` | `(x:DateTime) : Double` | The date's year |
| `dateTimeIsAfter` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` if after `y` |
| `dateTimeIsBefore` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` is before `y` |
| `dateTimeIsSame` | `(x:DateTime, y:DateTime) : Boolean` | Whether `x` is the same DateTime as `y` |
| `dateTimeSubtract` | `(x:DateTime, y:Duration) : DateTime` | Subtract duration `y` from `x` |
| `dateTimeAdd` | `(x:DateTime, y:Duration) : DateTime` | Add duration `y` to `x` |
| `dateTimeDiff` | `(x:DateTime, y:DateTime) : Duration` | Duration between `x` and `y` |
| `dateTimeDiffDays` | `(x:DateTime, y:DateTime) : Double` | Days between `x` and `y` |
| `dateTimeDiffSeconds` | `(x:DateTime, y:DateTime) : Double` | Seconds between `x` and `y` |
| `dateTimeStartOfDayOfMonth` | `(x:DateTime) : DateTime` | The start of the day |
| `dateTimeStartOfMonth` | `(x:DateTime) : DateTime` | The start of the month |
| `dateTimeStartOfQuarter` | `(x:DateTime) : DateTime` | The start of the quarter |
| `dateTimeStartOfYear` | `(x:DateTime) : DateTime` | The start of the year |
| `dateTimeEndOfDayOfMonth` | `(x:DateTime) : DateTime` | The end of the day |
| `dateTimeEndOfMonth` | `(x:DateTime) : DateTime` | The end of the month |
| `dateTimeEndOfQuarter` | `(x:DateTime) : DateTime` | The end of the quarter |
| `dateTimeEndOfYear` | `(x:DateTime) : DateTime` | The end of the year |

## Other functions

| Name | Signature | Description |
|------|-----------|-------------|
| `toString` | `(x:Any) : String` | Prints any value to a string |
| `failure` | `(x:String) : ErgoErrorResponse` | Ergo error from a string |

