# Image-Squareify
A script to `squareify` images

### Installation
* Install NodeJS version 14.15.3 or later.
* Install dependencies with `npm i`

### Configuration
cnfg.json contains the following parameters:

key | values | description
------ | ------| ------
size | [0-Infinity] | how big the squares should be
density | [0-1] | How dense the squares should be
### Execution
Create a PNG called `in.png` in the directory
Run index.js. An image called out.png will be created in the current directory.
The higher the `density` value is, the longer it will take.

### Sample input / output
![Sample input](/images/in.png)
![Sample output](/images/out.png)  
Original image source [link](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mona_Lisa.PNG/128px-Mona_Lisa.PNG)