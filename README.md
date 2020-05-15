# University of Rochester Baseball


This is a repository started by R.J. Michaels, Luke Gerstner, John Polimeni, and Maya Haigis from our independent study under Professor Brendan Mort during the spring semester of 2020. This repository is to keep track of all the data and code used for working with the U of R's baseball team.

### Contents
***
This repository has a data folder and src folder. <Br>
The src folder contains multiple subfolders which are:
  * `Pitch_Tracking_Website` - 
     * Contains code that was used to create pitch tracking website for use during practices
     * pitch_tracking.html - main html code for the pitch tracking website
     * jquery_pitch_tracking.js - javascript file for pitch tracking website
  * `Pitch_Tracking_Analysis` - 
     * Contains code that is used to analyze data gathered from pitching tracking system
     * Data_Merger.ipynb - merges pitch tracking csv files together
     * Initial_Analysis.ipynb - looks at initial pitch tracking data
     * Player_Reports.ipynb - notebook that can be converted to html file that displays the analysis for each pitcher
  * `Hitters_Analysis` - 
     * Contains final reports with and without code for prediction modeling using Blast sensors and Liberty League/NCAA data
  
The data folder contains the following subfolders:
  * Pitchers_Data - 
     * Contains merged data from all the bullpens and live pitching done in practices from Janurary 2020 to March 2020.
     * feb_15_merged_data_final.csv - pitcher's data merged from beginning of spring semester to Feb. 15
     * feb_29_merged_data.csv - pitcher's data merged from Feb. 15 to Feb. 29
  * Hitters_Data - 
     * Contains statistics to analyze data collected from Blast Motion sensors, Liberty League and NCAA website

### Explanation of Code
***
To run the Player_Reports.ipynb notebook and turn it into an html page use the command below
jupyter nbconvert --to html Player_Reports.ipynb --TemplateExporter.exclude_input=True

To run the "Ronald Michaels - Baseball Analytics Final Report - With Code.Rmd" file, please upload into RStudio (free online 
download), download the .csv files from the "data" folder, and update the file paths to properly read the data.


### TODO's
***
* Update pitch tracking website code so that the data saves to the server rather than locally as a csv file.
* Integrate the pitcher's analysis notebook into the website as well (most likely as a separate page, but would be good to have on the server)
* Discuss with coaches what more they want in the pitcher's analysis notebook
* Improve layout of pitch tracking website 





