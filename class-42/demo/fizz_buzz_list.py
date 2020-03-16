from fizz_buzz_basic import fizz_buzz_basic_function as fizzbuzz

def fizz_buzz_list():
    """
    Ask user for a number
    Iterate over numbers from 1 to the entered number
    Print out fizzbuzz result in each ieteration
    """
    number = input('Enter a number: ')
    print(type(number))
    for num in range( 1, int(number) + 1 ):
        print(fizzbuzz(num))

fizz_buzz_list()
