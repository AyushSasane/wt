# String Transformation PHP Script

This PHP script allows users to input a string and transforms it into different formats based on the specified operations. It supports the following transformations:

- Convert the string to **all uppercase letters**.
- Convert the string to **all lowercase letters**.
- Capitalize the **first character** of the string.
- Capitalize the **first character of each word** in the string.

## Features

- **Uppercase Conversion**: Converts all characters of the input string to uppercase.
- **Lowercase Conversion**: Converts all characters of the input string to lowercase.
- **First Character Uppercase**: Capitalizes only the first letter of the string while leaving the rest of the string unchanged.
- **First Character of Each Word Uppercase**: Capitalizes the first letter of each word in the string (like a title case).

## Requirements

- PHP 5.3 or later.
- A local server environment like XAMPP, WAMP, MAMP, or a live server to run PHP files.

## Files

1. **string_transform.php**: The main PHP script that performs string transformations and displays the results.

## Installation Instructions

1. Clone or download this repository.
2. Place the `string_transform.php` file into the root directory of your local server (e.g., `htdocs` for XAMPP or MAMP).
3. Make sure your local server (e.g., XAMPP, MAMP) is running.
4. Open a web browser and go to `http://localhost/string_transform.php`.
5. Enter a string in the input field and submit the form to see the transformed strings.

## How It Works

- When you input a string and submit the form, the PHP script processes the string and applies the following transformations:
  - **All Uppercase**: Uses the `strtoupper()` function.
  - **All Lowercase**: Uses the `strtolower()` function.
  - **First Character Uppercase**: Uses the `ucfirst()` function.
  - **First Character of Each Word Uppercase**: Uses the `ucwords()` function.
  
- The results are displayed immediately below the form.

## Example

### Input:

hello world


### Output:

- **All Uppercase**: `HELLO WORLD`
- **All Lowercase**: `hello world`
- **First Character Uppercase**: `Hello world`
- **First Character of Each Word Uppercase**: `Hello World`
