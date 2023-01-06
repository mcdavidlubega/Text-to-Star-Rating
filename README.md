# Text Rating To Stars

Quick javascript setup to convert a div with a number rating to a star rating.

This implementation supports a rating of 1 to 5 with allowance for 1 decimal place. eg 1.0. You can also use just plain integers eg 1.

The ratings takes into account the interger value of the rating rounded down and the float part of the interger.

The rounded down integer value is used to generate a number of filled stars.

The float (decimal) part is used to fill a star with increments of 10%. So .1 = 10%, .2 = 20%.
