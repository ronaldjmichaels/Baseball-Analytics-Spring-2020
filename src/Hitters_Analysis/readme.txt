File name: Ronald Michaels - Baseball Analytics Final Report

The purpose of this file is to predict statistics (Batting Average (AVG), On Base Percentage (OBP), Slugging Percentage (SLG), 
and On Base Plus Slugging (OPS)) for each of the eligible University of Rochester hitters. The .Rmd file consists of coach 
predictions, weighted values over a players career, percent altered true values, and multiple linear regression for analysis. 
The end of the file contains a final breakdown of the predictions versus the computer ouput. 

File name: Hitting_Report.rmd

This file is set up to create weekly reports using the metrics provided by the Blast Motion Sensors.

When ran, it will create a .pdf report for a particular player's data for the week.

To create a report for a player:
1. download the swing data for the time period as a .csv file from Blast Motion
2. in the second chunk of code, change the "path" variable to the path of the downloaded file
3. at the top of the rmd code file, change "author:" to the player's name and "date:" to the week/time period of the data
4. (optional, delete if you don't want it) to make it look a bit more professional, I added the UR Baseball logo using this chunk of code:
    \begin{center}
    \includegraphics{C:/Users/Maya/Documents/Baseball/baseball_logo.png}  
    \end{center}
    the png file is also in this google drive, download it and change the path in the code to your path if you want to keep it
5. run the code (don't knit yet) so that you can look at the player's numbers for the week
6. based off of their numbers, adjust the "conclusion" for each metric accordingly. It'll print out the percentage of swings above,
below, and within the desired range, so for the most part all you'd have to do is add suggestions if they're outside the range.
7. knit to pdf and upload to the player's google drive.

File name: baseball_analysis.ipynb
This is the Python notebook used to do the Blast Motion analysis. It performs a clustering analysis on the Blast Motion 
metrics and then performs a linear regression using the Blast Motion data as inputs and batting average, OPS, slugging percentage, 
and on base percentage as outputs.  

File name: LL_analysis.ipynb
This is the Jupyter notebook to create models to predict AVG, OPS, OBP, and SLG% for players based off of their past performance. 
