import doctest

def fizz_buzz_basic_function(num):
    """
    Returns fizz if number is divisible by 3 only
    Returns buzz if number is divisible by 5 only
    Returns fizzbuzz if number is divisible by 3 and 5
    Returns num otherwise

    >>> fizz_buzz_basic_function(7)
    7
    >>> fizz_buzz_basic_function(6)
    'fizz'
    >>> fizz_buzz_basic_function(5)
    'buzz'
    >>> fizz_buzz_basic_function(15)
    'fizzbuzz'

    """

    if num%3 == 0 and num%5 == 0:
        return 'fizzbuzz'
    elif num%3 == 0:
        return 'fizz'
    elif num%5 == 0:
        return 'buzz'
    else:
        return num+1


if __name__ == "__main__":
    doctest.testmod()
# print(fizz_buzz_basic(15))
# print(fizz_buzz_basic(3))
# print(fizz_buzz_basic(5))
# print(fizz_buzz_basic(9))
# print(fizz_buzz_basic(7))
