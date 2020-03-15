# Command-Line Scripts and User Input

## Running a Python script from the command line

`__main__` is the name of the scope in which top-level code executes. A module’s `__name__` is set equal to `__main__` when read from standard input, a script, or from an interactive prompt.

A module can discover whether or not it is running in the main scope by checking its own `__name__`, which allows a common idiom for conditionally executing code in a module when it is run as a script or with python -m but not when it is imported:

```python
if __name__ == "__main__":
    # execute only if run as a script
    main()
```
For a package, the same effect can be achieved by including a `__main__.py` module, the contents of which will be executed when the module is run with -m.

## User Input During Runtime

Updated and replaced in Python 3: `raw_input()` is now `input()`.

If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised. Example:

```
<<< s = input('--> ')
>>> --> Amman 401 Class
<<< s
>>> "Amman 401 Class"
```

If the `readline` module was loaded, then `input()` will use it to provide elaborate line editing and history features.
