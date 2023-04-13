# Project 3 - Alternative Energy Sources for Vehicles across the United States
### UC Davis Data and Analytics Bootcamp 

### Team Members: Chris Chaney, Justin Dean, Katherine Winder, Madeline Gutieruiz, and Riley Unverferth

http://127.0.0.1:5501/JavaScript_Library/JavaScript_Library.html

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

The plotly map displays the locations of available alternative fueling stations across the U.S. in years the 2012, 2014, 2021, and the growth between these years.

This graph represents the growth rate of EV stations in the US from 2012-2021. When the plots are toggled over we can see the growth rate percentages, and the size of the points represents the amount of EV stations in each state. For example, North Dakota is represented by a small dot, but has the largest growth rate in the country over the 9 year period.
[image]

## Conclusion
There has been a lot of growth in the amount of alternative fueling stations throughout the United States from 2012 to 2021. All 50 states do have alternative fueling stations. The highest concentration of charging stations is in California, which went from 1,421 stations in 2012 to 14,963 in 2021, however California also has the most electric vehicles per capita. There more public charging stations than private, however we were not able to visualize where the majority of private versus public stations are located. 

## Citation
Alternative fuels and advanced vehicles. Alternative Fuels Data Center: Alternative Fuels and Advanced Vehicles. (n.d.). Retrieved April 6, 2023, from https://afdc.energy.gov/fuels/ 
