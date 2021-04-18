# STL Surface Area Calculator

### Overview

This is a simple node.js application to parse out STL (stereolithography) files and determine the number of triangles and surface area of the object. This application assumes the STL file being input is of ASCII representation as opposed to binary and therefore will only work with an ASCII STL file.

### How to use

To run this application, you need node installed on your computer. Once you pull the repo and navigate to the folder that contains the application simply type:

```
$ node stlParser.js {location of stl file you would like to use}
```

in the terminal. The application will then run and return an output that appears like:

```
Number of Triangles:  {calculated number of triangles}
Surface Area:  {calculated surface area}
```

This repo comes with two files to use for testing in the `files` subfolder, feel free to use either of these files, or your own ASCII STL file.

### Design decisions

To tackle this challenge, I first had to parse out the STL file and chose to split the data into arrays and subarrays. I used javascript and regex to accomplish this task. The file is initially parsed out to get each "loop", we count the number of loops found to get the total number of triangles in the STL file, We then split those "loops" into smaller arrays points that will make up a triangle, and finally split each of those points up into the 3 vertices that are needed to create that point. After the parsing of the file is finish the the structure of the array is as follows:

```
[ The triangles
  [ The 3 points that create a triangle
    [ The 3 vertices that create a point ]
  ]
]
```

With this array we can then begin the math to calculate the area of each triangle. We begin this process by passing the triangle into a function that will then need to calculate the length of each side of the triangle, and then the area of the triangle. Since we are dealing in 3 dimensions, we need a specific formula to do these calculations. The formula I used for this can be found [here](https://www.triangle-calculator.com/?what=vc). We then take the sum of each triangle's area to determine the surface area of the object.

### Optimisation options

I believe the biggest bottleneck of this application in terms of performace is the parsing of the file and splitting the file into multiple subarrays. To optimise the application I think the best approach would be to look into different ways of doing this. The possibile alternatives that I can currently think of include using a different data structure than arrays, however, I am not sure what data structure that would be at this point in time. Alternatively, we could look into using an outside javacript library to do this for us, but for the purpose of this project I did not go ahead with that approach.
