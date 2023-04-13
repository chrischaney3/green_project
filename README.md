# Project 3 - Alternative Energy Sources for Vehicles across the United States
### UC Davis Data and Analytics Bootcamp 

### Team Members: Chris Chaney, Justin Dean, Katherine Winder, Madeline Gutieruiz, and Riley Unverferth

([http://127.0.0.1:5501/JavaScript_Library/JavaScript_Library.html])

## Project Description
More than a dozen alternative fuels are in production or under development for use in alternative fuel vehicles and advanced technology vehicles. Government and private-sector fleets are the primary users for most of these fuels and vehicles, but individual consumers are increasingly interested in them. Using alternative fuels including electricity and advanced vehicles instead of conventional fuels and vehicles helps the United States conserve fuel and lower vehicle emissions. (AFDC, 2023)

This project will be looking at alternative fueling stations for vehicles throughout the United States. We will be diving into three different datasets to visualize these concepts, two from the Department of Energy and one from the U.S. Census. We will be mapping the fueling stations throughout the United States during 2021, looking at consumer use for alternative fuels per capita, and determining which states are alternative fuel friendly. 

## Data Used
### Original Data Sources

- Alternative Fueling Stations: https://catalog.data.gov/dataset/alternative-fueling-station-locations-422f2 
- Renewable and Alternative Fuels Data and statistics: https://catalog.data.gov/dataset/renewable-and-alternative-fuels-data-and-statistics 
- Census Data: https://www.statsamerica.org/sip/rank_list.aspx?rank_label=pop1&ct=S18

### Cleaned Data


## Research Questions
- What states have alternative fueling stations?
- What type of fueling stations are the most common within these states? 
- How many of these stations are private vs public?
- What are the charging stations per capita
- Where is the highest concentration of charging stations?

## Analysis
The Flask Powered API used a sqlite database created from a csv file for each year analyzed (2012, 2014, 2021) to:
- Return a JSON representation of the different fueling station types
- Return a JSON representation of the station names
- Query the cities in each state that have electric vehicle charging stations
- Get a count of all the charging stations in each state
- Query the accessibility of each station by counting the amount of public, private, planned, and univailable charging stations

The plotly heatmap displays the locations of available alternative fueling stations across the U.S. in the years 2012, 2014, 2021 shown in the top right corner legend, and the growth between these years.

<img width="1252" alt="Screenshot 2023-04-13 at 12 32 34 PM" src="https://user-images.githubusercontent.com/112666732/231864352-e8648ff4-02a8-4bad-84a7-c3af5849c464.png">

<img width="1275" alt="Screenshot 2023-04-13 at 12 30 05 PM" src="https://user-images.githubusercontent.com/112666732/231863927-f5fd16b3-df89-4fc4-9866-9009d8f78621.png">

<img width="1291" alt="Screenshot 2023-04-13 at 12 30 52 PM" src="https://user-images.githubusercontent.com/112666732/231864071-91fff075-8e4e-4700-9059-3f56f1b2817e.png">
These maps visualize the extreme growth of electric vehicle charging stations specifically in the larger metropolitan areas of the country.


This graph represents the growth rate of EV stations in the US from 2012-2021. When the plots are toggled over we can see the growth rate percentages, and the size of the points represents the amount of EV stations in each state. For example, North Dakota is represented by a small dot, but has the largest growth rate in the country over the 9 year period.
[image]

This graph represents the US population ordered by state which was included to visualize the difference in population across the US.
![Screenshot 2023-04-12 at 11 09 52 PM](https://user-images.githubusercontent.com/112666732/231668955-893aeecf-43d1-40f5-bc0d-f3fa0eaf5b95.png)
This representation includes registered EV owners in each state along with the number of stations to show the disparity between vehicles and stations. 
![Screenshot 2023-04-12 at 11 10 24 PM](https://user-images.githubusercontent.com/112666732/231669042-444cf747-0c0c-42a6-a006-9e393ce17cbf.png)
Here we narrow down the data to the states with the top 10 most electric vehicle owners.
![Screenshot 2023-04-12 at 11 10 50 PM](https://user-images.githubusercontent.com/112666732/231669126-eb53b13e-da80-4286-a251-773c672e69cc.png)

The pie charts visualize the different types of alternative fueling stations over the 9 year period that we analyzed. The growth of electric vehicle charging stations over all types of alternative fueling stations became the vast majority between 2012 and 2021.
<img width="704" alt="Screenshot 2023-04-13 at 12 37 16 PM" src="https://user-images.githubusercontent.com/112666732/231865280-377066d7-4fd5-49b3-bd63-7002cd9fba54.png">
<img width="703" alt="Screenshot 2023-04-13 at 12 40 32 PM" src="https://user-images.githubusercontent.com/112666732/231865898-fddf4c03-477d-4f01-bc8c-bd8a8969272a.png">
<img width="701" alt="Screenshot 2023-04-13 at 12 40 55 PM" src="https://user-images.githubusercontent.com/112666732/231865966-7d93825b-1783-496d-948d-33c4c859df9e.png">


## Conclusion
There has been a lot of growth in the amount of alternative fueling stations throughout the United States from 2012 to 2021, with electric vehicles growing the most in popularity among consumers. All 50 states do have alternative fueling stations, but most reside in larger metropolitan areas. The highest concentration of charging stations is in California, which went from 1,421 stations in 2012 to 14,963 in 2021, however California also has the most electric vehicles per capita. Since so many California residents drive electric vehicles, there is a significantly larger ratio of stations to vehicles than in states where far less people choose alternative fueling options. There more public charging stations than private, however we were not able to visualize where the majority of private versus public stations are located. 

## Citation
Alternative fuels and advanced vehicles. Alternative Fuels Data Center: Alternative Fuels and Advanced Vehicles. (n.d.). Retrieved April 6, 2023, from https://afdc.energy.gov/fuels/ 
